import type { WorkTile } from '@/types'

type WorkTilesProps = {
  tiles: WorkTile[]
}

export default function WorkTiles({ tiles }: WorkTilesProps) {
  return (
    <div className="tiles">
      {tiles.map((tile) => (
        <div key={tile.id} className="tile-slot">
        <article className="tile on-dark">
          {tile.art?.map((art) => (
            <img
              key={art.src}
              className="tile-art"
              src={art.src}
              alt=""
              decoding="async"
              style={{
                left: `calc(${art.left} * var(--k))`,
                top: `calc(${art.top} * var(--k))`,
                width: `calc(${art.width} * var(--k))`,
                height: `calc(${art.height} * var(--k))`,
              }}
            />
          ))}

          <div className="tile-block">
            <div className="tile-cap">
              <div className="tile-id">
                <span className="tile-num">{tile.num}</span>
                <span className="tile-name">{tile.name}</span>
              </div>
              <span className="tile-label">{tile.label}</span>
            </div>

            <p className="tile-desc">{tile.description}</p>

            {tile.href && (
              <a
                className="tile-link"
                href={tile.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${tile.name} — view live site`}
              >
                View Live Site
                <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path
                    d="M4.5 3.32516L8.4577 3.54232L8.6748 7.5M8.25 3.75L3.25 8.75"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            )}
          </div>
        </article>
        </div>
      ))}
    </div>
  )
}
