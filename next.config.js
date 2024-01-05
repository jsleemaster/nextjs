/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "standalone",
  poweredByHeader: false,
  images: {
    domains: ["https://nextjs-lahrlvbi4-jsleemaster.vercel.app"],
  },
};

module.exports = nextConfig;
