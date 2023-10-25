import Link from 'next/link'
import List from '../../../components/List'

import { concatTitle, getPostsByTag, getTags } from '../../../lib/content'

export const metadata = {
  title: concatTitle('Tags')
}

export default async function Tag({
  params
}) {
  let tag = decodeURIComponent(
    Array.isArray(params.tag)
      ? params.tag[0]
      : ''
  )
  let posts = await getPostsByTag(tag)

  return (
    <>
      <h3>Tags</h3>
      <h3 style={{ marginBottom: 0 }}>
        Filtering for "{tag}"
      </h3>
      <small>
        <Link href="/posts">Remove filter</Link>
      </small>
      <List
        baseURL="/posts"
        items={posts}
      />
    </>
  )
}

export async function generateStaticParams() {
  let tags = await getTags()
  return tags.map(tag => ({ tag: [tag] }))
}