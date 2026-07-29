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
  intro:
    'I design, analyze, and validate mechanical systems — from FEA-optimized structures and PID control loops to sensors embedded inside additively manufactured aerospace components.',
  availability: 'Available for work',
  // Lives in public/. Swap the file to change the photo; keep it square.
  photo: '/amy-kuang.jpg',
}

/**
 * The one-line credential scan under the hero intro. Keep these short — they
 * sit on a single wrapping row and are the first thing a recruiter reads.
 */
export const heroFacts = [
  'M.Eng · UC Irvine · 2027',
  'B.S. Mech E · Colorado School of Mines',
  'Riverside, CA',
]

/**
 * Headline numbers pulled from the Niagara Bottling internship. Shown at the
 * top of the Experience page so the quantified results are read before the
 * bullets that explain them.
 */
export const metrics = [
  {
    value: '420,800',
    unit: 'bottles',
    label: 'Added production capacity per peak period',
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
]

/**
 * The three hero backgrounds, relabelled as focus areas.
 * Each index maps 1:1 to a video in VIDEOS below.
 */
export const focusAreas = [
  { label: 'Fluid Dynamics', accent: '#F598F2' },
  { label: 'Additive Mfg', accent: '#FFFFFF' },
  { label: 'Control Systems', accent: '#FFFFFF' },
]

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
    details: [
      { label: 'Focus', value: 'Manufacturing' },
      { label: 'GPA', value: '3.0' },
    ],
  },
]

export const experience = [
  {
    company: 'CAM Supply Inc.',
    role: 'Design Engineering Intern',
    location: 'Lake Elsinore, CA',
    // Update this string if the range changes.
    period: 'May 2026 – Present',
    current: true,
    bullets: [
      'Designed and fabricated supporting parts for tattoo pens and acupuncture products via 3D printing (SolidWorks / IdeaMaker).',
      'Generated engineering drawings with dimensions, tolerances, and manufacturing specifications to support production and quality control.',
      'Reviewed and updated product documentation to maintain compliance with regulatory and quality requirements, including FDA product records.',
      'Conducted cost-benefit analyses of U.S. and Chinese manufacturing partners, evaluating labor, material, logistics, and production costs to support sourcing decisions.',
    ],
  },
  {
    company: 'Niagara Bottling LLC.',
    role: 'Manufacturing Engineer Intern',
    location: 'Denver, CO',
    // NOTE: the resume does not list dates for this role — add them here.
    period: '',
    current: false,
    bullets: [
      'Improved production capacity by 420,800 bottles per peak production period by analyzing pack changeover operations and improving process efficiency.',
      'Applied SMED principles to reduce average pack changeover time by 12% (17 → 15 min), directly improving OEE and resulting in a 0.139% throughput efficiency gain.',
      'Standardized MES fault codes and implemented automated aggregate unit tracking to support Root Cause Corrective Action (RCCA) investigations.',
      'Collaborated with maintenance, production, and quality teams to troubleshoot line inefficiencies and improve overall operations; developed SOPs for line improvement and factory equipment to improve repeatability.',
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
    tags: ['DED', 'Aerospace', 'Multi-material'],
    bullets: [
      'Researched feasibility of embedding functional thermocouples and strain gauges within structural components using a novel multi-material Directed Energy Deposition (DED) process, serving as proof of concept for embedded sensing in aerospace structures.',
      'Developed a hybrid powder deposition technique to safely fuse LPBF-grade Cu and CuNi30 powders using DED laser remelting within stainless-steel channels, resolving an airborne particulate explosion risk identified mid-project.',
      'Translated Honeywell customer requirements into ASTM-compliant coupon designs, drafted test plans, qualification procedures, and a final design report with recommended next steps for future DED system acquisitions.',
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
    bullets: [
      'Investigated powder flow stability in DED systems using combined CFD modeling and transparent-geometry experimental imaging to characterize carrier gas behavior and particle transport in a novel electrodynamic feeder.',
      'Modeled argon carrier gas flow through a multi-outlet powder diffuser in Ansys Fluent and identified low-velocity stagnation zones near outlet regions as probable sites for particle settling and feed instability.',
      'Identified a critical gap in multiphase CFD workflows where DPM particle tracking became numerically unstable in multi-outlet geometries due to absent boundary condition guidelines; proposed CFD-DEM coupling as a path forward.',
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
      'SolidWorks',
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
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

/** Nav omits Home — the wordmark handles that. */
export const navSections = sections.filter((s) => s.id !== 'home')
