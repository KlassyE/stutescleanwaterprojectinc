import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { PageHero } from '../components/PageHero'
import { SupportBanner } from '../components/SupportBanner'
import { FACEBOOK_URL, images } from '../site-data'

const storyCards = [
  {
    label: 'Community health',
    title: 'A thank-you carried by the community.',
    text: 'Children gathered beside a new purifier and shared a handwritten thank-you with the project.',
    image: images.communityThanks,
    alt: 'Children holding a thank-you sign beside a purifier at a community health center',
  },
  {
    label: 'School delivery',
    title: 'A purifier arrives where children learn.',
    text: 'A school community gathered around new filtration equipment as clean-water access moved closer to the classroom.',
    image: images.contactHero,
    alt: 'Children gathered with two project representatives between stainless steel purifiers',
  },
  {
    label: 'Preparing the work',
    title: 'Every delivery starts with preparation.',
    text: 'Two systems ready beside Kabunga Justus show the practical preparation behind a community visit.',
    image: images.teamField,
    alt: 'Kabunga Justus standing beside water purification systems in the field',
  },
]

export function StoriesPage() {
  return (
    <>
      <PageHero
        index="02"
        eyebrow="Field stories · Public updates"
        title="The people behind"
        accent=" every delivery."
        intro="The organization’s Facebook updates keep schools, demonstrations, equipment, and community moments visible as the work moves forward."
        image={images.storiesHero}
        imageAlt="Katuura Johnson demonstrating safe-water practices with students"
        imageLabel="Katuura Johnson in the field"
        tone="deep"
        layout="cinematic"
      >
        <a className="button button-light" href="#featured-story">
          Read the featured story <ArrowRight aria-hidden="true" />
        </a>
      </PageHero>

      <section className="editorial-story section" id="featured-story">
        <div className="section-inner editorial-story-grid">
          <figure data-reveal>
            <img
              src={images.mukonoSchoolDelivery}
              alt="Students watching a water purification demonstration in Mukono"
              loading="lazy"
            />
            <figcaption>
              <span>Field note 01</span>
              <strong>Kiggunga village · Mukono</strong>
            </figcaption>
          </figure>
          <article data-reveal>
            <p className="kicker">May 5 · From the field</p>
            <h2>A healthier place to learn.</h2>
            <p className="story-deck">
              Stutes Clean Water Project shared an update from Mukono after a school
              in Kiggunga village received a water purifier tank.
            </p>
            <p>
              The delivery represented another step toward safer drinking water and
              a healthier learning environment. Students gathered for the moment,
              connecting the new system with the people it was there to serve.
            </p>
            <blockquote>“Every drop counts. Every child matters.”</blockquote>
            <a
              className="section-arrow-link"
              href={FACEBOOK_URL}
              target="_blank"
              rel="noreferrer"
            >
              Follow the original field updates <ArrowUpRight aria-hidden="true" />
            </a>
          </article>
        </div>
      </section>

      <section className="story-archive section">
        <div className="section-inner">
          <div className="section-heading-row" data-reveal>
            <div>
              <p className="kicker">More moments</p>
              <h2>One mission, many field notes.</h2>
            </div>
            <p>
              These photographs and summaries are drawn from public project updates
              shared by Stutes Clean Water Project.
            </p>
          </div>
          <div className="story-card-grid">
            {storyCards.map((story, index) => (
              <article className="story-card" key={story.title} data-reveal>
                <div className="story-card-image">
                  <img src={story.image} alt={story.alt} loading="lazy" />
                  <span>0{index + 2}</span>
                </div>
                <p className="kicker">{story.label}</p>
                <h3>{story.title}</h3>
                <p>{story.text}</p>
              </article>
            ))}
          </div>
          <div className="facebook-update-band" data-reveal>
            <div>
              <span>For the newest updates</span>
              <strong>Continue the story on Facebook.</strong>
            </div>
            <a href={FACEBOOK_URL} target="_blank" rel="noreferrer">
              Open Facebook <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <SupportBanner kicker="Help write the next field note" />
    </>
  )
}
