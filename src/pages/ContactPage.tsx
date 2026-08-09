import {
  ArrowRight,
  ArrowUpRight,
  Facebook,
  HandHeart,
  Handshake,
  Mail,
  MapPin,
  Phone,
  Share2,
} from 'lucide-react'
import { PageHero } from '../components/PageHero'
import {
  EMAIL,
  FACEBOOK_URL,
  PHONE_DISPLAY,
  PHONE_LINK,
  US_PHONE_DISPLAY,
  US_PHONE_LINK,
  US_ADDRESS,
  images,
} from '../site-data'

export function ContactPage() {
  return (
    <>
      <PageHero
        index="06"
        eyebrow="Contact & support · Start a conversation"
        title="Help the next system"
        accent=" reach a school."
        intro="For current donation options, partnership ideas, or questions about the work in Uganda, contact Stutes Clean Water Project directly."
        image={images.contactHero}
        imageAlt="Children and two project representatives gathered between stainless steel water purifiers"
        imageLabel="A school community"
        tone="deep"
      >
        <a
          className="button button-light"
          href={`mailto:${EMAIL}?subject=Supporting%20Stutes%20Clean%20Water%20Project`}
        >
          Send an email <ArrowUpRight aria-hidden="true" />
        </a>
      </PageHero>

      <section className="contact-options section">
        <div className="section-inner">
          <div className="contact-heading" data-reveal>
            <p className="kicker">Direct contact</p>
            <h2>Choose the channel that works for you.</h2>
          </div>
          <div className="contact-card-grid">
            <a className="contact-card contact-card-blue" href={`mailto:${EMAIL}`} data-reveal>
              <Mail aria-hidden="true" />
              <span>Email</span>
              <strong>{EMAIL}</strong>
              <ArrowUpRight aria-hidden="true" />
            </a>
            <a className="contact-card" href={`tel:${PHONE_LINK}`} data-reveal>
              <Phone aria-hidden="true" />
              <span>Uganda phone</span>
              <strong>{PHONE_DISPLAY}</strong>
              <ArrowUpRight aria-hidden="true" />
            </a>
            <a className="contact-card" href={`tel:${US_PHONE_LINK}`} data-reveal>
              <Phone aria-hidden="true" />
              <span>US phone</span>
              <strong>{US_PHONE_DISPLAY}</strong>
              <ArrowUpRight aria-hidden="true" />
            </a>
            <a
              className="contact-card contact-card-dark"
              href={FACEBOOK_URL}
              target="_blank"
              rel="noreferrer"
              data-reveal
            >
              <Facebook aria-hidden="true" />
              <span>Field updates</span>
              <strong>Facebook</strong>
              <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section className="support-paths section">
        <div className="section-inner support-paths-grid">
          <div className="support-paths-heading" data-reveal>
            <p className="kicker">Ways to begin</p>
            <h2>Support can take more than one form.</h2>
            <p>
              Contact the organization before sending funds or equipment so the
              current priorities and approved donation options can be confirmed.
            </p>
          </div>
          <article data-reveal>
            <HandHeart aria-hidden="true" />
            <span>01</span>
            <h3>Give</h3>
            <p>Ask for current donation methods and the projects now seeking support.</p>
          </article>
          <article data-reveal>
            <Handshake aria-hidden="true" />
            <span>02</span>
            <h3>Partner</h3>
            <p>Start a conversation about schools, equipment, or long-term collaboration.</p>
          </article>
          <article data-reveal>
            <Share2 aria-hidden="true" />
            <span>03</span>
            <h3>Share</h3>
            <p>Follow the public field updates and help more people discover the mission.</p>
          </article>
        </div>
      </section>

      <section className="location-section section">
        <div className="section-inner location-grid">
          <div className="location-image" data-reveal>
            <img
              src={images.contactLocation}
              alt="Health-center staff and project representatives beside two water purifiers"
              loading="lazy"
            />
          </div>
          <div className="location-copy" data-reveal>
            <p className="kicker">One mission · Two locations</p>
            <h2>Uganda operations. US nonprofit home.</h2>
            <div className="location-detail">
              <MapPin aria-hidden="true" />
              <div>
                <strong>Kampala, Uganda</strong>
                <span>Field operations and community activity</span>
              </div>
            </div>
            <div className="location-detail">
              <MapPin aria-hidden="true" />
              <div>
                <strong>{US_ADDRESS}</strong>
                <span>US nonprofit address</span>
              </div>
            </div>
            <a className="section-arrow-link" href="/about/">
              Read about the organization <ArrowRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
