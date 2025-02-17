import { createClient } from 'next-sanity';

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2023-05-03',
  useCdn: true,
});

export async function getArtists() {
  return client.fetch(groq`*[_type == "artist"]{ name, bio, "artworks": artworks[]-> }`);
}