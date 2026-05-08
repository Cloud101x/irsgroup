import ScrollReveal from './ScrollReveal'
import { projects } from '../data/content'

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-irs-dark">
      <div className="container-custom">
        <ScrollReveal className="section-header">
          <span className="label">Flagship Projects</span>
          <h2 className="text-irs-white mt-4">Transforming<br />Nigeria's Landscape</h2>
          <p className="section-sub">Major infrastructure investments that are reshaping Nigeria's energy, agricultural, and industrial landscape for generations.</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {projects.map((p, i) => (
            <ScrollReveal key={i} delay={i * 0.08} className={p.large ? 'md:row-span-2' : ''}>
              <div className={`group relative rounded overflow-hidden cursor-pointer h-64 ${p.large ? 'md:h-full' : ''}`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient} transition-transform duration-700 group-hover:scale-105`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                  <span className="inline-block px-2.5 py-1 bg-irs-gold text-irs-black text-[0.6rem] font-bold tracking-wider uppercase rounded mb-2">{p.tag}</span>
                  <h4 className="font-serif text-lg text-irs-white font-semibold leading-snug">{p.title}</h4>
                  <p className="text-xs text-irs-white/40 mt-1">{p.location}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
