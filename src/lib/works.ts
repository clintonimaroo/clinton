// Cards for the /work grid.
//
// A card sits in a column and a row; the grid scales everything to whatever
// width it gets, so nothing here is in screen pixels. Every card is the same
// height unless it sets its own.
//
// Cards without a `name` are empty slots: the caption prints the number and the
// label, and the card is ready for a name plus `art` when the work is in.

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
      descLink: {
        text: 'OpenAI Startup Hackathon',
        href: 'https://www.linkedin.com/posts/200-startup-teams-were-able-to-ship-fast-ugcPost-7379229907295293441-dY8b/',
      },
      link: 'View Live Site',
      href: 'https://www.heyfathom.com/',
    },
  },
  {
    id: 'kard',
    column: 0,
    row: 1,
    num: '06',
    name: 'Kard',
    label: 'Website',
    background: '#080a0b',
    border: false,
    dark: true,
    art: [{ src: '/images/work/kard-site.webp', left: 0, top: 0, width: 450, height: 260 }],
    block: {
      description:
        'Global payments infrastructure for Gen Z: a dedicated USD or NGN account number, plus physical and virtual cards that work with Apple Pay in Nigeria.',
      role: 'Founder & Lead Developer \u00b7 2023-2024',
      link: 'View Live Site',
      href: 'https://kard-pink.vercel.app/',
    },
  },
  { id: 'slot-09', column: 0, row: 2, num: '09', label: 'Mobile App', background: '#f5f5f5', caption: 'bottom' },
  { id: 'slot-12', column: 0, row: 3, num: '12', label: 'Mobile App', background: '#f5f5f5', caption: 'bottom' },
  { id: 'slot-14', column: 0, row: 4, num: '14', label: 'Mobile App', background: '#f5f5f5', caption: 'bottom' },
  { id: 'slot-18', column: 0, row: 5, num: '18', label: 'Hackathon', background: '#f3f3f3', caption: 'top' },
  { id: 'slot-21', column: 0, row: 6, num: '21', label: 'Hackathon', background: '#f3f3f3', caption: 'top' },
  { id: 'slot-23', column: 0, row: 7, num: '23', label: 'Hackathon', background: '#f3f3f3', caption: 'top' },
  { id: 'slot-25', column: 0, row: 8, num: '25', label: 'Hackathon', background: '#f3f3f3', caption: 'top' },
  { id: 'slot-28', column: 0, row: 9, num: '28', label: 'Hackathon', background: '#f3f3f3', caption: 'top' },
  { id: 'slot-31', column: 0, row: 10, num: '31', label: 'Hackathon', background: '#f3f3f3', caption: 'top' },
  { id: 'slot-34', column: 0, row: 11, num: '34', label: 'Hackathon', background: '#f3f3f3', caption: 'top' },

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
      link: 'View Announcement',
      href: 'https://www.linkedin.com/posts/murad-alhassen_1stplace-hackathonwin-jpmorgan-ugcPost-7314733775601422336-lL3r/',
    },
  },
  {
    id: 'code-space',
    column: 1,
    row: 1,
    num: '05',
    name: 'Code Space',
    label: 'Personal Project',
    background: '#e2e2e2',
    border: false,
    art: [{ src: '/images/work/code-space-fusion.webp', left: 0, top: 0, width: 450, height: 310 }],
    hover: { src: '/images/work/code-space-brands.webp', left: 0, top: 46, width: 450, height: 218 },
    block: {
      description: 'A community where Gen Z developers, founders and designers across Africa come to build.',
      link: 'View Live Site',
      href: 'https://www.codespaces.org/',
    },
  },
  {
    id: 'harvest-commit',
    column: 1,
    row: 2,
    num: '07',
    name: 'Harvest Commit',
    label: 'Hackathon',
    background: '#fafbf9',
    art: [{ src: '/images/work/harvest-commit-logo.webp', left: 115, top: 30, width: 220, height: 220 }],
    block: {
      description:
        'Turns farm orders, inventory, crew and weather into a daily harvest plan, then sends it to the farmer for approval by SMS. First place at Morgan TechFest 2026.',
      link: 'View on GitHub',
      href: 'https://github.com/clintonimaroo/harvest-commit',
    },
  },
  { id: 'slot-10', column: 1, row: 3, num: '10', label: 'Mobile App', background: '#1b1c20', border: false, dark: true, caption: 'bottom' },
  { id: 'slot-13', column: 1, row: 4, num: '13', label: 'Mobile App', background: '#f5f5f5', caption: 'bottom' },
  { id: 'slot-15', column: 1, row: 5, num: '15', label: 'Mobile App', background: '#f5f5f5', caption: 'bottom' },
  { id: 'slot-17', column: 1, row: 6, num: '17', label: 'Hackathon', background: '#f3f3f3', caption: 'top' },
  { id: 'slot-20', column: 1, row: 7, num: '20', label: 'Hackathon', background: '#f3f3f3', caption: 'top' },
  { id: 'slot-26', column: 1, row: 8, num: '26', label: 'Hackathon', background: '#f3f3f3', caption: 'top' },
  { id: 'slot-29', column: 1, row: 9, num: '29', label: 'Hackathon', background: '#f3f3f3', caption: 'top' },
  { id: 'slot-32', column: 1, row: 10, num: '32', label: 'Hackathon', background: '#f3f3f3', caption: 'top' },
  { id: 'slot-35', column: 1, row: 11, num: '35', label: 'Hackathon', background: '#f3f3f3', caption: 'top' },

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
    num: '04',
    name: "Spacer's Hack Conf",
    label: 'Website',
    background: '#5349e7',
    border: false,
    dark: true,
    art: [{ src: '/images/work/spacers-banner.webp', left: 0, top: 0, width: 450, height: 280 }],
    hover: { src: '/images/work/spacers-crowd.webp', left: 0, top: 0, width: 450, height: 280 },
    block: {
      description:
        "Event site for Code Space's Lagos hackathon conference, from tickets to schedule and speakers. The last edition drew 1,200 builders.",
      link: 'View Live Site',
      href: 'https://hackathon.codespaces.org/',
    },
  },
  { id: 'slot-08', column: 2, row: 2, num: '08', label: 'Mobile App', background: '#f5f5f5', caption: 'bottom' },
  { id: 'slot-11', column: 2, row: 3, num: '11', label: 'Mobile App', background: '#f5f5f5', caption: 'bottom' },
  { id: 'slot-16', column: 2, row: 4, num: '16', label: 'Mobile App', background: '#f5f5f5', caption: 'bottom' },
  { id: 'slot-19', column: 2, row: 5, num: '19', label: 'Hackathon', background: '#f3f3f3', caption: 'top' },
  { id: 'slot-22', column: 2, row: 6, num: '22', label: 'Hackathon', background: '#f3f3f3', caption: 'top' },
  { id: 'slot-24', column: 2, row: 7, num: '24', label: 'Hackathon', background: '#f3f3f3', caption: 'top' },
  { id: 'slot-27', column: 2, row: 8, num: '27', label: 'Hackathon', background: '#f3f3f3', caption: 'top' },
  { id: 'slot-30', column: 2, row: 9, num: '30', label: 'Hackathon', background: '#f3f3f3', caption: 'top' },
  { id: 'slot-33', column: 2, row: 10, num: '33', label: 'Hackathon', background: '#f3f3f3', caption: 'top' },
  { id: 'slot-36', column: 2, row: 11, num: '36', label: 'Hackathon', background: '#f3f3f3', caption: 'top' },
]
