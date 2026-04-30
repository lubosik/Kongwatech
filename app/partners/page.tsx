import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Strategic Partners | Kongwa Tech',
  description: 'Kongwa Tech\'s network of strategic partners and collaborators across AI, media, and wellness.',
}

const partners = [
  {
    name: 'Velto',
    logo: '/images/partners/velto.jpeg',
    description: 'AI-powered business intelligence and growth platform helping companies move faster with data.',
    url: 'https://velto.ai',
  },
  {
    name: 'Rosen Relations',
    logo: '/images/partners/rosen-relations.png',
    description: 'Luxury brand visibility and media relations specialists serving clients across New York, DC, and Los Angeles.',
    url: 'https://rosenrelations.com',
  },
  {
    name: 'Vici Peptides',
    logo: '/images/partners/vici-peptides.png',
    description: 'Premium research peptides for elite performance, precision-manufactured and rigorously tested.',
    url: 'https://vicipeptides.com',
  },
]

export default function PartnersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-28 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <span className="text-gold font-sans text-xs tracking-[0.3em] uppercase">Strategic Partners</span>
          <h1 className="font-serif text-white text-5xl lg:text-7xl mt-6 leading-tight">
            Built on trusted partnerships.
          </h1>
          <p className="text-white/60 font-sans text-lg mt-6 max-w-xl leading-relaxed">
            Kongwa Tech works alongside a curated network of partners who share the same standard for quality, discretion, and results.
          </p>
        </div>
      </section>

      {/* Marquee banner */}
      <section className="bg-cream py-16 overflow-hidden border-y border-gray-200">
        <div className="marquee-wrapper">
          <div className="marquee-track">
            {[...partners, ...partners, ...partners].map((p, i) => (
              <div key={i} className="marquee-item">
                <Image
                  src={p.logo}
                  alt={p.name}
                  width={160}
                  height={80}
                  className="object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner cards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-gold font-sans text-xs tracking-[0.3em] uppercase">Our Network</span>
            <h2 className="font-serif text-navy text-4xl lg:text-5xl mt-4">
              Partners we trust.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partners.map(p => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-gray-200 p-10 flex flex-col items-center text-center hover:border-gold transition-colors"
              >
                <div className="h-24 flex items-center justify-center mb-8">
                  <Image
                    src={p.logo}
                    alt={p.name}
                    width={140}
                    height={80}
                    className="object-contain max-h-20 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-serif text-navy text-2xl mb-3">{p.name}</h3>
                <p className="text-sm text-charcoal/70 font-sans leading-relaxed">{p.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
