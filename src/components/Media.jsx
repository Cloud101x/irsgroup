import ScrollReveal from './ScrollReveal'
import { ArrowRight } from 'lucide-react'
import { newsItems } from '../data/content'

export default function Media() {
  return (
    <section id="media" className="section-shell bg-irs-off-black/45">
      <div className="container-custom">
        <ScrollReveal className="section-header">
          <span className="label">Media Center</span>
          <h2 className="mt-4 text-2xl lg:text-5xl text-irs-white">Latest news, progress, and public milestones.</h2>
          <p className="section-sub">
            A simple media layer helps the MVP feel alive, active, and ready for investor or partner diligence.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          <ScrollReveal className="lg:col-span-3">
            <article className="surface-card-strong overflow-hidden">
              <div className="relative h-72 overflow-hidden md:h-[22rem]">
                <img src="/solar.jpeg" alt="IRS Group media feature" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-irs-black via-irs-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                  <span className="inline-flex rounded-full border border-white/12 bg-white/[0.08] px-3 py-1 text-[0.64rem] font-semibold uppercase tracking-[0.24em] text-irs-white/82">
                    Press release
                  </span>
                  <h3 className="mt-4 max-w-xl font-serif text-2xl leading-snug text-irs-white md:text-3xl">
                    IRS Group Announces ₦120 Billion Solar Power Investment for Kano State
                  </h3>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <p className="text-sm leading-7 text-irs-white/55">
                  IRS Green Energy today announced the commencement of Phase I of the Kano Solar Power Complex, a 250MW utility-scale solar installation that will provide clean electricity to over 800,000 households and industrial consumers across Kano State.
                </p>
                <div className="mt-5 flex items-center justify-between gap-4">
                  <span className="text-xs text-irs-white/28">15 January 2025 · IRS Corporate Communications</span>
                  <a href="#contact" className="inline-flex items-center gap-2 text-sm text-irs-gold">
                    <span>Request press details</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </article>
          </ScrollReveal>

          <div className="flex flex-col gap-4 lg:col-span-2">
            {newsItems.map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.08}>
                <article className="surface-card p-5 transition-all duration-300 hover:-translate-y-1">
                  <span className="text-[0.64rem] uppercase tracking-[0.24em] text-irs-gold">{item.tag}</span>
                  <h4 className="mt-2 text-base font-medium leading-7 text-irs-white">{item.title}</h4>
                  <span className="mt-3 block text-xs text-irs-white/28">{item.date}</span>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <a href="#contact" className="btn-ghost">View all updates</a>
        </div>
      </div>
    </section>
  )
}
