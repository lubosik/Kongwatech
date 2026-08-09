import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Nav from '@/components/nav'
import Footer from '@/components/footer'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://kongwatech.com'),
  title: {
    template: '%s | Kongwa Tech',
    default: 'Kongwa Tech — Technology & Strategy Holding Company',
  },
  description:
    'Kongwa Tech partners with founders and brands to build, scale and operate ventures across AI, digital infrastructure and community.',
  keywords: [
    'technology holding company',
    'venture building',
    'AI implementation',
    'platform engineering',
    'product development',
    'audience growth',
    'Lubosi Kongwa',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: 'https://kongwatech.com',
    siteName: 'Kongwa Tech',
    locale: 'en_GB',
    title: 'Kongwa Tech — Technology & Strategy Holding Company',
    description:
      'Kongwa Tech partners with founders and brands to build, scale and operate ventures across AI, digital infrastructure and community.',
    images: [{ url: '/images/kt-logo.png', width: 512, height: 512, alt: 'Kongwa Tech' }],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@lubosi_k',
    title: 'Kongwa Tech — Technology & Strategy Holding Company',
    description:
      'Building, scaling and operating ventures across AI, digital infrastructure and community.',
    images: ['/images/kt-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/images/kt-icon-512.png',
    apple: '/images/kt-icon-512.png',
  },
  manifest: '/manifest.webmanifest',
}

const schemaOrg = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://kongwatech.com/#organization',
      name: 'Kongwa Tech',
      url: 'https://kongwatech.com',
      logo: 'https://kongwatech.com/images/kt-logo.png',
      email: 'lubosi@kongwatech.com',
      description:
        'Technology and strategy holding company partnering with founders and brands to build, scale and operate ventures across AI, digital infrastructure and community.',
      founder: { '@id': 'https://kongwatech.com/#lubosi' },
      sameAs: ['https://www.linkedin.com/company/kongwa-tech/'],
    },
    {
      '@type': 'Person',
      '@id': 'https://kongwatech.com/#lubosi',
      name: 'Lubosi Kongwa',
      jobTitle: 'Founder, Kongwa Tech',
      url: 'https://kongwatech.com/team/lubosi-kongwa',
      email: 'lubosi@kongwatech.com',
      sameAs: [
        'https://www.linkedin.com/in/lubosi-kongwa-a9abb9244/',
        'https://x.com/lubosi_k',
        'https://www.instagram.com/lubosi.k/',
        'https://www.tiktok.com/@b0si5',
      ],
      knowsAbout: [
        'Artificial Intelligence',
        'Claude Code',
        'Product Development',
        'Platform Engineering',
        'Venture Building',
        'Audience Growth',
      ],
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${cormorant.variable} ${inter.variable}`}>
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NF7L5E1BKQ"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-NF7L5E1BKQ');
        `}</Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
        <Nav />
        <main id="main-content" className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
