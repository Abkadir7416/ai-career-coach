/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Add an array of allowed external image domains
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'randomuser.me', // <-- Add this hostname
        port: '',
        pathname: '/api/portraits/**', // Use a wildcard if images are in a subdirectory
      },
      // You can add more domains here if needed
    ],
    // OR, for Next.js versions < 13.4, use the 'domains' property:
    // domains: ['randomuser.me'],
  },
};

export default nextConfig;
