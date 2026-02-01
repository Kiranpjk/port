/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ['avatars.githubusercontent.com', 'github.com'],
  },
  // For static export (GitHub Pages)
  // output: 'export',
  // trailingSlash: true,
};

export default nextConfig;
