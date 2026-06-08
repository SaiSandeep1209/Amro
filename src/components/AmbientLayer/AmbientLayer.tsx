import { useMemo } from 'react'
import { useIsDesktop, usePrefersReducedMotion } from '../../hooks/useMediaQuery'
import './AmbientLayer.css'

export function AmbientLayer() {
  const isDesktop = useIsDesktop()
  const reduced = usePrefersReducedMotion()

  // Fewer particles on mobile; none under reduced-motion.
  const count = reduced ? 0 : isDesktop ? 18 : 9

  const particles = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => {
        // Deterministic pseudo-random based on index (no Math.random at render).
        const seed = (i * 9301 + 49297) % 233280
        const r = seed / 233280
        const r2 = ((i + 1) * 4096) % 100
        return {
          left: `${(r * 100).toFixed(2)}%`,
          size: 2 + (i % 4),
          delay: `${(r * 8).toFixed(2)}s`,
          duration: `${14 + (r2 % 12)}s`,
          drift: `${(r2 % 2 === 0 ? 1 : -1) * (20 + (r2 % 40))}px`,
        }
      }),
    [count],
  )

  return (
    <div className="ambient" aria-hidden>
      <div className="ambient__glow ambient__glow--1" />
      <div className="ambient__glow ambient__glow--2" />
      <div className="ambient__noise" />
      {particles.length > 0 && (
        <div className="ambient__particles">
          {particles.map((p, i) => (
            <span
              key={i}
              className="ambient__particle"
              style={
                {
                  left: p.left,
                  width: p.size,
                  height: p.size,
                  animationDelay: p.delay,
                  animationDuration: p.duration,
                  '--drift': p.drift,
                } as React.CSSProperties
              }
            />
          ))}
        </div>
      )}
    </div>
  )
}
