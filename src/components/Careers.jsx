import ScrollReveal from './ScrollReveal'
import { ArrowRight } from 'lucide-react'
import { careerStats, jobs } from '../data/content'

export default function Careers() {
  return (
    <section id="careers" className="section-shell bg-irs-dark/72">
      <div className="container-custom">
        <div className="surface-card-strong mb-16 grid gap-10 p-6 md:p-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <ScrollReveal>
            <span className="label">Join IRS Group</span>
            <h2 className="mt-4 text-2xl lg:text-4xl text-irs-white">Build the teams shaping the next operating chapter.</h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-irs-white/58">
              Opportunities span engineering, operations, agriculture, finance, and healthcare. The tone here is intentionally simple and credible for an MVP careers surface.
            </p>
            <a href="#contact" className="btn-primary mt-8">
              Explore opportunities
              <ArrowRight className="h-4 w-4" />
            </a>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="grid grid-cols-2 gap-4">
              {careerStats.map((stat, index) => (
                <div key={index} className="rounded-[28px] border border-white/10 bg-white/[0.05] p-5 text-center">
                  <div className="font-serif text-3xl font-bold text-irs-gold">{stat.val}</div>
                  <div className="mt-1 text-[0.7rem] uppercase tracking-[0.24em] text-irs-white/34">{stat.lbl}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {jobs.map((job, index) => (
            <ScrollReveal key={index} delay={index * 0.06}>
              <article className="surface-card p-5 transition-all duration-300 hover:-translate-y-1">
                <h4 className="text-base font-semibold text-irs-white">{job.title}</h4>
                <p className="mt-1 text-sm text-irs-white/38">{job.meta}</p>
                <div className="flex flex-wrap gap-2">
                  {job.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="mt-4 rounded-full border border-irs-gold/18 bg-irs-gold/10 px-3 py-1 text-[0.64rem] font-bold uppercase tracking-[0.2em] text-irs-gold">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
