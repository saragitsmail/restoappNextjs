'use client'

import { useState } from 'react'
import { MapPin, Clock, Phone, Mail, Calendar, Users, CheckCircle, MessageSquare } from 'lucide-react'

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    guests: '2',
    notes: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', phone: '', date: '', guests: '2', notes: '' })
    }, 4000)
  }

  return (
    <section id="contact" className="relative z-10 py-24 px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16 space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
          <Calendar className="w-4 h-4 text-gold" />
          <span>Reservations & Inquiries</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl text-[#F5F5F5] font-bold">
          Contact Us & Table Reservation
        </h2>
        <p className="text-[#A0A0A0] text-sm max-w-xl mx-auto font-light">
          We invite you to experience gastronomy at its highest level. Please reserve your table in advance.
        </p>
        <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-4" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Contact Info Cards (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="glass-panel p-8 rounded-xs space-y-6 border border-gold/20">
            <h3 className="font-serif text-2xl font-bold text-gold">
              LUMIÈRE
            </h3>
            <p className="text-xs text-[#A0A0A0] font-light leading-relaxed">
              In the vibrant heart of Algiers, Lumière delivers a luxurious dining experience, combining modern elegance with a refined black and gold setting.
            </p>

            <div className="space-y-4 pt-4 border-t border-gold/10 text-sm">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#F5F5F5]">Location</h4>
                  <p className="text-xs text-[#A0A0A0] font-light mt-0.5"> 140 Didouche Mourad Street, Algiers, Algeria</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#F5F5F5]">Dinner Service</h4>
                  <p className="text-xs text-[#A0A0A0] font-light mt-0.5">Daily service: Lunch 12:00 PM – 3:00 PM | Dinner 7:00 PM – 11:30 PM</p>
                  <p className="text-[11px] text-gold/80 italic mt-0.5">Private Dining Available Upon Request</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#F5F5F5]">Direct Telephone</h4>
                  <p className="text-xs text-[#A0A0A0] font-light mt-0.5">+213 55 42 68 55 00</p>


                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#F5F5F5]">Email </h4>
                  <p className="text-xs text-[#A0A0A0] font-light mt-0.5">lumiere@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reservation Form (7 Cols) */}
        <div className="lg:col-span-7">
          <div className="glass-panel p-8 sm:p-10 rounded-xs border border-gold/30 relative">
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-fadeIn">
                <CheckCircle className="w-14 h-14 text-gold mx-auto animate-bounce" />
                <h3 className="font-serif text-2xl font-bold text-[#F5F5F5]">
                  Reservation Request Received
                </h3>
                <p className="text-xs text-[#A0A0A0] max-w-md mx-auto">
                  Thank you, <span className="text-gold font-semibold">{formData.name}</span>. Our concierge team will review your request and confirm your reservation via email shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="font-serif text-2xl font-bold text-[#F5F5F5]">
                  Book Your Experience
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="text-[11px] uppercase tracking-widest text-[#A0A0A0] font-semibold">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Lord / Lady Sterling"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#0A0A0A]/60 border border-gold/20 focus:border-gold px-4 py-3 text-xs text-[#F5F5F5] rounded-xs outline-none transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-[11px] uppercase tracking-widest text-[#A0A0A0] font-semibold">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="client@luxury.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#0A0A0A]/60 border border-gold/20 focus:border-gold px-4 py-3 text-xs text-[#F5F5F5] rounded-xs outline-none transition-colors"
                    />
                  </div>

                  {/* Date & Time */}
                  <div className="space-y-2">
                    <label className="text-[11px] uppercase tracking-widest text-[#A0A0A0] font-semibold flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-gold" />
                      <span>Preferred Date & Time *</span>
                    </label>
                    <input
                      type="datetime-local"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-[#0A0A0A]/60 border border-gold/20 focus:border-gold px-4 py-3 text-xs text-[#F5F5F5] rounded-xs outline-none transition-colors"
                    />
                  </div>

                  {/* Guests */}
                  <div className="space-y-2">
                    <label className="text-[11px] uppercase tracking-widest text-[#A0A0A0] font-semibold flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-gold" />
                      <span>Number of Guests *</span>
                    </label>
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full bg-[#0A0A0A]/80 border border-gold/20 focus:border-gold px-4 py-3 text-xs text-[#F5F5F5] rounded-xs outline-none transition-colors"
                    >
                      <option value="1">1 Guest (Single Diner)</option>
                      <option value="2">2 Guests (Intimate)</option>
                      <option value="4">4 Guests (Party)</option>
                      <option value="6">6+ Guests (Private Tasting)</option>
                    </select>
                  </div>
                </div>

                {/* Special Requests */}
                <div className="space-y-2">
                  <label className="text-[11px] uppercase tracking-widest text-[#A0A0A0] font-semibold flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5 text-gold" />
                    <span>Special Dietary or Seating Notes</span>
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Allergies, anniversary celebration, sommelier preference..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-[#0A0A0A]/60 border border-gold/20 focus:border-gold px-4 py-3 text-xs text-[#F5F5F5] rounded-xs outline-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-gold w-full py-4 text-xs font-bold uppercase tracking-[0.2em] rounded-xs cursor-pointer"
                >
                  Confirm Reservation Request
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
