/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['ipfs-gw.stargaze-apis.com'],
  }
}

module.exports = nextConfig
