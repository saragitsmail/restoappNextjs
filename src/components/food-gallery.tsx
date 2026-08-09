'use client'

import Image from 'next/image'
import { Camera } from 'lucide-react'
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
    <section className="py-20 bg-black/60 border-t border-gold/10 relative">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-semibold uppercase tracking-widest">
            <Camera className="w-3.5 h-3.5" />
            {t.galleryTag}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-neutral-100 font-bold">{t.galleryTitle}</h2>
          <div className="w-16 h-1 bg-gold rounded-full mx-auto" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {GALLERY_IMAGES.map((img, idx) => (
            <div
              key={idx}
              className="relative h-64 sm:h-72 rounded-2xl overflow-hidden border border-neutral-800 hover:border-gold/50 transition-all duration-300 group shadow-lg cursor-pointer"
            >
              <Image
                src={img.url}
                alt={img.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <h4 className="font-serif text-lg text-gold font-bold">{img.title}</h4>
                  <p className="text-xs text-neutral-300">@lumiere_restaurant</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
