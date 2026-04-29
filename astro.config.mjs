// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://henriqk0.github.io',
  base: '/physics-symposium-2026-loading-page/',
  vite: {
    plugins: [tailwindcss()]
  }
});