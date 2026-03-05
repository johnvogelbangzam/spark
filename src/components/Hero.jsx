export default function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-center">
        {/* Texto Esquerda */}
        <div className="order-2 lg:order-1 flex flex-col items-start text-left lg:pr-12">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#E8AD42] animate-pulse"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-[#888888]">
              Suplemento Alimentar
            </span>
          </div>

          <h1 className="text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase leading-[0.85] mb-6">
            <span className="text-[#E8AD42] block">PURO</span>
            <span className="text-white">FOCO.</span>
          </h1>

          <p className="text-lg md:text-xl text-[#888888] mb-10 max-w-md font-medium leading-relaxed">
            Sinergia perfeita entre foco, energia e força explosiva. Potencializado com{' '}
            <span className="text-white">C8/C10 MCT</span> e{' '}
            <span className="text-white">Creatina</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href="#shop"
              className="inline-flex justify-center items-center bg-[#E8AD42] text-black font-bold uppercase tracking-wide px-10 py-4 rounded-full hover:bg-white transition duration-300"
            >
              Garantir o meu
            </a>
          </div>

          <div className="mt-12 flex gap-8 border-t border-[#1F1F1F] pt-6 w-full">
            <div>
              <div className="text-2xl font-black text-white">10g</div>
              <div className="text-xs uppercase tracking-widest text-[#888888] mt-1">Por Saqueta</div>
            </div>
            <div>
              <div className="text-2xl font-black text-white">0%</div>
              <div className="text-xs uppercase tracking-widest text-[#888888] mt-1">Açúcar</div>
            </div>
          </div>
        </div>

        {/* Imagem Direita */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="bg-[#111111] border border-[#1F1F1F] w-full max-w-md aspect-[4/5] rounded-3xl flex items-center justify-center p-8 overflow-hidden relative group">
            <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none transition-opacity group-hover:opacity-10">
              <span className="text-[15rem] font-black rotate-90 whitespace-nowrap select-none">
                SPARK
              </span>
            </div>
            <img
              src="https://placehold.co/400x550/050505/E8AD42?text=Embalagem+SPARK"
              alt="Saqueta SPARK Energy Premium"
              className="relative z-10 max-w-full h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
