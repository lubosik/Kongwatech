'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

function PromptBox({ id, label, prompt }: { id: string; label: string; prompt: string }) {
  const [copied, setCopied] = useState(false)

  function copy() {
    navigator.clipboard.writeText(prompt).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2200)
    })
  }

  return (
    <div className="my-8 border border-navy/20 overflow-hidden">
      <div className="flex items-center justify-between px-5 py-3 bg-navy">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-gold" />
          <span className="font-sans text-xs text-white/60 tracking-widest uppercase">{label}</span>
        </div>
        <button
          onClick={copy}
          className={`font-sans text-xs px-4 py-1.5 transition-all ${
            copied
              ? 'bg-green-600 text-white'
              : 'bg-gold text-white hover:bg-gold-dark'
          }`}
        >
          {copied ? 'Copied!' : 'Copy Prompt'}
        </button>
      </div>
      <pre className="p-6 bg-[#0A1628] text-[#7AAEFF] font-mono text-sm leading-relaxed whitespace-pre-wrap break-words overflow-x-auto">
        {prompt}
      </pre>
    </div>
  )
}

function StepCard({
  number,
  title,
  children,
}: {
  number: number
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="flex gap-6 mb-12">
      <div className="flex-shrink-0">
        <div className="w-10 h-10 bg-navy flex items-center justify-center">
          <span className="font-serif text-gold text-lg font-bold">{number}</span>
        </div>
      </div>
      <div className="flex-1 pt-1">
        <h3 className="font-serif text-navy text-2xl mb-3">{title}</h3>
        {children}
      </div>
    </div>
  )
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-8 border-l-4 border-gold bg-cream px-7 py-6">
      <p className="font-serif text-navy text-xl leading-relaxed">{children}</p>
    </div>
  )
}

function StatBlock({ number, label }: { number: string; label: string }) {
  return (
    <div className="text-center py-8 px-6 border border-navy/10">
      <div className="font-serif text-navy text-5xl font-bold mb-2">{number}</div>
      <div className="font-sans text-charcoal/60 text-sm leading-snug">{label}</div>
    </div>
  )
}

function ClaudeChat({ userMessage, aiResponse }: { userMessage: string; aiResponse: string }) {
  return (
    <div className="my-8 border border-navy/10 overflow-hidden bg-white">
      <div className="px-4 py-3 bg-[#f0f4f9] border-b border-navy/10 flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-red-400" />
        <div className="w-2 h-2 rounded-full bg-yellow-400" />
        <div className="w-2 h-2 rounded-full bg-green-400" />
        <span className="font-sans text-xs text-charcoal/40 ml-2 tracking-wide">Claude.ai</span>
      </div>
      <div className="p-6 space-y-5">
        <div className="flex gap-3 justify-end">
          <div className="max-w-[80%] bg-navy text-white font-sans text-sm px-4 py-3 leading-relaxed rounded-sm">
            {userMessage}
          </div>
          <div className="w-8 h-8 bg-charcoal/10 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-sans font-bold text-charcoal/50 mt-auto">
            You
          </div>
        </div>
        <div className="flex gap-3">
          <div className="w-8 h-8 bg-[#CC785C] rounded-full flex-shrink-0 flex items-center justify-center text-xs font-sans font-bold text-white mt-auto">
            AI
          </div>
          <div className="max-w-[80%] bg-[#f7f7f5] font-sans text-sm px-4 py-3 leading-relaxed text-charcoal/80 rounded-sm border border-navy/5">
            {aiResponse}
          </div>
        </div>
      </div>
    </div>
  )
}

function InlineCode({ children }: { children: string }) {
  return (
    <code className="font-mono text-sm bg-navy/5 text-navy px-1.5 py-0.5 border border-navy/10">
      {children}
    </code>
  )
}

function TerminalBlock({ mac, windows }: { mac: string; windows: string }) {
  const [os, setOs] = useState<'mac' | 'windows'>('mac')
  return (
    <div className="my-8 border border-navy/20 overflow-hidden">
      <div className="flex border-b border-navy/20">
        <button
          onClick={() => setOs('mac')}
          className={`font-sans text-xs px-5 py-2.5 tracking-wide transition-colors ${
            os === 'mac' ? 'bg-navy text-white' : 'bg-white text-charcoal/50 hover:text-navy'
          }`}
        >
          Mac / Linux
        </button>
        <button
          onClick={() => setOs('windows')}
          className={`font-sans text-xs px-5 py-2.5 tracking-wide transition-colors ${
            os === 'windows' ? 'bg-navy text-white' : 'bg-white text-charcoal/50 hover:text-navy'
          }`}
        >
          Windows
        </button>
      </div>
      <pre className="p-6 bg-[#0A1628] text-green-400 font-mono text-sm leading-relaxed overflow-x-auto">
        {os === 'mac' ? mac : windows}
      </pre>
    </div>
  )
}

export default function ArticleContent({ company }: { company?: string }) {
  const isPersonalised = Boolean(company)
  const companyDisplay = company
    ? company
        .split('-')
        .map(w => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ')
    : ''

  return (
    <>
      {/* Personalised banner */}
      {isPersonalised && (
        <div className="bg-gold text-white py-3 px-6 text-center">
          <p className="font-sans text-sm">
            Prepared specifically for <strong>{companyDisplay}</strong>. Share this with your sales team.
          </p>
        </div>
      )}

      {/* Hero */}
      <section className="bg-navy py-24 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-gold font-sans text-xs tracking-[0.3em] uppercase">AI Automation</span>
            <span className="text-white/30 text-xs">|</span>
            <span className="text-white/50 font-sans text-xs">8 May 2026</span>
          </div>
          <h1 className="font-serif text-white text-4xl lg:text-6xl leading-tight mb-8">
            The Pre-Meeting Intelligence System
          </h1>
          <p className="text-white/70 font-sans text-lg leading-relaxed max-w-xl">
            How to walk into every sales meeting already knowing your prospect&apos;s background, likely objections,
            and the one thing to open with. Four prompts. Ten minutes. Done.
          </p>
          <div className="mt-10 pt-8 border-t border-white/10 flex items-center gap-4 flex-wrap">
            <p className="text-white/40 font-sans text-sm">
              By <span className="text-white/70">Lubosi Kongwa</span>
            </p>
            <span className="text-white/20">|</span>
            <span className="font-sans text-xs text-white/40">10 min read</span>
            <span className="text-white/20">|</span>
            <span className="font-sans text-xs text-white/40">Works with Claude.ai (free) or any AI assistant</span>
          </div>
        </div>
      </section>

      {/* Hero image */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 -mt-8 relative z-10">
          <div className="relative aspect-[16/9] overflow-hidden bg-navy border border-navy/10">
            <Image
              src="/images/blog/pre-meeting-hero.jpg"
              alt="Pre-Meeting Intelligence System"
              fill
              className="object-cover"
              priority
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.style.display = 'none'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-[#1a3a5c] flex items-center justify-center">
              <p className="font-serif text-white/20 text-4xl italic text-center px-12 leading-tight">
                Know everything before you say hello.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What you will learn */}
      <section className="bg-cream py-12">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <div className="border border-gold/30 px-8 py-7">
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-gold mb-4">What you will learn</p>
            <ul className="space-y-2">
              {[
                'The 4-layer intelligence framework top sales teams use before every meeting',
                'Four complete Claude prompts you can copy and paste right now',
                'How to set this up in your terminal so it runs in one command',
                'What the final brief looks like (real example included)',
                'How to delegate this to your team without adding complexity',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 font-sans text-sm text-charcoal/80">
                  <span className="text-gold font-bold mt-0.5">+</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">

          {/* SECTION 1: The problem */}
          <h2 className="font-serif text-navy text-3xl lg:text-4xl mb-6 leading-tight">
            Most sales teams walk in blind. Here is what that costs.
          </h2>

          <p className="font-sans text-charcoal/80 text-base leading-relaxed mb-5">
            A salesperson at a luxury residential firm in London once told me that his team spent an average of
            four minutes on prospect research before a call. Four minutes of scanning a name, maybe pulling
            up a LinkedIn, and declaring themselves ready.
          </p>

          <p className="font-sans text-charcoal/80 text-base leading-relaxed mb-5">
            Their close rate was 18 percent. The firm down the road, who had systematised their pre-meeting
            preparation, was closing at 34 percent. Same market. Same leads. Different preparation.
          </p>

          {/* Stats grid */}
          <div className="grid grid-cols-3 gap-0 border border-navy/10 my-10">
            <StatBlock number="100x" label="More likely to connect if you respond within 5 minutes of an enquiry (Harvard Business Review)" />
            <StatBlock number="28%" label="Higher conversion rate for reps who spend 6+ minutes researching before a call (Gong.io)" />
            <StatBlock number="57%" label="Of the buying decision is made before the first real conversation (Forrester)" />
          </div>

          <p className="font-sans text-charcoal/80 text-base leading-relaxed mb-5">
            The problem is not that salespeople do not want to prepare. It is that good preparation used to take
            45 minutes of unfocused searching. Digging through LinkedIn, Googling news, trying to piece together
            who you are meeting and why they might buy.
          </p>

          <Callout>
            With AI, the same preparation takes 10 minutes. And the output is better than anything a
            human could compile in 45.
          </Callout>

          <p className="font-sans text-charcoal/80 text-base leading-relaxed mb-10">
            This guide gives you the exact system. Four prompts. A process anyone on your team can follow.
            And an optional terminal setup that automates the whole thing before every meeting.
          </p>

          {/* SECTION 2: The intelligence stack */}
          <h2 className="font-serif text-navy text-3xl lg:text-4xl mb-6 leading-tight mt-16">
            What to actually research before a sales call
          </h2>

          <p className="font-sans text-charcoal/80 text-base leading-relaxed mb-8">
            Most people research the wrong things. They find a job title and call it preparation.
            Real pre-meeting intelligence has four layers. You need all four.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-navy/10 mb-10">
            {[
              {
                num: '01',
                name: 'Professional Identity',
                find: 'Role, tenure, company size, recent promotions, what they are responsible for',
                why: 'Opens the conversation at their level. You do not explain what you do to someone who already knows the language.',
                where: 'LinkedIn, company website, press releases',
              },
              {
                num: '02',
                name: 'Personal Signals',
                find: 'Recent posts, shared articles, causes they support, career history patterns',
                why: 'Tells you what they actually care about, which is usually different from their job description.',
                where: 'LinkedIn activity, Twitter/X, company blog bylines',
              },
              {
                num: '03',
                name: 'Buying Triggers',
                find: 'Company growth signals, recent funding, expansion news, team changes, new initiatives',
                why: 'Someone who just opened a new office is in buying mode. Someone whose team just shrank is not.',
                where: 'Company news, LinkedIn company page, Crunchbase, press coverage',
              },
              {
                num: '04',
                name: 'Likely Objections',
                find: 'Previous tools they have used, public frustrations, industry-specific blockers',
                why: 'You anticipate the no before it arrives. The rep who can name the objection first is the rep who controls the conversation.',
                where: 'LinkedIn posts, industry forums, previous outreach responses if any',
              },
            ].map((layer) => (
              <div key={layer.num} className="p-8 border-b border-r border-navy/10 last:border-b-0 md:[&:nth-child(even)]:border-r-0">
                <div className="font-sans text-xs text-gold tracking-widest mb-1">{layer.num}</div>
                <h3 className="font-serif text-navy text-xl mb-4">{layer.name}</h3>
                <div className="space-y-3">
                  <div>
                    <span className="font-sans text-xs uppercase tracking-wider text-navy/50 block mb-1">What to find</span>
                    <p className="font-sans text-sm text-charcoal/70 leading-relaxed">{layer.find}</p>
                  </div>
                  <div>
                    <span className="font-sans text-xs uppercase tracking-wider text-navy/50 block mb-1">Why it matters</span>
                    <p className="font-sans text-sm text-charcoal/70 leading-relaxed">{layer.why}</p>
                  </div>
                  <div>
                    <span className="font-sans text-xs uppercase tracking-wider text-navy/50 block mb-1">Where to find it</span>
                    <p className="font-sans text-sm text-charcoal/70 leading-relaxed">{layer.where}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* SECTION 3: The 4 prompts */}
          <h2 className="font-serif text-navy text-3xl lg:text-4xl mb-6 leading-tight mt-16">
            The system: 4 prompts, 10 minutes, one complete brief
          </h2>

          <p className="font-sans text-charcoal/80 text-base leading-relaxed mb-4">
            Open Claude.ai (free). Have your prospect&apos;s name and company ready. Run these four prompts in order.
            Each one feeds into the next. By the end, you have a complete intelligence brief.
          </p>

          <ClaudeChat
            userMessage="I need to research a prospect before a sales call tomorrow."
            aiResponse="I can help you build a complete intelligence brief. Give me their name, company, and what you are selling to them, and I will walk you through everything you need to know before you say hello."
          />

          <div className="mt-10 space-y-16">

            <StepCard number={1} title="The Search Prompt">
              <p className="font-sans text-charcoal/70 text-sm mb-4 leading-relaxed">
                Start here. Paste this into Claude.ai and fill in the placeholders.
                This tells Claude exactly who to research and what angle you need.
              </p>
              <PromptBox
                id="prompt-1"
                label="Prompt 1 of 4 — Research Brief"
                prompt={`Act as a world-class intelligence analyst preparing a briefing for a senior sales director going into a high-value meeting.

Your task: build a complete intelligence brief on the following prospect.

PROSPECT DETAILS:
- Full name: [PROSPECT FULL NAME]
- Company: [COMPANY NAME]
- Their role: [JOB TITLE]
- What I am selling: [YOUR PRODUCT OR SERVICE — one sentence]
- Deal size: [APPROXIMATE VALUE]
- Meeting type: [DISCOVERY / DEMO / CLOSE]

Using publicly available information (LinkedIn, company website, news, press releases, social media, industry publications), find and structure the following:

1. PROFESSIONAL SUMMARY — Role, tenure at company, career trajectory, what they are responsible for, notable achievements or promotions.

2. COMPANY CONTEXT — Company size, recent news, growth signals, funding, expansions, hires or layoffs, any major announcements in the last 6 months.

3. PERSONAL SIGNALS — Recent LinkedIn posts, articles they have shared, topics they engage with, anything that reveals what they actually care about beyond their job description.

4. LIKELY BUYING TRIGGERS — Based on company stage and signals, what problems are they likely trying to solve right now? What would make them say yes quickly?

5. POTENTIAL OBJECTIONS — Based on their background and company situation, what are the three most likely reasons they push back? Be specific, not generic.

Be specific. Do not give me generic observations about their industry. Give me insights about this specific person and this specific company.`}
              />
              <div className="bg-cream px-5 py-4 text-sm">
                <p className="font-sans text-charcoal/70 leading-relaxed">
                  <strong className="text-navy">What you get:</strong> A structured brief covering their background,
                  company situation, what they care about, and the objections you will face.
                  Takes Claude about 60 seconds to produce.
                </p>
                <p className="font-sans text-gold text-xs mt-3 font-medium">
                  PRO TIP: If Claude says it cannot find information, tell it to use what it knows about companies
                  of that size and stage in that sector. It will still produce a useful profile.
                </p>
              </div>
            </StepCard>

            <StepCard number={2} title="The Research Synthesis Prompt">
              <p className="font-sans text-charcoal/70 text-sm mb-4 leading-relaxed">
                Paste the output from Prompt 1 directly into this one. This turns raw research
                into a formatted brief you can print, share with your team, or read in the car.
              </p>
              <PromptBox
                id="prompt-2"
                label="Prompt 2 of 4 — Synthesise the Brief"
                prompt={`Take the research you just produced and format it as a clean one-page Pre-Meeting Intelligence Brief.

Structure it as follows:

PROSPECT: [Name] | [Company] | [Their Role]
MEETING: [Date/Time] | [Meeting type]
PREPARED BY: [Your name]

---

EXECUTIVE SUMMARY (3 sentences)
Who this person is, where their company is right now, and the one thing most likely to move them.

---

KEY SIGNALS (5 bullet points)
The five most important things I need to know before walking in. Specific and actionable.

---

LIKELY OBJECTIONS (3 bullets)
Write each objection in the first person, as if they are saying it: "I'm not sure we have the budget right now" rather than "budget concerns."

---

CONVERSATION OPENERS (3 options)
Three opening lines I can use, each based on a different signal from the research.
Each opener should feel natural and specific, not like a scripted pitch.

---

THINGS TO AVOID (2-3 bullets)
Specific things not to say, ask, or assume based on what we know about this person.

---

OVERALL ASSESSMENT
One paragraph. What is my read on this prospect? How ready are they to buy? What is the single most important thing to get right in this meeting?

---

Make this feel like something a Chief of Staff prepared for a CEO going into a board meeting.
Every word earns its place. Nothing generic.`}
              />
              <div className="bg-cream px-5 py-4 text-sm">
                <p className="font-sans text-charcoal/70 leading-relaxed">
                  <strong className="text-navy">What you get:</strong> A formatted one-page brief
                  you can read in 2 minutes before the meeting. This is what you print or pull up on your phone.
                </p>
                <p className="font-sans text-gold text-xs mt-3 font-medium">
                  PRO TIP: Share this with every closer on your team who is involved in the meeting.
                  One brief per meeting, shared in Slack or email 30 minutes before.
                </p>
              </div>
            </StepCard>

            <StepCard number={3} title="The Objection Anticipation Prompt">
              <p className="font-sans text-charcoal/70 text-sm mb-4 leading-relaxed">
                Run this after Prompt 2. This gives you the full conversation map, including
                how to respond to every objection before you have even heard it.
              </p>
              <PromptBox
                id="prompt-3"
                label="Prompt 3 of 4 — Objection Map"
                prompt={`Based on the intelligence brief we have built, create a complete objection map for my meeting with [PROSPECT NAME].

For each of the three objections identified:

OBJECTION: [Write the objection in their voice]
UNDERLYING CONCERN: [What fear or priority is really driving this?]
HOW TO RESPOND: [Specific response — not generic, tied to what we know about them]
EVIDENCE TO USE: [What proof point, case study, or data point directly addresses this?]
RECOVERY IF THEY PERSIST: [If they push back again, what do you say next?]

Then add one final section:

THE QUESTION I SHOULD ASK
The single most powerful question I can ask in this meeting — based on what we know about their situation — that will reveal whether they are a serious buyer and move the conversation forward.

Write every response as if you are a seasoned enterprise sales coach preparing a top performer for the most important meeting of the quarter.`}
              />
              <div className="bg-cream px-5 py-4 text-sm">
                <p className="font-sans text-charcoal/70 leading-relaxed">
                  <strong className="text-navy">What you get:</strong> A complete objection playbook with
                  specific responses tailored to this prospect. Most salespeople improvise. You will not.
                </p>
                <p className="font-sans text-gold text-xs mt-3 font-medium">
                  PRO TIP: Read this out loud before the meeting. Saying the objections in their voice
                  prepares you to recognise them when they come up.
                </p>
              </div>
            </StepCard>

            <StepCard number={4} title="The Conversation Opener Generator">
              <p className="font-sans text-charcoal/70 text-sm mb-4 leading-relaxed">
                The first 60 seconds of any meeting sets the tone for everything that follows.
                This gives you five specific openers, each built from something real about this person.
              </p>
              <PromptBox
                id="prompt-4"
                label="Prompt 4 of 4 — Conversation Openers"
                prompt={`Based on everything you know about [PROSPECT NAME] from the research, generate five conversation openers for my meeting.

Each opener must:
- Be based on a specific signal from the research (not generic)
- Sound completely natural, not scripted
- Lead naturally into a discovery question
- Work in the first 30 seconds of the meeting

Format each as:

OPENER [NUMBER]:
What to say: [The actual line — write it exactly as you would say it]
Why this works: [What signal from the research makes this land]
Follow-up question: [The natural next question after this opener]

After the five openers, give me:

THE POWER CLOSE LINE
If the meeting goes well and I want to propose a next step, give me one sentence — specific to this prospect and what we know about their situation — that moves them toward a decision without pressure.`}
              />
              <div className="bg-cream px-5 py-4 text-sm">
                <p className="font-sans text-charcoal/70 leading-relaxed">
                  <strong className="text-navy">What you get:</strong> Five openers, each tied to something
                  real about the prospect. Plus a close line when you need it.
                </p>
                <p className="font-sans text-gold text-xs mt-3 font-medium">
                  PRO TIP: Pick one opener and commit to it. Salespeople who go in with one clear opener
                  are more confident than those holding five options.
                </p>
              </div>
            </StepCard>
          </div>

          {/* What you now have */}
          <div className="mt-12 bg-navy p-8">
            <p className="font-sans text-xs text-gold tracking-widest uppercase mb-3">After 4 prompts</p>
            <p className="font-serif text-white text-2xl leading-tight mb-4">
              You have everything you need to walk in confident.
            </p>
            <ul className="space-y-2">
              {[
                'A one-page formatted brief your team can read in 2 minutes',
                'Three objections mapped with specific responses and evidence',
                'Five personalised conversation openers tied to real signals',
                'A single power close line for when the moment arrives',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 font-sans text-sm text-white/70">
                  <span className="text-gold mt-0.5">+</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* SECTION 4: Example brief */}
          <h2 className="font-serif text-navy text-3xl lg:text-4xl mb-6 leading-tight mt-20">
            What the output looks like
          </h2>

          <p className="font-sans text-charcoal/80 text-base leading-relaxed mb-8">
            Here is a real example brief, built using these four prompts, for a fictional but realistic prospect.
          </p>

          <div className="border border-navy/15 overflow-hidden mb-12">
            <div className="flex items-center gap-2 px-5 py-3 bg-[#f0f4f9] border-b border-navy/10">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
              <span className="font-sans text-xs text-charcoal/40 ml-2 tracking-wide">Pre-Meeting Intelligence Brief</span>
            </div>
            <div className="p-8 space-y-6">
              <div>
                <p className="font-serif text-navy text-2xl mb-1">James Carter</p>
                <p className="font-sans text-xs text-charcoal/50">Director of Sales | Carter Prime Properties, Dubai | Meeting: Friday 10am | Discovery Call</p>
              </div>
              <div className="border-t border-navy/10 pt-6 space-y-5">
                {[
                  {
                    label: 'Executive Summary',
                    content: 'James has run sales at Carter Prime for 3 years after a decade in institutional brokerage. The firm has expanded aggressively into off-plan luxury, doubling team headcount in 18 months. He is under board pressure to improve speed-to-lead — they lost three deals last quarter to faster-responding competitors.',
                  },
                  {
                    label: 'Key Signals',
                    items: [
                      'Posted on LinkedIn three weeks ago about losing a £4.8M off-plan lead to a competitor who "called them back in minutes"',
                      'Company opened a new Jumeirah office and hired 6 additional closers in Q1 2026',
                      'Reshared an article titled "Why CRM alone is not a sales strategy" with the comment "exactly this"',
                      'Has been using HubSpot for 2 years — likely frustrated by its limitations at their current scale',
                      'Attended Dubai property expo last month; company featured in Gulf News residential report',
                    ],
                  },
                  {
                    label: 'Likely Objections',
                    items: [
                      '"We already tried a call automation tool and the leads hated it" — they likely tested a basic IVR, not a conversational AI',
                      '"My closers are protective of their pipeline and won\'t want AI involved" — real concern given how commission-driven the team is',
                      '"We need to trial it before we can commit to anything" — standard enterprise delay tactic when budget is soft',
                    ],
                  },
                  {
                    label: 'Conversation Openers',
                    items: [
                      '"I saw your post about the lead you lost last quarter. That is exactly the problem we built AIRO to solve. Can I tell you what happened with the firm?"',
                      '"You have doubled your team size in 18 months. The challenge at that stage is usually that your closers spend too much time qualifying and not enough time closing."',
                      '"You were at the expo last month. What was the mood like on the floor — are buyers moving, or is there more hesitation than six months ago?"',
                    ],
                  },
                  {
                    label: 'Things to Avoid',
                    items: [
                      'Do not lead with technology. James is commercial, not technical. Lead with the business problem.',
                      'Do not mention HubSpot as a weakness — he chose it and has his team on it.',
                      'Do not ask generic qualifying questions. He will disengage immediately.',
                    ],
                  },
                  {
                    label: 'Overall Assessment',
                    content: 'James is a serious buyer. His public post signals active frustration with a specific, known problem. The team expansion means budget exists. His caution will be about disruption to his closers, not cost. Lead with the outcome and use the 576-buyer recovery case study early. He will respond to proof, not features.',
                  },
                ].map((sec) => (
                  <div key={sec.label} className="pb-5 border-b border-navy/8 last:border-b-0">
                    <span className="font-sans text-xs uppercase tracking-widest text-navy/40 block mb-2">{sec.label}</span>
                    {sec.content && <p className="font-sans text-sm text-charcoal/80 leading-relaxed">{sec.content}</p>}
                    {sec.items && (
                      <ul className="space-y-2">
                        {sec.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 font-sans text-sm text-charcoal/80">
                            <span className="text-gold mt-0.5 font-bold flex-shrink-0">+</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* SECTION 5: Team system */}
          <h2 className="font-serif text-navy text-3xl lg:text-4xl mb-6 leading-tight mt-16">
            Making this a team system, not a personal habit
          </h2>

          <p className="font-sans text-charcoal/80 text-base leading-relaxed mb-5">
            The most common mistake is running this personally and forgetting to systematise it.
            A brief you run for yourself is useful. A brief that lands in every closer&apos;s inbox
            30 minutes before every meeting is a competitive weapon.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-navy/10 mb-10">
            {[
              { label: 'Who runs it', content: 'A PA, sales coordinator, or SDR. Not the closer. The closer should receive the brief, not build it. This takes 10 minutes and any organised person can learn it in one session.' },
              { label: 'When to run it', content: '24 hours before every meeting above a set deal size. For anything under your threshold, run Prompts 1 and 2 only. For high-value meetings, run all four.' },
              { label: 'How to share it', content: 'Paste the formatted brief into Slack DM or email. No attachments. No folders. The closer gets one message, reads it in 2 minutes, and goes in prepared.' },
              { label: 'What to do with it', content: 'Print it, or pull it up on your phone 5 minutes before the meeting. Read the conversation openers out loud in the car or lift. Pick one and use it exactly as written.' },
            ].map((item) => (
              <div key={item.label} className="p-7 border-b border-r border-navy/10 last:border-0 [&:nth-child(even)]:border-r-0">
                <span className="font-sans text-xs uppercase tracking-widest text-gold block mb-2">{item.label}</span>
                <p className="font-sans text-sm text-charcoal/80 leading-relaxed">{item.content}</p>
              </div>
            ))}
          </div>

          {/* SECTION 5b: Terminal setup */}
          <h2 className="font-serif text-navy text-3xl lg:text-4xl mb-6 leading-tight mt-16">
            Run it from your terminal in one command
          </h2>

          <p className="font-sans text-charcoal/80 text-base leading-relaxed mb-4">
            If you want to fully automate this — so anyone on your team types a name and gets a
            complete brief without touching Claude.ai — here is the setup.
            You only do this once. After that, it is one command before every meeting.
          </p>

          <div className="relative mb-8 border border-navy/10">
            <Image
              src="/images/blog/airo-terminal.png"
              alt="The Pre-Meeting Intelligence pipeline running in terminal"
              width={900}
              height={480}
              className="w-full"
            />
            <p className="font-sans text-xs text-charcoal/40 px-4 py-2 bg-cream border-t border-navy/10">
              The intelligence pipeline running in terminal. Each stage produces a structured JSON output, then renders a formatted brief.
            </p>
          </div>

          <div className="space-y-8">

            <div>
              <p className="font-sans text-sm font-semibold text-navy mb-2">Step 1 — Install Python (if you don&apos;t have it)</p>
              <p className="font-sans text-sm text-charcoal/70 mb-3">
                On Mac, open <InlineCode>Terminal</InlineCode>. On Windows, open <InlineCode>Command Prompt</InlineCode> or <InlineCode>PowerShell</InlineCode>.
                Run this to check if Python is already installed:
              </p>
              <TerminalBlock
                mac={`python3 --version
# If you see "Python 3.x.x" you are ready.
# If not, go to python.org/downloads and install Python 3`}
                windows={`python --version
# If you see "Python 3.x.x" you are ready.
# If not, go to python.org/downloads and install Python 3`}
              />
            </div>

            <div>
              <p className="font-sans text-sm font-semibold text-navy mb-2">Step 2 — Install the one dependency</p>
              <TerminalBlock
                mac={`pip3 install requests`}
                windows={`pip install requests`}
              />
            </div>

            <div>
              <p className="font-sans text-sm font-semibold text-navy mb-2">Step 3 — Set your API key</p>
              <p className="font-sans text-sm text-charcoal/70 mb-3">
                Get a free API key at <span className="text-navy font-medium">openrouter.ai</span>.
                Free tier is enough for 10-20 briefs per month.
              </p>
              <TerminalBlock
                mac={`export OPENROUTER_API_KEY="your-key-here"
# Add this to your ~/.zshrc file to make it permanent`}
                windows={`set OPENROUTER_API_KEY=your-key-here
# Or add it as a System Environment Variable in Control Panel`}
              />
            </div>

            <div>
              <p className="font-sans text-sm font-semibold text-navy mb-2">Step 4 — Run the pipeline before any meeting</p>
              <TerminalBlock
                mac={`python3 ~/Downloads/airo_pipeline/run_pipeline.py
# Or from within the folder:
cd ~/Downloads/airo_pipeline
python3 run_pipeline.py`}
                windows={`python %USERPROFILE%\Downloads\airo_pipeline\run_pipeline.py`}
              />
              <p className="font-sans text-xs text-charcoal/50 mt-2">
                The pipeline scrapes research, synthesises it with Claude, generates the full brief, and saves it to your Downloads folder. Typically takes 60-90 seconds.
              </p>
            </div>

          </div>

          {/* Mid-article CTA — bridge to AIRO */}
          <div className="my-16 border-t border-navy/10 pt-16">
            <h2 className="font-serif text-navy text-3xl lg:text-4xl mb-6 leading-tight">
              The one problem this system cannot solve
            </h2>

            <p className="font-sans text-charcoal/80 text-base leading-relaxed mb-5">
              You can now walk into every meeting knowing more about your prospect than they expect.
              That is a real edge, and most teams will never have it.
            </p>

            <p className="font-sans text-charcoal/80 text-base leading-relaxed mb-5">
              But there is a layer of the problem this guide does not touch.
            </p>

            <p className="font-sans text-charcoal/80 text-base leading-relaxed mb-5">
              The intelligence system assumes you get the meeting. It assumes the lead was called quickly
              enough, qualified properly, and handed to your closer with context. For most sales teams,
              that is not what happens. Leads come in. They sit in a CRM. Someone calls them when they
              get around to it. By then, the prospect has already spoken to someone else.
            </p>

            <div className="border border-navy/15 bg-cream p-8 mb-8">
              <p className="font-serif text-navy text-xl leading-snug mb-3">
                Companies that respond to an inbound lead within 5 minutes are 100 times more likely
                to connect than those who respond in 30 minutes.
              </p>
              <p className="font-sans text-xs text-charcoal/50">Harvard Business Review, Lead Response Management Study</p>
            </div>

            <p className="font-sans text-charcoal/80 text-base leading-relaxed mb-5">
              The Pre-Meeting Intelligence System makes you better in the room. But if you are not in the
              room fast enough, the intelligence does not matter.
            </p>

            <Callout>
              The firms that are winning in luxury real estate right now are not just better prepared.
              They are faster. And they have removed the human bottleneck from the first conversation entirely.
            </Callout>

            <p className="font-sans text-charcoal/80 text-base leading-relaxed mb-5">
              That is the problem AIRO was built to solve. AIRO is a voice AI that contacts every
              inbound lead within 60 seconds of their enquiry. It has a real conversation, qualifies them,
              and hands your team a warm, ready-to-close prospect. Your closers only speak to people
              with genuine buying intent.
            </p>

            <p className="font-sans text-charcoal/80 text-base leading-relaxed mb-8">
              The intelligence system you just learned is for the meeting. AIRO is for getting to the meeting.
              Together, they are the most complete sales preparation stack in the market.
            </p>
          </div>

          {/* Audio section */}
          <div className="border border-navy/15 bg-navy mb-12">
            <div className="p-8">
              <span className="font-sans text-xs tracking-widest uppercase text-gold block mb-4">Before you book a call with the AIRO team</span>
              <h3 className="font-serif text-white text-2xl mb-4 leading-tight">
                Listen to two minutes of AIRO in action
              </h3>
              <p className="font-sans text-white/60 text-sm leading-relaxed mb-8 max-w-lg">
                These are real calls handled entirely by AIRO. No human agent. No script reading.
                The prospect does not know they are speaking to an AI until they ask directly.
                What happens next is worth hearing.
              </p>

              <div className="space-y-6">
                <div className="border border-white/10 p-6 bg-navy-dark">
                  <span className="font-sans text-xs uppercase tracking-widest text-gold/70 block mb-2">Recording 01</span>
                  <p className="font-serif text-white text-lg mb-4">A buyer qualifies themselves. No closer required.</p>
                  <audio controls className="w-full" style={{ accentColor: '#B89A5A' }}>
                    <source src="https://airo.velto.ai/audio/wire-transfer.mp3" type="audio/mpeg" />
                  </audio>
                  <p className="font-sans text-xs text-white/40 mt-3">
                    Listen for the moment the prospect begins describing their own buying timeline without being prompted.
                  </p>
                </div>

                <div className="border border-white/10 p-6 bg-navy-dark">
                  <span className="font-sans text-xs uppercase tracking-widest text-gold/70 block mb-2">Recording 02</span>
                  <p className="font-serif text-white text-lg mb-4">&ldquo;You&apos;re not AI, are you?&rdquo;</p>
                  <audio controls className="w-full" style={{ accentColor: '#B89A5A' }}>
                    <source src="https://airo.velto.ai/audio/not-ai.mp3" type="audio/mpeg" />
                  </audio>
                  <p className="font-sans text-xs text-white/40 mt-3">
                    If you have doubts about whether AI voice works in luxury sales, play this first.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Case studies */}
          <div className="mb-12">
            <h3 className="font-serif text-navy text-2xl mb-6">What AIRO has actually done</h3>
            <div className="space-y-4">
              {[
                {
                  result: '576 qualified buyers recovered',
                  context: 'From a dead pipeline at a UK high-end residential firm. Over 14 months. Average deal size: GBP 2.5 million per transaction.',
                },
                {
                  result: 'GBP 2 million in qualified pipeline in 24 hours',
                  context: 'From leads nobody planned to call. These were written off. AIRO called them overnight and recovered serious buyers by morning.',
                },
                {
                  result: 'Works with Idris Elba\'s media team',
                  context: 'Handling inbound enquiries and qualifying leads for high-volume, high-value entertainment and brand partnership conversations.',
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-5 border-l-4 border-gold pl-6 py-4">
                  <div>
                    <p className="font-serif text-navy text-lg mb-1">{item.result}</p>
                    <p className="font-sans text-sm text-charcoal/60 leading-relaxed">{item.context}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="bg-navy p-10 mt-8">
            <span className="font-sans text-xs tracking-widest uppercase text-gold block mb-4">Take this further</span>
            <h2 className="font-serif text-white text-3xl lg:text-4xl leading-tight mb-4">
              See what happens when speed meets intelligence.
            </h2>
            <p className="font-sans text-white/60 text-base leading-relaxed mb-6 max-w-lg">
              The intelligence system is yours. If you want to add the speed layer, book a 20-minute
              call with the AIRO team. No pitch. No slide deck. We will run the numbers on your pipeline
              and you will leave knowing exactly what AIRO would recover.
            </p>
            <a
              href="https://airo.velto.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gold text-white font-sans text-sm px-8 py-4 hover:bg-gold-dark transition-colors mb-4"
            >
              Book a Call with the AIRO Team
            </a>
            <p className="font-sans text-xs text-white/30">
              No commitment. Just the numbers.
            </p>
          </div>

          {/* Author note */}
          <div className="mt-16 pt-10 border-t border-navy/10">
            <p className="font-sans text-xs text-charcoal/40 uppercase tracking-widest mb-3">A note from the author</p>
            <p className="font-serif text-navy text-lg leading-relaxed max-w-2xl italic">
              &ldquo;I built this guide because most sales teams are one good process away from a meaningful improvement
              in their close rate. The intelligence system is that process. AIRO is the layer that makes it possible
              to run at scale, without adding headcount.&rdquo;
            </p>
            <p className="font-sans text-sm text-charcoal/60 mt-4">Lubosi, Founder of AIRO by Velto</p>
          </div>

          {/* Back link */}
          <div className="mt-12">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-sans text-charcoal/40 hover:text-navy transition-colors"
            >
              <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              All articles
            </Link>
          </div>

        </div>
      </section>
    </>
  )
}
