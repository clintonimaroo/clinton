// Created by Clinton Imaro on 27th November 2026.
import fs from 'node:fs'
import path from 'node:path'
import { marked } from 'marked'

export type Post = {
  slug: string
  title: string
  date: string
  tag: string
  summary: string
  draft: boolean
  minutes: number
  html: string
}

const DIR = path.join(process.cwd(), 'content', 'writing')

function parse(file: string): Post {
  const raw = fs.readFileSync(path.join(DIR, file), 'utf8').replace(/^<!--.*?-->\s*/s, '')
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/)
  const meta: Record<string, string> = {}
  const body = match ? match[2] : raw
  if (match) {
    for (const line of match[1].split('\n')) {
      const i = line.indexOf(':')
      if (i > 0) meta[line.slice(0, i).trim()] = line.slice(i + 1).trim().replace(/^["']|["']$/g, '')
    }
  }
  const words = body.split(/\s+/).filter(Boolean).length
  return {
    slug: file.replace(/\.md$/, ''),
    title: meta.title ?? file,
    date: meta.date ?? '',
    tag: meta.tag ?? '',
    summary: meta.summary ?? '',
    draft: meta.draft === 'true',
    minutes: Math.max(1, Math.round(words / 230)),
    html: marked.parse(body, { async: false }) as string,
  }
}

export function getPosts(): Post[] {
  if (!fs.existsSync(DIR)) return []
  const showDrafts = process.env.NODE_ENV !== 'production'
  return fs
    .readdirSync(DIR)
    .filter((f) => f.endsWith('.md'))
    .map(parse)
    .filter((p) => showDrafts || !p.draft)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getPost(slug: string): Post | undefined {
  return getPosts().find((p) => p.slug === slug)
}

export function formatDate(date: string): string {
  const d = new Date(`${date}T00:00:00`)
  if (Number.isNaN(d.getTime())) return date
  return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }).toLowerCase()
}
