// Highlight the sidebar nav link for the section currently in view.
const links = document.querySelectorAll('.nav-link');
const sections = [...document.querySelectorAll('main section')];

const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      links.forEach((link) =>
        link.classList.toggle('active', link.hash === '#' + entry.target.id)
      );
    }
  },
  { rootMargin: '-40% 0px -55% 0px' }
);

sections.forEach((s) => observer.observe(s));

// Theme switch — the initial theme is applied by the inline script in <head>.
const root = document.documentElement;
const lightBtn = document.querySelector('.theme-switch .seg-light');
const darkBtn = document.querySelector('.theme-switch .seg-dark');

function renderSwitch() {
  const dark = root.dataset.theme === 'dark';
  lightBtn.classList.toggle('on', !dark);
  darkBtn.classList.toggle('on', dark);
  lightBtn.setAttribute('aria-pressed', String(!dark));
  darkBtn.setAttribute('aria-pressed', String(dark));
}

lightBtn.addEventListener('click', () => setTheme('light'));
darkBtn.addEventListener('click', () => setTheme('dark'));

function setTheme(theme) {
  root.dataset.theme = theme;
  localStorage.setItem('theme', theme);
  renderSwitch();
}

renderSwitch();
