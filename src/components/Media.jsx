import ScrollReveal from './ScrollReveal'
import { newsItems } from '../data/content'

export default function Media() {
  return (
    <section id="media" className="py-24 bg-irs-off-black">
      <div className="container-custom">
        <ScrollReveal className="section-header">
          <span className="label">Media Center</span>
          <h2 className="text-irs-white mt-4">Latest News &<br />Press Releases</h2>
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-8 mt-12">
          <ScrollReveal className="lg:col-span-3">
            <div className="bg-white/[0.03] border border-white/[0.06] rounded overflow-hidden hover:border-irs-gold/20 transition-colors">
              <div className="h-64 md:h-72 bg-gradient-to-br from-[#0a1628] via-[#1a3060] to-[#0d2040] flex flex-col items-center justify-center gap-4">
                <span className="font-serif text-5xl font-bold text-irs-gold">IRS</span>
                <span className="font-condensed text-xs tracking-[0.2em] uppercase text-white/40">Press Release</span>
              </div>
              <div className="p-6 md:p-8">
                <span className="inline-block px-2.5 py-1 bg-irs-gold/15 text-irs-gold text-[0.6rem] font-bold tracking-wider uppercase rounded mb-4">Press Release</span>
                <h3 className="font-serif text-xl md:text-2xl text-irs-white font-semibold mb-3">IRS Group Announces ₦120 Billion Solar Power Investment for Kano State</h3>
                <p className="text-sm text-irs-white/40 leading-relaxed mb-4">
                  IRS Green Energy today announced the commencement of Phase I of the Kano Solar Power Complex, a 250MW utility-scale solar installation that will provide clean electricity to over 800,000 households and industrial consumers across Kano State.
                </p>
                <span className="text-xs text-irs-white/25">15 January 2025 · IRS Corporate Communications</span>
              </div>
            </div>
          </ScrollReveal>

          <div className="lg:col-span-2 flex flex-col gap-4">
            {newsItems.map((n, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="p-4 bg-white/[0.02] border border-white/[0.05] rounded hover:border-irs-gold/30 hover:bg-irs-gold/5 transition-all cursor-pointer">
                  <span className="text-[0.6rem] text-irs-gold tracking-wider uppercase">{n.tag}</span>
                  <h4 className="text-sm text-irs-white font-medium leading-snug mt-1 mb-2">{n.title}</h4>
                  <span className="text-xs text-irs-white/25">{n.date}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <div className="text-center mt-10">
          <a href="#contact" className="btn-ghost">View All Press Releases →</a>
        </div>
      </div>
    </section>
  )
}
