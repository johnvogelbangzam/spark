import ProductCard from './ProductCard'

const products = [
  {
    id: 'box',
    tag: 'NEW',
    title: 'Coffee',
    image: 'https://placehold.co/250x350/111/E8AD42?text=Coffee',
    imageAlt: 'SPARK Coffee',
    price: 'R$ 149,90',
  },
  {
    id: 'starter-kit',
    tag: 'ORIGINAL',
    title: 'Cacao Chai',
    image: 'https://placehold.co/250x350/111/E8AD42?text=Cacao+Chai',
    imageAlt: 'SPARK Cacao Chai',
    price: 'R$ 199,90',
  },
  {
    id: 'matcha',
    tag: 'MAIS VENDIDO',
    title: 'Matcha',
    image: 'https://placehold.co/250x350/111/E8AD42?text=Matcha',
    imageAlt: 'SPARK Matcha',
    price: 'R$ 219,90',
    isActive: true,
  },
  {
    id: 'turmeric',
    tag: 'ZERO CAFFEINE',
    title: 'Turmeric',
    image: 'https://placehold.co/250x350/111/E8AD42?text=Turmeric',
    imageAlt: 'SPARK Turmeric',
    price: 'R$ 189,90',
  },
]

export default function Shop() {
  return (
    <section id="shop" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif italic text-white mb-4 tracking-wide">
          Energy & Focus Blends
        </h2>
        <p className="text-gray-300 font-medium text-sm md:text-base leading-relaxed">
          Certified organic blends built with high-dose ingredients for steady energy, mental clarity, and immune support.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  )
}
