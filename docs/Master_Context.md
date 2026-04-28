# Personal Website - Core Architecture & Project Context

## 1. Project Philosophy & System Flow
This repository houses a highly-interactive, application-grade Personal Portfolio Website designed to present a dynamic, cinematic experience beyond standard static webpages. 

### The Core Journey
The user journey is architected to seamlessly bridge between deeply stylized modules rather than utilizing standard disjointed page loads. 
- **The Unified Home/Timeline (`index.astro`)**: The navigational root. It functions as a single-page horizontally scrolling application that merges the initial "Home" gateway with the chronological "Timeline" layout. It explicitly features *no traditional static header or footer bounds*. It handles complex, organic animated transitions (like cinematic zoom-and-fly) pushing outward into the dedicated module pages.
- **The Brain Module (`brain.astro`)**: An experiential 3D WebGL Neural Network visually mapping the user's hobbies, mindsets, and interests. Accessed via a cinematic zoom transition from the Home page.
- **The Resume Module (`resume.astro`)**: A dedicated professional readout designed explicitly to showcase dual-states (Plain/Traditional vs Fun/Interactive).

---

## 2. Technology Stack & Design Baseline
- **Framework:** Astro (`.astro` files acting organically as component wrappers and high-speed routing nodes).
- **Styling Architecture:** Tailwind CSS. 
  - *Mantra:* Aggressive usage of intense glassmorphism (`backdrop-blur`), translucent dark backgrounds (`bg-zinc-950/60`), vibrant thematic gradients (`violet-400`, `blue-500`), and structurally rigorous flexbox padding to create premium, "Iron Man UI" style dashboards.
- **3D Graphics Engine:** Three.js. (Handled via pure vanilla Javascript executing natively alongside local Astro DOM trees).
- **Interaction Physics:** `OrbitControls` (Specifically loaded via `three/examples/jsm/controls/OrbitControls.js`).

---

## 3. High-Level Modular Context

### A. The Brain Page 
*Currently the most mathematically complex system in the repository.*
- **Data Source (`src/data/neuralNetwork.js`)**: The literal structural map defining Major Hubs (e.g. Cinema, Sports), Leaf Nodes (e.g. Tenet), and localized Post-it Annotations. Mapped via strict deterministic arrays to guarantee coordinate stability.
- **Click Intercept Override (`OrbitControls` Vs DOM HTML)**: 
  OrbitControls natively binds to the document body to read mouse-drags natively. Because it captures pointer state, it natively destroys standard browser `<click>` evaluations across HTML labels hovering over the nodes. To solve this: we globally intercept `pointerup` on the `window` scope, rigorously calculate if the user's cursor physically drifted via mathematical distance tracking (`Math.hypot`), and if the mouse barely moved (`< 30px drift`), we natively trigger a custom `flyTo()` camera sequence explicitly ignoring OrbitControls! *Engineers: Never override this global tracker logic.*
- **Render Engine Optimizations**: 
  1. The Dev Configurator Panel natively calls rigorous `.dispose()` mechanisms exclusively against old `BufferGeometry` and `Materials` arrays, dumping memory out of the heap prior to generating intensely vast web connections (thereby averting rapid WebGL Context loss).
  2. Features a continuous volumetric X-ray clipping system (`focusClipPlane`) natively bound to the camera target vector. It mathematically severs any dense particle-webbing structures hovering visually in front of the active node hierarchy, drastically clearing visual noise.

### B. The Timeline Module (Unified inside `index.astro`)
This logic stack dictates capturing visual history sequentially, triggered seamlessly via a massive horizontal auto-scroll from the Home gateway.
- Structurally requires robust data-modeling parsing extensive picture banks and specialized written annotations mapped to specific nodes or "pages".
- Anticipated logic centers heavily around organizing deep asset integration visually, generating precise image matrices, and deploying specialized visual filters dynamically based on context.

### C. The Resume Module (`resume.astro`)
A highly polished module engineered to showcase professional/technical qualifications.
- **Key UX Interaction**: Requires a dynamic "Layout Toggle". This mechanism actively swaps between a highly formatted plain presentation state natively aligned with traditional recruiter expectations, and a deeply expressive "Fun" visual matrix.
- Requires native, prominent interface anchors routing securely to GitHub and LinkedIn alongside standard "Download PDF" interactions.

---

## 4. Current State & Immediate Milestones
Ongoing development and conceptual ideation targets are tracked meticulously via `docs/FutureWork.txt`. 

**The primary operational directives remaining feature:**
1. Populating the remaining raw array matrices (Hubs + Nested Nodes) holistically into the active Brain structural network.
2. Gathering and staging the raw asset bank natively required for initializing the Timeline views (e.g., project images, descriptions, historical data).
3. Architecting the unified navigation pathways into the Resume module, building out its transitions and content mapping.
