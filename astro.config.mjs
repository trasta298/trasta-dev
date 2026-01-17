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
  }), sitemap({
    i18n: {
      defaultLocale: 'ja',
      locales: {
        ja: 'ja-JP',
        en: 'en-US',
      },
    },
  })],
  site: "https://trasta.dev",
  i18n: {
    locales: ["ja", "en"],
    defaultLocale: "ja",
    routing: {
      prefixDefaultLocale: false
    }
  }
});