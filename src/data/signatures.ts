export interface SignatureItem {
  name: string
  group: string
  image: string
  note: string
}

export const signatures: SignatureItem[] = [
  {
    name: 'Butter Croissant',
    group: 'Bakery',
    image: 'butter-croissant.webp',
    note: 'Flaky, golden, laminated by hand.',
  },
  {
    name: 'Blueberry Danish',
    group: 'Bakery',
    image: 'blueberry-danish.webp',
    note: 'Buttery pastry, wild blueberry compote.',
  },
  {
    name: 'Macarons',
    group: 'Bakery',
    image: 'macarons.webp',
    note: 'Delicate shells, seasonal ganache.',
  },
  {
    name: 'Egg Florentine',
    group: 'Breakfast',
    image: 'egg-florentine.webp',
    note: 'Poached eggs, spinach, hollandaise.',
  },
  {
    name: 'Fish & Chips',
    group: 'Main Course',
    image: 'fish-and-chips.webp',
    note: 'Crisp beer batter, tartare, fries.',
  },
  {
    name: 'Spicy Chicken Steak',
    group: 'Main Course',
    image: 'spicy-chicken-steak.webp',
    note: 'Char-grilled, bold house spice.',
  },
  {
    name: 'Spanish Cappuccino',
    group: 'Beverages',
    image: 'spanish-cappuccino.webp',
    note: 'Caramelised, velvety, signature pour.',
  },
  {
    name: 'Cafe Frappe',
    group: 'Beverages',
    image: 'cafe-frappe.webp',
    note: 'Iced, frothy, deeply roasted.',
  },
  {
    name: 'French Tender Coconut',
    group: 'Beverages',
    image: 'french-tender-coconut.webp',
    note: 'Cool, creamy, tropical refresh.',
  },
]
