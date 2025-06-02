/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static HTML export
  basePath: process.env.NODE_ENV === 'production' ? '/cybergaurd' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/cybergaurd/' : undefined, // Explicitly set for production
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