import ScrollReveal from './ScrollReveal'
import { locations } from '../data/content'

export default function Operations() {
  return (
    <section id="operations" className="py-24 bg-irs-off-black">
      <div className="container-custom">
        <ScrollReveal className="section-header">
          <span className="label">Geographic Footprint</span>
          <h2 className="text-irs-white mt-4">Operations Across Nigeria</h2>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-12">
          <ScrollReveal>
            <svg viewBox="0 0 400 450" className="w-full max-w-md mx-auto" xmlns="http://www.w3.org/2000/svg">
              <path d="M80,60 L120,40 L180,30 L240,35 L290,50 L330,80 L350,120 L340,160 L360,200 L350,240 L320,280 L300,320 L270,360 L240,390 L210,410 L190,420 L160,410 L140,380 L120,360 L90,340 L70,300 L50,260 L40,220 L50,180 L60,140 L70,100 Z" fill="rgba(27,67,50,0.25)" stroke="rgba(201,168,76,0.4)" strokeWidth="1.5"/>
              <path d="M160,200 L200,180 L240,200 L220,240 L180,250 Z" fill="rgba(201,168,76,0.08)" stroke="rgba(201,168,76,0.2)" strokeWidth="1"/>
              {[
                { cx: 190, cy: 100, r: 8, label: 'Kano HQ', lx: 205, ly: 104 },
                { cx: 140, cy: 190, r: 6, label: 'Kaduna', lx: 152, ly: 194 },
                { cx: 220, cy: 140, r: 6, label: 'Jigawa', lx: 232, ly: 144 },
                { cx: 190, cy: 280, r: 6, label: 'Abuja', lx: 202, ly: 284, delay: 0.5 },
                { cx: 150, cy: 370, r: 6, label: 'Lagos', lx: 162, ly: 374, delay: 1 },
                { cx: 270, cy: 320, r: 6, label: 'Rivers', lx: 282, ly: 324, delay: 0.7 },
                { cx: 100, cy: 250, r: 5, label: 'Sokoto', lx: 112, ly: 254, delay: 1.2 },
              ].map((d, i) => (
                <g key={i}>
                  <circle cx={d.cx} cy={d.cy} r={d.r} fill="#C9A84C" className="animate-map-pulse" style={{ animationDelay: `${d.delay || 0}s` }} />
                  <text x={d.lx} y={d.ly} fill="rgba(248,246,241,0.6)" fontSize={d.r > 6 ? 10 : 9} fontFamily="Barlow,sans-serif">{d.label}</text>
                </g>
              ))}
            </svg>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="text-irs-white/50 leading-relaxed mb-6">
              IRS Group's operational footprint spans Nigeria's six geopolitical zones, with major concentrations in the North-West, North-Central, South-West, and South-South.
            </p>
            <div className="flex flex-col gap-3">
              {locations.map((loc, i) => (
                <div key={i} className="flex items-center gap-4 p-3 bg-white/[0.03] border border-white/[0.06] rounded hover:border-irs-gold hover:bg-irs-gold/5 transition-all cursor-pointer">
                  <div className={`w-2.5 h-2.5 rounded-full shrink-0 ${loc.highlight ? 'bg-irs-gold' : 'bg-irs-gold/50'}`} />
                  <div>
                    <div className="text-sm text-irs-white font-medium">{loc.name}</div>
                    <div className="text-xs text-irs-white/35">{loc.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
