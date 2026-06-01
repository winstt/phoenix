import Header from './components/Header'
import Hero from './components/Hero'
import WhoStrip from './components/WhoStrip'
import Pillars from './components/Pillars'
import ScrollTicker from './components/ScrollTicker'
import VisionBlock from './components/VisionBlock'
import ImpactSection from './components/ImpactSection'
import OriginSection from './components/OriginSection'
import NewsSection from './components/NewsSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <WhoStrip />
        <Pillars />
        <ScrollTicker />
        <VisionBlock />
        <ImpactSection />
        <OriginSection />
        <NewsSection />
      </main>
      <Footer />
    </>
  )
}
