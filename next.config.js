/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ["page.tsx"],
  experimental: { appDir: false },
  output: "standalone",
  poweredByHeader: false,
};

module.exports = nextConfig;
