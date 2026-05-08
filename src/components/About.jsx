import ScrollReveal from './ScrollReveal'
import { pillars } from '../data/content'

export default function About() {
  return (
    <section id="about" className="py-24 bg-irs-off-black">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <div className="relative">
              <div className="aspect-[4/5] max-h-[480px] rounded bg-gradient-to-br from-irs-green via-irs-green-mid to-irs-gold/30 flex flex-col items-center justify-center gap-6 overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c9a84c' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
                <span className="font-serif text-6xl font-bold text-irs-gold relative z-10">IRS</span>
                <span className="font-condensed text-xs tracking-[0.25em] uppercase text-white/40 relative z-10">Group Nigeria</span>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 md:w-36 md:h-36 rounded-full bg-irs-gold flex flex-col items-center justify-center text-irs-black text-center">
                <span className="font-serif text-4xl font-bold leading-none">72</span>
                <span className="text-[0.6rem] font-bold tracking-wider uppercase mt-1">Years of<br />Excellence</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <span className="label">About IRS Group</span>
            <h2 className="text-irs-white mt-4 mb-6">A Legacy of Building Nigeria</h2>
            <blockquote className="font-serif text-xl text-irs-white/80 leading-relaxed mb-6 border-l-2 border-irs-gold pl-6">
              "Founded in Kano in 1952, IRS Group stands as one of Nigeria's most storied industrial dynasties — a testament to visionary enterprise, generational commitment, and the enduring power of Nigerian ingenuity."
            </blockquote>
            <p className="text-irs-white/50 leading-relaxed mb-4">
              Established by the late Alhaji Isyaku Rabiu — a titan of northern Nigeria's commerce — IRS Group has grown from a pioneering trading house into a fully diversified conglomerate with interests spanning energy, agriculture, manufacturing, real estate, and healthcare.
            </p>
            <p className="text-irs-white/50 leading-relaxed mb-8">
              Today, IRS Group stands at the intersection of Nigeria's energy transition and industrial modernization. Through strategic investments in CNG infrastructure, solar manufacturing, electric mobility, and clean energy, the Group is pioneering a new chapter.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {pillars.map((p, i) => (
                <div key={i} className="glass-card p-5 hover:border-irs-gold/40 hover:bg-irs-gold/5 transition-all">
                  <div className="text-2xl mb-2">{p.icon}</div>
                  <div className="text-sm font-semibold text-irs-gold mb-1">{p.title}</div>
                  <div className="text-xs text-irs-white/40 leading-relaxed">{p.desc}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
