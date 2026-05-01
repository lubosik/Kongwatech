import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ServiceCard from '@/components/service-card'
import BlogCard from '@/components/blog-card'
import { fetchAllPosts } from '@/lib/blog-utils'

export const metadata: Metadata = {
  title: 'Kongwa Tech | Boutique AI Consultancy | Rochester, Kent',
  description:
    'Hands-on AI systems for ambitious business owners. The Blueprint Session from £997 online. Eco Launch in-person from £3,000. Book or apply today.',
}

const services = [
  {
    number: '01',
    title: 'The Blueprint Session',
    description:
      'A live two to three hour working session where you build a real AI system alongside Lubosi. Lead generators, content engines, ad intelligence agents, social pipelines. You leave with something working.',
    price: '£997',
    format: 'Online',
    href: '/services/blueprint-session',
    cta: 'Book Now',
  },
  {
    number: '02',
    title: 'Eco Launch',
    description:
      'Lubosi comes to you. Full day on site. Claude Code installed, APIs connected, CRM plugged in, memory layer live. Your AI environment built from the ground up, in one day.',
    price: 'From £3,000',
    format: 'In Person',
    href: '/services/eco-launch',
    cta: 'Apply Now',
  },
]

const stats = [
  { value: '2 Packages', label: 'Ways to Work Together' },
  { value: '£997', label: 'Blueprint Session' },
  { value: '1 Day', label: 'Eco Launch Delivery' },
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
            Your AI environment, built and running. In one session.
          </h1>
          <p className="text-white/60 font-sans text-base mb-12 max-w-md leading-relaxed">
            Lubosi Kongwa. Rochester, Kent. Helping ambitious business owners build practical AI systems that actually work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/services/blueprint-session"
              className="bg-gold text-white font-sans text-sm px-8 py-4 hover:bg-gold-dark transition-colors text-center"
            >
              Book the Blueprint Session
            </Link>
            <Link
              href="/services/eco-launch"
              className="border border-white/40 text-white font-sans text-sm px-8 py-4 hover:border-white transition-colors text-center"
            >
              Apply for Eco Launch
            </Link>
          </div>
        </div>
        <div className="hidden lg:block flex-1 relative">
          <Image
            src="/images/team/lubosi.png"
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
                src="/images/team/lubosi.png"
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
                <div className="mb-5 flex gap-1 text-gold" aria-label="5 out of 5 star review">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span key={index} aria-hidden="true" className="text-lg leading-none">
                      ★
                    </span>
                  ))}
                </div>
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
              Frameworks, playbooks, and systems. Free on Notion. No strings attached.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                emoji: '🎬',
                title: 'Viral TikTok Clip Formula',
                desc: 'The exact framework I use to identify, cut, and position clips for maximum views.',
                cta: 'Open Formula',
                href: 'https://www.notion.so/Lubosi-s-Personal-Viral-Clip-Identification-Formula-3304cf7f59e680af9d0af431469a9477?source=copy_link',
              },
              {
                emoji: '🔍',
                title: 'SEO Strategy Playbook',
                desc: 'How I generated 130K impressions across 3 sites in months. Site structure, content, and indexing.',
                cta: 'Open Strategy',
                href: 'https://www.notion.so/Lubosi-s-SEO-Content-Strategy-3304cf7f59e680aebd55c6d2ccc35700?source=copy_link',
              },
              {
                emoji: '🤖',
                title: 'Prompt Engineering Guide',
                desc: 'My personal prompt system for building AI agents that actually work in production.',
                cta: 'Open Playbook',
                href: 'https://www.notion.so/The-Prompt-Engineering-Playbook-2216d05e192c8064b3a5fa3d79a8fd1c?source=copy_link',
              },
              {
                emoji: '🖼️',
                title: 'Hyper-Realistic AI Image Guide',
                desc: 'My complete system for generating photorealistic AI images. Models, prompts, settings, and workflows.',
                cta: 'Open Guide',
                href: 'https://www.notion.so/COMPLETE-GUIDE-GENERATING-HYPER-REALISTIC-AI-IMAGES-2fd4cf7f59e680f7ba33c5d130dc951a?source=copy_link',
              },
              {
                emoji: '🎥',
                title: 'Hyper-Realistic AI Video Guide',
                desc: 'The full playbook for creating AI video content that looks and feels real. Tools, pipelines, and prompts.',
                cta: 'Open Guide',
                href: 'https://www.notion.so/COMPLETE-GUIDE-GENERATING-HYPER-REALISTIC-AI-VIDEOS-2fd4cf7f59e6807b9284cdfb6405ad34?source=copy_link',
              },
            ].map(r => (
              <a
                key={r.title}
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-gray-100 p-7 hover:border-gold hover:shadow-sm transition-all duration-200 flex flex-col bg-white"
              >
                <span className="text-2xl mb-4" aria-hidden="true">{r.emoji}</span>
                <h3 className="font-serif text-navy text-lg mb-2 group-hover:text-gold transition-colors leading-snug">{r.title}</h3>
                <p className="text-sm text-charcoal/60 font-sans leading-relaxed mb-6 flex-1">{r.desc}</p>
                <span className="inline-flex items-center gap-2 text-xs font-sans text-gold uppercase tracking-widest group-hover:gap-3 transition-all">
                  {r.cta}
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
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
