import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Services | AI Foundations and Echo Launch',
  description:
    'Two ways to work with Kongwa Tech: AI Foundations online advisory and Echo Launch in-person AI ecosystem implementation.',
}

const services = [
  {
    number: '01',
    title: 'AI Foundations',
    tagline: 'Online AI advisory for founders and teams who need a practical operating layer.',
    description: `AI Foundations is an online advisory engagement for business owners who are serious about AI but do not yet have the internal expertise to implement it properly. Lubosi works directly with you and your team to define your AI strategy, identify the highest-impact use cases for your specific operations, and implement the foundational tools and workflows that will give you lasting capability.

This is not a passive training course. It is hands-on advisory support delivered online so your team can make decisions, build workflows, and move from AI curiosity to operational capability.`,
    price: 'Online advisory',
    href: '/services/ai-foundations',
    ideal: 'Business owners who want to implement AI seriously and need expert guidance throughout.',
  },
  {
    number: '02',
    title: 'Echo Launch',
    tagline: 'In-person launch of your AI environment, ecosystem, and first working systems.',
    description: `Echo Launch is an in-person product engagement where Lubosi comes into your environment and helps launch the AI ecosystem your business needs to operate differently.

The day is spent mapping the real business environment, identifying where AI should sit, selecting the tools and automations that matter, and launching the first working version of the system with your team. This is not a theoretical roadmap exercise. It is the beginning of your AI operating environment.

You leave with clarity, live assets, and a practical launch path for the ecosystem you are building.`,
    price: '£6,000',
    href: '/services/echo-launch',
    ideal: 'Founders and MDs who want in-person AI implementation, not another generic workshop.',
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-28 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <span className="text-gold font-sans text-xs tracking-[0.3em] uppercase">Services</span>
          <h1 className="font-serif text-white text-5xl lg:text-7xl mt-6 leading-tight">
            Two Ways to Work Together
          </h1>
          <p className="text-white/60 font-sans text-lg mt-6 max-w-xl leading-relaxed">
            Each engagement is tailored to the business. Every client is selected.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 space-y-24">
          {services.map((s, i) => (
            <div key={s.number} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-start ${i % 2 === 1 ? 'lg:flex lg:flex-row-reverse' : ''}`}>
              <div className={`bg-cream p-12 flex flex-col justify-between min-h-64 ${i % 2 === 1 ? 'lg:ml-8' : ''}`}>
                <span className="text-gold font-sans text-4xl font-light">{s.number}</span>
                <div>
                  <p className="font-sans text-xs text-charcoal/40 uppercase tracking-widest mb-2">Investment</p>
                  <p className="font-serif text-navy text-xl">{s.price}</p>
                </div>
              </div>
              <div>
                <span className="text-gold font-sans text-xs tracking-[0.3em] uppercase">{s.number}</span>
                <h2 className="font-serif text-navy text-4xl mt-3 mb-4">{s.title}</h2>
                <p className="text-charcoal/60 font-sans text-base italic mb-6">{s.tagline}</p>
                <div className="space-y-4 text-charcoal/80 font-sans text-sm leading-relaxed">
                  {s.description.split('\n\n').map((para, j) => (
                    <p key={j}>{para}</p>
                  ))}
                </div>
                <p className="mt-6 pt-6 border-t border-gray-200 text-xs text-charcoal/50 font-sans">
                  <span className="text-navy font-medium">Ideal for:</span> {s.ideal}
                </p>
                <Link
                  href={s.href}
                  className="inline-flex items-center gap-2 mt-6 text-sm font-sans text-navy border border-navy px-6 py-3 hover:bg-navy hover:text-white transition-colors"
                >
                  Full details
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Apply CTA */}
      <section className="py-24 bg-navy text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-serif text-white text-4xl lg:text-5xl mb-6">
            Not sure which service is right for you?
          </h2>
          <p className="text-white/60 font-sans mb-10">
            Every engagement starts with a 15-minute discovery call. Apply and Lubosi will help you identify the right starting point.
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
