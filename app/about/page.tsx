import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Lubosi Kongwa | AI Consultant, Rochester Kent',
  description:
    'Lubosi Kongwa is an AI consultant and Fractional Chief AI Officer based in Rochester, Kent. Learn about his approach and background.',
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Lubosi Kongwa',
  jobTitle: 'AI Consultant and Fractional Chief AI Officer',
  url: 'https://kongwatech.com/about',
  email: 'lubosi@kongwatech.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Rochester',
    addressRegion: 'Kent',
    addressCountry: 'GB',
  },
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
    'AI Consulting',
  ],
}

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      {/* Hero */}
      <section className="bg-navy py-28 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <span className="text-gold font-sans text-xs tracking-[0.3em] uppercase">About</span>
          <h1 className="font-serif text-white text-5xl lg:text-7xl mt-6 leading-tight">
            Lubosi Kongwa
          </h1>
          <p className="text-white/60 font-sans text-lg mt-6 max-w-xl leading-relaxed">
            AI Consultant. Fractional Chief AI Officer. Rochester, Kent.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div className="relative h-[600px] lg:sticky lg:top-24">
              <Image
                src="/images/lubosi-hero.jpg"
                alt="Lubosi Kongwa"
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="space-y-8 font-sans text-charcoal/80 text-base leading-relaxed">
              <p>
                Lubosi Kongwa founded Kongwa Tech to fill a gap that is obvious to anyone who works closely
                with small and medium businesses in Southeast England: real AI expertise is either inaccessible
                or irrelevant to them. The consultancies that exist either work exclusively with enterprise clients,
                or they deliver generic workshops that leave business owners no closer to actually implementing anything.
              </p>
              <p>
                Kongwa Tech is built differently. It is a boutique practice, deliberately kept small, where every
                client receives Lubosi's direct attention. There are no account managers. No junior consultants
                running engagements. When you work with Kongwa Tech, you work with Lubosi.
              </p>
              <p>
                Lubosi's approach to AI consulting starts with operations, not tools. Before recommending any
                technology, he maps what a business actually does — how work moves through the organisation,
                where time is lost, where decisions are made without sufficient information. The AI strategy
                follows from that analysis. Tools are selected to solve specific problems, not because they are
                fashionable.
              </p>
              <p>
                His technical background spans AI system development, automation architecture, and hands-on
                work with the full Anthropic ecosystem including Claude Code — one of the most powerful AI
                coding tools available to businesses today. He uses these tools in his own practice daily,
                which means the advice he gives comes from direct experience rather than theoretical frameworks.
              </p>
              <p>
                Geographically, Kongwa Tech is rooted in Southeast England. Rochester, Kent is home base.
                The Kongwa Session — his in-person intensive service — is available across Kent, Surrey,
                Sussex, and Greater London. Remote advisory work extends nationally.
              </p>
              <p>
                The practice operates on a selective basis. Not every inquiry results in an engagement, and
                that is by design. The goal is to work with businesses where the impact will be real and
                measurable, not to accumulate clients.
              </p>

              <div className="pt-6 border-t border-gray-200">
                <p className="text-xs font-sans text-charcoal/40 uppercase tracking-widest mb-4">Connect</p>
                <div className="flex gap-6">
                  {[
                    ['LinkedIn', 'https://www.linkedin.com/in/lubosi-kongwa-a9abb9244/'],
                    ['X / Twitter', 'https://x.com/lubosi_k'],
                    ['Instagram', 'https://www.instagram.com/lubosi.k/'],
                    ['TikTok', 'https://www.tiktok.com/@b0si5'],
                  ].map(([label, href]) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-charcoal/60 hover:text-gold transition-colors"
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Apply CTA */}
      <section className="py-24 bg-navy text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-serif text-white text-4xl lg:text-5xl mb-6">
            Ready to apply?
          </h2>
          <p className="text-white/60 font-sans mb-10">
            Every engagement starts with a 15-minute discovery call. Applications are reviewed personally.
          </p>
          <Link
            href="/apply"
            className="inline-block bg-gold text-white font-sans text-sm px-10 py-4 hover:bg-gold-dark transition-colors"
          >
            Apply to Work Together
          </Link>
        </div>
      </section>
    </>
  )
}
