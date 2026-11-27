// Created by Clinton Imaro on 27th November 2026.
import fs from 'node:fs'
import path from 'node:path'

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

function escape(text: string): string {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

function inline(text: string): string {
  return escape(text)
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/!\[([^\]]*)\]\(([^)\s]+)\)/g, '<img src="$2" alt="$1" />')
    .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/(^|[^*])\*([^*\s][^*]*)\*/g, '$1<em>$2</em>')
}

function render(markdown: string): string {
  const lines = markdown.replace(/\r\n/g, '\n').split('\n')
  const out: string[] = []
  let i = 0
  while (i < lines.length) {
    const line = lines[i]
    if (!line.trim()) {
      i++
      continue
    }
    if (line.startsWith('```')) {
      const code: string[] = []
      i++
      while (i < lines.length && !lines[i].startsWith('```')) code.push(lines[i++])
      i++
      out.push(`<pre><code>${escape(code.join('\n'))}</code></pre>`)
      continue
    }
    const heading = line.match(/^(#{1,3})\s+(.*)$/)
    if (heading) {
      const level = heading[1].length + 1
      out.push(`<h${level}>${inline(heading[2])}</h${level}>`)
      i++
      continue
    }
    if (/^(-{3,}|\*{3,})$/.test(line.trim())) {
      out.push('<hr />')
      i++
      continue
    }
    if (line.startsWith('>')) {
      const quote: string[] = []
      while (i < lines.length && lines[i].startsWith('>')) quote.push(lines[i++].replace(/^>\s?/, ''))
      out.push(`<blockquote><p>${inline(quote.join(' '))}</p></blockquote>`)
      continue
    }
    if (/^[-*]\s+/.test(line) || /^\d+\.\s+/.test(line)) {
      const ordered = /^\d+\./.test(line)
      const items: string[] = []
      while (i < lines.length && (/^[-*]\s+/.test(lines[i]) || /^\d+\.\s+/.test(lines[i]))) {
        items.push(`<li>${inline(lines[i].replace(/^([-*]|\d+\.)\s+/, ''))}</li>`)
        i++
      }
      out.push(ordered ? `<ol>${items.join('')}</ol>` : `<ul>${items.join('')}</ul>`)
      continue
    }
    const para: string[] = []
    while (
      i < lines.length &&
      lines[i].trim() &&
      !/^(#{1,3}\s|>|```|[-*]\s|\d+\.\s)/.test(lines[i])
    ) {
      para.push(lines[i++])
    }
    out.push(`<p>${inline(para.join(' '))}</p>`)
  }
  return out.join('\n')
}

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
    html: render(body),
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
