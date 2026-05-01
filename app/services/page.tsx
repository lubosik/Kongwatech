import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Services | The Blueprint Session and Eco Launch | Kongwa Tech',
  description:
    'Two ways to work with Kongwa Tech: The Blueprint Session online from £997, and Eco Launch in-person from £3,000.',
}

const services = [
  {
    number: '01',
    title: 'The Blueprint Session',
    tagline: 'Two hours. A working system. Yours to keep building.',
    price: '£997',
    format: 'Online',
    description: `This is a live, hands-on working session with Lubosi. Not a course. Not a recording. A real two to three hour session where you sit alongside him and build something that works before the call ends.

You pick a starting point: a lead generator, an SEO content machine, an automated social media pipeline, an ads intelligence system, or a workflow that connects your tools. Lubosi shows you how it works, walks you through it step by step, and you build it together in real time.

By the end of the session you have a working system, the knowledge to keep expanding it, and a clear picture of what to build next.`,
    href: '/services/blueprint-session',
    cta: 'Book the Blueprint Session',
    ideal: 'Founders and business owners who want to understand what AI can actually do in their business, not just read about it.',
  },
  {
    number: '02',
    title: 'Eco Launch',
    tagline: 'Lubosi comes to you. By the end of the day, your AI environment is live.',
    price: 'From £3,000',
    format: 'In Person',
    description: `This is the in-person package. Lubosi travels to your home, your office, or a private setting of your choice. You spend the full day together. By the time he leaves, your AI environment is set up, connected, and working.

This is not a consultation. This is an installation day.

Claude Code installed and configured. API keys connected across your stack. Your CRM and database plugged in. Memory layer live. At least one working system running before Lubosi leaves.`,
    href: '/services/eco-launch',
    cta: 'Apply for Eco Launch',
    ideal: 'Business owners who want a hands-on, done-with-you AI setup that actually works on day one.',
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
            Select the format that fits your situation. Both start with a conversation.
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
                  <p className="font-sans text-xs text-charcoal/40 uppercase tracking-widest mb-1">Investment</p>
                  <p className="font-serif text-navy text-xl mb-1">{s.price}</p>
                  <p className="font-sans text-xs text-charcoal/40 uppercase tracking-widest">{s.format}</p>
                </div>
              </div>
              <div>
                <span className="text-gold font-sans text-xs tracking-[0.3em] uppercase">{s.number}</span>
                <h2 className="font-serif text-navy text-4xl mt-3 mb-2">{s.title}</h2>
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
                  {s.cta}
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
            Not sure which is right for you?
          </h2>
          <p className="text-white/60 font-sans mb-10">
            Every engagement starts with a conversation. Apply and Lubosi will help you identify the right starting point.
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
