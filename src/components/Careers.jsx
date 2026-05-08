import ScrollReveal from './ScrollReveal'
import { careerStats, jobs } from '../data/content'

export default function Careers() {
  return (
    <section id="careers" className="py-24 bg-irs-dark">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          <ScrollReveal>
            <span className="label">Join IRS Group</span>
            <h2 className="text-irs-white mt-4 mb-6">Build the Future<br />of Nigeria</h2>
            <p className="text-irs-white/50 leading-relaxed mb-8">
              IRS Group is home to Nigeria's most ambitious professionals. We offer careers at the frontier of energy transition, industrial innovation, and agricultural transformation.
            </p>
            <a href="#contact" className="btn-primary">Explore Opportunities</a>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="grid grid-cols-2 gap-4">
              {careerStats.map((s, i) => (
                <div key={i} className="p-5 bg-white/[0.03] border border-white/[0.06] rounded text-center hover:border-irs-gold/20 transition-colors">
                  <div className="font-serif text-3xl font-bold text-irs-gold">{s.val}</div>
                  <div className="text-[0.7rem] text-irs-white/30 uppercase tracking-wider mt-1">{s.lbl}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {jobs.map((j, i) => (
            <ScrollReveal key={i} delay={i * 0.06}>
              <div className="p-5 bg-white/[0.02] border border-white/[0.06] rounded hover:border-irs-gold hover:translate-x-1 transition-all cursor-pointer">
                <h4 className="text-irs-white font-semibold text-sm mb-1">{j.title}</h4>
                <p className="text-xs text-irs-white/30 mb-3">{j.meta}</p>
                <div className="flex flex-wrap gap-2">
                  {j.tags.map((t, ti) => (
                    <span key={ti} className="px-2 py-0.5 bg-irs-gold/10 text-irs-gold text-[0.6rem] font-bold tracking-wider uppercase rounded">{t}</span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
