import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About - Clinton Imaro',
  description: 'Learn more about Clinton Imaro - Software Engineer, ML Engineer, and Cloud Engineer. Background, professional journey, interests, and community work.',
  openGraph: {
    title: 'About - Clinton Imaro',
    description: 'Learn more about Clinton Imaro - Software Engineer, ML Engineer, and Cloud Engineer.',
    url: 'https://clintonimaro.com/about',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About - Clinton Imaro',
    description: 'Learn more about Clinton Imaro - Software Engineer, ML Engineer, and Cloud Engineer.',
  },
  alternates: {
    canonical: 'https://clintonimaro.com/about',
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

