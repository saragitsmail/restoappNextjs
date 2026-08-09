'use client'

import { useEffect, useState } from 'react'
import AnimatedBackground from '@/components/ui/animated-background'
import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import CrowdFavorites from '@/components/crowd-favorites'
import MenuSkeleton from '@/components/menu-skeleton'
import AboutSection from '@/components/about-section'
import FoodGallery from '@/components/food-gallery'
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
    <div className="relative min-h-screen bg-neutral-950 text-neutral-100 selection:bg-amber-400 selection:text-black">
      {/* Canvas / WebGL Animated Background */}
      <AnimatedBackground />

      {/* Navbar with i18n & Theme Toggles */}
      <Navbar />

      {/* Main Page Layout */}
      <main className="relative z-10">
        {/* Hero Section */}
        <Hero />

        {/* Sanity CMS Menu Cards Grid */}
        {loading ? (
          <MenuSkeleton />
        ) : (
          <CrowdFavorites
            items={dishes}
            onSelectDish={(dish) => setSelectedDish(dish)}
          />
        )}

        {/* Restaurant Story & Culinary Heritage */}
        <AboutSection />

        {/* Instagram Food Gallery */}
        <FoodGallery />

        {/* Customer Reviews & Star Ratings */}
        <ReviewsSection />

        {/* Location, Info, Map & WhatsApp */}
        <ContactSection />
      </main>

      {/* Slide-out Cart Drawer */}
      <CartDrawer />

      {/* Checkout Modal & Sanity Submission */}
      <CheckoutModal />

      {/* Product Details Modal */}
      <ProductDetailsModal
        dish={selectedDish}
        onClose={() => setSelectedDish(null)}
      />

      {/* Mobile Sticky Floating Cart Action */}
      <StickyMobileOrder />

      {/* Footer */}
      <Footer />
    </div>
  )
}
