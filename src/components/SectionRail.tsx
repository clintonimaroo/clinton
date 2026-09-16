'use client'

import { useEffect, useRef, useState } from 'react'

export type RailItem = {
  id: string
  label: string
  /** Optional 24x24 path drawn after the label. */
  iconPath?: string
  /** Shown in the rail but not linked, for sections that aren't published yet. */
  locked?: boolean
}

type SectionRailProps = {
  items: RailItem[]
}

export default function SectionRail({ items }: SectionRailProps) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [box, setBox] = useState<{ top: number; height: number } | null>(null)
  const [activeId, setActiveId] = useState(items[0]?.id ?? '')

  useEffect(() => {
    let frame = 0

    // The track spans from the first section to the end of the last one, so the
    // sticky nav inside it only travels alongside the content.
    const measureBox = () => {
      const parent = trackRef.current?.offsetParent as HTMLElement | null
      const first = document.getElementById(items[0]?.id ?? '')
      const last = document.getElementById(items[items.length - 1]?.id ?? '')

      if (!parent || !first || !last) {
        return
      }

      const parentTop = parent.getBoundingClientRect().top
      const top = first.getBoundingClientRect().top - parentTop
      const height = last.getBoundingClientRect().bottom - parentTop - top

      setBox({ top: Math.round(top), height: Math.round(height) })
    }

    const measureActive = () => {
      const atBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 2

      if (atBottom) {
        setActiveId(items[items.length - 1]?.id ?? '')
        return
      }

      const line = window.innerHeight * 0.35
      let current = items[0]?.id ?? ''

      items.forEach((item) => {
        const section = document.getElementById(item.id)
        if (section && section.getBoundingClientRect().top <= line) {
          current = item.id
        }
      })

      setActiveId(current)
    }

    const onScroll = () => {
      if (!frame) {
        frame = window.requestAnimationFrame(() => {
          frame = 0
          measureActive()
        })
      }
    }

    const onResize = () => {
      measureBox()
      measureActive()
    }

    measureBox()
    measureActive()

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize, { passive: true })

    const observer = new ResizeObserver(measureBox)
    observer.observe(document.body)

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame)
      }
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
      observer.disconnect()
    }
  }, [items])

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    const section = document.getElementById(id)
    if (!section) {
      return
    }

    event.preventDefault()

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    section.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' })
    window.history.replaceState(null, '', `#${id}`)
    setActiveId(id)
  }

  return (
    <div className="rail-track" ref={trackRef} style={box ? { top: box.top, height: box.height } : undefined}>
      <nav className="rail" aria-label="Sections">
        {items.map((item) => {
          const icon = item.iconPath && (
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path clipRule="evenodd" fillRule="evenodd" d={item.iconPath} />
            </svg>
          )

          if (item.locked) {
            return (
              <span key={item.id} className="txt is-locked" aria-disabled="true">
                {item.label}
                {icon}
              </span>
            )
          }

          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={item.id === activeId ? 'txt on' : 'txt'}
              aria-current={item.id === activeId ? 'true' : undefined}
              onClick={(event) => handleClick(event, item.id)}
            >
              {item.label}
              {icon}
            </a>
          )
        })}
      </nav>
    </div>
  )
}
