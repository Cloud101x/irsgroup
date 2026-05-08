import ScrollReveal from './ScrollReveal'
import { timelineLeft, timelineRight } from '../data/content'

function TimelineColumn({ items, title }) {
  return (
    <div className="relative pl-9">
      <div className="mb-5 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-irs-white/38">{title}</div>
      <div className="absolute left-0 top-8 bottom-0 w-px bg-gradient-to-b from-irs-gold via-irs-gold/25 to-transparent" />
      {items.map((item, index) => (
        <ScrollReveal key={index} delay={index * 0.1}>
          <article className="relative mb-4 rounded-[28px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_18px_36px_rgba(2,10,18,0.18)] backdrop-blur-xl">
            <div className="absolute -left-[2.3rem] top-8 h-4 w-4 rounded-full border-4 border-irs-black bg-irs-gold shadow-[0_0_0_6px_rgba(214,178,94,0.14)]" />
            <div className="font-condensed text-[0.75rem] font-bold tracking-[0.24em] text-irs-gold">{item.year}</div>
            <h4 className="mt-2 text-xl text-irs-white">{item.title}</h4>
            <p className="mt-3 max-w-xl text-sm leading-7 text-irs-white/50">{item.body}</p>
          </article>
        </ScrollReveal>
      ))}
    </div>
  )
}

export default function History() {
  return (
    <section id="history" className="section-shell bg-irs-black">
      <div className="container-custom">
        <ScrollReveal className="section-header">
          <span className="label">Corporate History</span>
          <h2 className="mt-4 text-2xl lg:text-5xl text-irs-white">A timeline of reinvention across seven decades.</h2>
          <p className="section-sub">
            The story moves from commerce to manufacturing to modern infrastructure, with each era adding a new operating layer to the group.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid gap-10 md:grid-cols-2 lg:gap-16">
          <TimelineColumn items={timelineLeft} title="Foundation to scale" />
          <TimelineColumn items={timelineRight} title="Transition to the next chapter" />
        </div>
      </div>
    </section>
  )
}
