import { motion } from 'framer-motion'
import { site } from '../../data/site'
import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../ui/Reveal'
import { MagneticButton } from '../ui/MagneticButton'
import './Contact.css'

const today = new Date().getDay() // 0 = Sunday
// Map JS day index to our hours array (which starts Monday).
const todayIndex = today === 0 ? 6 : today - 1

export function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <SectionHeading
          eyebrow="Visit Us"
          title="Come spend a little time"
          align="center"
        />
      </div>
      <div className="container contact__grid">
        <div className="contact__intro">
          <p className="contact__tagline">{site.tagline}</p>

          <Reveal direction="up" className="contact__details">
            <a className="contact__detail" href={site.phoneHref}>
              <span className="contact__label">Call</span>
              <span className="contact__value">{site.phone}</span>
            </a>
            <a
              className="contact__detail"
              href={site.instagramUrl}
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact__label">Instagram</span>
              <span className="contact__value">{site.instagram}</span>
            </a>
            <div className="contact__detail">
              <span className="contact__label">Location</span>
              <span className="contact__value">{site.location}</span>
            </div>
          </Reveal>

          <div className="contact__actions">
            <MagneticButton variant="solid" href={site.mapsUrl}>
              Get Directions
            </MagneticButton>
            <MagneticButton variant="ghost" href={site.instagramUrl}>
              Follow Along
            </MagneticButton>
          </div>

          <div className="contact__mapframe">
            <iframe
              title="Amro Cafe location map — Gachibowli, Hyderabad"
              src="https://www.google.com/maps?q=Amro%20Cafe%2C%20Gachibowli%2C%20Hyderabad&z=15&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>

        <motion.div
          className="contact__hours"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="contact__hours-head">
            <h3>Opening Hours</h3>
            <span className="contact__open-dot">Open Daily · 7 AM</span>
          </div>
          <ul className="contact__hours-list">
            {site.hours.map((h, i) => (
              <li
                key={h.day}
                className={`contact__hours-row ${i === todayIndex ? 'is-today' : ''}`}
              >
                <span>{h.day}</span>
                <span className="contact__hours-line" aria-hidden />
                <span>{h.time}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
