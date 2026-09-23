# Personal Website - Core Architecture & Project Context

## 1. Project Philosophy & System Flow
This repository houses a highly-interactive Personal Portfolio Website designed to present a dynamic, cinematic experience beyond standard static webpages. It is built with Astro, and all pages are statically generated.

### The Core Journey
- **The Unified Home/Timeline/Resume (`src/pages/index.astro`)**: The navigational root. A single horizontally scrolling page laid out left to right as **Resume ← Home → Void runway (0–1997) → Timeline**.
  - Wheel input aggregates `deltaY` and `deltaX` for trackpad swipe support.
  - "My Journey" plays the cinematic intro (void counter → Baby Koby → timeline). A Skip button lets visitors jump straight to the timeline.
  - "My Career" pans left to the resume screen.
  - Timeline scroll position is saved to `sessionStorage` before a view transition and restored after, so returning from a project page lands in the same spot.
- **The Brain Module (`src/pages/brain.astro`)**: A 3D WebGL neural network (Three.js from a CDN import map) mapping hobbies, mindsets, and interests. It is reached via the zoom-into-the-"o" transition from the home page.
  - *Always navigate to it with a full reload (`data-astro-reload`).* View transitions into it drop WebGL state.
- **Project Case Studies (`src/content/projects/*.md`)**: A content collection of hand-authored HTML-in-Markdown pages, rendered by `src/pages/projects/[id].astro` (hero + content + lightbox). Every entry uses `demoMode: true`.
- **About (`src/pages/about.astro`)**: A simple page using `Layout.astro` with the nav/footer. It isn't linked from the main flow.

---

## 2. Technology Stack & Design Baseline
- **Framework:** Astro 6.x (static output, content collections, `ClientRouter` view transitions).
- **Styling:** Tailwind CSS v4 via `@tailwindcss/vite`.
  - `global.css` adds `@source "../content/projects/**/*.md"` so classes used inside Markdown are compiled.
  - *Look:* dark zinc backgrounds, glassmorphism (`backdrop-blur`), glowing accent colors per section (rose = career, blue = mind, purple = journey).
- **3D:** Three.js 0.160 loaded from unpkg through an import map (in both `index.astro` and `brain.astro`).
- No UI framework islands. Everything is Astro components plus plain `<script>` blocks.

---

## 3. Where Things Live

| What | File |
| --- | --- |
| Resume content (jobs, skills, certs, contact) | `src/data/resume.ts` |
| Home screen photo list, site description | `src/data/site.ts` |
| Category → color classes (timeline + project pages) | `src/data/categories.ts` |
| Brain network data | `src/data/neuralNetwork.js` |
| SEO / link-preview meta tags | `src/components/SeoHead.astro` |
| Lazy media observer (shared) | `src/scripts/lazyMedia.ts` |
| Markdown media rewriting (build time) | `src/plugins/rehype-lazy-media.mjs` |
| New project template | `docs/_template.md` |

### Media loading
- `rehype-lazy-media` rewrites every `<video>` in project Markdown at build time: `src` → `data-src`, no `autoplay`, `preload="none"`, class `lazy-media`. `<img>` tags get `loading="lazy"`.
  - Write normal `<video src=... autoplay ...>` in Markdown; the plugin handles it.
- `observeLazyMedia()` attaches the real `src` and plays videos when they come near the viewport, and pauses them offscreen.
  - Project pages observe the window.
  - The home timeline observes its horizontal scroll container.
- Hero media (`coverImage` / `heroImage`) loads eagerly.
- Timeline cover images and videos on the home page use `data-src` + `lazy-media` directly. After the home page is idle, videos are prefetched one at a time.

### Frontmatter
- `coverImage` is the timeline card media.
- `heroImage` (optional) overrides the project page hero.
- `heroFit: "contain"` shows the hero uncropped over a blurred copy.

---

## 4. Maintenance

- **Update the resume:** edit `src/data/resume.ts` and replace `public/assets/KobyMillerResume.pdf`.
- **Add a timeline entry:**
  1. Copy `docs/_template.md` into `src/content/projects/<id>.md`.
  2. Put its media in `public/assets/projects/<folder>/`.
  3. Run `npm run check:media`.
- **Checks:**
  - `npm run check:media`: every media path in the Markdown exists. The check is case-sensitive, because Linux hosts are.
  - `npm run check:timeline`: lists entries with date and cover status.
  - `npm run list:assets`: dumps all asset paths.

### Known trade-offs
- Media lives in git (`public/assets`, about 900 MB). Large videos are best re-encoded (720p–1080p H.264) before adding them.
- `index.astro` and `brain.astro` are large single-file pages by design. The cinematic sequences depend on precise timing, so change the durations and easings carefully.
