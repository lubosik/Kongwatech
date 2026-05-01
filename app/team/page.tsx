import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Meet the Team | Kongwa Tech',
  description: 'Meet the team behind Kongwa Tech. Led by Lubosi Kongwa, founder and lead consultant.',
}

export default function TeamPage() {
  return (
    <>
      <section className="bg-navy py-28 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <span className="text-gold font-sans text-xs tracking-[0.3em] uppercase">Meet the Team</span>
          <h1 className="font-serif text-white text-5xl lg:text-7xl mt-6 leading-tight">
            The people building your AI environment.
          </h1>
          <p className="text-white/60 font-sans text-lg mt-6 max-w-xl leading-relaxed">
            Kongwa Tech is a boutique practice led directly by its founder.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <article className="border border-gray-100 bg-white">
              <div className="relative aspect-[4/3] overflow-hidden bg-navy">
                <Image
                  src="/images/team/lubosi.png"
                  alt="Lubosi Kongwa"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
              <div className="p-8">
                <span className="text-gold font-sans text-xs tracking-[0.2em] uppercase">
                  Founder & Lead Consultant
                </span>
                <h2 className="font-serif text-navy text-3xl mt-3 mb-4">Lubosi Kongwa</h2>
                <p className="font-sans text-charcoal/70 text-sm leading-relaxed">
                  AI systems builder, strategist, and implementation partner for founders and operators.
                </p>
                <Link
                  href="/team/lubosi-kongwa"
                  className="inline-flex items-center gap-2 mt-8 text-sm font-sans text-navy hover:text-gold transition-colors"
                >
                  Read Full Profile
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}
