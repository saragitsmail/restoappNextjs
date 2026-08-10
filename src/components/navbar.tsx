'use client'

import { useState, useEffect } from 'react'
import { Menu, X, ShoppingBag } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { useCart } from '@/context/CartContext'
import { useTheme } from '@/context/ThemeContext'
import { Language } from '@/i18n/translations'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [langDropdownOpen, setLangDropdownOpen] = useState(false)

  const { lang, setLang, t, isRTL } = useLanguage()
  const { totalItems, setIsCartOpen } = useCart()
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const languages: { code: Language; label: string; short: string }[] = [
    { code: 'fr', label: 'Français', short: 'FR' },
    { code: 'en', label: 'English', short: 'EN' },
    { code: 'ar', label: 'العربية', short: 'AR' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
        scrolled ? 'glass-nav py-3 shadow-xl' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Brand Logo */}
        <a href="#home" className="group">
          <span className="font-serif text-xl md:text-2xl tracking-[0.3em] text-gold font-bold transition-all duration-300 group-hover:text-amber-200">
            {t.brandName}
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-10 text-[10px] font-medium uppercase tracking-[0.25em] text-neutral-300">
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
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="px-3 py-1.5 border border-neutral-700 hover:border-gold/50 rounded text-[10px] text-neutral-300 hover:text-gold font-semibold uppercase tracking-widest transition-all duration-300 cursor-pointer"
              title="Change Language"
            >
              {lang.toUpperCase()}
            </button>

            {langDropdownOpen && (
              <div className="absolute top-full right-0 mt-2 w-32 bg-[#141414] border border-neutral-800 rounded shadow-2xl overflow-hidden py-1 z-50 animate-fadeIn">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      setLang(l.code)
                      setLangDropdownOpen(false)
                    }}
                    className={`w-full px-4 py-2.5 text-[10px] text-left flex items-center justify-between hover:bg-gold/10 transition-colors cursor-pointer tracking-widest uppercase ${
                      lang === l.code ? 'text-gold font-bold' : 'text-neutral-400'
                    }`}
                  >
                    <span>{l.label}</span>
                    <span className="text-[9px] font-bold">{l.short}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-1.5 border border-neutral-700 hover:border-gold/50 text-neutral-400 hover:text-gold rounded transition-all duration-300 cursor-pointer"
            title="Toggle Theme"
            aria-label="Toggle light/dark mode"
          >
            {theme === 'dark' ? (
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="5" strokeWidth="1.5" />
                <line x1="12" y1="1" x2="12" y2="3" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="12" y1="21" x2="12" y2="23" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="1" y1="12" x2="3" y2="12" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="21" y1="12" x2="23" y2="12" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            ) : (
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </button>

          {/* Cart Button */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative flex items-center gap-2 px-4 py-1.5 border border-gold/40 hover:border-gold hover:bg-gold/10 text-gold text-[10px] font-semibold uppercase tracking-widest rounded transition-all duration-300 cursor-pointer"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{t.cartTitle}</span>
            {totalItems > 0 && (
              <span className="w-4 h-4 rounded-full bg-gold text-black text-[9px] font-extrabold flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>

          {/* Mobile Navigation Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-neutral-300 hover:text-gold p-1.5 transition-colors cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-nav border-t border-gold/10 px-6 py-8 flex flex-col space-y-5 text-[11px] uppercase tracking-[0.25em] text-neutral-300 animate-fadeIn">
          <a href="#home" onClick={() => setMobileMenuOpen(false)} className="hover:text-gold transition-colors py-1">
            {t.navHome}
          </a>
          <a href="#menu" onClick={() => setMobileMenuOpen(false)} className="hover:text-gold transition-colors py-1">
            {t.navMenu}
          </a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="hover:text-gold transition-colors py-1">
            {t.navAbout}
          </a>
          <a href="#reviews" onClick={() => setMobileMenuOpen(false)} className="hover:text-gold transition-colors py-1">
            {t.navReviews}
          </a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-gold transition-colors py-1">
            {t.navContact}
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false)
              setIsCartOpen(true)
            }}
            className="mt-4 w-full border border-gold/40 text-gold py-3 text-[10px] font-semibold uppercase tracking-widest rounded transition-colors hover:bg-gold/10 cursor-pointer flex items-center justify-center gap-2"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>{t.cartTitle} {totalItems > 0 ? `(${totalItems})` : ''}</span>
          </button>
        </div>
      )}
    </nav>
  )
}
