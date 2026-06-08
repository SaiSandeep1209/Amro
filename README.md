# Amro Cafe — Premium Interactive Website

A cinematic, animated single-page experience for **Amro Cafe**, Gachibowli, Hyderabad.
Built to sell atmosphere before the menu — premium coffee, fresh bakery, signature dining.

## Tech Stack

- **Vite** + **React 18** + **TypeScript**
- **Framer Motion** — reveals, parallax, staggered scroll animations
- **Lenis** — smooth scrolling
- **Vanilla Modern CSS** — design tokens + per-component styles (cream + warm palette)

## Getting Started

```bash
npm install      # install dependencies
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # type-check + production build to /dist
npm run preview  # preview the production build
```

## Sections

Loader · Hero (night video) · About · Gallery (bento + lightbox) · Signature Picks ·
Menu (13 interactive categories + full-menu lightbox) · Reviews (infinite marquee) ·
Events & Celebrations · Visit (hours + embedded map) · Footer

## Project Structure

```
src/
  components/   # one folder per UI section + ui/ primitives
  data/         # site, menu, reviews, signatures, gallery, events content
  hooks/        # lenis, media-query, active-section, cursor
  styles/       # tokens.css (palette/type), global.css
public/assets/  # logo, hero video, food/ambience/menu imagery
```

All content is data-driven — edit files in `src/data/` to update copy, menu, events, etc.
