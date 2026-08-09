'use client'

import Image from 'next/image'
import { X, Plus, Minus, Trash2, ArrowRight } from 'lucide-react'
import { ShoppingBag as BagIcon } from 'lucide-react'
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
        className="absolute inset-0 bg-black/75 backdrop-blur-xs transition-opacity"
      />

      <div className={`fixed inset-y-0 max-w-full flex ${isRTL ? 'left-0' : 'right-0'}`}>
        <div className="w-screen max-w-md bg-[#121212] border-l border-gold/20 shadow-2xl flex flex-col text-[#F5F5F5]">
          {/* Header */}
          <div className="p-6 border-b border-gold/20 flex justify-between items-center bg-black/40">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-gold/10 rounded-full border border-gold/30 text-gold">
                <BagIcon className="w-5 h-5" />
              </div>
              <h2 className="font-serif text-xl text-gold font-bold tracking-wide">{t.cartHeading}</h2>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 text-neutral-400 hover:text-white rounded-full hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center text-neutral-400 py-12 space-y-4">
                <div className="p-6 bg-neutral-900/60 rounded-full border border-neutral-800">
                  <BagIcon className="w-12 h-12 text-neutral-600" />
                </div>
                <p className="max-w-xs text-sm text-neutral-300 font-light">{t.cartEmpty}</p>
              </div>
            ) : (
              cart.map(({ dish, quantity }) => (
                <div
                  key={dish._id}
                  className="flex items-center gap-4 p-4 rounded-xl bg-neutral-900/80 border border-neutral-800 hover:border-gold/30 transition-all shadow-md group"
                >
                  {/* Dish Image */}
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden shrink-0 border border-gold/20">
                    <Image
                      src={dish.imageUrl || 'https://images.unsplash.com/photo-1544025162-d76694265947'}
                      alt={dish.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Item Details */}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sm text-neutral-100 truncate">{dish.name}</h4>
                    <p className="text-xs text-gold font-semibold mt-0.5">
                      {dish.price} {t.priceCurrency}
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(dish._id, -1)}
                        className="p-1 rounded-md bg-neutral-800 hover:bg-neutral-700 text-neutral-300 transition-colors cursor-pointer"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-bold text-neutral-200 px-2 min-w-[20px] text-center">
                        {quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(dish._id, 1)}
                        className="p-1 rounded-md bg-neutral-800 hover:bg-neutral-700 text-neutral-300 transition-colors cursor-pointer"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  {/* Subtotal & Delete */}
                  <div className="flex flex-col items-end gap-2">
                    <span className="text-sm font-bold text-neutral-100">
                      {dish.price * quantity} {t.priceCurrency}
                    </span>
                    <button
                      onClick={() => removeFromCart(dish._id)}
                      className="text-neutral-500 hover:text-red-400 p-1 transition-colors cursor-pointer"
                      title="Remove dish"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout Call to Action */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-gold/20 bg-neutral-950 space-y-4">
              <div className="space-y-2 text-sm text-neutral-300">
                <div className="flex justify-between">
                  <span>{t.cartSubtotal}</span>
                  <span className="font-semibold text-neutral-100">
                    {subtotal} {t.priceCurrency}
                  </span>
                </div>
                <div className="flex justify-between text-xs text-neutral-400">
                  <span>{t.cartDeliveryFee}</span>
                  <span className="text-emerald-400 font-semibold">{t.cartDeliveryFree}</span>
                </div>
                <div className="border-t border-neutral-800 pt-2 flex justify-between text-base font-bold text-gold">
                  <span>{t.cartTotal}</span>
                  <span>
                    {subtotal} {t.priceCurrency}
                  </span>
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  onClick={clearCart}
                  className="px-4 py-3 border border-neutral-800 hover:border-neutral-700 text-neutral-400 hover:text-neutral-200 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                >
                  {t.cartClearBtn}
                </button>
                <button
                  onClick={openCheckout}
                  className="flex-1 btn-gold py-3 text-xs font-bold uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                >
                  <span>{t.cartCheckoutBtn}</span>
                  <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
