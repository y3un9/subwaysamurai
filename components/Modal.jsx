'use client'

import {useEffect, useCallback, KeyboardEventHandler} from 'react'
import {createPortal} from 'react-dom'
import {useRouter} from 'next/navigation'

export default function Modal({
  isOpen,
  onClose,
  closeHref,
  children
}) {
  if (!isOpen) {
    return null
  }

  let router = useRouter()

  useEffect(() => {
    /** @type {KeyboardEventHandler} */
    const handleKeyDown = e => e.key === 'Escape' && onClose()
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

  return createPortal(
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
    </div>,
    document.body
  )
}