'use client'

import { useState } from 'react'

const BEEHIIV_FALLBACK = 'https://some-free-game.beehiiv.com'

export default function NewsletterCta() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'subscribed' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const data = await res.json() as { success: boolean; status?: string; error?: string }

      if (!res.ok || !data.success) throw new Error(data.error || 'Unable to subscribe')

      setStatus('subscribed')
    } catch (err) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Unable to subscribe')
    }
  }

  if (status === 'subscribed') {
    return (
      <div className="border border-gold/30 bg-cream p-8">
        <p className="font-serif text-navy text-xl mb-3">You are subscribed. Welcome.</p>
        <p className="font-sans text-sm text-charcoal/65 leading-relaxed">
          Your free resources are on their way to your inbox now. If you do not see them within a few minutes, check your spam folder. Any issues at all, reach out directly at{' '}
          <a href="mailto:lubosi@kongwatech.com" className="text-navy underline">lubosi@kongwatech.com</a>.
        </p>
      </div>
    )
  }

  if (status === 'error') {
    return (
      <div className="border border-gold/30 bg-cream p-8">
        <p className="font-serif text-navy text-xl mb-3">Something went wrong.</p>
        <p className="font-sans text-sm text-charcoal/65 leading-relaxed">
          Oops, we ran into an error subscribing you. Head to{' '}
          <a href={BEEHIIV_FALLBACK} target="_blank" rel="noopener noreferrer" className="text-navy underline">
            some-free-game.beehiiv.com
          </a>{' '}
          to get subscribed directly. Any issues, reach out at{' '}
          <a href="mailto:lubosi@kongwatech.com" className="text-navy underline">lubosi@kongwatech.com</a>.
        </p>
        {errorMsg && <p className="mt-3 font-sans text-xs text-charcoal/40">{errorMsg}</p>}
      </div>
    )
  }

  return (
    <div className="border border-gray-100 bg-cream p-8">
      <p className="font-sans text-xs text-gold uppercase tracking-[0.25em] mb-3">Some Free Game</p>
      <p className="font-serif text-navy text-2xl mb-3 leading-snug">
        Get this in your inbox every week.
      </p>
      <p className="font-sans text-sm text-charcoal/65 leading-relaxed mb-5">
        Subscribe free and receive the full guide pack: prompt engineering basics, hyper-realistic AI image creation, AI video workflows, an SEO playbook for ranking new sites fast, and the viral clip identification formula.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          required
          placeholder="Your email address"
          value={email}
          onChange={e => setEmail(e.target.value)}
          disabled={status === 'loading'}
          className="flex-1 border border-gray-200 px-4 py-3 font-sans text-sm focus:outline-none focus:border-navy transition-colors bg-white disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="bg-gold text-white font-sans text-sm px-6 py-3 hover:bg-gold-dark transition-colors disabled:opacity-60 whitespace-nowrap"
        >
          {status === 'loading' ? 'One moment...' : 'Subscribe free'}
        </button>
      </form>
    </div>
  )
}
