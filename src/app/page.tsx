'use client'

import { useEffect, useState } from 'react'
import AnimatedBackground from '@/components/ui/animated-background'
import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import CrowdFavorites from '@/components/crowd-favorites'
import MenuSkeleton from '@/components/menu-skeleton'
import ReviewsSection from '@/components/reviews-section'
import ContactSection from '@/components/contact-section'
import CartDrawer from '@/components/cart-drawer'
import CheckoutModal from '@/components/checkout-modal'
import ProductDetailsModal from '@/components/product-details-modal'
import StickyMobileOrder from '@/components/sticky-mobile-order'
import Footer from '@/components/footer'
import { fetchCrowdFavorites, MenuItemData } from '@/sanity/lib/client'

export default function Home() {
  const [dishes, setDishes] = useState<MenuItemData[]>([])
  const [selectedDish, setSelectedDish] = useState<MenuItemData | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    async function loadDishes() {
      setLoading(true)
      const data = await fetchCrowdFavorites()
      setDishes(data)
      setLoading(false)
    }
    loadDishes()
  }, [])

  return (
    <div className="relative min-h-screen bg-[#070707] text-neutral-100 selection:bg-[#D4AF37] selection:text-black">
      {/* Canvas Animated Ambient Background */}
      <AnimatedBackground />

      {/* Luxury Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10">
        {/* Full-Screen Cinematic Hero */}
        <Hero />

        {/* Menu Section with Sanity Data */}
        {loading ? (
          <MenuSkeleton />
        ) : (
          <CrowdFavorites
            items={dishes}
            onSelectDish={(dish) => setSelectedDish(dish)}
          />
        )}

        {/* Guest Reflections & Reviews */}
        <ReviewsSection />

        {/* Location & Opening Hours */}
        <ContactSection />
      </main>

      {/* Cart Drawer */}
      <CartDrawer />

      {/* Checkout Modal */}
      <CheckoutModal />

      {/* Dish Details Modal */}
      <ProductDetailsModal
        dish={selectedDish}
        onClose={() => setSelectedDish(null)}
      />

      {/* Mobile Sticky Order Floating Action */}
      <StickyMobileOrder />

      {/* Footer */}
      <Footer />
    </div>
  )
}
