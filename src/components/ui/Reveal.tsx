import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import type { Variants } from 'framer-motion'

type Direction = 'up' | 'down' | 'left' | 'right' | 'none'

interface RevealProps {
  children: ReactNode
  direction?: Direction
  delay?: number
  distance?: number
  className?: string
  /** Stagger children that are themselves <RevealItem> or motion elements. */
  stagger?: number
  as?: 'div' | 'section' | 'ul' | 'span'
  once?: boolean
}

const offset = (dir: Direction, d: number) => {
  switch (dir) {
    case 'up':
      return { y: d }
    case 'down':
      return { y: -d }
    case 'left':
      return { x: d }
    case 'right':
      return { x: -d }
    default:
      return {}
  }
}

export function Reveal({
  children,
  direction = 'up',
  delay = 0,
  distance = 40,
  className,
  stagger,
  as = 'div',
  once = true,
}: RevealProps) {
  const MotionTag = motion[as]

  if (stagger != null) {
    const container: Variants = {
      hidden: {},
      visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
    }
    return (
      <MotionTag
        className={className}
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, amount: 0.2 }}
      >
        {children}
      </MotionTag>
    )
  }

  const variants: Variants = {
    hidden: { opacity: 0, ...offset(direction, distance) },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] },
    },
  }

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.25 }}
    >
      {children}
    </MotionTag>
  )
}

/** Child item used inside a <Reveal stagger={...}> container. */
export const revealItemVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
}

export function RevealItem({
  children,
  className,
  as = 'div',
}: {
  children: ReactNode
  className?: string
  as?: 'div' | 'li' | 'span'
}) {
  const MotionTag = motion[as]
  return (
    <MotionTag className={className} variants={revealItemVariants}>
      {children}
    </MotionTag>
  )
}
