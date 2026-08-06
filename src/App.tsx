import { useEffect, type ComponentType } from 'react'
import { SiteFooter } from './components/SiteFooter'
import { SiteHeader } from './components/SiteHeader'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { GalleryPage } from './pages/GalleryPage'
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'
import { StoriesPage } from './pages/StoriesPage'
import { TeamPage } from './pages/TeamPage'
import { WorkPage } from './pages/WorkPage'

interface RouteDefinition {
  component: ComponentType
  headerTone: 'dark' | 'light'
}

const routes: Record<string, RouteDefinition> = {
  '/': { component: HomePage, headerTone: 'dark' },
  '/work/': { component: WorkPage, headerTone: 'dark' },
  '/stories/': { component: StoriesPage, headerTone: 'light' },
  '/gallery/': { component: GalleryPage, headerTone: 'light' },
  '/about/': { component: AboutPage, headerTone: 'dark' },
  '/team/': { component: TeamPage, headerTone: 'dark' },
  '/contact/': { component: ContactPage, headerTone: 'light' },
}

function normalizePath(pathname: string) {
  const withoutIndex = pathname.replace(/index\.html$/i, '')
  if (withoutIndex === '' || withoutIndex === '/') return '/'
  return withoutIndex.endsWith('/') ? withoutIndex : `${withoutIndex}/`
}

function App() {
  const currentPath = normalizePath(window.location.pathname)
  const route = routes[currentPath]
  const Page = route?.component ?? NotFoundPage
  const headerTone = route?.headerTone ?? 'dark'

  useEffect(() => {
    document.body.dataset.page = currentPath === '/' ? 'home' : currentPath.slice(1, -1)

    const elements = document.querySelectorAll<HTMLElement>('[data-reveal]')
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduceMotion || !('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [currentPath])

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <SiteHeader currentPath={route ? currentPath : ''} tone={headerTone} />
      <main id="main-content" className="page-main">
        <Page />
      </main>
      <SiteFooter />
    </>
  )
}

export default App
