import { Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#020202] py-12 border-t border-[#1F1F1F] text-center md:text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="font-black text-2xl tracking-tighter uppercase text-white">SPARK.</div>
        <p className="text-[#888888] text-sm font-medium">
          &copy; {year} SPARK Energy Premium. Todos os direitos reservados.
        </p>
        <div className="flex gap-4">
          <a href="#" className="text-[#888888] hover:text-white transition-colors">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="#" className="text-[#888888] hover:text-white transition-colors">
            <Twitter className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  )
}
