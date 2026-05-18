'use client'

import { useEffect } from 'react'
import Footer from '@/components/Footer'

export default function Home() {
  useEffect(() => {
    const links = document.querySelectorAll('a')
    links.forEach((link) => {
      link.addEventListener(
        'touchstart',
        function () {
          this.classList.add('active-touch')
        },
        { passive: true }
      )

      link.addEventListener(
        'touchend',
        function () {
          this.classList.remove('active-touch')
        },
        { passive: true }
      )
    })

    return () => {
      links.forEach((link) => {
        link.removeEventListener('touchstart', () => {})
        link.removeEventListener('touchend', () => {})
      })
    }
  }, [])

  return (
    <div className="container">
      <header>
        <h1>Clinton Imaro</h1>
        <p className="subtitle">ml, product, obsess over the problem</p>
      </header>

      <section>
        <p>
          Software engineer, thinker, Speaker and founder. One acquisition — Bimepay (acquired by Techwave).
        </p>
        <p>
          Today, I am building Siri for codebase at{' '}
          <a href="https://heyfathom.com" target="_blank" rel="noopener" className="underline-link">
            heyfathom.com
          </a>
          , an agentic voice-first code intelligence for engineering teams whose first language isn&apos;t English.
        </p>
        <p>
          Also running{' '}
          <a href="https://www.codespaces.org/" target="_blank" rel="noopener" className="underline-link">
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
            Enhanced Siri&apos;s intent classification as an ML Engineer Intern, focusing on complex query handling and
            model fine-tuning to make interactions more intuitive.
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
            Disaster-aware uav navigation - vision-based hazard classification (mobilenetv2, 85.2% accuracy) + ppo-clip agents, a*/ppo evaluation under simulated disaster conditions -{' '}
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
