'use client'

import { useEffect, useRef } from 'react'

interface CalEmbedProps {
  calLink: string
  namespace: string
}

type CalInstance = {
  (...args: unknown[]): void
  ns: Record<string, (...args: unknown[]) => void>
}

export default function CalEmbed({ calLink, namespace }: CalEmbedProps) {
  const initialized = useRef(false)
  const embedId = `cal-embed-${namespace}`

  useEffect(() => {
    if (initialized.current) return
    initialized.current = true

    function init(Cal: CalInstance) {
      Cal('init', namespace, { origin: 'https://app.cal.com' })
      Cal.ns[namespace]('inline', {
        elementOrSelector: `#${embedId}`,
        config: { layout: 'month_view' },
        calLink,
      })
      Cal.ns[namespace]('ui', {
        hideEventTypeDetails: false,
        layout: 'month_view',
        styles: { branding: { brandColor: '#B89A5A' } },
      })
    }

    const w = window as typeof window & { Cal?: CalInstance }

    if (w.Cal) {
      init(w.Cal)
      return
    }

    const script = document.createElement('script')
    script.src = 'https://app.cal.com/embed/embed.js'
    script.async = true
    script.onload = () => {
      const ww = window as typeof window & { Cal?: CalInstance }
      if (ww.Cal) init(ww.Cal)
    }
    document.head.appendChild(script)

    return () => {
      try { script.remove() } catch {}
      initialized.current = false
    }
  }, [calLink, namespace, embedId])

  return (
    <div
      id={embedId}
      className="w-full border border-gray-100 rounded-sm overflow-hidden"
      style={{ minHeight: '700px' }}
    />
  )
}
