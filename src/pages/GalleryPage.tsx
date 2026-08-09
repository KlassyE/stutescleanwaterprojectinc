import { ArrowRight, Facebook } from 'lucide-react'
import { GalleryLightbox } from '../components/GalleryLightbox'
import { PageHero } from '../components/PageHero'
import { SupportBanner } from '../components/SupportBanner'
import { FACEBOOK_URL, galleryGroups, galleryItems, images } from '../site-data'

export function GalleryPage() {
  return (
    <>
      <PageHero
        index="03"
        eyebrow="Project gallery · Uganda"
        title="The work,"
        accent=" in full view."
        intro="Every photograph on this site comes from Stutes Clean Water Project’s own Facebook page—real school visits, real equipment, and real moments from the field."
        image={images.galleryHero}
        imageAlt="Smiling students and a project representative gathered in front of a Stutes Clean Water Project banner"
        imageLabel="Together after a school visit"
        tone="deep"
      >
        <a className="button button-light" href="#field-gallery">
          Open the gallery <ArrowRight aria-hidden="true" />
        </a>
      </PageHero>

      <section className="gallery-page-section section" id="field-gallery">
        <div className="section-inner">
          <div className="gallery-page-heading" data-reveal>
            <div>
              <p className="kicker">
                {galleryItems.length} photographs · Four field collections
              </p>
              <h2>Scenes from the field.</h2>
            </div>
            <p>
              Browse school visits, purifier deliveries, field journeys, and community
              moments. Select any image to open its larger version.
            </p>
          </div>
          {galleryGroups.map((group) => (
            <section
              className="gallery-collection"
              key={group.id}
              aria-labelledby={`${group.id}-gallery-heading`}
              data-reveal
            >
              <div className="gallery-collection-heading">
                <p className="kicker">{group.items.length} photographs</p>
                <h3 id={`${group.id}-gallery-heading`}>{group.title}</h3>
                <p>{group.intro}</p>
              </div>
              <GalleryLightbox items={group.items} className="gallery-page-grid" />
            </section>
          ))}
        </div>
      </section>

      <section className="photo-provenance section">
        <div className="section-inner provenance-grid" data-reveal>
          <span className="provenance-mark">
            <Facebook aria-hidden="true" />
          </span>
          <div>
            <p className="kicker">Photo provenance</p>
            <h2>Organization-owned moments. No stock library.</h2>
          </div>
          <div>
            <p>
              The local image files used throughout this website were downloaded
              directly from the organization’s Facebook-hosted photographs.
            </p>
            <a
              className="section-arrow-link"
              href={FACEBOOK_URL}
              target="_blank"
              rel="noreferrer"
            >
              View the Facebook page <ArrowRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <SupportBanner />
    </>
  )
}
