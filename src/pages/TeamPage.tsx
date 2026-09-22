import { ArrowRight, Network, UsersRound } from 'lucide-react'
import { PageHero } from '../components/PageHero'
import { SupportBanner } from '../components/SupportBanner'
import { images, teamMembers } from '../site-data'

export function TeamPage() {
  return (
    <>
      <PageHero
        index="05"
        eyebrow="Our team · Shared responsibility"
        title="People who keep"
        accent=" the mission moving."
        intro="Founding vision, executive direction, and field operations come together around one goal: safer water access for Ugandan communities."
        image={images.teamField}
        imageAlt="Kabunga Justus with students and water purification systems in the field"
        imageLabel="Kabunga Justus in the field"
      >
        <a className="button button-primary" href="#team-roster">
          Meet the team <ArrowRight aria-hidden="true" />
        </a>
      </PageHero>

      <section className="team-intro section">
        <div className="section-inner team-intro-grid">
          <div data-reveal>
            <p className="kicker">The leadership roster</p>
            <h2>Three roles. One clean-water mission.</h2>
          </div>
          <div data-reveal>
            <p className="lead-copy">
              Founding vision and executive direction work together to keep
              clean-water access moving forward.
            </p>
          </div>
        </div>
      </section>

      <section className="team-roster section" id="team-roster">
        <div className="section-inner team-grid">
          {teamMembers.map((member, index) => (
            <article className="team-card" key={member.name} data-reveal>
              <figure className="team-photo">
                <img src={member.image} alt={member.imageAlt} loading="lazy" />
                <span className="team-placeholder-number" aria-hidden="true">
                  0{index + 1}
                </span>
              </figure>
              <div className="team-card-copy">
                <p>{member.role}</p>
                <h2>{member.name}</h2>
                <span>{member.description}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="team-roles section">
        <div className="section-inner team-roles-grid">
          <div className="team-roles-heading" data-reveal>
            <p className="kicker">How leadership connects</p>
            <h2>Vision, direction, and delivery.</h2>
          </div>
          <article data-reveal>
            <UsersRound aria-hidden="true" />
            <span>Founding stewardship</span>
            <h3>Tony Stutes & Sandy Stutes</h3>
            <p>
              The founders hold the organization’s long-term mission and support
              relationships at the center.
            </p>
          </article>
          <article data-reveal>
            <Network aria-hidden="true" />
            <span>Uganda leadership</span>
            <h3>Kabunga Justus</h3>
            <p>
              Executive direction connects the mission to practical field activity in Uganda.
            </p>
          </article>
        </div>
      </section>

      <SupportBanner kicker="Stand with the team" title="Help the mission" accent=" keep moving." />
    </>
  )
}
