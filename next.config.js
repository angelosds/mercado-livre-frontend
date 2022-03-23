const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n,
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  },
  images: {
    domains: ['http2.mlstatic.com']
  }
}

module.exports = nextConfig
