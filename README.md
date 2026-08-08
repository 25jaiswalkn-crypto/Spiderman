# Spider-Man: Brand New Day — Movie Landing Page

A responsive, two-page fan concept site for *Spider-Man: Brand New Day*, built around a
"Daily Bugle investigation board" visual theme — cork texture, brass pins, typewriter
stamps, and redacted case photos.

- **Task 1 (compulsory):** `index.html` — the movie landing page.
- **Task 2, Option B:** `characters.html` — the character showcase page.

## Live pages

- Landing page: `index.html`
- Character showcase: `characters.html`

(Add your deployed URL here once published, e.g. `https://your-project.vercel.app`.)

## Tech stack

- **HTML5** — semantic markup, two pages
- **CSS3** — one shared stylesheet (`style.css`): custom properties for the color/type
  system, Flexbox/Grid for layout, no framework
- **Vanilla JavaScript** — one shared script (`app.js`): scroll-reveal animation,
  character filter, city selector — no libraries or build step
- **Google Fonts** — Bebas Neue (headings) and Special Elite (typewriter/labels)
- **YouTube embed** — official trailer, embedded via iframe

No build tools, package manager, or framework are required — it's plain static files.

## Folder structure

```
.
├── index.html         # Task 1 — landing page (hero, story, cast teaser, trailer, booking)
├── characters.html     # Task 2 — character showcase (filterable grid of hero/villain/ally files)
├── style.css           # shared design system used by both pages
├── app.js              # shared behaviour used by both pages
└── README.md
```

Both HTML files link to the same `style.css` and `app.js`, so the two pages share one
design system and one script instead of duplicating code — this is also what keeps them
visually and functionally consistent with each other.

## Key features

- **Book Now CTA** — in the sticky nav (visible on every scroll position) and in the
  hero, both linking out to BookMyShow
- **Movie info** — title, tagline, release date, director/writer, embedded trailer
- **Cast / character showcase** — reusable `.file-card` component shared by both pages;
  cards on the landing page deep-link to the matching full profile on the character page
  (e.g. `characters.html#mj`)
- **Character filter** — filter by Hero / Villain / Ally / Classified
- **City selector** — pick a city to prep a BookMyShow search
- **Scroll-reveal animation**, respects `prefers-reduced-motion`
- **Responsive** — tested down to mobile widths; nav wraps, grid collapses to a single
  column, trailer stays 16:9

## AI tools used

This project was built with **Claude** (Anthropic), used for:
- generating the initial HTML/CSS/JS structure for both pages
- the visual redesign into the shared case-file theme
- iterative fixes (button contrast/CTA styling, decorative elements, embedded trailer)

All content was reviewed and adjusted manually; movie details (title, release date,
cast, director/writer) are sourced from public promotional information for
*Spider-Man: Brand New Day*.

## How to run locally

No installation needed — these are static files.

1. Download/clone the folder so `index.html`, `characters.html`, `style.css`, and
   `app.js` are together in one directory.
2. Open `index.html` directly in a browser, **or** serve it locally for a cleaner dev
   experience:
   ```bash
   # Python
   python3 -m http.server 8000
   # then visit http://localhost:8000

   # or Node
   npx serve .
   ```

## How to deploy

Any static host works since there's no build step:

- **GitHub Pages:** push the four files to a repo, enable Pages on the `main` branch
  (root folder).
- **Vercel:** `vercel` in the project folder, or import the GitHub repo in the
  Vercel dashboard — no framework preset needed ("Other").
- **Netlify:** drag-and-drop the folder onto Netlify, or connect the GitHub repo with
  an empty build command and `.` as the publish directory.

## Notes / possible next steps

- The BookMyShow link points to the general movie-explore page since this is a fan
  concept and the specific show page doesn't exist — swap in the real listing URL once
  available.
- **Cast/character photos:** these use a styled placeholder (grain + spotlight + a
  redacted eye-bar) rather than hotlinked celebrity photos. Hotlinked images from
  random web sources break easily (expired URLs, hotlink protection) — that's usually
  why a page ends up with broken-image icons. If you have your own local photo files,
  drop them in an `/images` folder and swap each `<div class="file-photo" data-mark="...">`
  for `<div class="file-photo"><img src="images/name.jpg" alt="..."></div>` — the
  redact-bar and card styling will still layer on top correctly.
- The trailer links out to YouTube instead of using an `<iframe>` embed, because
  official studio trailers usually have embedding disabled and show a "video
  unavailable" error inside an iframe — the thumbnail-card + link approach always works.
- Bonus features not yet implemented: countdown timer (the release date has already
  passed as of this build), sound effects, theme switcher.
