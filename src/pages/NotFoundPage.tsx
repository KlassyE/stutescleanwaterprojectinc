import { ArrowLeft } from 'lucide-react'

export function NotFoundPage() {
  return (
    <section className="not-found-page">
      <div className="section-inner" data-reveal>
        <span>404</span>
        <p className="kicker">Page not found</p>
        <h1>
          This path has
          <em> run dry.</em>
        </h1>
        <p>The page may have moved, but the clean-water mission is still here.</p>
        <a className="button button-primary" href="/">
          <ArrowLeft aria-hidden="true" /> Return home
        </a>
      </div>
    </section>
  )
}
