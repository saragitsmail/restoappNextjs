'use client'

import { Phone } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export default function ContactSection() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="py-16 sm:py-24 md:py-32 relative border-t border-[#E0C068]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 space-y-10 sm:space-y-14 md:space-y-16">
        {/* Header */}
        <div className="text-center space-y-3 sm:space-y-4 max-w-xl mx-auto">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-[0.35em] text-[#E0C068]">
            {t.contactTag}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#F7F4EF] tracking-wide">
            {t.contactTitle}
          </h2>
          <div className="w-16 gold-line mx-auto opacity-80" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {/* Info Cards Column */}
          <div className="space-y-3 sm:space-y-4">
            {/* Address */}
            <div className="p-4 sm:p-6 luxury-card space-y-2 sm:space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-px h-4 bg-[#E0C068] shrink-0" />
                <h4 className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#E0C068]">
                  {t.addressTitle}
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-[#D8D0C5] font-light leading-relaxed pl-4">
                {t.addressText}
              </p>
            </div>

            {/* Phone */}
            <div className="p-4 sm:p-6 luxury-card space-y-2 sm:space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-px h-4 bg-[#E0C068] shrink-0" />
                <h4 className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#E0C068]">
                  {t.phoneTitle}
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-[#D8D0C5] font-light pl-4 tracking-wide">
                {t.phoneText}
              </p>
            </div>

            {/* Opening Hours */}
            <div className="p-4 sm:p-6 luxury-card space-y-2 sm:space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-px h-4 bg-[#E0C068] shrink-0" />
                <h4 className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#E0C068]">
                  {t.hoursTitle}
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-[#D8D0C5] font-light pl-4 leading-relaxed">
                {t.hoursText}
              </p>
            </div>

            {/* Call to Reserve Button */}
            <a
              href={`tel:${t.phoneText.replace(/[\s()]/g, '')}`}
              className="w-full flex items-center justify-center gap-3 py-4 btn-outline-gold text-[10px] font-semibold uppercase tracking-[0.25em] group min-h-[52px]"
            >
              <Phone className="w-4 h-4 transition-transform duration-300 group-hover:scale-110 shrink-0" />
              <span>{t.contactCallBtn}</span>
            </a>
          </div>

          {/* Embedded Google Map — responsive height */}
          <div className="lg:col-span-2 relative h-[250px] sm:h-[340px] md:h-[420px] overflow-hidden border border-[#E0C068]/30 shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12788.163773187274!2d3.0315!3d36.7628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fb2435b6fef15%3A0x6b10705a610d4810!2sEl%20Biar%2C%20Algiers%2C%20Algeria!5e0!3m2!1sen!2sdz!4v1700000000000!5m2!1sen!2sdz"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) opacity(0.85)' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Restaurant Location Map"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
