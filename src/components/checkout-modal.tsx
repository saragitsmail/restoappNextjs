'use client'

import React, { useState } from 'react'
import { X, CheckCircle2, ShoppingBag, Loader2, Send } from 'lucide-react'
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
      setErrorMsg('Please fill in your name and phone number.')
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

  const generateWhatsAppMessage = () => {
    if (!successOrder) return '#'
    const itemsText = cart
      .map((ci) => `• ${ci.quantity}x ${ci.dish.name} (${ci.dish.price * ci.quantity} DA)`)
      .join('%0A')

    const message = `Bonjour Lumière Restaurant !%0A%0A*Nouvelle Commande #${successOrder.orderId}*%0A*Nom:* ${encodeURIComponent(customerName)}%0A*Téléphone:* ${encodeURIComponent(phone)}%0A*Adresse:* ${encodeURIComponent(address || 'Emporter')}%0A%0A*Plats Commandés:*%0A${itemsText}%0A%0A*Total:* ${successOrder.total} DA`
    
    return `https://wa.me/213550998877?text=${message}`
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      {/* Backdrop */}
      <div onClick={handleClose} className="fixed inset-0 bg-black/80 backdrop-blur-sm" />

      {/* Modal Container */}
      <div className="relative w-full max-w-xl bg-[#121212] border border-gold/30 rounded-2xl shadow-2xl overflow-hidden z-10 text-[#F5F5F5]">
        {/* Header */}
        <div className="px-6 py-5 border-b border-gold/20 flex justify-between items-center bg-black/40">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gold/10 rounded-full border border-gold/30 text-gold">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-lg text-gold font-bold">{t.checkoutTitle}</h3>
              <p className="text-xs text-neutral-400 font-light">{t.checkoutSubtitle}</p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="p-1.5 text-neutral-400 hover:text-white rounded-full hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6">
          {successOrder ? (
            /* Order Success View */
            <div className="py-8 text-center space-y-6">
              <div className="inline-flex p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400 animate-bounce">
                <CheckCircle2 className="w-12 h-12" />
              </div>
              <div className="space-y-2">
                <h4 className="font-serif text-2xl text-gold font-bold">{t.orderSuccessTitle}</h4>
                <p className="text-sm text-neutral-300 max-w-md mx-auto">{t.orderSuccessDesc}</p>
              </div>

              <div className="p-4 bg-neutral-900/90 rounded-xl border border-neutral-800 text-xs space-y-2 max-w-sm mx-auto">
                <div className="flex justify-between text-neutral-400">
                  <span>{t.orderIdLabel}</span>
                  <span className="font-mono text-gold font-bold">{successOrder.orderId}</span>
                </div>
                <div className="flex justify-between text-neutral-400">
                  <span>{t.cartTotal}:</span>
                  <span className="font-bold text-neutral-100">{successOrder.total} {t.priceCurrency}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                <a
                  href={generateWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold px-6 py-3 text-xs font-bold uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{t.whatsappBtn}</span>
                </a>
                <button
                  onClick={handleClose}
                  className="px-6 py-3 border border-neutral-700 hover:border-neutral-500 text-neutral-300 text-xs font-semibold rounded-xl transition-colors cursor-pointer"
                >
                  {t.closeBtn}
                </button>
              </div>
            </div>
          ) : (
            /* Checkout Form */
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMsg && (
                <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-xs">
                  {errorMsg}
                </div>
              )}

              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1">
                    {t.fullNameLabel} *
                  </label>
                  <input
                    type="text"
                    required
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder={t.fullNamePlaceholder}
                    className="w-full px-4 py-2.5 bg-neutral-900 border border-neutral-800 focus:border-gold rounded-xl text-sm text-neutral-100 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1">
                    {t.phoneLabel} *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={t.phonePlaceholder}
                    className="w-full px-4 py-2.5 bg-neutral-900 border border-neutral-800 focus:border-gold rounded-xl text-sm text-neutral-100 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1">
                    {t.addressLabel}
                  </label>
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder={t.addressPlaceholder}
                    className="w-full px-4 py-2.5 bg-neutral-900 border border-neutral-800 focus:border-gold rounded-xl text-sm text-neutral-100 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1">
                    {t.notesLabel}
                  </label>
                  <textarea
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder={t.notesPlaceholder}
                    className="w-full px-4 py-2.5 bg-neutral-900 border border-neutral-800 focus:border-gold rounded-xl text-sm text-neutral-100 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Order Breakdown Brief */}
              <div className="p-4 bg-neutral-900/60 rounded-xl border border-neutral-800 space-y-2 text-xs">
                <h5 className="font-semibold text-gold uppercase tracking-wider">{t.orderSummaryTitle}</h5>
                <div className="max-h-28 overflow-y-auto space-y-1 pr-1">
                  {cart.map((ci) => (
                    <div key={ci.dish._id} className="flex justify-between text-neutral-300">
                      <span className="truncate max-w-[200px]">
                        {ci.quantity}x {ci.dish.name}
                      </span>
                      <span className="font-medium text-neutral-100">
                        {ci.dish.price * ci.quantity} {t.priceCurrency}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-neutral-800 pt-2 flex justify-between font-bold text-sm text-gold">
                  <span>{t.cartTotal}:</span>
                  <span>
                    {subtotal} {t.priceCurrency}
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-gold py-3.5 text-xs font-bold uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-lg disabled:opacity-50"
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
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
