import Link from 'next/link'

const EMAIL = 'hi@clintonimaro.com'

function Ext({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  )
}

export default function Home() {
  return (
    <main className="home">
      <div className="intro">
        <img className="avatar" src="/images/headshot.jpg" alt="Clinton Imaro" width={88} height={88} />
        <div className="intro-text">
          <div className="name-row">
            <h1>Clinton Imaro</h1>
          </div>
          <p className="tagline">ml, product, infra.</p>
          <p className="intro-email">
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </p>
        </div>
      </div>

      <section>
        <h2>Now</h2>
        <p>
          building{' '}
          <Ext href="https://www.codespaces.org/" className="emphasis-link">
            Code Space
          </Ext>
          . researching uav autonomy at{' '}
          <Ext href="https://www.morgan.edu/" className="em">
            Morgan State
          </Ext>
          &apos;s center for equity in ai &amp; ml systems.
        </p>
      </section>

      <section>
        <h2>Background</h2>
        <p>
          <span className="em">Benin City</span> to <span className="em">HOGENT</span>, Belgium (computer science, honors
          program) to <span className="em">Morgan State</span> (computer science, ai &amp; data science). first-gen.
        </p>
        <p>
          <span className="em">Google</span> youngest developer from africa. <span className="em">JPMorgan</span> data for
          good, 1st. <span className="em">Google</span> hackathon ai track, 1st. <span className="em">OpenAI</span> gpt-5
          startup hackathon, 2nd.
        </p>
      </section>

      <section>
        <h2>Previously</h2>
        <ul className="list">
          <li>
            <Ext href="https://www.apple.com/">Apple</Ext>, ml engineering on siri intent classification.
          </li>
          <li>
            <Ext href="https://www.microsoft.com/">Microsoft</Ext>, azure cloud engineering.
          </li>
          <li>
            <Ext href="https://www.heyfathom.com/">Fathom</Ext>, co-founder. voice-first code intelligence.
          </li>
        </ul>
      </section>

      <section>
        <h2>Selected work</h2>

        <div className="project">
          <h3>Code Space, Community for Young Black Builders [2021]</h3>
          <ul className="list">
            <li>
              a nonprofit connecting <span className="em">5,000+</span> builders through workshops, hackathons and events.
            </li>
            <li>
              <span className="em">Spacer&apos;s Hack</span>. our 2023 hackathon, sponsored by Couchbase.
            </li>
            <li>
              <span className="em">Fusion Tech Fest</span>. a hackathon and conference in lagos with AWS, Paystack, Wix
              and more, 2024.
            </li>
          </ul>
        </div>

        <div className="project">
          <h3>Fathom, Voice-First Code Intelligence [2025]</h3>
          <p>
            agentic code intelligence for engineering teams whose first language isn&apos;t english. parallel agents for
            codebase understanding, multilingual voice queries and visual maps.{' '}
            <span className="em">2nd place</span> at the openai gpt-5 startup hackathon.
          </p>
        </div>

        <div className="project">
          <h3>Disaster-Aware UAV Navigation [2026]</h3>
          <p>
            vision-based hazard classification (<span className="em">mobilenetv2, 85.2% accuracy</span>) with ppo-clip
            agents, evaluated against a* under simulated disaster conditions. two papers accepted to{' '}
            <span className="em">ITC 2026</span> with{' '}
            <Ext href="https://ieeexplore.ieee.org/author/37086069468" className="em">
              Dr. Peter Taiwo
            </Ext>
            .
          </p>
        </div>

        <Link href="/work" className="see-more">
          see all work
        </Link>
      </section>

      <section>
        <h2>Publications</h2>
        <ul className="list">
          <li>
            <span className="em">Disaster-Aware UAV Path Planning with Vision-Integrated Proximal Policy Optimization</span>.
            c. imaro, p. taiwo. itc 2026.
          </li>
          <li>
            <span className="em">
              Performance Evaluation of Monocular and Stereo Vision for Autonomous UAV Collision Avoidance in Disaster
              Response Environments
            </span>
            . c. imaro, p. taiwo. itc 2026.
          </li>
        </ul>
      </section>

      <section>
        <h2>Press</h2>
        <ul className="list">
          <li>
            <Ext href="https://technext24.com/tech-teens/clinton-imaro-18-year-old-afrowatch-founder/">Technext</Ext>, meet
            the 18-year-old techie building the future. 2022.
          </li>
          <li>
            <Ext href="https://www.youtube.com/watch?v=XhVWlybFujw">Tech Teens</Ext>, a conversation with technext. 2022.
          </li>
          <li>
            <Ext href="https://rubiestech.org/we-are-building-a-community-to-rewrite-african-narrative-through-tech-clinton-imaro-ceo-afrowatch/">
              Rubies
            </Ext>
            , building a community to rewrite the african narrative through tech. 2023.
          </li>
          <li>
            <Ext href="https://thecondia.com/19-year-old-microsoft-cloud-engineer-clinton-imaro/">Condia</Ext>, the
            19-year-old inspiring the next generation of tech professionals. 2023.
          </li>
        </ul>
      </section>

      <section>
        <h2>Off screen</h2>
        <p>travelling, tennis, and collecting those moments. my memories keep getting warped by new perspectives.</p>
      </section>
    </main>
  )
}
