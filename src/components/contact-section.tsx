'use client'

import { MapPin, Phone, Clock } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export default function ContactSection() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="py-28 bg-black relative border-t border-neutral-800/50">
      <div className="max-w-7xl mx-auto px-6 space-y-14">
        {/* Header */}
        <div className="text-center space-y-4">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-[0.3em] text-gold/80">
            {t.contactTag}
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-neutral-100">{t.contactTitle}</h2>
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto opacity-60" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Info Cards Column */}
          <div className="space-y-4">
            {/* Address */}
            <div className="p-6 border border-neutral-800 hover:border-neutral-700 transition-colors duration-300 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-px h-4 bg-gold/60" />
                <h4 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-400">
                  {t.addressTitle}
                </h4>
              </div>
              <p className="text-sm text-neutral-300 font-light leading-relaxed pl-4">
                {t.addressText}
              </p>
            </div>

            {/* Phone */}
            <div className="p-6 border border-neutral-800 hover:border-neutral-700 transition-colors duration-300 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-px h-4 bg-gold/60" />
                <h4 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-400">
                  {t.phoneTitle}
                </h4>
              </div>
              <p className="text-sm text-neutral-300 font-light pl-4 tracking-wide dir-ltr">
                {t.phoneText}
              </p>
            </div>

            {/* Opening Hours */}
            <div className="p-6 border border-neutral-800 hover:border-neutral-700 transition-colors duration-300 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-px h-4 bg-gold/60" />
                <h4 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-400">
                  {t.hoursTitle}
                </h4>
              </div>
              <p className="text-sm text-neutral-300 font-light pl-4 leading-relaxed">
                {t.hoursText}
              </p>
            </div>

            {/* Call to Reserve */}
            <a
              href={`tel:${t.phoneText.replace(/[\s()]/g, '')}`}
              className="w-full flex items-center justify-center gap-3 py-4 border border-gold/30 hover:border-gold hover:bg-gold/8 text-gold text-[10px] font-semibold uppercase tracking-[0.25em] transition-all duration-300 group"
            >
              <Phone className="w-3.5 h-3.5 transition-transform duration-300 group-hover:scale-110" />
              <span>{t.contactCallBtn}</span>
            </a>
          </div>

          {/* Embedded Google Map Column */}
          <div className="lg:col-span-2 relative h-[420px] overflow-hidden border border-neutral-800">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12788.163773187274!2d3.0315!3d36.7628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fb2435b6fef15%3A0x6b10705a610d4810!2sEl%20Biar%2C%20Algiers%2C%20Algeria!5e0!3m2!1sen!2sdz!4v1700000000000!5m2!1sen!2sdz"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
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
