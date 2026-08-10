'use client'

import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'

export default function AboutSection() {
  const { t } = useLanguage()

  return (
    <section id="about" className="relative py-28 border-t border-neutral-800/50 overflow-hidden">
      {/* Subtle ambient glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-gold/3 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column: Visual */}
          <div className="relative">
            <div className="relative h-[460px] sm:h-[520px] overflow-hidden border border-neutral-800 group">
              <Image
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000&auto=format&fit=crop"
                alt="Chef preparing a dish"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Floating credential block — clean, text-only */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                <div className="border-l-2 border-gold pl-4">
                  <span className="block text-[10px] uppercase tracking-[0.25em] text-gold/70 font-semibold mb-1">
                    {t.aboutHeadingTag}
                  </span>
                  <span className="block font-serif text-lg text-white font-bold">
                    LUMIÈRE
                  </span>
                </div>
              </div>
            </div>

            {/* Decorative corner line */}
            <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b border-r border-gold/30 pointer-events-none" />
          </div>

          {/* Right Column: Story */}
          <div className="space-y-10">
            <div className="space-y-5">
              <span className="inline-block text-[10px] font-semibold uppercase tracking-[0.3em] text-gold/80">
                {t.aboutHeadingTag}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-neutral-100 font-bold leading-tight">
                {t.aboutHeadingTitle}
              </h2>
              <div className="w-10 h-px bg-gold opacity-60" />
            </div>

            <div className="space-y-5 text-neutral-400 text-sm sm:text-base leading-relaxed font-light">
              <p>{t.aboutParagraph1}</p>
              <p>{t.aboutParagraph2}</p>
            </div>

            {/* Feature List — text-driven, no icons */}
            <div className="space-y-4 pt-2">
              {[
                { title: t.aboutFeature1Title, desc: t.aboutFeature1Desc },
                { title: t.aboutFeature2Title, desc: t.aboutFeature2Desc },
                { title: t.aboutFeature3Title, desc: t.aboutFeature3Desc },
              ].map((feature, i) => (
                <div key={i} className="flex gap-5 group">
                  <div className="shrink-0 mt-1">
                    <div className="w-px h-8 bg-gold/40 group-hover:bg-gold/70 transition-colors duration-300" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold text-neutral-200">{feature.title}</h4>
                    <p className="text-xs text-neutral-500 font-light leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
