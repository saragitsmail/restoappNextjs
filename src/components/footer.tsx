'use client'

export default function Footer() {
  return (
    <footer className="relative z-10 bg-[#070707] border-t border-gold/10 py-16 px-6 text-[#A0A0A0] text-xs">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h3 className="font-serif text-2xl font-bold text-gold tracking-widest mb-3">
            LUMIÈRE
          </h3>
          <p className="text-xs font-light leading-relaxed max-w-sm">
            A refined culinary experience where timeless elegance meets contemporary gastronomy.
          </p>
        </div>

        <div className="flex flex-col space-y-2 uppercase tracking-widest text-[11px]">
          <a href="#home" className="hover:text-gold transition-colors">Home</a>
          <a href="#menu" className="hover:text-gold transition-colors">Crowd Favorites</a>
          <a href="#details" className="hover:text-gold transition-colors">Product Details</a>
          <a href="#contact" className="hover:text-gold transition-colors">Contact Us & Reservations</a>
          <a href="/studio" className="text-gold/80 hover:text-gold transition-colors underline pt-2">Client Sanity Studio Login</a>
        </div>

        <div className="md:text-right space-y-2 font-light text-xs">
          <p>© {new Date().getFullYear()} Lumière Excellence. All Rights Reserved.</p>
          <p className="text-[11px] text-gold/60">Designed with Next.js & Sanity.io</p>
        </div>
      </div>
    </footer>
  )
}
