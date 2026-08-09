'use client'

import { useLanguage } from '@/context/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-neutral-950 border-t border-gold/20 py-12 text-[#F5F5F5] relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <span className="font-serif text-2xl tracking-[0.25em] text-gold font-bold">
            {t.brandName}
          </span>
          <p className="text-xs text-neutral-400 font-light max-w-sm">{t.footerDesc}</p>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-xs text-neutral-400 font-medium uppercase tracking-widest">
          <a href="#home" className="hover:text-gold transition-colors">
            {t.navHome}
          </a>
          <a href="#menu" className="hover:text-gold transition-colors">
            {t.navMenu}
          </a>
          <a href="#about" className="hover:text-gold transition-colors">
            {t.navAbout}
          </a>
          <a href="#reviews" className="hover:text-gold transition-colors">
            {t.navReviews}
          </a>
          <a href="#contact" className="hover:text-gold transition-colors">
            {t.navContact}
          </a>
          <a href="/studio" target="_blank" className="hover:text-gold transition-colors text-amber-400 font-bold">
            {t.navStudio}
          </a>
        </div>

        <div className="text-xs text-neutral-500 font-light">{t.footerRights}</div>
      </div>
    </footer>
  )
}
