// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://USUARIO.github.io',
  base: '/marcas-ganaderas-el88',
  integrations: [mdx(), sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },
});