import { Review } from '../types/Review'

interface Link {
  id: number
  slug: string
  label: string
}

export const SITE_NAVS: Link[] = [
  {
    id: 1,
    slug: '/',
    label: 'About',
  },
  {
    id: 2,
    slug: '/previous-work',
    label: 'Previous Work',
  },
  {
    id: 3,
    slug: '/blog',
    label: 'Blog',
  },
  {
    id: 4,
    slug: '/reviews',
    label: 'Reviews',
  },
  {
    id: 5,
    slug: '/images/PFT-Resume-2021.pdf',
    label: 'Resume',
  },
]

export const CONTACTS: Link[] = [
  {
    id: 1,
    slug: 'https://twitter.com/ptums923',
    label: 'Twitter',
  },
  {
    id: 2,
    slug: 'https://www.instagram.com/ptums923',
    label: 'Instagram',
  },
  {
    id: 3,
    slug: 'https://github.com/ptums',
    label: 'Github',
  },
  {
    id: 4,
    slug: 'https://www.linkedin.com/in/petertumulty',
    label: 'LinkedIn',
  },
  {
    id: 5,
    slug: 'mailto:ptumulty923@gmail.com',
    label: 'Email',
  },
]

export const RECENT_STACK: string[] = [
  'Jest',
  'Next',
  'React Testing Library',
  'Styled Components',
  'Svelte',
  'Tailwind.css',
  'Typescript',
  'Vercel',
]

interface Project {
  id: number
  slug: string
  video: string
  label: string
  stack: string[]
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    slug: 'https://www.aphshalloffame.com',
    video:
      'https://res.cloudinary.com/tumulty-web-services/video/upload/v1636740502/tumulty.me/sites/Asbury_Park_High_School_Hall_of_Fame.mp4',
    label: 'Asbury Park High School Hall of Fame',
    stack: ['React-Bootstrap', 'Cloudinary', 'MongoDB', 'Next'],
  },
  {
    id: 2,
    slug: 'https://scarincihollenbeck-frontend-cc.vercel.app',
    video:
      'https://res.cloudinary.com/tumulty-web-services/video/upload/v1636740421/tumulty.me/sites/Scarinci_Hollenbeck_-_Full_Service_NJ_NY_DC_Business_Law_Firm_1.mp4',
    label: 'Scarinci Hollenbeck',
    stack: [
      'Algolia',
      'Bootstrap',
      'Cloudinary',
      'GraphQL',
      'Headless Wordpress',
      'MySQL',
      'Next',
      'Restful APIs',
    ],
  },
  {
    id: 3,
    slug: 'https://wavelandscapinganddesign.com',
    video:
      'https://res.cloudinary.com/tumulty-web-services/video/upload/v1636740967/tumulty.me/sites/Wave_Landscaping_Design__lawn_maintenance_and_design_services.mp4',
    label: 'Wave Landscaping & Design',
    stack: [
      'Cloudinary',
      'Jest',
      'Next',
      'Framer Motion',
      'GraphCMS',
      'GraphQL',
      'React Testing Library',
      'Tailwind',
      'Twilio/Send Grid',
      'Typescript',
    ],
  },
  {
    id: 4,
    slug: 'https://www.unleashedpotentiallifecoaching.com/',
    video:
      'https://res.cloudinary.com/tumulty-web-services/video/upload/v1643674625/tumulty.me/Unleashed_Potential__Life_Coaching.mp4',
    label: 'Unleashed Potential Life Coaching',
    stack: [
      'Cloudinary',
      'Next',
      'Framer Motion',
      'GraphQL',
      'Prismic.io',
      'Tailwind',
      'Twilio/Send Grid',
      'Typescript',
    ],
  },
  {
    id: 5,
    slug: 'https://zalando.vercel.app',
    video:
      'https://res.cloudinary.com/tumulty-web-services/video/upload/v1636740900/tumulty.me/sites/Digital_Acceleration_Summit_2021.mp4',
    label: 'Zalando Digital Summit 2021 Event',
    stack: ['Airtable', 'Next', 'Redux', 'Tailwind', 'Typescript'],
  },
  {
    id: 6,
    slug: 'https://numismatics-catalog.donaldscarinci.com',
    video:
      'https://res.cloudinary.com/tumulty-web-services/video/upload/v1636741431/tumulty.me/sites/Donald_Scarinci_s_Numismatics_Catalog.mp4',
    label: "Donald Scarinci's Numismatics Catalog",
    stack: ['Cloudinary', 'GraphQL', 'Next', 'Styled Components'],
  },
  {
    id: 7,
    slug: 'https://rachelandpetertumultywedding.com/',
    video:
      'https://res.cloudinary.com/tumulty-web-services/video/upload/v1636741189/tumulty.me/sites/Rachel_Peter_Wedding_Photo_Gallery.mp4',
    label: "Rachel & Peter's Wedding",
    stack: ['Cloudinary', 'Jest', 'MongoDB', 'Next', 'React Testing Library', 'Typescript'],
  },
]

export const REVIEWS: Review[] = [
  {
    id: 1,
    name: 'Salwa Khan',
    company: 'Owner, CubbieKit',
    statement:
      'It’s so great to work with Peter. He’s a very talented developer that provides not only technical expertise, but excellent service to his clients. He works with us 1:1 to architect and build solutions and executes them in a timely matter. We lean on him for all of our web development and even custom application solutions.',
  },
  {
    id: 2,
    name: 'Jessica Rebelo',
    company: 'Owner, Unleashed Potential Life Coaching',
    statement:
      'Peter has been such a huge asset to my business. I reached out to him to help me rebuild my website and he has been amazing in doing just that. He is always willing to answer any questions I have, talk through ideas with me and brings his own ideas to the table. Anyone is lucky to work with him. ',
  },
  {
    id: 3,
    name: 'Andrew DeHaven',
    company: 'Developer, Appian',
    statement:
      'It was the pleasure of my early career as a junior web developer to have worked 1:1 with Peter. He displayed incredible patience through each step of my project and a talent for explaining complex topics in React.js. He broke down each question posed with coding examples and spent extra time making sure that the information was understood. In closing, Peter would be a great asset for any web development project no matter the size.',
  },
  {
    id: 4,
    name: 'Peter Moeller',
    company: 'Business Development, Scarinci Hollenbeck',
    statement:
      "Peter is a high level professional, calm under pressure, extremely detailed, and produces nothing but excellent results. I've had the pleasure of working with Peter for more than eight years. He has created and recreated more than a dozen websites, applications, and countless custom widgets as well as managed large projects from start to finish. He is always my go to for any web development projects. I highly recommend Peter and would recommend to hire.",
  },
  {
    id: 5,
    name: 'Ahmed F. Haque',
    company: 'Chief Product Officer at Emeritus',
    statement:
      "Undoubtedly Peter is a skilled developer, yet more importantly he is an unbelievably kind human being. He's full of wisdom, optimism, and a sincere desire to help those around him. I can't say enough good things about him, except to say that I hope he knows just how much of an impact he has made on the lives of others.",
  },
]

export const GTAG_TRACKING = process.env.NEXT_PUBLIC_GA_TRACKING_ID
