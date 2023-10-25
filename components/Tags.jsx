import Link from 'next/link'

export default function Tags({
  tags
}) {
  return (
    <p>
      {tags.map((tag, index) => (
        <>
          <Link
            key={tag}
            href={`/tags/${encodeURIComponent(tag)}`}
          >
            {`#${tag}`}
          </Link>
          {index !== tags.length - 1 ? ' ' : ''}
        </>
      ))}
    </p>
  )
}