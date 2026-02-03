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
  // TODO: Integrar com sua plataforma de newsletter
  // Opções: Substack, Mailchimp, ConvertKit, etc.

  // Exemplo de integração com API customizada:
  /*
  try {
    const response = await fetch('SEU_ENDPOINT_API', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    if (response.ok) {
      showMessage('Obrigado por se inscrever! Verifique seu email para confirmar.', 'success');
      document.getElementById('newsletter-form').reset();
    } else {
      showMessage('Erro ao se inscrever. Por favor, tente novamente.', 'error');
    }
  } catch (error) {
    showMessage('Erro ao se inscrever. Por favor, tente novamente.', 'error');
  }
  */

  // Por enquanto, apenas mostra mensagem de sucesso
  // Substitua com sua integração real
  console.log('Newsletter signup:', email);
  showMessage('Obrigado! Em breve você receberá um email de confirmação.', 'success');

  // Reset form
  const forms = document.querySelectorAll('.newsletter-form');
  forms.forEach(form => form.reset());
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
