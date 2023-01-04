/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/perguntas',
        destination: '/faq',
        permanent: true,
      },
    ]
  },
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
