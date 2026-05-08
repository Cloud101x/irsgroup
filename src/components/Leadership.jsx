import ScrollReveal from './ScrollReveal'
import { leaders } from '../data/content'

export default function Leadership() {
  const getInitials = (name) =>
    name
      .split(' ')
      .filter(Boolean)
      .slice(-2)
      .map((part) => part[0]?.toUpperCase())
      .join('')

  return (
    <section id="leadership" className="section-shell bg-irs-off-black/45">
      <div className="container-custom">
        <ScrollReveal className="section-header">
          <span className="label">Corporate Leadership</span>
          <h2 className="mt-4 text-2xl lg:text-5xl text-irs-white">Leadership built for stewardship and execution.</h2>
          <p className="section-sub">
            The executive team blends family continuity, institutional knowledge, and sector expertise across energy, finance, agriculture, and industry.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {leaders.map((leader, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <article className="surface-card group h-full p-6 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start justify-between gap-4">
                  <div className={`flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br ${leader.bg} font-serif text-xl font-bold text-white shadow-[0_16px_32px_rgba(2,10,18,0.25)]`}>
                    {getInitials(leader.name)}
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[0.64rem] font-semibold uppercase tracking-[0.24em] text-irs-white/40">
                    Executive
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="font-serif text-xl text-irs-white">{leader.name}</h4>
                  <div className="mt-2 text-[0.72rem] uppercase tracking-[0.24em] text-irs-gold">{leader.role}</div>
                  <p className="mt-4 text-sm leading-7 text-irs-white/52">{leader.bio}</p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
