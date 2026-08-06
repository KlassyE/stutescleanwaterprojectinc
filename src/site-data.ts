import katuuraJohnson from './assets/katuura-johnson.jpg'
import sandyStutes from './assets/sandy-stutes.jpg'
import tonyStutes from './assets/tony-stutes.jpg'
import { facebookArchiveIds } from './facebook-archive'

export const FACEBOOK_URL =
  'https://www.facebook.com/profile.php?id=100064619866357'
export const EMAIL = 'stutescleanwateruganda@gmail.com'
export const PHONE_DISPLAY = '+256 754 723345'
export const PHONE_LINK = '+256754723345'
export const US_ADDRESS = '4148 Highway 101 North, Gray Court, SC 29645'

export const navItems = [
  { label: 'Our work', href: '/work/' },
  { label: 'Stories', href: '/stories/' },
  { label: 'Gallery', href: '/gallery/' },
  { label: 'About', href: '/about/' },
  { label: 'Team', href: '/team/' },
] as const

type FacebookImageVariant = 'full' | 'thumbs'

export function facebookImage(
  archiveIndex: number,
  variant: FacebookImageVariant = 'full',
) {
  const facebookId = facebookArchiveIds[archiveIndex - 1]

  if (!facebookId) {
    throw new RangeError(`Unknown Facebook archive image ${archiveIndex}`)
  }

  const sequence = String(archiveIndex).padStart(3, '0')
  return `/images/facebook/${variant}/stutes-facebook-${sequence}-${facebookId}.webp`
}

export const images = {
  homeHero: facebookImage(2),
  workHero: facebookImage(9),
  waterEducation: facebookImage(10),
  schoolsFirst: facebookImage(269),
  washEducation: facebookImage(3),
  mukonoSchoolDelivery: facebookImage(4),
  schoolDelivery: facebookImage(2),
  communityThanks: facebookImage(109),
  firstCup: facebookImage(201),
  storiesHero: facebookImage(174),
  galleryHero: facebookImage(65),
  aboutHero: facebookImage(35),
  teamField: facebookImage(129),
  contactHero: facebookImage(224),
  contactLocation: facebookImage(176),
}

export interface GalleryItem {
  src: string
  thumbnailSrc: string
  alt: string
  caption: string
  archiveIndex: number
}

const featuredArchiveOrder = [
  2, 9, 35, 65, 109, 174, 201, 224, 269, 129, 10, 3, 55, 124, 305,
]

const featuredGalleryCopy: Record<number, Pick<GalleryItem, 'alt' | 'caption'>> = {
  2: {
    alt: 'A large school community gathered outdoors with a blue water purifier and storage containers',
    caption: 'A school community welcomes a new purifier',
  },
  3: {
    alt: 'A project representative demonstrating a purifier to students gathered outdoors at school',
    caption: 'A practical safe-water demonstration',
  },
  9: {
    alt: 'A project representative teaching students beside a blue water purification system',
    caption: 'Safe-water learning beside the system',
  },
  10: {
    alt: 'Students watching as a project representative prepares a blue water purifier',
    caption: 'Preparing a school purifier for use',
  },
  35: {
    alt: 'Students in green uniforms drawing water from a stainless steel purifier',
    caption: 'Students use a newly delivered purifier',
  },
  55: {
    alt: 'A stainless steel purifier carrying the Stutes Clean Water Project label and contact details',
    caption: 'A Stutes Clean Water Project purifier',
  },
  65: {
    alt: 'Smiling students and a project representative gathered in front of a Stutes Clean Water Project banner',
    caption: 'The project and a school community together',
  },
  109: {
    alt: 'Children holding a thank-you sign beside a stainless steel purifier at a community health center',
    caption: 'A community shares its thanks',
  },
  124: {
    alt: 'Children raising colorful cups beside a stainless steel water purifier',
    caption: 'Cups raised after a clean-water delivery',
  },
  129: {
    alt: 'A field representative standing between two stainless steel water purification systems',
    caption: 'Two systems ready for field delivery',
  },
  174: {
    alt: 'Health-center staff and project representatives gathered around two water purification systems',
    caption: 'A health-center purifier delivery',
  },
  201: {
    alt: 'A smiling child holding a blue cup beside a stainless steel water purifier',
    caption: 'A first cup beside the new system',
  },
  224: {
    alt: 'Two project representatives with children gathered between two stainless steel purifiers',
    caption: 'The field team and a community together',
  },
  269: {
    alt: 'Smiling students in green uniforms gathered with teachers around a water purifier',
    caption: 'A school community gathers around clean water',
  },
  305: {
    alt: 'Smiling students celebrating with colorful drinking cups around a water container',
    caption: 'Students celebrate access to clean water',
  },
}

const featuredArchiveSet = new Set(featuredArchiveOrder)
const galleryArchiveOrder = [
  ...featuredArchiveOrder,
  ...facebookArchiveIds
    .map((_, index) => index + 1)
    .filter((archiveIndex) => !featuredArchiveSet.has(archiveIndex)),
]

export const galleryItems: GalleryItem[] = galleryArchiveOrder.map(
  (archiveIndex) => {
    const featuredCopy = featuredGalleryCopy[archiveIndex]
    const sequence = String(archiveIndex).padStart(3, '0')

    return {
      src: facebookImage(archiveIndex),
      thumbnailSrc: facebookImage(archiveIndex, 'thumbs'),
      alt:
        featuredCopy?.alt ??
        `Stutes Clean Water Project field photograph ${sequence} from the organization’s Facebook archive`,
      caption:
        featuredCopy?.caption ?? `Field archive · Photograph ${sequence}`,
      archiveIndex,
    }
  },
)

export const teamMembers = [
  {
    name: 'Tony Stutes',
    role: 'Founder',
    description:
      'Helps steward the founding vision and long-term support behind the organization.',
    image: tonyStutes,
    imageAlt: 'Portrait of Tony Stutes',
  },
  {
    name: 'Sandy Stutes',
    role: 'Founder',
    description:
      'Supports the founding mission and the relationships that help the work move forward.',
    image: sandyStutes,
    imageAlt: 'Portrait of Sandy Stutes',
  },
  {
    name: 'Katuura Johnson',
    role: 'Chief Executive Officer',
    description:
      'Leads the organization’s executive direction and the day-to-day delivery of its mission.',
    image: katuuraJohnson,
    imageAlt: 'Portrait of Katuura Johnson wearing glasses',
  },
  {
    name: 'Kabunga Justus',
    role: 'Operations Manager',
    description:
      'Coordinates operational planning that helps field activities reach schools and communities.',
    image: undefined,
    imageAlt: undefined,
  },
] as const
