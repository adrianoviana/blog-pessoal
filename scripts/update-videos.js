// Atualiza videos.json com os vídeos mais recentes do canal do YouTube,
// sem chave de API. Tenta, nesta ordem: o feed RSS do canal, o feed da
// playlist de uploads e, se o YouTube devolver 404 nos dois (acontece),
// a própria aba "Vídeos" do canal. Roda no GitHub Actions
// (.github/workflows/youtube.yml) e também à mão: `npm run videos`.
//
// Shorts ficam de fora: na home só entram os vídeos longos.
// O arquivo só muda quando entra, sai ou muda o título de um vídeo,
// então o workflow não gera commit à toa.

const fs = require('fs');
const path = require('path');

const HANDLE = '@adriano_viana';
const DEFAULT_CHANNEL_ID = 'UCPl-Y1ypgzViQQDxeI26fMQ'; // descoberto pela página do canal
const MAX_VIDEOS = 12;
const OUT = path.join(__dirname, '..', 'videos.json');
// User-Agent de navegador: com UA de robô o YouTube às vezes devolve outra página.
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36';

function readCurrent() {
  try {
    return JSON.parse(fs.readFileSync(OUT, 'utf8'));
  } catch {
    return {};
  }
}

const wait = ms => new Promise(r => setTimeout(r, ms));

async function get(url, { tries = 3, lang = 'pt-BR,pt;q=0.9' } = {}) {
  let last;
  for (let i = 0; i < tries; i++) {
    if (i) await wait(2000 * 2 ** (i - 1));
    try {
      const res = await fetch(url, { headers: { 'User-Agent': UA, 'Accept-Language': lang } });
      if (res.ok) return res.text();
      last = new Error(`${url} respondeu ${res.status}`);
    } catch (err) {
      last = err;
    }
  }
  throw last;
}

// O ID do canal (UC...) vem da variável YOUTUBE_CHANNEL_ID, do videos.json
// ou, na primeira vez, da própria página do canal.
async function resolveChannelId(current) {
  const fromEnv = (process.env.YOUTUBE_CHANNEL_ID || '').trim();
  if (fromEnv) return fromEnv;
  if (current.channelId) return current.channelId;
  if (DEFAULT_CHANNEL_ID) return DEFAULT_CHANNEL_ID;

  const html = await get(`https://www.youtube.com/${HANDLE}`);
  const m = html.match(/feeds\/videos\.xml\?channel_id=(UC[\w-]{22})/)
    || html.match(/"externalId":"(UC[\w-]{22})"/)
    || html.match(/<meta itemprop="identifier" content="(UC[\w-]{22})"/)
    || html.match(/"channelId":"(UC[\w-]{22})"/);
  if (!m) throw new Error(`Não achei o ID do canal em youtube.com/${HANDLE}. Defina YOUTUBE_CHANNEL_ID.`);
  return m[1];
}

function decode(s) {
  return s
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)))
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .trim();
}

const tag = (xml, name) => {
  const m = xml.match(new RegExp(`<${name}[^>]*>([\\s\\S]*?)</${name}>`));
  return m ? decode(m[1]) : '';
};

function parseFeed(xml) {
  return [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)].map(([, e]) => {
    const link = (e.match(/<link[^>]*href="([^"]+)"/) || [])[1] || '';
    return {
      id: tag(e, 'yt:videoId'),
      title: tag(e, 'title'),
      published: tag(e, 'published').slice(0, 10),
      short: link.includes('/shorts/')
    };
  }).filter(v => v.id && v.title);
}

// "2 days ago", "Streamed 3 weeks ago" -> data aproximada AAAA-MM-DD.
function approxDate(text, now = new Date()) {
  const m = String(text || '').match(/(\d+)\s+(second|minute|hour|day|week|month|year)s?\s+ago/i);
  if (!m) return null;
  const n = Number(m[1]);
  const days = { second: 0, minute: 0, hour: n / 24, day: n, week: n * 7, month: n * 30, year: n * 365 }[m[2].toLowerCase()];
  const d = new Date(now.getTime() - (m[2].match(/second|minute/i) ? 0 : days) * 864e5);
  return d.toISOString().slice(0, 10);
}

const textOf = t => !t ? '' : (t.simpleText || (t.runs || []).map(r => r.text).join('') || t.content || '');

// Lê o ytInitialData da aba /videos (só vídeos longos; Shorts ficam
// em outra aba). Cobre o formato antigo (videoRenderer) e o novo
// (lockupViewModel).
function parseVideosPage(html) {
  const m = html.match(/var ytInitialData\s*=\s*(\{[\s\S]*?\});\s*<\/script>/);
  if (!m) throw new Error('A aba Vídeos veio sem ytInitialData.');
  const data = JSON.parse(m[1]);
  const out = [];
  const seen = new Set();
  (function walk(node) {
    if (!node || typeof node !== 'object') return;
    if (Array.isArray(node)) return node.forEach(walk);
    const vr = node.videoRenderer;
    if (vr && vr.videoId && !seen.has(vr.videoId)) {
      seen.add(vr.videoId);
      out.push({ id: vr.videoId, title: textOf(vr.title), ago: textOf(vr.publishedTimeText) });
    }
    const lv = node.lockupViewModel;
    if (lv && lv.contentId && /VIDEO/.test(lv.contentType || '') && !seen.has(lv.contentId)) {
      seen.add(lv.contentId);
      const meta = lv.metadata && lv.metadata.lockupMetadataViewModel;
      const rows = JSON.stringify((meta && meta.metadata) || {});
      const ago = (rows.match(/"content":"([^"]*ago)"/) || [])[1] || '';
      out.push({ id: lv.contentId, title: textOf(meta && meta.title), ago });
    }
    Object.values(node).forEach(walk);
  })(data);
  return out.filter(v => v.title);
}

async function fetchVideos(channelId) {
  const feeds = [
    `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`,
    `https://www.youtube.com/feeds/videos.xml?playlist_id=UU${channelId.slice(2)}`
  ];
  for (const url of feeds) {
    try {
      const list = parseFeed(await get(url)).filter(v => !v.short);
      if (list.length) {
        console.log(`Fonte: ${url}`);
        return list.map(({ id, title, published }) => ({ id, title, published, exact: true }));
      }
    } catch (err) {
      console.warn(`Falhou: ${err.message}`);
    }
  }
  const url = `https://www.youtube.com/channel/${channelId}/videos?hl=en&gl=US`;
  const list = parseVideosPage(await get(url, { lang: 'en-US,en;q=0.9' }));
  console.log(`Fonte: ${url}`);
  return list.map(({ id, title, ago }) => ({ id, title, published: approxDate(ago) }));
}

async function main() {
  const current = readCurrent();
  const channelId = await resolveChannelId(current);
  const known = new Map((current.videos || []).map(v => [v.id, v]));

  const videos = (await fetchVideos(channelId))
    .slice(0, MAX_VIDEOS)
    // Data do feed é exata; a da aba Vídeos é aproximada, então uma data
    // já gravada vale mais que ela.
    .map(({ exact, ...v }) => ({
      ...v,
      published: (exact ? v.published : (known.get(v.id) || {}).published || v.published) || null
    }));

  // Feed vazio quase sempre é erro do lado do YouTube: mantém o arquivo.
  if (!videos.length) throw new Error('O YouTube não devolveu vídeos; videos.json não foi alterado.');

  const next = { channelId, videos };
  const text = JSON.stringify(next, null, 2) + '\n';
  if (fs.existsSync(OUT) && fs.readFileSync(OUT, 'utf8') === text) {
    console.log('videos.json já está atualizado.');
    return;
  }
  fs.writeFileSync(OUT, text);
  console.log(`videos.json atualizado: ${videos.length} vídeo(s). Mais recente: ${videos[0].title}`);
}

main().catch(err => {
  console.error(err.message || err);
  process.exit(1);
});
