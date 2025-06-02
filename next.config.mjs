/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static HTML export
  basePath: process.env.NODE_ENV === 'production' ? '/cybergaurd' : '', // Adjust for repository name
  assetPrefix: process.env.NODE_ENV === 'production' ? '/cybergaurd/' : '', // Adjust for repository name
  images: {
    unoptimized: true, // Necessary for static export with next/image
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig; 