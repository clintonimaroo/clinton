// Cards for the /work grid.
//
// A card sits in a column and a row; the grid scales everything to whatever
// width it gets, so nothing here is in screen pixels. Every card is the same
// height unless it sets its own.
//

import type { WorkCard } from '@/types'

export const WORKS: WorkCard[] = [
  // Column one
  {
    id: 'fathom',
    column: 0,
    row: 0,
    num: '01',
    name: 'Fathom',
    label: 'Website',
    background: '#0a0a0b',
    border: false,
    dark: true,
    art: [
      { src: '/images/work/dot-grid.webp', left: 0, top: 0, width: 450, height: 206 },
      { src: '/images/work/fathom-prompt.svg', left: 30, top: 120, width: 420, height: 143 },
    ],
    hover: { src: '/images/work/fathom-team.webp', left: 0, top: 0, width: 450, height: 300 },
    block: {
      description:
        'Voice-first AI for code comprehension - parallel agents, multilingual voice queries, and visual mapping. Winner at the OpenAI Startup Hackathon.',
      award: 'Winner at the OpenAI Startup Hackathon.',
      descLink: {
        text: 'OpenAI Startup Hackathon',
        href: 'https://www.linkedin.com/posts/200-startup-teams-were-able-to-ship-fast-ugcPost-7379229907295293441-dY8b/',
      },
      link: 'View Live Site',
      href: 'https://www.heyfathom.com/',
    },
  },
  {
    id: 'sketcha',
    column: 0,
    row: 1,
    num: '04',
    name: 'Sketcha',
    label: 'Project',
    background: '#ffffff',
    art: [{ src: '/images/work/sketcha-app.webp', left: 0, top: 0, width: 450, height: 255 }],
    hover: { src: '/images/work/sketcha-team.webp', left: 0, top: 0, width: 450, height: 300 },
    block: {
      description:
        'Cursor for EE design. Describe a circuit or a space in plain language and get a clean electrical and architectural diagram, without touching CAD.',
      link: 'View on GitHub',
      href: 'https://github.com/clintonimaroo/Sketcha',
    },
  },
  {
    id: 'smartklas',
    column: 0,
    row: 2,
    num: '07',
    name: 'SmartKlas',
    label: 'Hackathon',
    background: '#f5f5f5',
    art: [{ src: '/images/work/smartklas-demo.webp', left: 0, top: 0, width: 450, height: 290 }],
    block: {
      description:
        'Siri for learning. Say what you want to learn and get a visual roadmap you can explore and annotate. Third place overall at the BisonBytes 2025 Hackathon.',
      award: 'Third place overall at the BisonBytes 2025 Hackathon.',
      link: 'View on Devpost',
      href: 'https://devpost.com/software/fantom-w850rh',
    },
  },
  {
    id: 'becky',
    column: 0,
    row: 3,
    num: '10',
    name: 'Becky',
    label: 'Mobile App',
    background: '#fcfbfc',
    art: [{ src: '/images/work/becky-screens.webp', left: 0, top: 0, width: 450, height: 290 }],
    hoverClip: {
      src: '/images/work/becky-hero.mp4',
      poster: '/images/work/becky-hero-poster.webp',
      left: 0,
      top: 0,
      width: 450,
      height: 290,
    },
    block: {
      description:
        'An iOS matchmaking app for marriage-ready singles. Matches on values and readiness rather than swipes, and opens chat only once both sides agree.',
      link: 'View on App Store',
      href: 'https://apps.apple.com/us/app/becky-match-connect-marry/id6757434078',
      locked: 'Read Case Study',
    },
  },
                
  // Column two
  {
    id: 'concilio',
    column: 1,
    row: 0,
    num: '02',
    name: 'The Concilio',
    label: 'Hackathon',
    background: '#ded6cf',
    border: false,
    art: [{ src: '/images/work/concilio-map.webp', left: 0, top: 0, width: 450, height: 280 }],
    hover: { src: '/images/work/concilio-team.webp', left: 0, top: 0, width: 450, height: 280 },
    block: {
      description:
        'Community data turned into outreach for The Concilio: a 3D Dallas map, AI answers and personas. First place at the JPMorgan Chase Data for Good Hackathon.',
      award: 'First place at the JPMorgan Chase Data for Good Hackathon.',
      descLink: {
        text: 'JPMorgan Chase Data for Good Hackathon',
        href: 'https://www.linkedin.com/posts/murad-alhassen_1stplace-hackathonwin-jpmorgan-ugcPost-7314733775601422336-lL3r/',
      },
      link: 'View on GitHub',
      href: 'https://github.com/dfgtexas25/Team-8',
    },
  },
  {
    id: 'kard',
    column: 1,
    row: 1,
    num: '05',
    name: 'Kard',
    label: 'Website',
    background: '#080a0b',
    border: false,
    dark: true,
    art: [{ src: '/images/work/kard-site.webp', left: 0, top: 0, width: 450, height: 260 }],
    hover: { src: '/images/work/kard-app.webp', left: 0, top: 0, width: 450, height: 260 },
    block: {
      description:
        'Global payments infrastructure for Gen Z: a dedicated USD or NGN account number, plus physical and virtual cards that work with Apple Pay in Nigeria.',
      role: 'Founder & Lead Developer \u00b7 2023-2024',
      link: 'View Live Site',
      href: 'https://kard-pink.vercel.app/',
    },
  },
  {
    id: 'harvest-commit',
    column: 1,
    row: 2,
    num: '08',
    name: 'Harvest Commit',
    label: 'Hackathon',
    background: '#fafbf9',
    art: [{ src: '/images/work/harvest-commit-logo.webp', left: 115, top: 30, width: 220, height: 220 }],
    block: {
      description:
        'Turns farm orders, inventory, crew and weather into a daily harvest plan, then texts it to the farmer for approval. First place at Morgan TechFest 2026.',
      award: 'First place at Morgan TechFest 2026.',
      link: 'View on GitHub',
      href: 'https://github.com/clintonimaroo/harvest-commit',
    },
  },
  {
    id: 'uav-research',
    column: 1,
    row: 3,
    num: '11',
    name: 'Disaster-Aware UAV',
    label: 'Project',
    background: '#fafafa',
    art: [{ src: '/images/work/uav-drone.webp', left: 0, top: 0, width: 450, height: 285 }],
    block: {
      description:
        'Pairs a CNN hazard classifier with a PPO agent so a UAV can route around fire and flooding. Reached 99% and 100% goal success on sparse and moderate maps.',
      link: 'View on GitHub',
      href: 'https://github.com/clintonimaroo/uav-research',
      locked: 'Read Paper',
    },
  },
                
  // Column three
  {
    id: 'quietglass',
    column: 2,
    row: 0,
    num: '03',
    name: 'QuietGlass',
    label: 'Mac App',
    background: '#2d2627',
    border: false,
    dark: true,
    art: [{ src: '/images/work/quietglass-hero.webp', left: 0, top: 0, width: 450, height: 280 }],
    hoverClip: {
      src: '/images/work/quietglass-launch.mp4',
      poster: '/images/work/quietglass-launch-poster.webp',
      left: 0,
      top: 0,
      width: 450,
      height: 280,
    },
    block: {
      description:
        'A native macOS app that frosts your screen the moment you look away, using AirPods or the camera. Everything runs on device.',
      link: 'View on GitHub',
      href: 'https://github.com/clintonimaroo/quietglass',
    },
  },
  {
    id: 'spacers-hack-conf',
    column: 2,
    row: 1,
    num: '06',
    name: "Spacer's Hack Conf",
    label: 'Website',
    background: '#5349e7',
    border: false,
    dark: true,
    art: [{ src: '/images/work/spacers-banner.webp', left: 0, top: 0, width: 450, height: 280 }],
    hoverClip: {
      src: '/images/work/spacers-guidelines.mp4',
      poster: '/images/work/spacers-guidelines-poster.webp',
      left: 0,
      top: 0,
      width: 450,
      height: 280,
    },
    block: {
      description:
        "Event site for Code Space's Lagos hackathon conference, from tickets to schedule and speakers. The last edition drew 1,200 builders.",
      link: 'View Live Site',
      href: 'https://hackathon.codespaces.org/',
    },
  },
  {
    id: 'code-space',
    column: 2,
    row: 2,
    num: '09',
    name: 'Code Space',
    label: 'Personal Project',
    background: '#e2e2e2',
    border: false,
    art: [{ src: '/images/work/code-space-fusion.webp', left: 0, top: 0, width: 450, height: 310 }],
    block: {
      description: 'A community where Gen Z developers, founders and designers across Africa come to build.',
      link: 'View Live Site',
      href: 'https://www.codespaces.org/',
    },
  },
  {
    id: 'mathgpt',
    column: 2,
    row: 3,
    num: '12',
    name: 'MathGPT',
    label: 'Mobile App',
    background: '#e8e8e8',
    art: [{ src: '/images/work/mathgpt-app.webp', left: 0, top: 0, width: 450, height: 290 }],
    block: {
      description:
        'AI math solver and homework helper. Step-by-step solutions, AI video explanations and a photo solver covering algebra through calculus.',
      locked: 'Pr\u00edvat\u00e8',
    },
  },
                ]
