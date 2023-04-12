/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['tsx', 'js',],
  experimental: { appDir: false },
  output: 'standalone',
  poweredByHeader: false,
}

module.exports = nextConfig
