'use client'

import Image from 'next/image'
import { X, Plus, Minus, Trash2, ArrowRight } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { useLanguage } from '@/context/LanguageContext'

export default function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, clearCart, subtotal, openCheckout } =
    useCart()
  const { t, isRTL } = useLanguage()

  if (!isCartOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fadeIn">
      {/* Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
      />

      <div className={`fixed inset-y-0 max-w-full flex ${isRTL ? 'left-0' : 'right-0'}`}>
        <div className="w-screen max-w-md bg-[#0a0a0a] border-l border-neutral-800 shadow-2xl flex flex-col text-[#F5F5F5]">
          {/* Header */}
          <div className="px-7 py-6 border-b border-neutral-800 flex justify-between items-center">
            <div>
              <h2 className="font-serif text-xl text-neutral-100 font-bold tracking-wide">{t.cartHeading}</h2>
              {cart.length > 0 && (
                <p className="text-[10px] text-neutral-600 uppercase tracking-widest mt-0.5">
                  {cart.length} {cart.length === 1 ? 'item' : 'items'}
                </p>
              )}
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 text-neutral-600 hover:text-neutral-200 border border-neutral-800 hover:border-neutral-600 transition-all duration-300 cursor-pointer"
              aria-label="Close cart"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto px-7 py-5 space-y-3">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center text-neutral-600 py-16 space-y-4">
                <div className="w-16 h-px bg-gold/20 mx-auto" />
                <p className="text-sm text-neutral-500 font-light max-w-[200px] leading-relaxed">{t.cartEmpty}</p>
                <div className="w-16 h-px bg-gold/20 mx-auto" />
              </div>
            ) : (
              cart.map(({ dish, quantity }) => (
                <div
                  key={dish._id}
                  className="flex items-center gap-4 p-4 border border-neutral-800/60 hover:border-neutral-700 transition-all duration-300 group"
                >
                  {/* Dish Image */}
                  <div className="relative w-14 h-14 overflow-hidden shrink-0 border border-neutral-800">
                    <Image
                      src={dish.imageUrl || 'https://images.unsplash.com/photo-1544025162-d76694265947'}
                      alt={dish.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Item Details */}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sm text-neutral-200 truncate">{dish.name}</h4>
                    <p className="text-xs text-gold/80 font-light mt-0.5">
                      {dish.price} {t.priceCurrency}
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(dish._id, -1)}
                        className="p-1 border border-neutral-800 hover:border-neutral-600 text-neutral-500 hover:text-neutral-300 transition-colors cursor-pointer"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-2.5 h-2.5" />
                      </button>
                      <span className="text-xs font-semibold text-neutral-300 px-1 min-w-[20px] text-center">
                        {quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(dish._id, 1)}
                        className="p-1 border border-neutral-800 hover:border-neutral-600 text-neutral-500 hover:text-neutral-300 transition-colors cursor-pointer"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-2.5 h-2.5" />
                      </button>
                    </div>
                  </div>

                  {/* Subtotal & Delete */}
                  <div className="flex flex-col items-end gap-2 shrink-0">
                    <span className="text-sm font-semibold text-neutral-200">
                      {dish.price * quantity} {t.priceCurrency}
                    </span>
                    <button
                      onClick={() => removeFromCart(dish._id)}
                      className="text-neutral-700 hover:text-red-500 transition-colors cursor-pointer p-0.5"
                      title="Remove"
                      aria-label="Remove from cart"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {cart.length > 0 && (
            <div className="px-7 py-6 border-t border-neutral-800 bg-[#080808] space-y-4">
              <div className="space-y-2 text-xs text-neutral-500">
                <div className="flex justify-between">
                  <span className="uppercase tracking-widest">{t.cartSubtotal}</span>
                  <span className="text-neutral-300">{subtotal} {t.priceCurrency}</span>
                </div>
                <div className="flex justify-between">
                  <span className="uppercase tracking-widest">{t.cartDeliveryFee}</span>
                  <span className="text-emerald-500 font-medium uppercase tracking-wide">{t.cartDeliveryFree}</span>
                </div>
                <div className="border-t border-neutral-800 pt-2.5 flex justify-between text-sm text-gold">
                  <span className="uppercase tracking-widest text-[10px] font-semibold">{t.cartTotal}</span>
                  <span className="font-bold">{subtotal} {t.priceCurrency}</span>
                </div>
              </div>

              <div className="flex gap-2 pt-1">
                <button
                  onClick={clearCart}
                  className="px-4 py-3 border border-neutral-800 hover:border-neutral-600 text-neutral-600 hover:text-neutral-400 text-[10px] font-semibold uppercase tracking-widest transition-all duration-300 cursor-pointer"
                >
                  {t.cartClearBtn}
                </button>
                <button
                  onClick={openCheckout}
                  className="flex-1 btn-gold py-3 text-[10px] font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-2 cursor-pointer shadow-lg rounded-none"
                >
                  <span>{t.cartCheckoutBtn}</span>
                  <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
