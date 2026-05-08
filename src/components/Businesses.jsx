import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import ScrollReveal from './ScrollReveal'
import { bizTabs, bizPanels } from '../data/content'

export default function Businesses() {
  const [active, setActive] = useState('energy')
  const panel = bizPanels[active]
  const panelImages = {
    energy: '/solar.jpeg',
    cng: '/cng.jpg',
    oilgas: '/Oilngas.jpeg',
    agri: '/agribiz.jpg',
    manufacturing: '/manufacturing.jpeg',
    realestate: '/realty.jpg',
    healthcare: '/health.jpg',
  }

  return (
    <section id="businesses" className="section-shell bg-irs-off-black/65">
      <div className="container-custom">
        <ScrollReveal className="section-header">
          <span className="label">Sector Deep Dives</span>
          <h2 className="mt-4 text-2xl lg:text-4xl text-irs-white">Built for scale, disciplined around delivery.</h2>
          <p className="section-sub">
            Each operating business has a distinct role inside the wider portfolio, with capital deployed where sector tailwinds and operating capability align.
          </p>
        </ScrollReveal>

        <div className="surface-card mb-10 flex flex-wrap gap-2 p-2">
          {bizTabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setActive(t.key)}
              className={`rounded-full px-4 py-3 font-condensed text-[0.72rem] font-semibold uppercase tracking-[0.22em] transition-all duration-300 ${
                active === t.key
                  ? 'bg-irs-gold text-irs-black shadow-[0_12px_30px_rgba(214,178,94,0.2)]'
                  : 'text-irs-white/48 hover:bg-white/[0.05] hover:text-irs-white'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid items-start gap-10 lg:grid-cols-[0.98fr_1.02fr] lg:gap-16"
          >
            <div className="surface-card-strong p-4">
              <div className="relative overflow-hidden rounded-[30px]">
                <img src={panelImages[active]} alt={panel.label} className="h-80 w-full object-cover md:h-[33rem]" />
                <div className={`absolute inset-0 bg-gradient-to-t ${panel.gradient} opacity-60`} />
                <div className="absolute inset-0 bg-gradient-to-t from-irs-black via-transparent to-transparent" />
                <div className="absolute left-5 top-5 rounded-full border border-white/12 bg-irs-black/45 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-irs-white/78 backdrop-blur-xl">
                  {panel.tag}
                </div>
                <div className="absolute bottom-5 left-5 right-5 grid gap-3 sm:grid-cols-2">
                  {panel.metrics.slice(0, 2).map((metric, index) => (
                    <div key={index} className="rounded-[24px] border border-white/10 bg-irs-black/52 p-4 backdrop-blur-xl">
                      <div className="font-serif text-2xl font-bold text-irs-gold">{metric.val}</div>
                      <div className="mt-1 text-[0.68rem] uppercase tracking-[0.22em] text-irs-white/45">{metric.lbl}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <span className="label">{panel.label}</span>
              <h3 className="mt-3 text-irs-white">{panel.title}</h3>
              {panel.paras.map((p, i) => (
                <p key={i} className="mt-4 text-[0.98rem] leading-8 text-irs-white/58">{p}</p>
              ))}

              <div className="my-8 grid grid-cols-2 gap-3">
                {panel.metrics.map((m, i) => (
                  <div key={i} className="surface-card p-4">
                    <div className="font-serif text-2xl font-bold text-irs-gold">{m.val}</div>
                    <div className="mt-1 text-[0.68rem] uppercase tracking-[0.22em] text-irs-white/36">{m.lbl}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <a href="#contact" className="btn-primary">
                  {panel.cta}
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#projects" className="btn-ghost">See flagship projects</a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
