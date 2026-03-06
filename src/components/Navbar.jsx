import { ShoppingBag } from 'lucide-react'
import { useCart } from '../context/CartContext'

export default function Navbar() {
  const { cartCount, setIsCartOpen } = useCart()

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-[#1F1F1F] bg-[#050505]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="font-black text-2xl tracking-tighter uppercase text-white">SPARK.</div>
        <div className="flex items-center gap-6">
          <button
            onClick={() => setIsCartOpen(true)}
            className="text-white hover:text-[#E8AD42] transition-colors relative"
          >
            <ShoppingBag className="w-6 h-6" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#E8AD42] text-black text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </button>
          <a
            href="#shop"
            className="bg-white text-black text-sm font-bold uppercase tracking-wide px-5 py-2 rounded-full hover:bg-[#E8AD42] transition-colors"
          >
            Comprar
          </a>
        </div>
      </div>
    </nav>
  )
}
