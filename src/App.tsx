import { Suspense, lazy, useState } from 'react'
import { Loader } from './components/Loader/Loader'
import { Navbar } from './components/Navbar/Navbar'
import { AmbientLayer } from './components/AmbientLayer/AmbientLayer'
import { Hero } from './components/Hero/Hero'
import { CursorProvider } from './hooks/useCursor'
import { useLenis } from './hooks/useLenis'

// Below-the-fold sections are code-split for faster first paint.
const About = lazy(() =>
  import('./components/About/About').then((m) => ({ default: m.About })),
)
const Gallery = lazy(() =>
  import('./components/Gallery/Gallery').then((m) => ({ default: m.Gallery })),
)
const SignaturePicks = lazy(() =>
  import('./components/SignaturePicks/SignaturePicks').then((m) => ({
    default: m.SignaturePicks,
  })),
)
const Menu = lazy(() =>
  import('./components/Menu/Menu').then((m) => ({ default: m.Menu })),
)
const Reviews = lazy(() =>
  import('./components/Reviews/Reviews').then((m) => ({ default: m.Reviews })),
)
const Events = lazy(() =>
  import('./components/Events/Events').then((m) => ({ default: m.Events })),
)
const Contact = lazy(() =>
  import('./components/Contact/Contact').then((m) => ({ default: m.Contact })),
)
const Footer = lazy(() =>
  import('./components/Footer/Footer').then((m) => ({ default: m.Footer })),
)

export default function App() {
  const [loaded, setLoaded] = useState(false)
  useLenis(loaded)

  return (
    <CursorProvider>
      <Loader onComplete={() => setLoaded(true)} />
      <AmbientLayer />

      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={null}>
          <About />
          <Gallery />
          <SignaturePicks />
          <Menu />
          <Reviews />
          <Events />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </CursorProvider>
  )
}
