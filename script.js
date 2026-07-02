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

// Journey map — cities of study, research, and work.
// The frame stays hidden (.map-frame:not(.map-ready)) unless MapLibre loads.
const mapEl = document.getElementById('journey-map');
if (mapEl && window.maplibregl) {
  const stops = [
    { name: 'Tehran', coords: [51.389, 35.689], note: 'Sharif University of Technology · B.Sc. 2015–2019' },
    { name: 'Turin', coords: [7.686, 45.07], note: 'Politecnico di Torino · M.Sc. 2019–2022' },
    { name: 'Paris', coords: [2.352, 48.857], note: 'IP Paris — LINCS Lab · Research 2021–2022' },
    { name: 'Milan', coords: [9.19, 45.464], note: 'CitiEU · Data & Modelling Specialist 2023–present' },
    { name: 'Abu Dhabi', coords: [54.377, 24.454], note: 'Abu Dhabi Mobility model · CubePy migration' },
  ];

  mapEl.closest('.map-frame').classList.add('map-ready');

  const bounds = new maplibregl.LngLatBounds();
  stops.forEach((s) => bounds.extend(s.coords));

  const map = new maplibregl.Map({
    container: mapEl,
    style: 'https://tiles.openfreemap.org/styles/positron',
    bounds,
    fitBoundsOptions: { padding: 45 },
    scrollZoom: false,
    attributionControl: { compact: true },
  });
  map.addControl(new maplibregl.NavigationControl({ showCompass: false }));

  map.on('load', () => {
    map.addSource('journey', {
      type: 'geojson',
      data: {
        type: 'Feature',
        geometry: { type: 'LineString', coordinates: stops.map((s) => s.coords) },
      },
    });
    map.addLayer({
      id: 'journey-line',
      type: 'line',
      source: 'journey',
      paint: { 'line-color': '#8a6d3b', 'line-width': 1.5, 'line-dasharray': [2, 2] },
    });

    stops.forEach((s) => {
      const el = document.createElement('div');
      el.className = 'journey-marker';
      new maplibregl.Marker({ element: el })
        .setLngLat(s.coords)
        .setPopup(
          new maplibregl.Popup({ offset: 12, closeButton: false })
            .setHTML('<strong>' + s.name + '</strong><br>' + s.note)
        )
        .addTo(map);
    });
  });
}
