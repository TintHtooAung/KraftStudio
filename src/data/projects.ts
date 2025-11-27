export interface Project {
  id: number
  title: string
  discipline: string
  year: string
  location: string
  description: string
  image: string
  client?: string
  area?: string
  buildingArea?: string
  landArea?: string
  floors?: string
  bedrooms?: string
  bathrooms?: string
  status?: string
  completionDate?: string
  services?: string
  concept?: string
  galleryImages?: string[]
  features?: string[]
}

export const projects: Project[] = [
  {
    id: 1,
    title: '2Bird Residence',
    discipline: 'Residential',
    year: '2024',
    location: 'Yangon, Myanmar',
    description: 'Located in Yangon\'s Shwe Taung Kyar Area, this project exemplifies a remarkable architectural transformation. The once-classical themed house has undergone a sophisticated change, embracing a contemporary style tailored to the client\'s precise requirements.',
    image: '/img/remove-the-license-plate-from-the-car-in-the-garag.png',
    client: 'Private Client',
    area: '450 sqm',
    buildingArea: '450 sqm',
    landArea: '800 sqm',
    floors: '2 Floors + Rooftop',
    bedrooms: '4 Bedrooms',
    bathrooms: '5 Bathrooms',
    status: 'Completed',
    completionDate: 'March 2024',
    services: 'Architecture, Interior Design, Landscape Design',
    concept: 'The design concept revolves around creating a fluid connection between the interior spaces and the lush tropical garden. Large sliding glass doors dissolve the boundaries, while carefully positioned courtyards bring natural light deep into the home.',
    galleryImages: [
      '/img/ef9022_f1445690400d4da39efcec88b859fa43~mv2.jpeg',
      '/img/ef9022_c000642b4c1645a5b9c45ef0289a7057~mv2.jpeg',
      '/img/ef9022_33eab8b4e92345d68513e80861f09354~mv2.jpeg',
    ],
    features: [
      '25m infinity pool with deck',
      'Rooftop terrace with city views',
      'Smart home automation system',
      'Private home cinema room',
      'Wine cellar and bar area',
      'Landscaped tropical garden'
    ]
  },
  {
    id: 2,
    title: 'Atlas Studio',
    discipline: 'Commercial',
    year: '2024',
    location: 'Singapore',
    description: 'A flexible workplace organized around double-height courtyards and soft daylight strategies.',
    image: '/img/ef9022_c000642b4c1645a5b9c45ef0289a7057~mv2.jpeg',
    client: 'Atlas Corporation',
    area: '1,200 sqm',
    buildingArea: '1,200 sqm',
    floors: '3 Floors',
    status: 'Completed',
    completionDate: 'January 2024',
    services: 'Architecture, Interior Design',
    concept: 'Creating a dynamic workspace that adapts to various work modes while maintaining visual connectivity and natural light throughout.',
    galleryImages: [
      '/img/ef9022_c000642b4c1645a5b9c45ef0289a7057~mv2.jpeg',
      '/img/Meeting room view.RGB_color.jpg',
    ],
    features: [
      'Flexible workspace zones',
      'Double-height common areas',
      'Natural daylight optimization',
      'Collaborative meeting spaces',
      'Private focus rooms',
      'Rooftop terrace'
    ]
  },
  {
    id: 3,
    title: 'Iyengar Retreat',
    discipline: 'Hospitality',
    year: '2023',
    location: 'Inle Lake',
    description: 'Immersive wellness suites crafted from local teak, translucent screens, and water gardens.',
    image: '/img/ef9022_33eab8b4e92345d68513e80861f09354~mv2.jpeg',
    client: 'Wellness Group',
    area: '800 sqm',
    buildingArea: '800 sqm',
    landArea: '2,000 sqm',
    floors: '2 Floors',
    bedrooms: '8 Suites',
    bathrooms: '8 Bathrooms',
    status: 'Completed',
    completionDate: 'September 2023',
    services: 'Architecture, Interior Design, Landscape Design',
    concept: 'A sanctuary that harmonizes with nature, using local materials and traditional techniques to create a serene retreat experience.',
    galleryImages: [
      '/img/ef9022_33eab8b4e92345d68513e80861f09354~mv2.jpeg',
      '/img/ef9022_1ae970a33a4f492ebbceb51085c22265~mv2.jpeg',
    ],
    features: [
      '8 luxury wellness suites',
      'Water garden courtyards',
      'Yoga and meditation spaces',
      'Spa and treatment rooms',
      'Organic restaurant',
      'Natural swimming pool'
    ]
  },
  {
    id: 4,
    title: 'Talstation Pavilion',
    discipline: 'Public Realm',
    year: '2022',
    location: 'Bangkok',
    description: 'An urban pavilion that frames the riverfront with slim steel fins and planted overlays.',
    image: '/img/ef9022_8cc7ad3c8ee04d83a2febb155710cf82~mv2.jpeg',
    client: 'City Council',
    area: '300 sqm',
    buildingArea: '300 sqm',
    status: 'Completed',
    completionDate: 'June 2022',
    services: 'Architecture, Landscape Design',
    concept: 'A lightweight structure that creates shade and gathering spaces while preserving views of the riverfront.',
    galleryImages: [
      '/img/ef9022_8cc7ad3c8ee04d83a2febb155710cf82~mv2.jpeg',
    ],
    features: [
      'Steel frame structure',
      'Integrated planting systems',
      'Public seating areas',
      'Riverfront views',
      'Sustainable materials',
      'Accessible design'
    ]
  },
  {
    id: 5,
    title: 'Liebling House',
    discipline: 'Interior',
    year: '2021',
    location: 'Ho Chi Minh City',
    description: 'A sculpted interior language of ivory plaster, brushed nickel, and bespoke lighting.',
    image: '/img/ef9022_1ae970a33a4f492ebbceb51085c22265~mv2.jpeg',
    client: 'Private Client',
    area: '180 sqm',
    buildingArea: '180 sqm',
    floors: 'Single Level',
    bedrooms: '3 Bedrooms',
    bathrooms: '2 Bathrooms',
    status: 'Completed',
    completionDate: 'November 2021',
    services: 'Interior Design, Space Planning',
    concept: 'A refined interior that balances minimalism with warmth, using texture and light to define spaces.',
    galleryImages: [
      '/img/ef9022_1ae970a33a4f492ebbceb51085c22265~mv2.jpeg',
    ],
    features: [
      'Open-plan living',
      'Custom millwork',
      'Bespoke lighting design',
      'Premium finishes',
      'Integrated storage',
      'Balcony extension'
    ]
  },
  {
    id: 6,
    title: 'Uncovered Gallery',
    discipline: 'Cultural',
    year: '2020',
    location: 'Kuala Lumpur',
    description: 'A contemporary gallery carved from an industrial shell with luminous textile ceilings.',
    image: '/img/ef9022_33eab8b4e92345d68513e80861f09354~mv2.jpeg',
    client: 'Arts Foundation',
    area: '600 sqm',
    buildingArea: '600 sqm',
    floors: '2 Floors',
    status: 'Completed',
    completionDate: 'August 2020',
    services: 'Architecture, Interior Design',
    concept: 'Transforming an industrial space into a flexible gallery that celebrates both the building\'s history and contemporary art.',
    galleryImages: [
      '/img/ef9022_33eab8b4e92345d68513e80861f09354~mv2.jpeg',
    ],
    features: [
      'Flexible exhibition spaces',
      'Textile ceiling installations',
      'Event and performance area',
      'Artist studios',
      'Cafe and bookstore',
      'Outdoor sculpture garden'
    ]
  },
  {
    id: 7,
    title: 'Riverside Villa',
    discipline: 'Residential',
    year: '2024',
    location: 'Mandalay, Myanmar',
    description: 'A modern villa overlooking the river with expansive terraces and seamless indoor-outdoor living.',
    image: '/img/ef9022_c000642b4c1645a5b9c45ef0289a7057~mv2.jpeg',
    client: 'Private Client',
    area: '520 sqm',
    buildingArea: '520 sqm',
    landArea: '1,200 sqm',
    floors: '3 Floors',
    bedrooms: '5 Bedrooms',
    bathrooms: '6 Bathrooms',
    status: 'Completed',
    completionDate: 'May 2024',
    services: 'Architecture, Interior Design, Landscape Design',
    concept: 'A contemporary residence that embraces the riverfront setting with large openings and terraced gardens.',
    galleryImages: [
      '/img/ef9022_c000642b4c1645a5b9c45ef0289a7057~mv2.jpeg',
      '/img/ef9022_f1445690400d4da39efcec88b859fa43~mv2.jpeg',
    ],
    features: [
      'Riverfront views',
      'Rooftop infinity pool',
      'Private dock access',
      'Landscaped terraces',
      'Home office suite',
      'Wine storage'
    ]
  },
  {
    id: 8,
    title: 'Garden House',
    discipline: 'Residential',
    year: '2024',
    location: 'Bago, Myanmar',
    description: 'A serene family home surrounded by lush gardens with courtyards that bring nature indoors.',
    image: '/img/ef9022_f1445690400d4da39efcec88b859fa43~mv2.jpeg',
    client: 'Private Client',
    area: '380 sqm',
    buildingArea: '380 sqm',
    landArea: '1,500 sqm',
    floors: '2 Floors',
    bedrooms: '4 Bedrooms',
    bathrooms: '4 Bathrooms',
    status: 'Completed',
    completionDate: 'April 2024',
    services: 'Architecture, Interior Design, Landscape Design',
    concept: 'A home that celebrates the tropical climate with open courtyards, natural ventilation, and garden integration.',
    galleryImages: [
      '/img/ef9022_f1445690400d4da39efcec88b859fa43~mv2.jpeg',
      '/img/ef9022_33eab8b4e92345d68513e80861f09354~mv2.jpeg',
    ],
    features: [
      'Central courtyard garden',
      'Outdoor dining pavilion',
      'Natural swimming pond',
      'Children\'s play area',
      'Vegetable garden',
      'Solar panel system'
    ]
  },
  {
    id: 9,
    title: 'Hilltop Residence',
    discipline: 'Residential',
    year: '2023',
    location: 'Pyin Oo Lwin, Myanmar',
    description: 'A contemporary mountain retreat with panoramic views and sustainable design principles.',
    image: '/img/ef9022_33eab8b4e92345d68513e80861f09354~mv2.jpeg',
    client: 'Private Client',
    area: '450 sqm',
    buildingArea: '450 sqm',
    landArea: '2,000 sqm',
    floors: '2 Floors',
    bedrooms: '4 Bedrooms',
    bathrooms: '5 Bathrooms',
    status: 'Completed',
    completionDate: 'December 2023',
    services: 'Architecture, Interior Design, Landscape Design',
    concept: 'A retreat that harmonizes with the mountain landscape using local stone and timber materials.',
    galleryImages: [
      '/img/ef9022_33eab8b4e92345d68513e80861f09354~mv2.jpeg',
      '/img/ef9022_1ae970a33a4f492ebbceb51085c22265~mv2.jpeg',
    ],
    features: [
      '360-degree mountain views',
      'Fireplace lounge',
      'Outdoor hot tub',
      'Hiking trail access',
      'Greenhouse',
      'Rainwater collection'
    ]
  },
  {
    id: 10,
    title: 'Urban Loft',
    discipline: 'Residential',
    year: '2023',
    location: 'Yangon, Myanmar',
    description: 'A converted warehouse transformed into a spacious loft with industrial character and modern comforts.',
    image: '/img/ef9022_1ae970a33a4f492ebbceb51085c22265~mv2.jpeg',
    client: 'Private Client',
    area: '320 sqm',
    buildingArea: '320 sqm',
    floors: 'Single Level',
    bedrooms: '3 Bedrooms',
    bathrooms: '3 Bathrooms',
    status: 'Completed',
    completionDate: 'October 2023',
    services: 'Architecture, Interior Design',
    concept: 'Preserving the industrial heritage while creating a warm, livable space with high ceilings and open layouts.',
    galleryImages: [
      '/img/ef9022_1ae970a33a4f492ebbceb51085c22265~mv2.jpeg',
      '/img/ef9022_c000642b4c1645a5b9c45ef0289a7057~mv2.jpeg',
    ],
    features: [
      'Double-height living space',
      'Exposed brick walls',
      'Mezzanine bedroom',
      'Rooftop terrace',
      'Art studio space',
      'Smart home system'
    ]
  },
  {
    id: 11,
    title: 'Lakeside Manor',
    discipline: 'Residential',
    year: '2023',
    location: 'Inle Lake, Myanmar',
    description: 'An elegant lakeside estate with traditional Myanmar architecture reinterpreted in a modern context.',
    image: '/img/ef9022_c000642b4c1645a5b9c45ef0289a7057~mv2.jpeg',
    client: 'Private Client',
    area: '680 sqm',
    buildingArea: '680 sqm',
    landArea: '3,000 sqm',
    floors: '2 Floors',
    bedrooms: '6 Bedrooms',
    bathrooms: '7 Bathrooms',
    status: 'Completed',
    completionDate: 'August 2023',
    services: 'Architecture, Interior Design, Landscape Design',
    concept: 'Blending traditional Myanmar architectural elements with contemporary design for a timeless lakeside home.',
    galleryImages: [
      '/img/ef9022_c000642b4c1645a5b9c45ef0289a7057~mv2.jpeg',
      '/img/ef9022_f1445690400d4da39efcec88b859fa43~mv2.jpeg',
    ],
    features: [
      'Private lake access',
      'Traditional teak construction',
      'Courtyard gardens',
      'Boat house',
      'Guest pavilion',
      'Meditation space'
    ]
  },
  {
    id: 12,
    title: 'Minimalist House',
    discipline: 'Residential',
    year: '2022',
    location: 'Yangon, Myanmar',
    description: 'A clean-lined minimalist home that emphasizes simplicity, light, and spatial quality.',
    image: '/img/ef9022_f1445690400d4da39efcec88b859fa43~mv2.jpeg',
    client: 'Private Client',
    area: '350 sqm',
    buildingArea: '350 sqm',
    landArea: '600 sqm',
    floors: '2 Floors',
    bedrooms: '3 Bedrooms',
    bathrooms: '3 Bathrooms',
    status: 'Completed',
    completionDate: 'November 2022',
    services: 'Architecture, Interior Design',
    concept: 'A study in minimalism where every element serves a purpose, creating calm and clarity.',
    galleryImages: [
      '/img/ef9022_f1445690400d4da39efcec88b859fa43~mv2.jpeg',
      '/img/ef9022_1ae970a33a4f492ebbceb51085c22265~mv2.jpeg',
    ],
    features: [
      'Open-plan living',
      'Hidden storage solutions',
      'Zen garden',
      'Skylights',
      'Minimalist kitchen',
      'Private courtyard'
    ]
  },
  {
    id: 13,
    title: 'Tropical Bungalow',
    discipline: 'Residential',
    year: '2022',
    location: 'Ngapali, Myanmar',
    description: 'A beachfront bungalow designed for tropical living with natural ventilation and ocean views.',
    image: '/img/ef9022_33eab8b4e92345d68513e80861f09354~mv2.jpeg',
    client: 'Private Client',
    area: '280 sqm',
    buildingArea: '280 sqm',
    landArea: '800 sqm',
    floors: 'Single Level',
    bedrooms: '3 Bedrooms',
    bathrooms: '3 Bathrooms',
    status: 'Completed',
    completionDate: 'July 2022',
    services: 'Architecture, Interior Design, Landscape Design',
    concept: 'A relaxed beach house that opens to the ocean breeze and celebrates outdoor living.',
    galleryImages: [
      '/img/ef9022_33eab8b4e92345d68513e80861f09354~mv2.jpeg',
      '/img/ef9022_c000642b4c1645a5b9c45ef0289a7057~mv2.jpeg',
    ],
    features: [
      'Direct beach access',
      'Outdoor shower',
      'Covered veranda',
      'Beachfront deck',
      'Tropical landscaping',
      'Solar power system'
    ]
  },
  {
    id: 14,
    title: 'Heritage Restoration',
    discipline: 'Residential',
    year: '2022',
    location: 'Yangon, Myanmar',
    description: 'A carefully restored colonial-era home updated with modern amenities while preserving its historic character.',
    image: '/img/ef9022_1ae970a33a4f492ebbceb51085c22265~mv2.jpeg',
    client: 'Private Client',
    area: '420 sqm',
    buildingArea: '420 sqm',
    landArea: '700 sqm',
    floors: '2 Floors',
    bedrooms: '4 Bedrooms',
    bathrooms: '4 Bathrooms',
    status: 'Completed',
    completionDate: 'May 2022',
    services: 'Architecture, Interior Design, Restoration',
    concept: 'Sensitively restoring a heritage building while integrating contemporary living standards.',
    galleryImages: [
      '/img/ef9022_1ae970a33a4f492ebbceb51085c22265~mv2.jpeg',
      '/img/ef9022_f1445690400d4da39efcec88b859fa43~mv2.jpeg',
    ],
    features: [
      'Original teak floors',
      'Restored colonial details',
      'Modern kitchen addition',
      'Heritage garden',
      'Period-appropriate fixtures',
      'Updated electrical systems'
    ]
  },
  {
    id: 15,
    title: 'Skyline Penthouse',
    discipline: 'Residential',
    year: '2021',
    location: 'Yangon, Myanmar',
    description: 'A luxurious penthouse with panoramic city views and sophisticated interior design.',
    image: '/img/ef9022_c000642b4c1645a5b9c45ef0289a7057~mv2.jpeg',
    client: 'Private Client',
    area: '550 sqm',
    buildingArea: '550 sqm',
    floors: 'Single Level',
    bedrooms: '4 Bedrooms',
    bathrooms: '5 Bathrooms',
    status: 'Completed',
    completionDate: 'December 2021',
    services: 'Interior Design, Space Planning',
    concept: 'A sophisticated urban retreat that maximizes city views and luxury living.',
    galleryImages: [
      '/img/ef9022_c000642b4c1645a5b9c45ef0289a7057~mv2.jpeg',
      '/img/ef9022_33eab8b4e92345d68513e80861f09354~mv2.jpeg',
    ],
    features: [
      '360-degree city views',
      'Private rooftop terrace',
      'Wine cellar',
      'Home theater',
      'Gourmet kitchen',
      'Smart home automation'
    ]
  },
  {
    id: 16,
    title: 'Family Compound',
    discipline: 'Residential',
    year: '2021',
    location: 'Mandalay, Myanmar',
    description: 'A multi-generational family compound with separate pavilions connected by gardens and courtyards.',
    image: '/img/ef9022_f1445690400d4da39efcec88b859fa43~mv2.jpeg',
    client: 'Private Client',
    area: '850 sqm',
    buildingArea: '850 sqm',
    landArea: '2,500 sqm',
    floors: '2 Floors',
    bedrooms: '8 Bedrooms',
    bathrooms: '9 Bathrooms',
    status: 'Completed',
    completionDate: 'September 2021',
    services: 'Architecture, Interior Design, Landscape Design',
    concept: 'A compound that accommodates extended family while providing privacy and shared spaces.',
    galleryImages: [
      '/img/ef9022_f1445690400d4da39efcec88b859fa43~mv2.jpeg',
      '/img/ef9022_33eab8b4e92345d68513e80861f09354~mv2.jpeg',
    ],
    features: [
      'Main house + guest pavilions',
      'Shared dining hall',
      'Children\'s play area',
      'Elderly-friendly design',
      'Community garden',
      'Prayer room'
    ]
  },
]

