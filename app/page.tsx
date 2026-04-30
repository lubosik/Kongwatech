import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ServiceCard from '@/components/service-card'
import BlogCard from '@/components/blog-card'
import { fetchAllPosts } from '@/lib/blog-utils'

export const metadata: Metadata = {
  title: 'Kongwa Tech | Boutique AI Consultancy, Rochester Kent',
  description:
    'Kongwa Tech is SE England\'s boutique AI consultancy. AI strategy, Claude Code implementation, and Fractional CAiO services. Based in Rochester, Kent.',
}

const services = [
  {
    number: '01',
    title: 'AI Foundations',
    description:
      'Monthly advisory retainer. Lubosi works with your team to define your AI strategy, identify quick wins, and implement foundational tools.',
    price: 'From £1,500 / month',
    href: '/services/ai-foundations',
  },
  {
    number: '02',
    title: 'The Kongwa Session',
    description:
      'A full-day intensive. Lubosi comes to you, audits your operations, and delivers a bespoke 90-day AI implementation roadmap.',
    price: '£6,000',
    href: '/services/the-kongwa-session',
  },
  {
    number: '03',
    title: 'Fractional CAiO',
    description:
      'Part-time Chief AI Officer. Lubosi joins your leadership team on a retainer basis, driving your AI programme from the inside.',
    price: 'From £5,000 / month',
    href: '/services/fractional-caio',
  },
  {
    number: '04',
    title: 'The Network',
    description:
      'Monthly briefings and peer access for executives and business owners who need to stay ahead of AI without sifting through the noise.',
    price: '£500 / year',
    href: '/services/the-network',
  },
]

const stats = [
  { value: 'SE England', label: 'Primary Market' },
  { value: '£1,500', label: 'Monthly from' },
  { value: '4', label: 'Service Tiers' },
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
            AI Strategy for Ambitious British Businesses.
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
            src="/images/lubosi-hero.jpg"
            alt="Lubosi Kongwa, AI Consultant and Fractional CAiO"
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
              Four Ways to Work Together
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

      {/* About Snippet */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] lg:h-[600px] overflow-hidden">
              <Image
                src="/images/lubosi-hero.jpg"
                alt="Lubosi Kongwa"
                fill
                className="object-cover object-top"
              />
            </div>
            <div>
              <span className="text-gold font-sans text-xs tracking-[0.3em] uppercase">About Lubosi</span>
              <h2 className="font-serif text-navy text-4xl lg:text-5xl mt-4 mb-8 leading-tight">
                Rochester's First Dedicated AI Consultant.
              </h2>
              <div className="space-y-5 text-charcoal/80 font-sans text-base leading-relaxed">
                <p>
                  Lubosi Kongwa is an AI consultant and Fractional Chief AI Officer based in Rochester, Kent.
                  He works with business owners across Southeast England who want to implement AI properly —
                  not as a novelty, but as infrastructure.
                </p>
                <p>
                  Before founding Kongwa Tech, Lubosi spent years building AI-powered systems for businesses
                  across sectors. His clients range from local Kent SMEs to growing companies across the South East.
                </p>
                <p>
                  Kongwa Tech operates as a boutique practice. Client numbers are deliberately limited.
                  The work is personal.
                </p>
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 mt-8 text-sm font-sans text-navy hover:text-gold transition-colors"
              >
                Read Lubosi's full story
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
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
            Weekly analysis on AI tools, strategy, and implementation for British businesses.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {featuredPosts.map(post => (
              <BlogCard key={post.id} post={post} />
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
