// Created by Clinton Imaro on 27th November 2026.
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { formatDate, getPost, getPosts } from '@/lib/posts'

export const dynamicParams = false

export function generateStaticParams() {
  const posts = getPosts()
  return posts.length ? posts.map((p) => ({ slug: p.slug })) : [{ slug: 'none' }]
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  return {
    title: `${post.title} - Clinton Imaro`,
    description: post.summary,
    alternates: { canonical: `https://clintonimaro.com/writing/${post.slug}` },
    openGraph: { title: post.title, description: post.summary, type: 'article' },
  }
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  return (
    <main className="home">
      <p className="back">
        <Link href="/writing">writing</Link>
      </p>
      <article className="post">
        <p className="post-meta">
          {[post.tag, formatDate(post.date), `${post.minutes} min read`].filter(Boolean).join(' · ')}
          {post.draft && ' · draft'}
        </p>
        <h1>{post.title}</h1>
        <div className="post-body" dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
    </main>
  )
}
