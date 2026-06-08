import { useCallback, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { asset } from '../../data/site'
import { startScroll, stopScroll } from '../../hooks/useLenis'
import './Lightbox.css'

interface LightboxProps {
  images: string[]
  index: number | null
  onClose: () => void
  onNavigate: (index: number) => void
  captions?: string[]
}

export function Lightbox({
  images,
  index,
  onClose,
  onNavigate,
  captions,
}: LightboxProps) {
  const isOpen = index !== null

  const go = useCallback(
    (dir: number) => {
      if (index === null) return
      const next = (index + dir + images.length) % images.length
      onNavigate(next)
    },
    [index, images.length, onNavigate],
  )

  useEffect(() => {
    if (!isOpen) return
    stopScroll()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') go(1)
      if (e.key === 'ArrowLeft') go(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      startScroll()
    }
  }, [isOpen, onClose, go])

  return (
    <AnimatePresence>
      {isOpen && index !== null && (
        <motion.div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          onClick={onClose}
        >
          <button
            className="lightbox__close"
            onClick={onClose}
            aria-label="Close"
          >
            ✕
          </button>

          <button
            className="lightbox__nav lightbox__nav--prev"
            onClick={(e) => {
              e.stopPropagation()
              go(-1)
            }}
            aria-label="Previous image"
          >
            ‹
          </button>

          <motion.figure
            className="lightbox__figure"
            key={index}
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <img src={asset(images[index])} alt={captions?.[index] ?? ''} />
            {captions?.[index] && (
              <figcaption className="lightbox__caption">
                {captions[index]}
              </figcaption>
            )}
          </motion.figure>

          <button
            className="lightbox__nav lightbox__nav--next"
            onClick={(e) => {
              e.stopPropagation()
              go(1)
            }}
            aria-label="Next image"
          >
            ›
          </button>

          <span className="lightbox__counter">
            {index + 1} / {images.length}
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
