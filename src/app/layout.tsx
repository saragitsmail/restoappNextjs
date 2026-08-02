import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'LUMIÈRE | Refined Luxury Culinary Experience & Fine Dining',
  description:
    'Experience timeless culinary elegance and contemporary gastronomy at Lumière Paris. Explore our Michelin-curated crowd favorites and reserve your exclusive table.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@300;400;600;700&family=Playfair+Display:ital,wght@0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#0A0A0A] text-[#F5F5F5] antialiased selection:bg-[#D4AF37] selection:text-[#0A0A0A]">
        {children}
      </body>
    </html>
  )
}
