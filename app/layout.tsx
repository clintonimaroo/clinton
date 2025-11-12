import type { Metadata } from 'next'
import './styles/globals.scss'

export const metadata: Metadata = {
  title: 'Clinton Imaro - Software Engineer, ML Engineer & Cloud Engineer',
  description: 'Clinton Imaro is a Software Engineer, Sessional Blockchain Developer & Cloud Engineer. Founding member of Code Space, a nonprofit community connecting Gen Z developers across Africa. Currently conducting research at Morgan State University on ML computing infrastructure and AI-driven autonomous systems.',
  keywords: 'Clinton Imaro, Software Engineer, ML Engineer, Cloud Engineer, Blockchain Developer, Code Space, Morgan State University, Tech Speaker, Software Engineering, Machine Learning, Cloud Computing',
  authors: [{ name: 'Clinton Imaro' }],
  openGraph: {
    title: 'Clinton Imaro - Software Engineer, ML Engineer & Cloud Engineer',
    description: 'Software Engineer, Sessional Blockchain Developer & Cloud Engineer. Founding member of Code Space. Research at Morgan State University on ML computing infrastructure.',
    images: [
      {
        url: 'https://clintonimaro.com/images/profile.jpg',
        width: 1200,
        height: 630,
        alt: 'Clinton Imaro - Software Engineer',
      },
      {
        url: 'https://clintonimaro.com/images/profile-square.jpg',
        width: 400,
        height: 400,
        alt: 'Clinton Imaro',
      },
    ],
    url: 'https://clintonimaro.com',
    type: 'profile',
    siteName: 'Clinton Imaro',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@clintonimaroo',
    site: '@clintonimaroo',
    title: 'Clinton Imaro - Software Engineer, ML Engineer & Cloud Engineer',
    description: 'Software Engineer, Sessional Blockchain Developer & Cloud Engineer. Founding member of Code Space.',
    images: ['https://clintonimaro.com/images/profile.jpg'],
  },
  alternates: {
    canonical: 'https://clintonimaro.com',
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
        <meta name="google-site-verification" content="" />
        <meta name="author" content="Clinton Imaro" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Clinton Imaro" />
        <meta name="twitter:domain" content="clintonimaro.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Clinton Imaro',
              alternateName: '@clintonimaro',
              url: 'https://clintonimaro.com',
              image: [
                {
                  '@type': 'ImageObject',
                  url: 'https://clintonimaro.com/images/profile.jpg',
                  width: 1200,
                  height: 630,
                },
                {
                  '@type': 'ImageObject',
                  url: 'https://clintonimaro.com/images/profile-square.jpg',
                  width: 400,
                  height: 400,
                },
                {
                  '@type': 'ImageObject',
                  url: 'https://clintonimaro.com/images/headshot.jpg',
                  width: 800,
                  height: 800,
                },
              ],
              sameAs: [
                'https://github.com/clintonimaroo',
                'https://linkedin.com/in/clintonimaro',
                'https://x.com/clintonimaroo',
                'https://twitter.com/clintonimaroo',
                'https://blog.clintonimaro.com',
                'https://www.codespaces.org',
              ],
              jobTitle: ['Software Engineer', 'ML Engineer', 'Cloud Engineer', 'Blockchain Developer'],
              description:
                'Clinton Imaro is a Software Engineer, Sessional Blockchain Developer & Cloud Engineer. Founding member of Code Space, a nonprofit community connecting Gen Z developers across Africa. Currently conducting research at Morgan State University on ML computing infrastructure and AI-driven autonomous systems.',
              knowsAbout: [
                'Software Engineering',
                'Machine Learning',
                'Cloud Computing',
                'Blockchain Development',
                'Web Development',
                'AI Systems',
                'Autonomous Systems',
              ],
              worksFor: [
                {
                  '@type': 'Organization',
                  name: 'Code Space',
                  url: 'https://www.codespaces.org',
                  description: 'A nonprofit community connecting Gen Z developers across Africa',
                  foundingDate: '2021',
                },
                {
                  '@type': 'Organization',
                  name: 'Apple',
                  url: 'https://www.apple.com',
                  jobTitle: 'ML Engineer',
                  startDate: '2024',
                },
                {
                  '@type': 'Organization',
                  name: 'Microsoft',
                  url: 'https://www.microsoft.com',
                  jobTitle: 'Cloud Engineer',
                  startDate: '2023',
                },
              ],
              alumniOf: {
                '@type': 'CollegeOrUniversity',
                name: 'Morgan State University',
                url: 'https://www.morgan.edu',
                department: {
                  '@type': 'Organization',
                  name: 'Transportation and Urban Infrastructure Studies Research Lab',
                },
              },
              memberOf: [
                {
                  '@type': 'Organization',
                  name: 'Code Space',
                  roleName: 'Founder',
                  startDate: '2021',
                },
              ],
              knowsLanguage: ['English'],
              nationality: {
                '@type': 'Country',
                name: 'United States',
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfilePage',
              mainEntity: {
                '@type': 'Person',
                name: 'Clinton Imaro',
                url: 'https://clintonimaro.com',
              },
              url: 'https://clintonimaro.com',
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Clinton Imaro',
              url: 'https://clintonimaro.com',
              author: {
                '@type': 'Person',
                name: 'Clinton Imaro',
              },
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://clintonimaro.com/search?q={search_term_string}',
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}

