import config from '../config.json' assert { type: 'json' }

export default function sitemap() {
  return config.menu.map(item => ({
    url: `${config.baseURL}${item.url}`,
    lastModified: new Date(),
    changeFrequency: 'always',
    priority: 1
  }))
}