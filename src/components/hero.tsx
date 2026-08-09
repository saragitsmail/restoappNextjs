'use client'

import { useState, useEffect } from 'react'
import { Sparkles, Utensils, ArrowRight } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { useCart } from '@/context/CartContext'

export default function Hero() {
  const { t, isRTL } = useLanguage()
  const { setIsCartOpen } = useCart()

  const [isOpenNow, setIsOpenNow] = useState(true)

  useEffect(() => {
    // Check if current hour is between 11 AM and 11:30 PM
    const now = new Date()
    const hours = now.getHours()
    if (hours >= 11 && hours < 23) {
      setIsOpenNow(true)
    } else {
      setIsOpenNow(true) // Set to open for demonstration
    }
  }, [])

  const handleOrderClick = () => {
    const menuElem = document.getElementById('menu')
    if (menuElem) {
      menuElem.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden">
      {/* Background Gradient & Glow */}
      <div className="absolute inset-0 bg-radial from-amber-500/10 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-6 text-center z-10 space-y-8 animate-fadeIn">
        {/* Status Badge & Urgency Tag */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-gold/40 text-gold text-xs font-semibold uppercase tracking-widest shadow-lg">
            <span>{isOpenNow ? t.openStatusOpen : t.openStatusClosed}</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-wide">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.urgencyLabel}</span>
          </div>
        </div>

        {/* Hero Title */}
        <div className="space-y-4">
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-neutral-100 leading-tight">
            {t.heroTitle}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
        </div>

        {/* Hero Subtitle */}
        <p className="text-base sm:text-xl text-neutral-300 max-w-2xl mx-auto font-light leading-relaxed">
          {t.heroSubtitle}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={handleOrderClick}
            className="w-full sm:w-auto btn-gold px-8 py-4 text-xs font-extrabold uppercase tracking-widest rounded-xl flex items-center justify-center gap-3 cursor-pointer shadow-2xl hover:scale-105 transition-all"
          >
            <Utensils className="w-4 h-4" />
            <span>{t.heroCtaOrder}</span>
            <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
          </button>

          <a
            href="#menu"
            className="w-full sm:w-auto px-8 py-4 glass-panel border border-neutral-700 hover:border-gold text-neutral-200 hover:text-gold text-xs font-bold uppercase tracking-widest rounded-xl transition-all"
          >
            {t.heroCtaMenu}
          </a>
        </div>
      </div>
    </section>
  )
}
