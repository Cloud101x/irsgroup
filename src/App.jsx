import { useState, useEffect, useRef } from 'react'
import './index.css'

const carouselSlides = [
  { label: 'IRS Green Energy', src: '/solar.jpeg', alt: 'Solar farm — IRS Green Energy', text: 'IRS Green Energy — Solar & Renewable Power' },
  { label: 'IRS CNG Networks', src: '/cng.jpg', alt: 'Gas pipeline — IRS CNG Networks', text: 'IRS CNG Networks — Compressed Natural Gas Infrastructure' },
  { label: 'IRS Oil & Gas', src: '/Oilngas.jpeg', alt: 'Oil refinery — IRS Oil & Gas', text: 'IRS Oil & Gas Limited — Upstream & Midstream Operations' },
  { label: 'IRS AgriBusiness', src: '/agribiz.jpg', alt: 'Farmland — IRS AgriBusiness', text: 'IRS AgriBusiness — Agriculture & Food Systems' },
  { label: 'IRS Manufacturing', src: '/manufacturing.jpeg', alt: 'Factory floor — IRS Manufacturing', text: 'IRS Manufacturing — Industrial Production' },
  { label: 'IRS Properties', src: '/realty.jpg', alt: 'City skyline — IRS Properties', text: 'IRS Properties — Real Estate & Development' },
  { label: 'IRS Healthcare', src: '/health.jpg', alt: 'Hospital — IRS Healthcare', text: 'IRS Healthcare — World-Class Medical Services' },
  { label: 'IRS Electric Mobility', src: '/emobility.png', alt: 'Electric vehicle — IRS EV Mobility', text: 'IRS Electric Mobility — EV Infrastructure' },
  { label: 'IRS Fertilizer', src: '/newmethodoff.jpg', alt: 'Crop fields — IRS Fertilizer', text: 'IRS Fertilizer Company — Agro-Chemicals & Nutrition' },
  { label: 'IRS Sustainability', src: '/sus.jpg', alt: 'Wind turbines — IRS Sustainability', text: 'IRS Group — Sustainability & ESG Commitments' },
]

const irsKnowledge = {
  sector: 'IRS Group operates across 10 major sectors: Clean Energy, CNG Infrastructure, Electric Mobility, Solar Manufacturing, Agriculture, Oil & Gas, Manufacturing, Fertilizer, Real Estate, and Healthcare.',
  leader: 'IRS Group is chaired by Alhaji Rabiu Isyaku Rabiu, son of the Group founder Sheikh Isyaku Rabiu. The Group Managing Director oversees day-to-day operations alongside an experienced executive team.',
  invest: 'IRS Group welcomes investor enquiries for private placements, strategic partnerships, and joint ventures. Please contact investors@irsgroupnigeria.com or use the contact form on this page.',
  headquarter: 'IRS Group is headquartered at IRS House, 14 Ahmadu Bello Way, Kano State, Nigeria. The Group maintains offices in Lagos, Abuja, and Port Harcourt.',
  history: 'IRS Group was founded in 1952 in Kano by the late Sheikh Isyaku Rabiu, beginning as a trading company and growing over 72 years into one of Nigeria most diversified conglomerates.',
  energy: 'IRS Green Energy operates a 500MW renewable energy pipeline with utility-scale solar projects, mini-grids, and a solar panel manufacturing facility in Kano State.',
  cng: 'IRS CNG Networks is building 48 compressed natural gas fuelling stations across Nigeria, supporting the Federal Government Presidential CNG Initiative targeting 1 million vehicle conversions by 2027.',
  oil: 'IRS Oil & Gas Limited holds exploration acreages across the Niger Delta with 25+ years of sector experience, operating in compliance with NUPRC regulations.',
  career: 'IRS Group is currently hiring for roles in Energy Engineering, CNG Operations, Agriculture, Finance, Petroleum Geoscience, and Healthcare Management. Contact careers@irsgroupnigeria.com.',
  sustain: 'IRS Group is committed to reducing emissions by 40% by 2030, supporting 12,000+ smallholder farmers, and investing over 8 billion Naira in community development since 2010.'
}

function getAIResponse(q) {
  q = q.toLowerCase()
  if (q.includes('sector') || q.includes('business') || q.includes('division')) return irsKnowledge.sector
  if (q.includes('lead') || q.includes('chairman') || q.includes('ceo') || q.includes('who')) return irsKnowledge.leader
  if (q.includes('invest') || q.includes('shareholder')) return irsKnowledge.invest
  if (q.includes('head') || q.includes('location') || q.includes('address') || q.includes('where')) return irsKnowledge.headquarter
  if (q.includes('history') || q.includes('found') || q.includes('established')) return irsKnowledge.history
  if (q.includes('solar') || q.includes('renew') || q.includes('energy')) return irsKnowledge.energy
  if (q.includes('cng') || q.includes('gas') || q.includes('fuel')) return irsKnowledge.cng
  if (q.includes('oil') || q.includes('petroleum')) return irsKnowledge.oil
  if (q.includes('career') || q.includes('job') || q.includes('hire')) return irsKnowledge.career
  if (q.includes('sustain') || q.includes('esg') || q.includes('environment')) return irsKnowledge.sustain
  return 'Thank you for your question. Please use our Contact form or email info@irsgroupnigeria.com. Our team will respond within 24 hours.'
}

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [userPaused, setUserPaused] = useState(false)
  const [activeBiz, setActiveBiz] = useState('energy')
  const [aiOpen, setAiOpen] = useState(false)
  const [messages, setMessages] = useState([
    { text: "Welcome to IRS Group Nigeria. I'm your intelligent corporate assistant. Ask me anything about our businesses, leadership, projects, or investment opportunities. How can I help you today?", type: 'bot' }
  ])
  const [aiInput, setAiInput] = useState('')
  const [formSubmitted, setFormSubmitted] = useState(false)
  const progressRef = useRef(null)
  const autoplayRef = useRef(null)
  const INTERVAL = 5000

  const goToSlide = (n) => {
    setCurrentSlide((prev) => {
      const total = carouselSlides.length
      let next = (n + total) % total
      return next
    })
  }

  useEffect(() => {
    if (progressRef.current) {
      const bar = progressRef.current
      bar.style.transition = 'none'
      bar.style.width = '0%'
      void bar.offsetWidth
      bar.style.transition = `width ${INTERVAL}ms linear`
      bar.style.width = '100%'
    }
  }, [currentSlide])

  useEffect(() => {
    if (userPaused) {
      if (autoplayRef.current) clearInterval(autoplayRef.current)
      return
    }
    autoplayRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length)
    }, INTERVAL)
    return () => clearInterval(autoplayRef.current)
  }, [userPaused])

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('visible')
          observer.unobserve(e.target)
        }
      })
    }, { threshold: 0.12 })
    document.querySelectorAll('.fade-in, .timeline-item').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') { goToSlide(currentSlide + 1) }
      if (e.key === 'ArrowLeft') { goToSlide(currentSlide - 1) }
      if (e.key === 'Escape') { setMobileOpen(false) }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [currentSlide])

  const sendMsg = () => {
    const q = aiInput.trim()
    if (!q) return
    setMessages((m) => [...m, { text: q, type: 'user' }])
    setAiInput('')
    setTimeout(() => {
      setMessages((m) => [...m, { text: getAIResponse(q), type: 'bot' }])
    }, 600)
  }

  const quickQ = (q) => {
    setMessages((m) => [...m, { text: q, type: 'user' }])
    setTimeout(() => {
      setMessages((m) => [...m, { text: getAIResponse(q), type: 'bot' }])
    }, 600)
  }

  const handleFormSubmit = () => {
    setFormSubmitted(true)
    setTimeout(() => setFormSubmitted(false), 3000)
  }

  const openMobile = () => {
    setMobileOpen(true)
    document.body.style.overflow = 'hidden'
  }
  const closeMobile = () => {
    setMobileOpen(false)
    document.body.style.overflow = ''
  }

  return (
    <>
      {/* ═══════════════════════════════ NAVBAR ═══════════════════════════════ */}
      <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
        <div className="nav-inner">
          <a href="#hero" className="nav-logo">
            <div className="logo-mark">IRS</div>
            <div className="logo-text">
              <span className="logo-name">IRS GROUP</span>
              <span className="logo-sub">Nigeria</span>
            </div>
          </a>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#sectors">Businesses</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#subsidiaries">Subsidiaries</a></li>
            <li><a href="#sustainability">Sustainability</a></li>
            <li><a href="#media">Media</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#contact" className="nav-cta">Contact</a></li>
          </ul>
          <button className={`hamburger ${mobileOpen ? 'is-open' : ''}`} onClick={() => mobileOpen ? closeMobile() : openMobile()} aria-label="Menu" aria-expanded={mobileOpen}>
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`} onClick={(e) => { if (e.target === e.currentTarget) closeMobile() }}>
        <button className="mobile-close" onClick={closeMobile}>✕</button>
        <a href="#about" onClick={closeMobile}>About</a>
        <a href="#sectors" onClick={closeMobile}>Businesses</a>
        <a href="#projects" onClick={closeMobile}>Projects</a>
        <a href="#subsidiaries" onClick={closeMobile}>Subsidiaries</a>
        <a href="#sustainability" onClick={closeMobile}>Sustainability</a>
        <a href="#media" onClick={closeMobile}>Media</a>
        <a href="#careers" onClick={closeMobile}>Careers</a>
        <a href="#contact" onClick={closeMobile}>Contact</a>
      </div>

      {/* ═══════════════════════════════ HERO ═══════════════════════════════ */}
      <section id="hero">
        <div className="hero-carousel" id="heroCarousel" aria-hidden="true"
          onMouseEnter={() => setUserPaused(true)}
          onMouseLeave={() => setUserPaused(false)}
          onTouchStart={(e) => { window._touchStartX = e.changedTouches[0].clientX }}
          onTouchEnd={(e) => {
            const dx = e.changedTouches[0].clientX - (window._touchStartX || 0)
            if (Math.abs(dx) > 45) { dx < 0 ? goToSlide(currentSlide + 1) : goToSlide(currentSlide - 1) }
          }}
        >
          <div className="carousel-track" id="carouselTrack">
            {carouselSlides.map((slide, i) => (
              <div className={`carousel-slide ${i === currentSlide ? 'is-active' : ''}`} key={i} data-label={slide.label}>
                <div className="cslide-bg">
                  <img src={slide.src} alt={slide.alt} loading={i === 0 ? 'eager' : 'lazy'} crossOrigin="anonymous"
                    onError={(e) => { e.currentTarget.parentNode.style.background = 'linear-gradient(135deg,#1B4332,#0a0a0a)' }} />
                </div>
                <div className="cslide-overlay"></div>
                <div className="cslide-label">{slide.text}</div>
              </div>
            ))}
          </div>
        </div>

        <button className="carousel-arrow prev" onClick={() => goToSlide(currentSlide - 1)} aria-label="Previous slide" style={{ zIndex: 10 }}>&#8592;</button>
        <button className="carousel-arrow next" onClick={() => goToSlide(currentSlide + 1)} aria-label="Next slide" style={{ zIndex: 10 }}>&#8594;</button>
        <div className="carousel-progress" ref={progressRef} style={{ zIndex: 10 }}></div>
        <div className="carousel-dots" style={{ zIndex: 10 }}>
          {carouselSlides.map((_, i) => (
            <button key={i} className={`cdot ${i === currentSlide ? 'active' : ''}`} aria-label={`Go to slide ${i + 1}`} onClick={() => goToSlide(i)} />
          ))}
        </div>
        <div className="hero-bg"></div>
        <div className="hero-grid"></div>
        <div className="hero-content">
          <div className="hero-left">
            <div className="hero-tag">
              <div className="hero-tag-line"></div>
              <span className="hero-eyebrow">Established 1952 · Kano, Nigeria</span>
            </div>
            <h1 className="hero-title">
              Powering
              <span className="accent">Africa's</span>
              Future
            </h1>
            <p className="hero-desc">
              A diversified conglomerate at the forefront of Nigeria's energy transition, agricultural transformation, and industrial renaissance — building sustainable prosperity across the continent.
            </p>
            <div className="hero-actions">
              <a href="#about" className="btn-primary">Discover Our Story</a>
              <a href="#investors" className="btn-ghost">Investor Relations →</a>
            </div>
          </div>
          <div className="hero-right">
            <div className="hero-stat-grid">
              <div className="hero-stat">
                <div className="stat-number">72<span style={{ fontSize: '1.2rem' }}>+</span></div>
                <div className="stat-label">Years of Enterprise</div>
              </div>
              <div className="hero-stat">
                <div className="stat-number">10</div>
                <div className="stat-label">Business Sectors</div>
              </div>
              <div className="hero-stat">
                <div className="stat-number">15k<span style={{ fontSize: '1.2rem' }}>+</span></div>
                <div className="stat-label">Employees</div>
              </div>
              <div className="hero-stat">
                <div className="stat-number">₦2T<span style={{ fontSize: '1rem' }}>+</span></div>
                <div className="stat-label">Asset Portfolio</div>
              </div>
            </div>
            <div className="hero-visual">
              <div style={{ fontSize: '0.7rem', color: 'rgba(248,246,241,0.35)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Active Sectors</div>
              <div className="sector-pill"><span className="pill-dot" style={{ background: '#40916C' }}></span><span className="pill-text">Clean Energy & Solar Manufacturing</span></div>
              <div className="sector-pill"><span className="pill-dot" style={{ background: '#C9A84C' }}></span><span className="pill-text">Oil & Gas Exploration</span></div>
              <div className="sector-pill"><span className="pill-dot" style={{ background: '#60A5FA' }}></span><span className="pill-text">CNG Infrastructure</span></div>
              <div className="sector-pill"><span className="pill-dot" style={{ background: '#F59E0B' }}></span><span className="pill-text">Agriculture & Fertilizer</span></div>
              <div className="sector-pill"><span className="pill-dot" style={{ background: '#A78BFA' }}></span><span className="pill-text">Real Estate & Healthcare</span></div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <span className="scroll-text">Scroll</span>
          <div className="scroll-line"></div>
        </div>
      </section>

      {/* ═══════════════════════════════ TICKER ═══════════════════════════════ */}
      <div className="ticker-band">
        <div className="ticker-inner">
          {['Clean Energy','IRS Oil & Gas Limited','CNG Infrastructure','Solar Manufacturing','Electric Mobility','Agriculture & Fertilizer','Real Estate','Healthcare','IRS Green Energy','Manufacturing'].map((t, i) => (
            <div className="ticker-item" key={i}><span>{t}</span><span className="ticker-dot"></span></div>
          ))}
          {['Clean Energy','IRS Oil & Gas Limited','CNG Infrastructure','Solar Manufacturing','Electric Mobility','Agriculture & Fertilizer','Real Estate','Healthcare','IRS Green Energy','Manufacturing'].map((t, i) => (
            <div className="ticker-item" key={'dup'+i}><span>{t}</span><span className="ticker-dot"></span></div>
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════ ABOUT ═══════════════════════════════ */}
      <section id="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-visual fade-in">
              <div className="about-img-main" style={{ background: 'linear-gradient(135deg,#0a1628 0%,#1a2d4a 50%,#0d1f35 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ fontFamily: '"Cormorant Garamond",serif', fontSize: '3rem', color: 'var(--gold)', fontWeight: 700 }}>IRS</div>
                <div style={{ fontFamily: '"Barlow Condensed",sans-serif', fontSize: '0.7rem', letterSpacing: '0.25em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase' }}>Group Nigeria</div>
              </div>
              <div className="about-badge">
                <div className="badge-num">72</div>
                <div className="badge-text">Years of Excellence</div>
              </div>
            </div>
            <div className="about-content fade-in">
              <span className="label">About IRS Group</span>
              <h2 style={{ color: 'var(--white)', margin: '1rem 0 1.5rem' }}>A Legacy of Building Nigeria</h2>
              <div className="about-intro">
                "Founded in Kano in 1952, IRS Group stands as one of Nigeria's most storied industrial dynasties — a testament to visionary enterprise, generational commitment, and the enduring power of Nigerian ingenuity."
              </div>
              <p className="about-body">
                Established by the late Alhaji Isyaku Rabiu — a titan of northern Nigeria's commerce — IRS Group has grown from a pioneering trading house into a fully diversified conglomerate with interests spanning energy, agriculture, manufacturing, real estate, and healthcare. Headquartered in Kano State, the Group's footprint extends across Nigeria's six geopolitical zones, driving economic development at every scale.
              </p>
              <p className="about-body">
                Today, IRS Group stands at the intersection of Nigeria's energy transition and industrial modernization. Through strategic investments in CNG infrastructure, solar manufacturing, electric mobility, and clean energy, the Group is pioneering a new chapter — one that balances sustainable growth with social responsibility and delivers lasting value to shareholders, communities, and the nation.
              </p>
              <div className="about-pillars">
                <div className="pillar">
                  <div className="pillar-icon">🏗️</div>
                  <div className="pillar-title">Industrial Leadership</div>
                  <div className="pillar-desc">Decades of manufacturing and infrastructure development</div>
                </div>
                <div className="pillar">
                  <div className="pillar-icon">⚡</div>
                  <div className="pillar-title">Energy Transition</div>
                  <div className="pillar-desc">Driving Nigeria's clean energy and CNG revolution</div>
                </div>
                <div className="pillar">
                  <div className="pillar-icon">🌾</div>
                  <div className="pillar-title">Food Security</div>
                  <div className="pillar-desc">Large-scale agri-investments underpinning Nigeria's food future</div>
                </div>
                <div className="pillar">
                  <div className="pillar-icon">🤝</div>
                  <div className="pillar-title">Nation Building</div>
                  <div className="pillar-desc">Employing tens of thousands and transforming communities</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ SECTORS ═══════════════════════════════ */}
      <section id="sectors">
        <div className="container">
          <div className="section-header sectors-header fade-in">
            <span className="label">Our Business Portfolio</span>
            <h2 style={{ color: 'var(--white)' }}>Ten Pillars of<br />Nigerian Enterprise</h2>
            <p className="section-sub" style={{ margin: '0 auto' }}>From clean energy infrastructure to agricultural transformation, IRS Group's diversified portfolio addresses Nigeria's most critical economic imperatives.</p>
          </div>
          <div className="sectors-grid fade-in">
            {[
              { icon: '☀️', name: 'Clean Energy', desc: 'Utility-scale solar and renewables powering Nigeria\'s energy transition and grid reliability.' },
              { icon: '🔵', name: 'CNG Infrastructure', desc: 'Compressed Natural Gas fueling stations and vehicle conversion networks across Nigeria.' },
              { icon: '🚗', name: 'Electric Mobility', desc: 'EV adoption initiatives and charging infrastructure for Nigeria\'s transport sector.' },
              { icon: '🔆', name: 'Solar Manufacturing', desc: 'Domestic production of solar panels and energy storage systems for African markets.' },
              { icon: '🌾', name: 'Agriculture', desc: 'Large-scale farming, commodity processing, and agri-logistics driving food security.' },
              { icon: '🛢️', name: 'Oil & Gas', desc: 'Upstream exploration, midstream infrastructure, and downstream distribution.' },
              { icon: '🏭', name: 'Manufacturing', desc: 'Industrial manufacturing spanning textiles, packaging, consumer goods, and building materials.' },
              { icon: '🧪', name: 'Fertilizer', desc: 'Fertilizer production and distribution underpinning Nigeria\'s agricultural productivity.' },
              { icon: '🏢', name: 'Real Estate', desc: 'Commercial, residential, and industrial real estate across Nigeria\'s urban growth corridors.' },
              { icon: '🏥', name: 'Healthcare', desc: 'World-class hospital facilities and pharmaceutical investment for Nigeria\'s health sector.' },
            ].map((s, i) => (
              <div className="sector-card" key={i}>
                <div className="sector-icon">{s.icon}</div>
                <div className="sector-name">{s.name}</div>
                <div className="sector-desc">{s.desc}</div>
                <div className="sector-arrow">↗</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ BUSINESSES ═══════════════════════════════ */}
      <section id="businesses">
        <div className="container">
          <div className="section-header fade-in">
            <span className="label">Sector Deep Dives</span>
            <h2 style={{ color: 'var(--white)' }}>Built for Scale,<br />Designed for Impact</h2>
          </div>
          <div className="biz-tabs">
            {[
              { key: 'energy', label: 'Clean Energy' },
              { key: 'cng', label: 'CNG' },
              { key: 'oilgas', label: 'Oil & Gas' },
              { key: 'agri', label: 'Agriculture' },
              { key: 'manufacturing', label: 'Manufacturing' },
              { key: 'realestate', label: 'Real Estate' },
              { key: 'healthcare', label: 'Healthcare' },
            ].map((t) => (
              <button key={t.key} className={`biz-tab ${activeBiz === t.key ? 'active' : ''}`} onClick={() => setActiveBiz(t.key)}>
                {t.label}
              </button>
            ))}
          </div>

          {/* Energy */}
          <div className={`biz-panel ${activeBiz === 'energy' ? 'active' : ''}`} id="biz-energy">
            <div>
              <div className="biz-visual" style={{ background: 'linear-gradient(135deg,#1B4332,#2D6A4F,#40916C)' }}>
                <div className="biz-visual-overlay"></div>
                <span className="biz-visual-tag">Clean Energy Division</span>
              </div>
            </div>
            <div className="biz-content">
              <span className="label">IRS Green Energy</span>
              <h3 style={{ margin: '1rem 0' }}>Illuminating Nigeria's Energy Future</h3>
              <p>IRS Green Energy is the Group's flagship clean energy subsidiary, developing utility-scale solar installations, mini-grid systems, and distributed renewable energy solutions across Nigeria. Aligned with the Federal Government's energy transition mandate and the Presidential CNG Initiative, IRS Green Energy is positioned to power industries, communities, and critical infrastructure with clean, reliable electricity.</p>
              <p>Our solar manufacturing facility in Kano produces panels rated for tropical conditions, with production capacity serving both domestic deployment and West African export markets.</p>
              <div className="biz-metrics">
                <div className="biz-metric"><div className="biz-metric-val">500MW</div><div className="biz-metric-lbl">Pipeline Capacity</div></div>
                <div className="biz-metric"><div className="biz-metric-val">12</div><div className="biz-metric-lbl">Active Projects</div></div>
                <div className="biz-metric"><div className="biz-metric-val">₦180B</div><div className="biz-metric-lbl">Committed Investment</div></div>
                <div className="biz-metric"><div className="biz-metric-val">2030</div><div className="biz-metric-lbl">Net-Zero Target</div></div>
              </div>
              <a href="#contact" className="btn-primary" style={{ fontSize: '0.75rem' }}>Enquire About Projects</a>
            </div>
          </div>

          {/* CNG */}
          <div className={`biz-panel ${activeBiz === 'cng' ? 'active' : ''}`} id="biz-cng">
            <div>
              <div className="biz-visual" style={{ background: 'linear-gradient(135deg,#1E3A5F,#2563EB,#60A5FA)' }}>
                <div className="biz-visual-overlay"></div>
                <span className="biz-visual-tag">CNG Infrastructure</span>
              </div>
            </div>
            <div className="biz-content">
              <span className="label">IRS CNG Networks</span>
              <h3 style={{ margin: '1rem 0' }}>Fuelling the Transition to Clean Gas</h3>
              <p>IRS CNG Networks is developing Nigeria's most extensive private Compressed Natural Gas fuelling infrastructure, with strategically located stations across Kano, Lagos, Abuja, and major interstate corridors. In alignment with the Federal Government's Presidential CNG Initiative targeting 1 million vehicle conversions by 2027, IRS is a key private sector partner.</p>
              <p>The division operates conversion centres, retail fuelling stations, and bulk CNG transport solutions for industrial clients, positioning the Group at the heart of Nigeria's fuel transition.</p>
              <div className="biz-metrics">
                <div className="biz-metric"><div className="biz-metric-val">48</div><div className="biz-metric-lbl">Stations Planned</div></div>
                <div className="biz-metric"><div className="biz-metric-val">6</div><div className="biz-metric-lbl">States Covered</div></div>
                <div className="biz-metric"><div className="biz-metric-val">₦85B</div><div className="biz-metric-lbl">Total Investment</div></div>
                <div className="biz-metric"><div className="biz-metric-val">30%</div><div className="biz-metric-lbl">Cost Savings vs PMS</div></div>
              </div>
              <a href="#contact" className="btn-primary" style={{ fontSize: '0.75rem' }}>Partnership Enquiries</a>
            </div>
          </div>

          {/* Oil & Gas */}
          <div className={`biz-panel ${activeBiz === 'oilgas' ? 'active' : ''}`} id="biz-oilgas">
            <div>
              <div className="biz-visual" style={{ background: 'linear-gradient(135deg,#1A0A00,#7C3900,#C9A84C)' }}>
                <div className="biz-visual-overlay"></div>
                <span className="biz-visual-tag">Oil & Gas Division</span>
              </div>
            </div>
            <div className="biz-content">
              <span className="label">IRS Oil & Gas Limited</span>
              <h3 style={{ margin: '1rem 0' }}>Deep Expertise in Nigeria's Hydrocarbon Sector</h3>
              <p>IRS Oil & Gas Limited brings decades of experience to Nigeria's upstream and midstream petroleum sector. The subsidiary holds exploration acreages across the Niger Delta and North-Central basins, with strategic investments in pipeline infrastructure, oil services, and product distribution networks.</p>
              <p>The company works closely with NNPC Limited, the Nigerian Upstream Petroleum Regulatory Commission (NUPRC), and international partners to develop Nigeria's hydrocarbon resources with world-class standards for safety and environmental management.</p>
              <div className="biz-metrics">
                <div className="biz-metric"><div className="biz-metric-val">3</div><div className="biz-metric-lbl">Exploration Blocks</div></div>
                <div className="biz-metric"><div className="biz-metric-val">25yrs</div><div className="biz-metric-lbl">Sector Experience</div></div>
                <div className="biz-metric"><div className="biz-metric-val">₦220B</div><div className="biz-metric-lbl">Asset Value</div></div>
                <div className="biz-metric"><div className="biz-metric-val">2,800</div><div className="biz-metric-lbl">Direct Employees</div></div>
              </div>
              <a href="#contact" className="btn-primary" style={{ fontSize: '0.75rem' }}>Investor Enquiries</a>
            </div>
          </div>

          {/* Agriculture */}
          <div className={`biz-panel ${activeBiz === 'agri' ? 'active' : ''}`} id="biz-agri">
            <div>
              <div className="biz-visual" style={{ background: 'linear-gradient(135deg,#052e16,#166534,#4ade80)' }}>
                <div className="biz-visual-overlay"></div>
                <span className="biz-visual-tag">Agriculture Division</span>
              </div>
            </div>
            <div className="biz-content">
              <span className="label">IRS AgriBusiness</span>
              <h3 style={{ margin: '1rem 0' }}>From Farmgate to Global Market</h3>
              <p>IRS AgriBusiness operates an integrated agricultural platform spanning large-scale crop cultivation, processing, storage, and distribution. With extensive landholdings across Kano, Jigawa, and Kaduna states, the division produces groundnuts, sesame, sorghum, and other high-value commodities for both domestic processing and export.</p>
              <p>Our fertilizer manufacturing subsidiary ensures input supply chain security for Group operations and third-party farmers, while our warehouse network and logistics fleet guarantee post-harvest value preservation.</p>
              <div className="biz-metrics">
                <div className="biz-metric"><div className="biz-metric-val">50k</div><div className="biz-metric-lbl">Hectares Cultivated</div></div>
                <div className="biz-metric"><div className="biz-metric-val">12k</div><div className="biz-metric-lbl">Smallholder Partners</div></div>
                <div className="biz-metric"><div className="biz-metric-val">4</div><div className="biz-metric-lbl">Processing Plants</div></div>
                <div className="biz-metric"><div className="biz-metric-val">₦95B</div><div className="biz-metric-lbl">Annual Revenue</div></div>
              </div>
              <a href="#contact" className="btn-primary" style={{ fontSize: '0.75rem' }}>Export Enquiries</a>
            </div>
          </div>

          {/* Manufacturing */}
          <div className={`biz-panel ${activeBiz === 'manufacturing' ? 'active' : ''}`} id="biz-manufacturing">
            <div>
              <div className="biz-visual" style={{ background: 'linear-gradient(135deg,#111827,#374151,#9CA3AF)' }}>
                <div className="biz-visual-overlay"></div>
                <span className="biz-visual-tag">Manufacturing Division</span>
              </div>
            </div>
            <div className="biz-content">
              <span className="label">IRS Manufacturing</span>
              <h3 style={{ margin: '1rem 0' }}>Made in Nigeria, Built for the World</h3>
              <p>IRS Manufacturing traces its roots to the Bagauda Textile Mill established in 1972, and has since expanded into a diversified industrial platform. Today, the division encompasses textile and garment production, packaging materials, building products, and consumer goods manufacturing — all anchored in Kano State's industrial heartland.</p>
              <p>With modern German and Japanese production lines, ISO-certified quality systems, and a workforce of skilled Nigerian technicians, IRS Manufacturing products meet both domestic demand and international export standards.</p>
              <div className="biz-metrics">
                <div className="biz-metric"><div className="biz-metric-val">6</div><div className="biz-metric-lbl">Production Facilities</div></div>
                <div className="biz-metric"><div className="biz-metric-val">5k+</div><div className="biz-metric-lbl">Employees</div></div>
                <div className="biz-metric"><div className="biz-metric-val">ISO</div><div className="biz-metric-lbl">Certified Quality</div></div>
                <div className="biz-metric"><div className="biz-metric-val">1972</div><div className="biz-metric-lbl">Manufacturing Since</div></div>
              </div>
              <a href="#contact" className="btn-primary" style={{ fontSize: '0.75rem' }}>Procurement Enquiries</a>
            </div>
          </div>

          {/* Real Estate */}
          <div className={`biz-panel ${activeBiz === 'realestate' ? 'active' : ''}`} id="biz-realestate">
            <div>
              <div className="biz-visual" style={{ background: 'linear-gradient(135deg,#1e1b4b,#4338ca,#818cf8)' }}>
                <div className="biz-visual-overlay"></div>
                <span className="biz-visual-tag">Real Estate Division</span>
              </div>
            </div>
            <div className="biz-content">
              <span className="label">IRS Properties</span>
              <h3 style={{ margin: '1rem 0' }}>Premium Spaces, Enduring Value</h3>
              <p>IRS Properties develops and manages a premier portfolio of commercial office towers, residential estates, retail hubs, and industrial parks across Nigeria's fastest-growing urban markets. With landmark developments in Kano, Abuja, and Lagos, the company delivers world-class built environments that define Nigeria's modern cityscape.</p>
              <p>Our estate management platform offers investors attractive yields through long-term commercial leases, while our residential developments provide aspirational homes for Nigeria's growing middle class.</p>
              <div className="biz-metrics">
                <div className="biz-metric"><div className="biz-metric-val">₦340B</div><div className="biz-metric-lbl">Portfolio Value</div></div>
                <div className="biz-metric"><div className="biz-metric-val">85+</div><div className="biz-metric-lbl">Properties</div></div>
                <div className="biz-metric"><div className="biz-metric-val">3</div><div className="biz-metric-lbl">Major Cities</div></div>
                <div className="biz-metric"><div className="biz-metric-val">96%</div><div className="biz-metric-lbl">Occupancy Rate</div></div>
              </div>
              <a href="#contact" className="btn-primary" style={{ fontSize: '0.75rem' }}>Investment Enquiries</a>
            </div>
          </div>

          {/* Healthcare */}
          <div className={`biz-panel ${activeBiz === 'healthcare' ? 'active' : ''}`} id="biz-healthcare">
            <div>
              <div className="biz-visual" style={{ background: 'linear-gradient(135deg,#0c1a2e,#0e4b7a,#38bdf8)' }}>
                <div className="biz-visual-overlay"></div>
                <span className="biz-visual-tag">Healthcare Division</span>
              </div>
            </div>
            <div className="biz-content">
              <span className="label">IRS Healthcare</span>
              <h3 style={{ margin: '1rem 0' }}>World-Class Care for Nigerian Communities</h3>
              <p>IRS Healthcare is building Nigeria's most modern private healthcare infrastructure, beginning with a flagship 300-bed specialist hospital in Kano equipped with cutting-edge diagnostic, surgical, and rehabilitation facilities. The division is developing a network of polyclinics, diagnostic centres, and pharmaceutical distribution across northern Nigeria.</p>
              <p>Guided by the belief that every Nigerian deserves world-class medical care, IRS Healthcare partners with leading international medical institutions to bring the best clinical talent and technology to Nigerian patients.</p>
              <div className="biz-metrics">
                <div className="biz-metric"><div className="biz-metric-val">300</div><div className="biz-metric-lbl">Bed Flagship Hospital</div></div>
                <div className="biz-metric"><div className="biz-metric-val">8</div><div className="biz-metric-lbl">Planned Facilities</div></div>
                <div className="biz-metric"><div className="biz-metric-val">₦75B</div><div className="biz-metric-lbl">Committed Capital</div></div>
                <div className="biz-metric"><div className="biz-metric-val">2026</div><div className="biz-metric-lbl">Phase 1 Opening</div></div>
              </div>
              <a href="#contact" className="btn-primary" style={{ fontSize: '0.75rem' }}>Healthcare Partnerships</a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ PROJECTS ═══════════════════════════════ */}
      <section id="projects">
        <div className="container">
          <div className="section-header fade-in">
            <span className="label">Flagship Projects</span>
            <h2 style={{ color: 'var(--white)' }}>Transforming<br />Nigeria's Landscape</h2>
            <p className="section-sub">Major infrastructure investments that are reshaping Nigeria's energy, agricultural, and industrial landscape for generations.</p>
          </div>
          <div className="projects-grid fade-in">
            <div className="project-card large">
              <div className="project-bg" style={{ background: 'linear-gradient(135deg,#052e16,#1B4332,#2D6A4F)' }}></div>
              <div className="project-overlay">
                <span className="project-tag">Energy</span>
                <div className="project-title">Kano Solar Power Complex — Phase I</div>
                <div className="project-location">📍 Kano State, Nigeria · 250MW · ₦120 Billion</div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-bg" style={{ background: 'linear-gradient(135deg,#1e3a5f,#1d4ed8)' }}></div>
              <div className="project-overlay">
                <span className="project-tag">CNG</span>
                <div className="project-title">North-South CNG Corridor</div>
                <div className="project-location">📍 Kano–Lagos Expressway · 24 Stations</div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-bg" style={{ background: 'linear-gradient(135deg,#3b1f00,#92400e)' }}></div>
              <div className="project-overlay">
                <span className="project-tag">Oil & Gas</span>
                <div className="project-title">Niger Delta Exploration Block OML-47</div>
                <div className="project-location">📍 Rivers State · Active Exploration</div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-bg" style={{ background: 'linear-gradient(135deg,#1a0533,#4c1d95)' }}></div>
              <div className="project-overlay">
                <span className="project-tag">Real Estate</span>
                <div className="project-title">IRS Plaza — Kano Commercial Tower</div>
                <div className="project-location">📍 Kano Central Business District · 28 Floors</div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-bg" style={{ background: 'linear-gradient(135deg,#064e3b,#065f46)' }}></div>
              <div className="project-overlay">
                <span className="project-tag">Agriculture</span>
                <div className="project-title">Jigawa Integrated Farm Estate</div>
                <div className="project-location">📍 Jigawa State · 20,000 Hectares</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ LEADERSHIP ═══════════════════════════════ */}
      <section id="leadership">
        <div className="container">
          <div className="section-header fade-in">
            <span className="label">Corporate Leadership</span>
            <h2 style={{ color: 'var(--white)' }}>Guided by Vision,<br />Driven by Purpose</h2>
            <p className="section-sub">IRS Group's leadership team brings together Nigeria's most experienced executives in energy, finance, agriculture, and industrial development.</p>
          </div>
          <div className="leadership-grid fade-in">
            {[
              { name: 'Alhaji Rabiu Isyaku Rabiu', role: 'Group Chairman', bg: 'linear-gradient(135deg,#1B4332,#2D6A4F,#C9A84C)', bio: "Son of the Group's founder, Alhaji Isyaku Rabiu, and steward of the family's industrial legacy spanning seven decades. Leading the Group's strategic transformation into clean energy and next-generation infrastructure." },
              { name: 'Alhaji Muhammad Kabir Rabiu', role: 'Group Managing Director', bg: 'linear-gradient(135deg,#1e1b4b,#3730a3,#6366f1)', bio: 'A seasoned corporate executive with over 25 years of experience across banking, energy, and industrial management. Overseeing the Group\'s day-to-day operations and cross-sector growth strategy.' },
              { name: 'Hajiya Fatima Suleiman', role: 'CFO & Executive Director', bg: 'linear-gradient(135deg,#0c4a6e,#0369a1,#38bdf8)', bio: 'Harvard-educated finance executive who previously led treasury operations at a leading West African investment bank. Driving the Group\'s capital strategy, financial compliance, and investor relations.' },
              { name: 'Engr. Adebayo Oluwatobi', role: 'Chief Energy Officer', bg: 'linear-gradient(135deg,#052e16,#166534,#4ade80)', bio: 'A petroleum engineering expert with field experience across the Niger Delta and international energy markets. Spearheading IRS Group\'s oil & gas operations and clean energy transition roadmap.' },
            ].map((l, i) => (
              <div className="leader-card" key={i}>
                <div className="leader-portrait">
                  <div className="leader-portrait-bg" style={{ background: l.bg }}></div>
                  <div className="leader-portrait-overlay"></div>
                </div>
                <div className="leader-body">
                  <div className="leader-name">{l.name}</div>
                  <div className="leader-role">{l.role}</div>
                  <p className="leader-bio">{l.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ SUSTAINABILITY ═══════════════════════════════ */}
      <section id="sustainability">
        <div className="container sustain-content">
          <div className="sustain-grid">
            <div className="fade-in">
              <span className="label" style={{ color: 'rgba(255,255,255,0.6)' }}>Environmental Stewardship</span>
              <h2 className="sustain-title" style={{ margin: '1rem 0' }}>Our Commitment to a<br />Greener Nigeria</h2>
              <p className="sustain-body">At IRS Group, sustainability is not a program — it is embedded in our purpose. We recognise that Nigeria's long-term prosperity depends on transitioning to clean, efficient, and equitable energy systems. Every investment we make is evaluated against environmental, social, and governance (ESG) criteria.</p>
              <div className="sustain-pillars">
                <div className="sustain-pillar">
                  <div className="sustain-pillar-icon">🌱</div>
                  <div className="sustain-pillar-text">
                    <h4>Energy Transition</h4>
                    <p>Accelerating Nigeria's transition from fossil fuels to solar, CNG, and distributed renewables through targeted infrastructure investments.</p>
                  </div>
                </div>
                <div className="sustain-pillar">
                  <div className="sustain-pillar-icon">💧</div>
                  <div className="sustain-pillar-text">
                    <h4>Community Impact</h4>
                    <p>Creating sustainable employment, supporting smallholder farmers, and investing in healthcare and education in host communities.</p>
                  </div>
                </div>
                <div className="sustain-pillar">
                  <div className="sustain-pillar-icon">🏭</div>
                  <div className="sustain-pillar-text">
                    <h4>Clean Manufacturing</h4>
                    <p>Reducing industrial emissions, optimising waste streams, and integrating circular economy principles across manufacturing operations.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="sustain-stats fade-in">
              <div className="sustain-stat">
                <div className="sustain-stat-num">40%</div>
                <div className="sustain-stat-label">Emissions Reduction Target by 2030</div>
              </div>
              <div className="sustain-stat">
                <div className="sustain-stat-num">500MW</div>
                <div className="sustain-stat-label">Renewable Energy Pipeline</div>
              </div>
              <div className="sustain-stat">
                <div className="sustain-stat-num">12k</div>
                <div className="sustain-stat-label">Smallholder Farmers Supported</div>
              </div>
              <div className="sustain-stat">
                <div className="sustain-stat-num">₦8B</div>
                <div className="sustain-stat-label">Community Investment Since 2010</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ HISTORY TIMELINE ═══════════════════════════════ */}
      <section id="history">
        <div className="container">
          <div className="section-header fade-in">
            <span className="label">Corporate History</span>
            <h2 style={{ color: 'var(--white)' }}>Seven Decades of<br />Nigerian Enterprise</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
            <div className="timeline">
              {[
                { year: '1952', title: 'Foundation in Kano', body: "Alhaji Isyaku Rabiu establishes Isyaku Rabiu & Sons, trading in sewing machines, bicycles, and agricultural commodities — building the commercial foundation of the IRS enterprise." },
                { year: '1963', title: 'Industrial Expansion', body: 'IRS Group joins major business consortia, marking the transition from commodities trading to industrial investment. First forays into manufacturing and financial services.' },
                { year: '1972', title: 'Bagauda Textile Mill', body: 'Establishment of Bagauda Textile Mill, a landmark joint venture manufacturing woven fabrics for military uniforms and the Nigerian domestic market. IRS becomes a manufacturing powerhouse.' },
                { year: '1980s', title: 'Diversification Era', body: 'Aggressive expansion into real estate, frozen foods, sugar, insurance, and motor vehicle distribution — establishing IRS as northern Nigeria\'s most diversified conglomerate.' },
              ].map((item, i) => (
                <div className="timeline-item" key={i}>
                  <div className="timeline-dot"></div>
                  <div className="timeline-year">{item.year}</div>
                  <div className="timeline-title" style={{ color: 'var(--white)' }}>{item.title}</div>
                  <p className="timeline-body">{item.body}</p>
                </div>
              ))}
            </div>
            <div className="timeline">
              {[
                { year: '2000s', title: 'Oil & Gas Entry', body: 'IRS Oil & Gas Limited secures its first exploration rights in the Niger Delta, establishing the Group\'s foothold in Nigeria\'s most lucrative industrial sector.' },
                { year: '2010s', title: 'Generational Transition', body: 'The next generation of the Rabiu family assumes stewardship of the Group, bringing fresh vision and international perspective to expand IRS Group\'s portfolio and governance structures.' },
                { year: '2020', title: 'Green Energy Pivot', body: 'IRS Green Energy is established, marking the Group\'s commitment to Nigeria\'s energy transition. Solar manufacturing operations commence in Kano State.' },
                { year: '2024–', title: 'The Next Chapter', body: 'Launch of Nigeria\'s largest private CNG infrastructure network, 300-bed specialist hospital groundbreaking, and 500MW solar pipeline activation — IRS Group\'s most ambitious decade begins.' },
              ].map((item, i) => (
                <div className="timeline-item" key={i}>
                  <div className="timeline-dot"></div>
                  <div className="timeline-year">{item.year}</div>
                  <div className="timeline-title" style={{ color: 'var(--white)' }}>{item.title}</div>
                  <p className="timeline-body">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ SUBSIDIARIES ═══════════════════════════════ */}
      <section id="subsidiaries">
        <div className="container">
          <div className="section-header fade-in">
            <span className="label">Group Companies</span>
            <h2 style={{ color: 'var(--white)' }}>Our Subsidiary Network</h2>
            <p className="section-sub">Each IRS subsidiary operates as a best-in-class enterprise within its sector, backed by the Group's financial strength and governance standards.</p>
          </div>
          <div className="sub-grid fade-in">
            {[
              { code: 'O&G', name: 'IRS Oil & Gas Limited', sector: 'Upstream & Midstream Petroleum', desc: "Nigeria's upstream exploration and production arm of IRS Group, with active blocks across the Niger Delta and North-Central basins. Operates in full compliance with NUPRC regulations." },
              { code: 'GE', name: 'IRS Green Energy', sector: 'Renewable Energy & Solar', desc: 'The clean energy division driving Nigeria\'s solar revolution. Operates utility-scale solar projects, solar panel manufacturing, and distributed energy systems for off-grid communities.' },
              { code: 'CNG', name: 'IRS CNG Networks', sector: 'Compressed Natural Gas Infrastructure', desc: "Building Nigeria's largest private CNG fuelling and conversion network, supporting the Presidential CNG Initiative and transitioning millions of Nigerians to clean, affordable transport fuel." },
              { code: 'MFG', name: 'IRS Manufacturing Industries', sector: 'Industrial Manufacturing', desc: 'Legacy industrial arm of IRS Group with six production facilities across textiles, packaging, building materials, and consumer goods. Heir to the storied Bagauda Textile tradition.' },
              { code: 'AB', name: 'IRS AgriBusiness', sector: 'Agriculture & Food Systems', desc: 'Integrated agri-platform managing 50,000+ hectares, partnering with 12,000 smallholder farmers, and operating four commodity processing plants across northern Nigeria.' },
              { code: 'PP', name: 'IRS Properties', sector: 'Real Estate Development', desc: 'Premier real estate developer managing a ₦340 billion portfolio of office towers, residential estates, and industrial parks in Kano, Abuja, and Lagos.' },
              { code: 'HC', name: 'IRS Healthcare', sector: 'Medical Services & Pharma', desc: "Building northern Nigeria's most advanced private hospital network, starting with a 300-bed specialist centre in Kano delivering world-class diagnostic and surgical care." },
              { code: 'EV', name: 'IRS Electric Mobility', sector: 'EV Infrastructure', desc: 'Pioneering electric vehicle adoption in Nigeria through charging infrastructure, EV fleet leasing, and partnerships with global electric vehicle manufacturers.' },
              { code: 'FT', name: 'IRS Fertilizer Company', sector: 'Agro-Chemicals & Fertilizer', desc: "Producing NPK and urea-based fertilizers for Nigeria's agricultural sector, reducing input costs for farmers and supporting national food security objectives." },
            ].map((s, i) => (
              <div className="sub-card" key={i}>
                <div className="sub-logo">{s.code}</div>
                <div className="sub-name">{s.name}</div>
                <div className="sub-sector">{s.sector}</div>
                <p className="sub-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ OPERATIONS MAP ═══════════════════════════════ */}
      <section id="operations">
        <div className="container">
          <div className="section-header fade-in">
            <span className="label">Geographic Footprint</span>
            <h2 style={{ color: 'var(--white)' }}>Operations Across Nigeria</h2>
          </div>
          <div className="map-wrapper fade-in">
            <div className="map-svg-container">
              <svg viewBox="0 0 400 450" className="nigeria-map" xmlns="http://www.w3.org/2000/svg">
                <path d="M80,60 L120,40 L180,30 L240,35 L290,50 L330,80 L350,120 L340,160 L360,200 L350,240 L320,280 L300,320 L270,360 L240,390 L210,410 L190,420 L160,410 L140,380 L120,360 L90,340 L70,300 L50,260 L40,220 L50,180 L60,140 L70,100 Z" fill="rgba(27,67,50,0.25)" stroke="rgba(201,168,76,0.4)" strokeWidth="1.5"/>
                <path d="M160,200 L200,180 L240,200 L220,240 L180,250 Z" fill="rgba(201,168,76,0.08)" stroke="rgba(201,168,76,0.2)" strokeWidth="1"/>
                <circle cx="190" cy="100" r="8" className="map-dot"/>
                <circle cx="190" cy="85" r="4" fill="rgba(201,168,76,0.3)"/>
                <text x="205" y="104" fill="rgba(248,246,241,0.7)" fontSize="11" fontFamily="Barlow,sans-serif">Kano HQ</text>
                <circle cx="140" cy="190" r="6" className="map-dot"/>
                <text x="152" y="194" fill="rgba(248,246,241,0.6)" fontSize="10" fontFamily="Barlow,sans-serif">Kaduna</text>
                <circle cx="220" cy="140" r="6" className="map-dot"/>
                <text x="232" y="144" fill="rgba(248,246,241,0.6)" fontSize="10" fontFamily="Barlow,sans-serif">Jigawa</text>
                <circle cx="190" cy="280" r="6" className="map-dot" style={{ animationDelay: '0.5s' }}/>
                <text x="202" y="284" fill="rgba(248,246,241,0.6)" fontSize="10" fontFamily="Barlow,sans-serif">Abuja</text>
                <circle cx="150" cy="370" r="6" className="map-dot" style={{ animationDelay: '1s' }}/>
                <text x="162" y="374" fill="rgba(248,246,241,0.6)" fontSize="10" fontFamily="Barlow,sans-serif">Lagos</text>
                <circle cx="270" cy="320" r="6" className="map-dot" style={{ animationDelay: '0.7s' }}/>
                <text x="282" y="324" fill="rgba(248,246,241,0.6)" fontSize="10" fontFamily="Barlow,sans-serif">Rivers</text>
                <circle cx="100" cy="250" r="5" className="map-dot" style={{ animationDelay: '1.2s' }}/>
                <text x="112" y="254" fill="rgba(248,246,241,0.5)" fontSize="9" fontFamily="Barlow,sans-serif">Sokoto</text>
              </svg>
            </div>
            <div>
              <p style={{ color: 'rgba(248,246,241,0.55)', marginBottom: '2rem', lineHeight: '1.75' }}>IRS Group's operational footprint spans Nigeria's six geopolitical zones, with major concentrations in the North-West, North-Central, South-West, and South-South. Headquartered in Kano — Nigeria's commercial capital of the North — the Group maintains regional offices and operations in:</p>
              <div className="locations-list">
                {[
                  { name: 'Kano State — Group Headquarters', desc: 'Corporate HQ, Manufacturing, Agriculture, Solar Manufacturing', dot: 'var(--gold)' },
                  { name: 'Lagos State', desc: 'IRS Properties, Trading Hub, CNG Infrastructure' },
                  { name: 'Abuja (FCT)', desc: 'Government Relations, CNG Network, Real Estate' },
                  { name: 'Rivers State — Niger Delta', desc: 'IRS Oil & Gas — Exploration Block Operations' },
                  { name: 'Jigawa State', desc: 'IRS AgriBusiness — 20,000 Ha Farm Estate' },
                  { name: 'Kaduna State', desc: 'Manufacturing Facility, Agricultural Processing' },
                ].map((loc, i) => (
                  <div className="location-item" key={i}>
                    <div className="location-dot" style={loc.dot ? { background: loc.dot } : {}}></div>
                    <div>
                      <div className="location-name">{loc.name}</div>
                      <div className="location-desc">{loc.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ MEDIA ═══════════════════════════════ */}
      <section id="media">
        <div className="container">
          <div className="section-header fade-in">
            <span className="label">Media Center</span>
            <h2 style={{ color: 'var(--white)' }}>Latest News &<br />Press Releases</h2>
          </div>
          <div className="news-grid fade-in">
            <div className="news-featured">
              <div className="news-featured-img" style={{ background: 'linear-gradient(135deg,#0a1628,#1a3060,#0d2040)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ fontFamily: '"Cormorant Garamond",serif', fontSize: '3rem', color: 'var(--gold)', fontWeight: 700 }}>IRS</div>
                <div style={{ fontFamily: '"Barlow Condensed",sans-serif', fontSize: '0.7rem', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase' }}>Press Release</div>
              </div>
              <div className="news-featured-body">
                <div className="news-tag">Press Release</div>
                <div className="news-title">IRS Group Announces ₦120 Billion Solar Power Investment for Kano State</div>
                <p className="news-excerpt">IRS Green Energy today announced the commencement of Phase I of the Kano Solar Power Complex, a 250MW utility-scale solar installation that will provide clean electricity to over 800,000 households and industrial consumers across Kano State. The project is the largest single renewable energy investment by a Nigerian private conglomerate.</p>
                <div className="news-meta">15 January 2025 · Press Release · IRS Corporate Communications</div>
              </div>
            </div>
            <div className="news-list">
              {[
                { tag: 'Energy', title: 'IRS CNG Networks Opens 12th Fuelling Station on Kano–Abuja Corridor', date: '28 February 2025' },
                { tag: 'Healthcare', title: 'Ground-Breaking Ceremony for IRS 300-Bed Specialist Hospital, Kano', date: '14 January 2025' },
                { tag: 'Agriculture', title: 'IRS AgriBusiness Partners Federal Government on Backward Integration Program', date: '8 December 2024' },
                { tag: 'Corporate', title: 'IRS Group Recognised at Nigeria Business Excellence Awards 2024', date: '22 November 2024' },
                { tag: 'Oil & Gas', title: 'IRS Oil & Gas Signs Technical Services Agreement with International Major', date: '3 October 2024' },
              ].map((n, i) => (
                <div className="news-item" key={i}>
                  <div className="news-item-tag">{n.tag}</div>
                  <div className="news-item-title">{n.title}</div>
                  <div className="news-item-date">{n.date}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <a href="#contact" className="btn-ghost">View All Press Releases →</a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ INVESTORS ═══════════════════════════════ */}
      <section id="investors">
        <div className="investors-bg"></div>
        <div className="container investors-content fade-in">
          <span className="label">Investor Relations</span>
          <h2 className="investors-title" style={{ color: 'var(--white)', marginTop: '1rem' }}>A Compelling<br />Investment Case</h2>
          <p className="investors-sub">IRS Group offers investors unparalleled exposure to Nigeria's fastest-growing industrial sectors — from energy transition infrastructure to agriculture and healthcare — underpinned by 72 years of operational excellence and a blue-chip balance sheet.</p>
          <div className="investors-metrics">
            <div className="inv-metric">
              <span className="inv-metric-num">₦2T+</span>
              <span className="inv-metric-label">Group Asset Base</span>
            </div>
            <div className="inv-metric">
              <span className="inv-metric-num">₦480B</span>
              <span className="inv-metric-label">Annual Revenue</span>
            </div>
            <div className="inv-metric">
              <span className="inv-metric-num">AA-</span>
              <span className="inv-metric-label">Credit Rating Target</span>
            </div>
            <div className="inv-metric">
              <span className="inv-metric-num">10+</span>
              <span className="inv-metric-label">Active Subsidiaries</span>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#contact" className="btn-primary">Request Investor Pack</a>
            <a href="#contact" className="btn-ghost">Schedule Management Meeting →</a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ CAREERS ═══════════════════════════════ */}
      <section id="careers">
        <div className="container">
          <div className="careers-intro fade-in">
            <div>
              <span className="label">Join IRS Group</span>
              <h2 style={{ color: 'var(--white)', margin: '1rem 0' }}>Build the Future<br />of Nigeria</h2>
              <p style={{ color: 'rgba(248,246,241,0.55)', lineHeight: '1.8' }}>IRS Group is home to Nigeria's most ambitious professionals. We offer careers at the frontier of energy transition, industrial innovation, and agricultural transformation — with the resources, mentorship, and growth trajectory of a world-class conglomerate.</p>
              <a href="#contact" className="btn-primary" style={{ marginTop: '2rem', display: 'inline-block' }}>Explore Opportunities</a>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              {[
                { val: '15k+', lbl: 'Employees' },
                { val: '36', lbl: 'Open Positions' },
                { val: '10', lbl: 'Business Divisions' },
                { val: '6', lbl: 'Nigerian States' },
              ].map((s, i) => (
                <div key={i} style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '4px', textAlign: 'center' }}>
                  <div style={{ fontFamily: '"Cormorant Garamond",serif', fontSize: '2.5rem', color: 'var(--gold)', fontWeight: 700 }}>{s.val}</div>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(248,246,241,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{s.lbl}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="jobs-grid fade-in">
            {[
              { title: 'Senior Energy Engineer', meta: 'IRS Green Energy · Kano State', tags: ['Full-Time','Senior','Energy'] },
              { title: 'Head of CNG Operations', meta: 'IRS CNG Networks · Abuja', tags: ['Full-Time','Director','Gas'] },
              { title: 'Agricultural Program Manager', meta: 'IRS AgriBusiness · Jigawa', tags: ['Full-Time','Mid-Level','Agriculture'] },
              { title: 'Corporate Finance Analyst', meta: 'IRS Group HQ · Kano', tags: ['Full-Time','Mid-Level','Finance'] },
              { title: 'Petroleum Geoscientist', meta: 'IRS Oil & Gas · Port Harcourt', tags: ['Full-Time','Senior','Oil & Gas'] },
              { title: 'Healthcare Project Director', meta: 'IRS Healthcare · Kano', tags: ['Full-Time','Director','Health'] },
            ].map((j, i) => (
              <div className="job-card" key={i}>
                <div className="job-title">{j.title}</div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(248,246,241,0.4)' }}>{j.meta}</div>
                <div className="job-meta">
                  {j.tags.map((t, ti) => <span className="job-tag" key={ti}>{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ CONTACT ═══════════════════════════════ */}
      <section id="contact">
        <div className="container">
          <div className="contact-grid">
            <div className="fade-in">
              <span className="label">Get in Touch</span>
              <h3 style={{ margin: '1rem 0' }}>Let's Build Together</h3>
              <p>Whether you are an investor seeking to participate in Nigeria's growth story, a government partner exploring infrastructure collaboration, or a business seeking strategic alliance — IRS Group welcomes meaningful dialogue.</p>
              <div className="contact-details">
                <div className="contact-detail">
                  <div className="contact-detail-icon">📍</div>
                  <div className="contact-detail-text">
                    <strong>Headquarters</strong>
                    <span>IRS House, 14 Ahmadu Bello Way, Kano State, Nigeria</span>
                  </div>
                </div>
                <div className="contact-detail">
                  <div className="contact-detail-icon">📞</div>
                  <div className="contact-detail-text">
                    <strong>Main Switchboard</strong>
                    <span>+234 (0) 800 IRS GROUP</span>
                  </div>
                </div>
                <div className="contact-detail">
                  <div className="contact-detail-icon">✉️</div>
                  <div className="contact-detail-text">
                    <strong>General Enquiries</strong>
                    <span>info@irsgroupnigeria.com</span>
                  </div>
                </div>
                <div className="contact-detail">
                  <div className="contact-detail-icon">💼</div>
                  <div className="contact-detail-text">
                    <strong>Investor Relations</strong>
                    <span>investors@irsgroupnigeria.com</span>
                  </div>
                </div>
                <div className="contact-detail">
                  <div className="contact-detail-icon">🌐</div>
                  <div className="contact-detail-text">
                    <strong>Lagos Office</strong>
                    <span>IRS Properties Tower, Victoria Island, Lagos</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-form fade-in">
              <div className="form-row">
                <div className="form-field">
                  <label>First Name</label>
                  <input type="text" placeholder="Alhaji" />
                </div>
                <div className="form-field">
                  <label>Last Name</label>
                  <input type="text" placeholder="Ibrahim" />
                </div>
              </div>
              <div className="form-field">
                <label>Email Address</label>
                <input type="email" placeholder="you@company.com" />
              </div>
              <div className="form-row">
                <div className="form-field">
                  <label>Organisation</label>
                  <input type="text" placeholder="Your Company" />
                </div>
                <div className="form-field">
                  <label>Phone Number</label>
                  <input type="tel" placeholder="+234 000 0000 000" />
                </div>
              </div>
              <div className="form-field">
                <label>Enquiry Type</label>
                <select>
                  <option value="">Select Enquiry Type</option>
                  <option>Investor Relations</option>
                  <option>Business Partnership</option>
                  <option>Government Collaboration</option>
                  <option>Media & Press</option>
                  <option>Careers</option>
                  <option>General Enquiry</option>
                </select>
              </div>
              <div className="form-field">
                <label>Message</label>
                <textarea placeholder="Please describe your enquiry or interest in IRS Group..."></textarea>
              </div>
              <button className="btn-primary" style={{ width: '100%' }} onClick={handleFormSubmit}>
                {formSubmitted ? 'Enquiry Submitted!' : 'Submit Enquiry'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ FOOTER ═══════════════════════════════ */}
      <footer>
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <a href="#hero" className="nav-logo" style={{ textDecoration: 'none' }}>
                <div className="logo-mark">IRS</div>
                <div className="logo-text">
                  <span className="logo-name">IRS GROUP</span>
                  <span className="logo-sub">Nigeria</span>
                </div>
              </a>
              <p>A diversified Nigerian conglomerate with a 72-year legacy of enterprise, innovation, and nation-building — powering Africa's sustainable industrial future from Kano to the world.</p>
            </div>
            <div>
              <div className="footer-heading">Businesses</div>
              <ul className="footer-links">
                <li><a href="#sectors">Clean Energy</a></li>
                <li><a href="#sectors">CNG Infrastructure</a></li>
                <li><a href="#sectors">Oil & Gas</a></li>
                <li><a href="#sectors">Agriculture</a></li>
                <li><a href="#sectors">Manufacturing</a></li>
                <li><a href="#sectors">Real Estate</a></li>
                <li><a href="#sectors">Healthcare</a></li>
              </ul>
            </div>
            <div>
              <div className="footer-heading">Company</div>
              <ul className="footer-links">
                <li><a href="#about">About IRS Group</a></li>
                <li><a href="#history">Our History</a></li>
                <li><a href="#leadership">Leadership</a></li>
                <li><a href="#subsidiaries">Subsidiaries</a></li>
                <li><a href="#sustainability">Sustainability</a></li>
                <li><a href="#investors">Investors</a></li>
              </ul>
            </div>
            <div>
              <div className="footer-heading">Connect</div>
              <ul className="footer-links">
                <li><a href="#media">Media Center</a></li>
                <li><a href="#careers">Careers</a></li>
                <li><a href="#contact">Contact Us</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Use</a></li>
                <li><a href="#">Corporate Governance</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-copy">© 2025 IRS Group Nigeria. All Rights Reserved. RC: 000001 · Kano, Nigeria</div>
            <div className="footer-socials">
              <a href="#" className="social-link" title="LinkedIn">in</a>
              <a href="#" className="social-link" title="Twitter/X">𝕏</a>
              <a href="#" className="social-link" title="Facebook">f</a>
              <a href="#" className="social-link" title="YouTube">▶</a>
            </div>
          </div>
        </div>
      </footer>

      {/* ═══════════════════════════════ AI ASSISTANT ═══════════════════════════════ */}
      <button className="ai-toggle" onClick={() => setAiOpen(!aiOpen)} title="IRS Group AI Assistant">🤖</button>
      <div className={`ai-panel ${aiOpen ? 'open' : ''}`} id="aiPanel">
        <div className="ai-header">
          <div className="ai-header-left">
            <div className="ai-avatar">AI</div>
            <div>
              <div className="ai-name">IRS Assistant</div>
              <div className="ai-status">● Online</div>
            </div>
          </div>
          <button className="ai-close" onClick={() => setAiOpen(false)}>✕</button>
        </div>
        <div className="ai-messages" id="aiMessages">
          {messages.map((m, i) => (
            <div className={`msg msg-${m.type}`} key={i}>{m.text}</div>
          ))}
        </div>
        <div className="ai-quick">
          <button className="quick-btn" onClick={() => quickQ('What sectors does IRS Group operate in?')}>Our Sectors</button>
          <button className="quick-btn" onClick={() => quickQ('Who leads IRS Group?')}>Leadership</button>
          <button className="quick-btn" onClick={() => quickQ('How can I invest in IRS Group?')}>Invest</button>
          <button className="quick-btn" onClick={() => quickQ('Where is IRS Group headquartered?')}>Locations</button>
        </div>
        <div className="ai-input-row">
          <input className="ai-input" placeholder="Ask about IRS Group..." value={aiInput} onChange={(e) => setAiInput(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') sendMsg() }} />
          <button className="ai-send" onClick={sendMsg}>→</button>
        </div>
      </div>
    </>
  )
}

export default App
