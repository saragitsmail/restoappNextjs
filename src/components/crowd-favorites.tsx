'use client'

import { MenuItemData } from '@/sanity/lib/client'
import { Eye, Flame, Wine, PlusCircle } from 'lucide-react'

interface CrowdFavoritesProps {
  items: MenuItemData[]
  onSelectDish: (dish: MenuItemData) => void
}

export default function CrowdFavorites({ items, onSelectDish }: CrowdFavoritesProps) {
  return (
    <section id="menu" className="relative z-10 py-24 px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16 space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
          <Flame className="w-4 h-4 text-gold" />
          <span>Live Sanity CMS Menu</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl text-[#F5F5F5] font-bold">
          Crowd Favorites
        </h2>
        <p className="text-[#A0A0A0] text-sm max-w-xl mx-auto font-light">
          Managed & updated exclusively from your Sanity Studio Dashboard.
        </p>
        <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-4" />
      </div>

      {/* Empty State when Sanity contains no items yet */}
      {items.length === 0 ? (
        <div className="glass-panel p-12 text-center rounded-xs border border-gold/30 max-w-2xl mx-auto space-y-5">
          <PlusCircle className="w-12 h-12 text-gold mx-auto opacity-80" />
          <h3 className="font-serif text-2xl font-bold text-[#F5F5F5]">
            No Menu Items Found in Sanity
          </h3>
          <p className="text-xs text-[#A0A0A0] font-light leading-relaxed">
            Your frontend is configured to fetch data exclusively from Sanity project <span className="text-gold font-semibold">9mr6co1a</span>. Create your first menu items, upload photos, and set prices inside the Sanity Studio dashboard.
          </p>
          <a
            href="/studio"
            className="inline-flex items-center gap-2 btn-gold px-6 py-3 text-xs uppercase tracking-widest rounded-xs"
          >
            Open Sanity Studio (/studio)
          </a>
        </div>
      ) : (
        /* Dishes Grid from Sanity */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((dish) => (
            <div
              key={dish._id}
              onClick={() => onSelectDish(dish)}
              className="group relative overflow-hidden rounded-xs glass-panel flex flex-col justify-between cursor-pointer transition-all duration-500 hover:border-gold/50 hover:shadow-2xl hover:shadow-gold/10"
            >
              {/* Dish Image Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#131313]">
                {dish.imageUrl ? (
                  <img
                    src={dish.imageUrl}
                    alt={dish.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108 opacity-90 group-hover:opacity-100"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-xs text-[#A0A0A0] italic">
                    No Image Uploaded in Sanity
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/30 to-transparent z-10" />

                {/* Category Badge */}
                {dish.category && (
                  <span className="absolute top-4 left-4 z-20 px-3 py-1 text-[10px] uppercase tracking-widest font-semibold bg-[#0A0A0A]/80 text-gold border border-gold/30 rounded-xs backdrop-blur-md">
                    {dish.category}
                  </span>
                )}

                {/* View Details Overlay Trigger */}
                <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/90 text-[#0A0A0A] text-xs uppercase tracking-widest font-semibold rounded-xs shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <Eye className="w-4 h-4" />
                    <span>View Dish Details</span>
                  </div>
                </div>
              </div>

              {/* Dish Info Content */}
              <div className="p-6 relative z-20 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex justify-between items-baseline mb-2 gap-2">
                    <h3 className="font-serif text-xl text-[#F5F5F5] font-semibold group-hover:text-gold transition-colors duration-200">
                      {dish.name}
                    </h3>
                    <span className="font-serif text-xl font-bold text-gold shrink-0">
                      ${dish.price}
                    </span>
                  </div>
                  <p className="text-xs text-[#A0A0A0] font-light line-clamp-2 mb-4 leading-relaxed">
                    {dish.description}
                  </p>
                </div>

                {dish.pairing && (
                  <div className="pt-3 border-t border-gold/10 flex items-center gap-2 text-[11px] text-[#A0A0A0]">
                    <Wine className="w-3.5 h-3.5 text-gold/70 shrink-0" />
                    <span className="truncate italic">Pairing: {dish.pairing}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
