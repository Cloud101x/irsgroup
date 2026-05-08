import ScrollReveal from './ScrollReveal'
import { leaders } from '../data/content'

export default function Leadership() {
  return (
    <section id="leadership" className="py-24 bg-irs-off-black">
      <div className="container-custom">
        <ScrollReveal className="section-header">
          <span className="label">Corporate Leadership</span>
          <h2 className="text-irs-white mt-4">Guided by Vision,<br />Driven by Purpose</h2>
          <p className="section-sub">IRS Group's leadership team brings together Nigeria's most experienced executives in energy, finance, agriculture, and industrial development.</p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {leaders.map((l, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="group bg-white/[0.03] border border-white/[0.06] rounded overflow-hidden hover:-translate-y-2 hover:border-irs-gold/40 hover:shadow-2xl transition-all duration-400">
                <div className="relative h-60 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${l.bg} transition-transform duration-500 group-hover:scale-110`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                </div>
                <div className="p-5">
                  <h4 className="font-serif text-lg text-irs-white">{l.name}</h4>
                  <div className="text-xs text-irs-gold tracking-wider uppercase mt-1 mb-3">{l.role}</div>
                  <p className="text-xs text-irs-white/40 leading-relaxed">{l.bio}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
