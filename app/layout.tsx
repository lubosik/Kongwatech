import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
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
    default: 'Kongwa Tech | Boutique AI Consultancy, Rochester Kent',
  },
  description:
    'Kongwa Tech is a boutique AI consultancy based in Rochester, Kent. AI strategy, implementation, and in-person AI ecosystem launches for ambitious businesses.',
  keywords: [
    'AI consultant Kent',
    'AI consultancy UK',
    'AI consultant Southeast England',
    'AI ecosystem launch',
    'Claude Code',
    'AI automation',
    'Lubosi Kongwa',
    'AI strategy UK',
  ],
  openGraph: {
    type: 'website',
    url: 'https://kongwatech.com',
    siteName: 'Kongwa Tech',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@lubosi_k',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/images/kt-logo.png',
    apple: '/images/kt-logo.png',
  },
}

const schemaOrg = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://kongwatech.com/#business',
      name: 'Kongwa Tech',
      url: 'https://kongwatech.com',
      email: 'lubosi@kongwatech.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Rochester',
        addressRegion: 'Kent',
        addressCountry: 'GB',
      },
      areaServed: ['Kent', 'Surrey', 'Southeast England', 'United Kingdom'],
      priceRange: '£6,000',
      description:
        'Boutique AI consultancy based in Rochester, Kent. Serving ambitious businesses with AI strategy, implementation, and in-person AI ecosystem launches.',
    },
    {
      '@type': 'Person',
      '@id': 'https://kongwatech.com/#lubosi',
      name: 'Lubosi Kongwa',
      jobTitle: 'Founder and Lead Consultant',
      url: 'https://kongwatech.com',
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
        'AI Automation',
        'Vibe Coding',
        'AI Strategy',
        'Anthropic',
        'Machine Learning',
      ],
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${cormorant.variable} ${inter.variable}`}>
      <body>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-NF7L5E1BKQ"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-NF7L5E1BKQ');
    `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
        <Nav />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
