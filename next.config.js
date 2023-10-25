/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.NODE_ENV === 'production'
    ? 'export'
    : 'standalone',
  skipTrailingSlashRedirect: true,
  basePath: process.env.DEPLOY_TARGET === 'gh-pages'
    ? '/subwaysamurai'
    : ''
}

module.exports = nextConfig