import { useState } from 'react'
import { motion } from 'framer-motion'
import { gallery } from '../../data/gallery'
import { SectionHeading } from '../ui/SectionHeading'
import { Lightbox } from '../ui/Lightbox'
import { asset } from '../../data/site'
import { useCursorHover } from '../../hooks/useCursor'
import './Gallery.css'

const images = gallery.map((g) => g.src)
const captions = gallery.map((g) => `${g.title} — ${g.caption}`)

export function Gallery() {
  const [open, setOpen] = useState<number | null>(null)
  const viewCursor = useCursorHover('view', 'Expand')

  return (
    <section className="section gallery" id="gallery">
      <div className="container">
        <SectionHeading
          eyebrow="The Space"
          title="Step inside the atmosphere"
          align="center"
        />

        <div className="gallery__grid">
          {gallery.map((item, i) => (
            <motion.button
              key={item.src}
              className={`gallery__item ${item.size ? `is-${item.size}` : ''}`}
              onClick={() => setOpen(i)}
              initial={{ opacity: 0, scale: 0.96, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: (i % 4) * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              {...viewCursor}
            >
              <img src={asset(item.src)} alt={item.title} loading="lazy" />
              <span className="gallery__shade" aria-hidden />
              <span className="gallery__caption">
                <span className="gallery__title">{item.title}</span>
                <span className="gallery__sub">{item.caption}</span>
              </span>
              <span className="gallery__plus" aria-hidden>
                +
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <Lightbox
        images={images}
        captions={captions}
        index={open}
        onClose={() => setOpen(null)}
        onNavigate={setOpen}
      />
    </section>
  )
}
