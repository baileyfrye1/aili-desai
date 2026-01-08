// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import sanity from "@sanity/astro";

import netlify from "@astrojs/netlify";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://ailidesai.com",
  integrations: [
    react(),
    sanity({
      projectId: "2jujrh8z",
      dataset: "production",
      useCdn: false,
      apiVersion: "2026-01-07",
      studioBasePath: "/admin",
    }),
    sitemap(),
  ],

  adapter: netlify(),

  vite: {
    server: {
      allowedHosts: ["devserver-preview--ailidesai.netlify.app"],
    },
  },
});
