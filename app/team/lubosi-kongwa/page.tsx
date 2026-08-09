import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Lubosi Kongwa, Founder of Kongwa Tech',
  description:
    'Lubosi Kongwa is the founder of Kongwa Tech, working across venture building, AI systems, product and platform execution, and audience growth.',
  alternates: { canonical: '/team/lubosi-kongwa' },
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': 'https://kongwatech.com/#lubosi',
  name: 'Lubosi Kongwa',
  jobTitle: 'Founder, Kongwa Tech',
  url: 'https://kongwatech.com/team/lubosi-kongwa',
  email: 'lubosi@kongwatech.com',
  worksFor: { '@id': 'https://kongwatech.com/#organization' },
  sameAs: [
    'https://www.linkedin.com/in/lubosi-kongwa-a9abb9244/',
    'https://x.com/lubosi_k',
    'https://www.instagram.com/lubosi.k/',
    'https://www.tiktok.com/@b0si5',
  ],
  knowsAbout: [
    'Artificial Intelligence',
    'Venture Building',
    'Product Development',
    'Platform Engineering',
    'Audience Growth',
    'Agentic Systems',
  ],
}

const socialLinks = [
  ['LinkedIn', 'https://www.linkedin.com/in/lubosi-kongwa-a9abb9244/'],
  ['X', 'https://x.com/lubosi_k'],
  ['Instagram', 'https://www.instagram.com/lubosi.k/'],
  ['TikTok', 'https://www.tiktok.com/@b0si5'],
] as const

export default function LubosiProfilePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />

      <section className="bg-navy px-6 py-20 text-white lg:px-12 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-gold">Founder</p>
          <h1 className="mt-6 font-serif text-5xl leading-none sm:text-6xl lg:text-7xl">Lubosi Kongwa</h1>
          <p className="mt-5 text-base uppercase tracking-[0.16em] text-white/55">Founder, Kongwa Tech</p>
        </div>
      </section>

      <section className="bg-cream px-6 py-16 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="relative aspect-[4/5] overflow-hidden bg-navy lg:sticky lg:top-24">
            <Image
              src="/images/team/lubosi.png"
              alt="Lubosi Kongwa, founder of Kongwa Tech"
              fill
              className="object-cover object-center"
              sizes="(min-width: 1024px) 38vw, 100vw"
              priority
            />
          </div>

          <div className="self-center">
            <p className="font-serif text-3xl leading-snug text-navy sm:text-4xl">
              Technology, strategy and operating capability in one company.
            </p>
            <div className="mt-8 space-y-6 text-base leading-relaxed text-charcoal/70">
              <p>
                Lubosi Kongwa founded Kongwa Tech to bring technology, strategy and operating capability into one company. His work focuses on building the product, AI and infrastructure layers that help ventures move from an idea or operating constraint to a useful system.
              </p>
              <p>
                His experience spans go-to-market automation, growth systems, private-markets research and outreach, recruitment sourcing, AI-enabled workflows and product execution for founders and leadership teams.
              </p>
              <p>
                Through Kongwa Tech, Lubosi works with a small number of founders and brands where hands-on execution and aligned incentives can create meaningful leverage. The work may include product development, AI implementation, platform engineering and audience growth, depending on what the venture needs.
              </p>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 border-t border-navy/15 pt-7">
              {socialLinks.map(([label, href]) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="text-sm text-charcoal/60 underline decoration-gold underline-offset-4 transition-colors hover:text-navy">
                  {label}
                </a>
              ))}
            </div>

            <Link href="/consult" className="mt-10 inline-flex min-h-12 items-center bg-gold px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-gold-dark">
              Consult About Your Project
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
