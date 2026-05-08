import ScrollReveal from './ScrollReveal'
import { subsidiaries } from '../data/content'

export default function Subsidiaries() {
  return (
    <section id="subsidiaries" className="py-24 bg-irs-black">
      <div className="container-custom">
        <ScrollReveal className="section-header">
          <span className="label">Group Companies</span>
          <h2 className="text-irs-white mt-4">Our Subsidiary Network</h2>
          <p className="section-sub">Each IRS subsidiary operates as a best-in-class enterprise within its sector, backed by the Group's financial strength and governance standards.</p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {subsidiaries.map((s, i) => (
            <ScrollReveal key={i} delay={i * 0.06}>
              <div className="group relative p-6 md:p-8 bg-white/[0.02] border border-white/[0.06] rounded hover:-translate-y-1 hover:border-irs-gold/20 transition-all duration-400 overflow-hidden">
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-irs-gold to-irs-green-light scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
                <div className="w-14 h-14 rounded-md bg-gradient-to-br from-irs-gold to-irs-gold-dark flex items-center justify-center font-serif text-base font-bold text-irs-black mb-4">
                  {s.code}
                </div>
                <h4 className="text-base font-bold text-irs-white mb-1">{s.name}</h4>
                <div className="text-[0.65rem] text-irs-gold tracking-wider uppercase mb-3">{s.sector}</div>
                <p className="text-xs text-irs-white/40 leading-relaxed">{s.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
