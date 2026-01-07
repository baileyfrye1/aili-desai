import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { songType } from "./src/sanity/schemaTypes/song";

export default defineConfig({
  projectId: "2jujrh8z",
  dataset: "production",
  name: "aili-desai-portfolio",
  title: "Aili Desai Portfolio",
  plugins: [structureTool()],
  schema: {
    types: [songType],
  },
});
