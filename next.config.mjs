/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'test.millionflowers.com.ua',
      },
    ],
  },
};

export default nextConfig;
