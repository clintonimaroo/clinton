import type { Metadata } from 'next'
import './styles/globals.scss'

export const metadata: Metadata = {
  title: 'Clinton Imaro - Software Engineer & ML Engineer',
  description: 'Clinton Imaro (born June 26, 2004) is a Nigerian Software Engineer, founder, and speaker with extensive experience in building and managing teams. Known for his work with major tech companies and for founding Code Space, a nonprofit community with 10,000+ members that organizes one of Nigeria\'s largest annual hackathons.',
  keywords: 'Clinton Imaro, Software Engineer, ML Engineer, Code Space, Morgan State University, Tech Speaker, Software Engineering, Machine Learning',
  authors: [{ name: 'Clinton Imaro' }],
  openGraph: {
    title: 'Clinton Imaro - Software Engineer & ML Engineer',
    description: 'Nigerian Software Engineer, founder, and speaker. Founder of Code Space (10,000+ members). Currently pursuing Bachelor\'s in Computer Science (Interactive Intelligence) at Morgan State University.',
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
    creator: '@clintonimaro',
    site: '@clintonimaro',
    title: 'Clinton Imaro - Software Engineer & ML Engineer',
    description: 'Nigerian Software Engineer, founder, and speaker. Founder of Code Space (10,000+ members).',
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
                'https://x.com/clintonimaro',
                'https://www.instagram.com/clintonimaro/',
                'https://blog.clintonimaro.com',
                'https://www.codespaces.org',
              ],
              jobTitle: ['Software Engineer', 'ML Engineer'],
              description:
                'Clinton Imaro (born June 26, 2004) is a Nigerian Software Engineer, founder, and speaker with extensive experience in building and managing teams. Known for his work with major tech companies and for founding the non-profit community Code Space, which has grown to 10,000+ members and organizes one of Nigeria\'s largest annual hackathons with 1,000+ attendees.',
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
                  description: 'A nonprofit community connecting Gen Z developers across Africa. Code Space has grown to 10,000+ members and organizes one of Nigeria\'s largest annual hackathons with 1,000+ attendees.',
                  foundingDate: '2021',
                  numberOfEmployees: {
                    '@type': 'QuantitativeValue',
                    value: '10000+',
                  },
                },
                {
                  '@type': 'Organization',
                  name: 'Apple',
                  url: 'https://www.apple.com',
                  jobTitle: 'ML Engineer',
                  startDate: '2024',
                },
              ],
              alumniOf: [
                {
                  '@type': 'CollegeOrUniversity',
                  name: 'Morgan State University',
                  url: 'https://www.morgan.edu',
                  department: {
                    '@type': 'Organization',
                    name: 'Computer Science - Interactive Intelligence',
                  },
                },
                {
                  '@type': 'CollegeOrUniversity',
                  name: 'Hogent',
                  addressCountry: 'Belgium',
                },
                {
                  '@type': 'School',
                  name: 'Light of Day',
                  addressLocality: 'Kubwa',
                  addressRegion: 'Abuja',
                  addressCountry: 'Nigeria',
                },
              ],
              memberOf: [
                {
                  '@type': 'Organization',
                  name: 'Code Space',
                  roleName: 'Founder',
                  startDate: '2021',
                },
              ],
              knowsAbout: [
                'Software Engineering',
                'Machine Learning',
                'Cloud Computing',
                'Web Development',
                'AI Systems',
                'Autonomous Systems',
                'Interactive Intelligence',
                'Team Building',
                'Community Building',
              ],
              award: 'Founder of Code Space - 10,000+ member community',
              hasOccupation: {
                '@type': 'Occupation',
                name: 'Software Engineer',
                occupationLocation: {
                  '@type': 'Country',
                  name: 'United States',
                },
                skills: 'AI, Machine Learning, Software Engineering',
              },
              knowsLanguage: ['English'],
              nationality: {
                '@type': 'Country',
                name: 'Nigeria',
              },
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Baltimore',
                addressRegion: 'Maryland',
                addressCountry: 'United States',
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

