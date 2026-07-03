// Highlight the sidebar nav link for the section currently in view.
// Scanline approach: the active section is the last one whose top has
// passed 15% of the viewport — except at the very bottom of the page,
// where the last section wins (it may be too short to ever reach the
// scanline before scrolling runs out). The scanline must be shorter
// than the shortest section, or anchor clicks select the next section.
const links = document.querySelectorAll('.nav-link');
const sections = [...document.querySelectorAll('main section')];

function updateActive() {
  const doc = document.documentElement;
  const atBottom = window.scrollY + window.innerHeight >= doc.scrollHeight - 2;
  let current = sections[0];
  if (atBottom) {
    current = sections[sections.length - 1];
  } else {
    const scanline = window.scrollY + window.innerHeight * 0.15;
    for (const s of sections) {
      if (s.offsetTop <= scanline) current = s;
    }
  }
  links.forEach((link) =>
    link.classList.toggle('active', link.hash === '#' + current.id)
  );
}

addEventListener('scroll', updateActive, { passive: true });
addEventListener('resize', updateActive, { passive: true });
updateActive();

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
