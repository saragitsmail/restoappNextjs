'use client'

import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section
      id="home"
      className="relative w-full h-screen min-h-[600px] max-h-[1200px] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Hero Background Image — High-End Culinary Dish */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1544025162-d76694265947?q=90&w=2560&auto=format&fit=crop"
          alt="Lumière gourmet dish"
          fill
          priority
          className="object-cover object-center animate-hero-zoom filter brightness-[0.55] contrast-[1.1]"
          sizes="100vw"
        />
      </div>

      {/* Dark Warm Cinematic Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#0a0806]/80 via-[#080705]/50 to-[#090807]" />

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 sm:px-6 space-y-4 sm:space-y-6 md:space-y-8 select-none max-w-4xl mx-auto w-full">
        {/* Subtitle / Tagline */}
        <span className="text-[9px] sm:text-[10px] md:text-xs font-semibold uppercase tracking-[0.35em] sm:tracking-[0.45em] text-[#E0C068] animate-fadeIn">
          Haute Gastronomie &amp; Culinary Arts
        </span>

        {/* Spectacular Brand Title */}
        <div className="relative w-full">
          <h1
            className="font-serif text-[clamp(2.5rem,12vw,7rem)] sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-[0.08em] sm:tracking-[0.15em] md:tracking-[0.22em] text-[#F7F4EF] transition-all duration-700 hover:scale-[1.01] animate-gold-pulse leading-tight"
            style={{
              textShadow:
                '0 0 40px rgba(224,192,104,0.35), 0 4px 60px rgba(0,0,0,0.9)',
            }}
          >
            {t.heroTitle}
          </h1>
          {/* Subtle Metallic Shimmer Glow Effect */}
          <div className="absolute -inset-x-6 top-1/2 -translate-y-1/2 h-20 bg-gradient-to-r from-transparent via-[#E0C068]/15 to-transparent blur-2xl pointer-events-none" />
        </div>

        {/* Champagne Gold Accent Line Divider */}
        <div className="flex items-center gap-3 sm:gap-4 w-full max-w-[200px] sm:max-w-xs py-1 sm:py-2">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#E0C068] to-transparent opacity-80" />
          <div className="w-2 h-2 rotate-45 border border-[#E0C068] bg-[#E0C068]/30 shrink-0" />
          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-[#E0C068] to-transparent opacity-80" />
        </div>

        {/* Tagline */}
        <p className="text-[10px] sm:text-xs md:text-sm text-[#D8D0C5] font-light tracking-[0.2em] sm:tracking-[0.3em] uppercase max-w-sm sm:max-w-lg leading-relaxed">
          {t.heroTagline}
        </p>

        {/* CTA Button */}
        <div className="pt-3 sm:pt-6 w-full flex justify-center">
          <a
            href="#menu"
            className="inline-block px-8 sm:px-12 py-3.5 sm:py-4 btn-outline-gold text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] sm:tracking-[0.3em] shadow-2xl"
          >
            {t.heroCtaMenu}
          </a>
        </div>
      </div>

      {/* Minimal Scroll Indicator */}
      <div className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-scroll-bounce opacity-80 hover:opacity-100 transition-opacity">
        <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.35em] text-[#E0C068]">Explore</span>
        <div className="w-px h-6 sm:h-8 bg-gradient-to-b from-[#E0C068] to-transparent" />
      </div>
    </section>
  )
}
