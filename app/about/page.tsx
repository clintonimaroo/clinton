'use client'

import { useEffect } from 'react'
import Footer from '../components/Footer'

export default function About() {
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
        <h1>About</h1>
        <p className="subtitle">clinton imaro</p>
      </header>

      <section>
        <p>
          I&apos;m a Software Engineer and ML Engineer passionate about building impactful technology
          solutions and empowering the next generation of developers. My journey in tech has taken me from founding
          communities to working at some of the world&apos;s leading technology companies.
        </p>
      </section>

      <section>
        <h2 id="background">background</h2>
        <p>
          My passion for technology started early, driven by curiosity and a desire to solve real-world problems. Over
          the years, I&apos;ve developed expertise across multiple domains—from machine learning to software engineering.
        </p>

        <div className="project">
          <h3>
            <span>education</span>
          </h3>
          <p>
            Currently pursuing my studies at{' '}
            <a href="https://www.morgan.edu" target="_blank" rel="noopener">
              Morgan State University
            </a>
            , where I&apos;m actively engaged in cutting-edge research on ML computing infrastructure and AI-driven
            autonomous systems. My academic work focuses on security issues in automated mobility systems and
            disaster-resilient communication networks.
          </p>
        </div>

        <div className="project">
          <h3>
            <span>community</span>
          </h3>
          <p>
            In 2021, I co-founded{' '}
            <a href="https://www.codespaces.org/" target="_blank" rel="noopener">
              Code Space
            </a>
            , a nonprofit community dedicated to connecting, educating, and providing opportunities to Gen Z developers
            and tech enthusiasts across Africa. We&apos;ve grown to support over 10,000+ young tech talents through
            hackathons, tech events, and educational programs.
          </p>
        </div>
      </section>

      <section>
        <h2 id="work">professional journey</h2>
        <p>Building impactful solutions at scale.</p>

        <div className="project">
          <h3>
            <span>machine learning @ apple</span>
            <span className="year">2024</span>
          </h3>
          <p>
            As an ML Engineer Intern, I worked on enhancing Siri&apos;s intent classification capabilities, focusing on
            complex query handling and model fine-tuning. This experience deepened my understanding of large-scale ML
            systems and user experience optimization.
          </p>
        </div>


        <div className="project">
          <h3>
            <span>research & innovation</span>
            <span className="year">2025</span>
          </h3>
          <p>
            Currently conducting research at two labs at Morgan State University: the Transportation and Urban
            Infrastructure Studies Research Lab, focusing on security in automated mobility systems, and the Center for
            Equitable Artificial Intelligence and Machine Learning Systems (CEAMLS), working on AI-driven autonomous
            control systems for resilient communication networks.
          </p>
        </div>
      </section>

      <section>
        <h2 id="interests">interests & values</h2>
        <p>What drives me and what I care about.</p>

        <div className="project">
          <h3>
            <span>technology</span>
          </h3>
          <p>
            I&apos;m passionate about machine learning, cloud computing, and building scalable systems. I believe in
            using technology to solve real problems and create positive impact.
          </p>
        </div>

        <div className="project">
          <h3>
            <span>community</span>
          </h3>
          <p>
            Empowering the next generation of developers, especially in underrepresented communities, is a core part of
            my mission. Through Code Space, I work to bridge gaps and create opportunities for young tech talent.
          </p>
        </div>

        <div className="project">
          <h3>
            <span>learning</span>
          </h3>
          <p>
            I believe in continuous learning and sharing knowledge. Whether through research, writing, or speaking, I
            strive to contribute to the tech community and help others grow.
          </p>
        </div>
      </section>

      <section>
        <h2 id="speaking">speaking & writing</h2>
        <p>Sharing knowledge and experiences with the community.</p>

        <div className="project">
          <h3>
            <span>global speaker</span>
          </h3>
          <p>
            I speak at conferences and events about software engineering, machine learning, cloud infrastructure, and
            community building. Sharing knowledge and experiences with others is one of the most rewarding aspects of
            my work.
          </p>
        </div>

        <div className="project">
          <h3>
            <span>writing</span>
          </h3>
          <p>
            I write about my experiences, learnings, and thoughts on technology. You can find my writing on{' '}
            <a href="https://blog.clintonimaro.com" target="_blank" rel="noopener">
              my blog
            </a>{' '}
            and on the{' '}
            <a href="https://www.codespaces.org/blog" target="_blank" rel="noopener">
              Code Space blog
            </a>
            .
          </p>
        </div>
      </section>

      <section>
        <h2 id="connect">get in touch</h2>
        <div className="contact">
          <p>
            I&apos;m always open to connecting with fellow developers, researchers, and anyone interested in technology
            and community building. Reach out on{' '}
            <a href="https://x.com/clintonimaroo" aria-label="Clinton's X profile" target="_blank" rel="noopener">
              X
            </a>{' '}
            <a href="https://github.com/clintonimaroo" aria-label="Clinton's GitHub profile" target="_blank" rel="noopener">
              GitHub
            </a>{' '}
            <a
              href="https://www.linkedin.com/in/clintonimaro/"
              aria-label="Clinton's LinkedIn profile"
              target="_blank"
              rel="noopener"
            >
              LinkedIn
            </a>{' '}
            - or send me an email at <a href="mailto:hi@clintonimaro.com">hi@clintonimaro.com</a>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}

