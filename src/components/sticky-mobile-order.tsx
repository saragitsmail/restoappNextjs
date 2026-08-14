'use client'

import { ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { useLanguage } from '@/context/LanguageContext'

export default function StickyMobileOrder() {
  const { totalItems, setIsCartOpen, subtotal } = useCart()
  const { t } = useLanguage()

  if (totalItems === 0) return null

  const formatPrice = (price: number) => {
    return `${price.toLocaleString('fr-FR')} ${t.priceCurrency}`
  }

  return (
    <div className="md:hidden fixed bottom-6 left-6 right-6 z-40 animate-slideUp">
      <button
        onClick={() => setIsCartOpen(true)}
        className="w-full btn-gold py-4 px-6 flex items-center justify-between shadow-2xl cursor-pointer font-bold text-xs uppercase tracking-[0.2em]"
      >
        <div className="flex items-center gap-3">
          <div className="relative">
            <ShoppingBag className="w-4 h-4" />
            <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-[#0a0806] text-[#E0C068] text-[9px] font-extrabold flex items-center justify-center">
              {totalItems}
            </span>
          </div>
          <span>{t.cartTitle}</span>
        </div>

        <span>{formatPrice(subtotal)}</span>
      </button>
    </div>
  )
}
