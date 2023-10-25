import config from '../config.json' assert { type: 'json' }

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${config.baseURL}/sitemap.xml`
  }
}