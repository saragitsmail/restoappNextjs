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
    activeCategory === 'all'
      ? items
      : items.filter((item) => item.category?.toLowerCase() === activeCategory.toLowerCase())

  const getBadgeText = (badge?: string, isPopular?: boolean, isChefsChoice?: boolean) => {
    if (badge === 'Popular' || isPopular) return t.badgePopular
    if (badge === "Chef's Choice" || isChefsChoice) return t.badgeChefsChoice
    if (badge === 'House Special') return t.badgeHouseSpecial
    if (badge === 'New') return t.badgeNew
    if (badge) return t.badgeLimited
    return null
  }

  const formatPrice = (price: number) => {
    return `${price.toLocaleString('fr-FR')} ${t.priceCurrency}`
  }

  return (
    <section id="menu" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-[0.35em] text-[#E0C068]">
            {t.menuHeadingTag}
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl font-bold text-[#F7F4EF] tracking-wide">
            {t.menuHeadingTitle}
          </h2>
          <div className="w-16 h-px gold-line mx-auto" />
          <p className="text-xs sm:text-sm text-[#B8B0A6] font-light leading-relaxed tracking-wider">
            {t.menuHeadingSubtitle}
          </p>
        </div>

        {/* Category Filter Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2.5 text-[10px] font-semibold uppercase tracking-[0.25em] transition-all duration-300 cursor-pointer border ${
                activeCategory === cat.id
                  ? 'border-[#E0C068] text-[#E0C068] bg-[#E0C068]/15 shadow-[0_0_20px_rgba(224,192,104,0.2)]'
                  : 'border-[#E0C068]/20 text-[#B8B0A6] hover:border-[#E0C068]/50 hover:text-white bg-[#0e0c0a]/60 backdrop-blur-md'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((dish) => {
            const badgeText = getBadgeText(dish.badge, dish.isPopular, dish.isChefsChoice)

            return (
              <div
                key={dish._id}
                className="group relative luxury-card flex flex-col overflow-hidden"
              >
                {/* Dish Image Container */}
                <div
                  onClick={() => onSelectDish(dish)}
                  className="relative h-64 w-full overflow-hidden bg-neutral-900 cursor-pointer"
                >
                  {dish.imageUrl ? (
                    <Image
                      src={dish.imageUrl}
                      alt={dish.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-95"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-[#14120e] to-[#0a0806] text-[#E0C068]/40">
                      <span className="font-serif text-2xl font-bold tracking-widest uppercase">LUMIÈRE</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e0c0a] via-transparent to-transparent opacity-85" />

                  {/* Metallic Badge */}
                  {badgeText && (
                    <div className="absolute top-4 left-4 px-3 py-1 btn-gold text-[9px] font-bold uppercase tracking-widest shadow-md">
                      {badgeText}
                    </div>
                  )}

                  {/* Price Tag Badge */}
                  <div className="absolute bottom-4 right-4 px-3.5 py-1.5 bg-[#0a0806]/90 border border-[#E0C068]/40 text-[#E0C068] font-semibold text-sm shadow-lg backdrop-blur-md">
                    {formatPrice(dish.price)}
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-7 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-2.5">
                    <h3
                      onClick={() => onSelectDish(dish)}
                      className="font-serif text-xl font-bold text-[#F7F4EF] group-hover:text-[#E0C068] transition-colors duration-300 cursor-pointer leading-snug"
                    >
                      {dish.name}
                    </h3>
                    <p className="text-xs text-[#B8B0A6] font-light line-clamp-2 leading-relaxed">
                      {dish.description}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 border-t border-[#E0C068]/15 flex items-center gap-3">
                    <button
                      onClick={() => onSelectDish(dish)}
                      className="p-3 border border-[#E0C068]/30 hover:border-[#E0C068] text-[#B8B0A6] hover:text-white transition-all duration-300 cursor-pointer bg-[#0a0806]/50 backdrop-blur-md"
                      title={t.viewDetails}
                      aria-label={t.viewDetails}
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => addToCart(dish)}
                      className="flex-1 flex items-center justify-center gap-2.5 py-3 btn-outline-gold text-[10px] font-semibold uppercase tracking-[0.2em] transition-all duration-300 cursor-pointer"
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
