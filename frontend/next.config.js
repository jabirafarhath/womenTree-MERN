/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pbs.twimg.com',
        port: '',
        pathname: '/profile_images/1623868562103500802/XOIKsyCe_400x400.jpg',
      },
    ],
  },
}

module.exports = nextConfig
