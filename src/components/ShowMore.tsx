// Created by Clinton Imaro on 27th November 2026.
'use client'

import { Children, useState, type ReactNode } from 'react'

export default function ShowMore({
  children,
  visible = 3,
  className,
}: {
  children: ReactNode
  visible?: number
  className?: string
}) {
  const [open, setOpen] = useState(false)
  const items = Children.toArray(children)
  const shown = open ? items : items.slice(0, visible)
  const hidden = items.length - visible

  return (
    <>
      <div className={className}>{shown}</div>
      {hidden > 0 && (
        <button type="button" className="show-more" onClick={() => setOpen(!open)} aria-expanded={open}>
          {open ? 'see less' : `see ${hidden} more`}
        </button>
      )}
    </>
  )
}
