import { useRef, useState } from 'react'
import type { MouseEvent, ReactNode } from 'react'
import { motion } from 'framer-motion'
import { useIsDesktop } from '../../hooks/useMediaQuery'
import { useCursor } from '../../hooks/useCursor'
import './MagneticButton.css'

interface Ripple {
  id: number
  x: number
  y: number
}

interface MagneticButtonProps {
  children: ReactNode
  onClick?: () => void
  variant?: 'solid' | 'ghost'
  href?: string
  className?: string
  ariaLabel?: string
}

let rippleId = 0

export function MagneticButton({
  children,
  onClick,
  variant = 'solid',
  href,
  className = '',
  ariaLabel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null)
  const isDesktop = useIsDesktop()
  const { setCursor, reset } = useCursor()
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [ripples, setRipples] = useState<Ripple[]>([])

  const handleMove = (e: MouseEvent) => {
    if (!isDesktop || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - (rect.left + rect.width / 2)
    const y = e.clientY - (rect.top + rect.height / 2)
    setPos({ x: x * 0.35, y: y * 0.35 })
  }

  const handleLeave = () => {
    setPos({ x: 0, y: 0 })
    reset()
  }

  const handleClick = (e: MouseEvent) => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect()
      const id = ++rippleId
      setRipples((r) => [
        ...r,
        { id, x: e.clientX - rect.left, y: e.clientY - rect.top },
      ])
      setTimeout(() => setRipples((r) => r.filter((rp) => rp.id !== id)), 650)
    }
    onClick?.()
    if (href) window.open(href, href.startsWith('http') ? '_blank' : '_self')
  }

  return (
    <motion.button
      ref={ref}
      type="button"
      aria-label={ariaLabel}
      className={`magnetic-btn magnetic-btn--${variant} ${className}`}
      onMouseMove={handleMove}
      onMouseEnter={() => setCursor('hover')}
      onMouseLeave={handleLeave}
      onClick={handleClick}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: 'spring', stiffness: 200, damping: 18, mass: 0.4 }}
    >
      <motion.span
        className="magnetic-btn__inner"
        animate={{ x: pos.x * 0.25, y: pos.y * 0.25 }}
        transition={{ type: 'spring', stiffness: 200, damping: 18 }}
      >
        {children}
      </motion.span>
      <span className="magnetic-btn__glow" aria-hidden />
      {ripples.map((r) => (
        <span
          key={r.id}
          className="magnetic-btn__ripple"
          style={{ left: r.x, top: r.y }}
          aria-hidden
        />
      ))}
    </motion.button>
  )
}
