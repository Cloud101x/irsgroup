import ScrollReveal from './ScrollReveal'
import { Factory, Leaf, Users } from 'lucide-react'
import { sustainPillars, sustainStats } from '../data/content'

export default function Sustainability() {
  const pillarIcons = {
    'Energy Transition': Leaf,
    'Community Impact': Users,
    'Clean Manufacturing': Factory,
  }

  return (
    <section id="sustainability" className="section-shell overflow-hidden bg-gradient-to-br from-irs-green via-[#123c44] to-[#0b2035]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(240,212,138,0.18),transparent_22%)]" />
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />
      <div className="container-custom">
        <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <ScrollReveal>
            <div className="section-header !mb-8">
              <span className="label text-white/65">Environmental Stewardship</span>
              <h2 className="mt-4 text-2xl lg:text-4xl text-irs-white">Sustainability is treated as operating strategy, not decoration.</h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/68">
                The group is positioning long-term growth around cleaner energy systems, more efficient manufacturing, and community investment that compounds over time.
              </p>
            </div>

            <div className="space-y-4">
              {sustainPillars.map((pillar, index) => {
                const Icon = pillarIcons[pillar.title] || Leaf

                return (
                  <div key={index} className="surface-card flex items-start gap-4 p-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/12 bg-white/[0.08] text-irs-gold">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-irs-white">{pillar.title}</h4>
                      <p className="mt-2 text-sm leading-7 text-white/58">{pillar.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="surface-card-strong p-6 md:p-8">
              <div className="grid grid-cols-2 gap-4">
                {sustainStats.map((stat, index) => (
                  <div key={index} className="rounded-[28px] border border-white/10 bg-white/[0.05] p-5 text-center">
                    <div className="font-serif text-4xl font-bold leading-none text-irs-gold md:text-5xl">{stat.val}</div>
                    <div className="mt-3 text-[0.7rem] uppercase tracking-[0.24em] text-white/42">{stat.lbl}</div>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-[28px] border border-white/10 bg-irs-black/28 p-6">
                <div className="label text-white/55">Why It Matters</div>
                <p className="mt-3 text-base leading-8 text-white/70">
                  The sustainability agenda directly supports the group&apos;s energy, agriculture, manufacturing, and healthcare ambitions, making it commercially relevant rather than peripheral.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
