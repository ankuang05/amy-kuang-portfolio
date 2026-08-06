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
 * Every project takes any number of `figures` and any number of `links`.
 *
 *   figures — pictures, in the order they should read across the row. Leave []
 *             and a numbered placeholder plate is drawn instead. Each takes:
 *               src     — a file in public/projects/ (e.g. '/projects/ded.jpg').
 *                         Aim for ~1600px wide; anything under ~1200px is soft
 *                         on a retina screen.
 *               alt     — what the picture shows, for anyone who can't see it.
 *               caption — the line printed underneath. Optional.
 *               fit     — 'cover' (default) fills the frame and crops; use
 *                         'contain' for anything that must be read whole, like
 *                         a poster.
 *               href    — makes the figure a link, e.g. to the full-size PDF.
 *             One figure runs the full column; two share a row and drop to a
 *             stack on phones.
 *   figureLayout — 'collage' instead builds two stacked columns: the last two
 *             pictures on the right, everything before them on the left. Needs
 *             three or more; ignored otherwise.
 *   figureColumns — the collage's column widths, any grid-template-columns
 *             value ('1fr 2fr'). Tune it so both columns end up the same
 *             height; upright pictures need a narrower column than wide ones.
 *   links   — [{ label, href }]. Reports, repos, papers, videos. Leave [] to
 *             hide the row entirely.
 */
export const projects = [
  {
    title: 'Embedded Electronics in Additively Manufactured Components',
    figures: [
      {
        src: '/projects/layered-labs-poster.jpg',
        alt: 'Layered Labs capstone design poster: project statement, design criteria, strain gauge and thermocouple calculations, copper trace parameter testing, material properties and testing results.',
        caption: 'Layered Labs Design Poster',
        fit: 'contain',
        href: '/projects/layered-labs-poster.pdf',
      },
      {
        src: '/projects/copper-nickel-trace.jpg',
        alt: 'A copper-nickel trace deposited as four parallel beads on a stainless steel bar, next to machined test tabs.',
        caption: 'Copper Nickel Trace',
      },
    ],
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
    // Read as a collage: the CAD on the left, the two analysis views stacked on
    // the right. Levelling the columns by width would put the plots at ~195px,
    // too small to read; this leans the other way instead and lets the CAD
    // centre itself against the taller stack.
    figureLayout: 'collage',
    figureColumns: '1.25fr 1fr',
    figures: [
      {
        src: '/projects/powder-flow-cad.png',
        alt: 'Two SolidWorks views of the powder metering channel: an isometric of the full body with its mounting blocks, and the channel on its own.',
        caption: 'Changes Made to Create Simplified Geometry for CFD',
      },
      {
        src: '/projects/powder-flow-boundary-conditions.png',
        alt: 'The flow domain with its boundary conditions marked: velocity inlet at the left in blue, outlets along the top and right in red.',
        caption: 'Boundary Conditions on Simplified Geometry',
      },
      {
        src: '/projects/powder-flow-velocity.png',
        alt: 'Velocity magnitude contour through the channel, peaking around 2.26 m/s in a fast core near the inlet that spreads and slows toward the outlet.',
        caption: 'Modeling of the Argon gas: Contours of Velocity Magnitude [m/s]',
      },
    ],
    links: [],
    period: 'Jan 2026 – May 2026',
    context: 'Graduate Research Project — AMFG 501: Additive Manufacturing',
    sponsor: 'Colorado School of Mines',
    location: 'Golden, CO',
    tags: ['CFD', 'Ansys Fluent', 'Multiphase Modeling'],
    bullets: [],
    summary: [
      "Another project that I've been a part of focused on understanding powder flow behavior in DED systems. Using Ansys Fluent CFD alongside transparent-flow experiments, our team looked at how powder moves through a DED powder metering system and identified stagnation zones that contribute to particle settling and feed instability. Along the way we ran into a gap in the multiphase CFD workflow itself: particle tracking kept going numerically unstable in multi-outlet geometries, with no established boundary condition guidelines to work from, so we proposed CFD-DEM coupling as a path forward.",
    ],
  },
  {
    title: 'Finite Element Analysis of a Double Wishbone Suspension System',
    // A pair, set up as the collage so both keep their own proportions — the
    // shared 4:3 box a plain pair would use crops the top and bottom off a
    // near-square plot. Widths are set so the two come out level.
    figureLayout: 'collage',
    figureColumns: '1fr 1.11fr',
    figures: [
      {
        src: '/projects/fea-loads-restraints.png',
        alt: 'The double wishbone assembly in SolidWorks with loads and restraints applied: green restraint arrows at the bushing bores, purple force arrows on the upright, and a coil-over between the control arms.',
        caption: 'Isometric View of the Suspension System with Fixtures and Forces',
      },
      {
        src: '/projects/fea-von-mises.png',
        alt: 'Static nodal von Mises stress plot of the same assembly, scaled to 30.68 ksi, with the peak at a lower control arm mounting lug.',
        caption:
          'von Mises Stress Snapshot with the Location of the Maximum Stress Value on the Lower Suspension Arm',
      },
    ],
    links: [],
    period: 'December 2024',
    context: 'Structural optimization study',
    sponsor: '',
    location: '',
    tags: ['FEA', 'SolidWorks', 'Optimization'],
    bullets: [],
    summary: [
      'A class project where I ran a finite element analysis on a double wishbone suspension system, with the goal of taking as much mass out of the components as I could while still holding to safety factor standards. I looked at how stress distributed under a range of loading conditions to make sure the design would stay reliable under high-performance use, and documented the trade-offs and validation results that came out of it.',
    ],
  },
  {
    title: 'PID-Controlled Easy Bake Oven',
    // The LabVIEW screens on the left, the bench photos on the right. Two
    // stacked portraits run tall against two wide screenshots, so the split is
    // steep: it is what brings the columns level.
    figureLayout: 'collage',
    figureColumns: '2.7fr 1fr',
    figures: [
      {
        src: '/projects/oven-block-diagram.png',
        alt: 'The LabVIEW block diagram: a thermocouple read on Dev1/ai1 converted to °F, compared against a set point, through a PID block and a PWM duty-cycle node to the analog output, with a safe shutdown writing zero on stop.',
      },
      {
        src: '/projects/oven-front-panel.png',
        alt: 'The LabVIEW front panel: KP 10, KI 0.25, KD 0, a set point of 350, and a waveform chart holding a flat line at 350°F above a noisier trace near zero.',
      },
      {
        src: '/projects/oven-bench.jpg',
        alt: 'The oven on the lab bench: a cardboard box taped with foil and blue tape, a two-pin connector on top, wired back to a bench supply, with the thermal resistance calculations and the running VI on the monitor behind it.',
      },
      {
        src: '/projects/oven-cookie.jpg',
        alt: 'The oven opened to show its foil-lined interior, with the baked cookie in a foil tin on the bench in front of it.',
      },
    ],
    links: [],
    period: 'Nov 2024 – Dec 2024',
    context: 'Closed-loop electro-mechanical control system',
    sponsor: '',
    location: '',
    tags: ['LabVIEW', 'PID', 'Instrumentation + Automation'],
    bullets: [],
    summary: [
      'The challenge was to build a miniature oven out of cardboard and aluminum foil that could hold a steady 350°F, steady enough to actually bake a cookie. A partner and I ran thermocouple feedback into LabVIEW, drove the heating elements through a MOSFET circuit, and built a custom UI for tuning PID gains against live waveform charts. Most of the work was in the integration: getting the software logic and the analog hardware to agree, then testing whether a cardboard box could really hold temperature.',
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
