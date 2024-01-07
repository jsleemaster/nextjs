/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "standalone",
  poweredByHeader: false,
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "https://nextjs-lahrlvbi4-jsleemaster.vercel.app",
      },
    ],
  },
};

module.exports = nextConfig;
