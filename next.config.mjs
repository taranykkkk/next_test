/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: process.env.PROTOCOL,
        hostname: process.env.HOSTNAME,
      },
      {
        protocol: 'https',
        hostname: 'dev-api.millionflowers.com.ua',
      },
    ],
  },
};

export default nextConfig;
