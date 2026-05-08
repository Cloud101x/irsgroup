import ScrollReveal from './ScrollReveal'
import { timelineLeft, timelineRight } from '../data/content'

function TimelineColumn({ items }) {
  return (
    <div className="relative pl-10">
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-irs-gold to-irs-gold/10" />
      {items.map((item, i) => (
        <ScrollReveal key={i} delay={i * 0.1}>
          <div className="relative mb-10">
            <div className="absolute -left-10 top-1 w-3.5 h-3.5 rounded-full bg-irs-gold border-2 border-irs-black shadow-[0_0_0_4px_rgba(201,168,76,0.2)]" />
            <div className="font-condensed text-xs font-bold tracking-[0.2em] text-irs-gold mb-1">{item.year}</div>
            <h4 className="text-irs-white font-medium text-lg mb-1">{item.title}</h4>
            <p className="text-sm text-irs-white/40 leading-relaxed max-w-xl">{item.body}</p>
          </div>
        </ScrollReveal>
      ))}
    </div>
  )
}

export default function History() {
  return (
    <section id="history" className="py-24 bg-irs-black">
      <div className="container-custom">
        <ScrollReveal className="section-header">
          <span className="label">Corporate History</span>
          <h2 className="text-irs-white mt-4">Seven Decades of<br />Nigerian Enterprise</h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 mt-12">
          <TimelineColumn items={timelineLeft} />
          <TimelineColumn items={timelineRight} />
        </div>
      </div>
    </section>
  )
}
