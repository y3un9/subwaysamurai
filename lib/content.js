import fs from 'node:fs/promises'
import url from 'node:url'
import path from 'node:path'

import matter from 'gray-matter'
import { format, parse, isBefore } from 'date-fns'

import config from '../config.json' assert { type: 'json' }

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const contentDir = path.join(__dirname, '../content')
const postsDir = path.join(contentDir, 'posts')

export async function getPosts() {
  let files = await fs.readdir(postsDir, { withFileTypes: true })
    .then(dirents => dirents.filter(dirent => (
        dirent.isFile()
        && path.extname(dirent.name) === '.md'))
    )
  let posts = (await Promise.all(
    files.map(file => fs.readFile(
      path.join(file.path, file.name),
      'utf-8'
    ))
  ))
  return posts
    .map(parseMD)
    .sort((a, b) =>
      isBefore(
        parse(a.date, config.dateFormat, null),
        parse(b.date, config.dateFormat, null)
      )
      ? 1
      : -1
    )
}

export async function getPostsByTag(tag) {
  let posts = await getPosts()
  return posts.filter(post => post.tags.includes(tag))
}

export async function getTags(list) {
  let posts = Array.isArray(list)
    ? list
    : await getPosts()
  let tags = new Set()
  posts.forEach(post => 
    (post.tags || []).forEach(tag => tags.add(tag))
  )
  return Array.from(tags)
}

export function getContent(filePath) {
  return fs.readFile(path.join(contentDir, filePath), 'utf-8')
}

export function parseMD(fileContent) {
  let { data, content } = matter(fileContent)
  return {
    ...Object.fromEntries(
      Object.entries(data).map(([k, v]) => ([
        k,
        v instanceof Date
          ? format(v, config.dateFormat)
          : v
      ]))
    ),
    content
  }
}

export function concatTitle(subtitle) {
  return subtitle
    ? `${subtitle} | ${config.title}`
    : config.title
}