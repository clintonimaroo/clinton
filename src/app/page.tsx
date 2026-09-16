'use client'

import { useEffect } from 'react'

import SectionRail, { type RailItem } from '@/components/SectionRail'
import Timeline from '@/components/Timeline'
import { EXPERIENCE } from '@/lib/data'

const RAIL_ITEMS: RailItem[] = [
  { id: 'intro', label: 'Overview' },
  { id: 'experience', label: 'Experience' },
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
            see more <span>→</span>
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
            Connect with me on{' '}
            <a href="https://x.com/clintonimaroo" aria-label="Clinton's X profile" target="_blank" rel="noopener" className="underline-link">
              X (twitter)
            </a>
            ,{' '}
            <a href="https://www.linkedin.com/in/clintonimaro/" aria-label="Clinton's LinkedIn profile" target="_blank" rel="noopener" className="underline-link">
              LinkedIn
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
