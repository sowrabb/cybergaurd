import type { NextConfig } from "next";

const GITHUB_REPO_NAME = 'cybergaurd'; // Your repository name

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  output: 'export', // Enable static export
  basePath: `/${GITHUB_REPO_NAME}`, // Set the base path to your repository name
  assetPrefix: `/${GITHUB_REPO_NAME}/`, // Also set assetPrefix for static assets
  images: {
    unoptimized: true, // Disable Next.js image optimization for static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Trailing slash can be useful for static exports to avoid issues with direct file access
  trailingSlash: true,
};

export default nextConfig;
