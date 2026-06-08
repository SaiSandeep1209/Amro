export interface FeaturedEvent {
  title: string
  tagline: string
  description: string
  includes: string[]
  image: string
  occasions: string
}

export interface Occasion {
  title: string
  note: string
}

// Featured private experience confirmed for Amro Cafe (cabana candlelight dinner).
export const featuredEvent: FeaturedEvent = {
  title: 'Cabana Candlelight Dinner',
  tagline: 'A private evening, beautifully set.',
  description:
    'An intimate candlelit cabana for two — a curated multi-course dinner, a decorated private setup, and a celebration cake. Designed for the moments that matter, in the warm glow of Amro after dark.',
  includes: [
    'Private decorated cabana setup',
    'Curated multi-course dinner',
    'Celebration cake',
    'Warm, attentive service',
  ],
  image: 'amro-outdoor.webp',
  occasions: 'Perfect for birthdays, anniversaries & proposals',
}

export const occasions: Occasion[] = [
  {
    title: 'Birthdays',
    note: 'Celebrate another year over coffee, cake and candlelight.',
  },
  {
    title: 'Anniversaries',
    note: 'Mark the milestone with an intimate dinner for two.',
  },
  {
    title: 'Proposals',
    note: 'Set the scene for the question with a private cabana.',
  },
  {
    title: 'Private Gatherings',
    note: 'Host friends and family in a warm, premium space.',
  },
]
