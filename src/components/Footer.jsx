import { footerLinks } from '../data/content'

export default function Footer() {
  return (
    <footer className="bg-irs-black border-t border-white/[0.04]">
      <div className="container-custom pt-16 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-1">
            <a href="#hero" className="flex items-center gap-3 no-underline mb-4">
              <div className="w-10 h-10 rounded bg-gradient-to-br from-irs-gold to-irs-gold-dark flex items-center justify-center font-serif text-sm font-bold text-irs-black">
                IRS
              </div>
              <div className="flex flex-col">
                <span className="font-condensed text-sm font-bold tracking-widest text-irs-white">IRS GROUP</span>
                <span className="text-[0.55rem] tracking-[0.2em] uppercase text-irs-gold">Nigeria</span>
              </div>
            </a>
            <p className="text-xs text-irs-white/30 leading-relaxed max-w-xs">
              A diversified Nigerian conglomerate with a 72-year legacy of enterprise, innovation, and nation-building — powering Africa's sustainable industrial future.
            </p>
          </div>

          <div>
            <h5 className="font-condensed text-[0.7rem] font-bold tracking-[0.2em] uppercase text-irs-gold mb-4">Businesses</h5>
            <ul className="flex flex-col gap-2">
              {footerLinks.businesses.map((l, i) => (
                <li key={i}><a href="#sectors" className="text-xs text-irs-white/40 hover:text-irs-gold transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-condensed text-[0.7rem] font-bold tracking-[0.2em] uppercase text-irs-gold mb-4">Company</h5>
            <ul className="flex flex-col gap-2">
              {footerLinks.company.map((l, i) => (
                <li key={i}><a href={`#${l.toLowerCase().replace(/\s+/g, '-').replace('about-irs-group', 'about').replace('our-history', 'history')}`} className="text-xs text-irs-white/40 hover:text-irs-gold transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-condensed text-[0.7rem] font-bold tracking-[0.2em] uppercase text-irs-gold mb-4">Connect</h5>
            <ul className="flex flex-col gap-2">
              {footerLinks.connect.map((l, i) => (
                <li key={i}><a href="#" className="text-xs text-irs-white/40 hover:text-irs-gold transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/[0.04] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-[0.7rem] text-irs-white/20">© 2025 IRS Group Nigeria. All Rights Reserved.</span>
          <div className="flex gap-3">
            {['in','𝕏','f','▶'].map((s, i) => (
              <a key={i} href="#" className="w-8 h-8 bg-white/[0.04] border border-white/[0.08] rounded flex items-center justify-center text-xs text-irs-white/30 hover:bg-irs-gold hover:border-irs-gold hover:text-irs-black transition-all">
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
