'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { X, Plus, Minus } from 'lucide-react'
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
  const [quantity, setQuantity] = useState<number>(1)

  useEffect(() => {
    if (dish) {
      setQuantity(1)
    }
  }, [dish])

  if (!dish) return null

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(dish)
    }
    onClose()
  }

  const formatPrice = (price: number) => {
    return `${price.toLocaleString('fr-FR')} ${t.priceCurrency}`
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      {/* Backdrop */}
      <div onClick={onClose} className="fixed inset-0 bg-black/92 backdrop-blur-lg" />

      {/* Modal Container */}
      <div className="relative w-full max-w-2xl bg-[#0e0c0a] border border-[#E0C068]/30 shadow-2xl overflow-hidden z-10 text-[#F7F4EF] animate-fadeInScale">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 p-2 text-[#B8B0A6] hover:text-white bg-[#0a0806]/80 border border-[#E0C068]/30 transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Dish Banner Image */}
        <div className="relative h-72 sm:h-80 w-full bg-neutral-900">
          {dish.imageUrl ? (
            <Image
              src={dish.imageUrl}
              alt={dish.name}
              fill
              className="object-cover filter brightness-[0.92]"
              sizes="(max-width: 768px) 100vw, 672px"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-[#14120e] to-[#0a0806] text-[#E0C068]/40">
              <span className="font-serif text-3xl font-bold tracking-widest uppercase">LUMIÈRE</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e0c0a] via-black/30 to-transparent" />

          {/* Badge */}
          {dish.badge && (
            <div className="absolute top-5 left-5 px-3.5 py-1 btn-gold text-[10px] font-bold uppercase tracking-widest shadow-lg">
              {dish.badge}
            </div>
          )}

          {/* Price Badge */}
          <div className="absolute bottom-5 right-6 px-5 py-2 bg-[#090806]/95 border border-[#E0C068]/40 text-[#E0C068] font-bold text-2xl tracking-wide shadow-xl backdrop-blur-md">
            {formatPrice(dish.price * quantity)}
          </div>
        </div>

        {/* Details Content */}
        <div className="p-8 sm:p-10 space-y-7">
          <div className="space-y-3">
            {dish.category && (
              <span className="text-[10px] font-semibold text-[#E0C068] uppercase tracking-[0.35em]">
                {dish.category}
              </span>
            )}
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#F7F4EF] leading-tight">
              {dish.name}
            </h3>
            <p className="text-sm text-[#B8B0A6] font-light leading-relaxed">
              {dish.description}
            </p>
          </div>

          {/* Ingredients */}
          {dish.ingredients && dish.ingredients.length > 0 && (
            <div className="space-y-3 pt-4 border-t border-[#E0C068]/15">
              <h4 className="text-[10px] font-semibold text-[#B8B0A6] uppercase tracking-[0.25em]">
                {t.ingredientsTitle}
              </h4>
              <div className="flex flex-wrap gap-2">
                {dish.ingredients.map((ing, i) => (
                  <span
                    key={i}
                    className="px-3.5 py-1.5 border border-[#E0C068]/20 text-xs text-[#D8D0C5] font-light bg-[#0a0806]/60"
                  >
                    {ing}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Chef's Culinary Pairing */}
          {dish.pairing && (
            <div className="p-4 border-l-2 border-[#E0C068] bg-[#E0C068]/8">
              <h4 className="text-[10px] font-semibold text-[#E0C068] uppercase tracking-[0.25em] mb-1">
                {t.pairingTitle}
              </h4>
              <p className="text-xs text-[#D8D0C5] font-light">{dish.pairing}</p>
            </div>
          )}

          {/* Quantity Selector & Add to Cart */}
          <div className="pt-6 border-t border-[#E0C068]/15 flex flex-col sm:flex-row items-center gap-4">
            {/* Quantity Selector */}
            <div className="flex items-center border border-[#E0C068]/30 bg-[#0a0806]/60 px-3 py-2.5 w-full sm:w-auto justify-between gap-4">
              <span className="text-[10px] uppercase tracking-widest text-[#B8B0A6] font-semibold px-2">
                {t.quantityLabel}
              </span>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-1 border border-[#E0C068]/30 hover:border-[#E0C068] text-[#B8B0A6] hover:text-white transition-colors cursor-pointer"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="text-sm font-bold text-white px-2 min-w-[24px] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-1 border border-[#E0C068]/30 hover:border-[#E0C068] text-[#B8B0A6] hover:text-white transition-colors cursor-pointer"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full sm:flex-1 py-4 btn-gold text-xs font-bold uppercase tracking-[0.25em] flex items-center justify-center gap-2.5 shadow-xl cursor-pointer"
            >
              <Plus className="w-4 h-4 stroke-[3]" />
              <span>
                {t.addToCart} — {formatPrice(dish.price * quantity)}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
