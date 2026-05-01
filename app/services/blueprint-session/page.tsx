import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'The Blueprint Session | Kongwa Tech | AI Systems for Business Owners',
  description:
    'A live two to three hour session with Lubosi Kongwa. Build a working AI system for your business. Lead generators, content engines, ad agents. £997.',
  keywords: [
    'AI consultant session',
    'AI automation for business owners',
    'build AI system',
    'vibe coding session',
    'Claude Code setup',
    'AI workflow UK',
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'The Blueprint Session',
  provider: {
    '@type': 'Organization',
    name: 'Kongwa Tech',
    url: 'https://kongwatech.com',
  },
  description:
    'A live two to three hour working session with Lubosi Kongwa. Build a real AI system for your business in real time.',
  offers: {
    '@type': 'Offer',
    price: '997',
    priceCurrency: 'GBP',
  },
  serviceType: 'AI Consultancy',
  areaServed: 'GB',
}

const exampleFlows = [
  'Build a lead generation system from scratch',
  'Set up a blog and content engine that posts automatically every week',
  'Connect that to LinkedIn posts and Instagram carousels',
  'Build a system that reads your Google Analytics and Facebook Ads and tells you what to fix',
  'Create an agent that improves your ad copy over time by learning from your data',
  'Set up an SEO content management system using Strapi with an AI agent writing and publishing weekly',
  'Automate a TikTok video pipeline from a single content input',
]

const faqs = [
  {
    q: 'Do I need to know how to code?',
    a: 'No. Lubosi walks through everything live. You follow along, take screenshots, and ask questions in real time. The session is designed for business owners, not developers.',
  },
  {
    q: 'What do I need to prepare before the session?',
    a: 'Nothing complex. Have your business tools and accounts accessible. Lubosi will guide you through the rest.',
  },
  {
    q: 'Can I record the session?',
    a: 'Yes. You are encouraged to record it for your own reference.',
  },
  {
    q: 'What happens after the session?',
    a: 'You leave with a working system and the knowledge to keep building. If you want continued support, the Eco Launch or a monthly arrangement can be discussed.',
  },
]

export default function BlueprintSessionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero */}
      <section className="bg-navy py-28 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <span className="text-gold font-sans text-xs tracking-[0.3em] uppercase">Service 01</span>
          <h1 className="font-serif text-white text-5xl lg:text-7xl mt-6 leading-tight">
            The Blueprint Session
          </h1>
          <p className="text-white/60 font-sans text-lg mt-4 max-w-xl leading-relaxed">
            Two hours. A working system. Yours to keep building.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-10">
            <p className="font-serif text-gold text-4xl">£997</p>
            <Link
              href="/apply"
              className="bg-gold text-white font-sans text-sm px-8 py-4 hover:bg-gold-dark transition-colors"
            >
              Book the Blueprint Session
            </Link>
          </div>
          <p className="text-white/30 font-sans text-xs mt-6 uppercase tracking-widest">
            Limited to 4 sessions per month. Spots fill quickly.
          </p>
        </div>
      </section>

      {/* What it is */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-6 font-sans text-charcoal/80 text-base leading-relaxed">
              <span className="text-gold font-sans text-xs tracking-[0.3em] uppercase">What it is</span>
              <p>
                This is a live, hands-on working session with Lubosi. Not a course. Not a recording. A real two to three hour session where you sit alongside him and build something that works before the call ends.
              </p>
              <p>
                You pick a starting point: a lead generator, an SEO content machine, an automated social media pipeline, an ads intelligence system, or a workflow that connects your tools. Lubosi shows you how it works, walks you through it step by step, and you build it together in real time.
              </p>
              <p>
                By the end of the session you have a working system, the knowledge to keep expanding it, and a clear picture of what to build next.
              </p>

              <div className="pt-4">
                <p className="font-sans text-xs text-charcoal/40 uppercase tracking-widest mb-2">Format</p>
                <p className="text-charcoal/70">Online, screenshare. You take notes, screenshots, follow along. Lubosi talks you through every step. No assumed technical knowledge needed.</p>
              </div>

              <div>
                <p className="font-sans text-xs text-charcoal/40 uppercase tracking-widest mb-2">Who it is for</p>
                <p className="text-charcoal/70">Founders and business owners who want to understand what AI can actually do in their business, not just read about it. People who are ready to see it live and leave with something real.</p>
              </div>
            </div>

            <div>
              <div className="bg-cream p-8 sticky top-24">
                <p className="font-sans text-xs text-charcoal/40 uppercase tracking-widest mb-2">Investment</p>
                <p className="font-serif text-navy text-3xl mb-1">£997</p>
                <p className="text-charcoal/50 font-sans text-sm mb-8">per session, online</p>
                <Link
                  href="/apply"
                  className="block bg-gold text-white font-sans text-sm px-6 py-4 text-center hover:bg-gold-dark transition-colors"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Example session flows */}
      <section className="py-24 bg-cream">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <span className="text-gold font-sans text-xs tracking-[0.3em] uppercase">Example Sessions</span>
          <h2 className="font-serif text-navy text-4xl lg:text-5xl mt-4 mb-12">
            What we build together.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {exampleFlows.map((flow, i) => (
              <div key={i} className="bg-white border border-gray-100 p-6 flex items-start gap-4">
                <span className="text-gold font-sans text-sm font-medium shrink-0 w-6">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="font-sans text-charcoal/80 text-sm leading-relaxed">{flow}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <span className="text-gold font-sans text-xs tracking-[0.3em] uppercase">What clients say</span>
          <h2 className="font-serif text-navy text-4xl mt-4 mb-12">
            From the people who have done it.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                quote: 'Lubosi turned a vague AI ambition into a working growth system with clear priorities, dashboards, and campaigns we could actually operate.',
                name: 'Growth founder',
              },
              {
                quote: 'The value was speed and clarity. We left with the system logic, the implementation path, and the confidence to launch.',
                name: 'Private equity operator',
              },
            ].map(item => (
              <figure key={item.name} className="bg-cream border border-gray-100 p-8">
                <div className="mb-5 flex gap-1 text-gold" aria-label="5 out of 5 star review">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span key={index} aria-hidden="true" className="text-lg leading-none">★</span>
                  ))}
                </div>
                <blockquote className="font-serif text-navy text-2xl leading-snug">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-8 pt-4 border-t border-gray-100 text-xs font-sans text-charcoal/40 uppercase tracking-widest">
                  {item.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-cream">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <span className="text-gold font-sans text-xs tracking-[0.3em] uppercase">Questions</span>
          <h2 className="font-serif text-navy text-4xl mt-4 mb-12">Frequently asked.</h2>
          <div className="space-y-8">
            {faqs.map(faq => (
              <div key={faq.q} className="border-b border-gray-200 pb-8">
                <h3 className="font-sans text-navy font-medium mb-3">{faq.q}</h3>
                <p className="font-sans text-charcoal/70 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-28 bg-navy text-center">
        <div className="max-w-2xl mx-auto px-6">
          <span className="text-gold font-sans text-xs tracking-[0.3em] uppercase">Ready to build?</span>
          <h2 className="font-serif text-white text-4xl lg:text-5xl mt-6 mb-4 leading-tight">
            Book the Blueprint Session
          </h2>
          <p className="text-white/60 font-sans text-base mb-2">£997. Online. One session. A working system.</p>
          <p className="text-white/30 font-sans text-xs mb-10 uppercase tracking-widest">4 sessions available per month</p>
          <Link
            href="/apply"
            className="inline-block bg-gold text-white font-sans text-sm px-10 py-4 hover:bg-gold-dark transition-colors"
          >
            Book the Blueprint Session — £997
          </Link>
        </div>
      </section>
    </>
  )
}
