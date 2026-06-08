import { useEffect } from 'react'
import Lenis from 'lenis'
import { usePrefersReducedMotion } from './useMediaQuery'

let lenisInstance: Lenis | null = null

/** Programmatic smooth-scroll to an element id (used by nav + CTAs). */
export function scrollToId(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  if (lenisInstance) {
    lenisInstance.scrollTo(el, { offset: 0, duration: 1.4 })
  } else {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

/** Initialise Lenis smooth scrolling for the page. Disabled under reduced-motion. */
export function useLenis(enabled = true) {
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    if (!enabled || reduced) return

    const lenis = new Lenis({
      lerp: 0.14,
      wheelMultiplier: 1.15,
      smoothWheel: true,
      touchMultiplier: 1.8,
    })
    lenisInstance = lenis

    let raf = 0
    const loop = (time: number) => {
      lenis.raf(time)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(raf)
      lenis.destroy()
      lenisInstance = null
    }
  }, [enabled, reduced])
}

export function stopScroll() {
  lenisInstance?.stop()
  document.documentElement.classList.add('lenis-stopped')
}

export function startScroll() {
  lenisInstance?.start()
  document.documentElement.classList.remove('lenis-stopped')
}
