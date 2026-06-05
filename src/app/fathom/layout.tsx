import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fathom Vision - Clinton Imaro',
  description:
    'A note from Clinton Imaro on the vision behind Fathom, voice-first AI for engineering teams whose working language is not English.',
  openGraph: {
    title: 'Fathom Vision - Clinton Imaro',
    description:
      'A note from Clinton Imaro on the vision behind Fathom, voice-first AI for engineering teams whose working language is not English.',
    url: 'https://clintonimaro.com/fathom',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fathom Vision - Clinton Imaro',
    description:
      'A note from Clinton Imaro on the vision behind Fathom, voice-first AI for engineering teams whose working language is not English.',
  },
  alternates: {
    canonical: 'https://clintonimaro.com/fathom',
  },
}

export default function FathomLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
