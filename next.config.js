/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["upload.wikimedia.org"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "btilmyuegmcrfazewstz.supabase.co",
      },
    ],
  },
};

module.exports = nextConfig;
