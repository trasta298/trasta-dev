import { defineConfig } from 'astro/config';
import partytown from "@astrojs/partytown";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), partytown({
    config: {
      forward: ["dataLayer.push"]
    }
  }), sitemap()],
  site: "https://trasta.dev",
});