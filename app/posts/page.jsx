import List from '../../components/List'
import Tags from '../../components/Tags'

import { getPosts, getTags, concatTitle } from '../../lib/content'

export const metadata = {
  title: concatTitle('Posts')
}

export default async function Posts() {
  let posts = await getPosts()
  let tags = await getTags(posts)

  return (
    <>
      <h3>Posts</h3>
      <List
        baseURL="/posts"
        items={posts}
      />
      <small>
        <Tags
          tags={tags}
        />
      </small>
    </>
  )
}