// Language switching
const langButtons = document.querySelectorAll('.language-switcher button');
const locales = document.querySelectorAll('.locale');

langButtons.forEach(button => {
    button.addEventListener('click', () => {
        const lang = button.getAttribute('data-lang');
        langButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        locales.forEach(locale => {
            if (locale.classList.contains(`locale-${lang}`)) {
                locale.classList.remove('hidden');
            } else {
                locale.classList.add('hidden');
            }
        });
        localStorage.setItem('selectedLanguage', lang);
    });
});

// Load saved language
const savedLang = localStorage.getItem('selectedLanguage') || 'pt';
document.querySelector(`[data-lang="${savedLang}"]`).click();

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