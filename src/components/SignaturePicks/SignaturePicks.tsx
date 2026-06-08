import { useRef } from 'react'
import type { MouseEvent } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { signatures } from '../../data/signatures'
import type { SignatureItem } from '../../data/signatures'
import { asset } from '../../data/site'
import { SectionHeading } from '../ui/SectionHeading'
import { useIsDesktop } from '../../hooks/useMediaQuery'
import { useCursorHover } from '../../hooks/useCursor'
import './SignaturePicks.css'

function TiltCard({ item, index }: { item: SignatureItem; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isDesktop = useIsDesktop()
  const cursor = useCursorHover('hover')

  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), {
    stiffness: 200,
    damping: 20,
  })
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), {
    stiffness: 200,
    damping: 20,
  })

  const onMove = (e: MouseEvent) => {
    if (!isDesktop || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    mx.set((e.clientX - rect.left) / rect.width - 0.5)
    my.set((e.clientY - rect.top) / rect.height - 0.5)
  }
  const onLeave = () => {
    mx.set(0)
    my.set(0)
    cursor.onMouseLeave()
  }

  return (
    <motion.article
      ref={ref}
      className="pick"
      onMouseMove={onMove}
      onMouseEnter={cursor.onMouseEnter}
      onMouseLeave={onLeave}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="pick__media">
        <img src={asset(item.image)} alt={item.name} loading="lazy" />
        <span className="pick__group">{item.group}</span>
      </div>
      <div className="pick__body" style={{ transform: 'translateZ(40px)' }}>
        <h3 className="pick__name">{item.name}</h3>
        <p className="pick__note">{item.note}</p>
      </div>
      <span className="pick__shine" aria-hidden />
    </motion.article>
  )
}

export function SignaturePicks() {
  return (
    <section className="section signatures" id="signatures">
      <div className="container">
        <div className="signatures__head">
          <SectionHeading
            eyebrow="Signature Picks"
            title="The ones worth coming back for"
            align="center"
          />
          <p className="signatures__intro text-muted">
            A handpicked selection across our bakery, breakfast, mains and bar —
            the flavours our guests remember long after the last sip.
          </p>
        </div>

        <div className="signatures__grid">
          {signatures.map((item, i) => (
            <TiltCard key={item.name} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
