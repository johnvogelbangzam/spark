const ingredients = [
  {
    number: '01',
    title: 'Café Premium',
    description: 'Grãos selecionados para sabor e ativação central rápida.',
  },
  {
    number: '02',
    title: 'MCT C8/C10',
    description: 'Triglicerídeos de cadeia média de rápida absorção cerebral.',
  },
  {
    number: '03',
    title: 'Creatina Monohidratada',
    description: 'Reciclagem de ATP para picos de força e resistência física.',
  },
]

export default function Ingredients() {
  return (
    <section className="pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-4 md:gap-6">
        <div className="lg:w-1/3 bg-[#0a0a0a] border border-[#1F1F1F] rounded-[2rem] p-10 md:p-16 flex flex-col justify-center">
          <div className="text-xs uppercase tracking-widest text-[#E8AD42] mb-4 font-bold">
            A Fórmula
          </div>
          <h2 className="text-4xl font-black uppercase tracking-tight">
            O QUE TEM
            <br />
            DENTRO.
          </h2>
        </div>

        <div className="lg:w-2/3 flex flex-col gap-4 md:gap-6">
          {ingredients.map(({ number, title, description }) => (
            <div
              key={number}
              className="bg-[#0a0a0a] border border-[#1F1F1F] rounded-[2rem] p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-6 hover:bg-[#111] transition-all duration-300 hover:scale-[1.01]"
            >
              <div className="text-5xl font-black text-[#1F1F1F] select-none">{number}</div>
              <div>
                <h3 className="text-xl font-bold uppercase tracking-wide mb-1">{title}</h3>
                <p className="text-[#888888]">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
