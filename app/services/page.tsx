import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Services | AI Consulting, Fractional CAiO, Southeast England',
  description:
    'Four ways to work with Kongwa Tech. AI Foundations retainer, The Kongwa Session intensive, Fractional CAiO advisory, and The Network membership.',
}

const services = [
  {
    number: '01',
    title: 'AI Foundations',
    tagline: 'Build the foundation your business needs to operate with AI.',
    description: `AI Foundations is a monthly advisory retainer designed for business owners who are serious about AI but do not yet have the internal expertise to implement it properly. Lubosi works directly with you and your team to define your AI strategy, identify the highest-impact use cases for your specific operations, and implement the foundational tools and workflows that will give you lasting capability.

This is not a training course or a workshop. It is ongoing, hands-on advisory support, the equivalent of having an experienced AI practitioner available to your business every month.`,
    price: 'From £1,500 / month',
    href: '/services/ai-foundations',
    ideal: 'Business owners who want to implement AI seriously and need expert guidance throughout.',
  },
  {
    number: '02',
    title: 'The Kongwa Session',
    tagline: 'One day. One expert. A 90-day roadmap you can act on immediately.',
    description: `The Kongwa Session is a full-day engagement where Lubosi comes to your business, spends the day with you and your team, and delivers a bespoke 90-day AI implementation roadmap by the end of the day.

The morning is spent in discovery: mapping your operations, identifying where time and money are being lost, understanding your current tools and processes. The afternoon is spent building. Lubosi walks you through exactly what AI can do for your specific business, which tools to use, how to implement them, and what to expect.

You leave with a written document: a clear, prioritised, actionable 90-day plan. Not a slide deck. A plan you can execute.`,
    price: '£6,000 (+ optional £2,500 / month retainer)',
    href: '/services/the-kongwa-session',
    ideal: 'Founders and MDs who want clarity on AI fast, without months of discovery.',
  },
  {
    number: '03',
    title: 'Fractional CAiO',
    tagline: 'C-suite AI leadership without the full-time salary.',
    description: `The Fractional Chief AI Officer service positions Lubosi as a part-time member of your leadership team. He attends relevant meetings, participates in strategic planning, evaluates AI investments, oversees implementation projects, and ensures your business is building AI capability correctly over time.

This is the right engagement for businesses that are past the "exploring AI" stage and are actively building AI into their operations. The work is continuous, strategic, and deeply integrated. Not periodic advisory calls.`,
    price: 'From £5,000 / month',
    href: '/services/fractional-caio',
    ideal: 'Growing businesses that need ongoing AI leadership but are not yet ready for a full-time hire.',
  },
  {
    number: '04',
    title: 'The Network',
    tagline: 'Stay ahead without the noise.',
    description: `The Kongwa Intelligence Network is a curated membership for executives and business owners who want to understand AI's impact on their industry without sifting through an endless stream of hype and speculation.

Members receive monthly briefings on the AI developments that actually matter for business, written in plain English, with practical implications and specific tool recommendations. The Network also includes access to a private community of peers who are at similar stages of AI adoption, and priority access to Lubosi for questions and guidance.`,
    price: '£500 / year',
    href: '/services/the-network',
    ideal: 'Executives and business owners who want curated AI intelligence delivered monthly.',
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
            Four Ways to Work Together
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
