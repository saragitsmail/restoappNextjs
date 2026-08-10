'use client'

import React from 'react'
import Image from 'next/image'
import { X, Plus } from 'lucide-react'
import { MenuItemData } from '@/sanity/lib/client'
import { useLanguage } from '@/context/LanguageContext'
import { useCart } from '@/context/CartContext'

interface ProductDetailsModalProps {
  dish: MenuItemData | null
  onClose: () => void
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
      <div onClick={onClose} className="fixed inset-0 bg-black/85 backdrop-blur-sm" />

      {/* Modal Card */}
      <div className="relative w-full max-w-2xl bg-[#0e0e0e] border border-neutral-800 shadow-2xl overflow-hidden z-10 text-[#F5F5F5]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-1.5 text-neutral-500 hover:text-neutral-200 bg-black/50 border border-neutral-800 transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Dish Image Banner */}
        <div className="relative h-64 sm:h-72 w-full bg-neutral-900">
          <Image
            src={dish.imageUrl || 'https://images.unsplash.com/photo-1544025162-d76694265947'}
            alt={dish.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 672px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-transparent to-transparent" />

          {/* Badge — text only */}
          {dish.badge && (
            <div className="absolute top-4 left-4 px-2.5 py-1 bg-gold text-black text-[9px] font-bold uppercase tracking-widest">
              {dish.badge}
            </div>
          )}

          {/* Price */}
          <div className="absolute bottom-4 right-6 px-4 py-2 bg-black/70 border border-gold/30 text-gold font-bold text-xl">
            {dish.price} {t.priceCurrency}
          </div>
        </div>

        {/* Details */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="space-y-2">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-neutral-100">{dish.name}</h3>
            <p className="text-sm text-neutral-400 font-light leading-relaxed">{dish.description}</p>
          </div>

          {/* Ingredients */}
          {dish.ingredients && dish.ingredients.length > 0 && (
            <div className="space-y-3 pt-2 border-t border-neutral-800">
              <h4 className="text-[10px] font-semibold text-neutral-500 uppercase tracking-[0.2em]">
                {t.ingredientsTitle}
              </h4>
              <div className="flex flex-wrap gap-2">
                {dish.ingredients.map((ing, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 border border-neutral-800 text-xs text-neutral-400 font-light"
                  >
                    {ing}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Sommelier Pairing */}
          {dish.pairing && (
            <div className="p-4 border-l-2 border-gold/40 bg-gold/4">
              <h4 className="text-[10px] font-semibold text-gold/80 uppercase tracking-[0.2em] mb-1">
                {t.pairingTitle}
              </h4>
              <p className="text-xs text-neutral-300 font-light">{dish.pairing}</p>
            </div>
          )}

          {/* CTA */}
          <div className="pt-2 border-t border-neutral-800">
            <button
              onClick={handleAddToCart}
              className="w-full btn-gold py-4 text-[10px] font-bold uppercase tracking-[0.25em] flex items-center justify-center gap-2 cursor-pointer shadow-lg rounded-none"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>{t.addToCart} — {dish.price} {t.priceCurrency}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
