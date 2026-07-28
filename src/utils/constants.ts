export const SITE_NAME = 'Kraft Studio'
export const SITE_DESCRIPTION = 'Architecture & Design Portfolio'

export const BRAND_COLORS = {
  primary: '#c4df34',
  dark: '#9fb824',
  textOnPrimary: '#0f0f0f',
}

export const ANIMATION_DURATION = {
  fast: 0.3,
  normal: 0.6,
  slow: 1.0,
}

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
}

/** URL slug → project disciplines shown on /projects/:category */
export const PROJECT_CATEGORIES: Record<
  string,
  { title: string; disciplines: string[]; heroImage: string }
> = {
  residential: {
    title: 'Our Residentials',
    disciplines: ['Residential'],
    heroImage: '/img/ef9022_33eab8b4e92345d68513e80861f09354~mv2.jpeg',
  },
  'hotels-schools': {
    title: 'Hotels & Schools',
    disciplines: ['Hospitality', 'Public Realm', 'Cultural'],
    heroImage: '/img/ef9022_1ae970a33a4f492ebbceb51085c22265~mv2.jpeg',
  },
  commercial: {
    title: 'Commercial',
    disciplines: ['Commercial', 'Interior'],
    heroImage: '/img/ef9022_c000642b4c1645a5b9c45ef0289a7057~mv2.jpeg',
  },
}

export const DEFAULT_PROJECT_CATEGORY = 'residential'
