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
  "i build things where software meets money, and the communities that grow the people who'll build them."

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
        width: 800,
        height: 800,
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
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
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
              image: {
                '@type': 'ImageObject',
                url: 'https://clintonimaro.com/images/og.jpg',
                width: 800,
                height: 800,
              },
              jobTitle: ['Engineer', 'Founder', 'Robotics Researcher'],
              description:
                'Engineer and founder. Builds things where software meets money, and the communities that grow the people who will build them. Founded Code Space at 16 and grew it to 5,000+ young builders across Africa, co-founded Fathom, and worked on ML at Apple and cloud at Microsoft. Robotics researcher working on autonomous drones for disaster response, with two papers accepted at ITC 2026.',
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
                  description: 'Nonprofit creating opportunities for young builders across Africa, with 5,000+ members.',
                  foundingDate: '2021',
                },
                {
                  '@type': 'Organization',
                  name: 'CEAMLS, Morgan State University',
                  url: 'https://www.morgan.edu',
                  roleName: 'Robotics Researcher',
                  description: 'Autonomous drones for disaster response: perception and planning for UAVs.',
                },
              ],
              alumniOf: [
                {
                  '@type': 'Organization',
                  name: 'Fathom',
                  url: 'https://heyfathom.com',
                  description: 'Co-founder and CEO. Voice-first code intelligence for engineering teams.',
                },
                {
                  '@type': 'Organization',
                  name: 'Apple',
                  url: 'https://www.apple.com',
                  description: 'ML Engineer Intern, 2024',
                },
                {
                  '@type': 'Organization',
                  name: 'Microsoft',
                  url: 'https://www.microsoft.com',
                  description: 'Cloud Engineer Intern, 2023',
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
                'First place, Morgan TechFest 2026',
                'First place, Python track, JPMorgan Chase Data for Good 2025',
                'Second place, OpenAI Startup Hackathon 2025',
                'Third place, AI track, BisonBytes, Howard University 2025',
                'First place, AI track, Google Hackathon 2024',
                'Most Influential Tech Personality, Young Africa Choice Award 2022',
                'Most Enterprising Youth, I-GLIDE ACE Concept 2021',
                'Youngest Developer from Africa, Google 2021',
                'Best Young Java Developer, Google 2020',
              ],
              knowsAbout: [
                'Software Engineering',
                'Machine Learning',
                'Deep Reinforcement Learning',
                'UAV Navigation',
                'Robotics',
                'Computer Vision',
                'Autonomous Systems',
                'Voice AI',
                'Cloud Engineering',
                'Next.js',
                'Python',
                'TypeScript',
                'Go',
                'Community Building',
                'Tech Entrepreneurship',
              ],
              nationality: {
                '@type': 'Country',
                name: 'Nigeria',
              },
              sameAs: [
                'https://github.com/clintonimaroo',
                'https://www.linkedin.com/in/clintonimaro',
                'https://x.com/clintonimaro',
                'https://www.facebook.com/clintonimaroo',
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
