'use client'

import { useEffect, useState } from 'react'

export type RailItem = {
  id: string
  label: string
}

type SectionRailProps = {
  items: RailItem[]
}

export default function SectionRail({ items }: SectionRailProps) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? '')

  useEffect(() => {
    let frame = 0

    const measure = () => {
      frame = 0

      // Pin the last item once the page is scrolled to the bottom, since short
      // trailing sections never reach the activation line.
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
        frame = window.requestAnimationFrame(measure)
      }
    }

    measure()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame)
      }
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
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
    <nav className="section-rail" aria-label="Sections">
      <ul>
        {items.map((item) => {
          const isActive = item.id === activeId

          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={isActive ? 'is-active' : undefined}
                aria-current={isActive ? 'true' : undefined}
                onClick={(event) => handleClick(event, item.id)}
              >
                <span className="section-rail__tick" aria-hidden="true" />
                <span className="section-rail__label">{item.label}</span>
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
