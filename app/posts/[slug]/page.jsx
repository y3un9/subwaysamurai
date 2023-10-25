import Article from '../../../components/Article'

import { concatTitle, getPosts } from '../../../lib/content'

export default function Post({
  params
}) {
  return (
    <Article path={`posts/${decodeURIComponent(params.slug)}.md`} />
  )
}

export async function generateStaticParams() {
  let posts = await getPosts()
  return posts.map(post => ({
    // slug: encodeURIComponent(post.title)
    slug: post.title
  }))
}

export async function generateMetadata(
  {
    params,
    searchParams
  },
  parent
) {
  return {
    title: concatTitle(decodeURIComponent(params.slug))
  }
}