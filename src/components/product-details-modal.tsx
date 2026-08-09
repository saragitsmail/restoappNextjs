'use client'

import React from 'react'
import Image from 'next/image'
import { X, Plus, Sparkles, Flame } from 'lucide-react'
import { MenuItemData } from '@/sanity/lib/client'
import { useLanguage } from '@/context/LanguageContext'
import { useCart } from '@/context/CartContext'

interface ProductDetailsModalProps {
  dish: MenuItemData | null
  onClose: () => void
  onOrderDish?: (dish: MenuItemData) => void
}

export default function ProductDetailsModal({ dish, onClose }: ProductDetailsModalProps) {
  const { t } = useLanguage()
  const { addToCart } = useCart()

  if (!dish) return null

  const handleAddToCart = () => {
    addToCart(dish)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      {/* Backdrop */}
      <div onClick={onClose} className="fixed inset-0 bg-black/80 backdrop-blur-sm" />

      {/* Modal Card */}
      <div className="relative w-full max-w-2xl bg-[#121212] border border-gold/30 rounded-3xl shadow-2xl overflow-hidden z-10 text-[#F5F5F5]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-white bg-black/60 hover:bg-black rounded-full border border-white/10 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Dish Image Banner */}
        <div className="relative h-72 sm:h-80 w-full bg-neutral-900">
          <Image
            src={dish.imageUrl || 'https://images.unsplash.com/photo-1544025162-d76694265947'}
            alt={dish.name}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent" />

          {/* Badge */}
          {dish.badge && (
            <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gold/90 text-black text-xs font-extrabold uppercase tracking-wider shadow-md">
              <Flame className="w-3.5 h-3.5" />
              <span>{dish.badge}</span>
            </div>
          )}

          {/* Price */}
          <div className="absolute bottom-4 right-6 px-4 py-2 rounded-2xl glass-panel border border-gold/30 text-gold font-bold text-xl shadow-xl">
            {dish.price} {t.priceCurrency}
          </div>
        </div>

        {/* Modal Details */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="space-y-2">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-neutral-100">{dish.name}</h3>
            <p className="text-sm text-neutral-300 font-light leading-relaxed">{dish.description}</p>
          </div>

          {/* Ingredients */}
          {dish.ingredients && dish.ingredients.length > 0 && (
            <div className="space-y-2 pt-2 border-t border-neutral-800">
              <h4 className="text-xs font-semibold text-gold uppercase tracking-wider">
                {t.ingredientsTitle}
              </h4>
              <div className="flex flex-wrap gap-2">
                {dish.ingredients.map((ing, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-neutral-900 border border-neutral-800 rounded-full text-xs text-neutral-300"
                  >
                    {ing}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Sommelier Pairing */}
          {dish.pairing && (
            <div className="p-4 rounded-xl bg-gold/10 border border-gold/20 flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-gold shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-semibold text-gold uppercase tracking-wider">
                  {t.pairingTitle}
                </h4>
                <p className="text-xs text-neutral-200 font-light mt-0.5">{dish.pairing}</p>
              </div>
            </div>
          )}

          {/* CTA Action */}
          <div className="pt-4 border-t border-neutral-800">
            <button
              onClick={handleAddToCart}
              className="w-full btn-gold py-4 text-xs font-extrabold uppercase tracking-widest rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-xl"
            >
              <Plus className="w-4 h-4" />
              <span>{t.addToCart} • {dish.price} {t.priceCurrency}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
