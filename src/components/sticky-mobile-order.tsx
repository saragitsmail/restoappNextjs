'use client'

import { ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { useLanguage } from '@/context/LanguageContext'

export default function StickyMobileOrder() {
  const { totalItems, setIsCartOpen, subtotal } = useCart()
  const { t } = useLanguage()

  const handleClick = () => {
    if (totalItems > 0) {
      setIsCartOpen(true)
    } else {
      const menuElem = document.getElementById('menu')
      if (menuElem) {
        menuElem.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  // Only show when there are items in cart
  if (totalItems === 0) return null

  return (
    <div className="md:hidden fixed bottom-4 left-4 right-4 z-40 animate-slideUp">
      <button
        onClick={handleClick}
        className="w-full btn-gold py-4 px-6 flex items-center justify-between shadow-2xl cursor-pointer rounded-none"
      >
        <div className="flex items-center gap-3">
          <div className="relative">
            <ShoppingBag className="w-4 h-4" />
            <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-black text-gold text-[9px] font-bold flex items-center justify-center">
              {totalItems}
            </span>
          </div>
          <span className="font-bold text-[10px] uppercase tracking-widest">
            {t.cartTitle}
          </span>
        </div>

        <span className="text-[10px] font-bold uppercase tracking-widest">
          {subtotal} {t.priceCurrency}
        </span>
      </button>
    </div>
  )
}
