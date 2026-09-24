// Números de prova social: atualize aqui e em nenhum outro lugar.
const SITE = {
  newsletterSubscribers: 296,
  youtubeSubscribers: 5407,
  newsletterUrl: 'https://adriano-newsletter.beehiiv.com/',
  youtubeUrl: 'https://www.youtube.com/@adriano_viana',
  xUrl: 'https://x.com/adriano_viana'
};

// Vídeos da home: os 3 mais recentes do canal. Troque o id e o título
// quando sair vídeo novo (o primeiro da lista é o mais recente).
const VIDEOS = [
  { id: 's33_4V2ItDc', title: 'Claude Cowork rápido e econômico' },
  { id: 'lww7iuBLMsY', title: '5 automações com o Claude Cowork' },
  { id: 'nwzk87tCxEA', title: '3 workflows no Gemini Notebook' }
];

const fmt = n => n.toLocaleString('pt-BR');

// Trilha para quem está iniciando: curadoria das edições da newsletter,
// do mais básico ao mais avançado. Ordem pensada para iniciantes:
// mentalidade -> primeira tarefa sem alucinar -> prompts que prestam -> automação.
const TRAIL = [
  {
    id: 1,
    name: 'Comece pelo jeito certo',
    blurb: 'Antes da ferramenta: como estudar sem travar e escolher sem hype.',
    items: [
      {
        title: 'Como usar IA de verdade no trabalho (e por que não é sobre qual ferramenta escolher)',
        url: 'https://adriano-newsletter.beehiiv.com/p/como-usar-ia-de-verdade-no-trabalho-e-por-que-n-o-sobre-qual-ferramenta-escolher',
        kind: 'artigo · vídeo',
        minutes: 6
      },
      {
        title: 'Você não precisa de mais um review de ferramenta de IA',
        url: 'https://adriano-newsletter.beehiiv.com/p/voc-n-o-precisa-de-mais-um-review-de-ferramenta-de-ia',
        kind: 'artigo',
        minutes: 6
      },
      {
        title: 'Minha esposa criou um app em 20 minutos sem saber programar',
        url: 'https://adriano-newsletter.beehiiv.com/p/minha-esposa-criou-um-app-em-20-minutos-sem-saber-programar-a-instru-o-que-ela-deu',
        kind: 'artigo · vídeo',
        minutes: 9
      }
    ]
  },
  {
    id: 2,
    name: 'Sua primeira tarefa real, sem invenção',
    blurb: 'Use seus documentos como fonte e receba resposta com citação.',
    items: [
      {
        title: 'Tutorial Completo: Gemini Notebook — Fontes, Chat e Studio',
        url: 'https://adriano-newsletter.beehiiv.com/p/tutorial-completo-gemini-notebook-ex-notebooklm-fontes-chat-e-studio',
        kind: 'artigo · vídeo',
        minutes: 4
      },
      {
        title: 'O método que combina duas IAs pra nunca mais construir em cima de invenção',
        url: 'https://adriano-newsletter.beehiiv.com/p/o-m-todo-que-combina-duas-ias-pra-nunca-mais-construir-em-cima-de-inven-o',
        kind: 'artigo · vídeo',
        minutes: 2
      },
      {
        title: 'Sua ata vira nota morta em duas semanas',
        url: 'https://adriano-newsletter.beehiiv.com/p/sua-ata-vira-nota-morta-em-duas-semanas',
        kind: 'artigo · vídeo',
        minutes: 6
      }
    ]
  },
  {
    id: 3,
    name: 'Onde isso quebra',
    blurb: 'Por que o prompt gigante piora e como corrigir a causa.',
    items: [
      {
        title: 'Delete seus prompts: sua IA pode estar melhor sem 80% das regras',
        url: 'https://adriano-newsletter.beehiiv.com/p/delete-seus-prompts-sua-ia-pode-estar-melhor-sem-80-das-regras',
        kind: 'artigo · vídeo',
        minutes: 4
      },
      {
        title: 'Os 5 prompts que cortaram metade do meu retrabalho',
        url: 'https://adriano-newsletter.beehiiv.com/p/os-5-prompts-que-cortaram-metade-do-meu-retrabalho-no-claude-code',
        kind: 'artigo · vídeo',
        minutes: 6
      }
    ]
  },
  {
    id: 4,
    name: 'Para quem quer ir além',
    blurb: 'Do arquivo pronto à rotina que roda sozinha.',
    items: [
      {
        title: 'Tutorial Completo: como usar o Claude Cowork do jeito certo em 6 passos',
        url: 'https://adriano-newsletter.beehiiv.com/p/tutorial-completo-como-usar-o-claude-cowork-do-jeito-certo-em-6-passos',
        kind: 'artigo · vídeo',
        minutes: 5
      },
      {
        title: '10 horas por semana de volta',
        url: 'https://adriano-newsletter.beehiiv.com/p/5-tarefas-que-eu-parei-de-fazer-na-m-o',
        kind: 'artigo · vídeo',
        minutes: 8
      },
      {
        title: 'O script que orquestra até 1.000 agentes sozinho',
        url: 'https://adriano-newsletter.beehiiv.com/p/o-script-que-orquestra-at-1-000-agentes-sozinho',
        kind: 'artigo',
        minutes: 4
      },
      {
        title: 'Seu agente começa rápido e termina lento',
        url: 'https://adriano-newsletter.beehiiv.com/p/seu-agente-come-a-r-pido-e-termina-lento',
        kind: 'artigo · vídeo',
        minutes: 8
      }
    ]
  }
];

const trailItems = TRAIL.reduce((s, l) => s + l.items.length, 0);

function fillCounts() {
  document.querySelectorAll('[data-count="newsletter"]').forEach(el => el.textContent = fmt(SITE.newsletterSubscribers));
  document.querySelectorAll('[data-count="youtube"]').forEach(el => el.textContent = fmt(SITE.youtubeSubscribers));
  document.querySelectorAll('[data-count="trilha"]').forEach(el => el.textContent = trailItems);
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
}

function renderTrilha() {
  const root = document.querySelector('#trilha-root');
  if (!root) return;

  root.innerHTML = `<div class="trilha-grid">${TRAIL.map(level => {
    const total = level.items.reduce((s, p) => s + (p.minutes || 0), 0);
    return `
      <div class="trilha-level">
        <div class="trilha-level-head">
          <span class="mono level-num">Nível ${level.id}</span>
          ${level.id === 1 ? '<span class="start-here">Comece aqui</span>' : ''}
          <span class="mono">${level.items.length} edições · ${total} min</span>
        </div>
        <h3>${level.name}</h3>
        <p class="level-blurb">${level.blurb}</p>
        <ol class="trilha-list">
          ${level.items.map((p, i) => `
            <li class="trilha-item">
              <span class="mono">${String(i + 1).padStart(2, '0')}</span>
              <a href="${p.url}" target="_blank" rel="noopener noreferrer" data-track="trilha_click">${p.title}</a>
              <span class="kind">${p.kind} · ${p.minutes} min</span>
            </li>`).join('')}
        </ol>
      </div>`;
  }).join('')}</div>`;
}

// Vídeos com "facade": só a miniatura carrega; o player do YouTube
// entra no clique. Deixa a home bem mais leve no celular.
function renderVideos() {
  const root = document.querySelector('#videos-root');
  if (!root) return;

  root.innerHTML = VIDEOS.map(v => `
    <figure class="video-card">
      <div class="video-embed">
        <button class="video-lite" type="button" data-id="${v.id}" aria-label="Assistir: ${v.title}">
          <img src="https://i.ytimg.com/vi/${v.id}/hqdefault.jpg" alt="" loading="lazy" width="480" height="360">
          <span class="play" aria-hidden="true"></span>
        </button>
      </div>
      <figcaption>${v.title}</figcaption>
    </figure>`).join('');

  root.addEventListener('click', e => {
    const btn = e.target.closest('.video-lite');
    if (!btn) return;
    const id = btn.dataset.id;
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;
    iframe.title = btn.getAttribute('aria-label');
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;
    btn.replaceWith(iframe);
    track('video_play', { video_id: id });
  });
}

// Ícones das redes: <span data-icon="youtube"></span> vira SVG.
const ICONS = {
  youtube: 'M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z',
  linkedin: 'M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z',
  x: 'M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.65l-5.21-6.82-5.97 6.82H1.68l7.73-8.84L1.25 2.25h6.83l4.71 6.23zm-1.16 17.52h1.83L7.08 4.13H5.12z',
  mail: 'M2 4h20a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 2v.4l10 6.3 10-6.3V6H2zm20 2.8-9.5 6a1 1 0 0 1-1 0L2 8.8V18h20V8.8z'
};

function renderIcons() {
  document.querySelectorAll('[data-icon]').forEach(el => {
    const d = ICONS[el.dataset.icon];
    if (!d) return;
    el.outerHTML = `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="${d}"/></svg>`;
  });
}

// Métricas: cliques em CTAs (data-track) e em links externos viram
// eventos no Google Analytics. Veja em Relatórios → Engajamento → Eventos.
function track(name, params) {
  if (typeof window.gtag === 'function') window.gtag('event', name, params || {});
}

function initTracking() {
  document.addEventListener('click', e => {
    const a = e.target.closest('a');
    if (!a) return;
    const params = { link_url: a.href, link_text: a.textContent.trim().slice(0, 80) };
    if (a.dataset.track) {
      track(a.dataset.track, params);
    } else if (a.hostname && a.hostname !== location.hostname) {
      track('click_outbound', params);
    }
  });
}

// Menu mobile
function initMenu() {
  const btn = document.querySelector('.mobile-menu-toggle');
  const menu = document.querySelector('.nav-menu');
  if (!btn || !menu) return;
  const set = open => {
    menu.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', String(open));
    btn.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  };
  btn.addEventListener('click', () => set(!menu.classList.contains('open')));
  menu.addEventListener('click', e => { if (e.target.closest('a')) set(false); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') set(false); });
}

// Barra fixa de CTA no celular: aparece depois que o topo da página
// sai da tela e some quando algum formulário ou oferta está visível.
function initStickyCta() {
  const bar = document.querySelector('.sticky-cta');
  const hero = document.querySelector('main > section');
  if (!bar || !hero || !('IntersectionObserver' in window)) return;
  document.body.classList.add('has-sticky-cta');

  const targets = [hero, ...document.querySelectorAll('.signup, .final-cta')];
  const visible = new Set();
  let passedHero = false;

  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) visible.add(en.target); else visible.delete(en.target);
      if (en.target === hero) passedHero = !en.isIntersecting && en.boundingClientRect.top < 0;
    });
    bar.classList.toggle('visible', passedHero && visible.size === 0);
  });
  targets.forEach(t => io.observe(t));
}

document.addEventListener('DOMContentLoaded', () => {
  fillCounts();
  renderTrilha();
  renderVideos();
  renderIcons();
  initMenu();
  initTracking();
  initStickyCta();
});
