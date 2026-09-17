// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// Served from GitHub Pages at https://merylstreep.github.io/website_redux/
// When a custom domain is attached, set `site` to it and drop `base`.
export default defineConfig({
  site: 'https://merylstreep.github.io',
  base: '/website_redux',
  trailingSlash: 'ignore',
  integrations: [react()],
  build: { inlineStylesheets: 'auto' },
});
