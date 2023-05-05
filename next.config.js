/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ["page.tsx", "api.ts"],
  experimental: { appDir: false },
  output: "standalone",
  poweredByHeader: false,
};

module.exports = nextConfig;
