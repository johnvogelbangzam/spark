import { useState } from 'react'
import { Check } from 'lucide-react'

export default function CTA() {
  const [added, setAdded] = useState(false)

  const handleClick = () => {
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <section
      id="cta"
      className="py-32 px-4 relative overflow-hidden flex items-center justify-center text-center"
    >
      {/* Dot grid background */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter mb-8 leading-none">
          MUDA O TEU <span className="text-[#E8AD42]">RITMO.</span>
        </h2>

        <p className="text-xl text-[#888888] mb-12 max-w-xl mx-auto">
          Caixa com 30 saquetas. Portes grátis para todo o país.
        </p>

        <button
          onClick={handleClick}
          className={`font-black uppercase tracking-widest text-lg px-12 py-5 rounded-full transition duration-300 w-full sm:w-auto ${
            added
              ? 'bg-green-500 text-white scale-95'
              : 'bg-white text-black hover:bg-[#E8AD42]'
          }`}
        >
          {added ? (
            <span className="flex items-center justify-center gap-2">
              <Check className="w-5 h-5" /> Adicionado!
            </span>
          ) : (
            'Comprar Agora — 49,90 €'
          )}
        </button>
      </div>
    </section>
  )
}
