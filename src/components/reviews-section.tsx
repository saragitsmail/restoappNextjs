'use client'

import { Star, MessageSquareQuote } from 'lucide-react'
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
    <section id="reviews" className="py-24 bg-neutral-950 relative border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-semibold uppercase tracking-widest">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            {t.reviewsTag}
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-neutral-100">{t.reviewsTitle}</h2>
          <div className="w-16 h-1 bg-gold rounded-full mx-auto" />
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-[#121212] border border-neutral-800 hover:border-gold/30 transition-all shadow-xl space-y-6 flex flex-col justify-between"
            >
              {/* Rating Stars */}
              <div className="space-y-3">
                <div className="flex gap-1 text-gold">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-sm text-neutral-300 font-light leading-relaxed italic">
                  "{rev.text}"
                </p>
              </div>

              {/* Author Details */}
              <div className="pt-4 border-t border-neutral-800/80 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/40 text-gold font-bold text-sm flex items-center justify-center">
                  {rev.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-neutral-100">{rev.author}</h4>
                  <p className="text-xs text-gold/80 font-light">{rev.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
