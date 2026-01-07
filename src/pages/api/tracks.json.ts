import { type Song } from "../../types/Song.ts";
import type { APIRoute } from "astro";
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "2jujrh8z",
  dataset: "production",
  apiVersion: "2026-01-07",
  useCdn: false,
});

async function fetchSongs() {
  return client.fetch<Song[]>(`*[_type=="song"] | order(_createdAt desc){
_id,
title,
"audioUrl": song.asset->url
}`);
}

export const GET: APIRoute = async ({ url }) => {
  const invalidate = url.searchParams.get("invalidateCache") === "true";

  if (invalidate) {
    return new Response(JSON.stringify(await fetchSongs()), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return new Response(JSON.stringify(await fetchSongs()), {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
