import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Process from './components/Process'
import WhyUs from './components/WhyUs'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="font-body-md text-body-md overflow-x-hidden">
      <Navbar />
      <main className="relative">
        <Hero />
        <TrustBar />
        <Services />
        <Portfolio />
        <Process />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
