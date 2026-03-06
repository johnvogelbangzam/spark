import Navbar from './components/Navbar'
import Cart from './components/Cart'
import Hero from './components/Hero'
import Shop from './components/Shop'
import Benefits from './components/Benefits'
import Ingredients from './components/Ingredients'
import CTA from './components/CTA'
import Footer from './components/Footer'
import { CartProvider } from './context/CartContext'

export default function App() {
  return (
    <CartProvider>
      <div className="bg-[#050505] text-white font-sans min-h-screen antialiased">
        <Navbar />
        <Cart />
        <Hero />
        <Shop />
        <Benefits />
        <Ingredients />
        <CTA />
        <Footer />
      </div>
    </CartProvider>
  )
}
