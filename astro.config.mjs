// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";
import rehypeMermaid from 'rehype-mermaid';
import addMermaidClass from './src/add-mermaid-class';
import tailwindcss from "@tailwindcss/vite";
import mdx from'@astrojs/mdx';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  site: "https://https://rgwoodblog.netlify.app/",
  output: 'static',
  integrations: [preact(), mdx()],

  vite: {
    plugins: [tailwindcss()]
  },

  adapter: netlify(),
});