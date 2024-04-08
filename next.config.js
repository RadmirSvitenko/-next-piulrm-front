/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/ru',
      },
    ];
  },
};

module.exports = nextConfig;
