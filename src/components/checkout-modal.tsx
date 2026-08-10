'use client'

import React, { useState } from 'react'
import { X, Loader2 } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { useLanguage } from '@/context/LanguageContext'

export default function CheckoutModal() {
  const { cart, subtotal, isCheckoutOpen, setIsCheckoutOpen, clearCart } = useCart()
  const { t, isRTL } = useLanguage()

  const [customerName, setCustomerName] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [notes, setNotes] = useState('')
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [successOrder, setSuccessOrder] = useState<{ orderId: string; total: number } | null>(null)

  if (!isCheckoutOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!customerName.trim() || !phone.trim()) {
      setErrorMsg(isRTL ? 'الرجاء إدخال الاسم ورقم الهاتف.' : 'Please enter your name and phone number.')
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
      <div onClick={handleClose} className="fixed inset-0 bg-black/85 backdrop-blur-sm" />

      {/* Modal Container */}
      <div className="relative w-full max-w-lg bg-[#0e0e0e] border border-neutral-800 shadow-2xl overflow-hidden z-10 text-[#F5F5F5]">
        {/* Header */}
        <div className="px-8 py-6 border-b border-neutral-800/80 flex justify-between items-center">
          <div>
            <h3 className="font-serif text-xl text-neutral-100 font-bold">{t.checkoutTitle}</h3>
            <p className="text-[11px] text-neutral-500 font-light mt-0.5 tracking-wide">{t.checkoutSubtitle}</p>
          </div>
          <button
            onClick={handleClose}
            className="p-1.5 text-neutral-600 hover:text-neutral-200 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="px-8 py-6">
          {successOrder ? (
            /* ── Order Success View ── */
            <div className="py-10 text-center space-y-8 animate-fadeInScale">
              {/* Success line indicator */}
              <div className="flex items-center justify-center gap-4">
                <div className="flex-1 h-px bg-neutral-800 max-w-[80px]" />
                <div className="w-12 h-px bg-gold" />
                <div className="flex-1 h-px bg-neutral-800 max-w-[80px]" />
              </div>

              <div className="space-y-3">
                <h4 className="font-serif text-3xl text-neutral-100 font-bold tracking-tight">
                  {t.orderReceivedTitle}
                </h4>
                <p className="text-sm text-neutral-400 max-w-sm mx-auto font-light leading-relaxed">
                  {t.orderReceivedDesc}
                </p>
              </div>

              <div className="border border-neutral-800 p-5 text-xs space-y-3 max-w-xs mx-auto">
                <div className="flex justify-between text-neutral-500 uppercase tracking-widest text-[10px]">
                  <span>{t.orderIdLabel}</span>
                  <span className="font-mono text-gold tracking-normal">{successOrder.orderId.slice(-8).toUpperCase()}</span>
                </div>
                <div className="h-px bg-neutral-800" />
                <div className="flex justify-between text-neutral-400">
                  <span className="uppercase tracking-widest text-[10px]">{t.cartTotal}</span>
                  <span className="font-semibold text-neutral-100">{successOrder.total} {t.priceCurrency}</span>
                </div>
              </div>

              <button
                onClick={handleClose}
                className="inline-block px-8 py-3 border border-neutral-700 hover:border-neutral-500 text-neutral-300 hover:text-neutral-100 text-[10px] font-semibold uppercase tracking-[0.25em] transition-all duration-300 cursor-pointer"
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
                {/* Name */}
                <div className="space-y-1.5">
                  <label className="block text-[10px] font-semibold text-neutral-500 uppercase tracking-[0.2em]">
                    {t.fullNameLabel} *
                  </label>
                  <input
                    type="text"
                    required
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder={t.fullNamePlaceholder}
                    className="w-full px-4 py-3 bg-neutral-900/60 border border-neutral-800 focus:border-gold/60 text-sm text-neutral-100 placeholder:text-neutral-700 focus:outline-none transition-colors duration-300"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <label className="block text-[10px] font-semibold text-neutral-500 uppercase tracking-[0.2em]">
                    {t.phoneLabel} *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={t.phonePlaceholder}
                    className="w-full px-4 py-3 bg-neutral-900/60 border border-neutral-800 focus:border-gold/60 text-sm text-neutral-100 placeholder:text-neutral-700 focus:outline-none transition-colors duration-300"
                  />
                </div>

                {/* Address */}
                <div className="space-y-1.5">
                  <label className="block text-[10px] font-semibold text-neutral-500 uppercase tracking-[0.2em]">
                    {t.addressLabel}
                  </label>
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder={t.addressPlaceholder}
                    className="w-full px-4 py-3 bg-neutral-900/60 border border-neutral-800 focus:border-gold/60 text-sm text-neutral-100 placeholder:text-neutral-700 focus:outline-none transition-colors duration-300"
                  />
                </div>

                {/* Notes */}
                <div className="space-y-1.5">
                  <label className="block text-[10px] font-semibold text-neutral-500 uppercase tracking-[0.2em]">
                    {t.notesLabel}
                  </label>
                  <textarea
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder={t.notesPlaceholder}
                    className="w-full px-4 py-3 bg-neutral-900/60 border border-neutral-800 focus:border-gold/60 text-sm text-neutral-100 placeholder:text-neutral-700 focus:outline-none transition-colors duration-300 resize-none"
                  />
                </div>
              </div>

              {/* Order Summary */}
              <div className="border border-neutral-800 p-4 space-y-3">
                <h5 className="text-[10px] font-semibold text-neutral-500 uppercase tracking-[0.2em]">
                  {t.orderSummaryTitle}
                </h5>
                <div className="max-h-28 overflow-y-auto space-y-1.5 pr-1">
                  {cart.map((ci) => (
                    <div key={ci.dish._id} className="flex justify-between text-xs text-neutral-400">
                      <span className="truncate max-w-[200px]">
                        {ci.quantity} × {ci.dish.name}
                      </span>
                      <span className="font-medium text-neutral-300 shrink-0 ml-2">
                        {ci.dish.price * ci.quantity} {t.priceCurrency}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-neutral-800 pt-2.5 flex justify-between text-sm">
                  <span className="text-[10px] uppercase tracking-widest text-neutral-500">{t.cartTotal}</span>
                  <span className="font-bold text-gold">{subtotal} {t.priceCurrency}</span>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full btn-gold py-4 text-[10px] font-bold uppercase tracking-[0.25em] flex items-center justify-center gap-2 cursor-pointer shadow-lg disabled:opacity-50 disabled:cursor-not-allowed rounded-none"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
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
