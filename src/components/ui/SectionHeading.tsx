import { motion } from 'framer-motion'
import './SectionHeading.css'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  align?: 'left' | 'center'
  light?: boolean
}

/** Word-by-word reveal heading used across sections. */
export function SectionHeading({
  eyebrow,
  title,
  align = 'left',
  light,
}: SectionHeadingProps) {
  const words = title.split(' ')
  return (
    <div className={`section-heading section-heading--${align}`}>
      {eyebrow && (
        <motion.span
          className="eyebrow"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {eyebrow}
        </motion.span>
      )}
      <h2 className={`section-heading__title ${light ? 'is-light' : ''}`}>
        {words.map((word, i) => (
          <span className="section-heading__word" key={i}>
            <motion.span
              className="section-heading__word-inner"
              initial={{ y: '110%' }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.8,
                delay: i * 0.07,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </h2>
    </div>
  )
}
