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

Three looping clips are defined in `VIDEOS` in `src/data/resume.js`. They are hosted on
CloudFront, not in this repo, so they cost nothing against the host's bandwidth.

Only the first clip is given a `src` on load — the others are attached shortly before they
are needed (see `src/components/VideoBackground.jsx`). A visit therefore streams
one video rather than downloading all three, which matters: the three files are 17.9 MB,
11.8 MB, and 7.4 MB. A newly attached clip is held back until it fires `canplay`, so the
previous one stays on screen instead of flashing black.

On the home page the clips run on a loop that never stops: when one ends the next is
faded in, and after the last it wraps back to the first, rewinding it rather than leaving
it frozen on its final frame. The next clip starts buffering 40% of the way through the
current one so the handover doesn't stall, and clips that aren't on screen are paused once
the crossfade finishes. Auto-cycling is disabled under `prefers-reduced-motion: reduce`,
where the clips simply loop in place.

Section pages blur and dim the same video so body copy stays readable.

To swap in your own footage, replace the URLs in `VIDEOS`. Any number of clips works — the
cycle just walks the array.

## Project images and links

Each entry in `projects` (in `src/data/resume.js`) takes two optional extras:

```js
image: '/projects/ded-coupon.jpg',
imageAlt: 'Cross-section of a stainless-steel coupon with an embedded thermocouple',
links: [
  { label: 'Final design report', href: 'https://…' },
  { label: 'GitHub', href: 'https://…' },
],
```

Drop the picture in `public/projects/` and reference it as `/projects/<file>`. Landscape
crops around 1200×675 work best — the frame is 16:9 and `object-fit: cover`. Until an
image is set, a numbered plate is drawn in its place, so the layout is already the right
shape. `links` renders a row under the bullets; leave it `[]` to hide the row.

Always fill in `imageAlt` when you set `image` — it is what screen readers announce.

## Photo

`public/amy-kuang.jpg` is the round portrait on the Contact page, referenced as
`profile.photo`. Replace the file with another square image to change it.

## Résumé download

`public/Amy-Kuang-Resume.pdf` is served at `/Amy-Kuang-Resume.pdf` and linked from the
Contact page. Replace that file whenever the résumé is updated — PDF rather than `.docx`
so it renders the same everywhere and can't be edited by whoever downloads it.

When the résumé changes, check whether `src/data/resume.js` needs the same edit: the page
content and the downloadable file are maintained separately, and a recruiter reads both.

## Notes

- Accent colour is `--accent` (`#F598F2`) in `src/index.css`.
- All animations are disabled under `prefers-reduced-motion: reduce`.
- The clock is pinned to `America/Los_Angeles` via `profile.timezone`.
