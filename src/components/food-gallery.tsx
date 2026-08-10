'use client'

import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'

const GALLERY_IMAGES = [
  {
    url: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1000&auto=format&fit=crop',
    title: 'Wagyu Beef Ribeye',
  },
  {
    url: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=1000&auto=format&fit=crop',
    title: 'Blue Lobster Tail',
  },
  {
    url: 'https://images.unsplash.com/photo-1579372786545-d24232daf58c?q=80&w=1000&auto=format&fit=crop',
    title: 'Dark Chocolate Sphere',
  },
  {
    url: 'https://images.unsplash.com/photo-1514944288352-fffac99f0bdf?q=80&w=1000&auto=format&fit=crop',
    title: 'Duck Breast Rossini',
  },
  {
    url: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=1000&auto=format&fit=crop',
    title: 'Sea Bass Carpaccio',
  },
  {
    url: 'https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?q=80&w=1000&auto=format&fit=crop',
    title: 'Black Truffle Risotto',
  },
]

export default function FoodGallery() {
  const { t } = useLanguage()

  return (
    <section className="py-28 border-t border-neutral-800/50 relative">
      <div className="max-w-7xl mx-auto px-6 space-y-14">
        {/* Header */}
        <div className="text-center space-y-4">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-[0.3em] text-gold/80">
            {t.galleryTag}
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-neutral-100">{t.galleryTitle}</h2>
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto opacity-60" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-neutral-800/20">
          {GALLERY_IMAGES.map((img, idx) => (
            <div
              key={idx}
              className="relative h-64 sm:h-72 overflow-hidden group cursor-pointer"
            >
              <Image
                src={img.url}
                alt={img.title}
                fill
                className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 50vw, 33vw"
                loading="lazy"
              />
              {/* Hover overlay — title only, no social handle */}
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-6">
                <h4 className="font-serif text-lg text-white font-bold translate-y-3 group-hover:translate-y-0 transition-transform duration-400">
                  {img.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
