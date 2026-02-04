// Carregar e exibir posts do blog
async function loadBlogPosts() {
  try {
    const response = await fetch('/posts.json?v=' + Date.now());
    const posts = await response.json();

    if (posts.length === 0) {
      // Mostrar empty state
      return;
    }

    // Esconder empty state
    const emptyState = document.querySelector('.blog-empty-state');
    if (emptyState) {
      emptyState.style.display = 'none';
    }

    // Mostrar grid de posts
    const blogGrid = document.querySelector('.blog-grid');
    if (blogGrid) {
      blogGrid.style.display = 'grid';
      blogGrid.innerHTML = posts.map(post => createPostCard(post)).join('');
    }
  } catch (error) {
    console.error('Erro ao carregar posts:', error);
    // Manter empty state visível em caso de erro
  }
}

// Criar card de post
function createPostCard(post) {
  const formattedDate = formatDate(post.date);
  const readTime = estimateReadTime(post.excerpt);

  return `
    <article class="post-card">
      <a href="/blog/${post.slug}.html" class="post-card-link">
        ${post.image ? `
          <div class="post-card-image">
            <img src="${post.image}" alt="${post.title}" loading="lazy">
          </div>
        ` : ''}
        <div class="post-card-content">
          <div class="post-meta">
            <time datetime="${post.date}">${formattedDate}</time>
            <span class="post-read-time">${readTime} min de leitura</span>
          </div>
          <h2 class="post-title">${post.title}</h2>
          <p class="post-excerpt">${post.excerpt}</p>
          ${post.tags && post.tags.length > 0 ? `
            <div class="post-tags">
              ${post.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
          ` : ''}
        </div>
      </a>
    </article>
  `;
}

// Formatar data
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  });
}

// Estimar tempo de leitura
function estimateReadTime(text) {
  const wordsPerMinute = 200;
  const words = text.split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

// Carregar posts quando a página carregar
document.addEventListener('DOMContentLoaded', loadBlogPosts);
