export interface MenuItem {
  name: string
  description: string
  signature?: boolean
}

export interface MenuCategory {
  id: string
  label: string
  tagline: string
  items: MenuItem[]
}

// Curated highlights per category. The full printed menu is available as
// high-resolution images in the lightbox (see menuImages below).
export const menuCategories: MenuCategory[] = [
  {
    id: 'breakfast',
    label: 'Breakfast',
    tagline: 'Slow mornings, beautifully fed.',
    items: [
      { name: 'Egg Florentine', description: 'Poached eggs, sautéed spinach, hollandaise on toasted brioche.', signature: true },
      { name: 'Classic Shakshuka', description: 'Eggs baked in spiced tomato, peppers, herbed labneh.' },
      { name: 'Avocado & Feta Toast', description: 'Sourdough, smashed avocado, chilli, lemon.' },
      { name: 'Pancake Stack', description: 'Buttermilk pancakes, maple, seasonal berries.' },
    ],
  },
  {
    id: 'bakery',
    label: 'Bakery',
    tagline: 'Laminated, proofed and baked in-house.',
    items: [
      { name: 'Butter Croissant', description: 'Hand-rolled, flaky, golden layers.', signature: true },
      { name: 'Blueberry Danish', description: 'Buttery pastry, wild blueberry compote.', signature: true },
      { name: 'Custard Danish', description: 'Vanilla bean crème pâtissière.' },
      { name: 'Macarons', description: 'Delicate shells, seasonal ganache.', signature: true },
      { name: 'Cinnamon Doughnuts', description: 'Warm, sugar-dusted, cinnamon spiced.' },
    ],
  },
  {
    id: 'starters',
    label: 'Starters',
    tagline: 'Small plates to begin the moment.',
    items: [
      { name: 'Loaded Nachos', description: 'Cheese, jalapeño, salsa, sour cream.' },
      { name: 'Peri Peri Fries', description: 'Crisp fries tossed in house peri spice.' },
      { name: 'Chilli Garlic Bread', description: 'Toasted, herbed butter, mozzarella.' },
    ],
  },
  {
    id: 'soups',
    label: 'Soups',
    tagline: 'Warm bowls, comforting depth.',
    items: [
      { name: 'Roasted Tomato Basil', description: 'Slow-roasted tomato, fresh basil, cream swirl.' },
      { name: 'Wild Mushroom', description: 'Earthy mushrooms, thyme, truffle oil.' },
      { name: 'Sweet Corn', description: 'Velvety corn, pepper, herbs.' },
    ],
  },
  {
    id: 'salads',
    label: 'Salads',
    tagline: 'Fresh, vibrant, generous.',
    items: [
      { name: 'Caesar', description: 'Cos lettuce, parmesan, croutons, classic dressing.' },
      { name: 'Greek', description: 'Cucumber, olives, feta, oregano.' },
      { name: 'Quinoa & Roast Veg', description: 'Charred vegetables, citrus vinaigrette.' },
    ],
  },
  {
    id: 'sandwiches',
    label: 'Sandwiches & Burgers',
    tagline: 'Stacked, toasted, satisfying.',
    items: [
      { name: 'Veg Burger', description: 'House patty, slaw, secret sauce.', signature: true },
      { name: 'Grilled Chicken Club', description: 'Triple-stack, bacon, egg, fries.' },
      { name: 'Pesto Panini', description: 'Mozzarella, tomato, basil pesto.' },
    ],
  },
  {
    id: 'pizza',
    label: 'Pizza',
    tagline: 'Stone-baked, thin and blistered.',
    items: [
      { name: 'Margherita', description: 'San Marzano, fior di latte, basil.' },
      { name: 'Funghi & Truffle', description: 'Wild mushrooms, mozzarella, truffle.' },
      { name: 'Spicy Pepperoni', description: 'Pepperoni, chilli honey, oregano.' },
    ],
  },
  {
    id: 'pasta',
    label: 'Pasta',
    tagline: 'Tossed to order, never rushed.',
    items: [
      { name: 'Alfredo', description: 'Fettuccine, parmesan cream, pepper.' },
      { name: 'Arrabbiata', description: 'Penne, spiced tomato, garlic, basil.' },
      { name: 'Pesto Genovese', description: 'Basil pesto, pine nuts, parmesan.' },
    ],
  },
  {
    id: 'main-course',
    label: 'Main Course',
    tagline: 'The centrepiece of the table.',
    items: [
      { name: 'Fish & Chips', description: 'Crisp beer batter, tartare, fries.', signature: true },
      { name: 'Spicy Chicken Steak', description: 'Char-grilled, bold house spice.', signature: true },
      { name: 'Grilled Veg Platter', description: 'Seasonal vegetables, herbed jus.' },
    ],
  },
  {
    id: 'desserts',
    label: 'Desserts',
    tagline: 'A sweet, lingering finish.',
    items: [
      { name: 'Mango Chia Sago', description: 'Chilled mango, sago, coconut.', signature: true },
      { name: 'Molten Chocolate', description: 'Warm centre, vanilla bean cream.' },
      { name: 'Tiramisu', description: 'Espresso-soaked, mascarpone, cocoa.' },
    ],
  },
  {
    id: 'coffee',
    label: 'Coffee',
    tagline: 'Single-origin, expertly pulled.',
    items: [
      { name: 'Spanish Cappuccino', description: 'Caramelised, velvety, signature pour.', signature: true },
      { name: 'Flat White', description: 'Double ristretto, silky micro-foam.' },
      { name: 'Pour Over', description: 'Bright, clean, single-origin.' },
    ],
  },
  {
    id: 'cold-coffee',
    label: 'Cold Coffee',
    tagline: 'Iced, smooth and bold.',
    items: [
      { name: 'Cafe Frappe', description: 'Iced, frothy, deeply roasted.', signature: true },
      { name: 'Cold Brew', description: 'Slow-steeped 18 hours, mellow.' },
      { name: 'Iced Latte', description: 'Espresso over chilled milk.' },
    ],
  },
  {
    id: 'coolers',
    label: 'Coolers & Mocktails',
    tagline: 'Refresh, revive, reset.',
    items: [
      { name: 'French Tender Coconut', description: 'Cool, creamy, tropical refresh.', signature: true },
      { name: 'Virgin Mojito', description: 'Lime, mint, soda, crushed ice.' },
      { name: 'Berry Cooler', description: 'Mixed berries, citrus, sparkling.' },
    ],
  },
]

// Full printed menu pages, shown in the lightbox.
export const menuImages: string[] = Array.from(
  { length: 14 },
  (_, i) => `menu-${i + 1}.webp`,
)
