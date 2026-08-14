'use client'

import { useState, useEffect } from 'react'
import { Menu, X, ShoppingBag } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { useCart } from '@/context/CartContext'
import { Language } from '@/i18n/translations'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [langDropdownOpen, setLangDropdownOpen] = useState(false)

  const { lang, setLang, t } = useLanguage()
  const { totalItems, setIsCartOpen } = useCart()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const languages: { code: Language; label: string; short: string }[] = [
    { code: 'fr', label: 'Français', short: 'FR' },
    { code: 'en', label: 'English', short: 'EN' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
        scrolled
          ? 'bg-[#090806]/92 backdrop-blur-xl py-4 border-b border-[#E0C068]/20 shadow-2xl'
          : 'bg-gradient-to-b from-[#090806]/90 via-[#090806]/40 to-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Brand Logo */}
        <a href="#home" className="group flex items-center gap-3">
          <span className="font-serif text-2xl md:text-3xl tracking-[0.25em] text-[#F7F4EF] font-semibold transition-colors duration-300 group-hover:text-[#E0C068]">
            {t.brandName}
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-12 text-[11px] font-medium uppercase tracking-[0.25em] text-[#D8D0C5]">
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
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-4">
          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="px-3.5 py-1.5 border border-[#E0C068]/30 hover:border-[#E0C068] bg-[#0c0a08]/60 backdrop-blur-md rounded-none text-[10px] text-[#D8D0C5] hover:text-[#E0C068] font-semibold uppercase tracking-widest transition-all duration-300 cursor-pointer flex items-center gap-1.5"
              title="Change Language"
            >
              <span>{lang.toUpperCase()}</span>
              <span className="text-[8px] text-[#E0C068]">▼</span>
            </button>

            {langDropdownOpen && (
              <div className="absolute top-full right-0 mt-2 w-32 bg-[#0e0c0a] border border-[#E0C068]/30 rounded-none shadow-2xl overflow-hidden py-1 z-50 animate-fadeIn">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      setLang(l.code)
                      setLangDropdownOpen(false)
                    }}
                    className={`w-full px-4 py-2.5 text-[10px] text-left flex items-center justify-between hover:bg-[#E0C068]/10 transition-colors cursor-pointer tracking-widest uppercase ${
                      lang === l.code ? 'text-[#E0C068] font-bold' : 'text-[#B8B0A6]'
                    }`}
                  >
                    <span>{l.label}</span>
                    <span className="text-[9px] font-bold text-[#E0C068]">{l.short}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Cart Trigger Button */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative flex items-center gap-2.5 px-4.5 py-2 border border-[#E0C068]/40 hover:border-[#E0C068] bg-[#0c0a08]/60 hover:bg-[#E0C068]/15 text-[#E0C068] text-[10px] font-semibold uppercase tracking-widest transition-all duration-300 cursor-pointer backdrop-blur-md"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="hidden sm:inline">{t.cartTitle}</span>
            {totalItems > 0 && (
              <span className="w-4 h-4 rounded-full bg-[#E0C068] text-[#0a0806] text-[9px] font-extrabold flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>

          {/* Mobile Navigation Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#D8D0C5] hover:text-[#E0C068] p-2 transition-colors cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#090806]/95 backdrop-blur-2xl border-t border-[#E0C068]/20 px-8 py-8 flex flex-col space-y-6 text-[11px] uppercase tracking-[0.25em] text-[#D8D0C5] animate-fadeIn">
          <a href="#home" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#E0C068] transition-colors py-1">
            {t.navHome}
          </a>
          <a href="#menu" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#E0C068] transition-colors py-1">
            {t.navMenu}
          </a>
          <a href="#reviews" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#E0C068] transition-colors py-1">
            {t.navReviews}
          </a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#E0C068] transition-colors py-1">
            {t.navContact}
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false)
              setIsCartOpen(true)
            }}
            className="mt-4 w-full border border-[#E0C068]/50 text-[#E0C068] py-3.5 text-[10px] font-semibold uppercase tracking-widest transition-colors hover:bg-[#E0C068]/15 cursor-pointer flex items-center justify-center gap-2"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>{t.cartTitle} {totalItems > 0 ? `(${totalItems})` : ''}</span>
          </button>
        </div>
      )}
    </nav>
  )
}
