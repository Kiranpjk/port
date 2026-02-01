/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'github.com',
      },
    ],
  },
  // Disabled static export to avoid build-time API calls
  // For Vercel deployment, this is not needed
  // output: 'export',
  // trailingSlash: true,
};

export default nextConfig;
