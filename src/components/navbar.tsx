'use client'

import { useState, useEffect, useRef } from 'react'
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
  const langDropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  // Close language dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(e.target as Node)) {
        setLangDropdownOpen(false)
      }
    }
    if (langDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [langDropdownOpen])

  const languages: { code: Language; label: string; short: string }[] = [
    { code: 'fr', label: 'Français', short: 'FR' },
    { code: 'en', label: 'English', short: 'EN' },
  ]

  const closeMobileMenu = () => setMobileMenuOpen(false)

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-[#090806]/95 backdrop-blur-xl py-3 sm:py-4 border-b border-[#E0C068]/20 shadow-2xl'
            : 'bg-gradient-to-b from-[#090806]/90 via-[#090806]/40 to-transparent py-4 sm:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex justify-between items-center">
          {/* Brand Logo */}
          <a href="#home" className="group flex items-center gap-2 sm:gap-3 shrink-0" onClick={closeMobileMenu}>
            <span className="font-serif text-xl sm:text-2xl md:text-3xl tracking-[0.12em] sm:tracking-[0.2em] md:tracking-[0.25em] text-[#F7F4EF] font-semibold transition-colors duration-300 group-hover:text-[#E0C068]">
              {t.brandName}
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-12 text-[11px] font-medium uppercase tracking-[0.25em] text-[#D8D0C5]">
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
          <div className="flex items-center gap-1.5 sm:gap-3">
            {/* Language Switcher */}
            <div className="relative" ref={langDropdownRef}>
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="px-2.5 sm:px-3.5 py-1.5 border border-[#E0C068]/30 hover:border-[#E0C068] bg-[#0c0a08]/60 backdrop-blur-md rounded-none text-[9px] sm:text-[10px] text-[#D8D0C5] hover:text-[#E0C068] font-semibold uppercase tracking-widest transition-all duration-300 cursor-pointer flex items-center gap-1 sm:gap-1.5 min-h-[38px] min-w-[44px] justify-center"
                title="Change Language"
                aria-label="Change Language"
                aria-expanded={langDropdownOpen}
              >
                <span>{lang.toUpperCase()}</span>
                <span className="text-[8px] text-[#E0C068]">▼</span>
              </button>

              {/* Language dropdown — animate via CSS max-height */}
              <div
                className={`absolute top-full right-0 mt-2 w-32 bg-[#0e0c0a] border border-[#E0C068]/30 shadow-2xl overflow-hidden py-1 z-50 transition-all duration-200 origin-top ${
                  langDropdownOpen
                    ? 'opacity-100 scale-y-100 pointer-events-auto'
                    : 'opacity-0 scale-y-0 pointer-events-none'
                }`}
                style={{ transformOrigin: 'top right' }}
              >
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      setLang(l.code)
                      setLangDropdownOpen(false)
                    }}
                    className={`w-full px-4 py-3 text-[10px] text-left flex items-center justify-between hover:bg-[#E0C068]/10 transition-colors cursor-pointer tracking-widest uppercase min-h-[44px] ${
                      lang === l.code ? 'text-[#E0C068] font-bold' : 'text-[#B8B0A6]'
                    }`}
                  >
                    <span>{l.label}</span>
                    <span className="text-[9px] font-bold text-[#E0C068]">{l.short}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Cart Trigger Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-1.5 sm:py-2 border border-[#E0C068]/40 hover:border-[#E0C068] bg-[#0c0a08]/60 hover:bg-[#E0C068]/15 text-[#E0C068] text-[9px] sm:text-[10px] font-semibold uppercase tracking-widest transition-all duration-300 cursor-pointer backdrop-blur-md min-h-[38px]"
              aria-label={t.cartTitle}
            >
              <ShoppingBag className="w-4 h-4 shrink-0" />
              <span className="hidden sm:inline">{t.cartTitle}</span>
              {totalItems > 0 && (
                <span className="w-4 h-4 rounded-full bg-[#E0C068] text-[#0a0806] text-[9px] font-extrabold flex items-center justify-center shrink-0">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile Navigation Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-[#D8D0C5] hover:text-[#E0C068] p-2 transition-colors cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer — full-screen overlay with smooth transition */}
      {/* Backdrop */}
      <div
        className={`md:hidden fixed inset-0 z-30 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMobileMenu}
        aria-hidden="true"
      />

      {/* Slide-down panel */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full z-35 bg-[#090806]/98 backdrop-blur-2xl border-b border-[#E0C068]/20 shadow-2xl transition-all duration-350 ease-out ${
          mobileMenuOpen
            ? 'translate-y-0 opacity-100'
            : '-translate-y-full opacity-0'
        }`}
        style={{ paddingTop: 'calc(60px + env(safe-area-inset-top, 0px))' }}
      >
        <div className="px-5 sm:px-8 py-5 flex flex-col space-y-1 text-[11px] uppercase tracking-[0.2em] text-[#D8D0C5]">
          <a
            href="#home"
            onClick={closeMobileMenu}
            className="hover:text-[#E0C068] active:text-[#E0C068] transition-colors py-3.5 min-h-[52px] flex items-center border-b border-[#E0C068]/10"
          >
            {t.navHome}
          </a>
          <a
            href="#menu"
            onClick={closeMobileMenu}
            className="hover:text-[#E0C068] active:text-[#E0C068] transition-colors py-3.5 min-h-[52px] flex items-center border-b border-[#E0C068]/10"
          >
            {t.navMenu}
          </a>
          <a
            href="#reviews"
            onClick={closeMobileMenu}
            className="hover:text-[#E0C068] active:text-[#E0C068] transition-colors py-3.5 min-h-[52px] flex items-center border-b border-[#E0C068]/10"
          >
            {t.navReviews}
          </a>
          <a
            href="#contact"
            onClick={closeMobileMenu}
            className="hover:text-[#E0C068] active:text-[#E0C068] transition-colors py-3.5 min-h-[52px] flex items-center border-b border-[#E0C068]/10"
          >
            {t.navContact}
          </a>
          <button
            onClick={() => {
              closeMobileMenu()
              setIsCartOpen(true)
            }}
            className="mt-4 w-full border border-[#E0C068]/50 text-[#E0C068] py-4 text-[10px] font-semibold uppercase tracking-widest transition-colors hover:bg-[#E0C068]/15 active:bg-[#E0C068]/20 cursor-pointer flex items-center justify-center gap-2 min-h-[52px]"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>{t.cartTitle} {totalItems > 0 ? `(${totalItems})` : ''}</span>
          </button>
          {/* Bottom safe area */}
          <div className="h-4" style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }} />
        </div>
      </div>
    </>
  )
}
