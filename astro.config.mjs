// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import rehypeLazyMedia from './src/plugins/rehype-lazy-media.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.kobymiller.com',

  vite: {
    plugins: [tailwindcss()]
  },

  markdown: {
    rehypePlugins: [rehypeLazyMedia]
  }
});
