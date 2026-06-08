import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { asset, site } from '../../data/site'
import { scrollToId } from '../../hooks/useLenis'
import { MagneticButton } from '../ui/MagneticButton'
import './Hero.css'

const headlineWords = site.hero.headline.split(' ')

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  // Hero content fades + lifts as the user scrolls away.
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 140])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  // Parallax: video drifts slower than scroll.
  const videoY = useTransform(scrollYProgress, [0, 1], [0, 120])
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.15])

  return (
    <section className="hero" id="hero" ref={ref}>
      <motion.div className="hero__media" style={{ y: videoY, scale: videoScale }}>
        <motion.video
          className="hero__video"
          src={asset('hero.mp4')}
          poster={asset('amro-outdoor.webp')}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          // Slow cinematic zoom independent of scroll.
          initial={{ scale: 1.08 }}
          animate={{ scale: 1.0 }}
          transition={{ duration: 22, ease: 'easeOut' }}
        />
        <div className="hero__overlay" />
        <div className="hero__vignette" />
        <div className="hero__glow" />
      </motion.div>

      <motion.div
        className="hero__content container"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <motion.span
          className="hero__eyebrow eyebrow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          {site.location}
        </motion.span>

        <h1 className="hero__headline">
          {headlineWords.map((word, i) => (
            <span className="hero__word" key={i}>
              <motion.span
                className="hero__word-inner"
                initial={{ y: '115%' }}
                animate={{ y: 0 }}
                transition={{
                  delay: 1.15 + i * 0.09,
                  duration: 0.95,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          className="hero__sub"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.9, duration: 0.9 }}
        >
          {site.hero.subheadline}
        </motion.p>

        <motion.div
          className="hero__actions"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.15, duration: 0.9 }}
        >
          <MagneticButton variant="solid" onClick={() => scrollToId('menu')}>
            View Menu
          </MagneticButton>
          <MagneticButton variant="ghost" onClick={() => scrollToId('contact')}>
            Visit Us
          </MagneticButton>
        </motion.div>
      </motion.div>

      <motion.button
        className="hero__scroll"
        onClick={() => scrollToId('about')}
        aria-label="Scroll to explore"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.6, duration: 1 }}
      >
        <span className="hero__scroll-text">Scroll</span>
        <span className="hero__scroll-line">
          <span className="hero__scroll-dot" />
        </span>
      </motion.button>
    </section>
  )
}
