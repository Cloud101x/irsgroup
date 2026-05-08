import ScrollReveal from './ScrollReveal'
import { sustainPillars, sustainStats } from '../data/content'

export default function Sustainability() {
  return (
    <section id="sustainability" className="relative py-24 bg-irs-green overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-rule='evenodd'/%3E%3C/svg%3E")` }} />
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <span className="label text-white/60">Environmental Stewardship</span>
            <h2 className="text-irs-white mt-4 mb-6">Our Commitment to a<br />Greener Nigeria</h2>
            <p className="text-white/60 leading-relaxed mb-8">
              At IRS Group, sustainability is not a program — it is embedded in our purpose. We recognise that Nigeria's long-term prosperity depends on transitioning to clean, efficient, and equitable energy systems.
            </p>
            <div className="flex flex-col gap-4">
              {sustainPillars.map((p, i) => (
                <div key={i} className="flex items-start gap-4 p-4 bg-white/5 border border-white/10 rounded hover:border-irs-gold/30 transition-colors">
                  <div className="w-10 h-10 shrink-0 bg-irs-gold rounded-md flex items-center justify-center text-lg text-irs-black">
                    {p.icon}
                  </div>
                  <div>
                    <h4 className="text-sm text-irs-white font-semibold mb-1">{p.title}</h4>
                    <p className="text-xs text-white/50 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="grid grid-cols-2 gap-4">
              {sustainStats.map((s, i) => (
                <div key={i} className="p-6 bg-white/[0.06] border border-white/10 rounded text-center hover:border-irs-gold/30 transition-colors">
                  <div className="font-serif text-4xl md:text-5xl font-bold text-irs-gold leading-none">{s.val}</div>
                  <div className="text-[0.65rem] text-white/40 uppercase tracking-wider mt-3 leading-relaxed">{s.lbl}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
