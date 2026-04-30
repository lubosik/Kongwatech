import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Consultant Southeast England | AI Strategy and Implementation',
  description:
    'Kongwa Tech provides AI consulting services across Southeast England: Kent, Surrey, Sussex, Hampshire, and Greater London. Based in Rochester, Kent. Led by Lubosi Kongwa.',
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Kongwa Tech',
  url: 'https://kongwatech.com/ai-consultant-southeast-england',
  email: 'lubosi@kongwatech.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Rochester',
    addressRegion: 'Kent',
    addressCountry: 'GB',
  },
  areaServed: ['Kent', 'Surrey', 'Sussex', 'Hampshire', 'Essex', 'Southeast England', 'London'],
  description: 'AI consulting across Southeast England. AI strategy, automation, and Fractional CAiO services. Based in Rochester, Kent.',
}

export default function AIConsultantSoutheastPage() {
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
            AI Consultant Southeast England
          </h1>
          <p className="text-white/60 font-sans text-lg mt-6 max-w-xl leading-relaxed">
            Boutique AI consultancy serving businesses across Kent, Surrey, Sussex, and Greater London.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 space-y-8 font-sans text-charcoal/80 text-base leading-relaxed">
          <p>
            Kongwa Tech is Southeast England's specialist AI consultancy for small and medium businesses.
            Founded by Lubosi Kongwa and based in Rochester, Kent, the practice operates across the entire
            Southeast, from Essex and Kent in the east to Hampshire and Surrey in the west, and into
            Greater London for businesses that require in-person engagement.
          </p>

          <h2 className="font-serif text-navy text-3xl">Southeast England AI Adoption: The Current Picture</h2>
          <p>
            The Southeast of England is home to a significant concentration of SMEs, businesses with
            5-250 employees operating in sectors ranging from professional services and property to
            manufacturing, technology, and hospitality. These businesses are exactly where AI has the
            highest untapped ROI potential.
          </p>
          <p>
            Unlike large enterprise clients who have dedicated IT departments and AI project budgets,
            Southeast England SMEs typically lack internal AI expertise. They know AI matters. They
            read about it. But without a trusted, local advisor who understands both the technology
            and the business context, most of them are stuck at the experimentation stage.
          </p>
          <p>
            Kongwa Tech exists to close that gap, providing the same quality of strategic AI thinking
            that large businesses access through major consultancies, at a scale and price point designed
            for the Southeast's business community.
          </p>

          <h2 className="font-serif text-navy text-3xl">Counties and Areas Served</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              'Kent', 'Surrey', 'East Sussex', 'West Sussex',
              'Hampshire', 'Essex', 'Hertfordshire', 'Greater London',
              'Berkshire', 'Oxfordshire',
            ].map(county => (
              <div key={county} className="flex items-center gap-2 text-charcoal/70">
                <span className="text-gold">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="4" />
                  </svg>
                </span>
                {county}
              </div>
            ))}
          </div>

          <h2 className="font-serif text-navy text-3xl">Why Local Matters for AI Consulting</h2>
          <p>
            AI implementation is not purely technical. It requires an understanding of how businesses
            in specific regions operate, what their workforce looks like, what regulations they face,
            and what their competitive environment demands. A consultant who has never been to Kent
            cannot advise a Maidstone manufacturing business in the same way that someone rooted in
            the region can.
          </p>
          <p>
            Lubosi's base in Rochester gives Kongwa Tech a genuine local perspective. In-person
            engagements are available across the entire Southeast, bringing the Kongwa Session (the
            full-day AI intensive) directly to your premises wherever you are based.
          </p>

          <h2 className="font-serif text-navy text-3xl">Services Available Across Southeast England</h2>
          <p>
            All four Kongwa Tech services are available to Southeast England businesses. Remote
            advisory services (AI Foundations retainer, Fractional CAiO, The Network membership)
            are available nationally. In-person services (The Kongwa Session) are available across
            the full Southeast with travel included.
          </p>

          <div className="mt-8 pt-8 border-t border-gray-200">
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
