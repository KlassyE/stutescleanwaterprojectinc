import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  ShieldCheck,
  Waves,
} from 'lucide-react'
import { PageHero } from '../components/PageHero'
import { SupportBanner } from '../components/SupportBanner'
import { US_ADDRESS, images } from '../site-data'

export function AboutPage() {
  return (
    <>
      <PageHero
        index="04"
        eyebrow="About Stutes · One shared mission"
        title="Locally rooted."
        accent=" Accountably structured."
        intro="The work is led close to the Ugandan communities it serves and supported by a registered nonprofit home in the United States."
        image={images.aboutHero}
        imageAlt="Students in green uniforms drawing water from a stainless steel purifier"
        imageLabel="Clean water in use"
        tone="white"
      >
        <a className="button button-primary" href="#organization">
          Understand the organization <ArrowRight aria-hidden="true" />
        </a>
      </PageHero>

      <section className="about-mission section" id="organization">
        <div className="section-inner mission-grid">
          <div className="section-marker" data-reveal>
            <span>01</span>
            <i />
            <span>Purpose</span>
          </div>
          <div className="mission-heading" data-reveal>
            <p className="kicker">The public mission</p>
            <h2>
              Safer water for vulnerable
              <em> rural communities.</em>
            </h2>
          </div>
          <div className="mission-copy" data-reveal>
            <p className="lead-copy">
              Stutes Clean Water Project is focused on improving access to clean and
              safe water in vulnerable rural communities of Uganda.
            </p>
            <p>
              School-based purifier deliveries and safe-water demonstrations place
              practical action at the center of that mission.
            </p>
            <div className="mission-signoff">
              <Waves aria-hidden="true" />
              <span>Water access. Healthier schools. Community knowledge.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="organization-structure section">
        <div className="section-inner structure-grid">
          <div className="structure-heading" data-reveal>
            <p className="kicker">One mission · Two homes</p>
            <h2>Field leadership and nonprofit support.</h2>
          </div>
          <article className="structure-card structure-card-blue" data-reveal>
            <MapPin aria-hidden="true" />
            <span>Uganda operations</span>
            <h3>Kampala, Uganda</h3>
            <p>
              Leadership close to the communities, schools, and day-to-day field
              activity at the center of the mission.
            </p>
          </article>
          <article className="structure-card" data-reveal>
            <ShieldCheck aria-hidden="true" />
            <span>US nonprofit home</span>
            <h3>Gray Court, South Carolina</h3>
            <p>{US_ADDRESS}</p>
          </article>
        </div>
      </section>

      <section className="registration-section section">
        <div className="section-inner registration-layout">
          <div className="registration-copy" data-reveal>
            <p className="kicker">Public registration</p>
            <h2>Built for accountable support.</h2>
            <p>
              Stutes Clean Water Project Inc. received federal tax-exempt recognition
              in 2022 and is identified as a US 501(c)(3) charitable organization.
            </p>
            <a className="section-arrow-link" href="/contact/">
              Ask about supporting the work <ArrowRight aria-hidden="true" />
            </a>
          </div>
          <div className="registration-panel" data-reveal>
            <span className="registration-year">2022</span>
            <div>
              <CheckCircle2 aria-hidden="true" />
              <p>
                <strong>Registered 501(c)(3)</strong>
                <span>Federal tax-exempt recognition</span>
              </p>
            </div>
            <div>
              <CheckCircle2 aria-hidden="true" />
              <p>
                <strong>EIN 87-4575994</strong>
                <span>Donations are tax deductible in the United States</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="team-teaser section">
        <div className="section-inner team-teaser-grid">
          <div className="team-teaser-image" data-reveal>
            <img
              src={images.teamField}
              alt="A field representative standing between two water purification systems"
              loading="lazy"
            />
          </div>
          <div className="team-teaser-copy" data-reveal>
            <p className="kicker">The people behind the mission</p>
            <h2>Founders, leadership, and operations.</h2>
            <p>
              Meet the four people currently identified as the organization’s
              founders and operating leadership.
            </p>
            <a className="button button-primary" href="/team/">
              Meet the team <ArrowRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <SupportBanner />
    </>
  )
}
