import { useState } from 'react'
import { Briefcase, Building2, Mail, MapPin, Phone } from 'lucide-react'
import ScrollReveal from './ScrollReveal'
import { contactDetails } from '../data/content'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const iconMap = {
    Headquarters: MapPin,
    'Main Switchboard': Phone,
    'General Enquiries': Mail,
    'Investor Relations': Briefcase,
    'Lagos Office': Building2,
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
    event.currentTarget.reset()
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="section-shell bg-irs-off-black/65">
      <div className="container-custom">
        <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
          <ScrollReveal>
            <span className="label">Get in Touch</span>
            <h3 className="mt-4 text-irs-white">A polished entry point for serious conversations.</h3>
            <p className="mt-4 max-w-md text-base leading-8 text-irs-white/55">
              Whether the enquiry is investment, partnership, media, or recruitment, the contact experience should feel trustworthy and easy to use.
            </p>

            <div className="surface-card-strong mt-8 p-6">
              <div className="mb-5 rounded-full border border-irs-gold/18 bg-irs-gold/10 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-irs-gold">
                Typical response window: within 48 hours
              </div>

              <div className="flex flex-col gap-4">
                {contactDetails.map((detail, index) => {
                  const Icon = iconMap[detail.label] || Mail

                  return (
                    <div key={index} className="rounded-[24px] border border-white/10 bg-white/[0.04] p-4">
                      <div className="flex items-start gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-irs-gold/16 bg-irs-gold/10 text-irs-gold">
                          <Icon className="h-4 w-4" />
                        </div>
                        <div>
                          <span className="block text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-irs-white/42">{detail.label}</span>
                          <span className="mt-1 block text-sm leading-7 text-irs-white/70">{detail.text}</span>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <form onSubmit={handleSubmit} className="surface-card-strong p-6 md:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="field-label">First Name</label>
                  <input type="text" placeholder="Amina" className="field" />
                </div>
                <div>
                  <label className="field-label">Last Name</label>
                  <input type="text" placeholder="Ibrahim" className="field" />
                </div>
              </div>

              <div className="mt-4">
                <label className="field-label">Email Address</label>
                <input type="email" placeholder="you@company.com" className="field" />
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="field-label">Organisation</label>
                  <input type="text" placeholder="Your Company" className="field" />
                </div>
                <div>
                  <label className="field-label">Phone Number</label>
                  <input type="tel" placeholder="+234 000 0000 000" className="field" />
                </div>
              </div>

              <div className="mt-4">
                <label className="field-label">Enquiry Type</label>
                <select defaultValue="" className="field">
                  <option value="" disabled>Select enquiry type</option>
                  <option>Investor Relations</option>
                  <option>Business Partnership</option>
                  <option>Government Collaboration</option>
                  <option>Media & Press</option>
                  <option>Careers</option>
                  <option>General Enquiry</option>
                </select>
              </div>

              <div className="mt-4">
                <label className="field-label">Message</label>
                <textarea rows={5} placeholder="Please describe your enquiry..." className="field resize-y" />
              </div>

              <button type="submit" className={`btn-primary mt-6 w-full justify-center ${submitted ? '!bg-irs-green-light !text-irs-black' : ''}`}>
                {submitted ? 'Enquiry submitted' : 'Submit enquiry'}
              </button>

              <div className="mt-4 text-center text-sm text-irs-white/42" role="status">
                {submitted ? 'Thanks. The form has been captured locally for this MVP experience.' : 'Use this form for partnership, investor, media, and recruitment requests.'}
              </div>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
