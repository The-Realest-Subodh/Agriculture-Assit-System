/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  webpack: (config, { isServer, dev }) => {
    // Force webpack to use memory cache to avoid cache corruption
    config.cache = {
      type: 'memory'
    };
    return config;
  }
};

module.exports = nextConfig;