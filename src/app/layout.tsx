import type { Metadata } from 'next'
import './globals.css'
import { LanguageProvider } from '@/context/LanguageContext'
import { ThemeProvider } from '@/context/ThemeContext'
import { CartProvider } from '@/context/CartContext'

export const metadata: Metadata = {
  title: 'LUMIÈRE | Fine Dining & Express Food Ordering Platform',
  description:
    'Experience timeless culinary elegance and high-end gastronomy delivered to your doorstep in Algiers. Explore our Sanity CMS curated menu and place instant orders.',
  keywords: [
    'Restaurant Algiers',
    'Fine Dining Algeria',
    'Food Delivery Algiers',
    'Lumière Restaurant',
    'Sanity CMS Restaurant',
    'Haute Gastronomie',
  ],
  openGraph: {
    title: 'LUMIÈRE | Fine Dining & Express Food Ordering Platform',
    description:
      'Experience timeless culinary elegance and high-end gastronomy delivered to your doorstep in Algiers.',
    url: 'https://lumiere-restaurant.dz',
    siteName: 'Lumière Restaurant',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Lumière Fine Dining',
      },
    ],
    locale: 'fr_DZ',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="scroll-smooth dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Cairo:wght@400;600;700;800&family=Hanken+Grotesk:wght@300;400;600;700&family=Playfair+Display:ital,wght@0,600;0,700;1,400&family=Tajawal:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-neutral-950 text-neutral-100 antialiased selection:bg-amber-400 selection:text-black transition-colors duration-300">
        <ThemeProvider>
          <LanguageProvider>
            <CartProvider>{children}</CartProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
