/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    emotion: {
    }
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://electornic.github.io/securities-web' : ''
}

module.exports = nextConfig
