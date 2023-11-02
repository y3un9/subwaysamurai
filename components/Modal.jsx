'use client'

import {useEffect, useCallback, KeyboardEventHandler} from 'react'
import {useRouter} from 'next/navigation'
import ClientOnlyPortal from './ClientOnlyPortal'

export default function Modal({
  isOpen,
  onClose,
  closeHref,
  children
}) {
  let router = useRouter()

  useEffect(() => {
    /** @type {KeyboardEventHandler} */
    const handleKeyDown = e => e.key === 'Escape' && handleCloseClick()
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  const handleCloseClick = useCallback(e => {
    if (typeof onClose === 'function') {
      onClose(e)
      return
    }
    if (typeof closeHref === 'string') {
      router.push(closeHref)
    }
  }, [ onClose, closeHref ])

  const handleModalClick = useCallback(e => {
    const findAncestorBySelector = (node, selector) => {
      if (node?.matches(selector)) {
        return node
      }
      if (node?.parentElement) {
        return findAncestorBySelector(node.parentElement, selector)
      }
      return null
    }
    if (!findAncestorBySelector(e.target, '.content')) {
      handleCloseClick(e)
    }
  }, [ handleCloseClick ])

  if (!isOpen) {
    return null
  }
  return (
    <ClientOnlyPortal selector="body">
      <div
        className="modal"
        onClick={handleModalClick}
      >
        <div
          className="close"
          onClick={handleCloseClick}
        >
          X
        </div>
        <div className="content">
          {children}
        </div>
      </div>
    </ClientOnlyPortal>
  )
}