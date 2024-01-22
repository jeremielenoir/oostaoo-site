/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
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
