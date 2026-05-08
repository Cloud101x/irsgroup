import ScrollReveal from './ScrollReveal'
import { sectors } from '../data/content'
import {
  ArrowUpRight,
  BatteryCharging,
  Building2,
  CarFront,
  Factory,
  Flame,
  FlaskConical,
  Fuel,
  HeartPulse,
  Sun,
  Wheat,
} from 'lucide-react'

export default function Sectors() {
  const sectorIcons = {
    'Clean Energy': Sun,
    'CNG Infrastructure': Fuel,
    'Electric Mobility': CarFront,
    'Solar Manufacturing': BatteryCharging,
    Agriculture: Wheat,
    'Oil & Gas': Flame,
    Manufacturing: Factory,
    Fertilizer: FlaskConical,
    'Real Estate': Building2,
    Healthcare: HeartPulse,
  }

  return (
    <section id="sectors" className="section-shell bg-irs-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(214,178,94,0.08),transparent_40%)]" />
      <div className="container-custom">
        <ScrollReveal className="section-header mx-auto text-center">
          <span className="label">Our Business Portfolio</span>
          <h2 className="mt-4 lg:text-2xl text-irs-white">Ten operating verticals, one integrated platform.</h2>
          <p className="section-sub mx-auto">
            The portfolio is built to balance long-horizon infrastructure, resilient operating cashflow, and sectors with clear national relevance.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {sectors.map((s, i) => {
            const Icon = sectorIcons[s.name] || Building2

            return (
              <ScrollReveal key={i} delay={i * 0.05}>
                <article className="surface-card group relative h-full overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="relative">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-irs-gold/10 text-irs-gold transition-all duration-300 group-hover:border-irs-gold/40 group-hover:bg-irs-gold/16">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h4 className="mt-5 font-serif text-lg text-irs-white">{s.name}</h4>
                    <p className="mt-3 text-sm leading-7 text-irs-white/52">{s.desc}</p>
                    <div className="mt-6 flex items-center gap-2 text-sm text-irs-gold/80">
                      <span>Learn more</span>
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
