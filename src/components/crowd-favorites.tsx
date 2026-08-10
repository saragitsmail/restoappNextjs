'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Plus, Eye } from 'lucide-react'
import { MenuItemData } from '@/sanity/lib/client'
import { useLanguage } from '@/context/LanguageContext'
import { useCart } from '@/context/CartContext'

interface CrowdFavoritesProps {
  items: MenuItemData[]
  onSelectDish: (dish: MenuItemData) => void
}

export default function CrowdFavorites({ items, onSelectDish }: CrowdFavoritesProps) {
  const { t } = useLanguage()
  const { addToCart } = useCart()

  const [activeCategory, setActiveCategory] = useState<string>('all')

  const categories = [
    { id: 'all', label: t.catAll },
    { id: 'starters', label: t.catStarters },
    { id: 'mains', label: t.catMains },
    { id: 'signature', label: t.catSignature },
    { id: 'desserts', label: t.catDesserts },
  ]

  const filteredItems =
    activeCategory === 'all' ? items : items.filter((item) => item.category === activeCategory)

  const getBadgeText = (badge?: string, isPopular?: boolean, isChefsChoice?: boolean) => {
    if (badge === 'Popular' || isPopular) return t.badgePopular
    if (badge === "Chef's Choice" || isChefsChoice) return t.badgeChefsChoice
    if (badge === 'House Special') return t.badgeHouseSpecial
    if (badge === 'New') return t.badgeNew
    if (badge) return t.badgeLimited
    return null
  }

  return (
    <section id="menu" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6 space-y-14">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-[0.3em] text-gold/80">
            {t.menuHeadingTag}
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-neutral-100">
            {t.menuHeadingTitle}
          </h2>
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto opacity-60" />
          <p className="text-sm text-neutral-400 max-w-xl mx-auto font-light leading-relaxed">
            {t.menuHeadingSubtitle}
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 text-[10px] font-semibold uppercase tracking-widest transition-all duration-300 cursor-pointer border ${
                activeCategory === cat.id
                  ? 'border-gold text-gold bg-gold/8'
                  : 'border-neutral-800 text-neutral-500 hover:border-neutral-600 hover:text-neutral-300'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-800/30">
          {filteredItems.map((dish) => {
            const badgeText = getBadgeText(dish.badge, dish.isPopular, dish.isChefsChoice)

            return (
              <div
                key={dish._id}
                className="group relative bg-[#0e0e0e] hover:bg-[#121212] transition-all duration-500 flex flex-col"
              >
                {/* Dish Image */}
                <div className="relative h-56 w-full overflow-hidden bg-neutral-900">
                  <Image
                    src={dish.imageUrl || 'https://images.unsplash.com/photo-1544025162-d76694265947'}
                    alt={dish.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-transparent to-transparent opacity-60" />

                  {/* Badge — text only, minimal */}
                  {badgeText && (
                    <div className="absolute top-4 left-4 px-2.5 py-1 bg-gold text-black text-[9px] font-bold uppercase tracking-widest">
                      {badgeText}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-serif text-lg font-bold text-neutral-100 group-hover:text-gold transition-colors duration-300 leading-snug">
                        {dish.name}
                      </h3>
                      <span className="text-gold font-semibold text-sm shrink-0 mt-0.5">
                        {dish.price} {t.priceCurrency}
                      </span>
                    </div>
                    <p className="text-xs text-neutral-500 font-light line-clamp-2 leading-relaxed">
                      {dish.description}
                    </p>
                  </div>

                  {/* Action Row */}
                  <div className="pt-2 border-t border-neutral-800/60 flex items-center gap-2">
                    <button
                      onClick={() => onSelectDish(dish)}
                      className="p-2.5 border border-neutral-800 hover:border-neutral-600 text-neutral-600 hover:text-neutral-300 transition-all duration-300 cursor-pointer"
                      title={t.viewDetails}
                      aria-label={t.viewDetails}
                    >
                      <Eye className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => addToCart(dish)}
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 border border-gold/30 hover:border-gold hover:bg-gold/10 text-gold text-[10px] font-semibold uppercase tracking-widest transition-all duration-300 cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>{t.addToCart}</span>
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
