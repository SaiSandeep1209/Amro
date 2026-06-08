import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { asset } from '../../data/site'
import './Loader.css'

interface LoaderProps {
  onComplete: () => void
}

export function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    let current = 0
    const tick = () => {
      // Ease toward 100 with slight randomness for an organic feel.
      const step = Math.max(1, (100 - current) * 0.06)
      current = Math.min(100, current + step)
      setProgress(Math.round(current))
      if (current < 100) {
        timer = window.setTimeout(tick, 90)
      } else {
        window.setTimeout(() => setDone(true), 420)
      }
    }
    let timer = window.setTimeout(tick, 250)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {!done && (
        <motion.div
          className="loader"
          initial={{ opacity: 1 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="loader__glow" aria-hidden />
          <motion.div
            className="loader__inner"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="loader__logo-wrap">
              <img
                className="loader__logo"
                src={asset('logo.png')}
                alt="Amro Cafe"
              />
              <motion.span
                className="loader__ring"
                aria-hidden
                animate={{ rotate: 360 }}
                transition={{ duration: 2.4, repeat: Infinity, ease: 'linear' }}
              />
            </div>

            <div className="loader__bar">
              <motion.span
                className="loader__bar-fill"
                style={{ scaleX: progress / 100 }}
              />
            </div>
            <span className="loader__count">{progress}</span>
            <span className="loader__tagline">
              Crafted Coffee. Meaningful Moments.
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
