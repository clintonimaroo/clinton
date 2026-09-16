// Site data and content

import type { ExperienceEntry, WorkTile } from '@/types'

export const WORK: WorkTile[] = [
  {
    id: 'fathom',
    num: '01',
    name: 'Fathom',
    label: 'Voice AI',
    description:
      'Voice-first AI for code comprehension. Parallel agents for codebase understanding, multilingual voice queries, and visual mapping.',
    href: 'https://www.heyfathom.com/',
  },
  {
    id: 'seleve',
    num: '02',
    name: 'Seleve',
    label: 'Talent',
    description: 'Enterprise talent intelligence. AI retrieval and ranking for skill matching, cutting manual screening time by 70%.',
  },
  {
    id: 'retrak',
    num: '03',
    name: 'Retrak',
    label: 'Job hunting',
    description:
      'Automated job hunting platform. AI-powered resume customization + application automation, 226 active users in its first two months.',
  },
  {
    id: 'learn-ai',
    num: '04',
    name: 'learn.ai',
    label: 'Learning',
    description: 'Personalized learning platform. Conversational, multilingual skill roadmaps with voice input and ReactFlow visualization.',
  },
  {
    id: 'aqua',
    num: '05',
    name: 'Aqua',
    label: 'DeFi',
    description: 'DeFi strategy platform. LangChain/LangGraph agent pipelines with Pinecone retrieval for real-time autonomous market analysis.',
  },
]

export const EXPERIENCE: ExperienceEntry[] = [
  {
    id: 'code-space',
    company: 'Code Space',
    href: 'https://www.codespaces.org/',
    role: 'Founder',
    description:
      'Building one of the fastest growing communities in Nigeria and across Africa, where Gen Z developers, black builders, founders, and designers come to connect, grow, Impact and discover life-changing opportunities and the next challenge to take on.',
  },
  {
    id: 'apple',
    company: 'Apple',
    href: 'https://www.apple.com/',
    role: 'Prev Core ML Engineer Intern',
    description:
      'Transformer fine-tuning for intent classification in Siri’s query pipeline. Attention optimizations + latency reductions on internal benchmarks.',
  },
  {
    id: 'microsoft',
    company: 'Microsoft',
    href: 'https://www.microsoft.com/',
    role: 'Prev Cloud Engineer Intern',
    description:
      'Azure deployment automations for enterprise applications. CI/CD pipeline reliability + resource allocation efficiency across deployment environments.',
  },
]
