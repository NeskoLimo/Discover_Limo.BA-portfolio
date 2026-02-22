/* ═══════════════════════════════════════════════════════════════
   data.js — Single source of truth for all portfolio content.
   Update content here; components read from this file automatically.
   SCALABILITY: Add new sections by exporting a new array/object and
   importing it in the relevant component.
   ═══════════════════════════════════════════════════════════════ */

export const personal = {
  name: 'Bernard Limo',
  roles: ['Service Delivery Manager', 'Technical Business Analyst'],
  location: 'Nairobi, Kenya',
  email: 'koneslimo@gmail.com',
  phone: '+254 706 262 690',
  linkedin: 'https://www.linkedin.com/in/YOUR_HANDLE', // ← update this
  available: true,
  bio: [
    "I'm a Technical Business Analyst and Service Delivery Manager based in Nairobi. My edge is that I operate at both layers: I understand the business deeply enough to sit in a boardroom, and I understand systems well enough to code alongside developers in Angular and React.",
    "Across banking, insurance, healthcare, and technology, I've led requirements elicitation, UAT cycles, API integrations, and enterprise platform rollouts — while contributing to ISO 9001, ISO 22301, and ISO/IEC 27001 certifications. I don't just document what a business needs; I help build it.",
  ],
  // SCALABILITY: add more paragraphs to bio[] freely — About renders them all.
};

export const stats = [
  { value: '8+',     label: 'Years experience' },
  { value: '99.99%', label: 'System uptime achieved' },
  { value: '20%+',   label: 'Efficiency gains delivered' },
  { value: '3',      label: 'ISO certifications supported' },
  // SCALABILITY: add more stat objects here — Hero renders them all.
];

export const tags = [
  'Angular', 'React', 'REST APIs', 'BPMN', 'Agile / Scrum', 'UAT',
  'Grafana', 'Prometheus', 'Postman', 'Selenium', 'MS Navision',
  'Curacel', 'Medismart', 'SmartInsure', 'HealthX',
  'ISO 9001', 'ISO 22301', 'ISO/IEC 27001',
  // SCALABILITY: add more tags here — About renders them all.
];

export const experience = [
  {
    id: 'exp-1',
    date: 'Apr 2025 — Present',
    role: 'Service Delivery Manager',
    company: 'Smart Applications International Ltd',
    description:
      'Strategic liaison between business and technical teams across all delivery streams. Lead UAT for SmartInsure, oversee the DEFMIS (MS Navision + Curacel) and Multi-System Integration (HAIS, HealthX, Pensoft, Unisure, E02-Smart) projects, and maintain 99.99% system uptime through proactive EDI monitoring. Mentored 5 junior analysts; contributed to ISO 9001:2025 certification.',
    metrics: [
      '↑ 20% Implementation Efficiency',
      '98% UAT Compliance',
      '99.99% Uptime',
      '90% User Satisfaction',
    ],
  },
  {
    id: 'exp-2',
    date: 'Jul 2024 — Mar 2025',
    role: 'Technical Operations Analyst',
    company: 'Smart Applications International Ltd',
    description:
      'Monitored system availability using Grafana and Prometheus (99.9% uptime). Designed UAT protocols using Selenium and Postman — 100% compliance before every release. Managed Telehealth API V1→V2 migration with zero data-privacy breaches and 95% on-time customer integration delivery.',
    metrics: [
      '99.9% Uptime',
      '100% QA Compliance',
      '95% On-time Delivery',
      '↑ 85% Adoption',
    ],
  },
  {
    id: 'exp-3',
    date: 'Apr 2019 — Jul 2024',
    role: 'Customer Relations Officer → Key Accounts Manager → Senior CRO',
    company: 'Smart Applications International Ltd',
    description:
      'Led CIC MEDIPAL Mobile App from development to launch — generating KES 2.2M in revenue. Managed Smart Virtual Access Migration achieving 100% member transition. Ran data-driven account management, executive reporting, and product adoption programmes across the client base.',
    metrics: ['KES 2.2M Revenue', '100% Member Transition'],
  },
  {
    id: 'exp-4',
    date: 'Sep 2018 — Mar 2019',
    role: 'Business Development Officer',
    company: 'Postbank · Kericho County',
    description:
      'Designed a student savings programme across high schools, eliminating cash-based schemes and driving a 400% increase in youth product revenue. Automated Inua Jamii beneficiary verification in Bomet County, securing government stipend integrity.',
    metrics: ['↑ 400% Youth Revenue', 'Gov. Programme Automation'],
  },
  {
    id: 'exp-5',
    date: 'Feb 2017 — Aug 2018',
    role: 'IT Support Engineer & System Implementor',
    company: 'Endeavour Africa Limited',
    description:
      'Implemented and optimised IT systems across hardware, software, and applications. Developed procedural documentation and performance reports to drive troubleshooting efficiency.',
    metrics: [],
  },
  // SCALABILITY: Add new role objects above this line (newest first).
];

export const projects = [
  {
    id: 'proj-1',
    period: 'Mar 2025 – Present',
    sector: 'Finance · Integration',
    title: 'DEFMIS — MS Navision & Curacel',
    description:
      'Overseeing MS Navision and Curacel integration to streamline workflows and improve financial accuracy across departments.',
    impact: '↗ Operational efficiency improved',
    link: null, // SCALABILITY: set to a URL string to enable a "View" button
  },
  {
    id: 'proj-2',
    period: 'May 2025 – Present',
    sector: 'Healthcare · Multi-System',
    title: 'Multi-System Integration',
    description:
      'Managing simultaneous integration of HAIS, HealthX, Pensoft, Unisure, and E02-Smart for seamless national-scale interoperability.',
    impact: '↗ Nationwide interoperability achieved',
    link: null,
  },
  {
    id: 'proj-3',
    period: 'Jul 2024 – Feb 2025',
    sector: 'Healthcare · API',
    title: 'Telehealth API V1 → V2 Migration',
    description:
      'End-to-end API migration with full data privacy compliance, improved response performance, and zero service downtime.',
    impact: '↗ Zero-downtime migration · Full compliance',
    link: null,
  },
  {
    id: 'proj-4',
    period: 'Jan 2023 – Dec 2023',
    sector: 'Insurance · Platform',
    title: 'Smart Virtual Access Migration',
    description:
      'Led parallel changeover strategy migrating all payers to Virtual Access within Medismart with 100% member transition rate.',
    impact: '↗ 100% member transition',
    link: null,
  },
  {
    id: 'proj-5',
    period: 'Jan 2021 – Dec 2021',
    sector: 'Healthcare · Mobile',
    title: 'CIC MEDIPAL Mobile App',
    description:
      'Led development and implementation of a user-centric mobile healthcare solution that generated KES 2.2M in new revenue at launch.',
    impact: '↗ KES 2,200,000 revenue generated',
    link: null,
  },
  {
    id: 'proj-6',
    period: 'Sep 2018 – Mar 2019',
    sector: 'Banking · Innovation',
    title: 'Student Savings & Inua Jamii Automation',
    description:
      'Introduced a school savings programme (+400% youth revenue) and automated government beneficiary verification in Bomet County.',
    impact: '↗ 400% revenue · Gov. automation',
    link: null,
  },
  // SCALABILITY: Add new project objects above this line.
  // Set link: 'https://...' to enable a live URL button on the card.
];

export const skills = [
  {
    id: 'skill-ba',
    category: 'Business Analysis',
    items: [
      'Requirements Elicitation',
      'Use Case & User Stories',
      'BPMN Process Modelling',
      'UAT Design & Execution',
      'Business Case Writing',
      'Gap & Impact Analysis',
      'SOP Documentation',
    ],
  },
  {
    id: 'skill-tech',
    category: 'Technical',
    items: [
      'Angular & React',
      'REST API Integration',
      'EDI & System Integrations',
      'Postman · Selenium',
      'Grafana · Prometheus',
      'AI & ML Insights',
      'Data Visualisation',
    ],
  },
  {
    id: 'skill-delivery',
    category: 'Delivery',
    items: [
      'Agile / Scrum',
      'Stakeholder Management',
      'Digital Transformation',
      'ISO 9001 / 22301 / 27001',
      'Training & Adoption',
      'Team Mentorship',
      'Cross-functional Leadership',
    ],
  },
  // SCALABILITY: Add a new skill group object here (e.g. "Languages").
  // The Skills component renders all groups automatically.
];

export const certifications = [
  { id: 'cert-1',  name: 'Software Engineer Pre-Apprenticeship (V3)',    issuer: 'IBM',                    link: null },
  { id: 'cert-2',  name: 'Reactive Architecture: Building Scalable Systems', issuer: 'IBM',               link: null },
  { id: 'cert-3',  name: 'Enterprise Design Thinking Practitioner',       issuer: 'IBM',                    link: null },
  { id: 'cert-4',  name: 'IBM Certified Technical Advocate — Cloud v4',   issuer: 'IBM · Credly',           link: 'https://www.credly.com' }, // ← update with real Credly URL
  { id: 'cert-5',  name: 'Plan the Project as a Business Analyst',        issuer: 'IIBA Endorsed · Udemy',  link: null },
  { id: 'cert-6',  name: 'BA: Software Testing Processes & Techniques',   issuer: 'Udemy',                  link: null },
  { id: 'cert-7',  name: 'Engaging Stakeholders for Success',             issuer: 'Cisco',                  link: null },
  { id: 'cert-8',  name: 'Introduction to Cybersecurity',                 issuer: 'Cisco',                  link: null },
  { id: 'cert-9',  name: 'Bachelor of Business Information Technology',   issuer: 'Multimedia University of Kenya · 2012–2015', link: null },
  { id: 'cert-10', name: 'Certificate of Proficiency',                    issuer: 'College of Insurance',   link: null },
  // SCALABILITY: Add new cert objects here.
  // Set link: 'https://...' to make the cert item a clickable anchor.
];
