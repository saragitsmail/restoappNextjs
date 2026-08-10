'use client'

import { useLanguage } from '@/context/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-black border-t border-neutral-800/60 py-14 text-[#F5F5F5] relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div className="space-y-3">
            <span className="font-serif text-2xl tracking-[0.3em] text-gold font-bold">
              {t.brandName}
            </span>
            <p className="text-[11px] text-neutral-600 font-light max-w-xs leading-relaxed tracking-wide">
              {t.footerDesc}
            </p>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-[10px] text-neutral-600 font-medium uppercase tracking-[0.2em]">
            <a href="#home" className="hover:text-gold transition-colors duration-300">
              {t.navHome}
            </a>
            <a href="#menu" className="hover:text-gold transition-colors duration-300">
              {t.navMenu}
            </a>
            <a href="#about" className="hover:text-gold transition-colors duration-300">
              {t.navAbout}
            </a>
            <a href="#reviews" className="hover:text-gold transition-colors duration-300">
              {t.navReviews}
            </a>
            <a href="#contact" className="hover:text-gold transition-colors duration-300">
              {t.navContact}
            </a>
            <a href="/studio" target="_blank" className="hover:text-gold transition-colors duration-300 text-neutral-700">
              {t.navStudio}
            </a>
          </div>

          {/* Copyright */}
          <div className="text-[10px] text-neutral-700 font-light tracking-wide">
            {t.footerRights}
          </div>
        </div>

        {/* Bottom gold line */}
        <div className="mt-10 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      </div>
    </footer>
  )
}
