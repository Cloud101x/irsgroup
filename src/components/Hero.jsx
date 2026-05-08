import { useState, useEffect, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { carouselSlides, heroStats, activeSectors } from '../data/content'

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [userPaused, setUserPaused] = useState(false)
  const progressRef = useRef(null)
  const intervalRef = useRef(null)
  const INTERVAL = 5000

  const goTo = useCallback((n) => {
    setCurrent((prev) => {
      const total = carouselSlides.length
      return (n + total) % total
    })
  }, [])

  useEffect(() => {
    if (progressRef.current) {
      const bar = progressRef.current
      bar.style.transition = 'none'
      bar.style.width = '0%'
      void bar.offsetWidth
      bar.style.transition = `width ${INTERVAL}ms linear`
      bar.style.width = '100%'
    }
  }, [current])

  useEffect(() => {
    if (userPaused) {
      if (intervalRef.current) clearInterval(intervalRef.current)
      return
    }
    intervalRef.current = setInterval(() => goTo(current + 1), INTERVAL)
    return () => clearInterval(intervalRef.current)
  }, [userPaused, current, goTo])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') goTo(current + 1)
      if (e.key === 'ArrowLeft') goTo(current - 1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [current, goTo])

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Carousel */}
      <div
        className="absolute inset-0 z-0"
        onMouseEnter={() => setUserPaused(true)}
        onMouseLeave={() => setUserPaused(false)}
      >
        <div className="flex h-full w-full">
          {carouselSlides.map((slide, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            >
              <div className={`absolute inset-0 overflow-hidden transition-transform duration-[8000ms] ${i === current ? 'scale-100' : 'scale-110'}`}>
                <img
                  src={slide.src}
                  alt={slide.alt}
                  loading={i === 0 ? 'eager' : 'lazy'}
                  className="w-full h-full object-cover"
                  onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement.style.background = 'linear-gradient(135deg,#1B4332,#0a0a0a)' }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-irs-black/90 via-irs-black/50 to-irs-black/70" />
              <div className="absolute inset-0 bg-gradient-to-t from-irs-black/70 via-transparent to-transparent" />
              <div className={`absolute bottom-20 left-8 z-20 flex items-center gap-3 transition-opacity duration-700 delay-300 ${i === current ? 'opacity-100' : 'opacity-0'}`}>
                <div className="w-6 h-px bg-irs-gold" />
                <span className="font-condensed text-[0.65rem] font-bold tracking-[0.25em] uppercase text-irs-white/60">{slide.text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <button onClick={() => goTo(current - 1)} className="hidden md:flex absolute left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/10 border border-white/20 text-irs-white/80 items-center justify-center hover:bg-irs-gold hover:border-irs-gold hover:text-irs-black transition-all backdrop-blur-md">
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button onClick={() => goTo(current + 1)} className="hidden md:flex absolute right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/10 border border-white/20 text-irs-white/80 items-center justify-center hover:bg-irs-gold hover:border-irs-gold hover:text-irs-black transition-all backdrop-blur-md">
        <ChevronRight className="w-5 h-5" />
      </button>

      <div className="absolute bottom-0 left-0 h-[3px] bg-irs-gold z-20" ref={progressRef} style={{ width: '0%' }} />

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {carouselSlides.map((_, i) => (
          <button key={i} onClick={() => goTo(i)} className={`h-[3px] rounded transition-all duration-400 ${i === current ? 'w-10 bg-irs-gold' : 'w-6 bg-white/30 hover:bg-white/50'}`} aria-label={`Go to slide ${i + 1}`} />
        ))}
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, staggerChildren: 0.15 }}>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-px bg-irs-gold" />
              <span className="font-condensed text-xs tracking-[0.3em] uppercase text-irs-gold">Established 1952 · Kano, Nigeria</span>
            </div>
            <h1 className="text-irs-white mb-6">
              Powering
              <span className="block text-irs-gold">Africa's</span>
              Future
            </h1>
            <p className="text-lg text-irs-white/60 max-w-md mb-10 leading-relaxed">
              A diversified conglomerate at the forefront of Nigeria's energy transition, agricultural transformation, and industrial renaissance.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#about" className="btn-primary">Discover Our Story</a>
              <a href="#investors" className="btn-ghost">Investor Relations →</a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-3">
              {heroStats.map((stat, i) => (
                <div key={i} className="group relative bg-white/[0.03] border border-irs-gold/10 rounded p-5 overflow-hidden hover:bg-irs-gold/5 hover:border-irs-gold/40 hover:-translate-y-1 transition-all duration-300">
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-irs-gold to-transparent" />
                  <div className="font-serif text-4xl font-bold text-irs-gold leading-none mb-1">{stat.value}</div>
                  <div className="text-[0.7rem] tracking-wider uppercase text-irs-white/40">{stat.label}</div>
                </div>
              ))}
            </div>
            <div className="bg-irs-green/20 border border-irs-gold/20 rounded p-5 flex flex-col gap-3">
              <span className="text-[0.65rem] tracking-[0.2em] uppercase text-irs-white/30">Active Sectors</span>
              {activeSectors.map((s, i) => (
                <div key={i} className="inline-flex items-center gap-3 px-3 py-1.5 bg-white/[0.04] border border-white/[0.06] rounded-full w-fit hover:bg-irs-gold/10 hover:border-irs-gold/40 transition-all">
                  <span className="w-2 h-2 rounded-full shrink-0" style={{ background: s.color }} />
                  <span className="text-sm text-irs-white/70">{s.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-40">
        <span className="text-[0.65rem] tracking-[0.2em] uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-irs-gold to-transparent animate-scroll-pulse" />
      </div>
    </section>
  )
}
