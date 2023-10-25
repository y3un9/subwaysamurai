import Markdown from './Markdown'

import { getContent, parseMD } from '../lib/content'

export default async function Content({
  path
}) {
  let fileContent = await getContent(path)
  let {
    content
  } = parseMD(fileContent)

  return (
    <Markdown>
      {content}
    </Markdown>
  )
}