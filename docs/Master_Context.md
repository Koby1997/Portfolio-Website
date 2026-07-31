# Personal Website - Core Architecture & Project Context

## 1. Project Philosophy & System Flow
This repository houses a highly-interactive, application-grade Personal Portfolio Website designed to present a dynamic, cinematic experience beyond standard static webpages. 

### The Core Journey
The user journey is architected to seamlessly bridge between deeply stylized modules rather than utilizing standard disjointed page loads.
- **The Unified Home/Timeline (`index.astro`)**: The navigational root. It functions as a single-page horizontally scrolling application that merges the initial "Home" gateway with the chronological "Timeline" layout. It aggregates `deltaY` and `deltaX` scroll inputs to provide native trackpad swipe support. Navigating between project details and the timeline leverages an absolute "Escape Hatch" state reset to prevent View Transition clipping.
- **The Brain Module (`brain.astro`)**: An experiential 3D WebGL Neural Network visually mapping the user's hobbies, mindsets, and interests. Accessed via a cinematic zoom transition from the Home page. *Must use strict `data-astro-reload` to bypass View Transitions to avoid WebGL GC drops.*
- **The Resume Module (`resume.astro`)**: A dedicated professional readout integrated at the far right of the unified timeline, operating as a single unified vertical scroll container.
- **The Engineering Portfolio (`src/content/projects/`)**: Massive, highly-visual project case studies decoupled into Markdown collections (`.md`) utilizing strict Glassmorphism CSS layouts and intrinsic `max-h-[600px]` media bounds. 

---

## 2. Technology Stack & Design Baseline
- **Framework:** Astro 6.x (Combining `.astro` files and `Content Collections` for static speed).
- **Styling Architecture:** Tailwind CSS v4. 
  - *Mantra:* Aggressive usage of intense glassmorphism (`backdrop-blur`), translucent dark backgrounds (`bg-zinc-950/60`), vibrant thematic gradients (`violet-400`, `blue-500`), and structurally rigorous grid/flexbox padding to create premium, "Iron Man UI" style dashboards.
- **Interactive Islands:** React v19 for heavy client-side state.
- **3D Graphics Engine:** Three.js with custom geometry optimizations.

---

## 3. High-Level Modular Context

### A. The Structural Markdown Collections
All timeline entries and case studies follow a deeply standardized Astro layout injected via `Layout.astro`.
- **Media Philosophy**: Media constraints exclusively utilize `w-auto max-w-full max-h-[600px]` to enforce mathematical intrinsic scaling without allowing CSS grid columns to warp or stretch videos vertically. 
- **Tailwind Compilation Scope**: Custom config added to `global.css` explicitly targeting the `src/content/projects/**/*.md` payload, guaranteeing Tailwind v4 parses and statically builds CSS classes injected directly into Markdown tables.
- **Image Architecture**: Cover Images and Hero Images are fully decoupled in the `content.config.ts`, allowing timeline preview tiles to differ completely from the massive hero banners rendered across article headers.

### B. View Transition Stabilization 
Astro's View Transition routing is utilized across the markdown portfolio.
- **Container Isolation**: To prevent layout morph collisions, standard project pages are isolated from the timeline using standard `<divs>` instead of semantic `<main>` tags (avoiding Astro morphing the `index.astro` layout bounds into the markdown details).
- **History Memory Cache**: Deep timeline zooming navigation tracks native anchor states efficiently using `sessionStorage` integer caches instead of complex DOM width-stitching algorithms. 

---

## 4. Current State & Immediate Milestones (V1.0.0 Completed)

**V1.0 is finalized:** The desktop-first cinematic layouts, timeline tracking overrides, and markdown project pages (`Tube`, `CuttlefishLights`, `StockViz`, etc.) are 100% complete and feature pixel-perfect scaling. 

**V2.0 Directive (Mobile Responsiveness):** 
The primary and exclusive operational directive remaining is to **port the V1.0 Desktop Architecture perfectly across Mobile Viewports**, while strictly forbidding any visual regression or breakage across the finalized Desktop Layouts. Current mobile layouts suffer from clipped sidebars, broken text flows, and unreachable interactive elements natively designed for horizontal ultra-widescreen real-estate.
