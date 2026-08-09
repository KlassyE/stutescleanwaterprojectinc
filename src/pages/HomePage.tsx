import {
  ArrowRight,
  ArrowUpRight,
  Droplets,
  MapPin,
  School,
  ShieldCheck,
  UsersRound,
  Waves,
} from 'lucide-react'
import { SupportBanner } from '../components/SupportBanner'
import { FACEBOOK_URL, images } from '../site-data'

export function HomePage() {
  return (
    <>
      <section className="hero" id="top">
        <div className="hero-watermark" aria-hidden="true">
          <span>WATER</span>
        </div>
        <div className="hero-inner">
          <div className="hero-copy" data-reveal>
            <div className="eyebrow">
              <span className="eyebrow-dot" aria-hidden="true" />
              Uganda · Community-led action
            </div>
            <h1>
              Clean water.
              <em>Stronger futures.</em>
            </h1>
            <p>
              We help vulnerable rural communities in Uganda gain access to clean,
              safe water—starting with the schools where brighter futures begin.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="/work/">
                Explore our work
                <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a
                className="text-link"
                href={FACEBOOK_URL}
                target="_blank"
                rel="noreferrer"
              >
                Follow field updates
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </div>
            <div className="hero-trust" aria-label="Organization highlights">
              <div>
                <ShieldCheck aria-hidden="true" />
                <span>
                  <strong>501(c)(3)</strong>
                  US registered nonprofit
                </span>
              </div>
              <div>
                <MapPin aria-hidden="true" />
                <span>
                  <strong>Uganda-led</strong>
                  Kampala field team
                </span>
              </div>
            </div>
          </div>

          <div className="hero-visual" data-reveal>
            <div className="hero-photo-frame">
              <img
                src={images.homeHero}
                alt="Katuura Johnson demonstrating a water purifier to students in Uganda"
                fetchPriority="high"
              />
            </div>
            <div className="hero-note">
              <span className="note-number">01</span>
              <p>
                Water that is safe to drink. Knowledge that lasts. Local action that
                keeps flowing.
              </p>
            </div>
            <div className="hero-orbit" aria-hidden="true">
              <span>Every drop counts · Every child matters · </span>
            </div>
          </div>
        </div>
      </section>

      <section className="mission section">
        <div className="section-inner mission-grid">
          <div className="section-marker" data-reveal>
            <span>01</span>
            <i />
            <span>Our mission</span>
          </div>
          <div className="mission-heading" data-reveal>
            <p className="kicker">Water changes everything</p>
            <h2>
              A basic need should never be an
              <em> impossible journey.</em>
            </h2>
          </div>
          <div className="mission-copy" data-reveal>
            <p className="lead-copy">
              Stutes Clean Water Project Inc. is focused on improving access to
              clean and safe water in vulnerable rural communities of Uganda.
            </p>
            <p>
              The work brings practical water purification systems into schools,
              pairs them with safe-water knowledge, and keeps communities visible
              through updates from the field.
            </p>
            <div className="mission-signoff">
              <Waves aria-hidden="true" />
              <span>Practical systems. Local stewardship. Lasting change.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="work section">
        <div className="section-inner">
          <div className="section-heading-row" data-reveal>
            <div>
              <p className="kicker">How the work flows</p>
              <h2>From access to ownership.</h2>
            </div>
            <div className="heading-side-copy">
              <p>
                Clean water lasts when technology, knowledge, and community move
                forward together.
              </p>
              <a className="section-arrow-link" href="/work/">
                See the full approach <ArrowRight aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="work-grid">
            <article className="work-card work-card-featured" data-reveal>
              <div className="work-card-icon">
                <Droplets aria-hidden="true" />
              </div>
              <span className="card-number">01</span>
              <div>
                <h3>Safe water systems</h3>
                <p>
                  Practical purifier tanks and filtration systems for places where
                  safe drinking water is hardest to reach.
                </p>
              </div>
              <img
                src={images.waterEducation}
                alt="A water purifier being prepared as students watch"
                loading="lazy"
              />
            </article>

            <article className="work-card" data-reveal>
              <div className="work-card-icon">
                <School aria-hidden="true" />
              </div>
              <span className="card-number">02</span>
              <div>
                <h3>Schools first</h3>
                <p>
                  Healthier learning environments with dependable access to drinking
                  water where children spend their day.
                </p>
              </div>
              <img
                src={images.schoolsFirst}
                alt="Smiling students and teachers gathered around a stainless steel water purifier"
                loading="lazy"
              />
            </article>

            <article className="work-card" data-reveal>
              <div className="work-card-icon">
                <UsersRound aria-hidden="true" />
              </div>
              <span className="card-number">03</span>
              <div>
                <h3>WASH education</h3>
                <p>
                  Demonstrations and community sensitization build habits and local
                  ownership around every installation.
                </p>
              </div>
              <img
                src={images.washEducation}
                alt="A safe-water demonstration with primary school students"
                loading="lazy"
              />
            </article>
          </div>
        </div>
      </section>

      <section className="field-story section">
        <div className="story-media" data-reveal>
          <img
            src={images.mukonoSchoolDelivery}
            alt="Students watching a water purification demonstration in Uganda"
            loading="lazy"
          />
          <div className="story-image-stamp">
            <span>Field note</span>
            <strong>05 · 05</strong>
          </div>
        </div>
        <div className="story-content" data-reveal>
          <div className="eyebrow eyebrow-dark">
            <span className="eyebrow-dot" aria-hidden="true" />
            Kiggunga village · Mukono
          </div>
          <h2>A healthier place to learn.</h2>
          <p className="story-lead">
            In May, a school in Kiggunga village received a water purifier tank—one
            more step toward safer drinking water and a healthier learning
            environment.
          </p>
          <blockquote>“Every drop counts. Every child matters.”</blockquote>
          <a className="story-link" href="/stories/">
            Read field stories
            <ArrowRight aria-hidden="true" />
          </a>
        </div>
      </section>

      <section className="impact section">
        <div className="section-inner impact-grid">
          <div className="impact-intro" data-reveal>
            <p className="kicker">Progress you can trace</p>
            <h2>Small organization. Direct action.</h2>
            <p>
              Installations and field visits are shared publicly so supporters can
              see the schools, teams, and communities behind the work.
            </p>
          </div>
          <div className="impact-stat impact-stat-blue" data-reveal>
            <span className="impact-index">A</span>
            <strong>400+</strong>
            <p>
              people receiving clean water each day from one borehole featured in
              an August 2025 project update.
            </p>
          </div>
          <div className="impact-stat impact-stat-outline" data-reveal>
            <span className="impact-index">B</span>
            <strong>2022</strong>
            <p>
              the year Stutes Clean Water Project received US federal tax-exempt
              recognition.
            </p>
          </div>
        </div>
      </section>

      <section className="home-pathways section">
        <div className="section-inner">
          <div className="pathways-heading" data-reveal>
            <p className="kicker">Explore the organization</p>
            <h2>Go deeper than one page.</h2>
          </div>
          <div className="pathway-grid">
            <a className="pathway-card pathway-card-image" href="/stories/" data-reveal>
              <img
                src={images.firstCup}
                alt="A smiling child holding a blue cup beside a stainless steel water purifier"
                loading="lazy"
              />
              <span>Stories from the field</span>
              <ArrowUpRight aria-hidden="true" />
            </a>
            <a className="pathway-card pathway-card-blue" href="/gallery/" data-reveal>
              <span className="pathway-index">02</span>
              <strong>See every project photograph in one place.</strong>
              <span>Open the gallery</span>
              <ArrowUpRight aria-hidden="true" />
            </a>
            <a className="pathway-card pathway-card-light" href="/team/" data-reveal>
              <span className="pathway-index">03</span>
              <strong>Meet the people guiding the mission.</strong>
              <span>Meet the team</span>
              <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <SupportBanner />
    </>
  )
}
