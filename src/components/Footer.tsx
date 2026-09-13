'use client'

const LINKS = [
  { label: 'GitHub', href: 'https://github.com/clintonimaroo', site: 'GitHub' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/clintonimaro/', site: 'LinkedIn' },
  { label: 'blog', href: 'https://blog.clintonimaro.com', site: 'blog' },
  { label: 'X', href: 'https://x.com/clintonimaroo', site: 'X' },
  { label: 'Instagram', href: 'https://www.instagram.com/clintonimaro/', site: 'Instagram' },
]

function toggleTheme() {
  const root = document.documentElement
  const next = root.dataset.theme === 'dark' ? 'light' : 'dark'
  root.dataset.theme = next

  try {
    localStorage.setItem('theme', next)
  } catch {
    // Storage can be blocked (private mode); the toggle still works for this visit.
  }
}

export default function Footer() {
  return (
    <footer className="container site-footer">
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()}, Clinton Imaro</span>
        <span className="footer-links">
          {LINKS.map((link) => (
            <a
              key={link.href}
              className="link-underline"
              href={link.href}
              rel="noopener noreferrer"
              target="_blank"
              title={`Clinton Imaro on ${link.site}`}
            >
              {link.label} ↗
            </a>
          ))}

          <button className="theme-toggle" type="button" aria-label="Toggle theme" title="Toggle theme" onClick={toggleTheme}>
            <svg className="icon-sun" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2" />
              <path d="M12 20v2" />
              <path d="m4.93 4.93 1.41 1.41" />
              <path d="m17.66 17.66 1.41 1.41" />
              <path d="M2 12h2" />
              <path d="M20 12h2" />
              <path d="m6.34 17.66-1.41 1.41" />
              <path d="m19.07 4.93-1.41 1.41" />
            </svg>
            <svg className="icon-moon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
            </svg>
          </button>
        </span>
      </div>
    </footer>
  )
}
