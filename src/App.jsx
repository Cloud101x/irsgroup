import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import About from './components/About'
import Sectors from './components/Sectors'
import Businesses from './components/Businesses'
import Projects from './components/Projects'
import Leadership from './components/Leadership'
import Sustainability from './components/Sustainability'
import History from './components/History'
import Subsidiaries from './components/Subsidiaries'
import Operations from './components/Operations'
import Media from './components/Media'
import Investors from './components/Investors'
import Careers from './components/Careers'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AIAssistant from './components/AIAssistant'

function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-irs-black text-irs-white font-sans">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-[-10rem] top-[-4rem] h-[28rem] w-[28rem] rounded-full bg-irs-green-mid/25 blur-3xl animate-float" />
        <div className="absolute right-[-8rem] top-[12rem] h-[24rem] w-[24rem] rounded-full bg-irs-gold/15 blur-3xl" />
        <div className="absolute bottom-[-10rem] left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-[#14324f]/35 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
            backgroundSize: '96px 96px',
          }}
        />
      </div>
      <Navbar />
      <main className="relative">
        <Hero />
        <Ticker />
        <About />
        <Sectors />
        <Businesses />
        <Projects />
        <Leadership />
        <Sustainability />
        <History />
        <Subsidiaries />
        <Operations />
        <Media />
        <Investors />
        <Careers />
        <Contact />
      </main>
      <Footer />
      <AIAssistant />
    </div>
  )
}

export default App
