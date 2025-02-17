import { Redis } from '@upstash/redis';

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_URL,
  token: process.env.UPSTASH_REDIS_TOKEN,
});

export async function getArtist(id: string) {
  const cached = await redis.get(`artist:${id}`);
  if (cached) return cached;

  const data = await fetchArtistFromSupabase(id); // Your DB query
  await redis.set(`artist:${id}`, data, { ex: 86400 }); // 24h cache
  return data;
}