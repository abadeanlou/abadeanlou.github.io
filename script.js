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
