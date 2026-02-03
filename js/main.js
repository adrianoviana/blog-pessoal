// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', function() {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';

      navMenu.classList.toggle('active');
      menuToggle.classList.toggle('active');
      menuToggle.setAttribute('aria-expanded', !isExpanded);
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!menuToggle.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });

    // Close menu when clicking on a link
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
});

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId !== '#' && targetId.length > 1) {
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  });
});

// Active Navigation Highlight
function highlightActiveNav() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-menu a');

  navLinks.forEach(link => {
    // Skip anchor links (like #youtube)
    if (link.getAttribute('href').startsWith('#')) {
      return;
    }

    const linkPath = new URL(link.href).pathname;

    // Remove active class from all links
    link.classList.remove('active');

    // Add active class to matching link
    if (linkPath === currentPath ||
        (currentPath === '/' && (linkPath === '/' || linkPath === '/index.html'))) {
      link.classList.add('active');
    }
  });
}

// Run on page load
document.addEventListener('DOMContentLoaded', highlightActiveNav);
