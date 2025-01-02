/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  reactStrictMode: true,
  swcMinify: false, // Temporarily disable SWC minification
  experimental: {
    // Use Babel instead of SWC
    forceSwcTransforms: false
  }
};

export default nextConfig;