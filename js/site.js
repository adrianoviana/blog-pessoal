// Números de prova social: atualize aqui e em nenhum outro lugar.
const SITE = {
  newsletterSubscribers: 292,
  youtubeSubscribers: 5407,
  newsletterUrl: 'https://adriano-newsletter.beehiiv.com/',
  youtubeUrl: 'https://www.youtube.com/@adriano_viana',
  xUrl: 'https://x.com/adriano_viana'
};

const fmt = n => n.toLocaleString('pt-BR');

function fillCounts() {
  document.querySelectorAll('[data-count="newsletter"]').forEach(el => el.textContent = fmt(SITE.newsletterSubscribers));
  document.querySelectorAll('[data-count="youtube"]').forEach(el => el.textContent = fmt(SITE.youtubeSubscribers));
}

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
        title: 'O script que orquestra até 1.000 agentes sozinho',
        url: 'https://adriano-newsletter.beehiiv.com/p/o-script-que-orquestra-at-1-000-agentes-sozinho',
        kind: 'artigo',
        minutes: 4
      }
    ]
  }
];

function renderTrilha() {
  const root = document.querySelector('#trilha-root');
  if (!root) return;

  root.innerHTML = TRAIL.map(level => {
    const total = level.items.reduce((s, p) => s + (p.minutes || 0), 0);
    return `
      <div class="trilha-level">
        <div class="trilha-level-head">
          <span class="mono">Nível ${level.id}</span>
          <h3>${level.name}</h3>
          <span class="mono">${total} min</span>
        </div>
        <p class="mono">${level.blurb}</p>
        <ol class="trilha-list">
          ${level.items.map((p, i) => `
            <li class="trilha-item">
              <span class="mono">${String(i + 1).padStart(2, '0')}</span>
              <a href="${p.url}" target="_blank" rel="noopener noreferrer">${p.title}</a>
              <span class="kind">${p.kind} · ${p.minutes} min</span>
            </li>`).join('')}
        </ol>
      </div>`;
  }).join('');
}

// Menu mobile
function initMenu() {
  const btn = document.querySelector('.mobile-menu-toggle');
  const menu = document.querySelector('.nav-menu');
  if (!btn || !menu) return;
  btn.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(open));
  });
}

document.addEventListener('DOMContentLoaded', () => {
  fillCounts();
  renderTrilha();
  initMenu();
});
