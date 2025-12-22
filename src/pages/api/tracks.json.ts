import type { APIRoute } from "astro";
import fs from "node:fs";
import path from "node:path";

export const GET: APIRoute = ({ params, request }) => {
  const dir = path.join(process.cwd(), "public", "music");
  const files = fs.readdirSync(dir);

  const tracks = files.map((file) => ({
    title: file
      .replace(/\.(mp3|wav|ogg)$/i, "")
      .replace(/[-_]+/g, " ")
      .split(" ")
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(" "),
    url: `/music/${file}`,
  }));

  return new Response(JSON.stringify(tracks), {
    headers: { "Content-Type": "application/json" },
  });
};
