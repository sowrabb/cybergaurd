import type { NextConfig } from "next";

const GITHUB_REPO_NAME = 'cyberguard'; // Your repository name

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  output: 'export', // Enable static export
  basePath: `/${GITHUB_REPO_NAME}`, // Set the base path to your repository name
  assetPrefix: `/${GITHUB_REPO_NAME}/`, // Re-enable this
  images: {
    unoptimized: true, // Disable Next.js image optimization for static export
    // remotePatterns: [ // Keep this if you ever plan to use Unsplash again, otherwise remove
    //   {
    //     protocol: 'https',
    //     hostname: 'images.unsplash.com',
    //     port: '',
    //     pathname: '/**',
    //   },
    // ],
  },
  // Trailing slash can be useful for static exports to avoid issues with direct file access
  trailingSlash: true,
};

export default nextConfig;
