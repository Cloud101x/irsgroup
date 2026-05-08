import ScrollReveal from './ScrollReveal'
import { investorMetrics } from '../data/content'

export default function Investors() {
  return (
    <section id="investors" className="section-shell overflow-hidden bg-irs-black">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_40%,rgba(214,178,94,0.1),transparent)]" />
      <div className="container-custom">
        <div className="surface-card-strong p-6 md:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <ScrollReveal>
              <span className="label">Investor Relations</span>
              <h2 className="mt-4 text-2xl lg:text-5xl text-irs-white">A cleaner, sharper investment narrative.</h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-irs-white/58">
                IRS Group offers exposure to Nigerian sectors with structural demand tailwinds, anchored by longstanding operating history and a portfolio that spans both legacy industry and transition-era infrastructure.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.08}>
              <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5 text-sm leading-7 text-irs-white/58">
                Private placements, strategic partnerships, and joint ventures are supported through the investor relations team.
              </div>
            </ScrollReveal>
          </div>

          <div className="my-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {investorMetrics.map((metric, index) => (
              <ScrollReveal key={index} delay={index * 0.08}>
                <div className="rounded-[28px] border border-white/10 bg-irs-black/28 p-6 text-center">
                  <span className="block font-serif text-3xl font-bold text-irs-gold md:text-4xl">{metric.val}</span>
                  <span className="mt-2 block text-[0.7rem] uppercase tracking-[0.24em] text-irs-white/35">{metric.lbl}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.2}>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary">Request investor pack</a>
              <a href="#contact" className="btn-ghost">Schedule management meeting</a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
