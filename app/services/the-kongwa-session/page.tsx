import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'The Kongwa Session | Full-Day AI Strategy Intensive',
  description:
    'The Kongwa Session is a full-day AI intensive where Lubosi Kongwa comes to your business and delivers a bespoke 90-day AI implementation roadmap. £6,000.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where does The Kongwa Session take place?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Lubosi comes to your business premises. The session takes place in your environment, which allows him to observe your actual operations rather than working from a description. Travel is included for locations within Southeast England (Kent, Surrey, Sussex, Greater London). Longer distances are available at an additional travel cost.',
      },
    },
    {
      '@type': 'Question',
      name: 'What do I receive at the end of the day?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A written 90-day AI implementation roadmap specific to your business. This includes a prioritised list of AI tools and workflows to implement, estimated time and cost for each, a suggested implementation sequence, and clear success metrics for each item. The document is written to be actionable by you or a member of your team, not just advisory.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to prepare anything in advance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Lubosi will send a pre-session questionnaire to be completed in the week before the day. It covers your current tools, your team structure, your biggest operational frustrations, and any AI experiments you have already tried. The more honestly this is completed, the more valuable the session will be.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the optional monthly retainer for?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The optional £2,500/month retainer gives you ongoing support as you implement the roadmap. Lubosi stays involved, answers questions as they arise, reviews work in progress, and adjusts the plan as your business evolves. Many clients find this valuable during the first 90 days of implementation.',
      },
    },
  ],
}

const timeline = [
  { time: '09:00', title: 'Discovery', desc: 'Operations audit. How does work actually move through your business? Where is time lost? Where are decisions made without sufficient information?' },
  { time: '11:00', title: 'Opportunity Mapping', desc: 'Identifying the highest-value AI opportunities specific to your business. Not generic AI use cases — your specific operations, your specific problems.' },
  { time: '13:00', title: 'Working Lunch', desc: 'Informal discussion. This is where many of the best insights emerge.' },
  { time: '14:00', title: 'Tool Selection and Planning', desc: 'Selecting the exact tools for each opportunity. Building the implementation sequence. Addressing technical and organisational obstacles.' },
  { time: '16:00', title: 'Roadmap Delivery', desc: 'The completed 90-day AI roadmap is reviewed together. Questions answered. Next steps clear.' },
]

export default function KongwaSessionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="bg-navy py-28 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <span className="text-gold font-sans text-xs tracking-[0.3em] uppercase">Service 02</span>
          <h1 className="font-serif text-white text-5xl lg:text-7xl mt-6 leading-tight">
            The Kongwa Session
          </h1>
          <p className="text-white/60 font-sans text-lg mt-6 max-w-xl leading-relaxed">
            One day. One roadmap. Immediate clarity. £6,000.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-6 font-sans text-charcoal/80 text-base leading-relaxed">
              <p>
                The Kongwa Session is a full-day engagement where Lubosi comes to your business, spends the
                entire day with you, and delivers a complete 90-day AI implementation roadmap by end of day.
              </p>
              <p>
                It is designed for founders, MDs, and senior leaders who want definitive clarity on what AI
                can do for their specific business — and a concrete plan to act on — without months of
                discovery and preliminary work.
              </p>

              <h2 className="font-serif text-navy text-3xl mt-10 mb-8">How the Day Runs</h2>
              <div className="space-y-8">
                {timeline.map(item => (
                  <div key={item.time} className="flex gap-6">
                    <div className="w-16 shrink-0">
                      <span className="text-gold font-sans text-sm font-medium">{item.time}</span>
                    </div>
                    <div>
                      <p className="font-sans text-navy font-medium mb-1">{item.title}</p>
                      <p className="text-charcoal/60 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-cream p-8 sticky top-24">
                <p className="font-sans text-xs text-charcoal/40 uppercase tracking-widest mb-2">Investment</p>
                <p className="font-serif text-navy text-3xl mb-1">£6,000</p>
                <p className="text-charcoal/50 font-sans text-sm mb-2">full day</p>
                <p className="text-charcoal/40 font-sans text-xs mb-8">+ optional £2,500/month retainer</p>
                <Link
                  href="/apply"
                  className="block bg-gold text-white font-sans text-sm px-6 py-4 text-center hover:bg-gold-dark transition-colors"
                >
                  Apply Now
                </Link>
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
