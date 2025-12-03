'use client'

import { useEffect, useState } from 'react'

type Theme = 'system' | 'light' | 'dark'

export default function Footer() {
  const year = new Date().getFullYear()
  const [theme, setTheme] = useState<Theme>('dark')

  // Initialize theme from localStorage or default to dark
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null
    if (savedTheme) {
      setTheme(savedTheme)
      applyTheme(savedTheme)
    } else {
      setTheme('dark')
      applyTheme('dark')
    }
  }, [])

  // Apply theme to document
  const applyTheme = (selectedTheme: Theme) => {
    const root = document.documentElement

    if (selectedTheme === 'system') {
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      root.classList.toggle('dark', systemPrefersDark)
    } else {
      root.classList.toggle('dark', selectedTheme === 'dark')
    }
  }

  // Handle theme change
  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    applyTheme(newTheme)
  }

  // Listen for system theme changes
  useEffect(() => {
    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      const handleChange = (e: MediaQueryListEvent) => {
        document.documentElement.classList.toggle('dark', e.matches)
      }
      mediaQuery.addEventListener('change', handleChange)
      return () => mediaQuery.removeEventListener('change', handleChange)
    }
  }, [theme])

  return (
    <footer>
      <div className="footer-content">
        <p className="copyright">© {year} Clinton Imaro</p>
        <div className="footer-theme-toggle" aria-label="Theme selector">
          <div className="theme-toggle-pill" data-theme={theme}>
            <div className="theme-toggle-indicator" />
            <button
              className={`theme-toggle-button ${theme !== 'system' ? 'theme-toggle-button--muted' : ''}`}
              aria-label="System theme"
              onClick={() => handleThemeChange('system')}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="3" width="12" height="8" rx="2" stroke="#6b7280" strokeWidth="1.2" />
                <rect x="6.5" y="12" width="3" height="1.5" rx="0.75" fill="#6b7280" />
              </svg>
            </button>
            <button
              className={`theme-toggle-button ${theme !== 'light' ? 'theme-toggle-button--muted' : ''}`}
              aria-label="Light theme"
              onClick={() => handleThemeChange('light')}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="8" cy="8" r="3.5" stroke="#6b7280" strokeWidth="1.2" />
                <path
                  d="M8 1v2M8 13v2M1 8h2M13 8h2M3.2 3.2l1.4 1.4M11.4 11.4l1.4 1.4M12.8 3.2l-1.4 1.4M3.2 12.8l1.4-1.4"
                  stroke="#6b7280"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <button
              className={`theme-toggle-button ${theme !== 'dark' ? 'theme-toggle-button--muted' : ''}`}
              aria-label="Dark theme"
              onClick={() => handleThemeChange('dark')}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.5 1.8a6.2 6.2 0 1 0 4.7 10.6A6 6 0 0 1 9.5 1.8Z"
                  stroke="#6b7280"
                  strokeWidth="1.2"
                  fill="none"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

