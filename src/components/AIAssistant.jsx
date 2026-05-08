import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send } from 'lucide-react'
import { getAIResponse } from '../data/content'

export default function AIAssistant() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { text: "Welcome to IRS Group Nigeria. I'm your intelligent corporate assistant. Ask me anything about our businesses, leadership, projects, or investment opportunities.", type: 'bot' }
  ])
  const [input, setInput] = useState('')
  const scrollRef = useRef(null)

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight
  }, [messages])

  const send = () => {
    const q = input.trim()
    if (!q) return
    setMessages((m) => [...m, { text: q, type: 'user' }])
    setInput('')
    setTimeout(() => {
      setMessages((m) => [...m, { text: getAIResponse(q), type: 'bot' }])
    }, 600)
  }

  const quick = (q) => {
    setMessages((m) => [...m, { text: q, type: 'user' }])
    setTimeout(() => {
      setMessages((m) => [...m, { text: getAIResponse(q), type: 'bot' }])
    }, 600)
  }

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-irs-gold text-irs-black flex items-center justify-center shadow-lg shadow-irs-gold/30 hover:scale-110 transition-transform"
        aria-label="AI Assistant"
      >
        {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      <div className={`fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-3rem)] bg-irs-dark border border-irs-gold/20 rounded-xl overflow-hidden shadow-2xl flex flex-col transition-all duration-300 ${open ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'}`} style={{ maxHeight: 500 }}>
        <div className="px-4 py-3 bg-irs-gold/10 border-b border-irs-gold/20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-irs-gold flex items-center justify-center text-xs font-bold text-irs-black">AI</div>
            <div>
              <div className="text-sm font-semibold text-irs-white">IRS Assistant</div>
              <div className="text-[0.6rem] text-irs-green-light flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-irs-green-light inline-block" /> Online</div>
            </div>
          </div>
          <button onClick={() => setOpen(false)} className="text-irs-white/40 hover:text-irs-white"><X className="w-4 h-4" /></button>
        </div>

        <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 min-h-[200px]">
          {messages.map((m, i) => (
            <div key={i} className={`max-w-[80%] px-3 py-2.5 rounded-lg text-xs leading-relaxed ${m.type === 'bot' ? 'self-start bg-white/[0.05] text-irs-white/70' : 'self-end bg-irs-gold text-irs-black font-medium'}`}>
              {m.text}
            </div>
          ))}
        </div>

        <div className="px-3 py-2 border-t border-white/[0.04] flex flex-wrap gap-2">
          {['Our Sectors', 'Leadership', 'Invest', 'Locations'].map((q) => (
            <button key={q} onClick={() => quick(q === 'Our Sectors' ? 'What sectors does IRS Group operate in?' : q === 'Leadership' ? 'Who leads IRS Group?' : q === 'Invest' ? 'How can I invest in IRS Group?' : 'Where is IRS Group headquartered?')} className="px-2.5 py-1 bg-irs-gold/10 border border-irs-gold/20 text-irs-gold text-[0.65rem] rounded-full hover:bg-irs-gold hover:text-irs-black transition-colors">
              {q}
            </button>
          ))}
        </div>

        <div className="flex gap-2 px-3 py-2 border-t border-white/[0.04]">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && send()}
            placeholder="Ask about IRS Group..."
            className="flex-1 px-4 py-2 bg-white/[0.05] border border-white/10 rounded-full text-irs-white text-xs focus:border-irs-gold outline-none transition-colors"
          />
          <button onClick={send} className="w-9 h-9 rounded-full bg-irs-gold text-irs-black flex items-center justify-center hover:bg-irs-gold-light transition-colors">
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </>
  )
}
