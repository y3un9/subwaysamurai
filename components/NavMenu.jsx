'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavMenu({
  menu
}) {
  const pathname = usePathname()
  return (
    <nav>
      {menu.map(item => (
        <Link
          key={item.name}
          className={
            item.url === '/'
              ? ''
              : item.url === pathname
                ? 'active'
                :  pathname.startsWith(item.url)
                  ? 'active'
                  : ''
          }
          href={item.url}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  )
}