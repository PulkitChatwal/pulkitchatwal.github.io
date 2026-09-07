// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages user site — served at the domain root, so no `base` needed.
  site: 'https://pulkitchatwal.github.io',
  vite: {
    plugins: [tailwindcss()],
  },
});
