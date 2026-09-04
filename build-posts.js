const fs = require('fs');
const path = require('path');
const { marked } = require('marked');
const matter = require('gray-matter');

// Configurar marked para syntax highlighting
marked.setOptions({
  highlight: function(code, lang) {
    return code;
  },
  breaks: true,
  gfm: true
});

// Diretórios
const POSTS_DIR = path.join(__dirname, 'posts');
const OUTPUT_DIR = path.join(__dirname, 'blog');

// Criar diretório de output se não existir
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

const SITE = {
  newsletterSubscribers: 292,
  youtubeSubscribers: 5407
};
const fmt = n => n.toLocaleString('pt-BR');

function getPostTemplate(post) {
  const levelLine = post.level ? `<span>Nível ${post.level}</span>` : '';
  const videoBlock = post.video ? `
      <div class="video-embed" style="margin: var(--sp-3) 0;">
        <iframe src="https://www.youtube.com/embed/${post.video}" title="${post.title}" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>
      </div>` : '';

  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="${post.excerpt}">
  <meta name="author" content="Adriano Viana">
  <meta name="keywords" content="${post.tags.join(', ')}">
  <meta property="og:type" content="article">
  <meta property="og:url" content="https://www.adrianoviana.com.br/blog/${post.slug}.html">
  <meta property="og:title" content="${post.title}">
  <meta property="og:description" content="${post.excerpt}">
  <meta property="og:image" content="https://www.adrianoviana.com.br${post.image}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${post.title}">
  <meta name="twitter:description" content="${post.excerpt}">
  <meta name="twitter:image" content="https://www.adrianoviana.com.br${post.image}">
  <title>${post.title} — Adriano Viana</title>
  <link rel="icon" type="image/png" href="/assets/images/favicon.png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700&family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/css/normalize.css?v=4">
  <link rel="stylesheet" href="/css/main.css?v=4">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism.min.css">
  <script async src="https://subscribe-forms.beehiiv.com/embed.js"></script>
</head>
<body>
  <header class="site-header">
    <nav class="nav-container">
      <div class="nav-brand"><a href="/">@adriano_viana</a></div>
      <ul class="nav-menu">
        <li><a href="/">Início</a></li>
        <li><a href="/#trilha">Trilha</a></li>
        <li><a href="/kit.html">Kit grátis</a></li>
        <li><a href="/about.html">Sobre</a></li>
        <li><a href="https://www.youtube.com/@adriano_viana" target="_blank" rel="noopener noreferrer">YouTube</a></li>
      </ul>
      <button class="mobile-menu-toggle" aria-label="Abrir menu" aria-expanded="false"><span></span><span></span><span></span></button>
    </nav>
  </header>

  <main class="blog-post">
    <section class="post-header">
      <div class="container">
        <div class="post-meta">
          <time datetime="${post.date}">${formatDate(post.date)}</time>
          <span>${post.minutes} min</span>
          ${levelLine}
        </div>
        <h1>${post.title}</h1>
        <div class="post-tags">${post.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}</div>
      </div>
    </section>

    <section class="post-content">
      <div class="container">
        ${videoBlock}
        ${post.content}
      </div>
    </section>

    <section class="post-footer">
      <div class="container">
        <div class="boilerplate">
          <p>Este texto chegou até você porque <strong>${fmt(SITE.newsletterSubscribers)} assinantes</strong> e <strong>${fmt(SITE.youtubeSubscribers)} inscritos no canal</strong> decidiram aprender IA na prática, e mandaram adiante.</p>
          <p>Se ajudou, encaminhe para um colega que ainda faz isso na mão. É assim que a Behind the Prompt cresce.</p>
          <p>Novo por aqui? Assine abaixo e pegue o <a href="/kit.html">Kit inicial de skills</a> no e-mail de boas-vindas. E me acompanhe no <a href="https://x.com/adriano_viana" target="_blank" rel="noopener noreferrer">X</a> e no <a href="https://www.youtube.com/@adriano_viana" target="_blank" rel="noopener noreferrer">YouTube</a>.</p>
        </div>
        <div class="newsletter-form-wrapper" style="margin-top: var(--sp-3)">
          <iframe src="https://subscribe-forms.beehiiv.com/5451f253-f9a8-4521-a2ca-dd4df40e6e7f" class="beehiiv-embed" data-test-id="beehiiv-embed" frameborder="0" scrolling="no" title="Assinar a newsletter Behind the Prompt"></iframe>
        </div>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="footer-container">
      <span class="mono">@adriano_viana</span>
      <div class="footer-links">
        <a href="https://www.youtube.com/@adriano_viana" target="_blank" rel="noopener noreferrer">YouTube</a>
        <a href="https://x.com/adriano_viana" target="_blank" rel="noopener noreferrer">X</a>
        <a href="https://www.linkedin.com/in/adrianoviana/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://adriano-newsletter.beehiiv.com/" target="_blank" rel="noopener noreferrer">Newsletter</a>
      </div>
    </div>
  </footer>

  <script src="/js/site.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js"></script>
</body>
</html>`;
}

// Formatar data
function formatDate(dateString) {
  // Adiciona 'T00:00:00' para forçar interpretação como horário local, não UTC
  const date = new Date(dateString + 'T00:00:00');
  return date.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });
}

// Estimar tempo de leitura
function estimateReadTime(content) {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

// Extrair título do conteúdo markdown
function extractTitleFromContent(content) {
  const lines = content.split('\n');
  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith('# ')) {
      return trimmed.substring(2).trim();
    }
  }
  return 'Sem título';
}

// Extrair excerpt do conteúdo markdown
function extractExcerptFromContent(content) {
  // Remove o título (primeiro h1)
  const withoutTitle = content.replace(/^#\s+.+$/m, '').trim();

  // Pega o primeiro parágrafo significativo (ignora linhas vazias)
  const lines = withoutTitle.split('\n');
  for (const line of lines) {
    const trimmed = line.trim();
    // Ignora linhas vazias, headers, e markdown especial
    if (trimmed && !trimmed.startsWith('#') && !trimmed.startsWith('---') && !trimmed.startsWith('*')) {
      // Remove markdown bold/italic
      const cleaned = trimmed.replace(/\*\*/g, '').replace(/\*/g, '');
      // Limita a 200 caracteres
      if (cleaned.length > 200) {
        return cleaned.substring(0, 197) + '...';
      }
      return cleaned;
    }
  }
  return 'Clique para ler mais...';
}

// Processar posts
function buildPosts() {
  const posts = [];
  const files = fs.readdirSync(POSTS_DIR).filter(file => file.endsWith('.md'));

  files.forEach(filename => {
    const filepath = path.join(POSTS_DIR, filename);
    const fileContent = fs.readFileSync(filepath, 'utf8');
    const { data, content } = matter(fileContent);

    const slug = filename.replace('.md', '');

    // Remover o primeiro H1 do conteúdo para evitar duplicação
    const contentWithoutH1 = content.replace(/^#\s+.+$/m, '').trim();
    const htmlContent = marked(contentWithoutH1);
    const htmlWithCallout = htmlContent.replace(
      /<blockquote>\s*<p><strong>Onde isso quebra\.?<\/strong>/g,
      '<blockquote class="quebra"><p><strong>Onde isso quebra.</strong>'
    );

    // Extrair title e excerpt do conteúdo se não existirem no frontmatter
    const title = data.title || extractTitleFromContent(content);
    const excerpt = data.excerpt || extractExcerptFromContent(content);

    const post = {
      slug,
      title,
      date: data.date,
      excerpt,
      tags: data.tags || [],
      image: data.image || '/assets/images/default-post.jpg',
      level: data.level || null,      // 1–4: posição na trilha da home
      order: data.order || null,      // ordem dentro do nível
      minutes: data.minutes || estimateReadTime(content),
      video: data.video || null,      // ID do YouTube, se o post for um vídeo
      content: htmlWithCallout
    };

    posts.push(post);

    // Gerar arquivo HTML do post
    const html = getPostTemplate(post);
    fs.writeFileSync(path.join(OUTPUT_DIR, `${slug}.html`), html);
    console.log(`✓ Generated: ${slug}.html`);
  });

  // Ordenar posts por data (mais recente primeiro)
  posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  // Gerar arquivo JSON com lista de posts
  fs.writeFileSync(
    path.join(__dirname, 'posts.json'),
    JSON.stringify(posts, null, 2)
  );
  console.log(`✓ Generated: posts.json with ${posts.length} post(s)`);

  return posts;
}

// Executar
try {
  console.log('Building blog posts...\n');
  const posts = buildPosts();
  console.log(`\n✓ Build complete! Generated ${posts.length} post(s)`);
} catch (error) {
  console.error('Error building posts:', error);
  process.exit(1);
}
