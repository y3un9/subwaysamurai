import Link from 'next/link'
import ClientOnlyPortal from './ClientOnlyPortal'

export default function Modal({
  isOpen,
  closeHref,
  children
}) {
  if (!isOpen) {
    return null
  }
  return (
    <ClientOnlyPortal selector="body">
      <div
        className="modal"
      >
        <Link
          className="close"
          href={closeHref}
        >
          X
        </Link>
        <div className="content">
          {children}
        </div>
      </div>
    </ClientOnlyPortal>
  )
}