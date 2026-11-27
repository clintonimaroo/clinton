import ShowMore from '@/components/ShowMore'

const EMAIL = 'hi@clintonimaro.com'

function Ext({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  )
}

type Item = { name: string; href?: string; tag: string; body: React.ReactNode; links?: { label: string; href: string }[] }

type Role = { years: string; title: string; org: string; href?: string; tag?: string; body: React.ReactNode; items?: Item[] }

const WORK: Role[] = [
  {
    years: '2026 to now',
    title: 'Co-founder & Lead Engineer',
    org: 'Lane',
    body: 'independent dealers run on texts, spreadsheets and memory. lane puts an agent in the middle of that: it watches auctions, lists cars, files the paperwork and follows up with buyers by imessage and phone. i lead engineering across the agent, voice and browser automation.',
  },
  {
    years: '2021 to now',
    title: 'Founder',
    org: 'Code Space',
    href: 'https://www.codespaces.org/',
    body: (
      <>
        a nonprofit creating opportunities for young builders across africa. what began in 2021 as a whatsapp group
        has grown into a community of <span className="em">5,000+</span> members, running workshops, hackathons and
        events with partners including <span className="em">AWS</span>, <span className="em">Paystack</span>,{' '}
        <span className="em">Wix</span> and <span className="em">Couchbase</span>. i lead strategy, partnerships and
        programmes, and our flagship event has put over <span className="em">1,200</span> builders in one room to ship real
        products.
      </>
    ),
    items: [
      {
        name: 'Fusion Tech Fest',
        tag: 'lagos · 2024',
        body: 'a hackathon and conference at zone tech park, backed by aws, paystack, wix and more.',
      },
      {
        name: "Spacer's Hack",
        href: 'https://hackathon.codespaces.org/',
        tag: 'lagos · 2023',
        body: 'our hackathon conference, sponsored by couchbase. the last edition drew 1,200 builders.',
      },
    ],
  },
  {
    years: '2025 to now',
    title: 'Robotics Researcher',
    org: 'Morgan State',
    href: 'https://www.morgan.edu/',
    body: (
      <>
        autonomous drones for disaster response. building the perception and planning stack that lets a uav spot fire
        and flooding from the air and route around it on its own, with vision that runs onboard in real time. two papers
        accepted at <span className="em">ITC 2026</span>.
      </>
    ),
  },
  {
    years: '2025',
    title: 'Co-founder',
    org: 'Fathom',
    href: 'https://www.heyfathom.com/',
    body: (
      <>
        voice-first code intelligence. engineers asked questions about a codebase out loud, in their own language, and
        got answers grounded in the code, with parallel agents mapping how it all fit together. we ran a closed beta with{' '}
        <span className="em">158 engineers</span> across the us, uk and asia, reached{' '}
        <span className="em">60,000+ queries a month</span> and took <span className="em">2nd</span> at the openai
        startup hackathon. i led product and engineering as ceo.
      </>
    ),
  },
  {
    years: '2024',
    title: 'ML Engineer Intern',
    org: 'Apple',
    href: 'https://www.apple.com/',
    body: 'intent classification for siri. fine-tuned transformer models in the query pipeline and cut latency on internal benchmarks.',
  },
  {
    years: '2023',
    title: 'Cloud Engineer Intern',
    org: 'Microsoft',
    href: 'https://www.microsoft.com/',
    body: 'deployment automation on azure for enterprise apps, making ci/cd pipelines more reliable.',
  },
  {
    years: '2021 to 2023',
    title: 'Software Engineer',
    org: 'Go! Talent',
    tag: 'belgium',
    body: 'real-time dashboards for staff absence and device inventory across school campuses, replacing spreadsheets.',
  },
  {
    years: 'earlier',
    title: 'Founder',
    org: 'Afrowatch',
    body: 'where it started. the project technext and rubies covered when i was 18.',
  },
]

const PROJECTS: Item[] = [
  {
    name: 'Kard',
    href: 'https://kard-pink.vercel.app/',
    tag: 'fintech · 2023 to 2024',
    body: "gen z in nigeria kept getting locked out of global payments, so i built kard: a dedicated usd or ngn account number, plus physical and virtual cards that work with apple pay. i founded it and led the build end to end.",
    links: [{ label: 'site', href: 'https://kard-pink.vercel.app/' }],
  },
  {
    name: 'Becky',
    href: 'https://apps.apple.com/us/app/becky-match-connect-marry/id6757434078',
    tag: 'ios · live',
    body: 'matchmaking for marriage-ready singles. it matches on values and readiness instead of swipes, and only opens chat once both sides agree. i was the founding engineer and built the ios and android apps and the matching algorithm, then handed it to the in-house team at 2,163 users.',
    links: [{ label: 'app store', href: 'https://apps.apple.com/us/app/becky-match-connect-marry/id6757434078' }],
  },
  {
    name: 'QuietGlass',
    href: 'https://github.com/clintonimaroo/quietglass',
    tag: 'mac app · open source',
    body: 'a native macos app that frosts your screen the moment you look away, using your airpods or the camera. everything runs on device, nothing leaves your mac.',
    links: [{ label: 'github', href: 'https://github.com/clintonimaroo/quietglass' }],
  },
  {
    name: 'BrandALE',
    href: 'https://brandale.ai/',
    tag: 'live',
    body: 'finds breakout branded content, ranks the creators behind it, then repurposes the winning posts and publishes them across connected social channels.',
    links: [{ label: 'site', href: 'https://brandale.ai/' }],
  },
  {
    name: 'MathGPT',
    tag: 'mobile · private',
    body: 'an ai math solver and homework helper. step-by-step solutions, ai video explanations and a photo solver, covering algebra through calculus.',
  },
  {
    name: 'Sketcha',
    href: 'https://github.com/clintonimaroo/Sketcha',
    tag: 'open source',
    body: 'cursor for electrical design. describe a circuit or a space in plain language and get a clean electrical and architectural diagram, without touching cad.',
    links: [{ label: 'github', href: 'https://github.com/clintonimaroo/Sketcha' }],
  },
]

const TALKS: { name: string; href: string; tag: string }[] = [
  { name: 'Tech Teens: an 18-year-old software engineer', href: 'https://www.youtube.com/watch?v=XhVWlybFujw', tag: 'technext, 2022' },
  {
    name: 'Meet the 18-year-old techie building the future',
    href: 'https://technext24.com/tech-teens/clinton-imaro-18-year-old-afrowatch-founder/',
    tag: 'technext, 2022',
  },
  {
    name: 'Building a community to rewrite the African narrative',
    href: 'https://rubiestech.org/we-are-building-a-community-to-rewrite-african-narrative-through-tech-clinton-imaro-ceo-afrowatch/',
    tag: 'rubies, 2023',
  },
  {
    name: 'The 19-year-old inspiring the next generation',
    href: 'https://thecondia.com/19-year-old-microsoft-cloud-engineer-clinton-imaro/',
    tag: 'condia, 2023',
  },
]

const AWARDS: { year: string; name: string; by: string }[] = [
  { year: '2026', name: 'First place, Morgan TechFest', by: 'Morgan State University' },
  { year: '2025', name: 'First place, Python track', by: 'JPMorgan Chase Data for Good' },
  { year: '2025', name: 'Second place, Startup Hackathon', by: 'OpenAI' },
  { year: '2025', name: 'Third place, AI track', by: 'BisonBytes, Howard University' },
  { year: '2024', name: 'First place, AI track', by: 'Google Hackathon' },
  { year: '2022', name: 'Most Influential Tech Personality', by: 'Young Africa Choice Award' },
  { year: '2021', name: 'Most Enterprising Youth', by: 'I-GLIDE ACE Concept' },
  { year: '2021', name: 'Youngest Developer from Africa', by: 'Google' },
  { year: '2020', name: 'Best Young Java Developer', by: 'Google' },
]

function ItemRow({ item }: { item: Item }) {
  return (
    <div className="item">
      <p className="item-head">
        {item.href ? (
          <Ext href={item.href} className="em">
            {item.name}
          </Ext>
        ) : (
          <span className="em">{item.name}</span>
        )}
        <span className="tag">{item.tag}</span>
      </p>
      <p>{item.body}</p>
      {item.links && (
        <p className="item-links">
          {item.links.map((l) => (
            <Ext href={l.href} key={l.href}>
              {l.label}
            </Ext>
          ))}
        </p>
      )}
    </div>
  )
}

export default function Home() {
  return (
    <main className="home">
      <div className="intro">
        <img className="avatar" src="/images/avatar.jpg" alt="Clinton Imaro" width={88} height={88} />
        <div className="intro-text">
          <div className="name-row">
            <h1>Clinton Imaro</h1>
          </div>
          <p className="tagline">ml, robotics, product, infra.</p>
          <p className="intro-email">
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </p>
        </div>
      </div>

      <section className="bio">
        <p className="lead">
          i&apos;m an engineer and founder. i build autonomous systems where ai meets the physical world, the perception
          and planning behind them, and the communities that grow the people who&apos;ll build them. lately that means
          drones that can find their own way through fire and flooding.
        </p>
        <p>
          based in san francisco. i started shipping as a teenager in nigeria, founded{' '}
          <span className="em">Code Space</span> at 16 and grew it to 5,000+ young builders across africa, co-founded{' '}
          <span className="em">Fathom</span>, and worked on ml at <span className="em">Apple</span> and cloud at{' '}
          <span className="em">Microsoft</span>. mostly in python, pytorch and typescript. two papers accepted at{' '}
          <span className="em">ITC 2026</span>. not everything i&apos;ve built worked, and that part taught me the most.
        </p>
      </section>

      <section className="now">
        <p className="now-label">now · november 2026</p>
        <p>
          working on autonomous drone navigation and getting code space ready for its biggest year yet in 2027. two
          papers on uav navigation are on their way out through itc.
        </p>
      </section>

      <section>
        <h2>Work</h2>
        <ShowMore className="roles" visible={3}>
          {WORK.map((role) => (
            <div className="role" key={role.org + role.years}>
              <p className="years">{role.years}</p>
              <h3>
                {role.title} ·{' '}
                {role.href ? <Ext href={role.href}>{role.org}</Ext> : role.org}
                {role.tag && <span className="tag">{role.tag}</span>}
              </h3>
              <p>{role.body}</p>
              {role.items && (
                <div className="items">
                  {role.items.map((item) => (
                    <ItemRow item={item} key={item.name} />
                  ))}
                </div>
              )}
            </div>
          ))}
        </ShowMore>
      </section>

      <section>
        <h2>Projects</h2>
        <ShowMore className="items" visible={3}>
          {PROJECTS.map((item) => (
            <ItemRow item={item} key={item.name} />
          ))}
        </ShowMore>
        <p className="more">
          <a href="/work" className="see-more">
            all work
          </a>
        </p>
      </section>

      <section>
        <h2>Publications</h2>
        <ul className="list">
          <li>
            <span className="em">Disaster-Aware UAV Path Planning with Vision-Integrated Proximal Policy Optimization</span>.
            itc 2026.
          </li>
          <li>
            <span className="em">
              Performance Evaluation of Monocular and Stereo Vision for Autonomous UAV Collision Avoidance in Disaster
              Response Environments
            </span>
            . itc 2026.
          </li>
        </ul>
      </section>

      <section>
        <h2>Awards</h2>
        <ShowMore className="awards" visible={4}>
          {AWARDS.map((a) => (
            <div className="award" key={a.name + a.year}>
              <span className="year">{a.year}</span>
              <span>
                <span className="em">{a.name}</span>
                <span className="tag">{a.by}</span>
              </span>
            </div>
          ))}
        </ShowMore>
      </section>

      <section>
        <h2>Talks &amp; interviews</h2>
        <ul className="talks">
          {TALKS.map((t) => (
            <li key={t.href}>
              <Ext href={t.href} className="em">
                {t.name}
              </Ext>
              <span className="tag">{t.tag}</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Off screen</h2>
        <p>
          travelling, tennis, and collecting those moments. my memories keep getting warped by new perspectives. if you
          want to talk about ai, community or building things that last, my inbox is open:{' '}
          <a href={`mailto:${EMAIL}`} className="em">
            {EMAIL}
          </a>
        </p>
      </section>
    </main>
  )
}
