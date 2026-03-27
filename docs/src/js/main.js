// main.js
// Módulo principal de comportamento do site: navegação, idioma, modo escuro e detecção simples de IoT.

document.addEventListener('DOMContentLoaded', () => {
  // 1. Menu mobile (hamburger)
  const nav = document.querySelector('header nav');
  const menuButton = document.createElement('button');
  menuButton.textContent = '☰';
  menuButton.className = 'hamburger';
  menuButton.setAttribute('aria-label', 'Abrir menu');
  nav.insertBefore(menuButton, nav.firstChild);

  menuButton.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

  // 2. Smooth scroll para links de âncora
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (event) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        nav.classList.remove('open');
      }
    });
  });

  // 3. Seleção de idioma + localStorage
  const languageButtons = document.querySelectorAll('.language-switcher button');
  const locales = document.querySelectorAll('.locale');

  function setLanguage(lang) {
    languageButtons.forEach((btn) => {
      const isActive = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });

    locales.forEach((block) => {
      block.classList.toggle('hidden', !block.classList.contains(`locale-${lang}`));
    });

    localStorage.setItem('preferredLanguage', lang);
    document.documentElement.lang = lang === 'en' ? 'en-US' : 'pt-BR';
  }

  function detectLanguage() {
    const saved = localStorage.getItem('preferredLanguage');
    if (saved === 'pt' || saved === 'en') return saved;

    const browserLang = navigator.language || navigator.userLanguage || 'pt';
    if (browserLang.toLowerCase().startsWith('en')) return 'en';
    return 'pt';
  }

  languageButtons.forEach((button) => {
    button.addEventListener('click', () => {
      setLanguage(button.getAttribute('data-lang'));
    });
  });

  const initialLanguage = detectLanguage();
  setLanguage(initialLanguage);

  // 4. Modo escuro
  const themeToggle = document.querySelector('#theme-toggle');
  const body = document.body;

  function applyTheme(theme) {
    if (theme === 'dark') {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
    localStorage.setItem('theme', theme);
  }

  if (themeToggle) {
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);
    themeToggle.addEventListener('click', () => {
      const nextTheme = body.classList.contains('dark-mode') ? 'light' : 'dark';
      applyTheme(nextTheme);
      themeToggle.textContent = nextTheme === 'dark' ? 'Light Mode' : 'Dark Mode';
    });
  }

  // 5. Detecção rudimentar IoT / navegador simples
  const ua = navigator.userAgent.toLowerCase();
  const isIoT = ua.includes('iot') || ua.includes('smart') || ua.includes('bot');
  if (isIoT) {
    document.body.classList.add('iot-mode');
  }
})