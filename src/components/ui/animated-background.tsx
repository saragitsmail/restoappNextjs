'use client'

import { useEffect, useRef } from 'react'

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl') as WebGLRenderingContext | null

    if (!gl) {
      // Fallback to 2D ambient glow if WebGL is unavailable
      const ctx = canvas.getContext('2d')
      if (!ctx) return
      let animationFrameId: number

      const resize2D = () => {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
      }
      resize2D()
      window.addEventListener('resize', resize2D)

      let t = 0
      const render2D = () => {
        t += 0.005
        ctx.fillStyle = '#0a0a0a'
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        const gradient1 = ctx.createRadialGradient(
          canvas.width * (0.3 + 0.1 * Math.sin(t)),
          canvas.height * (0.3 + 0.1 * Math.cos(t * 0.8)),
          10,
          canvas.width * 0.3,
          canvas.height * 0.3,
          canvas.width * 0.4
        )
        gradient1.addColorStop(0, 'rgba(212, 175, 55, 0.08)')
        gradient1.addColorStop(1, 'rgba(10, 10, 10, 0)')

        const gradient2 = ctx.createRadialGradient(
          canvas.width * (0.7 + 0.1 * Math.cos(t * 0.7)),
          canvas.height * (0.7 + 0.1 * Math.sin(t * 0.9)),
          10,
          canvas.width * 0.7,
          canvas.height * 0.7,
          canvas.width * 0.45
        )
        gradient2.addColorStop(0, 'rgba(203, 161, 53, 0.06)')
        gradient2.addColorStop(1, 'rgba(10, 10, 10, 0)')

        ctx.fillStyle = gradient1
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        ctx.fillStyle = gradient2
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        animationFrameId = requestAnimationFrame(render2D)
      }
      render2D()

      return () => {
        window.removeEventListener('resize', resize2D)
        cancelAnimationFrame(animationFrameId)
      }
    }

    // WebGL Shader setup for luxury gold ambient light pools
    const vsSource = `
      attribute vec2 a_position;
      varying vec2 v_texCoord;
      void main() {
        v_texCoord = a_position * 0.5 + 0.5;
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `

    const fsSource = `
      precision highp float;
      varying vec2 v_texCoord;
      uniform float u_time;

      void main() {
        vec2 uv = v_texCoord;
        float noise = sin(uv.x * 1.5 + u_time * 0.1) * cos(uv.y * 1.5 + u_time * 0.12);
        vec3 color = vec3(0.039, 0.039, 0.039); // #0A0A0A base
        vec3 gold = vec3(0.83, 0.69, 0.22);     // #D4AF37 gold

        float light1 = smoothstep(0.75, 0.0, length(uv - vec2(0.25 + 0.15 * sin(u_time * 0.08), 0.35 + 0.15 * cos(u_time * 0.1))));
        float light2 = smoothstep(0.85, 0.0, length(uv - vec2(0.75 + 0.1 * cos(u_time * 0.12), 0.65 + 0.1 * sin(u_time * 0.07))));
        float light3 = smoothstep(0.9, 0.0, length(uv - vec2(0.5 + 0.2 * sin(u_time * 0.05), 0.5 + 0.2 * cos(u_time * 0.06))));

        color += gold * (light1 * 0.045 + light2 * 0.035 + light3 * 0.025 + noise * 0.01);

        float vignette = smoothstep(1.7, 0.3, length(uv - 0.5));
        color *= vignette;

        gl_FragColor = vec4(color, 1.0);
      }
    `

    const compileShader = (type: number, src: string) => {
      const shader = gl.createShader(type)
      if (!shader) return null
      gl.shaderSource(shader, src)
      gl.compileShader(shader)
      return shader
    }

    const vertShader = compileShader(gl.VERTEX_SHADER, vsSource)
    const fragShader = compileShader(gl.FRAGMENT_SHADER, fsSource)
    if (!vertShader || !fragShader) return

    const program = gl.createProgram()
    if (!program) return
    gl.attachShader(program, vertShader)
    gl.attachShader(program, fragShader)
    gl.linkProgram(program)
    gl.useProgram(program)

    const buffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW
    )

    const posLocation = gl.getAttribLocation(program, 'a_position')
    gl.enableVertexAttribArray(posLocation)
    gl.vertexAttribPointer(posLocation, 2, gl.FLOAT, false, 0, 0)

    const timeLoc = gl.getUniformLocation(program, 'u_time')

    let animId: number
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      gl.viewport(0, 0, canvas.width, canvas.height)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    const render = (time: number) => {
      if (timeLoc) {
        gl.uniform1f(timeLoc, time * 0.001)
      }
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
      animId = requestAnimationFrame(render)
    }

    animId = requestAnimationFrame(render)

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.95 }}
    />
  )
}
