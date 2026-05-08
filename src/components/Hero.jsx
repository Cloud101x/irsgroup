import { useState, useEffect, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { carouselSlides, heroStats, activeSectors } from '../data/content'

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [userPaused, setUserPaused] = useState(false)
  const progressRef = useRef(null)
  const intervalRef = useRef(null)
  const INTERVAL = 5000
  const currentSlide = carouselSlides[current]

  const goTo = useCallback((n) => {
    const total = carouselSlides.length
    setCurrent((n + total) % total)
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
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <div
        className="absolute inset-0 z-0"
        onMouseEnter={() => setUserPaused(true)}
        onMouseLeave={() => setUserPaused(false)}
      >
        <div className="h-full w-full">
          {carouselSlides.map((slide, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            >
              <div className={`absolute inset-0 overflow-hidden transition-transform duration-[7000ms] ${i === current ? 'scale-100' : 'scale-110'}`}>
                <img
                  src={slide.src}
                  alt={slide.alt}
                  loading={i === 0 ? 'eager' : 'lazy'}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                    e.currentTarget.parentElement.style.background = 'linear-gradient(135deg,#123B34,#06111C)'
                  }}
                />
              </div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(214,178,94,0.18),transparent_20%)]" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#05111d]/95 via-[#071827]/78 to-[#06111c]/62" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06111c]/92 via-transparent to-transparent" />
            </div>
          ))}
        </div>
      </div>

      <div className="container-custom relative z-10 py-16 md:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, staggerChildren: 0.15 }}
          >
            <div className="mb-7 flex flex-wrap gap-3">
              <span className="section-chip">Since 1952</span>
              <span className="section-chip">Kano-born industrial group</span>
              <span className="section-chip">Building across 10 sectors</span>
            </div>
            <h1 className="max-w-3xl lg:text-5xl text-balance text-irs-white">
              Building the platform behind
              <span className="mt-3 block text-irs-gold">modern Africa.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-irs-white/68">
              IRS Group is a diversified Nigerian industrial platform spanning clean energy, CNG infrastructure,
              agriculture, manufacturing, real estate, and healthcare.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#about" className="btn-primary">
                Discover the Group
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#investors" className="btn-ghost">Explore investor case</a>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
              {heroStats.map((stat, i) => (
                <div key={i} className="surface-card group p-4 md:p-5">
                  <div className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-irs-white/35">
                    {stat.label}
                  </div>
                  <div className="mt-3 font-serif text-3xl font-bold leading-none text-irs-gold md:text-4xl">
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="surface-card-strong p-4 md:p-5">
              <div className="mb-4 flex items-center justify-between gap-4 px-1">
                <div>
                  <div className="label">Featured Platform</div>
                  <p className="mt-2 text-sm leading-7 text-irs-white/55">
                    Hover to pause the showcase and explore where the group is actively investing.
                  </p>
                </div>
                <div className="hidden items-center gap-2 md:flex">
                  <button
                    onClick={() => goTo(current - 1)}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-irs-white/70 transition-all hover:border-irs-gold/40 hover:text-irs-gold"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => goTo(current + 1)}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-irs-white/70 transition-all hover:border-irs-gold/40 hover:text-irs-gold"
                    aria-label="Next slide"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[30px] border border-white/10">
                <img src={currentSlide.src} alt={currentSlide.alt} className="aspect-[4/3] w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-irs-black via-irs-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                  <div className="inline-flex rounded-full border border-white/15 bg-irs-gold/14 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-irs-gold">
                    {currentSlide.label}
                  </div>
                  <p className="mt-3 max-w-md text-base leading-7 text-irs-white/80">{currentSlide.text}</p>
                </div>
              </div>

              <div className="mt-4 grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
                <div className="rounded-[28px] border border-white/10 bg-irs-black/25 p-5">
                  <div className="mb-4 flex items-center justify-between gap-4">
                    <span className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-irs-white/35">
                      Active priorities
                    </span>
                    <span className="text-sm text-irs-white/50">
                      {String(current + 1).padStart(2, '0')} / {String(carouselSlides.length).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {activeSectors.map((sector, i) => (
                      <div
                        key={i}
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-irs-white/72"
                      >
                        <span className="h-2 w-2 rounded-full" style={{ background: sector.color }} />
                        <span>{sector.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5">
                  <div className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-irs-white/35">
                    Slide progress
                  </div>
                  <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full rounded-full bg-gradient-to-r from-irs-gold to-irs-gold-light" ref={progressRef} style={{ width: '0%' }} />
                  </div>
                  <p className="mt-4 text-sm leading-7 text-irs-white/58">
                    A portfolio designed around long-term infrastructure, operating resilience, and national relevance.
                  </p>
                  <div className="mt-4 flex gap-2 md:hidden">
                    <button
                      onClick={() => goTo(current - 1)}
                      className="flex h-11 flex-1 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-irs-white/75"
                      aria-label="Previous slide"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => goTo(current + 1)}
                      className="flex h-11 flex-1 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-irs-white/75"
                      aria-label="Next slide"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
