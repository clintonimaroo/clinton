import Link from 'next/link'

import type { ExperienceEntry } from '@/types'

type TimelineProps = {
  entries: ExperienceEntry[]
}

export default function Timeline({ entries }: TimelineProps) {
  return (
    <ul className="tl">
      {entries.map((entry) => (
        <li key={entry.id} className="tl-entry">
          {entry.logos && entry.logos.length > 0 && (
            <span className="tl-logos">
              {entry.logos.map((logo) => (
                <span key={logo.href} className="tl-avatar">
                  <a
                    className="tl-logo"
                    href={logo.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={`${logo.name} website (opens in a new tab)`}
                  >
                    <img src={logo.src} alt="" />
                  </a>
                </span>
              ))}
            </span>
          )}

          <span className="tl-head">
            {entry.href ? (
              <a className="tl-company" href={entry.href} target="_blank" rel="noreferrer noopener">
                {entry.company}
              </a>
            ) : (
              <span className="tl-company">{entry.company}</span>
            )}

            {entry.badge && <span className="tl-badge">{entry.badge}</span>}
          </span>

          <div className="tl-body">
            <p className="tl-role">{entry.role}</p>
            <p className="tl-desc">{entry.description}</p>
          </div>

          {entry.cases && entry.cases.length > 0 && (
            <ul className="tl-cases">
              {entry.cases.map((item) => (
                <li key={item.href} className="tl-case">
                  <Link className="case" href={item.href}>
                    {item.shots && item.shots.length > 0 && (
                      <span className="case-shots" aria-hidden="true">
                        {item.shots.map((shot) => (
                          <span key={shot} className="cs-shot">
                            <img src={shot} alt="" draggable="false" />
                          </span>
                        ))}
                      </span>
                    )}
                    <span className="case-text">
                      <span className="case-title">{item.title}</span>
                      <span className="case-desc">{item.description}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  )
}
