export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-[#1F1F1F] bg-[#050505]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="font-black text-2xl tracking-tighter uppercase text-white">SPARK.</div>
        <a
          href="#shop"
          className="bg-white text-black text-sm font-bold uppercase tracking-wide px-5 py-2 rounded-full hover:bg-[#E8AD42] transition-colors"
        >
          Comprar
        </a>
      </div>
    </nav>
  )
}
