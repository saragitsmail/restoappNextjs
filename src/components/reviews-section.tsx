'use client'

import { Star } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export default function ReviewsSection() {
  const { t } = useLanguage()

  const reviews = [
    {
      author: t.review1Author,
      text: t.review1Text,
      role: t.review1Role,
      rating: 5,
    },
    {
      author: t.review2Author,
      text: t.review2Text,
      role: t.review2Role,
      rating: 5,
    },
    {
      author: t.review3Author,
      text: t.review3Text,
      role: t.review3Role,
      rating: 5,
    },
  ]

  return (
    <section id="reviews" className="py-32 relative border-t border-[#E0C068]/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        {/* Header */}
        <div className="text-center space-y-4 max-w-xl mx-auto">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-[0.35em] text-[#E0C068]">
            {t.reviewsTag}
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#F7F4EF] tracking-wide">
            {t.reviewsTitle}
          </h2>
          <div className="w-16 gold-line mx-auto opacity-80" />
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="p-8 luxury-card space-y-6 flex flex-col justify-between"
            >
              {/* Stars & Text */}
              <div className="space-y-5">
                <div className="flex gap-1.5">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#E0C068] text-[#E0C068]" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-[#D8D0C5] font-light leading-relaxed italic">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="border-t border-[#E0C068]/20 pt-5 flex items-center gap-3.5">
                <div className="w-9 h-9 border border-[#E0C068]/40 text-[#E0C068] font-serif font-bold text-sm flex items-center justify-center shrink-0 bg-[#090806]/80">
                  {rev.author.charAt(0)}
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-white tracking-wide">{rev.author}</h4>
                  <p className="text-[10px] text-[#B8B0A6] font-light uppercase tracking-widest mt-0.5">
                    {rev.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
