// Created by Clinton Imaro on 27th November 2026.
import type { Metadata } from 'next'
import Link from 'next/link'

import { formatDate, getPosts } from '@/lib/posts'

export const metadata: Metadata = {
  title: 'Writing - Clinton Imaro',
  description: 'Writing by Clinton Imaro on agents, robotics and building things that last.',
  alternates: { canonical: 'https://clintonimaro.com/writing' },
}

export default function Writing() {
  const posts = getPosts()

  return (
    <main className="home">
      <p className="back">
        <Link href="/">clinton imaro</Link>
      </p>
      <section>
        <h2>Writing</h2>
        {posts.length === 0 ? (
          <p>nothing published yet.</p>
        ) : (
          <div className="posts">
            {posts.map((post) => (
              <Link href={`/writing/${post.slug}`} className="post-row" key={post.slug}>
                <span className="post-meta">
                  {[post.tag, formatDate(post.date), `${post.minutes} min read`].filter(Boolean).join(' · ')}
                  {post.draft && ' · draft'}
                </span>
                <span className="post-title">{post.title}</span>
                {post.summary && <span className="post-summary">{post.summary}</span>}
              </Link>
            ))}
          </div>
        )}
      </section>
    </main>
  )
}
