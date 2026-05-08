import ScrollReveal from './ScrollReveal'
import { investorMetrics } from '../data/content'

export default function Investors() {
  return (
    <section id="investors" className="relative py-24 bg-irs-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(201,168,76,0.06),transparent)]" />
      <div className="container-custom relative z-10 text-center">
        <ScrollReveal>
          <span className="label">Investor Relations</span>
          <h2 className="text-irs-white mt-4 mb-6">A Compelling<br />Investment Case</h2>
          <p className="text-irs-white/50 max-w-xl mx-auto leading-relaxed mb-12">
            IRS Group offers investors unparalleled exposure to Nigeria's fastest-growing industrial sectors — from energy transition infrastructure to agriculture and healthcare — underpinned by 72 years of operational excellence.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
          {investorMetrics.map((m, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="p-6 md:p-8 bg-white/[0.02] border border-irs-gold/10 rounded hover:border-irs-gold/30 transition-colors">
                <span className="font-serif text-3xl md:text-4xl font-bold text-irs-gold block">{m.val}</span>
                <span className="text-[0.7rem] text-irs-white/30 uppercase tracking-wider mt-2 block">{m.lbl}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.2}>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#contact" className="btn-primary">Request Investor Pack</a>
            <a href="#contact" className="btn-ghost">Schedule Management Meeting →</a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
