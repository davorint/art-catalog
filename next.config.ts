const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**.supabase.co' }, // Supabase images
      { protocol: 'https', hostname: 'cdn.sanity.io' }, // Sanity images
    ],
  },
};