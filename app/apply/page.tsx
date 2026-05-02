import type { Metadata } from 'next'
import CalEmbed from '@/components/cal-embed'
import ApplyForm from '@/components/apply-form'

export const metadata: Metadata = {
  title: 'Apply to Work with Lubosi | Kongwa Tech',
  description:
    'Submit an application to work with Lubosi Kongwa. Book a 15-minute discovery call or send your application directly. Applications reviewed within 48 hours.',
}

export default function ApplyPage() {
  return (
    <>
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
              <p className="text-charcoal/40 font-sans text-xs mt-3 uppercase tracking-widest">
                Lubosi takes on a limited number of clients each month. Availability is allocated on a first-come basis.
              </p>
            </div>
            <CalEmbed
              calLink="kongwatech/free-consultation"
              namespace="free-consultation"
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
            <ApplyForm />
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
