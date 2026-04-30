import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Fractional Chief AI Officer | Fractional CAiO UK',
  description:
    'Lubosi Kongwa offers Fractional Chief AI Officer (CAiO) services for UK businesses. Part-time AI leadership without the full-time salary. From £5,000/month.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does a Fractional Chief AI Officer do?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A Fractional Chief AI Officer (CAiO) is an experienced AI strategist who works with a business on a part-time or retainer basis, providing the AI leadership and implementation oversight that a full-time CAiO would deliver at a fraction of the cost. They define the AI strategy, evaluate and select tools, oversee implementation, train teams, and ensure AI investments produce measurable returns.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much time does Lubosi commit each month as Fractional CAiO?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The standard engagement involves 4-6 days of committed time per month, distributed across the month rather than in a single block. This includes strategic planning, team sessions, implementation oversight, vendor evaluation, and board reporting on AI progress.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is a Fractional CAiO different from an AI consultant?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An AI consultant typically delivers a project or report and steps back. A Fractional CAiO is embedded in your leadership team on an ongoing basis. They are accountable for outcomes, not just recommendations. They attend leadership meetings, manage vendor relationships, oversee your team\'s AI work, and take responsibility for your AI programme\'s success.',
      },
    },
    {
      '@type': 'Question',
      name: 'What size business needs a Fractional CAiO?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Typically businesses with 10-100 employees that are actively building AI into their operations and need dedicated strategic leadership to do it correctly. If you are still in the exploration phase, the AI Foundations retainer or The Kongwa Session is likely the better starting point.',
      },
    },
  ],
}

export default function FractionalCAiOPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="bg-navy py-28 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <span className="text-gold font-sans text-xs tracking-[0.3em] uppercase">Service 03</span>
          <h1 className="font-serif text-white text-5xl lg:text-7xl mt-6 leading-tight">
            Fractional Chief AI Officer
          </h1>
          <p className="text-white/60 font-sans text-lg mt-6 max-w-xl leading-relaxed">
            C-suite AI leadership. Without the full-time cost. From £5,000 per month.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-6 font-sans text-charcoal/80 text-base leading-relaxed">
              <p>
                The Fractional Chief AI Officer model gives growing businesses access to senior AI leadership
                without the cost or commitment of a full-time executive hire. Lubosi joins your leadership
                team on a retainer basis, attending relevant meetings, owning your AI strategy, and driving
                your AI programme from the inside.
              </p>
              <p>
                This is not advisory from the outside. It is leadership from within. Lubosi becomes
                accountable for your AI programme's outcomes, not just for the recommendations he makes.
              </p>

              <h2 className="font-serif text-navy text-3xl mt-10 mb-4">What This Looks Like in Practice</h2>
              <ul className="space-y-4">
                {[
                  'Monthly strategic planning sessions with your leadership team',
                  'Evaluation and selection of AI tools and vendors on your behalf',
                  'Oversight of internal AI implementation projects',
                  'Training and upskilling sessions for your team',
                  'Board-level reporting on AI programme progress and ROI',
                  'Representation in client and partner conversations where AI is relevant',
                  'First right of refusal on all AI hiring decisions',
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

              <h2 className="font-serif text-navy text-3xl mt-10 mb-4">Who This Is For</h2>
              <p>
                The Fractional CAiO engagement is designed for businesses with 10-100 employees that are past
                the AI exploration phase and are actively building AI into their operations. You know AI
                matters. You are making real investments. You need someone with genuine expertise to lead
                the programme and ensure those investments deliver returns.
              </p>
            </div>

            <div>
              <div className="bg-cream p-8 sticky top-24">
                <p className="font-sans text-xs text-charcoal/40 uppercase tracking-widest mb-2">Investment</p>
                <p className="font-serif text-navy text-3xl mb-1">From £5,000</p>
                <p className="text-charcoal/50 font-sans text-sm mb-8">per month</p>
                <Link
                  href="/apply"
                  className="block bg-gold text-white font-sans text-sm px-6 py-4 text-center hover:bg-gold-dark transition-colors mb-4"
                >
                  Apply Now
                </Link>
                <p className="text-xs text-charcoal/40 font-sans text-center">3-month minimum commitment</p>
              </div>
            </div>
          </div>

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
