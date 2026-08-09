'use client'

import { MapPin, Phone, Clock, Send } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

interface ContactSectionProps {
  preselectedDish?: any
  onClearPreselectedDish?: () => void
}

export default function ContactSection({ preselectedDish, onClearPreselectedDish }: ContactSectionProps) {
  const { t } = useLanguage()

  return (
    <section id="contact" className="py-24 bg-black relative border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-semibold uppercase tracking-widest">
            <MapPin className="w-3.5 h-3.5" />
            {t.contactTag}
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-neutral-100">{t.contactTitle}</h2>
          <div className="w-16 h-1 bg-gold rounded-full mx-auto" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Info Cards Column */}
          <div className="space-y-6">
            {/* Address */}
            <div className="p-6 rounded-2xl bg-[#121212] border border-neutral-800 space-y-3 hover:border-gold/30 transition-colors">
              <div className="flex items-center gap-3 text-gold">
                <div className="p-2.5 bg-gold/10 rounded-xl border border-gold/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <h4 className="font-semibold text-sm uppercase tracking-wider text-neutral-100">
                  {t.addressTitle}
                </h4>
              </div>
              <p className="text-xs text-neutral-300 font-light leading-relaxed">{t.addressText}</p>
            </div>

            {/* Phone */}
            <div className="p-6 rounded-2xl bg-[#121212] border border-neutral-800 space-y-3 hover:border-gold/30 transition-colors">
              <div className="flex items-center gap-3 text-gold">
                <div className="p-2.5 bg-gold/10 rounded-xl border border-gold/20">
                  <Phone className="w-5 h-5" />
                </div>
                <h4 className="font-semibold text-sm uppercase tracking-wider text-neutral-100 font-serif">
                  {t.phoneTitle}
                </h4>
              </div>
              <p className="text-xs text-neutral-300 font-light dir-ltr">{t.phoneText}</p>
            </div>

            {/* Opening Hours */}
            <div className="p-6 rounded-2xl bg-[#121212] border border-neutral-800 space-y-3 hover:border-gold/30 transition-colors">
              <div className="flex items-center gap-3 text-gold">
                <div className="p-2.5 bg-gold/10 rounded-xl border border-gold/20">
                  <Clock className="w-5 h-5" />
                </div>
                <h4 className="font-semibold text-sm uppercase tracking-wider text-neutral-100">
                  {t.hoursTitle}
                </h4>
              </div>
              <p className="text-xs text-neutral-300 font-light leading-relaxed">{t.hoursText}</p>
            </div>

            {/* Direct WhatsApp Contact Button */}
            <a
              href="https://wa.me/213550998877?text=Bonjour%20Lumi%C3%A8re%20Restaurant%20!"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full btn-gold py-4 text-xs font-bold uppercase tracking-wider rounded-2xl flex items-center justify-center gap-2 shadow-xl cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>{t.whatsappContactBtn}</span>
            </a>
          </div>

          {/* Embedded Google Map Column */}
          <div className="lg:col-span-2 relative h-[420px] rounded-2xl overflow-hidden border border-gold/20 shadow-2xl">
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
