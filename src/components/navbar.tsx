'use client'

import { useState, useEffect } from 'react'
import { Menu, X, ShoppingBag, Globe, Sun, Moon } from 'lucide-react'
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
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'ar', label: 'العربية', flag: '🇩🇿' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled ? 'glass-nav py-3 shadow-xl' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <span className="font-serif text-2xl md:text-3xl tracking-[0.2em] text-gold font-bold transition-all group-hover:text-amber-200">
            {t.brandName}
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8 text-xs font-semibold uppercase tracking-[0.2em] text-[#F5F5F5]">
          <a href="#home" className="hover:text-gold transition-colors duration-200">
            {t.navHome}
          </a>
          <a href="#menu" className="hover:text-gold transition-colors duration-200">
            {t.navMenu}
          </a>
          <a href="#about" className="hover:text-gold transition-colors duration-200">
            {t.navAbout}
          </a>
          <a href="#reviews" className="hover:text-gold transition-colors duration-200">
            {t.navReviews}
          </a>
          <a href="#contact" className="hover:text-gold transition-colors duration-200">
            {t.navContact}
          </a>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="px-3 py-2 bg-neutral-900/80 border border-gold/30 hover:border-gold rounded-full text-xs text-gold font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Change Language"
            >
              <Globe className="w-3.5 h-3.5" />
              <span className="uppercase font-bold">{lang}</span>
            </button>

            {langDropdownOpen && (
              <div className="absolute top-full right-0 mt-2 w-36 bg-[#181818] border border-gold/30 rounded-xl shadow-2xl overflow-hidden py-1 z-50 animate-fadeIn">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      setLang(l.code)
                      setLangDropdownOpen(false)
                    }}
                    className={`w-full px-4 py-2 text-xs text-left flex items-center justify-between hover:bg-gold/10 transition-colors cursor-pointer ${
                      lang === l.code ? 'text-gold font-bold bg-gold/5' : 'text-neutral-300'
                    }`}
                  >
                    <span>{l.label}</span>
                    <span>{l.flag}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 bg-neutral-900/80 border border-gold/30 hover:border-gold text-gold rounded-full transition-colors cursor-pointer"
            title="Toggle Light/Dark Theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Cart Button with Counter */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative btn-gold px-4 py-2 text-xs rounded-full flex items-center gap-2 cursor-pointer shadow-md"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="hidden sm:inline font-bold uppercase">{t.cartTitle}</span>
            {totalItems > 0 && (
              <span className="w-5 h-5 rounded-full bg-red-600 text-white text-[11px] font-extrabold flex items-center justify-center animate-pulse">
                {totalItems}
              </span>
            )}
          </button>

          {/* Mobile Navigation Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gold p-2 hover:bg-gold/10 rounded-lg transition-colors cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-t border-gold/20 px-6 py-6 mt-3 flex flex-col space-y-4 text-sm uppercase tracking-widest text-[#F5F5F5] animate-fadeIn">
          <a href="#home" onClick={() => setMobileMenuOpen(false)} className="hover:text-gold py-1">
            {t.navHome}
          </a>
          <a href="#menu" onClick={() => setMobileMenuOpen(false)} className="hover:text-gold py-1">
            {t.navMenu}
          </a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="hover:text-gold py-1">
            {t.navAbout}
          </a>
          <a href="#reviews" onClick={() => setMobileMenuOpen(false)} className="hover:text-gold py-1">
            {t.navReviews}
          </a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-gold py-1">
            {t.navContact}
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false)
              setIsCartOpen(true)
            }}
            className="btn-gold px-5 py-3 text-xs text-center rounded-xl w-full mt-2 cursor-pointer flex items-center justify-center gap-2"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>{t.cartHeading} ({totalItems})</span>
          </button>
        </div>
      )}
    </nav>
  )
}
