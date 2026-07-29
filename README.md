# Amy Kuang — Portfolio

Personal portfolio site built from the résumé. React 19 + Vite + Tailwind v4, no runtime dependencies beyond React.

## Run it

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

The output in `dist/` is fully static — drop it on Netlify, Vercel, GitHub Pages, or any static host.

## Structure

| Path | What it holds |
| --- | --- |
| `src/data/resume.js` | **All content.** Every heading, bullet, date, skill, and link lives here. |
| `src/App.jsx` | View switching + the page-transition state machine. |
| `src/components/Hero.jsx` | Landing screen: name, intro, focus-area background switcher. |
| `src/components/Navbar.jsx` | Fixed nav, local clock, mobile menu. |
| `src/components/PageTransition.jsx` | The wipe panels shown between sections. |
| `src/components/SectionShell.jsx` | Shared layout for every section page (`EntryRow`, `Bullets`, `Meta`). |
| `src/sections/` | One file per tab: Experience, Education, Projects, Skills, Contact. |

**To edit content, you almost always only need `src/data/resume.js`.**

## How navigation works

Each résumé section is its own view, not a scroll anchor. Clicking a nav item runs a
three-phase transition (`covering` → swap → `revealing`) driven by `navigate()` in
`src/App.jsx`: two panels wipe up over the page, the destination name is held on screen,
then the panels retract to reveal the new section.

Each view has a hash URL (`#projects`, `#contact`, …) so links are shareable and the
browser back/forward buttons replay the transition.

Timing lives in `src/components/PageTransition.jsx` (`PANEL_MS`, `STAGGER`) and
`HOLD_MS` in `src/App.jsx`. Changing `PANEL_MS` keeps the JS timers in sync automatically.

## Background video

Three looping clips are defined in `VIDEOS` in `src/data/resume.js` and labelled as focus
areas (`focusAreas`) in the hero switcher. They're fetched as blobs on load so switching is
instant, falling back to streaming if a fetch fails. Section pages blur and dim the same
video so body copy stays readable.

To swap in your own footage, replace the three URLs in `VIDEOS` and rename the matching
entries in `focusAreas`.

## Résumé download

`public/Amy-Kuang-Resume.docx` is served at `/Amy-Kuang-Resume.docx` and linked from the
Contact page. Replace that file whenever the résumé is updated.

## Notes

- Accent colour is `--accent` (`#F598F2`) in `src/index.css`.
- All animations are disabled under `prefers-reduced-motion: reduce`.
- The clock is pinned to `America/Los_Angeles` via `profile.timezone`.
