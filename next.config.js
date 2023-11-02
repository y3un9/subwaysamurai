const config = require('./config.json')

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.NODE_ENV === 'production'
    ? 'export'
    : 'standalone',
  skipTrailingSlashRedirect: true,
  basePath: process.env.NODE_ENV === 'production'
    ? config.basePath
    : ''
}

module.exports = nextConfig