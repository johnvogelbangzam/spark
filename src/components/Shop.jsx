import ProductCard from './ProductCard'

const products = [
  {
    image: 'https://placehold.co/300x300/050505/E8AD42?text=1+Caixa',
    imageAlt: '1 Caixa SPARK',
    reviewCount: 128,
    title: 'Caixa Individual',
    description: 'Para quem quer experimentar. Contém 30 saquetas de SPARK.',
    price: '149,90 €',
    features: ['30 Saquetas Individuais', 'Portes grátis'],
  },
  {
    image: 'https://placehold.co/300x300/111/E8AD42?text=Starter+Kit',
    imageAlt: 'SPARK Starter Kit',
    reviewCount: 452,
    title: 'Starter Kit',
    description: 'O ritual completo. Tudo o que precisas para começar com energia máxima.',
    price: '199,90 €',
    originalPrice: '249,90 €',
    features: ['30 Saquetas SPARK', 'Misturador Elétrico', 'Caneca Térmica', 'Portes grátis'],
    featured: true,
    textColor: 'text-white',
  },
  {
    image: 'https://placehold.co/300x300/050505/E8AD42?text=2+Caixas',
    imageAlt: '2 Caixas SPARK',
    reviewCount: 89,
    title: 'Kit Duplo',
    description: 'Garante 2 meses de foco e energia ininterruptos por um valor especial.',
    price: '259,90 €',
    originalPrice: '299,80 €',
    features: ['60 Saquetas (2 caixas)', '15% de Desconto', 'Portes grátis'],
  },
]

export default function Shop() {
  return (
    <section id="shop" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">
          Escolha o seu <span className="text-[#E8AD42]">Ritmo.</span>
        </h2>
        <p className="text-[#888888] text-lg">
          Selecione o kit perfeito para a sua rotina de alta performance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product, i) => (
          <ProductCard key={i} {...product} />
        ))}
      </div>
    </section>
  )
}
