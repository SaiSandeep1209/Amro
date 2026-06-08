import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { asset, navLinks, site } from '../../data/site'
import { scrollToId } from '../../hooks/useLenis'
import { useActiveSection } from '../../hooks/useActiveSection'
import { useCursorHover } from '../../hooks/useCursor'
import './Navbar.css'

const sectionIds = navLinks.map((l) => l.id)

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const active = useActiveSection(sectionIds)
  const linkCursor = useCursorHover('hover')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (id: string) => {
    setMenuOpen(false)
    // allow the menu to start closing before scrolling
    setTimeout(() => scrollToId(id), 120)
  }

  return (
    <>
      <motion.header
        className={`nav ${scrolled ? 'is-scrolled' : ''}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="nav__bar container">
          <button
            className="nav__brand"
            onClick={() => scrollToId('hero')}
            aria-label="Amro Cafe — back to top"
            {...linkCursor}
          >
            <img src={asset('logo.png')} alt="Amro Cafe" className="nav__logo" />
            <span className="nav__name">Amro</span>
          </button>

          <nav className="nav__links" aria-label="Primary">
            {navLinks.map((link) => (
              <button
                key={link.id}
                className={`nav__link ${active === link.id ? 'is-active' : ''}`}
                onClick={() => handleNav(link.id)}
                {...linkCursor}
              >
                {link.label}
                <span className="nav__link-dot" aria-hidden />
              </button>
            ))}
          </nav>

          <button
            className="nav__cta"
            onClick={() => window.open(site.mapsUrl, '_blank')}
            {...linkCursor}
          >
            Reserve Visit
          </button>

          <button
            className={`nav__burger ${menuOpen ? 'is-open' : ''}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ clipPath: 'circle(0% at 100% 0%)' }}
            animate={{ clipPath: 'circle(150% at 100% 0%)' }}
            exit={{ clipPath: 'circle(0% at 100% 0%)' }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          >
            <nav className="mobile-menu__links">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.id}
                  className="mobile-menu__link"
                  onClick={() => handleNav(link.id)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: 0.2 + i * 0.07, duration: 0.5 }}
                >
                  <span className="mobile-menu__index">0{i + 1}</span>
                  {link.label}
                </motion.button>
              ))}
            </nav>
            <motion.div
              className="mobile-menu__footer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <a href={site.phoneHref}>{site.phone}</a>
              <a href={site.instagramUrl} target="_blank" rel="noreferrer">
                {site.instagram}
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
