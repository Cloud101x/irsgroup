import { tickerItems } from '../data/content'

export default function Ticker() {
  const items = [...tickerItems, ...tickerItems]

  return (
    <div className="border-y border-white/10 bg-irs-black/55 backdrop-blur-xl">
      <div className="container-custom py-4">
        <div className="mask-edge-x overflow-hidden">
          <div className="flex w-max gap-3 whitespace-nowrap animate-ticker">
            {items.map((item, i) => (
              <div
                key={i}
                className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 font-condensed text-[0.72rem] font-bold uppercase tracking-[0.24em] text-irs-white/72"
              >
                <span>{item}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-irs-gold/80" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
