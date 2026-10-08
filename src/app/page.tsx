'use client'

import { useEffect, useRef, useState } from 'react'

import Timeline from '@/components/Timeline'
import { EXPERIENCE } from '@/lib/data'

const shineTimers = new WeakMap<HTMLElement, number>()

function runShine(target: HTMLElement) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return
  }

  const easing =
    getComputedStyle(document.documentElement).getPropertyValue('--ease-out-quart').trim() ||
    'cubic-bezier(0.165, 0.84, 0.44, 1)'

  if (typeof target.animate === 'function') {
    target.animate(
      [{ backgroundPosition: '100% 50%' }, { backgroundPosition: '0% 50%' }],
      { duration: 1000, easing }
    )
    return
  }

  const currentTimer = shineTimers.get(target)

  if (currentTimer) {
    window.clearTimeout(currentTimer)
  }

  target.classList.remove('is-shining')
  void target.offsetWidth
  target.classList.add('is-shining')

  const nextTimer = window.setTimeout(() => {
    target.classList.remove('is-shining')
    shineTimers.delete(target)
  }, 1000)

  shineTimers.set(target, nextTimer)
}

const EMAIL = 'hi@clintonimaro.com'

export default function Home() {
  const [copied, setCopied] = useState(false)
  const copiedTimer = useRef<number | undefined>(undefined)

  useEffect(() => () => window.clearTimeout(copiedTimer.current), [])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
    } catch {
      // Clipboard can be blocked (insecure context, denied permission).
      return
    }

    setCopied(true)
    window.clearTimeout(copiedTimer.current)
    copiedTimer.current = window.setTimeout(() => setCopied(false), 1600)
  }

  useEffect(() => {
    const links = document.querySelectorAll('a')
    const handleTouchStart = (event: Event) => {
      const target = event.currentTarget as HTMLAnchorElement | null
      target?.classList.add('active-touch')
    }
    const handleTouchEnd = (event: Event) => {
      const target = event.currentTarget as HTMLAnchorElement | null
      target?.classList.remove('active-touch')
    }
    const shineLinks = document.querySelectorAll<HTMLElement>('.shine-hover')
    const handleNativeShine = (event: Event) => {
      const target = event.currentTarget as HTMLElement | null
      if (target) {
        runShine(target)
      }
    }

    links.forEach((link) => {
      link.addEventListener('touchstart', handleTouchStart, { passive: true })
      link.addEventListener('touchend', handleTouchEnd, { passive: true })
    })
    shineLinks.forEach((link) => {
      link.addEventListener('mouseenter', handleNativeShine)
      link.addEventListener('pointerenter', handleNativeShine)
    })

    return () => {
      links.forEach((link) => {
        link.removeEventListener('touchstart', handleTouchStart)
        link.removeEventListener('touchend', handleTouchEnd)
      })
      shineLinks.forEach((link) => {
        link.removeEventListener('mouseenter', handleNativeShine)
        link.removeEventListener('pointerenter', handleNativeShine)
      })
    }
  }, [])

  return (
    <>
      <div className="container">
        <header>
        <h1>Clinton Imaro</h1>
        <p className="subtitle">ml, product, infra, hardware</p>
      </header>

      <section id="intro" className="intro-section">
        <p>
          Today currently building Siri for codebase at{' '}
          <a
            href="https://heyfathom.com"
            target="_blank"
            rel="noopener"
            className="shine-hover"
          >
            heyfathom.com
          </a>
          . 1 exit so far.
        </p>
        <p>
          I care a lot about design and like to build impossible things. With extreme practicality, I make crazy ideas real. I&apos;m drawn
          to AI-native products, and to building things that last.
        </p>
        <p>
          Outside work, I like travelling, tennis, and just collecting those moments. My memories are continuously being warped by new perspectives.
        </p>
      </section>

      <section id="experience">
        <h2>Experience</h2>
        <Timeline entries={EXPERIENCE} />

        <div style={{ marginTop: '20px' }}>
          <a
            href="https://www.linkedin.com/in/clintonimaro/"
            aria-label="View more experience on LinkedIn"
            target="_blank"
            rel="noopener"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}
          >
            see more
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 4.50098H5.5C3.61438 4.50098 2.67157 4.50098 2.08578 5.08675C1.5 5.67255 1.5 6.61535 1.5 8.501V10.001"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7 2.00098L9.5 4.501L7 7.001"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </section>

      <section id="research">
        <h2>Selected Research</h2>

        <ul className="research-list">
          <li>
            Disaster-aware uav navigation - vision-based hazard classification (mobilenetv2, 85.2% accuracy) + ppo-clip agents, a*/ppo evaluation under simulated disaster conditions under{' '}
            <a href="https://ieeexplore.ieee.org/author/37086069468" target="_blank" rel="noopener">
              Dr. Peter Taiwo
            </a>{' '}
            (ITC 2026)
          </li>
          <li>
            Security research on automated mobility systems at the transportation and urban infrastructure studies lab, under{' '}
            <a href="https://zkhattak.weebly.com/" target="_blank" rel="noopener">
              Dr. zulqarnain khattak
            </a>
            . focused on ml-based anomaly detection and vulnerability analysis in connected vehicle networks.
          </li>
          <li>
            Decision modeling research (CDMN) at the computer science department of{' '}
            <a href="https://www.hogent.be/" target="_blank" rel="noopener">
              HOGENT
            </a>
            . focused on ml classification pipelines and making model rationale auditable for faculty reviewers.
          </li>
        </ul>
      </section>

      <section id="publications">
        <h2>Publications</h2>

        <div className="project">
          <h3>
            <span>Disaster-Aware UAV Path Planning with Vision-Integrated Proximal Policy Optimization</span>
          </h3>
          <p>C. Imaro and P. Taiwo · International Telemetering Conference (ITC) 2026 · Accepted, forthcoming Oct 2026</p>
        </div>

        <div className="project">
          <h3>
            <span>Performance Evaluation of Monocular and Stereo Vision for Autonomous UAV Collision Avoidance in Disaster Response Environments</span>
          </h3>
          <p>C. Imaro and P. Taiwo · International Telemetering Conference (ITC) 2026 · Accepted, forthcoming Oct 2026</p>
        </div>
      </section>

      <section id="connect">
        <h2>Connect</h2>
        <div className="contact">
          <p>
            I post sometimes on{' '}
            <a href="https://x.com/clintonimaroo" aria-label="Clinton's X profile" target="_blank" rel="noopener" className="underline-link">
              X (twitter)
            </a>{' '}
            - or send me an email at{' '}
            <span className="email-link">
              <a href={`mailto:${EMAIL}`} className="underline-link">
                {EMAIL}
              </a>
              <button
                type="button"
                className="email-copy"
                onClick={copyEmail}
                aria-label={copied ? 'Email address copied' : `Copy ${EMAIL}`}
                title={copied ? 'Copied' : 'Copy'}
              >
                {copied ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M4.75 12.5L9.5 17.25L19.25 6.75"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M7.75 7.75V6.75C7.75 5.09315 9.09315 3.75 10.75 3.75H17.25C18.9069 3.75 20.25 5.09315 20.25 6.75V13.26C20.25 14.9169 18.9069 16.26 17.25 16.26H16.25M3.75 10.75V17.25C3.75 18.9069 5.09315 20.25 6.75 20.25H13.25C14.9069 20.25 16.25 18.9069 16.25 17.25V10.75C16.25 9.09315 14.9069 7.75 13.25 7.75H6.75C5.09315 7.75 3.75 9.09315 3.75 10.75Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
              <span className="visually-hidden" role="status" aria-live="polite">
                {copied ? 'Email address copied' : ''}
              </span>
            </span>
          </p>
        </div>
      </section>
      </div>
    </>
  )
}
