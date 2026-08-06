export const profile = {
  firstName: 'Amy',
  lastName: 'Kuang',
  email: 'amy6kuang@gmail.com',
  location: 'Riverside, CA',
  timezone: 'America/Los_Angeles',
  timezoneLabel: 'PST',
  linkedin: 'https://www.linkedin.com/in/kuanga',
  linkedinLabel: 'linkedin.com/in/kuanga',
  title: 'Mechanical & Aerospace Engineer',
  availability: 'Available for work',
  // Lives in public/. Swap the file to change the photo; keep it square.
  photo: '/amy-kuang.jpg',
}

/**
 * The hero bio. `greeting` is the headline set across the landing screen; the
 * exclamation mark inside it is drawn in the accent colour. Every line below
 * opens with a phrase set in bold, so the two halves are stored apart rather
 * than marked up inside one string.
 */
export const bio = {
  greeting: "Hi! I'm Amy",
  lines: [
    {
      lead: 'Studied',
      rest: 'Mechanical Engineering at Colorado School of Mines & Aerospace Engineering at UC Irvine',
    },
    {
      lead: 'Curious',
      rest: 'About Manufacturing, Aerospace Systems & Product Development',
    },
    {
      lead: 'Career Background',
      rest: 'Includes Experience in Manufacturing Engineering, Additive Manufacturing & Mechanical Design',
    },
  ],
}

/** Hero backgrounds, played in order and looped forever. */
export const VIDEOS = [
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260629_030107_874273ea-684a-4e90-bb96-8fdfde48d53d.mp4',
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260629_032424_3c9c2a9d-807b-4482-80e6-dd6d9dfd4545.mp4',
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260627_094019_4214ea73-b963-46a4-8327-61489192de99.mp4',
]

export const education = [
  {
    school: 'University of California, Irvine',
    degree: 'Master of Engineering, Mechanical & Aerospace Engineering',
    period: 'M.Eng. May 2027',
    location: 'Irvine, CA',
    details: [
      { label: 'Major area', value: 'Fluid Dynamics and Propulsion' },
    ],
  },
  {
    school: 'Colorado School of Mines',
    degree: 'Bachelor of Science, Mechanical Engineering',
    period: 'B.S. May 2026',
    location: 'Golden, CO',
    details: [{ label: 'Focus', value: 'Manufacturing' }],
  },
]

export const experience = [
  {
    company: 'CAM Supply Inc.',
    role: 'Technical Product & Marketing Intern',
    location: 'Lake Elsinore, CA',
    // Update this string if the range changes. `current` drives the pulsing
    // "Current" tag, so clear it once the end date has passed.
    period: 'May 2026 – September 2026',
    current: true,
    bullets: [
      'Designed and fabricated supporting parts for tattoo pens and acupuncture products via 3D printing (SolidWorks / IdeaMaker).',
      'Generated engineering drawings with dimensions, tolerances, and manufacturing specifications to support production and quality control.',
      'Reviewed and updated product documentation to maintain compliance with regulatory and quality requirements, including FDA product records.',
      'Conducted cost-benefit analyses of U.S. and Chinese manufacturing partners, evaluating labor, material, logistics, and production costs to support sourcing decisions.',
      'Designed user guides, brochures, product labels, and marketing collateral in CorelDraw.',
    ],
  },
  {
    company: 'Niagara Bottling LLC.',
    role: 'Manufacturing Engineer Intern',
    location: 'Denver, CO',
    period: 'May 2025 – August 2025',
    current: false,
    bullets: [
      'Improved production capacity by 420,800 bottles per peak production period by analyzing pack changeover operations and improving process efficiency.',
      'Applied SMED principles to reduce average pack changeover time by 12% (17 → 15 min), directly improving OEE and resulting in a 0.139% throughput efficiency gain.',
      'Standardized MES fault codes and implemented automated aggregate unit tracking to support Root Cause Corrective Action (RCCA) investigations.',
      'Collaborated with maintenance, production, and quality teams to troubleshoot line inefficiencies and improve overall operations; developed SOPs for line improvement and factory equipment to improve repeatability.',
    ],
    // Quantified results, shown as one row under this role's bullets. Any job
    // can carry them; leave the key off and nothing is rendered. Keep `label`
    // to ~30 characters — all three share a line, so a longer one wraps on
    // narrower screens.
    metrics: [
      {
        value: '420,800',
        unit: 'bottles',
        label: 'Added capacity per peak period',
      },
      {
        value: '12%',
        unit: '17 → 15 min',
        label: 'Faster pack changeover via SMED',
      },
      {
        value: '0.139%',
        unit: 'OEE',
        label: 'Throughput efficiency gain',
      },
    ],
  },
]

/**
 * Every project takes an optional `image` and any number of `links`.
 *
 *   image     — path to a file in public/projects/ (e.g. '/projects/ded.jpg').
 *               Leave '' and a numbered placeholder plate is drawn instead.
 *   imageAlt  — describe what the picture shows; required whenever image is set.
 *   links     — [{ label, href }]. Reports, repos, papers, videos. Leave [] to
 *               hide the row entirely.
 */
export const projects = [
  {
    title: 'Embedded Electronics in Additively Manufactured Components',
    image: '',
    imageAlt: '',
    links: [],
    period: 'Aug 2025 – May 2026',
    context: 'Senior Capstone Research Project',
    sponsor: 'Sponsor: Honeywell International, Inc. · Colorado School of Mines',
    location: 'Golden, CO',
    tags: ['DED', 'Multi-material'],
    // No bullets here — the note below carries this one on its own.
    bullets: [],
    // A first-person note in Amy's own words. Each string is its own
    // paragraph. Optional — a project without `summary` renders none.
    summary: [
      'Wrapping up a year-long senior capstone project at Colorado School of Mines.',
      'Our team partnered with Honeywell to explore embedding functional thermocouples and strain gauges directly into structural components using a novel multi-material Directed Energy Deposition (DED) process. Throughout the project, we developed a hybrid powder deposition method for copper-based materials, translated customer requirements into ASTM-compliant qualification plans and test coupons, and evaluated the feasibility of integrating sensors into additively manufactured components.',
      'This project challenged us to balance design, manufacturing, testing, and problem-solving while working through real engineering constraints. It was a rewarding experience that strengthened my interest in advanced manufacturing.',
    ],
  },
  {
    title: 'Powder Flow Characterization for Electrodynamic DED Feeders',
    image: '',
    imageAlt: '',
    links: [],
    period: 'Jan 2026 – May 2026',
    context: 'Graduate Research Project — AMFG 501: Additive Manufacturing',
    sponsor: 'Colorado School of Mines',
    location: 'Golden, CO',
    tags: ['CFD', 'Ansys Fluent', 'Multiphase'],
    bullets: [],
    summary: [
      "Another project that I've been a part of focused on understanding powder flow behavior in DED systems. Using Ansys Fluent CFD alongside transparent-flow experiments, our team looked at how powder moves through a DED powder metering system and identified stagnation zones that contribute to particle settling and feed instability!",
    ],
  },
  {
    title: 'Finite Element Analysis of a Double Wishbone Suspension System',
    image: '',
    imageAlt: '',
    links: [],
    period: 'December 2024',
    context: 'Structural optimization study',
    sponsor: '',
    location: '',
    tags: ['FEA', 'Optimization', 'Structures'],
    bullets: [
      'Conducted comprehensive Finite Element Analysis (FEA) to perform a static optimization study minimizing component mass while adhering to safety factor standards.',
      'Evaluated stress distribution and placement under various loading conditions to ensure reliability in high-performance environments; generated technical documentation summarizing trade-offs and validation results.',
    ],
  },
  {
    title: 'PID-Controlled Easy Bake Oven',
    image: '',
    imageAlt: '',
    links: [],
    period: 'Nov 2024 – Dec 2024',
    context: 'Closed-loop electro-mechanical control system',
    sponsor: '',
    location: '',
    tags: ['LabVIEW', 'PID', 'Electronics'],
    bullets: [
      'Designed a closed-loop electro-mechanical control system using thermocouple feedback and LabVIEW; engineered a MOSFET-based control circuit bridging digital software logic and analog heating elements.',
      'Performed system integration, hardware-software validation, and functional testing; developed a custom UI to adjust PID gains and monitor system performance via live waveform charts.',
    ],
  },
]

export const skills = [
  {
    group: 'Platforms',
    items: [
      'SolidWorks (CSWA)',
      'LabVIEW',
      'Arduino IDE',
      'MATLAB',
      'Microsoft Office',
      'PrusaSlicer',
      'Ideamaker',
      'Python',
      'CorelDraw',
    ],
  },
  {
    group: 'Technical',
    items: [
      'Lean Six-Sigma',
      'Additive Manufacturing',
      'Machine Shop Proficiency',
      'Finite Element Analysis',
      'Model-Based Systems',
    ],
  },
  {
    group: 'Personal',
    items: [
      'Team-Based Leadership',
      'Adaptability',
      'Attention to Detail',
      'Cross-Functional Communication',
      'Positive Influence',
      'Desire to Learn',
      'Conflict Resolution',
    ],
  },
]

export const sections = [
  { id: 'home', label: 'Home' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

/** Nav omits Home — the wordmark handles that. */
export const navSections = sections.filter((s) => s.id !== 'home')
