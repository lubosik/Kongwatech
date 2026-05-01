import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Apply to Work with Lubosi | Kongwa Tech',
  description:
    'Submit an application to work with Lubosi Kongwa. Book a 15-minute discovery call or send your application directly. Applications reviewed within 48 hours.',
}

export default function ApplyPage({
  searchParams,
}: {
  searchParams: { success?: string }
}) {
  const success = searchParams.success === 'true'

  return (
    <>
      {/* Cal.com embed */}
      <Script src="https://app.cal.com/embed/embed.js" strategy="lazyOnload" />
      <Script id="cal-init" strategy="lazyOnload">{`
        (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, [L, ar[1], ar[2]])}else{p(cal, ar)};return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
        Cal("init", "free-consultation", {origin:"https://app.cal.com"});
        Cal.ns["free-consultation"]("inline", {
          elementOrSelector:"#cal-inline-embed",
          config: {"layout":"month_view"},
          calLink: "kongwatech/free-consultation",
        });
        Cal.ns["free-consultation"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
      `}</Script>
      <Script id="prefill-form" strategy="lazyOnload">{`
        (function() {
          var params = new URLSearchParams(window.location.search);
          var nameEl = document.querySelector('[name="name"]');
          var emailEl = document.querySelector('[name="email"]');
          var companyEl = document.querySelector('[name="company"]');
          var serviceEl = document.querySelector('[name="service_interest"]');
          if (nameEl && params.get('name')) nameEl.value = params.get('name');
          if (emailEl && params.get('email')) emailEl.value = params.get('email');
          if (companyEl && params.get('company')) companyEl.value = params.get('company');
          if (serviceEl && params.get('service')) {
            var val = params.get('service');
            if (val === 'blueprint') serviceEl.value = 'The Blueprint Session (£997)';
            if (val === 'eco-launch') serviceEl.value = 'Eco Launch (From £3,000)';
          }
        })();
      `}</Script>

      {/* Hero */}
      <section className="bg-navy py-28 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <span className="text-gold font-sans text-xs tracking-[0.3em] uppercase">Apply</span>
          <h1 className="font-serif text-white text-5xl lg:text-7xl mt-6 leading-tight">
            Apply to Work with Lubosi
          </h1>
          <p className="text-white/60 font-sans text-lg mt-6 max-w-xl leading-relaxed">
            Every application is reviewed personally. You will receive a response within 48 hours.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 space-y-24">

          {/* Step 1: Cal.com booking */}
          <div>
            <div className="mb-8">
              <span className="text-gold font-sans text-xs tracking-[0.3em] uppercase">Step 1</span>
              <h2 className="font-serif text-navy text-4xl mt-3">Book a Discovery Call</h2>
              <p className="text-charcoal/60 font-sans text-base mt-3 max-w-lg">
                A free 15-minute call to understand your business and confirm the right path forward.
                Choose a time that suits you below.
              </p>
            </div>
            <div
              id="cal-inline-embed"
              className="border border-gray-100"
              style={{ minWidth: '320px', height: '700px', width: '100%' }}
            />
          </div>

          {/* Step 2: Application Form */}
          <div>
            <div className="mb-8">
              <span className="text-gold font-sans text-xs tracking-[0.3em] uppercase">Step 2</span>
              <h2 className="font-serif text-navy text-4xl mt-3">Tell Us About Your Business</h2>
              <p className="text-charcoal/60 font-sans text-base mt-3 max-w-lg">
                Submit your application below. Every field helps Lubosi understand your situation before the call.
              </p>
            </div>

            {success ? (
              <div className="bg-cream border-l-4 border-gold p-8 max-w-2xl">
                <h3 className="font-serif text-navy text-2xl mb-3">Application received.</h3>
                <p className="font-sans text-charcoal/70">
                  Lubosi will review your application and respond within 48 hours.
                  Check your inbox, including your spam folder.
                </p>
              </div>
            ) : (
              <form
                action="https://api.web3forms.com/submit"
                method="POST"
                className="max-w-2xl space-y-6"
              >
                <input type="hidden" name="access_key" value="e8144041-9073-44fa-bba9-3b9089fc8511" />
                <input type="hidden" name="subject" value="New Application: Kongwa Tech" />
                <input type="hidden" name="redirect" value="https://kongwatech.com/apply?success=true" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-sans text-charcoal/50 uppercase tracking-widest mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
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
                    className="w-full border border-gray-200 px-4 py-3 font-sans text-sm text-charcoal focus:outline-none focus:border-navy transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-gold text-white font-sans text-sm px-10 py-4 hover:bg-gold-dark transition-colors w-full sm:w-auto"
                >
                  Submit Application
                </button>

                <p className="text-xs text-charcoal/40 font-sans">
                  Applications are reviewed personally by Lubosi. You will receive a response within 48 hours.
                </p>
              </form>
            )}
          </div>

          {/* Location */}
          <div>
            <div className="mb-8">
              <span className="text-gold font-sans text-xs tracking-[0.3em] uppercase">Location</span>
              <h2 className="font-serif text-navy text-4xl mt-3">Based in Rochester, Kent</h2>
              <p className="text-charcoal/60 font-sans text-base mt-3 max-w-lg">
                Serving Southeast England in person. National clients served remotely.
                In-person engagements available across Kent, Surrey, Sussex, and Greater London.
              </p>
            </div>
            <div className="border border-gray-100 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79927.74060980676!2d0.45!3d51.39!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8d8e56a2a23ff%3A0x2e0f3c6f80db0!2sRochester%2C%20Medway!5e0!3m2!1sen!2suk!4v1"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kongwa Tech location, Rochester, Kent"
              />
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
