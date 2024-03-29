import './global.css'

import Link from 'next/link'
import NavMenu from '../components/NavMenu'

import config from '../config.json' assert { type: 'json' }

/** @type {import('next').Metadata} */
export const metadata = {
  title: config.title,
  description: config.description,
  keywords: config.keywords,
}

export default function RootLayout({
  children
}) {
  return (
    <html>
      <body>
        <Header
          title={config.title}
          menu={config.menu}
        />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

export function Header({
  title,
  menu
}) {
  return (
    <header>
      <Link className="title" href="/">
        <h2>{title}</h2>
      </Link>
      <NavMenu menu={menu} />
    </header>
  )
}

export function Footer() {
  return (
    <footer>
      <h4>Don't mess up the world.</h4>
      <p>
        <small>
          Powered by <a href="https://nextjs.org" target="_blank">Next.js</a>
        </small>
      </p>
    </footer>
  )
}
