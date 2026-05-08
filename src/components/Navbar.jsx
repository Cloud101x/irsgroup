import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../data/content'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60)
      const sections = document.querySelectorAll('section[id]')
      let current = ''
      sections.forEach((s) => {
        if (window.scrollY >= s.offsetTop - 120) current = s.id
      })
      setActiveSection(current)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
  }, [mobileOpen])

  const handleNav = (href) => {
    setMobileOpen(false)
  }

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-irs-black/95 backdrop-blur-xl border-b border-irs-gold/10 py-3' : 'bg-transparent py-5'}`}>
        <div className="container-custom flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-3 no-underline group">
            <div className="w-12 h-12 rounded bg-gradient-to-br from-irs-gold to-irs-gold-dark flex items-center justify-center font-serif text-xl font-bold text-irs-black">
              IRS
            </div>
            <div className="flex flex-col">
              <span className="font-condensed text-base font-bold tracking-widest text-irs-white">IRS GROUP</span>
              <span className="text-[0.6rem] tracking-[0.2em] uppercase text-irs-gold">Nigeria</span>
            </div>
          </a>

          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => handleNav(link.href)}
                  className={`relative px-4 py-2 text-sm tracking-wide transition-colors duration-200 ${activeSection === link.href.slice(1) ? 'text-irs-gold' : 'text-irs-white/80 hover:text-irs-gold'}`}
                >
                  {link.label}
                  <span className={`absolute bottom-0 left-4 right-4 h-px bg-irs-gold transition-transform duration-300 origin-left ${activeSection === link.href.slice(1) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
                </a>
              </li>
            ))}
            <li>
              <a href="#contact" className="btn-primary !py-2 !px-5 !text-xs ml-2">Contact</a>
            </li>
          </ul>

          <button
            className="lg:hidden relative z-[60] flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-6 h-6 text-irs-white" /> : <Menu className="w-6 h-6 text-irs-white" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-50 bg-irs-black/98 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 transition-all duration-500 ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMobileOpen(false)}
            className="font-serif text-3xl font-semibold text-irs-white hover:text-irs-gold transition-colors"
          >
            {link.label}
          </a>
        ))}
        <a href="#contact" onClick={() => setMobileOpen(false)} className="btn-primary mt-4">Contact</a>
      </div>
    </>
  )
}
