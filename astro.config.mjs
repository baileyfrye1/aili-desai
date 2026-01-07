// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import sanity from "@sanity/astro";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    sanity({
      projectId: "2jujrh8z",
      dataset: "production",
      useCdn: false,
      apiVersion: "2026-01-07",
      studioBasePath: "/admin",
    }),
  ],

  adapter: netlify(),
});
