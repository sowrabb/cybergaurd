/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static HTML export
  basePath: process.env.NODE_ENV === 'production' ? '/cybergaurd' : '', // Adjust for repository name
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/cybergaurd/' : '', // Let basePath handle asset prefixing
  images: {
    unoptimized: true, // Necessary for static export with next/image
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig; 