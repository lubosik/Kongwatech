import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Eco Launch | In-Person AI Environment Setup | Kongwa Tech',
  description:
    'Lubosi Kongwa comes to your business. Full day setup. Claude Code installed, APIs connected, working systems live. Boutique AI consultancy. From £3,000.',
  keywords: [
    'in-person AI consultant',
    'Claude Code setup',
    'AI environment setup',
    'AI consultant Kent',
    'AI automation setup UK',
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Eco Launch',
  provider: {
    '@type': 'Organization',
    name: 'Kongwa Tech',
    url: 'https://kongwatech.com',
  },
  description:
    'Lubosi Kongwa comes to your business for a full day AI environment setup. Claude Code installed, APIs connected, working systems live.',
  offers: {
    '@type': 'Offer',
    price: '3000',
    priceCurrency: 'GBP',
    priceSpecification: 'From',
  },
  serviceType: 'AI Consultancy',
  areaServed: 'GB',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where does the session take place?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Your home, your office, or a private setting you choose. Lubosi travels to you.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if I am not based in the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'International engagements are available. Travel costs are factored into the pricing and confirmed before you commit.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need any technical setup beforehand?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Lubosi handles the full setup from scratch. Arrive on the day with access to your accounts and tools.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the monthly retainer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'After Eco Launch, you have the option for Lubosi to continue building on your environment monthly. New automations, agents, and pipelines added every month. Pricing discussed at the end of the day.',
      },
    },
  ],
}

const timeline = [
  {
    time: '09:00',
    title: 'Environment Mapping',
    desc: 'Map the business ecosystem, tools, workflows, and the points where AI can create real impact.',
  },
  {
    time: '11:00',
    title: 'System Design',
    desc: 'Define the AI operating layer: what should be automated, what should be assisted, and what should remain human-led.',
  },
  {
    time: '13:00',
    title: 'Working Lunch',
    desc: 'Pressure-test the plan against commercial priorities, team capacity, and the real constraints inside the business.',
  },
  {
    time: '14:00',
    title: 'Launch Build',
    desc: 'Claude Code installed and configured. API keys connected. CRM and database plugged in. Memory layer set up. First live system running before the day ends.',
  },
  {
    time: '16:00',
    title: 'Handover',
    desc: 'Walk through what has been launched, what comes next, and how the system should be operated and improved.',
  },
]

const whatGetsBuilt = [
  'Claude Code installed and configured in your environment',
  'API keys connected across your stack',
  'Your CRM and database plugged in',
  'Memory and context layer set up so the system learns your business over time',
  'A working /explore command that maps your entire environment',
  'At least one live system running before Lubosi leaves',
]

export default function EcoLaunchPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="bg-navy py-28 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <span className="text-gold font-sans text-xs tracking-[0.3em] uppercase">Service 02</span>
          <h1 className="font-serif text-white text-5xl lg:text-7xl mt-6 leading-tight">
            Eco Launch
          </h1>
          <p className="text-white/60 font-sans text-lg mt-4 max-w-xl leading-relaxed">
            Lubosi comes to you. By the end of the day, your AI environment is live.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-10">
            <p className="font-serif text-gold text-4xl">From £3,000</p>
            <Link
              href="/apply"
              className="bg-gold text-white font-sans text-sm px-8 py-4 hover:bg-gold-dark transition-colors"
            >
              Apply for Eco Launch
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-6 font-sans text-charcoal/80 text-base leading-relaxed">
              <p>
                This is the in-person package. Lubosi travels to your home, your office, or a private setting of your choice. You spend the full day together. By the time he leaves, your AI environment is set up, connected, and working.
              </p>
              <p>
                This is not a consultation. This is an installation day.
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

              <h2 className="font-serif text-navy text-3xl mt-12 mb-6">What Gets Built</h2>
              <ul className="space-y-3">
                {whatGetsBuilt.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-charcoal/80">
                    <span className="text-gold mt-0.5">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-10 bg-cream p-8">
                <h3 className="font-serif text-navy text-2xl mb-4">After the Day</h3>
                <p className="text-charcoal/70 text-sm leading-relaxed">
                  You have the option to continue on a monthly retainer. Lubosi builds on top of what was installed. New automations, new agents, new pipelines, added every month. Because the environment is already set up and your data is already connected, every new build is faster and more powerful than the last.
                </p>
              </div>

              <div className="mt-6 border border-gray-200 p-6">
                <h3 className="font-sans text-navy font-medium mb-3 text-sm uppercase tracking-wider">Pricing note</h3>
                <p className="text-charcoal/70 text-sm leading-relaxed">
                  The base price starts at £3,000. Final pricing depends on your location and travel requirements. Lubosi will confirm the exact investment after your application. A portion of the fee covers travel and accommodation if applicable. You will always know the full cost before committing.
                </p>
              </div>
            </div>

            <div>
              <div className="bg-cream p-8 sticky top-24">
                <p className="font-sans text-xs text-charcoal/40 uppercase tracking-widest mb-2">Investment</p>
                <p className="font-serif text-navy text-3xl mb-1">From £3,000</p>
                <p className="text-charcoal/50 font-sans text-sm mb-2">in-person, full day</p>
                <p className="text-charcoal/40 font-sans text-xs mb-8">varies by location</p>
                <Link
                  href="/apply"
                  className="block bg-gold text-white font-sans text-sm px-6 py-4 text-center hover:bg-gold-dark transition-colors"
                >
                  Apply for Eco Launch
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

      {/* Bottom CTA */}
      <section className="py-28 bg-navy text-center">
        <div className="max-w-2xl mx-auto px-6">
          <span className="text-gold font-sans text-xs tracking-[0.3em] uppercase">Ready to launch?</span>
          <h2 className="font-serif text-white text-4xl lg:text-5xl mt-6 mb-4 leading-tight">
            Apply for Eco Launch
          </h2>
          <p className="text-white/60 font-sans text-base mb-10">
            In-person. Full day. Your AI environment built and running before Lubosi leaves.
          </p>
          <Link
            href="/apply"
            className="inline-block bg-gold text-white font-sans text-sm px-10 py-4 hover:bg-gold-dark transition-colors"
          >
            Apply for Eco Launch
          </Link>
        </div>
      </section>
    </>
  )
}
