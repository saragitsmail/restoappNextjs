'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Sparkles, Plus, Eye, Flame } from 'lucide-react'
import { MenuItemData } from '@/sanity/lib/client'
import { useLanguage } from '@/context/LanguageContext'
import { useCart } from '@/context/CartContext'

interface CrowdFavoritesProps {
  items: MenuItemData[]
  onSelectDish: (dish: MenuItemData) => void
  onOrderDish?: (dish: MenuItemData) => void
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

  const getBadgeTranslation = (badge?: string, isPopular?: boolean, isChefsChoice?: boolean) => {
    if (badge === 'Popular' || isPopular) return t.badgePopular
    if (badge === "Chef's Choice" || isChefsChoice) return t.badgeChefsChoice
    if (badge === 'House Special') return t.badgeHouseSpecial
    if (badge === 'New') return t.badgeNew
    return t.badgeLimited
  }

  return (
    <section id="menu" className="py-20 relative bg-black/40">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            {t.menuHeadingTitle}
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-neutral-100">{t.menuHeadingTitle}</h2>
          <p className="text-sm text-neutral-400 max-w-xl mx-auto font-light">{t.menuHeadingSubtitle}</p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 border-b border-neutral-800 pb-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-gold text-black shadow-lg shadow-gold/20'
                  : 'bg-neutral-900/60 border border-neutral-800 text-neutral-300 hover:border-gold/40 hover:text-gold'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((dish) => {
            const badgeText = getBadgeTranslation(dish.badge, dish.isPopular, dish.isChefsChoice)

            return (
              <div
                key={dish._id}
                className="group relative bg-[#121212] border border-neutral-800 hover:border-gold/50 rounded-2xl overflow-hidden transition-all duration-300 shadow-xl flex flex-col justify-between"
              >
                {/* Dish Image */}
                <div className="relative h-60 w-full overflow-hidden bg-neutral-900">
                  <Image
                    src={dish.imageUrl || 'https://images.unsplash.com/photo-1544025162-d76694265947'}
                    alt={dish.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent" />

                  {/* Badge */}
                  {badgeText && (
                    <div className="absolute top-4 left-4 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gold/90 text-black text-[11px] font-extrabold uppercase tracking-wider shadow-md">
                      <Flame className="w-3 h-3" />
                      <span>{badgeText}</span>
                    </div>
                  )}

                  {/* Price Tag in DA */}
                  <div className="absolute bottom-4 right-4 px-3.5 py-1.5 rounded-xl glass-panel border border-gold/30 text-gold font-bold text-base shadow-lg">
                    {dish.price} {t.priceCurrency}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="font-serif text-xl font-bold text-neutral-100 group-hover:text-gold transition-colors">
                      {dish.name}
                    </h3>
                    <p className="text-xs text-neutral-400 font-light line-clamp-2 leading-relaxed">
                      {dish.description}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 border-t border-neutral-800/80 flex items-center gap-3">
                    <button
                      onClick={() => onSelectDish(dish)}
                      className="p-3 border border-neutral-800 hover:border-gold/40 text-neutral-400 hover:text-gold rounded-xl transition-colors cursor-pointer"
                      title={t.viewDetails}
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => addToCart(dish)}
                      className="flex-1 btn-gold py-3 text-xs font-extrabold uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-md"
                    >
                      <Plus className="w-4 h-4" />
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
