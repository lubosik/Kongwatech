import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'The Kongwa Intelligence Network | AI Membership for Executives',
  description:
    'The Kongwa Intelligence Network delivers monthly AI briefings and peer access for executives and business owners. £500/year.',
}

export default function TheNetworkPage() {
  return (
    <>
      <section className="bg-navy py-28 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <span className="text-gold font-sans text-xs tracking-[0.3em] uppercase">Service 04</span>
          <h1 className="font-serif text-white text-5xl lg:text-7xl mt-6 leading-tight">
            The Kongwa Intelligence Network
          </h1>
          <p className="text-white/60 font-sans text-lg mt-6 max-w-xl leading-relaxed">
            Stay ahead without the noise. £500 per year.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-6 font-sans text-charcoal/80 text-base leading-relaxed">
              <p>
                The Kongwa Intelligence Network is a curated membership for executives and business owners
                who need to understand AI's impact on their industry without spending hours sifting through
                hype, speculation, and content written by people who have never actually implemented anything.
              </p>
              <p>
                Every month, Lubosi distills what actually matters in AI into a briefing written for
                business leaders, not engineers. No jargon. No breathless hype. Practical signal.
              </p>

              <h2 className="font-serif text-navy text-3xl mt-10 mb-4">What Members Receive</h2>
              <ul className="space-y-4">
                {[
                  'Monthly AI intelligence briefing — written by Lubosi, focused on business implications',
                  'Tool and platform recommendations based on real usage, not vendor relationships',
                  'Access to a private peer community of business owners at similar stages of AI adoption',
                  'Priority access to Lubosi for questions via the community channel',
                  'Early access to new Kongwa Tech content and resources',
                  'Invitations to members-only events and roundtables',
                ].map(item => (
                  <li key={item} className="flex gap-3">
                    <span className="text-gold mt-1 shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h2 className="font-serif text-navy text-3xl mt-10 mb-4">Who It Is For</h2>
              <p>
                The Network is for executives and business owners who want to be informed without being
                overwhelmed. You are not trying to become an AI expert. You are trying to make better
                decisions about AI — for your business, your team, and your sector.
              </p>
              <p>
                At £500 per year, it is deliberately priced to be accessible. The value is in the quality
                of the signal, not the volume of content.
              </p>
            </div>

            <div>
              <div className="bg-cream p-8 sticky top-24">
                <p className="font-sans text-xs text-charcoal/40 uppercase tracking-widest mb-2">Investment</p>
                <p className="font-serif text-navy text-3xl mb-1">£500</p>
                <p className="text-charcoal/50 font-sans text-sm mb-8">per year</p>
                <Link
                  href="/apply"
                  className="block bg-gold text-white font-sans text-sm px-6 py-4 text-center hover:bg-gold-dark transition-colors"
                >
                  Apply to Join
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-navy text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-serif text-white text-4xl mb-6">Ready to apply?</h2>
          <p className="text-white/60 font-sans mb-10">
            Submit an application and Lubosi will review it personally within 48 hours.
          </p>
          <Link href="/apply" className="inline-block bg-gold text-white font-sans text-sm px-10 py-4 hover:bg-gold-dark transition-colors">
            Apply to Join the Network
          </Link>
        </div>
      </section>
    </>
  )
}
