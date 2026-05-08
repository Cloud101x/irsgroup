import { useState, useRef, useEffect } from 'react'
import { MessageCircle, Send, X } from 'lucide-react'
import { getAIResponse } from '../data/content'

export default function AIAssistant() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      text: "Welcome to IRS Group Nigeria. I'm your corporate assistant. Ask me about sectors, leadership, projects, sustainability, or investor opportunities.",
      type: 'bot',
    },
  ])
  const [input, setInput] = useState('')
  const scrollRef = useRef(null)

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight
  }, [messages])

  const send = () => {
    const question = input.trim()
    if (!question) return
    setMessages((current) => [...current, { text: question, type: 'user' }])
    setInput('')
    setTimeout(() => {
      setMessages((current) => [...current, { text: getAIResponse(question), type: 'bot' }])
    }, 600)
  }

  const quick = (question) => {
    setMessages((current) => [...current, { text: question, type: 'user' }])
    setTimeout(() => {
      setMessages((current) => [...current, { text: getAIResponse(question), type: 'bot' }])
    }, 600)
  }

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-irs-gold/30 bg-gradient-to-br from-irs-gold to-irs-gold-light text-irs-black shadow-[0_20px_44px_rgba(214,178,94,0.35)] transition-transform hover:scale-105"
        aria-label="AI Assistant"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      <div className={`fixed bottom-24 right-6 z-50 flex max-h-[560px] w-[380px] max-w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-[28px] border border-white/10 bg-irs-dark/95 shadow-[0_32px_70px_rgba(2,10,18,0.38)] backdrop-blur-2xl transition-all duration-300 ${open ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'}`}>
        <div className="flex items-center justify-between border-b border-white/8 bg-white/[0.04] px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-irs-gold text-xs font-bold text-irs-black">AI</div>
            <div>
              <div className="text-sm font-semibold text-irs-white">IRS Assistant</div>
              <div className="flex items-center gap-1 text-[0.62rem] text-irs-green-light">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-irs-green-light" />
                Online
              </div>
            </div>
          </div>
          <button onClick={() => setOpen(false)} className="text-irs-white/40 hover:text-irs-white">
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="border-b border-white/8 px-4 py-3">
          <p className="text-sm leading-7 text-irs-white/52">
            Ask about sectors, leadership, locations, sustainability, or investor enquiries.
          </p>
        </div>

        <div ref={scrollRef} className="flex min-h-[220px] flex-1 flex-col gap-3 overflow-y-auto p-4">
          {messages.map((message, index) => (
            <div key={index} className={`max-w-[82%] rounded-2xl px-4 py-3 text-xs leading-7 ${message.type === 'bot' ? 'self-start border border-white/10 bg-white/[0.05] text-irs-white/70' : 'self-end bg-irs-gold text-irs-black font-medium'}`}>
              {message.text}
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 border-t border-white/8 px-3 py-3">
          {['Our Sectors', 'Leadership', 'Invest', 'Locations'].map((item) => (
            <button
              key={item}
              onClick={() => quick(item === 'Our Sectors' ? 'What sectors does IRS Group operate in?' : item === 'Leadership' ? 'Who leads IRS Group?' : item === 'Invest' ? 'How can I invest in IRS Group?' : 'Where is IRS Group headquartered?')}
              className="rounded-full border border-irs-gold/18 bg-irs-gold/10 px-3 py-1.5 text-[0.64rem] text-irs-gold transition-colors hover:bg-irs-gold hover:text-irs-black"
            >
              {item}
            </button>
          ))}
        </div>

        <div className="flex gap-2 border-t border-white/8 px-3 py-3">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && send()}
            placeholder="Ask about IRS Group..."
            className="flex-1 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2.5 text-xs text-irs-white outline-none transition-colors focus:border-irs-gold"
          />
          <button onClick={send} className="flex h-10 w-10 items-center justify-center rounded-full bg-irs-gold text-irs-black transition-colors hover:bg-irs-gold-light">
            <Send className="h-4 w-4" />
          </button>
        </div>
      </div>
    </>
  )
}
