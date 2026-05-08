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

    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const handleNav = () => {
    setMobileOpen(false)
  }

  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6">
        <div className="container-custom">
          <div
            className={`flex items-center justify-between rounded-full border px-4 py-3 transition-all duration-500 md:px-6 ${
              scrolled
                ? 'border-white/10 bg-irs-black/82 shadow-[0_18px_40px_rgba(2,10,18,0.3)] backdrop-blur-2xl'
                : 'border-white/8 bg-irs-black/35 backdrop-blur-xl'
            }`}
          >
            <a href="#hero" className="flex items-center gap-3 no-underline">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-irs-gold via-irs-gold to-irs-gold-light text-sm font-bold text-irs-black shadow-[0_12px_28px_rgba(214,178,94,0.25)]">
                IRS
              </div>
              <div className="flex flex-col">
                <span className="font-condensed text-base font-bold tracking-[0.24em] text-irs-white">IRS GROUP</span>
                <span className="text-[0.64rem] uppercase tracking-[0.3em] text-irs-white/50">Modern Nigeria</span>
              </div>
            </a>

            <ul className="hidden xl:flex items-center gap-1.5">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.slice(1)

                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={handleNav}
                      aria-current={isActive ? 'page' : undefined}
                      className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                        isActive
                          ? 'bg-white/[0.08] text-irs-gold'
                          : 'text-irs-white/72 hover:bg-white/[0.05] hover:text-irs-white'
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                )
              })}
              <li className="pl-2">
                <a href="#contact" className="btn-primary !px-5 !py-2.5 !text-[0.66rem]">Start a Conversation</a>
              </li>
            </ul>

            <button
              className="xl:hidden flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-irs-white transition-colors hover:border-irs-gold/40 hover:text-irs-gold"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-irs-black/80 px-5 pt-24 backdrop-blur-2xl transition-all duration-500 ${
          mobileOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="container-custom">
          <div className="surface-card-strong mx-auto max-w-xl p-6 md:p-8">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <div className="label">Navigation</div>
                <p className="mt-2 max-w-sm text-sm text-irs-white/55">
                  Explore the group story, businesses, projects, and investor materials.
                </p>
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-irs-white/80 transition-colors hover:border-irs-gold/40 hover:text-irs-gold"
                aria-label="Close menu"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="grid gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleNav}
                  className={`rounded-2xl border px-4 py-4 text-lg font-medium transition-all duration-300 ${
                    activeSection === link.href.slice(1)
                      ? 'border-irs-gold/40 bg-irs-gold/10 text-irs-gold'
                      : 'border-white/8 bg-white/[0.03] text-irs-white/80 hover:border-white/14 hover:bg-white/[0.05]'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <a href="#contact" onClick={handleNav} className="btn-primary mt-6 w-full">
              Contact the Team
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
