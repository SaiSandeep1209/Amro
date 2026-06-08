import { motion } from 'framer-motion'
import { featuredEvent, occasions } from '../../data/events'
import { asset, site } from '../../data/site'
import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../ui/Reveal'
import { MagneticButton } from '../ui/MagneticButton'
import { useCursorHover } from '../../hooks/useCursor'
import './Events.css'

export function Events() {
  const viewCursor = useCursorHover('view', 'View')

  return (
    <section className="section events" id="events">
      <div className="container">
        <SectionHeading
          eyebrow="Events & Celebrations"
          title="Made for memorable occasions"
          align="center"
        />

        {/* Featured experience */}
        <div className="events__feature">
          <motion.figure
            className="events__feature-media"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            {...viewCursor}
          >
            <img src={asset(featuredEvent.image)} alt={featuredEvent.title} loading="lazy" />
            <span className="events__feature-tag">Signature Experience</span>
          </motion.figure>

          <Reveal direction="right" className="events__feature-body">
            <p className="events__feature-eyebrow">{featuredEvent.occasions}</p>
            <h3 className="events__feature-title">{featuredEvent.title}</h3>
            <p className="events__feature-tagline">{featuredEvent.tagline}</p>
            <p className="events__feature-desc">{featuredEvent.description}</p>

            <ul className="events__includes">
              {featuredEvent.includes.map((item) => (
                <li key={item}>
                  <span className="events__includes-mark" aria-hidden>
                    ✦
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="events__actions">
              <MagneticButton variant="solid" href={site.phoneHref}>
                Enquire to Book
              </MagneticButton>
              <MagneticButton variant="ghost" href={site.instagramUrl}>
                Message on Instagram
              </MagneticButton>
            </div>
          </Reveal>
        </div>

        {/* Occasion types */}
        <Reveal stagger={0.12} className="events__occasions">
          {occasions.map((o) => (
            <motion.article
              key={o.title}
              className="events__occasion"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
                },
              }}
            >
              <h4 className="events__occasion-title">{o.title}</h4>
              <p className="events__occasion-note">{o.note}</p>
            </motion.article>
          ))}
        </Reveal>

        <p className="events__footnote text-muted">
          Group &amp; corporate bookings welcome — call{' '}
          <a href={site.phoneHref}>{site.phone}</a> to plan your event.
        </p>
      </div>
    </section>
  )
}
