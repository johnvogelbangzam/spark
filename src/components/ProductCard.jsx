import { useState } from 'react'
import { Star, Check } from 'lucide-react'

function StarRating({ count }) {
  return (
    <div className="flex items-center gap-1 mb-2">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 fill-[#E8AD42] text-[#E8AD42]" />
      ))}
      <span className="text-xs text-[#888888] ml-1">({count})</span>
    </div>
  )
}

export default function ProductCard({
  image,
  imageAlt,
  reviewCount,
  title,
  description,
  price,
  originalPrice,
  features,
  featured = false,
  buttonBg = 'bg-white hover:bg-[#E8AD42]',
  textColor = 'text-[#888888]',
}) {
  const [added, setAdded] = useState(false)

  const handleAddToCart = () => {
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  const cardClasses = featured
    ? 'bg-[#111] border-2 border-[#E8AD42] rounded-[2rem] p-8 flex flex-col relative transform md:-translate-y-4 shadow-[0_0_30px_rgba(232,173,66,0.1)]'
    : 'bg-[#0a0a0a] border border-[#1F1F1F] rounded-[2rem] p-8 flex flex-col hover:border-[#E8AD42]/50 transition-colors'

  return (
    <div className={cardClasses}>
      {featured && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#E8AD42] text-black text-xs font-black uppercase tracking-widest px-5 py-2 rounded-full whitespace-nowrap">
          O Mais Popular
        </div>
      )}

      <div
        className={`aspect-square ${
          featured ? 'bg-[#1a1a1a]' : 'bg-[#111]'
        } rounded-2xl mb-6 flex items-center justify-center p-4`}
      >
        <img
          src={image}
          alt={imageAlt}
          className="max-w-full h-auto drop-shadow-xl hover:scale-105 transition-transform"
        />
      </div>

      <StarRating count={reviewCount} />

      <h3 className="text-2xl font-bold uppercase tracking-tight mb-2">{title}</h3>
      <p className="text-[#888888] text-sm mb-6 flex-grow">{description}</p>

      <div className="flex items-end gap-3 mb-6">
        <div className="text-3xl font-black text-white">{price}</div>
        {originalPrice && (
          <div className="text-base text-[#888888] line-through mb-1">{originalPrice}</div>
        )}
      </div>

      <button
        onClick={handleAddToCart}
        className={`w-full font-bold uppercase tracking-widest py-4 rounded-full transition duration-300 mb-6 ${
          added
            ? 'bg-green-500 text-white scale-95'
            : featured
            ? 'bg-[#E8AD42] text-black hover:bg-white'
            : 'bg-white text-black hover:bg-[#E8AD42]'
        }`}
        style={{ transition: 'all 0.3s ease' }}
      >
        {added ? (
          <span className="flex items-center justify-center gap-2">
            <Check className="w-5 h-5" /> Adicionado!
          </span>
        ) : (
          'Adicionar'
        )}
      </button>

      <ul className={`text-sm ${textColor} space-y-3 font-medium`}>
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-3">
            <Check className="w-[18px] h-[18px] text-[#E8AD42] flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  )
}
