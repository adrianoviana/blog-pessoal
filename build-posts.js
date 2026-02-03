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

// Template HTML para posts
function getPostTemplate(post) {
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
    <meta name="twitter:url" content="https://www.adrianoviana.com.br/blog/${post.slug}.html">
    <meta name="twitter:title" content="${post.title}">
    <meta name="twitter:description" content="${post.excerpt}">
    <meta name="twitter:image" content="https://www.adrianoviana.com.br${post.image}">

    <title>${post.title} - Adriano Viana</title>

    <link rel="icon" type="image/png" href="/assets/images/favicon.png">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&family=Droid+Serif:wght@400;700&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="/css/normalize.css?v=3">
    <link rel="stylesheet" href="/css/main.css?v=3">
    <link rel="stylesheet" href="/css/responsive.css?v=3">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism.min.css">

    <script async src="https://subscribe-forms.beehiiv.com/embed.js"></script>
</head>
<body>
    <header class="site-header">
        <nav class="nav-container">
            <div class="nav-brand">
                <a href="/">AV</a>
            </div>
            <ul class="nav-menu">
                <li><a href="/">Home</a></li>
                <li><a href="/blog.html" class="active">Blog</a></li>
                <li><a href="/about.html">Sobre</a></li>
                <li><a href="/#youtube">YouTube</a></li>
            </ul>
            <button class="mobile-menu-toggle" aria-label="Toggle menu" aria-expanded="false">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </nav>
    </header>

    <main class="blog-post">
        <section class="post-header">
            <div class="container">
                <div class="post-meta">
                    <time datetime="${post.date}">${formatDate(post.date)}</time>
                    <span class="post-read-time">${estimateReadTime(post.content)} min de leitura</span>
                </div>
                <h1>${post.title}</h1>
                <div class="post-tags">
                    ${post.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
        </section>

        <section class="post-content">
            <div class="container">
                ${post.content}
            </div>
        </section>

        <section class="post-footer">
            <div class="container">
                <div class="author-bio">
                    <img src="/assets/images/profile.jpg" alt="Adriano Viana" class="author-image">
                    <div class="author-info">
                        <h3>Adriano Viana</h3>
                        <p>Master Architect com mais de 20 anos de experiência. Especialista em IA Nativa e arquitetura de software.</p>
                        <div class="author-social">
                            <a href="https://www.linkedin.com/in/adrianoviana/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                            <a href="https://x.com/adriano_viana" target="_blank" rel="noopener noreferrer">X</a>
                            <a href="https://www.youtube.com/@adriano_viana" target="_blank" rel="noopener noreferrer">YouTube</a>
                        </div>
                    </div>
                </div>

                <div class="post-newsletter-cta">
                    <h3>Gostou do conteúdo?</h3>
                    <p>Receba novos posts diretamente no seu email</p>
                    <div class="newsletter-form-wrapper">
                        <iframe
                            src="https://subscribe-forms.beehiiv.com/5451f253-f9a8-4521-a2ca-dd4df40e6e7f"
                            class="beehiiv-embed"
                            data-test-id="beehiiv-embed"
                            frameborder="0"
                            scrolling="no"
                            style="width: 560px; height: 193px; margin: 0; border-radius: 0px 0px 0px 0px !important; background-color: transparent; box-shadow: 0 0 #0000; max-width: 100%;">
                        </iframe>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <footer class="site-footer">
        <div class="footer-container">
            <div class="footer-social">
                <a href="https://www.youtube.com/@adriano_viana" target="_blank" aria-label="YouTube" rel="noopener noreferrer">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                </a>
                <a href="https://www.linkedin.com/in/adrianoviana/" target="_blank" aria-label="LinkedIn" rel="noopener noreferrer">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                </a>
                <a href="https://x.com/adriano_viana" target="_blank" aria-label="X (Twitter)" rel="noopener noreferrer">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                </a>
            </div>
            <div class="footer-copyright">
                <p>&copy; 2026 Adriano Viana. Todos os direitos reservados.</p>
            </div>
        </div>
    </footer>

    <script src="/js/main.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-javascript.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-python.min.js"></script>
</body>
</html>`;
}

// Formatar data
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' });
}

// Estimar tempo de leitura
function estimateReadTime(content) {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
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
    const htmlContent = marked(content);

    const post = {
      slug,
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      tags: data.tags || [],
      image: data.image || '/assets/images/default-post.jpg',
      content: htmlContent
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
