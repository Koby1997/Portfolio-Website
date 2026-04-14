# Tech Stack

This project serves as the foundational template and testing ground for future web agency client projects. The stack is heavily optimized for absolute speed, high SEO scores, and excellent developer experience.

## Core Technologies

### 1. Astro (Framework)
- **Why:** Astro is an incredibly fast, content-forward web framework. By default, it ships zero JavaScript to the client, converting everything to pure HTML and CSS. This guarantees massive performance and Lighthouse scores for static 'brochure' sites.
- **Usage:** Handles the routing, layout rendering (`.astro` files), and powers the robust Markdown parser for our Project Case Studies.

### 2. React (UI Components)
- **Why:** While Astro handles the static shells, React is integrated for when highly-interactive UI components are required. This ensures the best of both worlds: static speed with app-like interactivity.
- **Integration:** Managed via Astro's React integration (`@astrojs/react`).

### 3. Tailwind CSS v4 (Styling)
- **Why:** A utility-first CSS framework that ensures design consistency and blazingly fast iteration without writing custom CSS files.
- **Usage:** Styling is done mobile-first directly inside the `.astro` and `.jsx` components. The dark mode theme relies heavily on Tailwind's `zinc` color palette.

### 4. Cloudflare Pages (Hosting / Infrastructure)
- **Why:** Cloudflare provides top-tier edge CDN delivery. Connecting the GitHub repository to Cloudflare Pages guarantees free, lightning-fast global hosting with automatic SSL and DNS management.

## Ecosystem Tools
- **Astro Content Collections:** Used to strictly type-check and organize the markdown files that produce the case study pages dynamically.
- **Vite:** The underlying build tool Astro runs on, providing the near-instant hot-reload development server.
