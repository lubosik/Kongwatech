import Image from 'next/image'
import SubscribeGate from '@/components/subscribe-gate'

export default function LockedPreMeetingTeaser() {
  return (
    <>
      <section className="bg-navy py-24 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-gold">AI Automation</span>
          <h1 className="mt-6 font-serif text-4xl leading-tight text-white lg:text-6xl">
            The Pre-Meeting Intelligence System
          </h1>
          <p className="mt-6 max-w-2xl font-sans text-lg leading-relaxed text-white/65">
            A 4-layer Claude prompt system that builds a complete intelligence briefing on any prospect before you walk into a meeting.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 -mt-10 relative z-10">
          <div className="relative aspect-[16/9] overflow-hidden border border-gray-100 bg-navy">
            <Image
              src="/images/blog/pre-meeting-hero.jpg"
              alt="Pre-meeting intelligence system"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-navy">
            <p>
              Most salespeople spend 20 minutes Googling a prospect before a meeting. This system replaces that with a structured intelligence briefing generated in under 10 minutes using Claude.
            </p>
            <p>
              The system covers company intelligence, decision-maker profiling, pain point mapping, and a tailored meeting strategy.
            </p>
          </div>

          <div className="relative mt-8 overflow-hidden border border-gray-100 bg-white">
            <div className="h-52 select-none space-y-4 p-8 blur-[3px]" aria-hidden="true">
              <div className="h-5 w-3/4 bg-charcoal/10" />
              <div className="h-4 w-full bg-charcoal/10" />
              <div className="h-4 w-11/12 bg-charcoal/10" />
              <div className="h-4 w-5/6 bg-charcoal/10" />
              <div className="h-4 w-full bg-charcoal/10" />
              <div className="h-4 w-2/3 bg-charcoal/10" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center bg-white/85 p-6">
              <div className="w-full max-w-xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
                <SubscribeGate
                  title="Subscribe to Some Free Game"
                  description="The prompts, examples, and implementation walkthrough are free for confirmed Some Free Game subscribers."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
