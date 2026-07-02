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
- Follows visitor's OS preference by default; sun/moon toggle button in the
  sidebar overrides it; choice persists in `localStorage`
- Warm dark palette: bg `#201d19`, card `#2a2622`, ink `#e8e2d9`,
  accent `#c9a05e`, border `#3a352e`
- Inline `<head>` script applies theme before first paint (no flash);
  all theming via CSS variables under `[data-theme="dark"]`

## Verification
- Local browser check at desktop and mobile widths before pushing
- Confirm live URL serves the new version after push
