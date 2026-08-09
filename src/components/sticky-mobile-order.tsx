'use client'

import { ShoppingBag, ArrowRight } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { useLanguage } from '@/context/LanguageContext'

interface StickyMobileOrderProps {
  onOrderNow?: () => void
}

export default function StickyMobileOrder({ onOrderNow }: StickyMobileOrderProps) {
  const { totalItems, setIsCartOpen, subtotal } = useCart()
  const { t, isRTL } = useLanguage()

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

  return (
    <div className="md:hidden fixed bottom-4 left-4 right-4 z-40 animate-slideUp">
      <button
        onClick={handleClick}
        className="w-full btn-gold py-3.5 px-6 rounded-2xl flex items-center justify-between shadow-2xl border border-amber-300/40 cursor-pointer"
      >
        <div className="flex items-center gap-3">
          <div className="relative">
            <ShoppingBag className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-red-600 text-white text-[10px] font-extrabold flex items-center justify-center animate-bounce">
                {totalItems}
              </span>
            )}
          </div>
          <span className="font-extrabold text-xs uppercase tracking-wider">
            {totalItems > 0 ? `${t.cartTitle} (${subtotal} ${t.priceCurrency})` : t.navOrderNow}
          </span>
        </div>

        <div className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider">
          <span>{totalItems > 0 ? t.cartCheckoutBtn : t.heroCtaOrder}</span>
          <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
        </div>
      </button>
    </div>
  )
}
