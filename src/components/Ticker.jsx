import { tickerItems } from '../data/content'

export default function Ticker() {
  const items = [...tickerItems, ...tickerItems]
  return (
    <div className="bg-irs-gold py-3 overflow-hidden">
      <div className="flex gap-12 animate-ticker whitespace-nowrap w-max">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-4 font-condensed text-xs font-bold tracking-[0.2em] uppercase text-irs-black">
            <span>{item}</span>
            <span className="w-1 h-1 rounded-full bg-irs-black/40" />
          </div>
        ))}
      </div>
    </div>
  )
}
