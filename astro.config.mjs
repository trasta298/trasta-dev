import { defineConfig } from 'astro/config';
import pandacss from '@pandacss/astro';
import partytown from "@astrojs/partytown";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [pandacss(), mdx(), partytown({
    config: {
      forward: ["dataLayer.push"]
    }
  }), sitemap()]
});