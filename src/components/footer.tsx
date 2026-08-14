'use client'

import { useLanguage } from '@/context/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-[#060504]/90 backdrop-blur-xl border-t border-[#E0C068]/20 py-16 text-[#F7F4EF] relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div className="space-y-2">
            <span className="font-serif text-2xl tracking-[0.25em] text-[#F7F4EF] font-bold">
              {t.brandName}
            </span>
            <p className="text-[11px] text-[#B8B0A6] font-light max-w-xs leading-relaxed tracking-wide">
              {t.footerDesc}
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-[10px] text-[#D8D0C5] font-medium uppercase tracking-[0.25em]">
            <a href="#home" className="hover:text-[#E0C068] transition-colors duration-300">
              {t.navHome}
            </a>
            <a href="#menu" className="hover:text-[#E0C068] transition-colors duration-300">
              {t.navMenu}
            </a>
            <a href="#reviews" className="hover:text-[#E0C068] transition-colors duration-300">
              {t.navReviews}
            </a>
            <a href="#contact" className="hover:text-[#E0C068] transition-colors duration-300">
              {t.navContact}
            </a>
            <a href="/studio" target="_blank" className="hover:text-[#E0C068] transition-colors duration-300 text-[#B8B0A6]">
              {t.navStudio}
            </a>
          </div>

          {/* Copyright */}
          <div className="text-[10px] text-[#B8B0A6] font-light tracking-wider">
            {t.footerRights}
          </div>
        </div>

        {/* Bottom Gold Line Accent */}
        <div className="mt-12 gold-line opacity-50" />
      </div>
    </footer>
  )
}
