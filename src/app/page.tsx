'use client'

import { useEffect } from 'react'

import SectionRail, { type RailItem } from '@/components/SectionRail'
import Timeline from '@/components/Timeline'
import { EXPERIENCE } from '@/lib/data'

const RAIL_ITEMS: RailItem[] = [
  { id: 'intro', label: 'Overview' },
  { id: 'experience', label: 'Experience' },
  {
    id: 'work',
    label: 'Selected Work',
    locked: true,
    iconPath:
      'M12 1.5c2.761 0 5 2.239 5 5v.745c.22.06.431.138.638.235 1.045.495 1.887 1.337 2.381 2.382.267.563.378 1.165.43 1.849.052.673.051 1.505.051 2.539 0 1.034 0 1.866-.05 2.54-.053.683-.164 1.285-.43 1.848-.495 1.045-1.337 1.887-2.382 2.381-.563.267-1.165.378-1.849.43-.673.052-1.505.051-2.539.051h-2.5c-1.034 0-1.866 0-2.54-.05-.683-.053-1.285-.164-1.848-.43-1.045-.495-1.887-1.337-2.382-2.382-.266-.563-.377-1.165-.43-1.849-.05-.673-.05-1.505-.05-2.539 0-1.034 0-1.866.05-2.54.053-.683.164-1.285.43-1.848.495-1.045 1.337-1.887 2.382-2.382.207-.097.419-.174.638-.235V6.5c0-2.761 2.239-5 5-5zM9.5 15h5v-2h-5v2zM12 3.5c-1.657 0-3 1.343-3 3v.515C9.508 7 10.088 7 10.75 7h2.5l1.405.006c.119.002.234.006.345.009V6.5c0-1.657-1.343-3-3-3z',
  },
  { id: 'research', label: 'Selected Research' },
  { id: 'publications', label: 'Publications' },
  { id: 'connect', label: 'Connect' },
]

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

export default function Home() {
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
      <SectionRail items={RAIL_ITEMS} />

      <div className="container">
        <header>
        <h1>Clinton Imaro</h1>
        <p className="subtitle">ml, product, infra</p>
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
            <a href="mailto:hi@clintonimaro.com" className="underline-link">hi@clintonimaro.com</a>
          </p>
        </div>
      </section>
      </div>
    </>
  )
}
