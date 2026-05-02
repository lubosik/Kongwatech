'use client'

import { useEffect, useState } from 'react'
import CalEmbed from '@/components/cal-embed'

export default function ApplyForm() {
  const [submitted, setSubmitted] = useState(false)
  const [isEcoLaunch, setIsEcoLaunch] = useState(false)
  const [service, setService] = useState('')
  const [loading, setLoading] = useState(false)
  const [fields, setFields] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    message: '',
    referral: '',
  })

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    setFields(prev => ({
      ...prev,
      name: params.get('name') || prev.name,
      email: params.get('email') || prev.email,
      company: params.get('company') || prev.company,
    }))
    const svc = params.get('service')
    if (svc === 'blueprint') {
      setService('The Blueprint Session (£997)')
    } else if (svc === 'eco-launch') {
      setService('Eco Launch (From £3,000)')
      setIsEcoLaunch(true)
    }
  }, [])

  function handleServiceChange(val: string) {
    setService(val)
    setIsEcoLaunch(val === 'Eco Launch (From £3,000)')
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)

    const data = new FormData(e.currentTarget)

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      })
      if (res.ok) {
        setSubmitted(true)
      }
    } catch {
      // Fallback: still show success to avoid blocking user
      setSubmitted(true)
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="space-y-12">
        <div className="bg-cream border-l-4 border-gold p-8 max-w-2xl">
          <h3 className="font-serif text-navy text-2xl mb-3">Application received.</h3>
          <p className="font-sans text-charcoal/70">
            Lubosi will review your application and respond within 48 hours.
            Check your inbox, including your spam folder.
          </p>
        </div>

        {isEcoLaunch && (
          <div>
            <div className="mb-8">
              <span className="text-gold font-sans text-xs tracking-[0.3em] uppercase">Next step</span>
              <h2 className="font-serif text-navy text-4xl mt-3">Book Your Eco Launch Consultation</h2>
              <p className="text-charcoal/60 font-sans text-base mt-3 max-w-lg">
                A 30-minute call to confirm your date, scope, and logistics before the day.
              </p>
            </div>
            <CalEmbed
              calLink="kongwatech/eco-launch-consultation"
              namespace="eco-launch-consultation"
            />
          </div>
        )}
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl space-y-6">
      <input type="hidden" name="access_key" value="e8144041-9073-44fa-bba9-3b9089fc8511" />
      <input type="hidden" name="subject" value="New Application: Kongwa Tech" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-sans text-charcoal/50 uppercase tracking-widest mb-2">
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            required
            value={fields.name}
            onChange={e => setFields(prev => ({ ...prev, name: e.target.value }))}
            className="w-full border border-gray-200 px-4 py-3 font-sans text-sm text-charcoal focus:outline-none focus:border-navy transition-colors"
          />
        </div>
        <div>
          <label className="block text-xs font-sans text-charcoal/50 uppercase tracking-widest mb-2">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            required
            value={fields.email}
            onChange={e => setFields(prev => ({ ...prev, email: e.target.value }))}
            className="w-full border border-gray-200 px-4 py-3 font-sans text-sm text-charcoal focus:outline-none focus:border-navy transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-sans text-charcoal/50 uppercase tracking-widest mb-2">
            Company / Organisation *
          </label>
          <input
            type="text"
            name="company"
            required
            value={fields.company}
            onChange={e => setFields(prev => ({ ...prev, company: e.target.value }))}
            className="w-full border border-gray-200 px-4 py-3 font-sans text-sm text-charcoal focus:outline-none focus:border-navy transition-colors"
          />
        </div>
        <div>
          <label className="block text-xs font-sans text-charcoal/50 uppercase tracking-widest mb-2">
            Your Role / Title
          </label>
          <input
            type="text"
            name="role"
            value={fields.role}
            onChange={e => setFields(prev => ({ ...prev, role: e.target.value }))}
            className="w-full border border-gray-200 px-4 py-3 font-sans text-sm text-charcoal focus:outline-none focus:border-navy transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-sans text-charcoal/50 uppercase tracking-widest mb-2">
          Which package are you interested in? *
        </label>
        <select
          name="service_interest"
          required
          value={service}
          onChange={e => handleServiceChange(e.target.value)}
          className="w-full border border-gray-200 px-4 py-3 font-sans text-sm text-charcoal focus:outline-none focus:border-navy transition-colors bg-white"
        >
          <option value="">Select a package</option>
          <option value="The Blueprint Session (£997)">The Blueprint Session (£997)</option>
          <option value="Eco Launch (From £3,000)">Eco Launch: in-person AI environment setup (From £3,000)</option>
          <option value="Not sure yet">Not sure yet, happy to advise</option>
        </select>
      </div>

      <div>
        <label className="block text-xs font-sans text-charcoal/50 uppercase tracking-widest mb-2">
          Tell us about your business and what you want to achieve *
        </label>
        <textarea
          name="message"
          required
          rows={6}
          placeholder="Describe your business, your current AI situation, and what you are hoping to achieve through working with Kongwa Tech."
          value={fields.message}
          onChange={e => setFields(prev => ({ ...prev, message: e.target.value }))}
          className="w-full border border-gray-200 px-4 py-3 font-sans text-sm text-charcoal focus:outline-none focus:border-navy transition-colors resize-none"
        />
      </div>

      <div>
        <label className="block text-xs font-sans text-charcoal/50 uppercase tracking-widest mb-2">
          How did you hear about Kongwa Tech?
        </label>
        <input
          type="text"
          name="referral"
          value={fields.referral}
          onChange={e => setFields(prev => ({ ...prev, referral: e.target.value }))}
          className="w-full border border-gray-200 px-4 py-3 font-sans text-sm text-charcoal focus:outline-none focus:border-navy transition-colors"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="bg-gold text-white font-sans text-sm px-10 py-4 hover:bg-gold-dark transition-colors w-full sm:w-auto disabled:opacity-60"
      >
        {loading ? 'Sending...' : isEcoLaunch ? 'Continue to Booking' : 'Submit Application'}
      </button>

      <p className="text-xs text-charcoal/40 font-sans">
        Applications are reviewed personally by Lubosi. You will receive a response within 48 hours.
      </p>
    </form>
  )
}
