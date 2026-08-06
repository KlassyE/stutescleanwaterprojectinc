import { ArrowRight, Phone } from 'lucide-react'
import { PHONE_DISPLAY, PHONE_LINK } from '../site-data'

interface SupportBannerProps {
  kicker?: string
  title?: string
  accent?: string
}

export function SupportBanner({
  kicker = 'Be part of the next delivery',
  title = 'Help clean water',
  accent = ' reach another school.',
}: SupportBannerProps) {
  return (
    <section className="support section">
      <div className="support-rings" aria-hidden="true" />
      <div className="section-inner support-inner" data-reveal>
        <p className="kicker">{kicker}</p>
        <h2>
          {title}
          <em>{accent}</em>
        </h2>
        <p>
          Get in touch for current donation options, partnerships, or ways to
          support clean-water work in Uganda.
        </p>
        <div className="support-actions">
          <a className="button button-light" href="/contact/">
            Contact and support
            <ArrowRight size={18} aria-hidden="true" />
          </a>
          <a className="support-phone" href={`tel:${PHONE_LINK}`}>
            <Phone size={18} aria-hidden="true" />
            {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </section>
  )
}
