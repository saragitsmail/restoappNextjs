'use client'

import Image from 'next/image'
import { X, Plus, Minus, Trash2, ArrowRight } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { useLanguage } from '@/context/LanguageContext'

export default function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, clearCart, subtotal, openCheckout } =
    useCart()
  const { t } = useLanguage()

  if (!isCartOpen) return null

  const formatPrice = (price: number) => {
    return `${price.toLocaleString('fr-FR')} ${t.priceCurrency}`
  }

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fadeIn">
      {/* Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-black/88 backdrop-blur-md transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex">
        {/* Drawer panel — full-width on tiny screens, capped at max-w-sm on mobile, max-w-md on larger */}
        <div className="w-screen max-w-[100vw] sm:max-w-sm md:max-w-md bg-[#0b0907] border-l border-[#E0C068]/25 shadow-2xl flex flex-col text-[#F7F4EF]">
          {/* Header */}
          <div className="px-4 sm:px-6 md:px-8 py-5 sm:py-6 md:py-7 border-b border-[#E0C068]/20 flex justify-between items-center bg-[#080705] shrink-0">
            <div>
              <h2 className="font-serif text-xl sm:text-2xl text-white font-bold tracking-wide">{t.cartHeading}</h2>
              {cart.length > 0 && (
                <p className="text-[10px] text-[#B8B0A6] uppercase tracking-widest mt-1">
                  {cart.length} {cart.length === 1 ? 'item' : 'items'}
                </p>
              )}
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2.5 text-[#B8B0A6] hover:text-white border border-[#E0C068]/30 hover:border-[#E0C068] transition-all duration-300 cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List — scrollable */}
          <div className="flex-1 overflow-y-auto momentum-scroll px-4 sm:px-6 md:px-8 py-4 sm:py-6 space-y-3 sm:space-y-4">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center text-[#B8B0A6] py-16 sm:py-20 space-y-5">
                <div className="w-20 gold-line mx-auto" />
                <p className="text-sm font-light max-w-[220px] leading-relaxed">{t.cartEmpty}</p>
                <div className="w-20 gold-line mx-auto" />
              </div>
            ) : (
              cart.map(({ dish, quantity }) => (
                <div
                  key={dish._id}
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 border border-[#E0C068]/20 bg-[#0e0c0a] hover:border-[#E0C068]/40 transition-all duration-300 group"
                >
                  {/* Dish Thumbnail */}
                  <div className="relative w-14 h-14 sm:w-16 sm:h-16 overflow-hidden shrink-0 border border-[#E0C068]/30">
                    {dish.imageUrl ? (
                      <Image
                        src={dish.imageUrl}
                        alt={dish.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-[#14120e] text-[#E0C068]/40 font-serif font-bold text-xs">
                        L
                      </div>
                    )}
                  </div>

                  {/* Item Info */}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-serif text-sm font-semibold text-white truncate">{dish.name}</h4>
                    <p className="text-xs text-[#E0C068] font-light mt-0.5">
                      {formatPrice(dish.price)}
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(dish._id, -1)}
                        className="p-1 border border-[#E0C068]/30 hover:border-[#E0C068] text-[#B8B0A6] hover:text-white transition-colors cursor-pointer min-w-[32px] min-h-[32px] flex items-center justify-center"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-bold text-white px-1 min-w-[20px] text-center">
                        {quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(dish._id, 1)}
                        className="p-1 border border-[#E0C068]/30 hover:border-[#E0C068] text-[#B8B0A6] hover:text-white transition-colors cursor-pointer min-w-[32px] min-h-[32px] flex items-center justify-center"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  {/* Subtotal & Delete */}
                  <div className="flex flex-col items-end gap-2 sm:gap-3 shrink-0">
                    <span className="text-xs font-semibold text-[#E0C068] whitespace-nowrap">
                      {formatPrice(dish.price * quantity)}
                    </span>
                    <button
                      onClick={() => removeFromCart(dish._id)}
                      className="text-[#B8B0A6] hover:text-red-400 transition-colors cursor-pointer p-1 min-w-[32px] min-h-[32px] flex items-center justify-center"
                      title="Remove"
                      aria-label="Remove from cart"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Summary & Checkout */}
          {cart.length > 0 && (
            <div className="px-4 sm:px-6 md:px-8 py-5 sm:py-6 md:py-7 border-t border-[#E0C068]/20 bg-[#080705] space-y-4 sm:space-y-5 shrink-0">
              <div className="space-y-2 sm:space-y-2.5 text-xs text-[#B8B0A6]">
                <div className="flex justify-between">
                  <span className="uppercase tracking-widest">{t.cartSubtotal}</span>
                  <span className="text-white">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="uppercase tracking-widest">{t.cartDeliveryFee}</span>
                  <span className="text-[#E0C068] font-semibold uppercase tracking-wide">{t.cartDeliveryFree}</span>
                </div>
                <div className="border-t border-[#E0C068]/20 pt-3 flex justify-between text-base text-[#E0C068]">
                  <span className="uppercase tracking-widest text-xs font-semibold text-[#F7F4EF]">{t.cartTotal}</span>
                  <span className="font-bold text-lg">{formatPrice(subtotal)}</span>
                </div>
              </div>

              <div className="flex gap-2 sm:gap-3 pt-1 sm:pt-2">
                <button
                  onClick={clearCart}
                  className="px-3 sm:px-5 py-3.5 border border-[#E0C068]/30 hover:border-[#E0C068] text-[#B8B0A6] hover:text-white text-[9px] sm:text-[10px] font-semibold uppercase tracking-widest transition-all duration-300 cursor-pointer min-h-[48px] shrink-0"
                >
                  {t.cartClearBtn}
                </button>
                <button
                  onClick={openCheckout}
                  className="flex-1 btn-gold py-3.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer shadow-lg min-h-[48px]"
                >
                  <span>{t.cartCheckoutBtn}</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </button>
              </div>

              {/* iOS safe area bottom padding */}
              <div style={{ height: 'env(safe-area-inset-bottom, 0px)' }} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
