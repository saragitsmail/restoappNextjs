'use client'

import { MenuItemData } from '@/sanity/lib/client'
import { X, Wine, Utensils, Award, ShoppingBag } from 'lucide-react'

interface ProductDetailsModalProps {
  dish: MenuItemData | null
  onClose: () => void
  onOrderDish: (dish: MenuItemData) => void
}

export default function ProductDetailsModal({
  dish,
  onClose,
  onOrderDish,
}: ProductDetailsModalProps) {
  if (!dish) return null

  return (
    <div
      id="details"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-panel border border-gold/30 rounded-xs text-[#F5F5F5] shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 p-2 text-[#A0A0A0] hover:text-gold hover:bg-gold/10 rounded-full transition-colors"
          aria-label="Close details"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Dish Image from Sanity */}
          <div className="relative aspect-square w-full overflow-hidden rounded-xs border border-gold/20 bg-[#131313]">
            {dish.imageUrl ? (
              <img
                src={dish.imageUrl}
                alt={dish.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-xs text-[#A0A0A0] italic">
                No Image Uploaded in Sanity
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 bg-black/75 border border-gold/40 text-gold text-[11px] uppercase tracking-widest font-semibold rounded-xs">
              <Award className="w-3.5 h-3.5" />
              <span>Sanity CMS Dish</span>
            </div>
          </div>

          {/* Dish Details Content */}
          <div className="flex flex-col space-y-5">
            <div>
              <div className="flex justify-between items-baseline gap-4 mb-1">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F5F5F5]">
                  {dish.name}
                </h3>
                <span className="font-serif text-2xl font-bold text-gold shrink-0">
                  {dish.price} DA
                </span>
              </div>
              {dish.category && (
                <p className="text-xs uppercase tracking-widest text-gold/80 mb-3">
                  {dish.category}
                </p>
              )}
              <p className="text-sm text-[#A0A0A0] font-light leading-relaxed">
                {dish.description}
              </p>
            </div>

            <div className="w-full h-[1px] bg-gold/15" />

            {/* Key Ingredients */}
            {dish.ingredients && dish.ingredients.length > 0 && (
              <div>
                <h4 className="text-xs uppercase tracking-[0.2em] text-gold font-semibold mb-2 flex items-center gap-1.5">
                  <Utensils className="w-3.5 h-3.5" />
                  <span>Key Culinary Ingredients</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {dish.ingredients.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gold/5 border border-gold/20 text-xs text-[#F5F5F5] rounded-xs"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Wine Pairing */}
            {dish.pairing && (
              <div className="p-3.5 bg-gold/5 border border-gold/20 rounded-xs flex items-start gap-3">
                <Wine className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-[11px] uppercase tracking-wider text-gold font-semibold">
                    Sommelier Wine Pairing
                  </h5>
                  <p className="text-xs text-[#F5F5F5] italic mt-0.5">
                    {dish.pairing}
                  </p>
                </div>
              </div>
            )}

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  onOrderDish(dish)
                  onClose()
                }}
                className="btn-gold px-6 py-3 text-xs uppercase tracking-widest rounded-xs flex-1 flex items-center justify-center gap-2 cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Reserve This Dish</span>
              </button>

              <button
                onClick={onClose}
                className="btn-outline-gold px-5 py-3 text-xs uppercase tracking-widest rounded-xs"
              >
                Back to Menu
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
