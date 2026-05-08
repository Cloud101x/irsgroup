import ScrollReveal from './ScrollReveal'
import { ArrowRight, Factory, Handshake, Leaf, Zap } from 'lucide-react'
import { pillars } from '../data/content'

export default function About() {
  const pillarIcons = {
    '🏗️': Factory,
    '⚡': Zap,
    '🌾': Leaf,
    '🤝': Handshake,
  }

  return (
    <section id="about" className="section-shell bg-irs-off-black/50">
      <div className="container-custom">
        <div className="grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-20">
          <ScrollReveal>
            <div className="relative">
              <div className="surface-card-strong p-4 md:p-5">
                <div className="relative aspect-[4/5] max-h-[540px] overflow-hidden rounded-[30px]">
                  <img src="/solar.jpeg" alt="IRS Group renewable energy operations" className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-irs-black via-irs-black/25 to-transparent" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(214,178,94,0.18),transparent_26%)]" />
                  <div className="absolute left-5 top-5 rounded-full border border-white/12 bg-irs-black/45 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-irs-white/82 backdrop-blur-xl">
                    Energy transition in motion
                  </div>
                  <div className="absolute bottom-5 left-5 right-5 rounded-[24px] border border-white/10 bg-irs-black/55 p-5 backdrop-blur-xl">
                    <div className="label">Built Over Generations</div>
                    <p className="mt-3 max-w-md text-base leading-7 text-irs-white/78">
                      From a Kano trading house to a multi-sector industrial group investing in the next era of African infrastructure.
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-5 -right-3 rounded-[28px] border border-white/10 bg-white/[0.08] px-6 py-5 text-center shadow-[0_20px_44px_rgba(2,10,18,0.25)] backdrop-blur-2xl">
                <div className="font-serif text-4xl font-bold leading-none text-irs-gold">72+</div>
                <div className="mt-2 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-irs-white/45">
                  Years of enterprise
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="section-header !mb-8">
              <span className="label">About IRS Group</span>
              <h2 className="mt-4 lg:text-2xl text-irs-white">A legacy being redesigned for what comes next.</h2>
              <p className="section-sub">
                IRS Group combines deep-rooted commercial heritage with a modern investment posture across infrastructure, industrial production, and social impact sectors.
              </p>
            </div>

            <div className="surface-card mb-8 p-6 md:p-7">
              <p className="text-lg leading-8 text-irs-white/78">
                Founded in Kano in 1952, the group has evolved from a pioneering trading enterprise into a diversified operating platform focused on energy transition, industrial growth, food systems, and healthcare access.
              </p>
              <p className="mt-4 text-sm leading-7 text-irs-white/55">
                That blend of history and forward motion is what makes the brand feel credible today: a business with institutional memory, but an unmistakably contemporary mandate.
              </p>
            </div>


         
          </ScrollReveal>
        </div>

            <div className="grid gap-3 !mt-10 sm:grid-cols-4">
              {pillars.map((pillar, index) => {
                const Icon = pillarIcons[pillar.icon] || Factory

                return (
                  <div key={index} className="surface-card p-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-irs-gold/15 bg-irs-gold/10 text-irs-gold">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="mt-4 text-base font-semibold text-irs-white">{pillar.title}</div>
                    <div className="mt-2 text-sm leading-7 text-irs-white/50">{pillar.desc}</div>
                  </div>
                )
              })}
            </div>
               <a href="#history" className="btn-ghost mt-8">
              Explore the timeline
              <ArrowRight className="h-4 w-4" />
            </a>
      </div>
    </section>
  )
}
