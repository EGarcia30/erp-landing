import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import DTESection from './components/DTESection'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <DTESection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}

export default App
