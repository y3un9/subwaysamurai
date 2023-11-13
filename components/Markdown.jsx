import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkBreaks from 'remark-breaks'
// import remarkMath from 'remark-math'
// import rehypeKatex from 'rehype-katex'
import rehypeRaw from 'rehype-raw'
// import 'katex/dist/katex.min.css'
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight'
import { xcode } from 'react-syntax-highlighter/dist/esm/styles/hljs'

import path from 'node:path'
import {getPhotoBySlug, getLocalDistPath} from '../lib/content'

/** @type {import('react').FC} */
export default function Markdown({
  children
}) {
  return (
    <ReactMarkdown
      remarkPlugins={[
        remarkGfm,
        // remarkMath,
        remarkBreaks,
      ]}
      rehypePlugins={[
        rehypeRaw,
        // rehypeKatex,
      ]}
      components={{
        pre: ({ children }) => children,
        img: async ({
          src,
          alt,
          node,
          ...props
        }) => {
          let photo = await getPhotoBySlug(path.basename(decodeURIComponent(src), path.extname(decodeURIComponent(src))))
          return (
            <>
              <img
                src={photo ? photo.publicPath : src}
                loading="lazy"
              />
              {alt && <>
                <br />
                <small>{alt}</small>
              </>}
            </>
          )
        },
        code({
          children,
          className,
          node,
          ...props
        }) {
          const match = /language-(\w+)/.exec(className || '')
          return match
            ? (
              <SyntaxHighlighter
                {...props}
                style={xcode}
                language={match[1]}
                wrapLongLines={true}
              >
                {children}
              </SyntaxHighlighter>
            )
            : (
              <code
                {...props}
                className={className}
              >
                {children}
              </code>
            )
        }
      }}
    >
      {children}
    </ReactMarkdown>
  )
}