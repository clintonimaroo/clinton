import type { Metadata } from 'next'
import './styles/globals.scss'

export const metadata: Metadata = {
  title: 'Clinton Imaro - Senior Software Engineer | Code Space',
  description: 'Clinton Imaro - Senior Software Engineer specializing in web development, tech leadership, and innovative solutions. Based in San Francisco Bay Area.',
  keywords: 'Clinton Imaro, Software Engineer, Web Developer, Tech Speaker, Code Space, Technology Professional, San Francisco',
  authors: [{ name: 'Clinton Imaro' }],
  openGraph: {
    title: 'Clinton Imaro - Senior Software Engineer',
    description: 'A self-motivated, resilient, highly talented technology professional with expertise in web development and innovative solutions',
    images: ['https://clintonimaro.com/profile.jpg'],
    url: 'https://clintonimaro.com',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@clintimaro',
  },
  themeColor: '#0a0a0a',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black',
  },
  other: {
    'format-detection': 'telephone=no',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="canonical" href="https://clintonimaro.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Clinton Imaro',
              url: 'https://clintonimaro.com',
              image: 'https://clintonimaro.com/profile.jpg',
              sameAs: [
                'https://github.com/clintonimaroo',
                'https://linkedin.com/in/clintonimaro',
              ],
              jobTitle: 'Senior Software Engineer',
              worksFor: {
                '@type': 'Organization',
                name: 'Code Space',
              },
              alumniOf: {
                '@type': 'CollegeOrUniversity',
                name: 'Morgan State University',
              },
              description:
                'A self-motivated, resilient, highly talented technology professional specializing in software engineering and web development.',
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}

