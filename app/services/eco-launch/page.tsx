import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Eco Launch | In-Person AI Ecosystem Launch',
  description:
    'Eco Launch is Kongwa Tech\'s in-person AI ecosystem launch engagement. Lubosi Kongwa comes into your environment and helps launch your first working AI systems.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where does Eco Launch take place?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Eco Launch takes place in person inside your business environment. Travel is included for locations within Southeast England. Other locations can be discussed during the application call.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is launched during the engagement?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The launch depends on the business, but the work typically includes AI workflow design, tool selection, automation mapping, initial system setup, and a practical launch plan for the operating environment.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is this a workshop?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Eco Launch is a hands-on implementation engagement. It includes strategic thinking, but the goal is to launch a working AI environment rather than simply discuss AI ideas.',
      },
    },
  ],
}

const timeline = [
  { time: '09:00', title: 'Environment Mapping', desc: 'Map the business ecosystem, tools, workflows, team responsibilities, and the points where AI can create real leverage.' },
  { time: '11:00', title: 'System Design', desc: 'Define the AI operating layer: what should be automated, what should be assisted, and what should remain human-led.' },
  { time: '13:00', title: 'Working Lunch', desc: 'Pressure-test the plan against commercial priorities, team capacity, and the real constraints inside the business.' },
  { time: '14:00', title: 'Launch Build', desc: 'Set up the first version of the workflows, prompts, tools, dashboards, or automations needed to make the ecosystem real.' },
  { time: '16:00', title: 'Handover', desc: 'Walk through what has been launched, what comes next, and how the system should be operated and improved.' },
]

export default function EcoLaunchPage() {
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
            Eco Launch
          </h1>
          <p className="text-white/60 font-sans text-lg mt-6 max-w-xl leading-relaxed">
            In-person launch of your AI environment, ecosystem, and first working systems.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-6 font-sans text-charcoal/80 text-base leading-relaxed">
              <p>
                Eco Launch is for businesses that do not just want to talk about AI. Lubosi comes into
                your environment, studies how the business actually works, and helps launch the AI ecosystem
                your team can begin using.
              </p>
              <p>
                The engagement is part strategy, part systems design, and part implementation. The output is
                a practical AI environment: clear use cases, selected tools, launch workflows, and the first
                working version of the operating layer.
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
                <p className="text-charcoal/50 font-sans text-sm mb-8">in-person launch engagement</p>
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
