import ScrollReveal from './ScrollReveal'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '../data/content'

export default function Projects() {
  const projectImages = {
    Energy: '/solar.jpeg',
    CNG: '/cng.jpg',
    'Oil & Gas': '/Oilngas.jpeg',
    'Real Estate': '/realty.jpg',
    Agriculture: '/agribiz.jpg',
  }

  return (
    <section id="projects" className="section-shell bg-irs-dark/85">
      <div className="container-custom">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <ScrollReveal className="section-header !mb-0">
            <span className="label">Flagship Projects</span>
            <h2 className="mt-4 text-2xl lg:text-4xl text-irs-white">High-conviction bets with visible national impact.</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <p className="max-w-md text-base leading-8 text-irs-white/55">
              Major operating projects across power, transport fuel, agriculture, exploration, and urban development.
            </p>
          </ScrollReveal>
        </div>

        <div className="mt-14 grid auto-rows-[260px] grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {projects.map((p, i) => (
            <ScrollReveal key={i} delay={i * 0.08} className={p.large ? 'md:row-span-2' : ''}>
              <article className={`group relative h-full overflow-hidden rounded-[30px] border border-white/10 ${p.large ? 'md:h-full md:col-span-2' : 'h-[260px]'}`}>
                <img
                  src={projectImages[p.tag]}
                  alt={p.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-45`} />
                <div className="absolute inset-0 bg-gradient-to-t from-irs-black via-irs-black/25 to-transparent" />
                <div className="absolute inset-0 p-5 md:p-6">
                  <div className="flex h-full flex-col justify-between">
                    <div>
                      <span className="inline-flex rounded-full border border-white/12 bg-white/[0.08] px-3 py-1 text-[0.64rem] font-semibold uppercase tracking-[0.24em] text-irs-white/82 backdrop-blur">
                        {p.tag}
                      </span>
                    </div>
                    <div>
                      <h4 className="max-w-md font-serif text-xl leading-snug text-irs-white md:text-2xl">{p.title}</h4>
                      <div className="mt-2 text-sm text-irs-white/58">{p.location.replace('📍 ', '')}</div>
                      <div className="mt-4 flex items-center gap-2 text-sm text-irs-gold">
                        <span>View project profile</span>
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
