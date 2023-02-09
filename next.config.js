/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // TODO : Temporary domain permission to remove when loading real images from backend
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.w3bai.com',
      },
    ],
  },
};

module.exports = nextConfig;
