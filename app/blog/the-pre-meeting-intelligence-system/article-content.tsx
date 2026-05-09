'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

function PromptBox({ label, prompt }: { label: string; prompt: string }) {
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
            copied ? 'bg-green-600 text-white' : 'bg-gold text-white hover:bg-gold-dark'
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

function StepCard({ number, title, children }: { number: number; title: string; children: React.ReactNode }) {
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

function MacTerminal({ lines }: { lines: { type: 'prompt' | 'output' | 'comment'; text: string }[] }) {
  return (
    <div className="my-6 overflow-hidden border border-[#3a3a3a] rounded-sm">
      <div className="flex items-center gap-2 px-4 py-2.5 bg-[#2d2d2d] border-b border-[#3a3a3a]">
        <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
        <span className="w-3 h-3 rounded-full bg-[#28ca41]" />
        <span className="font-sans text-xs text-white/30 ml-2">zsh</span>
      </div>
      <div className="p-5 bg-[#1c1c1e] font-mono text-sm leading-relaxed">
        {lines.map((line, i) => (
          <div key={i} className={
            line.type === 'prompt' ? 'text-white' :
            line.type === 'comment' ? 'text-[#6b7280] italic' :
            'text-[#a8b5c8] pl-2'
          }>
            {line.type === 'prompt' && (
              <span className="text-[#9ca3af] select-none mr-2">~  %</span>
            )}
            {line.text}
          </div>
        ))}
      </div>
    </div>
  )
}

function WindowsTerminal({ lines }: { lines: { type: 'prompt' | 'output' | 'comment'; text: string }[] }) {
  return (
    <div className="my-6 overflow-hidden border border-[#3a3a3a] rounded-sm">
      <div className="flex items-center gap-2 px-4 py-2.5 bg-[#012456] border-b border-[#1a3a6b]">
        <span className="font-sans text-xs text-white/60">Windows PowerShell</span>
      </div>
      <div className="p-5 bg-[#012456] font-mono text-sm leading-relaxed">
        {lines.map((line, i) => (
          <div key={i} className={
            line.type === 'prompt' ? 'text-white' :
            line.type === 'comment' ? 'text-[#6b9ab8] italic' :
            'text-[#a8c5e0] pl-2'
          }>
            {line.type === 'prompt' && (
              <span className="text-[#6ba3be] select-none mr-2">PS C:\Users\YourName&gt;</span>
            )}
            {line.text}
          </div>
        ))}
      </div>
    </div>
  )
}

function OSTabs({
  macContent,
  windowsContent,
}: {
  macContent: React.ReactNode
  windowsContent: React.ReactNode
}) {
  const [os, setOs] = useState<'mac' | 'windows'>('mac')
  return (
    <div className="my-8">
      <div className="flex border-b border-navy/20 mb-0">
        <button
          onClick={() => setOs('mac')}
          className={`font-sans text-xs px-6 py-2.5 tracking-wide transition-colors border-b-2 ${
            os === 'mac' ? 'border-gold text-navy font-medium' : 'border-transparent text-charcoal/40 hover:text-navy'
          }`}
        >
          Mac
        </button>
        <button
          onClick={() => setOs('windows')}
          className={`font-sans text-xs px-6 py-2.5 tracking-wide transition-colors border-b-2 ${
            os === 'windows' ? 'border-gold text-navy font-medium' : 'border-transparent text-charcoal/40 hover:text-navy'
          }`}
        >
          Windows
        </button>
      </div>
      {os === 'mac' ? macContent : windowsContent}
    </div>
  )
}

const MASTER_PROMPT = `You are my pre-meeting intelligence assistant.

When I give you a prospect below, research them thoroughly and produce a complete Pre-Meeting Intelligence Brief.

Here is what the brief needs to cover:

1. PROFESSIONAL SUMMARY
   Their role, how long they have been there, career trajectory, and what they are actually responsible for day to day.

2. COMPANY CONTEXT
   Company size, recent news, growth signals, funding, new hires or layoffs, any major announcements in the last 6 months.

3. PERSONAL SIGNALS
   What they post about on LinkedIn, articles they share, causes they support, anything that tells you what they actually care about beyond their job title.

4. BUYING TRIGGERS
   Based on their company stage and recent signals, what problems are they most likely trying to solve right now? What would make them say yes quickly?

5. LIKELY OBJECTIONS (write these in their voice, as if they are saying them)
   The three most probable pushbacks. Be specific to this person, not generic to their industry.

6. OBJECTION RESPONSES
   For each objection: the underlying fear driving it, how to respond, and a one-line recovery if they push back again.

7. CONVERSATION OPENERS (3 options)
   Each opener should be tied to a specific signal from the research. Should sound natural, not scripted. Each one leads into a discovery question.

8. POWER CLOSE LINE
   One sentence, specific to this prospect, that moves them toward a decision without pressure.

9. OVERALL READ
   One paragraph. How ready are they to buy? What is the single most important thing to get right in this meeting?

Format the output as a clean one-page brief. Every word earns its place.

---

PROSPECT: [Full name]
COMPANY: [Company name]
THEIR ROLE: [Job title]
WHAT I SELL: [One sentence describing your product or service]
MEETING TYPE: [Discovery / Demo / Close]
DEAL SIZE: [Approximate value]`

export default function ArticleContent({ company }: { company?: string }) {
  const isPersonalised = Boolean(company)
  const companyDisplay = company
    ? company.split('-').map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
    : ''

  return (
    <>
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
            <span className="text-gold font-sans text-xs tracking-[0.3em] uppercase">Claude Code</span>
            <span className="text-white/30 text-xs">|</span>
            <span className="text-white/50 font-sans text-xs">8 May 2026</span>
          </div>
          <h1 className="font-serif text-white text-4xl lg:text-6xl leading-tight mb-8">
            The Pre-Meeting Intelligence System
          </h1>
          <p className="text-white/70 font-sans text-lg leading-relaxed max-w-xl">
            How to walk into every sales meeting already knowing your prospect, their likely objections,
            and the one thing to open with. Four prompts. Ten minutes. No setup required.
          </p>
          <div className="mt-10 pt-8 border-t border-white/10 flex items-center gap-4 flex-wrap">
            <p className="text-white/40 font-sans text-sm">
              By <span className="text-white/70">Lubosi Kongwa</span>
            </p>
            <span className="text-white/20">|</span>
            <span className="font-sans text-xs text-white/40">10 min read</span>
            <span className="text-white/20">|</span>
            <span className="font-sans text-xs text-white/40">Works with free Claude.ai. No coding needed.</span>
          </div>
        </div>
      </section>

      {/* Hero visual */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 -mt-8 relative z-10">
          <div className="relative aspect-[16/9] overflow-hidden bg-navy border border-navy/10">
            <Image
              src="/images/blog/pre-meeting-hero.jpg"
              alt="Pre-Meeting Intelligence System: boardroom intelligence"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-navy/40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="font-serif text-white/50 text-3xl lg:text-5xl italic text-center px-12 leading-tight">
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
                'The 4 layers of intelligence every top sales team researches before a meeting',
                'Four complete Claude prompts you can copy and paste right now',
                'A real example brief, built using these prompts, so you know exactly what to expect',
                'How to make this a team system, not just a personal habit',
                'How to go one step further and run the whole thing from your terminal in one command',
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

          <h2 className="font-serif text-navy text-3xl lg:text-4xl mb-6 leading-tight">
            Most sales teams walk in blind. Here is what that costs.
          </h2>

          <p className="font-sans text-charcoal/80 text-base leading-relaxed mb-5">
            A sales director at a high-ticket B2B firm once told me his team spent about four minutes on research before a call. Four minutes. Scan a name, pull up a LinkedIn, and they were ready.
          </p>

          <p className="font-sans text-charcoal/80 text-base leading-relaxed mb-5">
            Their close rate was 18 percent. The firm down the road, who had a proper pre-meeting process, was closing at 34 percent. Same market. Same leads. Different preparation.
          </p>

          <div className="grid grid-cols-3 gap-0 border border-navy/10 my-10">
            <StatBlock number="100x" label="More likely to connect if you respond within 5 minutes of an enquiry (Harvard Business Review)" />
            <StatBlock number="28%" label="Higher conversion rate for reps who spend 6 or more minutes researching before a call (Gong.io)" />
            <StatBlock number="57%" label="Of the buying decision is made before the first real conversation (Forrester)" />
          </div>

          <p className="font-sans text-charcoal/80 text-base leading-relaxed mb-5">
            The problem was never that salespeople did not want to prepare. It was that good preparation used to take 45 minutes of scattered searching. LinkedIn. Google. Company news. Trying to piece together who you are meeting and why they might buy.
          </p>

          <Callout>
            With AI, the same preparation takes 10 minutes. And the output is better than anything a human could compile in 45.
          </Callout>

          <p className="font-sans text-charcoal/80 text-base leading-relaxed mb-10">
            This guide gives you the exact system. Four prompts. A process anyone on your team can follow in Claude.ai right now. And an optional terminal setup that runs the whole thing automatically before every meeting.
          </p>

          {/* Intelligence layers */}
          <h2 className="font-serif text-navy text-3xl lg:text-4xl mb-6 leading-tight mt-16">
            What to actually research before a sales call
          </h2>

          <p className="font-sans text-charcoal/80 text-base leading-relaxed mb-8">
            Most people research the wrong things. They find a job title and call it preparation. Real pre-meeting intelligence has four layers. You need all four.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-navy/10 mb-10">
            {[
              {
                num: '01', name: 'Professional Identity',
                find: 'Role, tenure, company size, recent promotions, what they are responsible for',
                why: 'Opens the conversation at their level. You do not explain what you do to someone who already knows the language.',
                where: 'LinkedIn, company website, press releases',
              },
              {
                num: '02', name: 'Personal Signals',
                find: 'Recent posts, shared articles, causes they support, career history patterns',
                why: 'Tells you what they actually care about, which is usually different from their job description.',
                where: 'LinkedIn activity, Twitter/X, company blog bylines',
              },
              {
                num: '03', name: 'Buying Triggers',
                find: 'Company growth signals, recent funding, expansion news, team changes, new initiatives',
                why: 'Someone who just opened a new office is in buying mode. Someone whose team just shrank is not.',
                where: 'Company news, LinkedIn company page, Crunchbase, press coverage',
              },
              {
                num: '04', name: 'Likely Objections',
                find: 'Previous tools they have used, public frustrations, industry-specific blockers',
                why: 'You anticipate the no before it arrives. The rep who names the objection first controls the conversation.',
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

          {/* PHASE 1: Claude.ai */}
          <div className="mt-20 mb-4 flex items-center gap-4">
            <div className="h-px flex-1 bg-navy/10" />
            <span className="font-sans text-xs tracking-[0.25em] uppercase text-gold">Phase 1</span>
            <div className="h-px flex-1 bg-navy/10" />
          </div>

          <h2 className="font-serif text-navy text-3xl lg:text-4xl mb-6 leading-tight">
            Start here. Just Claude.ai, nothing else.
          </h2>

          <p className="font-sans text-charcoal/80 text-base leading-relaxed mb-4">
            You do not need to install anything. Open{' '}
            <a href="https://claude.ai" target="_blank" rel="noopener noreferrer" className="text-navy underline underline-offset-2">claude.ai</a>{' '}
            in your browser. The free plan works. Run these four prompts in order, filling in the details for your specific prospect.
          </p>

          <ClaudeChat
            userMessage="I need to research a prospect before a sales call tomorrow."
            aiResponse="I can build a complete intelligence brief for you. Give me their name, company, what you are selling, and the meeting type, and I will cover everything you need to know before you say hello."
          />

          <div className="mt-10 space-y-16">

            <StepCard number={1} title="The Research Brief">
              <p className="font-sans text-charcoal/70 text-sm mb-4 leading-relaxed">
                Start with this. Fill in the placeholders with your prospect&apos;s details. This is the foundation everything else builds on.
              </p>
              <PromptBox
                label="Prompt 1 of 4: Research Brief"
                prompt={`Act as a world-class intelligence analyst preparing a briefing for a senior sales director going into a high-value meeting.

Your task: build a complete intelligence brief on the following prospect.

PROSPECT DETAILS:
- Full name: [PROSPECT FULL NAME]
- Company: [COMPANY NAME]
- Their role: [JOB TITLE]
- What I am selling: [YOUR PRODUCT OR SERVICE, one sentence]
- Deal size: [APPROXIMATE VALUE]
- Meeting type: [DISCOVERY / DEMO / CLOSE]

Using publicly available information (LinkedIn, company website, news, press releases, social media, industry publications), find and structure the following:

1. PROFESSIONAL SUMMARY: Role, tenure at company, career trajectory, what they are responsible for, notable achievements or promotions.

2. COMPANY CONTEXT: Company size, recent news, growth signals, funding, expansions, hires or layoffs, any major announcements in the last 6 months.

3. PERSONAL SIGNALS: Recent LinkedIn posts, articles they have shared, topics they engage with, anything that reveals what they actually care about beyond their job description.

4. LIKELY BUYING TRIGGERS: Based on company stage and signals, what problems are they likely trying to solve right now? What would make them say yes quickly?

5. POTENTIAL OBJECTIONS: Based on their background and company situation, what are the three most likely reasons they push back? Write each in their voice, as if they are saying it.

Be specific. Do not give me generic observations about their industry. Give me insights about this specific person and this specific company.`}
              />
              <div className="bg-cream px-5 py-4 text-sm">
                <p className="font-sans text-charcoal/70 leading-relaxed">
                  <strong className="text-navy">What you get:</strong> A structured brief covering their background, company situation, what they care about, and the objections you will likely face. Claude produces this in about 60 seconds.
                </p>
                <p className="font-sans text-gold text-xs mt-3 font-medium">
                  If Claude says it cannot find information, tell it to use what it knows about companies of that size and stage in that sector. It will still produce a useful profile.
                </p>
              </div>
            </StepCard>

            <StepCard number={2} title="Format It as a One-Page Brief">
              <p className="font-sans text-charcoal/70 text-sm mb-4 leading-relaxed">
                Paste the output from Prompt 1 into this. It formats everything into a clean brief your team can read in under 2 minutes.
              </p>
              <PromptBox
                label="Prompt 2 of 4: Format the Brief"
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

THINGS TO AVOID (2 to 3 bullets)
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
                  <strong className="text-navy">What you get:</strong> A formatted one-page brief. Print it. Pull it up on your phone before you go in. Share it with every closer on the meeting.
                </p>
                <p className="font-sans text-gold text-xs mt-3 font-medium">
                  Share this in Slack or email 30 minutes before the meeting. One message, no attachments.
                </p>
              </div>
            </StepCard>

            <StepCard number={3} title="Build the Objection Playbook">
              <p className="font-sans text-charcoal/70 text-sm mb-4 leading-relaxed">
                Run this after Prompt 2. You get a complete map of every likely objection with specific responses ready to go.
              </p>
              <PromptBox
                label="Prompt 3 of 4: Objection Map"
                prompt={`Based on the intelligence brief we have built, create a complete objection map for my meeting with [PROSPECT NAME].

For each of the three objections identified:

OBJECTION: [Write the objection in their voice]
UNDERLYING CONCERN: [What fear or priority is really driving this?]
HOW TO RESPOND: [Specific response, tied to what we know about them, not generic]
EVIDENCE TO USE: [What proof point, case study, or data point directly addresses this?]
RECOVERY IF THEY PERSIST: [If they push back again, what do you say next?]

Then add one final section:

THE QUESTION I SHOULD ASK
The single most powerful question I can ask in this meeting, based on what we know about their situation, that will reveal whether they are a serious buyer and move the conversation forward.

Write every response as if you are a seasoned enterprise sales coach preparing a top performer for the most important meeting of the quarter.`}
              />
              <div className="bg-cream px-5 py-4 text-sm">
                <p className="font-sans text-charcoal/70 leading-relaxed">
                  <strong className="text-navy">What you get:</strong> A full objection playbook with specific responses tailored to this prospect. Most salespeople improvise this in the moment. You will not.
                </p>
                <p className="font-sans text-gold text-xs mt-3 font-medium">
                  Read the objections out loud before the meeting. Saying them in their voice prepares you to recognise them when they come up.
                </p>
              </div>
            </StepCard>

            <StepCard number={4} title="Generate Your Openers">
              <p className="font-sans text-charcoal/70 text-sm mb-4 leading-relaxed">
                The first 60 seconds sets the tone for everything. This gives you five specific openers, each built from something real about this person.
              </p>
              <PromptBox
                label="Prompt 4 of 4: Conversation Openers"
                prompt={`Based on everything you know about [PROSPECT NAME] from the research, generate five conversation openers for my meeting.

Each opener must:
- Be based on a specific signal from the research (not generic)
- Sound completely natural, not scripted
- Lead naturally into a discovery question
- Work in the first 30 seconds of the meeting

Format each as:

OPENER [NUMBER]:
What to say: [The actual line, write it exactly as you would say it]
Why this works: [What signal from the research makes this land]
Follow-up question: [The natural next question after this opener]

After the five openers, give me:

THE POWER CLOSE LINE
If the meeting goes well and I want to propose a next step, give me one sentence, specific to this prospect and what we know about their situation, that moves them toward a decision without pressure.`}
              />
              <div className="bg-cream px-5 py-4 text-sm">
                <p className="font-sans text-charcoal/70 leading-relaxed">
                  <strong className="text-navy">What you get:</strong> Five openers, each tied to something real about the prospect. Plus a close line when you need it.
                </p>
                <p className="font-sans text-gold text-xs mt-3 font-medium">
                  Pick one opener and commit to it. Salespeople who go in with one clear opener are more confident than those holding five options.
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

          {/* Example brief */}
          <h2 className="font-serif text-navy text-3xl lg:text-4xl mb-6 leading-tight mt-20">
            What the output looks like
          </h2>

          <p className="font-sans text-charcoal/80 text-base leading-relaxed mb-8">
            Here is a real example brief, built using these four prompts, for a realistic prospect.
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
                <p className="font-sans text-xs text-charcoal/50">Director of Sales | Meridian Advisory Group, London | Meeting: Friday 10am | Discovery Call</p>
              </div>
              <div className="border-t border-navy/10 pt-6 space-y-5">
                {[
                  {
                    label: 'Executive Summary',
                    content: 'James has led sales at Meridian for 3 years after a decade in enterprise SaaS. The firm has grown from 40 to 90 consultants in 18 months, expanding into two new practice areas. He is under board pressure to improve pipeline quality and close velocity. They lost two major contracts last quarter to competitors who moved faster on proposals.',
                  },
                  {
                    label: 'Key Signals',
                    items: [
                      'Posted on LinkedIn three weeks ago about losing a high-value contract to a competitor who responded to the brief two days faster',
                      'Company opened a new Manchester office and added 8 senior consultants in Q1 2026',
                      'Reshared an article titled "Why CRM alone is not a sales strategy" with the comment "exactly this"',
                      'Has been using HubSpot for 2 years. Likely frustrated by its limitations at their current headcount and deal complexity',
                      'Spoke at a B2B growth summit last month. Referenced "inbound at scale" as the firm\'s biggest challenge for 2026',
                    ],
                  },
                  {
                    label: 'Likely Objections',
                    items: [
                      '"We already tried a call automation tool and the leads hated it." They likely tested a basic IVR, not a conversational AI.',
                      '"My closers are protective of their pipeline and won\'t want AI involved." Real concern given how relationship-driven consulting sales tends to be.',
                      '"We need to trial it before we can commit to anything." Standard delay tactic when budget approval requires a business case.',
                    ],
                  },
                  {
                    label: 'Conversation Openers',
                    items: [
                      '"I saw your post about the contract you lost last quarter. That exact problem is what we built AIRO to solve. Can I tell you what happened with another firm in a similar position?"',
                      '"You have nearly doubled headcount in 18 months. The challenge at that growth stage is usually that senior people spend too much time qualifying inbound rather than closing it."',
                      '"You mentioned inbound at scale at the summit last month. What does your current process look like from the moment a lead comes in to the moment a closer picks it up?"',
                    ],
                  },
                  {
                    label: 'Things to Avoid',
                    items: [
                      'Do not lead with technology. James is commercial, not technical. Lead with the business problem and the revenue impact.',
                      'Do not mention HubSpot as a weakness. He chose it and has his team on it. Position AIRO as additive, not a replacement.',
                      'Do not ask generic qualifying questions. He has been in enterprise sales for over a decade. He will disengage immediately.',
                    ],
                  },
                  {
                    label: 'Overall Assessment',
                    content: 'James is a serious buyer. His public post signals active frustration with a specific, known problem. The firm\'s growth means budget exists and the problem is only getting bigger. His caution will be about disruption to his team, not cost. Lead with the outcome and get to proof early. He will respond to numbers, not features.',
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

          {/* Team system */}
          <h2 className="font-serif text-navy text-3xl lg:text-4xl mb-6 leading-tight mt-16">
            Making this a team system, not a personal habit
          </h2>

          <p className="font-sans text-charcoal/80 text-base leading-relaxed mb-5">
            The most common mistake is running this yourself and never systemising it. A brief you run for yourself is useful. A brief that lands in every closer&apos;s inbox 30 minutes before every meeting is a competitive weapon.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-navy/10 mb-10">
            {[
              { label: 'Who runs it', content: 'A PA, sales coordinator, or SDR. Not the closer. The closer should receive the brief, not build it. This takes 10 minutes and any organised person can learn it in one session.' },
              { label: 'When to run it', content: '24 hours before every meeting above a set deal size. For anything under your threshold, run Prompts 1 and 2 only. For high-value meetings, run all four.' },
              { label: 'How to share it', content: 'Paste the formatted brief into a Slack DM or email. No attachments. No folders. The closer gets one message, reads it in 2 minutes, and goes in prepared.' },
              { label: 'What to do with it', content: 'Print it, or pull it up on your phone 5 minutes before the meeting. Read the conversation openers out loud in the car. Pick one and use it exactly as written.' },
            ].map((item) => (
              <div key={item.label} className="p-7 border-b border-r border-navy/10 last:border-0 [&:nth-child(even)]:border-r-0">
                <span className="font-sans text-xs uppercase tracking-widest text-gold block mb-2">{item.label}</span>
                <p className="font-sans text-sm text-charcoal/80 leading-relaxed">{item.content}</p>
              </div>
            ))}
          </div>

          {/* PHASE 2: Claude Code */}
          <div className="mt-20 mb-4 flex items-center gap-4">
            <div className="h-px flex-1 bg-navy/10" />
            <span className="font-sans text-xs tracking-[0.25em] uppercase text-gold">Phase 2</span>
            <div className="h-px flex-1 bg-navy/10" />
          </div>

          <h2 className="font-serif text-navy text-3xl lg:text-4xl mb-4 leading-tight">
            Want to run this in one command? Use Claude Code.
          </h2>

          <p className="font-sans text-charcoal/80 text-base leading-relaxed mb-5">
            Claude Code is Anthropic&apos;s terminal tool. Instead of pasting prompts one by one into a browser, you paste a single master prompt and it runs the full brief automatically. Takes about 90 seconds. You type the prospect name and get back a complete formatted document.
          </p>

          <p className="font-sans text-charcoal/80 text-base leading-relaxed mb-10">
            This is not about coding. You will not write a single line of code. It is just Claude running in your terminal instead of a browser tab.
          </p>

          <div className="space-y-10">

            <div>
              <p className="font-sans text-sm font-semibold text-navy mb-1">Step 1: Open your terminal</p>
              <p className="font-sans text-sm text-charcoal/60 mb-3">Your terminal is a text window where you type commands. Here is how to open it.</p>
              <OSTabs
                macContent={
                  <div className="my-0 border border-navy/10 bg-cream px-6 py-5 text-sm space-y-2">
                    <p className="font-sans text-charcoal/80 leading-relaxed">
                      Press <strong className="text-navy">Cmd + Space</strong> to open Spotlight Search. Type <strong className="text-navy">Terminal</strong> and press <strong className="text-navy">Enter</strong>. A window with a blinking cursor will appear. That is your terminal.
                    </p>
                  </div>
                }
                windowsContent={
                  <div className="my-0 border border-navy/10 bg-cream px-6 py-5 text-sm space-y-2">
                    <p className="font-sans text-charcoal/80 leading-relaxed">
                      Press <strong className="text-navy">Win + X</strong> and select <strong className="text-navy">Windows PowerShell</strong> (or Terminal) from the menu. A window starting with <code className="font-mono text-xs bg-navy/5 px-1">PS C:\Users\YourName&gt;</code> will appear. That is your terminal. If it says <code className="font-mono text-xs bg-navy/5 px-1">C:\</code> without the PS, you are in CMD. Close it and open PowerShell instead.
                    </p>
                  </div>
                }
              />
            </div>

            <div>
              <p className="font-sans text-sm font-semibold text-navy mb-1">Step 2: Install Claude Code</p>
              <p className="font-sans text-sm text-charcoal/60 mb-3">Copy the command below, paste it into your terminal, and press Enter. That is it.</p>
              <OSTabs
                macContent={
                  <MacTerminal lines={[
                    { type: 'comment', text: '# Paste this into Terminal and press Enter:' },
                    { type: 'prompt', text: 'curl -fsSL https://claude.ai/install.sh | bash' },
                    { type: 'output', text: 'Installing Claude Code...' },
                    { type: 'output', text: 'Claude Code successfully installed!' },
                    { type: 'comment', text: '# Done. Claude Code is now on your machine.' },
                  ]} />
                }
                windowsContent={
                  <WindowsTerminal lines={[
                    { type: 'comment', text: '# Paste this into PowerShell and press Enter:' },
                    { type: 'prompt', text: 'irm https://claude.ai/install.ps1 | iex' },
                    { type: 'output', text: 'Installing Claude Code...' },
                    { type: 'output', text: 'Claude Code successfully installed!' },
                    { type: 'comment', text: '# Close PowerShell, open a new window, then type: claude' },
                  ]} />
                }
              />
              <p className="font-sans text-xs text-charcoal/50 mt-2">
                On Mac, paste with <strong>Cmd + V</strong>. On Windows, paste with <strong>Ctrl + V</strong> or right-click inside the window.
              </p>
            </div>

            <div>
              <p className="font-sans text-sm font-semibold text-navy mb-1">Step 3: Log in with your Claude account</p>
              <p className="font-sans text-sm text-charcoal/60 mb-3">
                Run <InlineCode>claude</InlineCode> in your terminal. It opens a browser window to log in with your existing Claude.ai account. Takes 30 seconds. You only do this once.
              </p>
              <OSTabs
                macContent={
                  <MacTerminal lines={[
                    { type: 'prompt', text: 'claude' },
                    { type: 'output', text: 'Opening browser for authentication...' },
                    { type: 'output', text: 'Logged in as you@yourmail.com' },
                    { type: 'output', text: 'Claude Code is ready.' },
                  ]} />
                }
                windowsContent={
                  <WindowsTerminal lines={[
                    { type: 'prompt', text: 'claude' },
                    { type: 'output', text: 'Opening browser for authentication...' },
                    { type: 'output', text: 'Logged in as you@yourmail.com' },
                    { type: 'output', text: 'Claude Code is ready.' },
                  ]} />
                }
              />
              <p className="font-sans text-xs text-charcoal/50 mt-2">
                Claude Code requires a Claude.ai Pro or Max account (from $20/month). If you already use Claude, you likely qualify.
              </p>
            </div>

            <div>
              <p className="font-sans text-sm font-semibold text-navy mb-1">Step 4: Paste the master prompt</p>
              <p className="font-sans text-sm text-charcoal/60 mb-4">
                Once Claude Code is open, paste this prompt. Fill in your prospect&apos;s details at the bottom. Claude runs all four research phases in one go and produces a formatted brief.
              </p>
              <PromptBox
                label="Master Prompt: Paste into Claude Code"
                prompt={MASTER_PROMPT}
              />
              <div className="bg-cream px-5 py-4 text-sm">
                <p className="font-sans text-charcoal/70 leading-relaxed">
                  <strong className="text-navy">What happens:</strong> Claude Code runs the full 4-layer intelligence pipeline, synthesises the output, and formats a complete brief in your terminal. About 90 seconds start to finish.
                </p>
                <p className="font-sans text-gold text-xs mt-3 font-medium">
                  Save this prompt as a note or text file on your desktop. Before every meeting, open it, fill in the prospect details, paste into Claude Code.
                </p>
              </div>
            </div>

            <div>
              <p className="font-sans text-sm font-semibold text-navy mb-1">Optional: Use your own API key instead of a Pro account</p>
              <p className="font-sans text-sm text-charcoal/60 mb-3">
                If you want to run this without a Claude Pro subscription, you can use a direct Anthropic API key instead. Get one at{' '}
                <a href="https://console.anthropic.com" target="_blank" rel="noopener noreferrer" className="text-navy underline underline-offset-2">console.anthropic.com</a>.
                Then set it in your terminal like this:
              </p>
              <OSTabs
                macContent={
                  <MacTerminal lines={[
                    { type: 'comment', text: '# Add this to your ~/.zshrc file to make it permanent:' },
                    { type: 'prompt', text: 'echo \'export ANTHROPIC_API_KEY="sk-ant-your-key-here"\' >> ~/.zshrc' },
                    { type: 'prompt', text: 'source ~/.zshrc' },
                    { type: 'comment', text: '# Now claude will use your API key automatically.' },
                  ]} />
                }
                windowsContent={
                  <WindowsTerminal lines={[
                    { type: 'comment', text: '# Set your API key as a system environment variable:' },
                    { type: 'prompt', text: '[System.Environment]::SetEnvironmentVariable("ANTHROPIC_API_KEY","sk-ant-your-key","User")' },
                    { type: 'comment', text: '# Restart PowerShell after running this.' },
                  ]} />
                }
              />
              <p className="font-sans text-xs text-charcoal/50 mt-2">
                Pay-as-you-go pricing is typically under $0.10 per brief. A hundred briefs a month costs less than a coffee.
              </p>
            </div>

          </div>

          {/* Personal CTA */}
          <div className="my-16 border border-gold/40 bg-cream p-10">
            <p className="font-sans text-xs tracking-[0.25em] uppercase text-gold mb-4">Want help running this?</p>
            <h2 className="font-serif text-navy text-3xl lg:text-4xl leading-tight mb-4">
              I will walk through this system with you, live on a call.
            </h2>
            <p className="font-sans text-charcoal/80 text-base leading-relaxed mb-3 max-w-xl">
              If you want to get this running for your team and would rather not figure it out alone, I am happy to jump on a call with you. We go through the system together, build your first brief live, and make sure your team knows how to use it before we hang up.
            </p>
            <p className="font-sans text-charcoal/80 text-base leading-relaxed mb-8 max-w-xl">
              No agency pitch. No slide deck. Just a working session that ends with your team actually prepared for their next meeting.
            </p>
            <a
              href="https://cal.com/kongwatech/free-consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-navy text-white font-sans text-sm px-8 py-4 hover:bg-navy/85 transition-colors mb-4"
            >
              Book a Free Call with Lubosi
            </a>
            <p className="font-sans text-xs text-charcoal/40">15 minutes. Free. No commitment.</p>
          </div>

          {/* AIRO full product section */}
          <div className="my-16 border-t border-navy/10 pt-16">

            <span className="font-sans text-xs tracking-[0.25em] uppercase text-gold block mb-6">Take it further with AIRO by Velto</span>

            <h2 className="font-serif text-navy text-3xl lg:text-4xl mb-6 leading-tight">
              The intelligence system gets you ready for the meeting. AIRO makes sure you get the meeting in the first place.
            </h2>

            <div className="border border-navy/10 bg-cream p-8 mb-10">
              <p className="font-sans text-xs text-gold uppercase tracking-widest mb-4">What the intelligence system gets you</p>
              <ul className="space-y-2">
                {[
                  'A one-page prospect brief with background, company signals, and buying triggers',
                  'Three objections mapped in the prospect\'s own voice, with specific responses and evidence ready',
                  'Five personalised conversation openers tied to real signals from the research',
                  'A single close line written for this specific prospect and their situation',
                  'The whole thing produced in under 10 minutes, before every meeting, without hiring anyone new',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 font-sans text-sm text-charcoal/80">
                    <span className="text-gold font-bold mt-0.5 flex-shrink-0">+</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="font-sans text-sm text-charcoal/60 leading-relaxed mt-5 pt-5 border-t border-navy/10">
                Used consistently across your team, this system will move your close rate. That is not a prediction. That is what preparation at this level does.
              </p>
            </div>

            <p className="font-sans text-charcoal/80 text-base leading-relaxed mb-5">
              But here is the problem. This system assumes you got the meeting. It assumes the lead came in, someone called them quickly, qualified them properly, and handed them to your closer with full context.
            </p>

            <p className="font-sans text-charcoal/80 text-base leading-relaxed mb-5">
              For most sales teams, that is not what happens.
            </p>

            {/* Problem framing */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-navy/10 mb-8">
              {[
                {
                  label: 'The follow-up problem',
                  content: 'Leads come in. They sit in a CRM. Someone follows up when they get around to it. By then the prospect has already spoken to someone else and moved on.',
                },
                {
                  label: 'The volume problem',
                  content: 'Too many leads means your closers spend their day triaging instead of selling. The buyers get the same attention as the time-wasters. Both get lost.',
                },
                {
                  label: 'The speed problem',
                  content: 'Companies that respond within 5 minutes are 100 times more likely to connect than those who respond in 30. No human sales team can maintain that consistently.',
                },
                {
                  label: 'The handover problem',
                  content: 'Even when a lead is followed up quickly, the closer often receives no context. They go into the conversation blind, with no intelligence and no preparation.',
                },
              ].map((item) => (
                <div key={item.label} className="p-7 border-b border-r border-navy/10 [&:nth-child(even)]:border-r-0 last:border-b-0 [&:nth-last-child(2)]:border-b-0">
                  <span className="font-sans text-xs uppercase tracking-widest text-gold block mb-2">{item.label}</span>
                  <p className="font-sans text-sm text-charcoal/80 leading-relaxed">{item.content}</p>
                </div>
              ))}
            </div>

            <Callout>
              If you suffer from any of those problems, the intelligence system alone will not fix them. You need something upstream.
            </Callout>

            <p className="font-sans text-charcoal/80 text-base leading-relaxed mb-5">
              I am in partnership with Velto, a UK AI product company. Together we built AIRO to solve exactly these problems. If you want to take this further and install an AI digital sales employee that has been proven across different industries, here is everything.
            </p>

            <div className="border border-navy/15 bg-cream p-8 mb-8">
              <p className="font-serif text-navy text-xl leading-snug mb-3">
                Companies that respond to an inbound lead within 5 minutes are 100 times more likely to connect than those who respond in 30 minutes.
              </p>
              <p className="font-sans text-xs text-charcoal/50">Harvard Business Review, Lead Response Management Study</p>
            </div>

            <Callout>
              The teams winning high-ticket deals right now are not just better prepared. They are faster. They have removed the human bottleneck from the first conversation entirely.
            </Callout>

            {/* What AIRO is */}
            <div className="border border-navy/15 overflow-hidden my-10">
              <div className="bg-navy px-8 py-6">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <p className="font-serif text-white text-3xl mb-1">AIRO</p>
                    <p className="font-sans text-gold text-xs tracking-widest uppercase">By Velto</p>
                  </div>
                  <p className="font-sans text-white/50 text-sm max-w-sm leading-relaxed pt-1">
                    A voice AI built for high-value sales environments. Developed by Velto, a UK AI product company. Brought to market in partnership with Kongwa Tech.
                  </p>
                </div>
              </div>
              <div className="p-8 bg-white">
                <p className="font-sans text-charcoal/80 text-base leading-relaxed mb-6">
                  AIRO contacts every inbound lead within 60 seconds of their enquiry. It has a real, natural conversation. Not a phone tree, not a script. It listens, qualifies, handles early objections, and identifies buying intent. When the conversation is done, your closer receives a warm handover with everything they need to close.
                </p>
                <p className="font-sans text-charcoal/80 text-base leading-relaxed mb-8">
                  Your salespeople only speak to people who are ready to buy. No more chasing cold leads. No more losing deals because nobody called back in time.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border border-navy/10">
                  {[
                    {
                      cap: 'Responds in 60 seconds',
                      detail: 'Every inbound lead gets a call within 60 seconds, day or night. No human bottleneck. No missed enquiries.',
                    },
                    {
                      cap: 'Natural voice conversation',
                      detail: 'AIRO sounds like a person. It handles questions, pauses, and interruptions. Prospects do not know they are speaking to an AI until they ask.',
                    },
                    {
                      cap: 'Qualifies on your criteria',
                      detail: 'You define what a qualified lead looks like. AIRO asks the right questions, captures the answers, and scores the lead before handover.',
                    },
                    {
                      cap: 'Warm handover to your closer',
                      detail: 'When the lead is qualified, your closer gets a full summary: what was said, what they want, and the best next step.',
                    },
                    {
                      cap: 'Runs 24 / 7',
                      detail: 'AIRO handles leads at 2am on a Sunday with the same quality as a Monday morning. Your pipeline never sleeps.',
                    },
                    {
                      cap: 'Built for high-ticket, high-inbound sales',
                      detail: 'Consulting, financial services, SaaS, recruitment, agencies. Any environment where deal size is significant and inbound volume creates a bottleneck.',
                    },
                    {
                      cap: 'Custom sales dashboard',
                      detail: 'The head of sales gets a live overview of the pipeline. Every lead, every conversation, every handover. Full visibility without chasing individual reps for updates.',
                    },
                    {
                      cap: 'Complements your marketing team',
                      detail: 'AIRO captures every inbound lead your marketing generates, responds immediately, and feeds qualified buyers into the pipeline. No lead falls through the gap between marketing and sales.',
                    },
                  ].map((item) => (
                    <div key={item.cap} className="p-6 border-b border-r border-navy/10 [&:nth-child(even)]:border-r-0 last:border-b-0 [&:nth-last-child(2)]:border-b-0">
                      <p className="font-sans text-xs uppercase tracking-widest text-gold mb-2">{item.cap}</p>
                      <p className="font-sans text-sm text-charcoal/70 leading-relaxed">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Results */}
            <h3 className="font-serif text-navy text-2xl mb-6 mt-12">What AIRO has done for real clients</h3>
            <div className="space-y-4 mb-12">
              {[
                {
                  result: '576 qualified buyers recovered',
                  context: 'From a dead pipeline at a UK high-ticket sales firm over 14 months. Average deal size: 2.5 million per transaction. These were leads nobody planned to follow up on.',
                },
                {
                  result: '2 million in qualified pipeline in 24 hours',
                  context: 'From leads that had been written off completely. AIRO called them overnight and recovered serious buyers by morning. No human was involved until handover.',
                },
                {
                  result: "Working with Idris Elba's media team",
                  context: 'Handling inbound enquiries and qualifying leads for high-volume entertainment and brand partnership conversations. AIRO manages the volume so the team stays focused on the right conversations.',
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

            {/* Audio */}
            <div className="border border-navy/15 bg-navy mb-10">
              <div className="p-8">
                <span className="font-sans text-xs tracking-widest uppercase text-gold block mb-4">Hear it before you judge it</span>
                <h3 className="font-serif text-white text-2xl mb-3 leading-tight">
                  Two real calls. Handled entirely by AIRO.
                </h3>
                <p className="font-sans text-white/60 text-sm leading-relaxed mb-8 max-w-lg">
                  No human agent. No script reading. These are inbound enquiries handled start to finish by AIRO. The first call shows a prospect qualifying themselves without any pressure. The second answers the question most people ask when they first hear about this product.
                </p>

                <div className="space-y-6">
                  <div className="border border-white/10 p-6">
                    <span className="font-sans text-xs uppercase tracking-widest text-gold/70 block mb-2">Recording 01</span>
                    <p className="font-serif text-white text-lg mb-1">A buyer qualifies themselves. No closer required.</p>
                    <p className="font-sans text-white/40 text-xs mb-4">Listen for the moment the prospect starts describing their own buying timeline without being asked.</p>
                    <audio controls className="w-full" style={{ accentColor: '#B89A5A' }}>
                      <source src="https://airo.velto.ai/audio/wire-transfer.mp3" type="audio/mpeg" />
                    </audio>
                  </div>

                  <div className="border border-white/10 p-6">
                    <span className="font-sans text-xs uppercase tracking-widest text-gold/70 block mb-2">Recording 02</span>
                    <p className="font-serif text-white text-lg mb-1">&ldquo;You&apos;re not AI, are you?&rdquo;</p>
                    <p className="font-sans text-white/40 text-xs mb-4">The question every sceptic asks. This is what AIRO says back.</p>
                    <audio controls className="w-full" style={{ accentColor: '#B89A5A' }}>
                      <source src="https://airo.velto.ai/audio/not-ai.mp3" type="audio/mpeg" />
                    </audio>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Final CTA */}
          <div className="bg-navy p-10 mt-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-sans text-xs tracking-widest uppercase text-gold">AIRO by Velto</span>
              <span className="text-white/20 text-xs">|</span>
              <span className="font-sans text-xs text-white/40">In partnership with Kongwa Tech</span>
            </div>
            <h2 className="font-serif text-white text-3xl lg:text-4xl leading-tight mb-4">
              Find out if AIRO is a fit for your business.
            </h2>
            <p className="font-sans text-white/60 text-base leading-relaxed mb-3 max-w-lg">
              The intelligence system in this guide is yours to use today. If the problems above sound familiar and you want to go further, book a call with me and the Velto team.
            </p>
            <p className="font-sans text-white/60 text-base leading-relaxed mb-3 max-w-lg">
              We will look at your pipeline, your current follow-up process, and your deal volume. Then we tell you honestly whether AIRO makes sense for your business and what it would recover.
            </p>
            <p className="font-sans text-white/60 text-base leading-relaxed mb-8 max-w-lg">
              No pitch. No slide deck. Just the numbers, and a straight answer on whether this is the right move for you right now.
            </p>
            <a
              href="https://airo.velto.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gold text-white font-sans text-sm px-8 py-4 hover:bg-gold-dark transition-colors mb-4"
            >
              Book a Call with Lubosi and the Velto Team
            </a>
            <p className="font-sans text-xs text-white/30">No commitment. We tell you whether it is a fit before anything else.</p>
          </div>

          {/* Author note */}
          <div className="mt-16 pt-10 border-t border-navy/10">
            <p className="font-sans text-xs text-charcoal/40 uppercase tracking-widest mb-3">A note from the author</p>
            <p className="font-serif text-navy text-lg leading-relaxed max-w-2xl italic">
              &ldquo;I built this guide because most sales teams are one good process away from a real improvement in their close rate. The intelligence system is that process. AIRO is the layer that lets you run it at scale, without adding headcount.&rdquo;
            </p>
            <p className="font-sans text-sm text-charcoal/60 mt-4">Lubosi Kongwa, in partnership with Velto</p>
          </div>

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
