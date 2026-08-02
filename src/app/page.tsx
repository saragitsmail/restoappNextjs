'use client'

import { useEffect, useState } from 'react'
import AnimatedBackground from '@/components/ui/animated-background'
import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import CrowdFavorites from '@/components/crowd-favorites'
import ProductDetailsModal from '@/components/product-details-modal'
import ContactSection from '@/components/contact-section'
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

  const handleOpenReservation = () => {
    const contactElem = document.getElementById('contact')
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleOrderDish = (dish: MenuItemData) => {
    setSelectedDish(null)
    handleOpenReservation()
  }

  return (
    <div className="relative min-h-screen bg-[#0A0A0A] text-[#F5F5F5] selection:bg-gold selection:text-[#0A0A0A]">
      {/* Animated Luxury WebGL / Canvas Background */}
      <AnimatedBackground />

      {/* Glassmorphic Navbar */}
      <Navbar onOpenBookTable={handleOpenReservation} />

      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <Hero onBookTable={handleOpenReservation} />

        {/* Crowd Favorites Section (Fetched EXCLUSIVELY from Sanity CMS) */}
        {loading ? (
          <div className="py-24 text-center text-xs uppercase tracking-widest text-gold animate-pulse">
            Fetching Menu from Sanity CMS...
          </div>
        ) : (
          <CrowdFavorites
            items={dishes}
            onSelectDish={(dish) => setSelectedDish(dish)}
          />
        )}

        {/* Contact & Reservation Section */}
        <ContactSection />
      </main>

      {/* Product Details Modal */}
      <ProductDetailsModal
        dish={selectedDish}
        onClose={() => setSelectedDish(null)}
        onOrderDish={handleOrderDish}
      />

      {/* Footer */}
      <Footer />
    </div>
  )
}
