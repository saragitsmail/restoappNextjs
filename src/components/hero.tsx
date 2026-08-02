'use client'

import { ChevronDown, Sparkles } from 'lucide-react'

interface HeroProps {
  onBookTable?: () => void
}

export default function Hero({ onBookTable }: HeroProps) {
  return (
    <header
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden z-10"
    >
      {/* Background Image Layer with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2000&auto=format&fit=crop"
          alt="Luxury dining interior background"
          className="w-full h-full object-cover opacity-25 scale-105 filter contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/80 via-[#0A0A0A]/60 to-[#0A0A0A]"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-6">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs uppercase tracking-[0.25em] backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Michelin Selection 2026</span>
        </div>

        {/* Hero Title */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#F5F5F5] leading-[1.1] drop-shadow-2xl">
          A Refined <br />
          <span className="text-gold-gradient italic font-normal">
            Culinary Experience
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl text-base sm:text-lg text-[#A0A0A0] font-light leading-relaxed tracking-wide">
          Where timeless elegance meets contemporary Gastronomy. Immerse yourself
          in an evening of sensory indulgence crafted by master chefs.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
          <a
            href="#menu"
            className="btn-gold px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] rounded-xs text-center min-w-[200px]"
          >
            View Menu
          </a>
          <button
            onClick={onBookTable}
            className="btn-outline-gold px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] rounded-xs text-center min-w-[200px] cursor-pointer"
          >
            Order Now
          </button>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#menu"
          className="mt-12 inline-flex flex-col items-center gap-2 text-gold/60 hover:text-gold transition-colors duration-300 group"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Explore</span>
          <ChevronDown className="w-4 h-4 animate-bounce group-hover:translate-y-1 transition-transform" />
        </a>
      </div>
    </header>
  )
}
