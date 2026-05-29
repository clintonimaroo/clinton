'use client'

import { useEffect } from 'react'

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
    <div className="container">
      <header>
        <h1>Clinton Imaro</h1>
        <p className="subtitle">ml, product, obsess over the problem</p>
      </header>

      <section className="intro-section">
        <p>
          Software engineer, thinker, Speaker and founder. One acquisition - Bimepay (acquired by Techwave).
        </p>
        <p>
          Today, I am building Siri for codebase at{' '}
          <a
            href="https://heyfathom.com"
            target="_blank"
            rel="noopener"
            className="shine-hover"
          >
            heyfathom.com
          </a>
          , an agentic voice-first code intelligence for engineering teams whose first language isn&apos;t English.
        </p>
        <p>
          Also running{' '}
          <a href="https://www.codespaces.org/" target="_blank" rel="noopener" className="intro-emphasis-link">
            Code Space
          </a>{' '}
          (non-profit tech community creating opportunities for young Black and African builders globally, growing to 10,000+ members and
          organizing one of West Africa&apos;s largest annual hackathon with 1,000+ attendees).
        </p>
        <p>
          Outside work, I like travelling, tennis, and just collecting those moments. My memories are continuously being warped by new perspectives. I care about AI-native products and building things that last.
        </p>
      </section>

      <section>
        <h2 id="experience">Experience</h2>
        <div className="project">
          <h3>
            <a href="https://www.apple.com/" aria-label="Apple role" target="_blank" rel="noopener">
              core ml @apple
            </a>
          </h3>
          <p>
            Fine-tuned transformer-based ML models for intent classification in Siri&apos;s query processing pipeline.
            Worked on attention mechanism optimizations contributing to latency reductions on internal benchmarks.
          </p>
        </div>


        <div className="project">
          <h3>
            <a href="https://www.codespaces.org/" aria-label="Code Space role" target="_blank" rel="noopener">
              founder @code space
            </a>
          </h3>
          <p>
            Code Space is a dynamic community that connects, educates, and offers opportunities to Gen Z developers and
            tech enthusiasts across Africa. Recognizing the continent&apos;s large population of unemployed youth, we
            are connecting African Gen Zs for Growth, Impact, and Success. Since our inception in 2021, Code Space has
            been a pivotal community for over 10k+ young tech talents, driving innovation through hackathons and tech
            events.
          </p>
        </div>

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

      <section>
        <h2 id="research">Selected Research</h2>

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
        </ul>
      </section>

      <section>
        <h2 id="publications">Publications</h2>

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

      <section>
        <h2 id="blog">blog</h2>
        <p>Sometimes i journal, but sometimes i write too much.. </p>

        <div className="blog-post">
          <a
            href="https://www.codespaces.org/blog/678afc9ff2541c9b44ce706e"
            aria-label="Read blog post: A New Year, A new beginning for everyone"
            target="_blank"
            rel="noopener"
          >
            A New Year, A new beginning for everyone
          </a>
          <span className="views">223 views · Jan 18, 2025</span>
        </div>

        <div className="blog-post">
          <a
            href="https://blog.clintonimaro.com/the-year-i-turned-20"
            aria-label="Read blog post: The year i turned 20"
            target="_blank"
            rel="noopener"
          >
            The year i turned 20
          </a>
          <span className="views">411 views · Jun 25, 2024</span>
        </div>
      </section>

<section>
        <h2 id="connect">Connect</h2>
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
            — or send me an email at{' '}
            <a href="mailto:hi@clintonimaro.com" className="underline-link">hi@clintonimaro.com</a>
          </p>
        </div>
      </section>

    </div>
  )
}
