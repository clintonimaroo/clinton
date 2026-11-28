import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import Footer from '@/components/Footer'
import '../styles/globals.scss'
import '../styles/home.scss'

const dmMono = localFont({
  src: [
    { path: '../fonts/dm-mono-latin-300-normal.woff2', weight: '300', style: 'normal' },
    { path: '../fonts/dm-mono-latin-400-normal.woff2', weight: '400', style: 'normal' },
    { path: '../fonts/dm-mono-latin-500-normal.woff2', weight: '500', style: 'normal' },
  ],
  variable: '--font-dm-mono',
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#ffffff',
}

const themeScript = `(function(){document.documentElement.dataset.theme='light'})()`

const description =
  'Clinton Imaro is a Nigerian software engineer, ML engineer, startup founder and product leader based in the United States. Co-founded Fathom (2nd place, OpenAI Startup Hackathon). Founded Code Space - 5,000+ members. Former ML Engineer Intern at Apple.'

export const metadata: Metadata = {
  title: 'Clinton Imaro',
  description,
  keywords:
    'Clinton Imaro, Software Engineer, ML Engineer, Startup Founder, Fathom, Code Space, Apple, Microsoft, Morgan State University, CEAMLS, UAV, Reinforcement Learning, Deep Learning, Next.js, Python, TypeScript, Go, AI, Machine Learning, West Africa, Tech Speaker, Hackathon, ITC 2026',
  authors: [{ name: 'Clinton Imaro' }],
  openGraph: {
    title: 'Clinton Imaro',
    description,
    images: [
      {
        url: 'https://clintonimaro.com/images/og.jpg',
        width: 1200,
        height: 630,
        alt: 'Clinton Imaro',
      },
    ],
    url: 'https://clintonimaro.com',
    type: 'profile',
    siteName: 'Clinton Imaro',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@clintonimaro',
    site: '@clintonimaro',
    title: 'Clinton Imaro',
    description,
    images: ['https://clintonimaro.com/images/og.jpg'],
  },
  alternates: {
    canonical: 'https://clintonimaro.com',
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
    <html lang="en" className={dmMono.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
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
              '@id': 'https://clintonimaro.com/#person',
              name: 'Clinton Imaro',
              alternateName: '@clintonimaro',
              url: 'https://clintonimaro.com',
              email: 'hi@clintonimaro.com',
              image: [
                {
                  '@type': 'ImageObject',
                  url: 'https://clintonimaro.com/images/profile.JPG',
                  width: 1200,
                  height: 630,
                },
                {
                  '@type': 'ImageObject',
                  url: 'https://clintonimaro.com/images/profile-square.JPG',
                  width: 400,
                  height: 400,
                },
              ],
              jobTitle: ['Software Engineer', 'ML Engineer', 'Startup Founder', 'Product Leader'],
              description:
                'Clinton Imaro is a Nigerian software engineer, ML engineer, startup founder and product leader based in the United States. Co-founded Fathom, AI code intelligence for engineering teams. Founded Code Space (5,000+ members). Former ML Engineer Intern at Apple. Undergraduate researcher at Morgan State University. 100+ tech talks worldwide. Published at ITC 2026.',
              homeLocation: {
                '@type': 'Place',
                name: 'United States',
                addressCountry: 'United States',
              },
              birthDate: '2004-06-26',
              birthPlace: {
                '@type': 'Place',
                name: 'Benin City',
                addressRegion: 'Edo State',
                addressCountry: 'Nigeria',
              },
              worksFor: [
                {
                  '@type': 'Organization',
                  name: 'Code Space',
                  url: 'https://www.codespaces.org',
                  roleName: 'Founder',
                  description: 'Nonprofit tech community with 5,000+ members across Africa, organizing one of West Africa\'s largest annual hackathons.',
                  foundingDate: '2021',
                },
              ],
              alumniOf: [
                {
                  '@type': 'Organization',
                  name: 'Fathom',
                  url: 'https://heyfathom.com',
                  description: 'Co-founder. An agentic voice-first code intelligence for engineering teams whose first language isn\'t English.',
                },
                {
                  '@type': 'Organization',
                  name: 'Apple',
                  url: 'https://www.apple.com',
                  description: 'ML Engineer Intern, 2024',
                },
                {
                  '@type': 'CollegeOrUniversity',
                  name: 'Morgan State University',
                  url: 'https://www.morgan.edu',
                  description: 'Pursuing Bachelor of Science in Computer Science & Mathematics (AI & Data Science)',
                },
                {
                  '@type': 'CollegeOrUniversity',
                  name: 'Hogeschool Gent (HOGENT)',
                  addressCountry: 'Belgium',
                  description: 'Associate of Science (A.S.) in Programming',
                },
              ],
              award: [
                'OpenAI Startup Hackathon - 2nd Place',
                'JPMorgan Data for Good Hackathon 2025 - 1st Place (Python Track)',
                'Google Hackathon 2024 - 1st Place (AI Track)',
                'Howard University BisonBytes 2025 - 3rd Place (AI Track)',
                'Most Influential Tech Personality 2022 - Young Africa Choice Award',
                'Most Enterprising Youth - I-GLIDE ACE CONCEPT (Nov 2021)',
                'Youngest Developer from Africa - Google (Mar 2021)',
                'Best Young Java Developer - Google (Oct 2020)',
              ],
              affiliation: [
                { '@type': 'Organization', name: 'Couchbase' },
                { '@type': 'Organization', name: 'Google' },
                { '@type': 'Organization', name: 'Paystack' },
                { '@type': 'Organization', name: 'AWS' },
                { '@type': 'Organization', name: 'Alx Africa' },
                { '@type': 'Organization', name: 'Genztechies' },
                { '@type': 'Organization', name: 'Wix' },
              ],
              knowsAbout: [
                'Software Engineering',
                'Machine Learning',
                'Deep Reinforcement Learning',
                'UAV Navigation',
                'Voice AI',
                'Cloud Engineering',
                'Next.js',
                'Python',
                'TypeScript',
                'Go',
                'Community Building',
                'Developer Advocacy',
                'Tech Entrepreneurship',
              ],
              performerIn: {
                '@type': 'Event',
                description: '100+ talks at tech events worldwide including Binance, The Future Entrepreneurship, and Google I/O Extended',
              },
              nationality: {
                '@type': 'Country',
                name: 'Nigeria',
              },
              sameAs: [
                'https://github.com/clintonimaroo',
                'https://www.linkedin.com/in/clintonimaro',
                'https://x.com/clintonimaro',
                'https://www.instagram.com/clintonimaro/',
                'https://www.facebook.com/clintonimaroo',
                'https://blog.clintonimaro.com',
                'https://www.codespaces.org',
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfilePage',
              mainEntity: { '@id': 'https://clintonimaro.com/#person' },
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
              author: { '@id': 'https://clintonimaro.com/#person' },
            }),
          }}
        />
      </head>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  )
}
