// Newsletter Form Submission Handler

function showMessage(message, type) {
  const messageEl = document.getElementById('form-message');
  if (messageEl) {
    messageEl.textContent = message;
    messageEl.className = `form-message ${type}`;
    messageEl.style.display = 'block';

    // Auto-hide after 5 seconds
    setTimeout(() => {
      messageEl.style.display = 'none';
    }, 5000);
  }
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

async function handleNewsletterSubmit(email) {
  // Integração com Beehiiv
  // Nota: O Beehiiv normalmente usa iframe embed que já está integrado nas páginas
  // Este código é um fallback caso você queira usar formulários customizados

  try {
    // O Beehiiv geralmente não expõe uma API pública direta
    // A forma recomendada é usar o iframe embed fornecido por eles
    // Este é um placeholder caso você configure um webhook/API customizado

    const beehiivPublicationId = 'adriano-newsletter'; // Seu ID de publicação

    // Por enquanto, redireciona para a página de inscrição do Beehiiv
    // Você pode substituir isso por uma integração via Zapier/Make ou webhook
    console.log('Newsletter signup attempt:', email);

    // Alternativa 1: Redirecionar para página de inscrição
    // window.location.href = `https://adriano-newsletter.beehiiv.com/subscribe?email=${encodeURIComponent(email)}`;

    // Alternativa 2: Mostrar mensagem para usar o embed
    showMessage('Use o formulário embed do Beehiiv acima para se inscrever.', 'success');

    // Reset form
    const forms = document.querySelectorAll('.newsletter-form');
    forms.forEach(form => form.reset());

  } catch (error) {
    console.error('Newsletter signup error:', error);
    showMessage('Erro ao se inscrever. Por favor, tente novamente.', 'error');
  }
}

// Event Listeners para todos os formulários de newsletter na página
document.addEventListener('DOMContentLoaded', function() {
  const newsletterForms = document.querySelectorAll('.newsletter-form');

  newsletterForms.forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();

      const emailInput = form.querySelector('input[type="email"]');
      const email = emailInput.value.trim();

      if (email && validateEmail(email)) {
        handleNewsletterSubmit(email);
      } else {
        showMessage('Por favor, insira um email válido.', 'error');
      }
    });
  });
});
