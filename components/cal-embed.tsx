'use client'

import { useEffect, useRef } from 'react'

interface CalEmbedProps {
  calLink: string
  namespace: string
}

export default function CalEmbed({ calLink, namespace }: CalEmbedProps) {
  const elementId = `my-cal-inline-${namespace}`
  const injected = useRef(false)

  useEffect(() => {
    if (injected.current) return
    injected.current = true

    // Use Cal.com's exact self-contained boilerplate, injected as a script tag.
    // The boilerplate queues calls internally and loads embed.js itself,
    // so there is no race condition.
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.innerHTML = `
      (function (C, A, L) {
        let p = function (a, ar) { a.q.push(ar); };
        let d = C.document;
        C.Cal = C.Cal || function () {
          let cal = C.Cal; let ar = arguments;
          if (!cal.loaded) {
            cal.ns = {}; cal.q = cal.q || [];
            d.head.appendChild(d.createElement("script")).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api = function () { p(api, arguments); };
            const namespace = ar[1];
            api.q = api.q || [];
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else p(cal, ar);
            return;
          }
          p(cal, ar);
        };
      })(window, "https://app.cal.com/embed/embed.js", "init");

      Cal("init", "${namespace}", { origin: "https://app.cal.com" });

      Cal.ns["${namespace}"]("inline", {
        elementOrSelector: "#${elementId}",
        config: { layout: "month_view", useSlotsViewOnSmallScreen: "true" },
        calLink: "${calLink}",
      });

      Cal.ns["${namespace}"]("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    `
    document.body.appendChild(script)

    return () => {
      try { script.remove() } catch {}
      injected.current = false
    }
  }, [calLink, namespace, elementId])

  return (
    <div
      id={elementId}
      className="w-full border border-gray-100"
      style={{ width: '100%', height: '100%', minHeight: '700px', overflow: 'scroll' }}
    />
  )
}
