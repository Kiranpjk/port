// All page content lives here. Every fact comes from Kiran's CVs and case studies.

export const profile = {
  name: 'Jaya Kiran Pybogula',
  role: 'UI/UX Designer who also builds',
  pitch:
    'I take a product from user research to hi-fi screens in Figma, then build it in React.',
  location: 'Jena, Germany',
  status: 'Looking for a Werkstudent role in UI/UX design & Software Roles',
  email: 'jayakiranpjk@gmail.com',
  github: 'https://github.com/Kiranpjk',
  linkedin: 'https://www.linkedin.com/in/jaya-kiran/',
  cv: '/docs/jaya-kiran-pybogula-cv.pdf',
};

export const design = [
  {
    id: 'classcomfort',
    title: 'ClassComfort',
    kind: 'Classroom finder app · UX/UI case study',
    year: '2025',
    summary:
      'Students and faculty lose 15–20 minutes a day looking for a room with a working projector, sockets or AC. ClassComfort shows live facility status and lets them book the right room.',
    stats: [
      ['20', 'survey responses'],
      ['5', 'faculty interviews'],
      ['7', 'hi-fi screens'],
      ['31 → 6', 'findings merged into priority fixes'],
    ],
    steps: [
      ['Research', '15-question survey and 5 faculty interviews. 60% struggle to find rooms with working facilities; 80% say a finder app would save them time.'],
      ['Define', '2 personas, empathy map, competitor analysis of 3 tools across 6 features, SWOT and 10 design decisions.'],
      ['Design', 'User flow, site map, information architecture, sketches and 7 high-fidelity screens.'],
      ['Evaluate', 'Persona-based heuristic evaluation with 5 personas against Nielsen’s heuristics and WCAG 2.2 AA. A usability test with 5 users is planned.'],
    ],
    tools: 'Figma, FigJam',
    shape: 'phone',
    images: [
      ['/work/classcomfort-search.webp', 'ClassComfort search screen listing rooms with facilities and availability', 640, 1384],
      ['/work/classcomfort-booking.webp', 'ClassComfort booking screen with date, time slots and facilities needed', 640, 1352],
      ['/work/classcomfort-report.webp', 'ClassComfort screen for reporting a broken facility', 640, 1352],
    ],
    links: [
      ['Case study (PDF)', 'https://drive.google.com/file/d/1Y1COC9YGE2fZeVu6tXzsTukNr2VUfhYt/view?usp=sharing'],
      ['Figma file', 'https://www.figma.com/design/kN8ohGAWwoHidyJ760dDR5/classcomfort?node-id=1-2'],
    ],
  },
  {
    id: 'smart-mirror',
    title: 'Smart Mirror UI',
    kind: 'Accessibility redesign · UX/UI case study',
    year: '2026',
    summary:
      'The existing mirror interface was cluttered, with small text, low contrast and weak hierarchy. The redesign shows only what matters for the moment and keeps the reflection area clear.',
    stats: [
      ['3', 'user groups'],
      ['5', 'screens'],
      ['50+', 'components'],
    ],
    steps: [
      ['Research', 'Audited the existing interface and defined 3 user groups: busy professionals, accessibility-focused users and smart-home users.'],
      ['Design', 'Four design principles, a 5-step user flow and 5 screens: home, fitness, profile, weather and music.'],
      ['Check', 'Applied Nielsen’s usability heuristics: visible system status, recognition over recall, consistency, minimal design and accessibility.'],
    ],
    tools: 'Figma',
    shape: 'wide',
    images: [
      ['/work/mirror-home.webp', 'Smart mirror home screen showing time, weather and next event', 1400, 788],
      ['/work/mirror-fitness.webp', 'Smart mirror fitness screen with steps, calories and heart rate', 1400, 788],
      ['/work/mirror-weather.webp', 'Smart mirror weather screen with an hourly forecast', 1400, 788],
    ],
    links: [
      ['Case study (PDF)', 'https://drive.google.com/file/d/1cjhyPZPotVeckCFbz6IyfUoXs4OQ4xRv/view?usp=sharing'],
      ['Figma file', 'https://www.figma.com/design/iVnKB92aNittO6JYo64Yhf/Smart-mirror-HCi?node-id=1-2'],
    ],
  },
];

export const rapidgigs = {
  title: 'RapidGigs',
  kind: 'Video-first gig platform',
  dates: '05/2025 – 04/2026',
  summary:
    'A job platform where freelancers pitch with short videos and recruiters hire through them. I built the full stack: the React front-end, the Express API and a Spring Boot service for milestone payments.',
  parts: [
    ['Front-end', 'React 18, TypeScript, Tailwind, Vite. Shorts feed, job listings, chat, separate dashboards for students and recruiters.'],
    ['API', 'Node.js, Express, MongoDB, Socket.IO. Auth with JWT and Google sign-in, applications, real-time messaging.'],
    ['Payments', 'Java 21 and Spring Boot. Clients fund milestones, freelancers submit work, payment is released on approval (simulated).'],
    ['AI', 'Job recommendations and generated 30-second job videos, with fallback between providers.'],
  ],
  note: 'Presented as a research paper at ICICST 2026, NIT Jalandhar.',
  image: ['/work/rapidgigs.webp', 'RapidGigs home page with a search bar, category filters and a grid of job cards'],  links: [
    ['Live site', 'https://rapid-gigs.vercel.app'],
    ['Code', 'https://github.com/Kiranpjk/RapidGigs'],
  ],
};

export const code = [
  {
    title: 'Crypto SEO Tracker',
    line: 'Server-rendered tracker for live crypto prices in INR, with dynamic metadata, JSON-LD and a sitemap.',
    stack: 'Next.js, TypeScript, CoinGecko API',
    image: ['/work/crypto.webp', 'Crypto tracker home page with a grid of live coin prices'],
    links: [
      ['Live', 'https://crypto-assignment-nu.vercel.app'],
      ['Code', 'https://github.com/Kiranpjk/Crypto_Assignment-'],
    ],
  },
  {
    title: 'T Groups Imports and Exports',
    line: 'Company website for an Indian agricultural exporter, with product, market and quote pages.',
    stack: 'Next.js, TypeScript',
    image: ['/work/tgroups.webp', 'T Group Imports and Exports home page'],
    links: [
      ['Live', 'https://t-groups.vercel.app'],
      ['Code', 'https://github.com/Kiranpjk/T-Groups'],
    ],
  },
  {
    title: 'AutoConnect',
    line: 'Browser extension that logs into the campus Wi-Fi portal by itself whenever the connection drops.',
    stack: 'Manifest V3, vanilla JavaScript',
    links: [['Code', 'https://github.com/Kiranpjk/AutoConnect']],
  },
  {
    title: 'NextHood',
    line: 'Accommodation finder with location-based search and Google sign-in.',
    stack: 'Next.js, Firebase',
    links: [['Code', 'https://github.com/Kiranpjk/nexthood']],
  },
];

export const education = [
  ['WS 2026/27 – now', 'M.Sc. Computer Science', 'TU Clausthal'],
  ['2023 – 2026', 'B.Tech Computer Science and Engineering', 'Lovely Professional University · CGPA 8.02/10'],
  ['2020 – 2023', 'Diploma in Electrical and Electronics Engineering', 'E.S.C Government Polytechnic, Nandyal · 84.99%'],
];

export const skills = [
  ['UX', 'User research, personas, empathy maps, user flows, information architecture, usability heuristics, accessibility'],
  ['UI', 'Wireframing, hi-fi UI design, component sets · Figma, FigJam'],
  ['Front-end', 'HTML/CSS, JavaScript, TypeScript, React, Next.js'],
  ['Also', 'Node.js, Python, Java, SQL, Git/GitHub'],
  ['Languages', 'English C1 (IELTS 7.0) · German A1, learning'],
];
