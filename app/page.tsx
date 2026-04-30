import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ServiceCard from '@/components/service-card'
import BlogCard from '@/components/blog-card'
import { fetchAllPosts } from '@/lib/blog-utils'

export const metadata: Metadata = {
  title: 'Kongwa Tech | Boutique AI Consultancy, Rochester Kent',
  description:
    'Kongwa Tech is a boutique AI consultancy. AI strategy, implementation, and in-person AI ecosystem launches. Based in Rochester, Kent.',
}

const services = [
  {
    number: '01',
    title: 'AI Foundations',
    description:
      'Online advisory sessions for founders and teams who need a practical AI operating layer: strategy, tools, workflows, and implementation priorities.',
    price: 'Online',
    href: '/services/ai-foundations',
  },
  {
    number: '02',
    title: 'Echo Launch',
    description:
      'An in-person product launch for your AI environment. Lubosi comes to your business, maps the ecosystem, and launches the first working systems with you.',
    price: '£6,000',
    href: '/services/echo-launch',
  },
]

const stats = [
  { value: 'SE England', label: 'Primary Market' },
  { value: '2', label: 'Core Offers' },
  { value: 'Online', label: 'AI Foundations' },
  { value: '48 hrs', label: 'Application Response' },
]

export default async function HomePage() {
  const posts = await fetchAllPosts()
  const featuredPosts = posts.slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className="min-h-[calc(100vh-4rem)] flex">
        <div className="flex-1 flex flex-col justify-center bg-navy px-8 lg:px-16 xl:px-24 py-24">
          <span className="text-gold font-sans text-xs tracking-[0.3em] uppercase mb-8">
            Boutique AI Consultancy
          </span>
          <h1 className="font-serif text-white text-5xl lg:text-6xl xl:text-7xl leading-tight mb-8 max-w-xl">
            AI Strategy for Ambitious Businesses.
          </h1>
          <p className="text-white/60 font-sans text-base mb-12 max-w-md leading-relaxed">
            Lubosi Kongwa. Rochester, Kent. Serving Southeast England and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/apply"
              className="bg-gold text-white font-sans text-sm px-8 py-4 hover:bg-gold-dark transition-colors text-center"
            >
              Apply to Work Together
            </Link>
            <Link
              href="/services"
              className="border border-white/40 text-white font-sans text-sm px-8 py-4 hover:border-white transition-colors text-center"
            >
              Explore Services
            </Link>
          </div>
        </div>
        <div className="hidden lg:block flex-1 relative">
          <Image
            src="/images/team/lubosi-profile.jpg"
            alt="Lubosi Kongwa, founder and lead consultant"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </section>

      {/* Stats */}
      <section className="bg-navy-dark py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-white/10">
            {stats.map(s => (
              <div key={s.label} className="text-center px-4">
                <p className="font-serif text-gold text-4xl lg:text-5xl mb-2">{s.value}</p>
                <p className="font-sans text-white/50 text-xs uppercase tracking-widest">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-gold font-sans text-xs tracking-[0.3em] uppercase">Services</span>
            <h2 className="font-serif text-navy text-4xl lg:text-5xl mt-4 mb-4">
              Two Ways to Work Together
            </h2>
            <p className="text-charcoal/60 font-sans text-base max-w-md mx-auto">
              Each engagement is tailored. Every client is selected.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map(s => (
              <ServiceCard key={s.number} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-gold font-sans text-xs tracking-[0.3em] uppercase">Meet the Team</span>
            <h2 className="font-serif text-navy text-4xl lg:text-5xl mt-4 mb-4">
              Led directly by Lubosi Kongwa.
            </h2>
            <p className="text-charcoal/60 font-sans text-base max-w-md mx-auto">
              A boutique practice with direct founder involvement on every engagement.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <article className="bg-white border border-gray-100">
              <div className="relative aspect-[4/3] overflow-hidden bg-navy">
              <Image
                src="/images/team/lubosi-profile.jpg"
                alt="Lubosi Kongwa"
                fill
                className="object-cover object-center"
              />
              </div>
              <div className="p-8">
                <span className="text-gold font-sans text-xs tracking-[0.2em] uppercase">Founder & Lead Consultant</span>
                <h3 className="font-serif text-navy text-3xl mt-3 mb-4">Lubosi Kongwa</h3>
                <p className="text-sm text-charcoal/70 font-sans leading-relaxed">
                  AI systems builder helping businesses design, launch, and operate practical AI environments.
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

      {/* Portfolio */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-gold font-sans text-xs tracking-[0.3em] uppercase">Selected Work</span>
            <h2 className="font-serif text-navy text-4xl lg:text-5xl mt-4 mb-4">
              Work That Ships.
            </h2>
            <p className="text-charcoal/60 font-sans text-base max-w-md mx-auto">
              AI systems built from the ground up. Real businesses. Real results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Velto AI Revenue Engine',
                desc: 'Go-to-market systems, growth marketing automation, outbound email campaigns, lead handling workflows, and ecosystem support for an AI enablement company serving high-ticket and luxury-market businesses.',
                tag: 'GTM Automation',
              },
              {
                name: 'LIBDR AI Research Platform',
                desc: 'Two full agentic systems for private equity and fundraising: sourcing, research, outreach automation, and structured deal intelligence for investor-facing teams.',
                tag: 'Fundraising AI',
              },
              {
                name: 'Vici Peptides Growth Stack',
                desc: 'A US growth stack covering ecommerce intelligence, lifecycle automation, campaign infrastructure, product positioning, and conversion optimisation.',
                tag: 'E-commerce AI',
              },
              {
                name: 'Recruitment Sourcing System',
                desc: 'Agentic recruitment infrastructure for sourcing candidates, qualifying profiles, enriching data, and automating personalised outreach at scale.',
                tag: 'Recruitment AI',
              },
            ].map(p => (
              <div key={p.name} className="bg-white border border-gray-100 p-8 flex flex-col">
                <span className="text-xs font-sans text-gold uppercase tracking-widest mb-4">{p.tag}</span>
                <h3 className="font-serif text-navy text-xl mb-3">{p.name}</h3>
                <p className="text-sm text-charcoal/70 font-sans leading-relaxed flex-1">{p.desc}</p>
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <span className="text-xs font-sans text-charcoal/30 uppercase tracking-wider">Confidential</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-gold font-sans text-xs tracking-[0.3em] uppercase">Kongwa Tech News</span>
              <h2 className="font-serif text-navy text-4xl lg:text-5xl mt-4 leading-tight">
                Insights from the frontier.
              </h2>
            </div>
            <Link
              href="/blog"
              className="text-sm font-sans text-navy border border-navy px-6 py-3 hover:bg-navy hover:text-white transition-colors whitespace-nowrap self-start md:self-auto"
            >
              View all articles
            </Link>
          </div>
          <p className="text-charcoal/60 font-sans text-base mb-12 max-w-lg">
            Weekly analysis on AI tools, strategy, and implementation for ambitious businesses.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {featuredPosts.map(post => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-gold font-sans text-xs tracking-[0.3em] uppercase">Client Testimonials</span>
            <h2 className="font-serif text-navy text-4xl lg:text-5xl mt-4 mb-4">
              Clients and collaborators.
            </h2>
            <p className="text-charcoal/60 font-sans text-base max-w-md mx-auto">
              Real people. Real projects. Real outcomes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: 'Lubosi turned a vague AI ambition into a working growth system with clear priorities, dashboards, and campaigns we could actually operate.',
                name: 'Growth founder',
              },
              {
                quote: 'The value was speed and clarity. We left with the system logic, the implementation path, and the confidence to launch.',
                name: 'Private equity operator',
              },
              {
                quote: 'He thinks in outcomes first, then builds the AI environment around the business. That changed how our team approached automation.',
                name: 'Recruitment partner',
              },
            ].map(item => (
              <figure key={item.name} className="bg-white border border-gray-100 p-8">
                <blockquote className="font-serif text-navy text-2xl leading-snug">
                  "{item.quote}"
                </blockquote>
                <figcaption className="mt-8 pt-4 border-t border-gray-100 text-xs font-sans text-charcoal/40 uppercase tracking-widest">
                  {item.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Free Resources */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-gold font-sans text-xs tracking-[0.3em] uppercase">Free Resources</span>
            <h2 className="font-serif text-navy text-4xl lg:text-5xl mt-4 mb-4">
              Practical AI intelligence.
            </h2>
            <p className="text-charcoal/60 font-sans text-base max-w-md mx-auto">
              Tools and frameworks you can use today, no strings attached.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'The AI Foundations Checklist',
                desc: 'A step-by-step checklist for business owners starting their AI journey. Identify where to start and what to skip.',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                title: 'The Kongwa Method',
                desc: 'How Lubosi assesses AI readiness and prioritises implementation across operations, sales, and product.',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                ),
              },
              {
                title: 'Weekly AI Briefing',
                desc: 'Curated insights on what matters in AI this week. Direct to your inbox. No noise, no hype.',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
              },
            ].map(r => (
              <a
                key={r.title}
                href="/apply"
                className="group border border-gray-100 p-8 hover:border-gold hover:shadow-sm transition-all duration-200 flex flex-col"
              >
                <div className="text-gold mb-5">{r.icon}</div>
                <h3 className="font-serif text-navy text-xl mb-3 group-hover:text-gold transition-colors">{r.title}</h3>
                <p className="text-sm text-charcoal/70 font-sans leading-relaxed">{r.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Apply CTA */}
      <section className="py-28 bg-navy text-center">
        <div className="max-w-2xl mx-auto px-6">
          <span className="text-gold font-sans text-xs tracking-[0.3em] uppercase">Work With Lubosi</span>
          <h2 className="font-serif text-white text-4xl lg:text-5xl mt-6 mb-6 leading-tight">
            Applications are reviewed personally.
          </h2>
          <p className="text-white/60 font-sans text-base mb-10 leading-relaxed">
            Every engagement starts with a 15-minute discovery call. Submit an application
            and Lubosi will respond within 48 hours.
          </p>
          <Link
            href="/apply"
            className="inline-block bg-gold text-white font-sans text-sm px-10 py-4 hover:bg-gold-dark transition-colors"
          >
            Apply to Work Together
          </Link>
        </div>
      </section>
    </>
  )
}
