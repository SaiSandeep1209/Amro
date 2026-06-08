export const site = {
  name: 'Amro Cafe',
  tagline: 'Crafted Coffee. Meaningful Moments.',
  location: 'Gachibowli, Hyderabad',
  phone: '+91 90002 48566',
  phoneHref: 'tel:+919000248566',
  instagram: '@amrocafe',
  instagramUrl: 'https://www.instagram.com/amrocafe/',
  mapsUrl: 'https://maps.app.goo.gl/xC26esaZ5vV3kEUQA',
  hero: {
    headline: "Hyderabad's Favorite Cafe Destination",
    subheadline:
      'Premium Coffee • Fresh Bakery • Signature Dining • Memorable Experiences',
  },
  about: [
    'Discover the allure of Amro Cafe, your destination for exceptional coffee, handcrafted beverages, fresh bakery delights, and thoughtfully curated dining experiences in the heart of Gachibowli, Hyderabad.',
    "Designed to be more than just a cafe, Amro Cafe brings together a welcoming atmosphere, premium ingredients, and attentive hospitality to create memorable moments for every guest. Whether you're starting your day with a freshly brewed coffee, enjoying a leisurely breakfast, meeting friends, working remotely, or unwinding over dinner, Amro Cafe offers the perfect setting.",
    'With comfortable indoor and outdoor seating, signature coffees, artisanal bakery selections, and a menu crafted to satisfy every craving, Amro Cafe has become a favorite destination for coffee lovers, food enthusiasts, professionals, and families alike.',
  ],
  hours: [
    { day: 'Monday', time: '7:00 AM – 12:00 AM' },
    { day: 'Tuesday', time: '7:00 AM – 12:00 AM' },
    { day: 'Wednesday', time: '7:00 AM – 12:00 AM' },
    { day: 'Thursday', time: '7:00 AM – 12:00 AM' },
    { day: 'Friday', time: '7:00 AM – 1:00 AM' },
    { day: 'Saturday', time: '7:00 AM – 1:00 AM' },
    { day: 'Sunday', time: '7:00 AM – 1:00 AM' },
  ],
} as const

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'signatures', label: 'Signatures' },
  { id: 'menu', label: 'Menu' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'events', label: 'Events' },
  { id: 'contact', label: 'Visit' },
] as const

export const asset = (file: string) => `/assets/${file}`
