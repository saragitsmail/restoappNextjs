'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    // Floating gold particle dust
    const particleCount = 35
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.4 + 0.1,
      speedY: -(Math.random() * 0.3 + 0.1),
      speedX: (Math.random() - 0.5) * 0.2,
      pulse: Math.random() * 0.02 + 0.005,
    }))

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw subtle warm golden atmospheric light particles
      particles.forEach((p) => {
        p.y += p.speedY
        p.x += p.speedX
        p.alpha += Math.sin(Date.now() * p.pulse) * 0.005

        if (p.y < 0) {
          p.y = canvas.height
          p.x = Math.random() * canvas.width
        }
        if (p.x < 0 || p.x > canvas.width) {
          p.x = Math.random() * canvas.width
        }

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(224, 192, 104, ${Math.max(0.05, Math.min(0.5, p.alpha))})`
        ctx.shadowBlur = 10
        ctx.shadowColor = 'rgba(224, 192, 104, 0.4)'
        ctx.fill()
      })

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden bg-[#070605]">
      {/* Full-Screen Realistic High-End Food Photography Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1544025162-d76694265947?q=90&w=2560&auto=format&fit=crop"
          alt="Lumière fine dining atmosphere"
          fill
          priority
          className="object-cover object-center animate-bg-pan filter brightness-[0.40] contrast-[1.1] saturate-[1.15]"
          sizes="100vw"
        />
      </div>

      {/* Sophisticated Dark Warm Gradient Overlay for Contrast & Readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#0a0806]/85 via-[#080705]/75 to-[#0b0907]/90" />

      {/* Warm Ambient Radial Vignette */}
      <div
        className="absolute inset-0 z-15"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(20, 16, 12, 0.2) 20%, rgba(6, 5, 4, 0.85) 100%)',
        }}
      />

      {/* Floating Gold Dust Particles Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-20 pointer-events-none"
      />
    </div>
  )
}
