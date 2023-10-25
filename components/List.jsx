import path from 'node:path'

import Link from 'next/link'

export default function List({
  baseURL,
  items
}) {
  return (
    <ul className="blog-posts">
      {items.map(item => (
        <li key={item.title}>
          <Link href={path.join(baseURL, encodeURIComponent(item.title))}>{item.title}</Link>
          <span>
            <time>{item.date}</time>
          </span>
        </li>
      ))}
    </ul>
  )
}