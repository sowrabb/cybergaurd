/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export', // Enables static HTML export
  // basePath needs to be set for routing and linking to work correctly in a sub-directory.
  basePath: isProd ? '/cybergaurd' : '',
  // assetPrefix ensures that assets (JS, CSS, images from public dir) are loaded from the correct path.
  // It needs the trailing slash for Next.js to correctly prepend it to asset URLs.
  assetPrefix: isProd ? '/cybergaurd/' : undefined,
  images: {
    unoptimized: true, // Required for static export as Next.js image optimization service isn't available.
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