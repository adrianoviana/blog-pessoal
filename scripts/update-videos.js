// Atualiza videos.json com os vídeos mais recentes do canal do YouTube,
// a partir do feed RSS público (sem chave de API). Roda no GitHub Actions
// (.github/workflows/youtube.yml) e também à mão: `npm run videos`.
//
// Shorts ficam de fora: na home só entram os vídeos longos.
// O arquivo só muda quando entra, sai ou muda o título de um vídeo,
// então o workflow não gera commit à toa.

const fs = require('fs');
const path = require('path');

const HANDLE = '@adriano_viana';
const MAX_VIDEOS = 12;
const OUT = path.join(__dirname, '..', 'videos.json');
const UA = 'Mozilla/5.0 (compatible; blog-pessoal-video-sync/1.0)';

function readCurrent() {
  try {
    return JSON.parse(fs.readFileSync(OUT, 'utf8'));
  } catch {
    return {};
  }
}

async function get(url) {
  const res = await fetch(url, { headers: { 'User-Agent': UA, 'Accept-Language': 'pt-BR,pt;q=0.9' } });
  if (!res.ok) throw new Error(`${url} respondeu ${res.status}`);
  return res.text();
}

// O ID do canal (UC...) vem da variável YOUTUBE_CHANNEL_ID, do videos.json
// ou, na primeira vez, da própria página do canal.
async function resolveChannelId(current) {
  const fromEnv = (process.env.YOUTUBE_CHANNEL_ID || '').trim();
  if (fromEnv) return fromEnv;
  if (current.channelId) return current.channelId;

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

async function main() {
  const current = readCurrent();
  const channelId = await resolveChannelId(current);
  const xml = await get(`https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`);

  const videos = parseFeed(xml)
    .filter(v => !v.short)
    .slice(0, MAX_VIDEOS)
    .map(({ id, title, published }) => ({ id, title, published }));

  // Feed vazio quase sempre é erro do lado do YouTube: mantém o arquivo.
  if (!videos.length) throw new Error('O feed veio sem vídeos; videos.json não foi alterado.');

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
