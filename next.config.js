/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: false,
  },
  images: {
    domains: ['https://cdn.jsdelivr.net'],
  },
};

module.exports = nextConfig;
