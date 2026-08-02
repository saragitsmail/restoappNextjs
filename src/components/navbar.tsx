'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Calendar } from 'lucide-react'

interface NavbarProps {
  onOpenBookTable?: () => void
}

export default function Navbar({ onOpenBookTable }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass-nav py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <span className="font-serif text-2xl md:text-3xl tracking-[0.25em] text-gold font-bold transition-all group-hover:text-amber-200">
            LUMIÈRE
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-10 text-xs font-semibold uppercase tracking-[0.2em] text-[#F5F5F5]">
          <a
            href="#home"
            className="hover:text-gold transition-colors duration-200"
          >
            Home
          </a>
          <a
            href="#menu"
            className="hover:text-gold transition-colors duration-200"
          >
            Crowd Favorites
          </a>
          <a
            href="#details"
            className="hover:text-gold transition-colors duration-200"
          >
            Product Details
          </a>
          <a
            href="#contact"
            className="hover:text-gold transition-colors duration-200"
          >
            Contact Us
          </a>
        </div>

        {/* Action CTA & Mobile Trigger */}
        <div className="flex items-center gap-4">
          <button
            onClick={onOpenBookTable}
            className="hidden md:inline-flex btn-gold px-6 py-2.5 text-xs rounded-xs flex-row items-center gap-2 cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book a Table</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gold p-2 hover:bg-gold/10 rounded-md transition-colors"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-t border-gold/20 px-6 py-6 mt-3 flex flex-col space-y-4 text-sm uppercase tracking-widest text-[#F5F5F5]">
          <a
            href="#home"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-gold py-1"
          >
            Home
          </a>
          <a
            href="#menu"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-gold py-1"
          >
            Crowd Favorites
          </a>
          <a
            href="#details"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-gold py-1"
          >
            Product Details
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-gold py-1"
          >
            Contact Us
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false)
              if (onOpenBookTable) onOpenBookTable()
            }}
            className="btn-gold px-5 py-3 text-xs text-center rounded-xs w-full mt-2"
          >
            Book a Table
          </button>
        </div>
      )}
    </nav>
  )
}
