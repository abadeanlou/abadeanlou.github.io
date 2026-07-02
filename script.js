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

// Theme toggle — the initial theme is applied by the inline script in <head>.
const toggle = document.querySelector('.theme-toggle');
const root = document.documentElement;

function renderToggle() {
  const dark = root.dataset.theme === 'dark';
  toggle.textContent = dark ? '☀' : '☾';
  toggle.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
}

toggle.addEventListener('click', () => {
  root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', root.dataset.theme);
  renderToggle();
});

renderToggle();
