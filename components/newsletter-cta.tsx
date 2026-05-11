'use client'

import { useState } from 'react'

export default function NewsletterCta() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'pending' | 'done' | 'error'>('idle')
  const [message, setMessage] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    setMessage('')

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const data = await res.json() as { success: boolean; status?: string; error?: string }

      if (!res.ok || !data.success) throw new Error(data.error || 'Unable to subscribe')

      setStatus(data.status === 'active' ? 'done' : 'pending')
    } catch (err) {
      setStatus('error')
      setMessage(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    }
  }

  if (status === 'done') {
    return (
      <div className="border border-gold/30 bg-cream p-8">
        <p className="font-serif text-navy text-xl mb-3">So glad to have you.</p>
        <p className="font-sans text-sm text-charcoal/65 leading-relaxed">
          All of your free resources will be sent to your inbox in the next few minutes. If you do not see them straight away, please check your spam folder. Any issues at all, reach out directly at{' '}
          <a href="mailto:lubosi@kongwatech.com" className="text-navy underline">lubosi@kongwatech.com</a>.
        </p>
      </div>
    )
  }

  if (status === 'pending') {
    return (
      <div className="border border-gold/30 bg-cream p-8">
        <p className="font-serif text-navy text-xl mb-3">Almost there.</p>
        <p className="font-sans text-sm text-charcoal/65 leading-relaxed">
          Check your inbox to confirm your subscription. Once confirmed, your free resources will arrive within a few minutes. If you do not see anything, check your spam folder or reach out at{' '}
          <a href="mailto:lubosi@kongwatech.com" className="text-navy underline">lubosi@kongwatech.com</a>.
        </p>
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
      {status === 'error' && (
        <p className="mt-3 font-sans text-xs text-red-700">{message}</p>
      )}
    </div>
  )
}
