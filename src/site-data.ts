import katuuraJohnson from './assets/katuura-johnson.jpg'
import kabungaJustus from './assets/kabunga-justus.webp'
import sandyStutes from './assets/sandy-stutes.jpg'
import tonyStutes from './assets/tony-stutes.jpg'
import { facebookArchiveIds } from './facebook-archive'

export const FACEBOOK_URL =
  'https://www.facebook.com/profile.php?id=100064619866357'
export const EMAIL = 'stutescleanwateruganda@gmail.com'
export const PHONE_DISPLAY = '0706930008'
export const PHONE_LINK = '+256706930008'
export const US_ADDRESS = '4148 Highway 101 North, Gray Court, SC 29645'

export const navItems = [
  { label: 'Our work', href: '/work/' },
  { label: 'Stories', href: '/stories/' },
  { label: 'Gallery', href: '/gallery/' },
  { label: 'About', href: '/about/' },
  { label: 'Team', href: '/team/' },
] as const

type FacebookImageVariant = 'full' | 'thumbs'

function fieldImage(fileName: string) {
  return `/images/facebook/full/${encodeURIComponent(fileName)}`
}

const renamedFacebookFullImages: Record<number, string> = {
  40: 'stu and john.webp',
  44: 'stu john.webp',
  118: 'justus in field.webp',
  130: 'logo.webp',
  218: 'justus crop.webp',
  225: 'johnson in field 2.webp',
  245: 'johnson in field.webp',
  283: 'johnson in field 3.webp',
}

export function facebookImage(
  archiveIndex: number,
  variant: FacebookImageVariant = 'full',
) {
  const facebookId = facebookArchiveIds[archiveIndex - 1]

  if (!facebookId) {
    throw new RangeError(`Unknown Facebook archive image ${archiveIndex}`)
  }

  const sequence = String(archiveIndex).padStart(3, '0')
  const renamedFullImage = renamedFacebookFullImages[archiveIndex]

  if (variant === 'full' && renamedFullImage) {
    return fieldImage(renamedFullImage)
  }

  return `/images/facebook/${variant}/stutes-facebook-${sequence}-${facebookId}.webp`
}

export const images = {
  homeHero: fieldImage('johnson in field.webp'),
  workHero: fieldImage('johnson in field 2.webp'),
  waterEducation: facebookImage(10),
  schoolsFirst: facebookImage(269),
  washEducation: facebookImage(3),
  mukonoSchoolDelivery: facebookImage(4),
  schoolDelivery: facebookImage(2),
  communityThanks: facebookImage(109),
  firstCup: facebookImage(201),
  storiesHero: fieldImage('johnson in field 3.webp'),
  galleryHero: facebookImage(65),
  aboutHero: facebookImage(35),
  teamField: fieldImage('justus in field.webp'),
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

export interface GalleryGroup {
  id: string
  title: string
  intro: string
  items: GalleryItem[]
}

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

function archiveRange(first: number, last: number) {
  return Array.from({ length: last - first + 1 }, (_, index) => first + index)
}

function createGalleryItem(archiveIndex: number): GalleryItem {
  const featuredCopy = featuredGalleryCopy[archiveIndex]

  return {
    src: facebookImage(archiveIndex),
    thumbnailSrc: facebookImage(archiveIndex, 'thumbs'),
    alt:
      featuredCopy?.alt ??
      'A Stutes Clean Water Project photograph from a school, community, or field visit in Uganda',
    caption: featuredCopy?.caption ?? 'Stutes Clean Water Project field visit',
    archiveIndex,
  }
}

function createGalleryGroup(
  id: string,
  title: string,
  intro: string,
  archiveIndexes: number[],
  featuredIndexes: number[],
): GalleryGroup {
  const availableIndexes = new Set(archiveIndexes)
  const featured = featuredIndexes.filter((index) => availableIndexes.has(index))
  const featuredSet = new Set(featured)

  return {
    id,
    title,
    intro,
    items: [...featured, ...archiveIndexes.filter((index) => !featuredSet.has(index))]
      .map(createGalleryItem),
  }
}

const schoolVisitIndexes = [
  ...archiveRange(1, 36),
  46,
  ...archiveRange(51, 65),
  ...archiveRange(72, 75),
  ...archiveRange(81, 87),
  ...archiveRange(89, 100),
  ...archiveRange(131, 133),
  ...archiveRange(226, 285),
  ...archiveRange(303, 305),
]

const purifierDeliveryIndexes = [
  ...archiveRange(66, 71),
  ...archiveRange(109, 129),
  ...archiveRange(192, 205),
  ...archiveRange(208, 214),
  ...archiveRange(217, 225),
  ...archiveRange(295, 302),
]

const fieldJourneyIndexes = [
  ...archiveRange(37, 45),
  47,
  ...archiveRange(76, 80),
  88,
  ...archiveRange(101, 108),
  ...archiveRange(171, 191),
  ...archiveRange(206, 207),
  ...archiveRange(215, 216),
  ...archiveRange(286, 294),
]

const communityMomentIndexes = [...archiveRange(48, 50), ...archiveRange(134, 170)]

export const galleryGroups = [
  createGalleryGroup(
    'schools',
    'Schools & young people',
    'School visits, safe-water learning, and the young people at the heart of each delivery.',
    schoolVisitIndexes,
    [305, 269, 65, 2, 9, 10, 35, 52, 54, 72, 91, 124],
  ),
  createGalleryGroup(
    'purifiers',
    'Purifier deliveries',
    'Purifiers arriving, being demonstrated, and becoming part of daily life.',
    purifierDeliveryIndexes,
    [224, 201, 109, 129, 174, 196, 192, 203, 204, 205],
  ),
  createGalleryGroup(
    'field',
    'On the road & in the field',
    'The travel, preparation, water sources, and infrastructure behind the work.',
    fieldJourneyIndexes,
    [171, 183, 101, 102, 104, 105, 106, 107, 108],
  ),
  createGalleryGroup(
    'community',
    'Community moments',
    'Neighbours, partners, and the everyday moments that surround the mission.',
    communityMomentIndexes,
    [141, 142, 151, 153, 158, 163, 165],
  ),
]

// Archive image 130 is the supplied project logo rather than a field photograph.
export const galleryItems = galleryGroups.flatMap((group) => group.items)

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
    image: kabungaJustus,
    imageAlt: 'Chest-length portrait of Kabunga Justus in a Stutes Clean Water Project shirt',
  },
] as const
