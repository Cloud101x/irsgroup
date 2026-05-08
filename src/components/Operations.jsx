import ScrollReveal from './ScrollReveal'
import { locations } from '../data/content'

export default function Operations() {
  return (
    <section id="operations" className="section-shell bg-irs-off-black/55">
      <div className="container-custom">
        <ScrollReveal className="section-header">
          <span className="label">Geographic Footprint</span>
          <h2 className="mt-4 text-2xl lg:text-5xl text-irs-white">Operations across Nigeria, anchored by strategic hubs.</h2>
          <p className="section-sub">
            The group footprint clusters around commercial, industrial, agricultural, and regulatory centers that matter most to portfolio execution.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
          <ScrollReveal>
            <div className="surface-card-strong p-5">
              <div className="mb-4 px-1">
                <div className="label">Key Locations</div>
                <p className="mt-2 max-w-md text-sm leading-7 text-irs-white/55">
                  Headquarters, manufacturing corridors, agricultural estates, and energy assets across priority states.
                </p>
              </div>

              <svg viewBox="0 0 400 450" className="mx-auto w-full max-w-md" xmlns="http://www.w3.org/2000/svg">
                <path d="M80,60 L120,40 L180,30 L240,35 L290,50 L330,80 L350,120 L340,160 L360,200 L350,240 L320,280 L300,320 L270,360 L240,390 L210,410 L190,420 L160,410 L140,380 L120,360 L90,340 L70,300 L50,260 L40,220 L50,180 L60,140 L70,100 Z" fill="rgba(16,28,43,0.8)" stroke="rgba(214,178,94,0.45)" strokeWidth="1.5" />
                <path d="M160,200 L200,180 L240,200 L220,240 L180,250 Z" fill="rgba(214,178,94,0.08)" stroke="rgba(214,178,94,0.2)" strokeWidth="1" />
                {[
                  { cx: 190, cy: 100, r: 8, label: 'Kano HQ', lx: 205, ly: 104 },
                  { cx: 140, cy: 190, r: 6, label: 'Kaduna', lx: 152, ly: 194 },
                  { cx: 220, cy: 140, r: 6, label: 'Jigawa', lx: 232, ly: 144 },
                  { cx: 190, cy: 280, r: 6, label: 'Abuja', lx: 202, ly: 284, delay: 0.5 },
                  { cx: 150, cy: 370, r: 6, label: 'Lagos', lx: 162, ly: 374, delay: 1 },
                  { cx: 270, cy: 320, r: 6, label: 'Rivers', lx: 282, ly: 324, delay: 0.7 },
                ].map((dot, index) => (
                  <g key={index}>
                    <circle cx={dot.cx} cy={dot.cy} r={dot.r} fill="#D6B25E" className="animate-map-pulse" style={{ animationDelay: `${dot.delay || 0}s` }} />
                    <text x={dot.lx} y={dot.ly} fill="rgba(247,243,235,0.7)" fontSize={dot.r > 6 ? 10 : 9} fontFamily="Manrope,sans-serif">
                      {dot.label}
                    </text>
                  </g>
                ))}
              </svg>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="mb-6 text-base leading-8 text-irs-white/55">
              IRS Group&apos;s operational footprint spans Nigeria&apos;s six geopolitical zones, with major concentrations in the North-West, North-Central, South-West, and South-South.
            </p>
            <div className="flex flex-col gap-3">
              {locations.map((location, index) => (
                <div key={index} className="surface-card flex items-center gap-4 p-4">
                  <div className={`h-3 w-3 shrink-0 rounded-full ${location.highlight ? 'bg-irs-gold shadow-[0_0_0_6px_rgba(214,178,94,0.14)]' : 'bg-irs-gold/50'}`} />
                  <div>
                    <div className="text-sm font-medium text-irs-white">{location.name}</div>
                    <div className="mt-1 text-sm text-irs-white/42">{location.desc}</div>
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
