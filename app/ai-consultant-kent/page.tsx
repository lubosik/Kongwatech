import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Consultant Kent | AI Strategy and Implementation, Southeast England',
  description:
    'Looking for an AI consultant in Kent? Lubosi Kongwa at Kongwa Tech provides AI strategy, automation, online advisory, and in-person Echo Launch services across Rochester, Medway, Maidstone, Tunbridge Wells, Canterbury and all of Kent.',
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Kongwa Tech',
  url: 'https://kongwatech.com/ai-consultant-kent',
  email: 'lubosi@kongwatech.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Rochester',
    addressRegion: 'Kent',
    addressCountry: 'GB',
  },
  areaServed: [
    'Rochester', 'Medway', 'Maidstone', 'Tunbridge Wells',
    'Canterbury', 'Folkestone', 'Chatham', 'Gravesend', 'Kent',
  ],
  description: 'AI consultant serving businesses across Kent. AI strategy, automation, online advisory, and Echo Launch services based in Rochester, Kent.',
  priceRange: '£6,000',
  serviceType: 'AI Consulting',
}

export default function AIConsultantKentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <section className="bg-navy py-28 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <span className="text-gold font-sans text-xs tracking-[0.3em] uppercase">Local Services</span>
          <h1 className="font-serif text-white text-5xl lg:text-7xl mt-6 leading-tight">
            AI Consultant Kent
          </h1>
          <p className="text-white/60 font-sans text-lg mt-6 max-w-xl leading-relaxed">
            Boutique AI consultancy based in Rochester. Serving businesses across Kent and Southeast England.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-navy">

            <p className="font-sans text-charcoal/80 text-base leading-relaxed mb-8">
              Kongwa Tech is Kent's dedicated boutique AI consultancy, founded by Lubosi Kongwa and based
              in Rochester, Medway. We provide AI strategy, implementation, and advisory services to
              businesses across Kent, from Gravesend and Chatham in the north to Tunbridge Wells
              and Folkestone in the south.
            </p>

            <h2 className="font-serif text-navy text-3xl mb-4">Why Kent Businesses Need an AI Consultant</h2>
            <p className="font-sans text-charcoal/80 text-base leading-relaxed mb-6">
              AI is no longer a technology reserved for large corporations with dedicated tech teams.
              In 2026, small and medium businesses across Kent are implementing AI tools that automate
              operations, generate leads, reduce admin burden, and create competitive advantages that
              were simply not available five years ago.
            </p>
            <p className="font-sans text-charcoal/80 text-base leading-relaxed mb-8">
              The challenge is knowing where to start, which tools to use, and how to implement them
              without wasting money on solutions that do not fit your operations. That is where an
              experienced AI consultant adds genuine value, not by selling software, but by helping
              you make better decisions.
            </p>

            <h2 className="font-serif text-navy text-3xl mb-4">Areas We Serve Across Kent</h2>
            <p className="font-sans text-charcoal/80 text-base leading-relaxed mb-4">
              Kongwa Tech provides in-person AI consulting services across all of Kent, including:
            </p>
            <ul className="grid grid-cols-2 gap-2 font-sans text-base text-charcoal/70 mb-8 list-none pl-0">
              {[
                'Rochester and Medway', 'Maidstone', 'Tunbridge Wells',
                'Canterbury', 'Folkestone', 'Dover', 'Chatham',
                'Gravesend', 'Sittingbourne', 'Faversham',
                'Ashford', 'Whitstable',
              ].map(area => (
                <li key={area} className="flex items-center gap-2">
                  <span className="text-gold">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="4" />
                    </svg>
                  </span>
                  {area}
                </li>
              ))}
            </ul>

            <h2 className="font-serif text-navy text-3xl mb-4">Industries Served in Kent</h2>
            <p className="font-sans text-charcoal/80 text-base leading-relaxed mb-6">
              Kent's economy spans manufacturing, property, professional services, retail, hospitality,
              agriculture, and logistics. We have experience advising businesses across all of these sectors
              on practical AI implementation:
            </p>
            <ul className="space-y-3 font-sans text-charcoal/80 text-base mb-8 list-none pl-0">
              {[
                { sector: 'Manufacturing', example: 'Quality control automation, predictive maintenance scheduling, and supplier communication workflows.' },
                { sector: 'Property and Estate Agents', example: 'AI-generated property descriptions, automated tenant communications, and lead qualification systems.' },
                { sector: 'Professional Services', example: 'Document drafting automation, client research, and reporting workflows for accountants, solicitors, and consultants.' },
                { sector: 'Retail', example: 'Inventory forecasting, AI-generated product content, and customer service automation.' },
                { sector: 'Hospitality', example: 'Booking management, AI-assisted marketing, and operational scheduling tools.' },
              ].map(({ sector, example }) => (
                <li key={sector} className="pb-3 border-b border-gray-100">
                  <span className="font-medium text-navy">{sector}:</span> {example}
                </li>
              ))}
            </ul>

            <h2 className="font-serif text-navy text-3xl mb-4">In-Person Services Across Kent</h2>
            <p className="font-sans text-charcoal/80 text-base leading-relaxed mb-6">
              Echo Launch is an in-person AI ecosystem launch where Lubosi comes to your business
              premises in Kent, maps your operating environment, and helps launch the first working
              version of your AI workflows and systems. This service is particularly popular with Kent
              business owners who want to move quickly and need implementation rather than another
              discovery process that takes months.
            </p>
            <p className="font-sans text-charcoal/80 text-base leading-relaxed mb-8">
              Travel to all Kent locations is included in the service fee.
            </p>

            <h2 className="font-serif text-navy text-3xl mb-4">How Much Does an AI Consultant Cost in Kent?</h2>
            <p className="font-sans text-charcoal/80 text-base leading-relaxed mb-6">
              Kongwa Tech is now focused around two offers: AI Foundations for online advisory, and
              Echo Launch for in-person implementation. Echo Launch is £6,000. AI Foundations is scoped
              after application based on the advisory depth your business needs.
            </p>
            <p className="font-sans text-charcoal/80 text-base leading-relaxed mb-8">
              Every engagement begins with a free 15-minute discovery call. Submit an application and
              Lubosi will confirm the right service for your situation before any commitment is made.
            </p>
          </div>

          <div className="mt-12 pt-12 border-t border-gray-200">
            <Link
              href="/apply"
              className="inline-block bg-gold text-white font-sans text-sm px-10 py-4 hover:bg-gold-dark transition-colors"
            >
              Apply for a Discovery Call
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
