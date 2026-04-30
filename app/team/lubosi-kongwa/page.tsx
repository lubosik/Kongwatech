import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Lubosi Kongwa | Founder and Lead Consultant',
  description:
    'Lubosi Kongwa is the founder and lead consultant at Kongwa Tech, building AI systems and implementation environments for ambitious businesses.',
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Lubosi Kongwa',
  jobTitle: 'Founder and Lead Consultant',
  url: 'https://kongwatech.com/team/lubosi-kongwa',
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
    'AI Automation',
    'AI Strategy',
    'Claude Code',
    'Go-to-market automation',
    'Agentic systems',
    'Recruitment automation',
    'Fundraising automation',
  ],
}

export default function LubosiProfilePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <section className="bg-navy py-28 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <span className="text-gold font-sans text-xs tracking-[0.3em] uppercase">Founder Profile</span>
          <h1 className="font-serif text-white text-5xl lg:text-7xl mt-6 leading-tight">
            Lubosi Kongwa
          </h1>
          <p className="text-white/60 font-sans text-lg mt-6 max-w-xl leading-relaxed">
            Founder and lead consultant at Kongwa Tech.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div className="relative h-[560px] lg:sticky lg:top-24 overflow-hidden bg-navy">
              <Image
                src="/images/team/lubosi-profile.jpg"
                alt="Lubosi Kongwa"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
            <div className="space-y-8 font-sans text-charcoal/80 text-base leading-relaxed">
              <p>
                Lubosi Kongwa founded Kongwa Tech to help ambitious businesses move from AI curiosity to
                practical AI infrastructure. The work is focused on building environments, workflows, and
                systems that make teams faster, clearer, and more commercially effective.
              </p>
              <p>
                His work spans go-to-market automation, growth marketing systems, private equity and
                fundraising agents, recruitment sourcing systems, and AI-enabled operating workflows for
                founders and leadership teams.
              </p>
              <p>
                Kongwa Tech is deliberately boutique. Every engagement is led directly by Lubosi, from the
                initial strategy through to the implementation details. The goal is not to sell generic AI
                training. The goal is to launch useful systems in the context of the real business.
              </p>
              <p>
                Echo Launch is the in-person expression of that work: Lubosi enters the client environment,
                maps the ecosystem, identifies the automation layer, and helps launch the first working
                version of the AI operating environment.
              </p>
              <p>
                AI Foundations is the online advisory path for businesses that need structured guidance,
                direct feedback, and implementation support without an in-person engagement.
              </p>

              <div className="pt-6 border-t border-gray-200">
                <p className="text-xs font-sans text-charcoal/40 uppercase tracking-widest mb-4">Connect</p>
                <div className="flex flex-wrap gap-6">
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

              <Link
                href="/apply"
                className="inline-block bg-gold text-white font-sans text-sm px-10 py-4 hover:bg-gold-dark transition-colors"
              >
                Apply to Work Together
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
