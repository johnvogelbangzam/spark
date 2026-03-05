import { Zap, Brain, Dumbbell } from 'lucide-react'

const benefits = [
  {
    icon: Zap,
    title: 'Energia Limpa',
    description:
      'Energia sustentada sem quebras abruptas. Combustível limpo para o teu dia inteiro.',
  },
  {
    icon: Brain,
    title: 'Foco Laser',
    description: 'MCT C8/C10 alimenta o cérebro com cetonas para clareza mental superior.',
  },
  {
    icon: Dumbbell,
    title: 'Força Explosiva',
    description: 'Creatina monohidratada para performance e ganho de massa muscular.',
  },
]

export default function Benefits() {
  return (
    <section id="benefits" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div className="bg-[#0a0a0a] border border-[#1F1F1F] rounded-[2rem] p-10 md:p-16 flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">
            O CÓDIGO DA <span className="text-[#E8AD42]">ALTA PERFORMANCE.</span>
          </h2>
          <p className="text-[#888888] text-lg">
            Cada saqueta combina café premium com ingredientes validados pela ciência para
            resultados reais.
          </p>
        </div>

        {benefits.map(({ icon: Icon, title, description }, i) => (
          <div
            key={i}
            className="bg-[#0a0a0a] border border-[#1F1F1F] rounded-[2rem] p-10 md:p-16 hover:bg-[#111] transition-colors group"
          >
            <Icon className="w-10 h-10 text-[#E8AD42] mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-bold uppercase tracking-tight mb-2">{title}</h3>
            <p className="text-[#888888]">{description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
