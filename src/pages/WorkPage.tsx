import {
  ArrowRight,
  CheckCircle2,
  Droplets,
  School,
  UsersRound,
  Waves,
} from 'lucide-react'
import { PageHero } from '../components/PageHero'
import { SupportBanner } from '../components/SupportBanner'
import { images } from '../site-data'

const processSteps = [
  {
    number: '01',
    title: 'Start close to community',
    text: 'Needs are understood through the schools and communities where safe water access is most urgent.',
  },
  {
    number: '02',
    title: 'Prepare a practical system',
    text: 'Purifier tanks and filtration equipment are selected for straightforward use in a school setting.',
  },
  {
    number: '03',
    title: 'Deliver and demonstrate',
    text: 'Field delivery is paired with a practical demonstration so the system and its purpose are understood.',
  },
  {
    number: '04',
    title: 'Keep knowledge local',
    text: 'Safe-water habits and local stewardship help each installation continue serving beyond delivery day.',
  },
]

export function WorkPage() {
  return (
    <>
      <PageHero
        index="01"
        eyebrow="Our work · Uganda"
        title="Water systems that"
        accent=" communities can own."
        intro="Stutes Clean Water Project brings practical purification equipment, school-first delivery, and safe-water learning together in one local approach."
        image={images.workHero}
        imageAlt="Katuura Johnson leading a safe-water demonstration with students"
        imageLabel="Katuura Johnson in the field"
      >
        <a className="button button-primary" href="#programs">
          See the approach <ArrowRight aria-hidden="true" />
        </a>
      </PageHero>

      <section className="programs-section section" id="programs">
        <div className="section-inner">
          <div className="section-heading-row" data-reveal>
            <div>
              <p className="kicker">Three connected priorities</p>
              <h2>Equipment is only the beginning.</h2>
            </div>
            <p>
              The strongest outcome comes when a useful water system, a place of
              learning, and practical knowledge all meet.
            </p>
          </div>
          <div className="program-grid">
            <article className="program-card program-card-featured" data-reveal>
              <span className="program-number">01</span>
              <Droplets aria-hidden="true" />
              <h3>Safe water systems</h3>
              <p>
                Purifier tanks and filtration systems create a practical source of
                safer drinking water where access is limited.
              </p>
              <img
                src={images.schoolDelivery}
                alt="A large school community gathered around a newly delivered blue water purifier"
                loading="lazy"
              />
            </article>
            <article className="program-card" data-reveal>
              <span className="program-number">02</span>
              <School aria-hidden="true" />
              <h3>Schools first</h3>
              <p>
                School placements support healthier learning environments and reach
                children where safe water matters every day.
              </p>
            </article>
            <article className="program-card program-card-mist" data-reveal>
              <span className="program-number">03</span>
              <UsersRound aria-hidden="true" />
              <h3>WASH education</h3>
              <p>
                Demonstrations and sensitization connect the equipment to daily
                habits, understanding, and local care.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="process-section section">
        <div className="section-inner process-layout">
          <div className="process-intro" data-reveal>
            <p className="kicker">How a delivery moves</p>
            <h2>From first need to shared stewardship.</h2>
            <Waves aria-hidden="true" />
          </div>
          <ol className="process-list">
            {processSteps.map((step) => (
              <li key={step.number} data-reveal>
                <span>{step.number}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="field-proof section">
        <div className="section-inner field-proof-grid">
          <figure className="field-proof-image" data-reveal>
            <img
              src={images.communityThanks}
              alt="Children holding a thank-you sign beside a water purifier at a community health center"
              loading="lazy"
            />
            <figcaption>Shared publicly from a community health center</figcaption>
          </figure>
          <div className="field-proof-copy" data-reveal>
            <p className="kicker">A visible chain of action</p>
            <h2>Communities are the story—not a backdrop.</h2>
            <p>
              Photographs from deliveries and demonstrations show the equipment,
              the learning environment, and the people who receive and care for each
              system.
            </p>
            <ul>
              <li>
                <CheckCircle2 aria-hidden="true" />
                Real project photography from the organization’s Facebook updates
              </li>
              <li>
                <CheckCircle2 aria-hidden="true" />
                School and community settings shown directly from the field
              </li>
              <li>
                <CheckCircle2 aria-hidden="true" />
                Public updates that help supporters follow the work
              </li>
            </ul>
            <a className="section-arrow-link" href="/gallery/">
              View the field gallery <ArrowRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <SupportBanner />
    </>
  )
}
