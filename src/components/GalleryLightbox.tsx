import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react'
import type { GalleryItem } from '../site-data'

interface GalleryLightboxProps {
  items: readonly GalleryItem[]
  className?: string
  initialCount?: number
  batchSize?: number
}

export function GalleryLightbox({
  items,
  className = 'gallery-grid',
  initialCount = 24,
  batchSize = 24,
}: GalleryLightboxProps) {
  const [active, setActive] = useState<number | null>(null)
  const [visibleCount, setVisibleCount] = useState(() =>
    Math.min(initialCount, items.length),
  )
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const dialogRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    if (active === null) {
      triggerRef.current?.focus()
      return
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        setActive(null)
      }
      if (event.key === 'ArrowRight') {
        event.preventDefault()
        setActive((index) =>
          index === null ? null : (index + 1) % items.length,
        )
      }
      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        setActive((index) =>
          index === null ? null : (index - 1 + items.length) % items.length,
        )
      }
      if (event.key === 'Tab') {
        const focusable = Array.from(
          dialogRef.current?.querySelectorAll<HTMLButtonElement>('button') ?? [],
        )
        const first = focusable.at(0)
        const last = focusable.at(-1)

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last?.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first?.focus()
        }
      }
    }

    document.addEventListener('keydown', onKeyDown)
    document.body.classList.add('lightbox-open')
    closeButtonRef.current?.focus()
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.classList.remove('lightbox-open')
    }
  }, [active, items.length])

  const activeItem = active === null ? null : items[active]
  const visibleItems = items.slice(0, visibleCount)
  const hasMore = visibleCount < items.length

  const openLightbox = (index: number, trigger: HTMLButtonElement) => {
    triggerRef.current = trigger
    setActive(index)
  }

  return (
    <>
      <div className={className}>
        {visibleItems.map((item, index) => (
          <button
            className={`gallery-item gallery-item-${index + 1}`}
            key={item.archiveIndex}
            type="button"
            onClick={(event) => openLightbox(index, event.currentTarget)}
            aria-label={`Open photograph ${index + 1} of ${items.length}: ${item.caption}`}
          >
            <img
              src={item.thumbnailSrc}
              alt={item.alt}
              width="640"
              height="480"
              loading="lazy"
              decoding="async"
            />
            <span className="gallery-overlay" aria-hidden="true">
              <span>{String(item.archiveIndex).padStart(3, '0')}</span>
              <span className="gallery-caption">{item.caption}</span>
              <ZoomIn size={20} aria-hidden="true" />
            </span>
          </button>
        ))}
      </div>

      <div className="gallery-progress">
        <p aria-live="polite">
          Showing {visibleItems.length} of {items.length} photographs
        </p>
        {hasMore && (
          <button
            className="gallery-load-button"
            type="button"
            onClick={() =>
              setVisibleCount((count) => Math.min(count + batchSize, items.length))
            }
          >
            Load more photographs
            <span aria-hidden="true">
              +{Math.min(batchSize, items.length - visibleCount)}
            </span>
          </button>
        )}
      </div>

      {activeItem && active !== null &&
        createPortal(
          <div
            ref={dialogRef}
            className="lightbox"
            role="dialog"
            aria-modal="true"
            aria-label="Expanded project photo"
            onMouseDown={(event) => {
              if (event.currentTarget === event.target) setActive(null)
            }}
          >
            <button
              ref={closeButtonRef}
              className="lightbox-close"
              type="button"
              aria-label="Close expanded image"
              onClick={() => setActive(null)}
            >
              <X aria-hidden="true" />
            </button>
            <figure>
              <img src={activeItem.src} alt={activeItem.alt} decoding="async" />
              <figcaption>
                {activeItem.caption}
                <span>
                  Archive photograph {String(activeItem.archiveIndex).padStart(3, '0')}
                </span>
              </figcaption>
            </figure>
            <button
              className="lightbox-nav lightbox-prev"
              type="button"
              aria-label="View previous photograph"
              onClick={() =>
                setActive((active - 1 + items.length) % items.length)
              }
            >
              <ChevronLeft aria-hidden="true" />
            </button>
            <button
              className="lightbox-nav lightbox-next"
              type="button"
              aria-label="View next photograph"
              onClick={() => setActive((active + 1) % items.length)}
            >
              <ChevronRight aria-hidden="true" />
            </button>
            <span className="lightbox-counter" aria-live="polite">
              {active + 1} of {items.length}
            </span>
          </div>,
          document.body,
        )}
    </>
  )
}
