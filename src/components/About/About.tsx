import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { asset, site } from '../../data/site'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'
import { useCursorHover } from '../../hooks/useCursor'
import './About.css'

export function About() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const img1Y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])
  const img2Y = useTransform(scrollYProgress, [0, 1], ['10%', '-10%'])
  const viewCursor = useCursorHover('view', 'View')

  return (
    <section className="section about" id="about">
      <div className="container">
        <SectionHeading
          eyebrow="About Amro"
          title="More than a cafe — a feeling"
          align="center"
        />
      </div>
      <div className="container about__grid" ref={ref}>
        <div className="about__media">
          <motion.figure
            className="about__img about__img--a"
            style={{ y: img1Y }}
            {...viewCursor}
          >
            <img src={asset('interior.avif')} alt="Amro Cafe interior" loading="lazy" />
          </motion.figure>
          <motion.figure
            className="about__img about__img--b"
            style={{ y: img2Y }}
            {...viewCursor}
          >
            <img
              src={asset('cafe-counter.png')}
              alt="The coffee counter at Amro Cafe"
              loading="lazy"
            />
          </motion.figure>
          <div className="about__badge">
            <span className="about__badge-num">Est.</span>
            <span className="about__badge-text">Gachibowli<br />Hyderabad</span>
          </div>
        </div>

        <div className="about__body">
          <Reveal stagger={0.15} className="about__paras">
            {site.about.map((para, i) => (
              <motion.p
                key={i}
                className={i === 0 ? 'about__lead' : 'about__para'}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
              >
                {para}
              </motion.p>
            ))}
          </Reveal>

          <Reveal direction="up" delay={0.1} className="about__stats">
            {[
              { k: 'Indoor & Outdoor', v: 'Seating' },
              { k: 'Signature', v: 'Coffees' },
              { k: 'Open till 1 AM', v: 'Weekends' },
            ].map((s) => (
              <div className="about__stat" key={s.k}>
                <span className="about__stat-k">{s.k}</span>
                <span className="about__stat-v">{s.v}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
