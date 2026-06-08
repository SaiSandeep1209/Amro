import { asset, navLinks, site } from '../../data/site'
import { scrollToId } from '../../hooks/useLenis'
import './Footer.css'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer__top">
        <div className="footer__brand">
          <span className="footer__logo-wrap">
            <img src={asset('logo.png')} alt="Amro Cafe" className="footer__logo" />
          </span>
          <p className="footer__tagline">{site.tagline}</p>
        </div>

        <nav className="footer__nav" aria-label="Footer">
          {navLinks.map((l) => (
            <button key={l.id} onClick={() => scrollToId(l.id)}>
              {l.label}
            </button>
          ))}
        </nav>

        <div className="footer__contact">
          <a href={site.phoneHref}>{site.phone}</a>
          <a href={site.instagramUrl} target="_blank" rel="noreferrer">
            {site.instagram}
          </a>
          <a href={site.mapsUrl} target="_blank" rel="noreferrer">
            {site.location}
          </a>
        </div>
      </div>

      <div className="footer__cinematic" aria-hidden>
        AMRO
      </div>

      <div className="container footer__bottom">
        <span>© {year} Amro Cafe. All rights reserved.</span>
        <span>Crafted in Gachibowli, Hyderabad.</span>
      </div>
    </footer>
  )
}
