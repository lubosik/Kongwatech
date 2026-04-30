import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Foundations | Monthly AI Advisory Retainer',
  description:
    'AI Foundations is a monthly AI advisory retainer for business owners. Lubosi Kongwa works with your team to define your AI strategy and implement the tools that matter. From £1,500/month.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does AI Foundations include each month?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Each month includes a strategy session with Lubosi, hands-on implementation support for the tools and workflows you are building, a written summary of progress and next steps, and access to Lubosi for questions between sessions. The exact focus each month is driven by your business priorities.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does the initial engagement take to show results?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most clients see meaningful operational improvements within the first 30-60 days. The first month is typically focused on strategy and identifying quick wins. Months two and three involve implementation of the highest-priority tools and workflows.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I pause or cancel the retainer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The retainer requires 30 days notice to cancel. There is no minimum term beyond the first month. Many clients continue for 6-12 months as their AI programme matures.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is this right for a business with fewer than 10 employees?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Some of the highest-impact AI implementations happen in small businesses where a single well-designed workflow can save 5-10 hours per week. The AI Foundations retainer is designed to be practical for businesses of any size.',
      },
    },
  ],
}

export default function AIFoundationsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="bg-navy py-28 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <span className="text-gold font-sans text-xs tracking-[0.3em] uppercase">Service 01</span>
          <h1 className="font-serif text-white text-5xl lg:text-7xl mt-6 leading-tight">
            AI Foundations
          </h1>
          <p className="text-white/60 font-sans text-lg mt-6 max-w-xl leading-relaxed">
            Monthly advisory retainer. From £1,500 per month.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-6 font-sans text-charcoal/80 text-base leading-relaxed">
              <p>
                AI Foundations is a monthly advisory retainer for business owners who are serious about AI but
                do not yet have the internal expertise to implement it correctly. Each month, Lubosi works
                directly with you and your team to make real, measurable progress on your AI programme.
              </p>
              <p>
                This is not a training course. It is not a workshop. It is ongoing, hands-on advisory work —
                the equivalent of having an experienced AI practitioner available to your business every month,
                without the cost of a full-time hire.
              </p>
              <h2 className="font-serif text-navy text-3xl mt-10 mb-4">What Is Included Each Month</h2>
              <ul className="space-y-4">
                {[
                  'A focused strategy session to review progress and set priorities for the month',
                  'Hands-on implementation support for AI tools, workflows, and automations',
                  'A written summary of work completed and recommended next steps',
                  'Access to Lubosi for questions between sessions via email',
                  'Honest, unbiased tool recommendations based on your specific operations',
                  'Review and critique of any AI work your team is doing independently',
                ].map(item => (
                  <li key={item} className="flex gap-3">
                    <span className="text-gold mt-1">
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
                AI Foundations is designed for business owners and founders who know AI is important,
                have started exploring it, and want proper strategic guidance to move from experimenting
                to operating. You do not need technical background. You need commitment to making it work.
              </p>
            </div>
            <div>
              <div className="bg-cream p-8 sticky top-24">
                <p className="font-sans text-xs text-charcoal/40 uppercase tracking-widest mb-2">Investment</p>
                <p className="font-serif text-navy text-3xl mb-1">From £1,500</p>
                <p className="text-charcoal/50 font-sans text-sm mb-8">per month</p>
                <Link
                  href="/apply"
                  className="block bg-gold text-white font-sans text-sm px-6 py-4 text-center hover:bg-gold-dark transition-colors mb-4"
                >
                  Apply Now
                </Link>
                <p className="text-xs text-charcoal/40 font-sans text-center">30 days notice to cancel</p>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="mt-24 border-t border-gray-200 pt-16">
            <h2 className="font-serif text-navy text-4xl mb-12">Frequently Asked Questions</h2>
            <div className="space-y-8">
              {faqSchema.mainEntity.map(q => (
                <div key={q.name} className="border-b border-gray-100 pb-8">
                  <h3 className="font-sans text-navy font-medium mb-3">{q.name}</h3>
                  <p className="font-sans text-charcoal/70 text-sm leading-relaxed">{q.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
