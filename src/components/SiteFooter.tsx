import { ArrowUpRight, Facebook, Mail, MapPin, Phone } from 'lucide-react'
import {
  EMAIL,
  FACEBOOK_URL,
  PHONE_DISPLAY,
  PHONE_LINK,
} from '../site-data'
import { BrandMark } from './BrandMark'

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main footer-main-multipage">
        <div className="footer-brand">
          <a
            className="brand brand-footer"
            href="/"
            aria-label="Stutes Clean Water Project home"
          >
            <BrandMark />
          </a>
          <p>
            Improving access to clean and safe water in vulnerable rural
            communities of Uganda.
          </p>
        </div>

        <div className="footer-column">
          <h3>Explore</h3>
          <a href="/work/">Our work</a>
          <a href="/stories/">Stories</a>
          <a href="/gallery/">Gallery</a>
        </div>

        <div className="footer-column">
          <h3>Organization</h3>
          <a href="/about/">About</a>
          <a href="/team/">Team</a>
          <a href="/contact/">Contact & support</a>
        </div>

        <div className="footer-column footer-contact">
          <h3>Get in touch</h3>
          <a href={`mailto:${EMAIL}`}>
            <Mail aria-hidden="true" />
            <span>{EMAIL}</span>
          </a>
          <a href={`tel:${PHONE_LINK}`}>
            <Phone aria-hidden="true" />
            <span>{PHONE_DISPLAY}</span>
          </a>
          <span>
            <MapPin aria-hidden="true" />
            <span>Kampala, Uganda</span>
          </span>
          <a href={FACEBOOK_URL} target="_blank" rel="noreferrer">
            <Facebook aria-hidden="true" />
            <span>Facebook</span>
            <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Stutes Clean Water Project Inc.</span>
        <span>501(c)(3) · EIN 87-4575994</span>
        <a href="/">Home ↑</a>
      </div>
    </footer>
  )
}
