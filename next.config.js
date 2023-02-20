const { i18n } = require('./next-i18next.config')

const dev = process.env.NODE_ENV !== 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/dobleb/**',
      },
      // TODO: Remove this when the project is ready for production
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
      }
    ]
  }
}

module.exports = nextConfig
