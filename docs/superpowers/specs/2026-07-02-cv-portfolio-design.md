# CV & Portfolio Site — abadeanlou.github.io

Date: 2026-07-02 · Status: approved by user

## Goal
Turn the placeholder page at abadeanlou.github.io into a professional-presence
CV and portfolio, sourced from the CV PDF (kept private, gitignored).

## Decisions (user-approved)
- **Audience:** general professional presence (link target for LinkedIn/GitHub)
- **Privacy:** links only — no email, no phone, no CV PDF download, no Google
  Drive certificate links. PDF stays gitignored.
- **Style:** Editorial Minimal — paper background `#faf8f5`, Georgia serif
  headings, bronze accent `#8a6d3b`, generous whitespace
- **Layout:** fixed left sidebar (name, title, location, section nav with
  scroll-spy, GitHub/LinkedIn/Scholar links); right column scrolls; collapses
  to single column on mobile
- **Photo:** none

## Sections (right column, in order)
1. About — 2-3 sentence intro
2. Experience — CitiEU (Mar 2023–present), IP Paris LINCS Lab (Nov 2021–Nov 2022)
3. Projects — IntelligentMobilityHub, Abu Dhabi Mobility Model, Public Transit
   Equity Analysis
4. Publications — hEART 2022 and TRB 2023 papers with arXiv links
5. Skills — grouped tag chips (6 groups from CV)
6. Education & Honors — PoliTo M.Sc., Sharif B.Sc.; 4 honors

## Technical shape
- `index.html` + `style.css` + small `script.js` (scroll-spy only; site works
  without JS). No frameworks, no build step. Push to main = deploy.

## Dark mode (added same day, user-approved)
- Follows visitor's OS preference by default; segmented Light | Dark control
  in the sidebar (user chose from 4 demoed variants) overrides it; choice
  persists in `localStorage`. Asset URLs carry `?v=N` to bust the 10-minute
  GitHub Pages cache on deploys.
- Warm dark palette: bg `#201d19`, card `#2a2622`, ink `#e8e2d9`,
  accent `#c9a05e`, border `#3a352e`
- Inline `<head>` script applies theme before first paint (no flash);
  all theming via CSS variables under `[data-theme="dark"]`

## Round 3 additions (added same day, user-approved)
- **Social/SEO**: OG + Twitter-card meta, canonical URL, generated 1200×630
  `social-card.png` (editorial style), JSON-LD Person schema
- **Print stylesheet**: `@media print` — forced light palette, one column,
  nav/theme-switch/map hidden, link URLs printed for publications and socials
- **Certifications** subsection under Education & Honors; Coursera items link
  to public verification pages (Google Drive cert links deliberately excluded)
- **Journey map**: built (MapLibre GL + OpenFreeMap positron, cities of the
  user's story) but REMOVED same day at user request — user didn't like it.
  The site is dependency-free again. Code exists in git history (commit
  3fba729) if ever wanted back.

## Verification
- Local browser check at desktop and mobile widths before pushing
- Confirm live URL serves the new version after push
