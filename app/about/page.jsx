import Content from '../../components/Content'

import { concatTitle } from '../../lib/content'

export const metadata = {
  title: concatTitle('About')
}

export default function About() {
  return (
    <Content path="about.md" />
  )
}