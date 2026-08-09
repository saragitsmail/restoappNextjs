'use client'

import Image from 'next/image'
import { Sparkles, Utensils, ShieldCheck, Clock } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export default function AboutSection() {
  const { t } = useLanguage()

  return (
    <section id="about" className="relative py-24 bg-neutral-950/80 border-t border-gold/10 overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Showcase */}
          <div className="relative">
            <div className="relative h-[420px] sm:h-[500px] rounded-3xl overflow-hidden border border-gold/20 shadow-2xl group">
              <Image
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000&auto=format&fit=crop"
                alt="Chef preparing dish"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Floating Badge Card */}
              <div className="absolute bottom-6 left-6 right-6 p-6 glass-panel border border-gold/30 rounded-2xl flex items-center gap-4 shadow-xl">
                <div className="p-3.5 bg-gold/20 border border-gold/40 rounded-xl text-gold shrink-0">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-gold font-bold">LUMIÈRE Signature</h4>
                  <p className="text-xs text-neutral-300">Haute Gastronomie & Modern Delivery</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Story & Features */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-semibold uppercase tracking-widest">
                {t.aboutHeadingTag}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-neutral-100 font-bold leading-tight">
                {t.aboutHeadingTitle}
              </h2>
              <div className="w-20 h-1 bg-gold rounded-full" />
            </div>

            <div className="space-y-4 text-neutral-300 text-sm sm:text-base leading-relaxed font-light">
              <p>{t.aboutParagraph1}</p>
              <p>{t.aboutParagraph2}</p>
            </div>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-2 hover:border-gold/30 transition-colors">
                <div className="p-2 bg-gold/10 text-gold rounded-lg w-fit">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="font-semibold text-sm text-neutral-100">{t.aboutFeature1Title}</h4>
                <p className="text-xs text-neutral-400 leading-normal">{t.aboutFeature1Desc}</p>
              </div>

              <div className="p-4 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-2 hover:border-gold/30 transition-colors">
                <div className="p-2 bg-gold/10 text-gold rounded-lg w-fit">
                  <Utensils className="w-5 h-5" />
                </div>
                <h4 className="font-semibold text-sm text-neutral-100">{t.aboutFeature2Title}</h4>
                <p className="text-xs text-neutral-400 leading-normal">{t.aboutFeature2Desc}</p>
              </div>

              <div className="p-4 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-2 hover:border-gold/30 transition-colors">
                <div className="p-2 bg-gold/10 text-gold rounded-lg w-fit">
                  <Clock className="w-5 h-5" />
                </div>
                <h4 className="font-semibold text-sm text-neutral-100">{t.aboutFeature3Title}</h4>
                <p className="text-xs text-neutral-400 leading-normal">{t.aboutFeature3Desc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
