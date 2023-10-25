import Markdown from './Markdown'

import Tags from './Tags'

import { getContent, parseMD } from '../lib/content'

export default async function Article({
  path
}) {
  let fileContent = await getContent(path)
  let {
    title,
    date,
    content,
    tags
  } = parseMD(fileContent)

  return (
    <>
      <article>
        {title ? <h1 className="article-title">{title}</h1> : null}
        {date ? <p><i><time>{date}</time></i></p> : null}
        <section className="article-content">
          <Markdown>
            {content}
          </Markdown>
        </section>
      </article>
      <Tags tags={tags} />
    </>
  )
}