import { footerLinks } from '../data/content'

export default function Footer() {
  const year = new Date().getFullYear()
  const companyLinks = {
    'About IRS Group': '#about',
    'Our History': '#history',
    Leadership: '#leadership',
    Subsidiaries: '#subsidiaries',
    Sustainability: '#sustainability',
    Investors: '#investors',
  }
  const connectLinks = {
    'Media Center': '#media',
    Careers: '#careers',
    'Contact Us': '#contact',
    'Privacy Policy': '#contact',
    'Terms of Use': '#contact',
    'Corporate Governance': '#investors',
  }

  return (
    <footer className="border-t border-white/8 bg-irs-black">
      <div className="container-custom py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <a href="#hero" className="mb-5 flex items-center gap-3 no-underline">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-irs-gold to-irs-gold-light font-serif text-sm font-bold text-irs-black shadow-[0_14px_28px_rgba(214,178,94,0.2)]">
                IRS
              </div>
              <div className="flex flex-col">
                <span className="font-condensed text-sm font-bold tracking-[0.24em] text-irs-white">IRS GROUP</span>
                <span className="text-[0.6rem] uppercase tracking-[0.3em] text-irs-white/45">Modern Nigeria</span>
              </div>
            </a>
            <p className="max-w-sm text-sm leading-7 text-irs-white/42">
              A diversified Nigerian industrial group with active positions across energy, agriculture, manufacturing, real estate, and healthcare.
            </p>
            <a href="#contact" className="btn-ghost mt-6">Talk to the team</a>
          </div>

          <div>
            <h5 className="mb-4 font-condensed text-[0.72rem] font-bold uppercase tracking-[0.24em] text-irs-gold">Businesses</h5>
            <ul className="flex flex-col gap-2">
              {footerLinks.businesses.map((link, index) => (
                <li key={index}>
                  <a href="#sectors" className="text-sm text-irs-white/42 transition-colors hover:text-irs-gold">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="mb-4 font-condensed text-[0.72rem] font-bold uppercase tracking-[0.24em] text-irs-gold">Company</h5>
            <ul className="flex flex-col gap-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href={companyLinks[link]} className="text-sm text-irs-white/42 transition-colors hover:text-irs-gold">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="mb-4 font-condensed text-[0.72rem] font-bold uppercase tracking-[0.24em] text-irs-gold">Connect</h5>
            <ul className="flex flex-col gap-2">
              {footerLinks.connect.map((link, index) => (
                <li key={index}>
                  <a href={connectLinks[link]} className="text-sm text-irs-white/42 transition-colors hover:text-irs-gold">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/8 pt-6 sm:flex-row">
          <span className="text-[0.72rem] text-irs-white/24">© {year} IRS Group Nigeria. All rights reserved.</span>
          <div className="flex gap-3">
            {['in', 'x', 'yt'].map((social, index) => (
              <a key={index} href="#contact" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-[0.7rem] font-semibold uppercase text-irs-white/32 transition-all hover:border-irs-gold hover:bg-irs-gold hover:text-irs-black">
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
