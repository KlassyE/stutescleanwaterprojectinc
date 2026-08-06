import { ArrowRight, Facebook } from 'lucide-react'
import { GalleryLightbox } from '../components/GalleryLightbox'
import { PageHero } from '../components/PageHero'
import { SupportBanner } from '../components/SupportBanner'
import { FACEBOOK_URL, galleryItems, images } from '../site-data'

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
                {galleryItems.length} photographs · One public record
              </p>
              <h2>Scenes from the field.</h2>
            </div>
            <p>
              The clearest moments appear first, followed by the complete Facebook
              archive. Select any image to open its larger WebP version.
            </p>
          </div>
          <div data-reveal>
            <GalleryLightbox items={galleryItems} className="gallery-page-grid" />
          </div>
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
