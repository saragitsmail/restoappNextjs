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
    <section id="reviews" className="py-28 relative border-t border-neutral-800/50">
      <div className="max-w-7xl mx-auto px-6 space-y-14">
        {/* Header */}
        <div className="text-center space-y-4">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-[0.3em] text-gold/80">
            {t.reviewsTag}
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-neutral-100">{t.reviewsTitle}</h2>
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto opacity-60" />
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-800/20">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="p-8 bg-[#0a0a0a] hover:bg-[#0e0e0e] transition-colors duration-300 space-y-6 flex flex-col justify-between"
            >
              {/* Stars */}
              <div className="space-y-4">
                <div className="flex gap-1">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-sm text-neutral-300 font-light leading-relaxed italic">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              {/* Author */}
              <div className="border-t border-neutral-800/60 pt-5 flex items-center gap-3">
                <div className="w-8 h-8 border border-gold/30 text-gold font-serif font-bold text-sm flex items-center justify-center shrink-0">
                  {rev.author.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-neutral-200">{rev.author}</h4>
                  <p className="text-[10px] text-neutral-600 font-light uppercase tracking-wider mt-0.5">{rev.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
