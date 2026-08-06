import { useEffect, useState } from 'react'
import { ArrowRight, ArrowUpRight, Menu, X } from 'lucide-react'
import { navItems } from '../site-data'
import { BrandMark } from './BrandMark'

interface SiteHeaderProps {
  currentPath: string
  tone?: 'dark' | 'light'
}

export function SiteHeader({ currentPath, tone = 'dark' }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    document.addEventListener('keydown', closeOnEscape)
    document.body.classList.toggle('menu-open', menuOpen)
    return () => {
      document.removeEventListener('keydown', closeOnEscape)
      document.body.classList.remove('menu-open')
    }
  }, [menuOpen])

  return (
    <header
      className={`site-header page-site-header site-header-${tone} ${menuOpen ? 'menu-active' : ''}`}
    >
      <div className="header-inner">
        <a className="brand" href="/" aria-label="Stutes Clean Water Project home">
          <BrandMark />
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={currentPath === item.href ? 'page' : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          className="header-cta"
          href="/contact/"
          aria-current={currentPath === '/contact/' ? 'page' : undefined}
        >
          Contact & support
          <ArrowUpRight size={16} aria-hidden="true" />
        </a>

        <button
          className="menu-button"
          type="button"
          aria-controls="mobile-navigation"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      <div
        className={`mobile-navigation ${menuOpen ? 'is-open' : ''}`}
        id="mobile-navigation"
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Mobile navigation">
          <span className="mobile-menu-label">Explore</span>
          {navItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={currentPath === item.href ? 'page' : undefined}
              onClick={() => setMenuOpen(false)}
            >
              <span>0{index + 1}</span>
              {item.label}
              <ArrowRight aria-hidden="true" />
            </a>
          ))}
          <a
            className="mobile-support-link"
            href="/contact/"
            aria-current={currentPath === '/contact/' ? 'page' : undefined}
            onClick={() => setMenuOpen(false)}
          >
            Contact & support
            <ArrowUpRight aria-hidden="true" />
          </a>
        </nav>
      </div>
    </header>
  )
}
