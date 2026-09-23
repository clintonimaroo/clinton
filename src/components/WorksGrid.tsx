'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

import { WORKS } from '@/lib/works'
import type { WorkBox, WorkCard, WorkVideo } from '@/types'

/** Card width the geometry in works.ts is authored at. */
const DESIGN_WIDTH = 450
/** How tall a card is at that width, unless it sets its own height. */
const DESIGN_HEIGHT = 500

/** Which labels each button gathers. */
const FILTERS: { name: string; tags: string[] | null }[] = [
  { name: 'All', tags: null },
  { name: 'Hackathons', tags: ['Hackathon'] },
  { name: 'Mobile Apps', tags: ['Mobile App'] },
]

/**
 * A card's label is what the caption prints; `tags` lets it answer to a filter
 * it isn't captioned as.
 */
const tagsOf = (card: WorkCard) => [card.label, ...(card.tags ?? [])]

/** Design-space box to CSS, scaled by the grid's --k. */
const boxStyle = (box: WorkBox) => ({
  left: `calc(${box.left}px * var(--k, 1))`,
  top: `calc(${box.top}px * var(--k, 1))`,
  width: `calc(${box.width}px * var(--k, 1))`,
  height: `calc(${box.height}px * var(--k, 1))`,
})

const ARROW = (
  <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
    <path
      d="M4.5 3.32516L8.4577 3.54232L8.6748 7.5M8.25 3.75L3.25 8.75"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

function TileVideo({ video, name }: { video: WorkVideo; name?: string }) {
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const el = ref.current

    if (!el) {
      return
    }

    // Some browsers check the property rather than the attribute before they
    // will autoplay a clip.
    el.defaultMuted = true
    el.muted = true

    let visible = false

    const play = () => {
      if (!visible) {
        return
      }

      // Autoplay can still be refused; the poster stays up if it is.
      void el.play().catch(() => {})
    }

    // Safari often isn't ready to play the moment a clip scrolls into view.
    el.addEventListener('canplay', play)
    el.addEventListener('loadeddata', play)

    // A page of cards shouldn't decode every clip at once: play only on screen.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visible = entry.isIntersecting

          if (visible) {
            play()
          } else {
            el.pause()
          }
        })
      },
      { threshold: 0.2 }
    )

    observer.observe(el)

    return () => {
      el.removeEventListener('canplay', play)
      el.removeEventListener('loadeddata', play)
      observer.disconnect()
    }
  }, [])

  return (
    <video
      ref={ref}
      className="tile-vid"
      muted
      loop
      autoPlay
      playsInline
      preload="metadata"
      disablePictureInPicture
      poster={video.poster}
      src={video.src}
      aria-label={name}
      style={boxStyle(video)}
    />
  )
}

/** A clip that stands in for the artwork while the pointer is on the card. */
function HoverClip({ clip }: { clip: WorkVideo }) {
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const el = ref.current
    const tile = el?.closest('.tile')

    if (!el || !tile) {
      return
    }

    // Set on the element, since React won't write the muted attribute and a
    // clip with sound is not allowed to start on its own.
    el.defaultMuted = true
    el.muted = true

    // Nothing runs until someone looks at the card, and it starts from the top
    // each time rather than resuming halfway through.
    const play = () => {
      el.currentTime = 0
      void el.play().catch(() => {})
    }

    const stop = () => el.pause()

    tile.addEventListener('mouseenter', play)
    tile.addEventListener('mouseleave', stop)

    return () => {
      tile.removeEventListener('mouseenter', play)
      tile.removeEventListener('mouseleave', stop)
    }
  }, [])

  return (
    <video
      ref={ref}
      className="tile-art tile-hover"
      muted
      loop
      playsInline
      preload="metadata"
      disablePictureInPicture
      poster={clip.poster}
      src={clip.src}
      style={boxStyle(clip)}
    />
  )
}

/** A description, with the one phrase that carries a link split out of it. */
function TileDesc({ block }: { block: NonNullable<WorkCard['block']> }) {
  const { description, descLink } = block
  const at = descLink ? description.indexOf(descLink.text) : -1

  if (!descLink || at < 0) {
    return <p className="tile-desc">{description}</p>
  }

  return (
    <p className="tile-desc">
      {description.slice(0, at)}
      <a href={descLink.href} target="_blank" rel="noopener noreferrer">
        {descLink.text}
      </a>
      {description.slice(at + descLink.text.length)}
    </p>
  )
}

export default function WorksGrid() {
  const gridRef = useRef<HTMLDivElement>(null)
  const tilesRef = useRef<(HTMLDivElement | null)[]>([])
  const laidOutAt = useRef(0)
  const [active, setActive] = useState('All')
  const [settled, setSettled] = useState(false)

  const layout = useCallback(() => {
    const grid = gridRef.current

    if (!grid) {
      return
    }

    // Column count and gutter come from the design: three columns at 20px, one
    // at 10px on a phone. Card width falls out of the container, and everything
    // inside a card scales by the same factor, handed down as --k.
    const tags = FILTERS.find((filter) => filter.name === active)?.tags ?? null
    const mobile = window.innerWidth <= 640
    const columnCount = mobile ? 1 : 3
    const gutter = mobile ? 10 : 20
    const gridWidth = grid.clientWidth
    const cardWidth = (gridWidth - gutter * (columnCount - 1)) / columnCount

    laidOutAt.current = gridWidth
    grid.style.setProperty('--k', String(cardWidth / DESIGN_WIDTH))

    const heights: number[] = new Array(columnCount).fill(0)
    let deepest = 0

    // Sorted by row, so a single column follows the design down the page.
    const order = WORKS.map((card, index) => ({ card, index }))
      .filter(({ card }) => !tags || tagsOf(card).some((tag) => tags.includes(tag)))
      .sort((a, b) => a.card.row - b.card.row || a.card.column - b.card.column)

    tilesRef.current.forEach((tile) => {
      if (tile) {
        tile.style.display = 'none'
      }
    })

    order.forEach(({ card, index }) => {
      const tile = tilesRef.current[index]

      if (!tile) {
        return
      }

      tile.style.display = ''

      // Unfiltered cards keep the column the design put them in; filtered ones
      // fall into whichever column is currently shortest.
      const column =
        columnCount === 1
          ? 0
          : tags
            ? heights.indexOf(Math.min(...heights))
            : card.column

      const top = heights[column]
      const height = (card.height ?? DESIGN_HEIGHT) * (cardWidth / DESIGN_WIDTH)

      heights[column] = top + height + gutter

      tile.style.left = `${column * (cardWidth + gutter)}px`
      tile.style.top = `${top}px`
      tile.style.width = `${cardWidth}px`
      tile.style.height = `${height}px`

      deepest = Math.max(deepest, top + height)
    })

    // The cards are absolute and carry no height, so the grid has to be told.
    grid.style.height = `${deepest}px`
  }, [active])

  useEffect(() => {
    const grid = gridRef.current

    if (!grid) {
      return
    }

    layout()

    // The grid's own width is the input, so watch that rather than the window
    // alone: it also catches the stylesheet landing after this first pass, which
    // otherwise leaves the cards sized for a full-width grid and the page
    // scrolling sideways.
    const observer = new ResizeObserver(() => {
      if (grid.clientWidth !== laidOutAt.current) {
        layout()
      }
    })

    observer.observe(grid)

    // Column count and gutter key off the viewport, which can change without
    // the grid's width changing with it.
    window.addEventListener('resize', layout)

    return () => {
      observer.disconnect()
      window.removeEventListener('resize', layout)
    }
  }, [layout])

  // Held back a frame so the first paint lands rather than slides in.
  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setSettled(true))

    return () => window.cancelAnimationFrame(frame)
  }, [])

  return (
    <section className="works" id="works">
      <div className="works-head">
        <span>My Works</span>

        <div className="works-filters">
          {FILTERS.map((filter) => (
            <button
              key={filter.name}
              type="button"
              aria-pressed={filter.name === active}
              onClick={() => setActive(filter.name)}
            >
              {filter.name}
            </button>
          ))}
        </div>
      </div>

      <div className={settled ? 'works-grid settled' : 'works-grid'} ref={gridRef}>
        {WORKS.map((card, index) => {
          const caption = (
            <>
              <div className="tile-id">
                {card.num && <span className="tile-num">{card.num}</span>}
                {card.name && <span className="tile-name">{card.name}</span>}
              </div>
              <span className="tile-label">{card.label}</span>
            </>
          )

          return (
            <div
              key={card.id}
              ref={(node) => {
                tilesRef.current[index] = node
              }}
              className={['tile', card.dark && 'on-dark', card.cap70 && 'cap-70']
                .filter(Boolean)
                .join(' ')}
              style={{
                background: card.background,
                border: card.border === false ? 'none' : `0.6px solid ${card.border ?? '#e4e4e4'}`,
              }}
            >
              {card.video && <TileVideo video={card.video} name={card.name} />}

              {card.art?.map((art) => (
                <img
                  key={`${art.src}-${art.top}`}
                  className="tile-art"
                  src={art.src}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  style={boxStyle(art)}
                />
              ))}

              {card.hover && (
                <img
                  className="tile-art tile-hover"
                  src={card.hover.src}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  style={boxStyle(card.hover)}
                />
              )}

              {card.hoverClip && <HoverClip clip={card.hoverClip} />}

              {card.block ? (
                <div className="tile-block">
                  <div className="tile-cap">{caption}</div>
                  <TileDesc block={card.block} />
                  {card.block.role && <p className="tile-role">{card.block.role}</p>}
                  <a
                    className="tile-link"
                    href={card.block.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View the ${card.name} live site`}
                  >
                    {card.block.link}
                    {ARROW}
                  </a>
                </div>
              ) : (
                <div className={`tile-cap fixed ${card.caption ?? 'bottom'}`}>{caption}</div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
