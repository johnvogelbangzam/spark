import { useEffect, useState } from 'react'

export default function Hero() {
  const [text, setText] = useState('')
  const fullText = 'Fuel Your Ambition with\nSPARK'

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      setText(fullText.slice(0, i))
      i++
      if (i > fullText.length) {
        clearInterval(timer)
      }
    }, 100)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="hero" className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-40"
      >
        <source src="https://cdn.pixabay.com/video/2016/09/21/5320-182368367_medium.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[#050505]/40 z-0"></div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-col items-start text-left max-w-3xl pt-20">
          {/* Tag */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-md rounded-full px-4 py-1.5 mb-8 border border-white/20">
            <span className="text-xs font-bold lowercase tracking-wide text-white">
              rawdose®
            </span>
          </div>

          {/* Title with typewriter */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white mb-6 min-h-[120px] md:min-h-[196px] leading-none">
            {text.split('\n').map((line, i) => (
              <span key={i} className="block">
                {line}
                {i === text.split('\n').length - 1 && (
                  <span className="inline-block w-[2px] h-[0.9em] bg-white ml-1 animate-pulse align-middle"></span>
                )}
              </span>
            ))}
          </h1>

          <p className="text-base md:text-lg text-gray-300 mb-10 max-w-xl font-normal leading-relaxed">
            Supplements and apparel engineered for athletes, entrepreneurs, and health enthusiasts who expect more from their performance.
          </p>

          <a
            href="#shop"
            className="inline-flex justify-center items-center bg-white text-black font-semibold text-sm px-8 py-3.5 rounded-full hover:scale-105 transition duration-300"
          >
            Start now <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
