import ScrollReveal from './ScrollReveal'
import { sectors } from '../data/content'
import { ArrowUpRight } from 'lucide-react'

export default function Sectors() {
  return (
    <section id="sectors" className="py-24 bg-irs-black">
      <div className="container-custom">
        <ScrollReveal className="section-header text-center">
          <span className="label">Our Business Portfolio</span>
          <h2 className="text-irs-white mt-4">Ten Pillars of<br />Nigerian Enterprise</h2>
          <p className="section-sub mx-auto">From clean energy infrastructure to agricultural transformation, IRS Group's diversified portfolio addresses Nigeria's most critical economic imperatives.</p>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-irs-gold/10 border border-irs-gold/10 mt-12">
          {sectors.map((s, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <div className="group relative bg-irs-black p-6 md:p-8 cursor-pointer h-full hover:-translate-y-1 hover:shadow-2xl transition-all duration-400 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-irs-gold/5 to-irs-green/10 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <div className="relative">
                  <div className="w-13 h-13 rounded-lg bg-irs-gold/10 border border-irs-gold/20 flex items-center justify-center text-2xl mb-4 group-hover:bg-irs-gold group-hover:border-irs-gold transition-all duration-300">
                    {s.icon}
                  </div>
                  <h4 className="font-condensed text-sm font-bold tracking-wider uppercase text-irs-white mb-2">{s.name}</h4>
                  <p className="text-xs text-irs-white/40 leading-relaxed">{s.desc}</p>
                  <ArrowUpRight className="absolute bottom-0 right-0 w-4 h-4 text-irs-gold opacity-0 group-hover:opacity-100 translate-x-1 group-hover:translate-x-0 transition-all duration-300" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
