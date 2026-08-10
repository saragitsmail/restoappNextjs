'use client'

import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section
      id="home"
      className="relative w-full h-screen min-h-[600px] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Image — slow cinematic zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=90&w=2070&auto=format&fit=crop"
          alt="Lumière fine dining"
          fill
          priority
          className="object-cover animate-hero-zoom"
          sizes="100vw"
        />
      </div>

      {/* Dark cinematic overlay — gradient bottom-heavy */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/55 via-black/40 to-black/80" />

      {/* Subtle vignette */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.55) 100%)',
        }}
      />

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-6 space-y-6 select-none">
        {/* Brand Name */}
        <h1
          className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-[0.18em] text-white"
          style={{ textShadow: '0 2px 40px rgba(0,0,0,0.5)' }}
        >
          {t.heroTitle}
        </h1>

        {/* Gold divider line */}
        <div className="flex items-center gap-4 w-full max-w-xs">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gold opacity-60" />
          <div className="w-1.5 h-1.5 rounded-full bg-gold opacity-80" />
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gold opacity-60" />
        </div>

        {/* Tagline */}
        <p
          className="text-sm sm:text-base text-neutral-300 font-light tracking-widest uppercase max-w-md"
          style={{ letterSpacing: '0.25em' }}
        >
          {t.heroTagline}
        </p>

        {/* CTA */}
        <div className="pt-4">
          <a
            href="#menu"
            className="inline-block px-10 py-4 border border-gold/60 hover:border-gold hover:bg-gold/10 text-gold hover:text-white text-xs font-semibold uppercase tracking-[0.3em] transition-all duration-500 rounded-none"
          >
            {t.heroCtaMenu}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-scroll-bounce">
        <div className="w-px h-10 bg-gradient-to-b from-gold/0 via-gold/60 to-gold/0" />
      </div>
    </section>
  )
}
