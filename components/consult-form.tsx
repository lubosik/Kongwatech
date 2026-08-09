'use client'

import { useState } from 'react'

type FormStatus = 'idle' | 'sending' | 'success' | 'error'

const inputClass =
  'mt-2 min-h-12 w-full border border-navy/20 bg-white px-4 py-3 text-sm text-charcoal outline-none transition-colors placeholder:text-charcoal/35 focus:border-gold focus:ring-2 focus:ring-gold/20'

export default function ConsultForm() {
  const [status, setStatus] = useState<FormStatus>('idle')

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('sending')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: new FormData(event.currentTarget),
      })

      if (!response.ok) throw new Error('Submission failed')
      const result = (await response.json()) as { success?: boolean }
      if (!result.success) throw new Error('Submission failed')
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="border-l-4 border-gold bg-white p-7 sm:p-9" role="status">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">Project received</p>
        <h2 className="mt-3 font-serif text-3xl text-navy">Thank you for the context.</h2>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-charcoal/65">
          Lubosi will review what you are building and reply by email if there is a strong operating fit.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-7" noValidate={false}>
      <input type="hidden" name="access_key" value="e8144041-9073-44fa-bba9-3b9089fc8511" />
      <input type="hidden" name="subject" value="New project consultation: Kongwa Tech" />
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid gap-6 sm:grid-cols-2">
        <label className="text-xs font-medium uppercase tracking-[0.14em] text-charcoal/60" htmlFor="full-name">
          Full name <span aria-hidden="true">*</span>
          <input id="full-name" type="text" name="name" autoComplete="name" required className={inputClass} />
        </label>
        <label className="text-xs font-medium uppercase tracking-[0.14em] text-charcoal/60" htmlFor="email">
          Email <span aria-hidden="true">*</span>
          <input id="email" type="email" name="email" autoComplete="email" required className={inputClass} />
        </label>
        <label className="text-xs font-medium uppercase tracking-[0.14em] text-charcoal/60" htmlFor="company">
          Company / Venture <span aria-hidden="true">*</span>
          <input id="company" type="text" name="company" autoComplete="organization" required className={inputClass} />
        </label>
        <label className="text-xs font-medium uppercase tracking-[0.14em] text-charcoal/60" htmlFor="role">
          Your role <span aria-hidden="true">*</span>
          <input id="role" type="text" name="role" autoComplete="organization-title" required className={inputClass} />
        </label>
      </div>

      <label className="block text-xs font-medium uppercase tracking-[0.14em] text-charcoal/60" htmlFor="building">
        What are you building? <span aria-hidden="true">*</span>
        <textarea id="building" name="building" required rows={5} className={`${inputClass} resize-y`} />
      </label>

      <label className="block text-xs font-medium uppercase tracking-[0.14em] text-charcoal/60" htmlFor="stage">
        What stage is it at? <span aria-hidden="true">*</span>
        <select id="stage" name="stage" required defaultValue="" className={inputClass}>
          <option value="" disabled>Select a stage</option>
          <option>Idea / exploration</option>
          <option>Prototype / pre-launch</option>
          <option>Live and early-stage</option>
          <option>Growing</option>
          <option>Established / transforming</option>
        </select>
      </label>

      <label className="block text-xs font-medium uppercase tracking-[0.14em] text-charcoal/60" htmlFor="priority">
        Most important problem or opportunity right now <span aria-hidden="true">*</span>
        <textarea id="priority" name="priority" required rows={4} className={`${inputClass} resize-y`} />
      </label>

      <label className="block text-xs font-medium uppercase tracking-[0.14em] text-charcoal/60" htmlFor="contribution">
        What would you want Kongwa Tech to contribute? <span aria-hidden="true">*</span>
        <textarea id="contribution" name="contribution" required rows={4} className={`${inputClass} resize-y`} />
      </label>

      <label className="flex min-h-12 cursor-pointer items-start gap-3 border border-navy/15 bg-cream px-4 py-4 text-sm leading-relaxed text-charcoal/70">
        <input type="checkbox" name="equity_aligned" value="Open to discussion" className="mt-1 h-4 w-4 accent-[#B89A5A]" />
        <span>I am open to discussing a strategic or equity-aligned partnership structure.</span>
      </label>

      <label className="block text-xs font-medium uppercase tracking-[0.14em] text-charcoal/60" htmlFor="referral">
        How did you find us?
        <input id="referral" type="text" name="referral" className={inputClass} />
      </label>

      {status === 'error' && (
        <p className="border-l-4 border-red-600 bg-red-50 p-4 text-sm text-red-800" role="alert">
          The form could not be sent. Please try again, or email lubosi@kongwatech.com.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="inline-flex min-h-12 w-full items-center justify-center bg-gold px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-gold-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold disabled:cursor-wait disabled:opacity-60 sm:w-auto"
      >
        {status === 'sending' ? 'Sending…' : 'Send Project'}
      </button>
    </form>
  )
}
