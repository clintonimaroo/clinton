import type { ReactNode } from 'react'

type SocialLink = {
  name: string
  href: string
  icon: ReactNode
}

const SCHOLAR_URL = ''

const LINKS: SocialLink[] = [
  {
    name: 'GitHub',
    href: 'https://github.com/clintonimaroo',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.35.96.1-.75.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.58.23 2.75.11 3.04.73.81 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.25 5.68.41.35.77 1.05.77 2.12 0 1.53-.01 2.76-.01 3.14 0 .31.2.67.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/clintonimaro/',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    name: 'X',
    href: 'https://x.com/clintonimaro',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.451-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    name: 'Google Scholar',
    href: SCHOLAR_URL,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 3 1.5 9.5 12 16l8-4.95V17h2V9.5L12 3Z" fill="currentColor" />
        <path d="M6 13.4v3.35C6 18.6 8.7 20.5 12 20.5s6-1.9 6-3.75V13.4L12 17.1l-6-3.7Z" fill="currentColor" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="home site-end">
      <div className="links">
        {LINKS.map((link) =>
          link.href ? (
            <a
              key={link.name}
              href={link.href}
              rel="noopener noreferrer"
              target="_blank"
              aria-label={`Clinton Imaro on ${link.name} (opens in a new tab)`}
              title={link.name}
            >
              {link.icon}
            </a>
          ) : (
            <span key={link.name} className="link-soon" title={`${link.name} (coming soon)`}>
              {link.icon}
            </span>
          )
        )}
      </div>

      <p className="updated">last updated: 11/2026</p>
    </footer>
  )
}
