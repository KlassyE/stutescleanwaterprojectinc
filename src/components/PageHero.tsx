import type { ReactNode } from 'react'

interface PageHeroProps {
  index: string
  eyebrow: string
  title: string
  accent: string
  intro: string
  image: string
  imageAlt: string
  imageLabel: string
  tone?: 'mist' | 'white' | 'deep'
  layout?: 'split' | 'cinematic'
  children?: ReactNode
}

export function PageHero({
  index,
  eyebrow,
  title,
  accent,
  intro,
  image,
  imageAlt,
  imageLabel,
  tone = 'mist',
  layout = 'split',
  children,
}: PageHeroProps) {
  return (
    <section className={`page-hero page-hero-${tone} page-hero-${layout}`}>
      <span className="page-hero-index" aria-hidden="true">
        {index}
      </span>
      <div className="page-hero-inner">
        <div className="page-hero-copy" data-reveal>
          <div className="eyebrow">
            <span className="eyebrow-dot" aria-hidden="true" />
            {eyebrow}
          </div>
          <h1>
            {title}
            <em>{accent}</em>
          </h1>
          <p>{intro}</p>
          {children && <div className="page-hero-actions">{children}</div>}
        </div>
        <figure className="page-hero-media" data-reveal>
          <img src={image} alt={imageAlt} fetchPriority="high" />
          <figcaption>
            <span>From the field</span>
            <strong>{imageLabel}</strong>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
