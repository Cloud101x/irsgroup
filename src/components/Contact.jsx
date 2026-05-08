import { useState } from 'react'
import ScrollReveal from './ScrollReveal'
import { contactDetails } from '../data/content'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="py-24 bg-irs-off-black">
      <div className="container-custom">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
          <ScrollReveal className="lg:col-span-2">
            <span className="label">Get in Touch</span>
            <h3 className="text-irs-white mt-4 mb-4">Let's Build Together</h3>
            <p className="text-irs-white/40 leading-relaxed mb-8">
              Whether you are an investor, government partner, or business seeking strategic alliance — IRS Group welcomes meaningful dialogue.
            </p>
            <div className="flex flex-col gap-5">
              {contactDetails.map((d, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-9 h-9 shrink-0 bg-irs-gold/10 border border-irs-gold/20 rounded-md flex items-center justify-center text-sm">
                    {d.icon}
                  </div>
                  <div>
                    <span className="block text-[0.7rem] text-irs-gold tracking-wider uppercase font-semibold mb-0.5">{d.label}</span>
                    <span className="text-sm text-irs-white/50">{d.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15} className="lg:col-span-3">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="mb-2">
                <label className="block text-[0.7rem] text-irs-white/30 tracking-wider uppercase mb-2">First Name</label>
                <input type="text" placeholder="Alhaji" className="w-full px-4 py-3 bg-white/[0.04] border border-white/10 rounded text-irs-white text-sm focus:border-irs-gold outline-none transition-colors" />
              </div>
              <div className="mb-2">
                <label className="block text-[0.7rem] text-irs-white/30 tracking-wider uppercase mb-2">Last Name</label>
                <input type="text" placeholder="Ibrahim" className="w-full px-4 py-3 bg-white/[0.04] border border-white/10 rounded text-irs-white text-sm focus:border-irs-gold outline-none transition-colors" />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-[0.7rem] text-irs-white/30 tracking-wider uppercase mb-2">Email Address</label>
              <input type="email" placeholder="you@company.com" className="w-full px-4 py-3 bg-white/[0.04] border border-white/10 rounded text-irs-white text-sm focus:border-irs-gold outline-none transition-colors" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-[0.7rem] text-irs-white/30 tracking-wider uppercase mb-2">Organisation</label>
                <input type="text" placeholder="Your Company" className="w-full px-4 py-3 bg-white/[0.04] border border-white/10 rounded text-irs-white text-sm focus:border-irs-gold outline-none transition-colors" />
              </div>
              <div>
                <label className="block text-[0.7rem] text-irs-white/30 tracking-wider uppercase mb-2">Phone Number</label>
                <input type="tel" placeholder="+234 000 0000 000" className="w-full px-4 py-3 bg-white/[0.04] border border-white/10 rounded text-irs-white text-sm focus:border-irs-gold outline-none transition-colors" />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-[0.7rem] text-irs-white/30 tracking-wider uppercase mb-2">Enquiry Type</label>
              <select className="w-full px-4 py-3 bg-white/[0.04] border border-white/10 rounded text-irs-white text-sm focus:border-irs-gold outline-none transition-colors">
                <option value="">Select Enquiry Type</option>
                <option>Investor Relations</option>
                <option>Business Partnership</option>
                <option>Government Collaboration</option>
                <option>Media & Press</option>
                <option>Careers</option>
                <option>General Enquiry</option>
              </select>
            </div>
            <div className="mb-6">
              <label className="block text-[0.7rem] text-irs-white/30 tracking-wider uppercase mb-2">Message</label>
              <textarea rows={4} placeholder="Please describe your enquiry..." className="w-full px-4 py-3 bg-white/[0.04] border border-white/10 rounded text-irs-white text-sm focus:border-irs-gold outline-none transition-colors resize-y" />
            </div>
            <button onClick={handleSubmit} className={`btn-primary w-full ${submitted ? '!bg-irs-green-light' : ''}`}>
              {submitted ? 'Enquiry Submitted!' : 'Submit Enquiry'}
            </button>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
