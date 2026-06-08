import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { menuCategories, menuImages } from '../../data/menu'
import { SectionHeading } from '../ui/SectionHeading'
import { Lightbox } from '../ui/Lightbox'
import { MagneticButton } from '../ui/MagneticButton'
import { useCursorHover } from '../../hooks/useCursor'
import './Menu.css'

const menuCaptions = menuImages.map((_, i) => `Amro Cafe Menu — Page ${i + 1}`)

export function Menu() {
  const [active, setActive] = useState(0)
  const [lightbox, setLightbox] = useState<number | null>(null)
  const tabCursor = useCursorHover('hover')
  const category = menuCategories[active]

  return (
    <section className="section menu" id="menu">
      <div className="container">
        <div className="menu__head">
          <SectionHeading
            eyebrow="The Menu"
            title="Crafted across every craving"
            align="center"
          />
          <MagneticButton variant="ghost" onClick={() => setLightbox(0)}>
            View Full Menu
          </MagneticButton>
        </div>

        <div className="menu__tabs" role="tablist" aria-label="Menu categories">
          {menuCategories.map((cat, i) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={active === i}
              className={`menu__tab ${active === i ? 'is-active' : ''}`}
              onClick={() => setActive(i)}
              {...tabCursor}
            >
              {cat.label}
              {active === i && (
                <motion.span
                  className="menu__tab-bg"
                  layoutId="menu-tab-bg"
                  transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                />
              )}
            </button>
          ))}
        </div>

        <div className="menu__panel">
          <AnimatePresence mode="wait">
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="menu__tagline">{category.tagline}</p>
              <ul className="menu__list">
                {category.items.map((item, i) => (
                  <motion.li
                    key={item.name}
                    className="menu__row"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.06, duration: 0.5 }}
                  >
                    <div className="menu__row-head">
                      <span className="menu__item-name">
                        {item.name}
                        {item.signature && (
                          <span className="menu__sig" title="Signature">
                            ★
                          </span>
                        )}
                      </span>
                      <span className="menu__leader" aria-hidden />
                    </div>
                    <span className="menu__item-desc">{item.description}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <Lightbox
        images={menuImages}
        captions={menuCaptions}
        index={lightbox}
        onClose={() => setLightbox(null)}
        onNavigate={setLightbox}
      />
    </section>
  )
}
