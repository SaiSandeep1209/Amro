export interface GalleryImage {
  src: string
  title: string
  caption: string
  /** grid span class suffix: 'wide' | 'tall' | 'big' | undefined */
  size?: 'wide' | 'tall' | 'big'
}

// Editorial / bento arrangement — intentionally non-uniform.
export const gallery: GalleryImage[] = [
  { src: 'amro-outdoor.webp', title: 'The Terrace', caption: 'Outdoor seating under warm light', size: 'big' },
  { src: 'interior.avif', title: 'The Room', caption: 'Where mornings slow down', size: 'tall' },
  { src: 'cafe-counter.png', title: 'The Counter', caption: 'Crafted coffee, in motion' },
  { src: 'spanish-cappuccino.webp', title: 'Spanish Cappuccino', caption: 'The signature pour' },
  { src: 'butter-croissant.webp', title: 'Fresh Bakery', caption: 'Baked through the morning', size: 'wide' },
  { src: 'interior-2.avif', title: 'The Corner', caption: 'A place worth staying', size: 'tall' },
  { src: 'macarons.webp', title: 'Patisserie', caption: 'Colour and craft' },
  { src: 'fish-and-chips.webp', title: 'The Plate', caption: 'Signature dining' },
]
