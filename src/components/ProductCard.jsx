import { useState } from 'react'
import { Check } from 'lucide-react'
import { useCart } from '../context/CartContext'

export default function ProductCard({
  id,
  image,
  imageAlt,
  title,
  price,
  tag,
  isActive = false,
}) {
  const [added, setAdded] = useState(false)
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    setAdded(true)
    addToCart({ id, image, title, price })
    setTimeout(() => setAdded(false), 2000)
  }

  // Active border is neon green according to reference, inactive is very dark gray
  const borderClass = isActive
    ? 'border-[#d6ff00]'
    : 'border-[#1a1a1a] hover:border-zinc-700'

  return (
    <div className={`bg-[#050505] rounded-xl p-8 flex flex-col items-center border ${borderClass} transition-colors duration-300 group`}>
      {/* Top Tag */}
      {tag && (
        <div className="bg-[#1a1a1a] text-white text-[10px] font-bold px-3 py-1 rounded-full mb-6 uppercase tracking-widest relative">
          {tag}
        </div>
      )}

      {/* Title */}
      <h3 className="text-xl md:text-2xl font-bold text-white mb-8 tracking-wide text-center">{title}</h3>

      {/* Image */}
      <div className="mb-10 w-full flex justify-center flex-grow">
        <img
          src={image}
          alt={imageAlt}
          className="h-40 md:h-48 object-contain drop-shadow-2xl transition-transform duration-500 will-change-transform group-hover:scale-105"
        />
      </div>

      {/* Button */}
      <button
        onClick={handleAddToCart}
        className="w-[80%] bg-white text-black font-bold text-sm px-6 py-3 rounded-full hover:bg-gray-200 hover:scale-105 transition-all duration-300"
      >
        {added ? 'Adicionado!' : 'Shop Now'}
      </button>
    </div>
  )
}
