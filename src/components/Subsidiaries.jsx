import ScrollReveal from './ScrollReveal'
import { subsidiaries } from '../data/content'

export default function Subsidiaries() {
  return (
    <section id="subsidiaries" className="section-shell bg-irs-black">
      <div className="container-custom">
        <ScrollReveal className="section-header">
          <span className="label">Group Companies</span>
          <h2 className="mt-4 text-2xl lg:text-5xl text-irs-white">A network of specialist companies with shared backing.</h2>
          <p className="section-sub">
            Each subsidiary operates with its own sector focus while benefiting from group capital, governance, and long-term strategic direction.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {subsidiaries.map((subsidiary, index) => (
            <ScrollReveal key={index} delay={index * 0.06}>
              <article className="surface-card group relative h-full overflow-hidden p-6 md:p-7 transition-all duration-300 hover:-translate-y-1">
                <div className="absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-irs-gold to-irs-green-light transition-transform duration-300 group-hover:scale-x-100" />
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-irs-gold to-irs-gold-light font-serif text-base font-bold text-irs-black shadow-[0_14px_28px_rgba(214,178,94,0.2)]">
                  {subsidiary.code}
                </div>
                <h4 className="mt-5 text-lg font-semibold text-irs-white">{subsidiary.name}</h4>
                <div className="mt-2 text-[0.68rem] uppercase tracking-[0.24em] text-irs-gold">{subsidiary.sector}</div>
                <p className="mt-4 text-sm leading-7 text-irs-white/50">{subsidiary.desc}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
