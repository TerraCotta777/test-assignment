/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['frontend-test-api.yoldi.agency'],
  },
  env: {
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
  },
}

module.exports = nextConfig
