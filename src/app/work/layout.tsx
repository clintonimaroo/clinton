import type { Metadata } from 'next'

const description = 'Selected work by Clinton Imaro - products, interfaces and the things behind them.'

export const metadata: Metadata = {
  title: 'Work - Clinton Imaro',
  description,
  openGraph: {
    title: 'Work - Clinton Imaro',
    description,
    url: 'https://clintonimaro.com/work',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Work - Clinton Imaro',
    description,
  },
  alternates: {
    canonical: 'https://clintonimaro.com/work',
  },
}

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
