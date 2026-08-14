'use client'

import React, { useState } from 'react'
import { X, Loader2 } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { useLanguage } from '@/context/LanguageContext'

export default function CheckoutModal() {
  const { cart, subtotal, isCheckoutOpen, setIsCheckoutOpen, clearCart } = useCart()
  const { t } = useLanguage()

  const [customerName, setCustomerName] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [notes, setNotes] = useState('')
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [successOrder, setSuccessOrder] = useState<{ orderId: string; total: number } | null>(null)

  if (!isCheckoutOpen) return null

  const formatPrice = (price: number) => {
    return `${price.toLocaleString('fr-FR')} ${t.priceCurrency}`
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!customerName.trim() || !phone.trim()) {
      setErrorMsg('Please enter your name and phone number.')
      return
    }

    setErrorMsg('')
    setLoading(true)

    try {
      const orderPayload = {
        customerName: customerName.trim(),
        phone: phone.trim(),
        address: address.trim(),
        notes: notes.trim(),
        items: cart.map((ci) => ({
          name: ci.dish.name,
          price: ci.dish.price,
          quantity: ci.quantity,
        })),
        total: subtotal,
      }

      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderPayload),
      })

      const data = await res.json()

      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to submit order.')
      }

      setSuccessOrder({
        orderId: data.orderId,
        total: subtotal,
      })
      clearCart()
    } catch (err: any) {
      console.error('Order submission error:', err)
      setErrorMsg(err?.message || 'Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleClose = () => {
    setIsCheckoutOpen(false)
    setSuccessOrder(null)
    setCustomerName('')
    setPhone('')
    setAddress('')
    setNotes('')
    setErrorMsg('')
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      {/* Backdrop */}
      <div onClick={handleClose} className="fixed inset-0 bg-black/92 backdrop-blur-lg" />

      {/* Modal Container */}
      <div className="relative w-full max-w-lg bg-[#0e0c0a] border border-[#E0C068]/30 shadow-2xl overflow-hidden z-10 text-[#F7F4EF] animate-fadeInScale">
        {/* Header */}
        <div className="px-8 py-6 border-b border-[#E0C068]/20 bg-[#080705] flex justify-between items-center">
          <div>
            <h3 className="font-serif text-2xl text-white font-bold tracking-wide">{t.checkoutTitle}</h3>
            <p className="text-[11px] text-[#B8B0A6] font-light mt-1 tracking-wide">{t.checkoutSubtitle}</p>
          </div>
          <button
            onClick={handleClose}
            className="p-2 text-[#B8B0A6] hover:text-white border border-[#E0C068]/30 hover:border-[#E0C068] transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content Body */}
        <div className="px-8 py-7">
          {successOrder ? (
            /* ── Luxury Order Received Screen ── */
            <div className="py-8 text-center space-y-8 animate-fadeIn">
              {/* Gold Divider Line */}
              <div className="flex items-center justify-center gap-4">
                <div className="flex-1 h-px bg-[#E0C068]/20 max-w-[80px]" />
                <div className="w-12 h-px bg-[#E0C068]" />
                <div className="flex-1 h-px bg-[#E0C068]/20 max-w-[80px]" />
              </div>

              <div className="space-y-3">
                <span className="text-[10px] uppercase tracking-[0.35em] text-[#E0C068] font-semibold">
                  Confirmation
                </span>
                <h4 className="font-serif text-3xl text-white font-bold tracking-tight">
                  {t.orderReceivedTitle}
                </h4>
                <p className="text-xs text-[#B8B0A6] max-w-sm mx-auto font-light leading-relaxed">
                  {t.orderReceivedDesc}
                </p>
              </div>

              {/* Order Reference Card */}
              <div className="border border-[#E0C068]/30 bg-[#080705]/80 p-6 text-xs space-y-3 max-w-sm mx-auto shadow-xl">
                <div className="flex justify-between items-center text-[#B8B0A6] uppercase tracking-widest text-[10px]">
                  <span>{t.orderIdLabel}</span>
                  <span className="font-mono text-[#E0C068] font-bold text-sm tracking-normal">
                    #{successOrder.orderId.slice(-8).toUpperCase()}
                  </span>
                </div>
                <div className="h-px bg-[#E0C068]/20" />
                <div className="flex justify-between items-center text-[#F7F4EF]">
                  <span className="uppercase tracking-widest text-[10px] text-[#B8B0A6]">{t.cartTotal}</span>
                  <span className="font-bold text-white text-sm">{formatPrice(successOrder.total)}</span>
                </div>
              </div>

              <button
                onClick={handleClose}
                className="inline-block px-10 py-3.5 btn-outline-gold text-[10px] font-semibold uppercase tracking-[0.25em]"
              >
                {t.closeBtn}
              </button>
            </div>
          ) : (
            /* ── Checkout Form ── */
            <form onSubmit={handleSubmit} className="space-y-5">
              {errorMsg && (
                <div className="p-3 border border-red-900/50 bg-red-950/20 text-red-400 text-xs tracking-wide">
                  {errorMsg}
                </div>
              )}

              <div className="space-y-4">
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label className="block text-[10px] font-semibold text-[#B8B0A6] uppercase tracking-[0.2em]">
                    {t.fullNameLabel} *
                  </label>
                  <input
                    type="text"
                    required
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder={t.fullNamePlaceholder}
                    className="w-full px-4 py-3 bg-[#080705]/70 border border-[#E0C068]/25 focus:border-[#E0C068] text-xs text-white placeholder:text-[#6e6860] focus:outline-none transition-colors duration-300"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <label className="block text-[10px] font-semibold text-[#B8B0A6] uppercase tracking-[0.2em]">
                    {t.phoneLabel} *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={t.phonePlaceholder}
                    className="w-full px-4 py-3 bg-[#080705]/70 border border-[#E0C068]/25 focus:border-[#E0C068] text-xs text-white placeholder:text-[#6e6860] focus:outline-none transition-colors duration-300"
                  />
                </div>

                {/* Delivery Address */}
                <div className="space-y-1.5">
                  <label className="block text-[10px] font-semibold text-[#B8B0A6] uppercase tracking-[0.2em]">
                    {t.addressLabel}
                  </label>
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder={t.addressPlaceholder}
                    className="w-full px-4 py-3 bg-[#080705]/70 border border-[#E0C068]/25 focus:border-[#E0C068] text-xs text-white placeholder:text-[#6e6860] focus:outline-none transition-colors duration-300"
                  />
                </div>

                {/* Special Notes */}
                <div className="space-y-1.5">
                  <label className="block text-[10px] font-semibold text-[#B8B0A6] uppercase tracking-[0.2em]">
                    {t.notesLabel}
                  </label>
                  <textarea
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder={t.notesPlaceholder}
                    className="w-full px-4 py-3 bg-[#080705]/70 border border-[#E0C068]/25 focus:border-[#E0C068] text-xs text-white placeholder:text-[#6e6860] focus:outline-none transition-colors duration-300 resize-none"
                  />
                </div>
              </div>

              {/* Order Summary Box */}
              <div className="border border-[#E0C068]/25 bg-[#080705]/50 p-4 space-y-3">
                <h5 className="text-[10px] font-semibold text-[#B8B0A6] uppercase tracking-[0.2em]">
                  {t.orderSummaryTitle}
                </h5>
                <div className="max-h-28 overflow-y-auto space-y-2 pr-1">
                  {cart.map((ci) => (
                    <div key={ci.dish._id} className="flex justify-between text-xs text-[#D8D0C5]">
                      <span className="truncate max-w-[220px]">
                        {ci.quantity} × {ci.dish.name}
                      </span>
                      <span className="font-semibold text-white shrink-0 ml-2">
                        {formatPrice(ci.dish.price * ci.quantity)}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-[#E0C068]/20 pt-3 flex justify-between text-sm">
                  <span className="text-[10px] uppercase tracking-widest text-[#B8B0A6]">{t.cartTotal}</span>
                  <span className="font-bold text-[#E0C068]">{formatPrice(subtotal)}</span>
                </div>
              </div>

              {/* Submit Order Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full btn-gold py-4 text-[10px] font-bold uppercase tracking-[0.25em] flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>{t.processingOrder}</span>
                  </>
                ) : (
                  <span>{t.confirmOrderBtn}</span>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
