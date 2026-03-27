// Language switching
const langButtons = document.querySelectorAll('.language-switcher button');
const locales = document.querySelectorAll('.locale');
const navLinks = document.querySelectorAll('nav a[data-i18n]');

const navTranslations = {
    pt: {
        habilidades: 'Habilidades',
        programacao: 'Linguagens',
        perfil: 'Perfil',
        sobre: 'Sobre',
        menu: 'Navegação principal',
        openMenu: 'Abrir menu',
    },
    en: {
        habilidades: 'Skills',
        programacao: 'Languages',
        perfil: 'Profile',
        sobre: 'About',
        menu: 'Main navigation',
        openMenu: 'Open menu',
    }
};

const navTargets = {
    pt: {
        habilidades: '#habilidades-pt',
        programacao: '#programacao-pt',
        perfil: '#perfil-pt',
        sobre: '#sobre-pt',
    },
    en: {
        habilidades: '#habilidades-en',
        programacao: '#programacao-en',
        perfil: '#perfil-en',
        sobre: '#sobre-en',
    }
};

function setLanguage(lang) {
    langButtons.forEach(btn => btn.classList.toggle('active', btn.getAttribute('data-lang') === lang));

    locales.forEach(locale => {
        locale.classList.toggle('hidden', !locale.classList.contains(`locale-${lang}`));
    });

    navLinks.forEach(link => {
        const key = link.dataset.i18n;
        link.textContent = navTranslations[lang][key] || link.textContent;
        link.setAttribute('href', navTargets[lang][key] || link.getAttribute('href'));
        // Troca o idioma do menu de navegação
        if (lang === 'en') {
            link.parentElement.style.display = navTargets.en[key] ? '' : 'none';
        } else {
            link.parentElement.style.display = navTargets.pt[key] ? '' : 'none';
        }
    });

    const navElement = document.querySelector('nav');
    navElement.setAttribute('aria-label', navTranslations[lang].menu);
    document.querySelector('.hamburger').setAttribute('aria-label', navTranslations[lang].openMenu);
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';

    localStorage.setItem('selectedLanguage', lang);
}

langButtons.forEach(button => {
    button.addEventListener('click', () => {
        const lang = button.getAttribute('data-lang');
        setLanguage(lang);
    });
});

const savedLang = localStorage.getItem('selectedLanguage') || 'pt';
setLanguage(savedLang);

// Smooth scrolling for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
        // Close mobile menu after click
        const nav = document.querySelector('nav');
        if (nav.classList.contains('open')) {
            nav.classList.remove('open');
        }
    });
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
if (hamburger) {
    hamburger.addEventListener('click', () => {
        document.querySelector('nav').classList.toggle('open');
    });
}

// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    themeToggle.textContent = isDark ? 'Light Mode' : 'Dark Mode';
});

// Load saved theme
const savedTheme = localStorage.getItem('theme') || 'light';
if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggle.textContent = 'Light Mode';
} else {
    themeToggle.textContent = 'Dark Mode';
}

// IoT detection (assuming for mobile)
if ('ontouchstart' in window) {
    document.body.classList.add('touch-device');
}