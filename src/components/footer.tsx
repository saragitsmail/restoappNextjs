'use client'

import { useLanguage } from '@/context/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-[#060504]/90 backdrop-blur-xl border-t border-[#E0C068]/20 py-10 sm:py-14 md:py-16 text-[#F7F4EF] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="flex flex-col items-center md:flex-row md:items-center md:justify-between gap-6 sm:gap-8 text-center md:text-left">
          {/* Brand */}
          <div className="space-y-2">
            <span className="font-serif text-xl sm:text-2xl tracking-[0.2em] sm:tracking-[0.25em] text-[#F7F4EF] font-bold">
              {t.brandName}
            </span>
            <p className="text-[11px] text-[#B8B0A6] font-light max-w-xs leading-relaxed tracking-wide mx-auto md:mx-0">
              {t.footerDesc}
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-8 gap-y-3 text-[10px] text-[#D8D0C5] font-medium uppercase tracking-[0.25em]">
            <a href="#home" className="hover:text-[#E0C068] transition-colors duration-300 min-h-[40px] flex items-center">
              {t.navHome}
            </a>
            <a href="#menu" className="hover:text-[#E0C068] transition-colors duration-300 min-h-[40px] flex items-center">
              {t.navMenu}
            </a>
            <a href="#reviews" className="hover:text-[#E0C068] transition-colors duration-300 min-h-[40px] flex items-center">
              {t.navReviews}
            </a>
            <a href="#contact" className="hover:text-[#E0C068] transition-colors duration-300 min-h-[40px] flex items-center">
              {t.navContact}
            </a>
            <a href="/studio" target="_blank" className="hover:text-[#E0C068] transition-colors duration-300 text-[#B8B0A6] min-h-[40px] flex items-center">
              {t.navStudio}
            </a>
          </div>

          {/* Copyright */}
          <div className="text-[10px] text-[#B8B0A6] font-light tracking-wider">
            {t.footerRights}
          </div>
        </div>

        {/* Bottom Gold Line Accent */}
        <div className="mt-8 sm:mt-10 md:mt-12 gold-line opacity-50" />

        {/* iOS safe area bottom */}
        <div style={{ height: 'env(safe-area-inset-bottom, 0px)' }} />
      </div>
    </footer>
  )
}
