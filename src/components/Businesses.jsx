import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ScrollReveal from './ScrollReveal'
import { bizTabs, bizPanels } from '../data/content'

export default function Businesses() {
  const [active, setActive] = useState('energy')
  const panel = bizPanels[active]

  return (
    <section id="businesses" className="py-24 bg-irs-off-black">
      <div className="container-custom">
        <ScrollReveal className="section-header">
          <span className="label">Sector Deep Dives</span>
          <h2 className="text-irs-white mt-4">Built for Scale,<br />Designed for Impact</h2>
        </ScrollReveal>

        <div className="flex flex-wrap border-b border-white/[0.06] mb-12">
          {bizTabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setActive(t.key)}
              className={`px-5 py-3 font-condensed text-xs font-semibold tracking-[0.1em] uppercase transition-all duration-300 border-b-2 ${active === t.key ? 'text-irs-gold border-irs-gold' : 'text-irs-white/30 border-transparent hover:text-irs-gold/70'}`}
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
            className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start"
          >
            <div>
              <div className={`relative h-80 md:h-96 rounded bg-gradient-to-br ${panel.gradient} flex items-end p-6 overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="relative z-10 inline-block px-3 py-1.5 bg-irs-gold text-irs-black text-[0.65rem] font-bold tracking-wider uppercase rounded">{panel.tag}</span>
              </div>
            </div>
            <div>
              <span className="label">{panel.label}</span>
              <h3 className="text-irs-white mt-3 mb-4">{panel.title}</h3>
              {panel.paras.map((p, i) => (
                <p key={i} className="text-irs-white/50 leading-relaxed mb-4 text-[0.95rem]">{p}</p>
              ))}
              <div className="grid grid-cols-2 gap-3 my-6">
                {panel.metrics.map((m, i) => (
                  <div key={i} className="glass-card p-4">
                    <div className="font-serif text-2xl font-bold text-irs-gold">{m.val}</div>
                    <div className="text-[0.65rem] text-irs-white/30 uppercase tracking-wider mt-1">{m.lbl}</div>
                  </div>
                ))}
              </div>
              <a href="#contact" className="btn-primary !text-xs !py-3 !px-6">{panel.cta}</a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
