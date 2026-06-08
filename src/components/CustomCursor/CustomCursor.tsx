import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useCursor } from '../../hooks/useCursor'
import './CustomCursor.css'

export function CustomCursor() {
  const { variant, label } = useCursor()
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)

  const springCfg = { stiffness: 500, damping: 40, mass: 0.5 }
  const ringX = useSpring(x, { stiffness: 180, damping: 22, mass: 0.6 })
  const ringY = useSpring(y, { stiffness: 180, damping: 22, mass: 0.6 })
  const dotX = useSpring(x, springCfg)
  const dotY = useSpring(y, springCfg)

  useEffect(() => {
    document.body.dataset.customCursor = 'true'
    const move = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    window.addEventListener('mousemove', move)
    return () => {
      window.removeEventListener('mousemove', move)
      delete document.body.dataset.customCursor
    }
  }, [x, y])

  const ringScale =
    variant === 'hover' ? 1.8 : variant === 'view' ? 2.6 : variant === 'drag' ? 2.2 : 1

  return (
    <>
      <motion.div
        className={`cursor-ring cursor-ring--${variant}`}
        style={{ x: ringX, y: ringY }}
      >
        <motion.span
          className="cursor-ring__circle"
          animate={{ scale: ringScale }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        />
        {label && <span className="cursor-ring__label">{label}</span>}
      </motion.div>
      <motion.div className="cursor-dot" style={{ x: dotX, y: dotY }} />
    </>
  )
}
