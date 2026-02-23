/* ═══════════════════════════════════════════════════════════════
   data.js — All portfolio content lives here.
   Edit this file only — components read from it automatically.
   ═══════════════════════════════════════════════════════════════ */

export const personal = {
  name: 'Bernard Limo',
  tagline: 'I bridge the gap between what a business needs and what technology delivers.',
  roles: ['Service Delivery Manager', 'Technical Business Analyst'],
  location: 'Nairobi, Kenya',
  email: 'koneslimo@gmail.com',
  phone: '+254 706 262 690',
  linkedin: 'https://www.linkedin.com/in/YOUR_HANDLE',
  available: true,
  bio: [
    "Bernard Limo is a Technical Business Analyst and Service Delivery Manager based in Nairobi, Kenya — with 8+ years of experience turning complex business problems into working technical solutions across insurance, healthcare, banking, and government sectors.",
    "His edge is rare: Bernard operates fluently at both layers. He's equally comfortable in the boardroom eliciting requirements and writing business cases, and in the codebase working alongside developers in Angular and React. He doesn't just document what a business needs — he helps architect and deliver it.",
    "Bernard has led enterprise platform rollouts, API migrations, multi-system integrations, and UAT programmes — contributing to ISO 9001, ISO 22301, and ISO/IEC 27001 certifications. His work spans SmartInsure, Medismart, MS Navision, Curacel, HAIS, and HealthX.",
  ],
  industries: ['Insurance', 'Healthcare', 'Banking', 'Government', 'Fintech', 'Technology'],
};

export const stats = [
  { value: '8+',     label: 'Years experience' },
  { value: '99.99%', label: 'System uptime achieved' },
  { value: '20%+',   label: 'Efficiency gains delivered' },
  { value: '3',      label: 'ISO certifications supported' },
];

export const tags = [
  'Angular', 'React', 'REST APIs', 'BPMN', 'Agile / Scrum', 'UAT',
  'Grafana', 'Prometheus', 'Postman', 'Selenium', 'MS Navision',
  'Curacel', 'Medismart', 'SmartInsure', 'HealthX',
  'ISO 9001', 'ISO 22301', 'ISO/IEC 27001',
];

export const expertise = [
  {
    id: 'ex-1',
    lead: 'Business Analysis & Requirements',
    detail: 'End-to-end requirements elicitation, use case design, BPMN process modelling, and UAT execution — translating stakeholder needs into precise, buildable specifications.',
  },
  {
    id: 'ex-2',
    lead: 'Service Delivery & Project Management',
    detail: 'Agile/Scrum delivery leadership across multi-vendor programmes. Track record of 98%+ UAT compliance, 99.99% uptime, and 20%+ implementation efficiency gains.',
  },
  {
    id: 'ex-3',
    lead: 'Technical Integration & API Management',
    detail: 'Hands-on REST API and EDI integration experience. Led Telehealth API V1→V2 migration and multi-system integrations spanning HAIS, HealthX, Pensoft, Unisure, MS Navision, and Curacel.',
  },
  {
    id: 'ex-4',
    lead: 'Frontend Development — Angular & React',
    detail: 'Proficient in Angular and React — able to collaborate in the codebase, review implementations, and bridge the gap between business stakeholders and engineering teams.',
  },
  {
    id: 'ex-5',
    lead: 'Industries Served',
    detail: 'Insurance · Healthcare · Banking · Government · Fintech · Technology — across Kenya and the East African market.',
  },
  {
    id: 'ex-6',
    lead: 'Quality & Compliance',
    detail: 'Active contributor to ISO 9001:2025, ISO 22301, and ISO/IEC 27001 certification programmes. Designed SOPs and compliance documentation adopted organisation-wide.',
  },
];

export const experienceEras = [
  {
    id: 'era-1',
    era: 'Technical Leadership',
    period: '2024 — Present',
    roles: [
      {
        id: 'r-1a',
        date: 'Apr 2025 — Present',
        title: 'Service Delivery Manager',
        company: 'Smart Applications International Ltd',
        bullets: [
          { lead: 'Strategic delivery oversight', detail: 'across SmartInsure UAT, DEFMIS (MS Navision + Curacel), and Multi-System Integration (HAIS, HealthX, Pensoft, Unisure, E02-Smart).' },
          { lead: 'System reliability', detail: '— maintained 99.99% uptime through proactive EDI monitoring and incident response.' },
          { lead: 'Team development', detail: '— mentored 5 junior analysts; standardised UAT processes achieving 98% compliance across all releases.' },
          { lead: 'ISO contribution', detail: '— active contributor to ISO 9001:2025 certification programme.' },
          { lead: 'Efficiency gains', detail: '— 20% improvement in implementation efficiency; 90% user satisfaction scores sustained.' },
        ],
      },
      {
        id: 'r-1b',
        date: 'Jul 2024 — Mar 2025',
        title: 'Technical Operations Analyst',
        company: 'Smart Applications International Ltd',
        bullets: [
          { lead: 'Infrastructure monitoring', detail: '— Grafana and Prometheus stack achieving 99.9% uptime across production environments.' },
          { lead: 'API migration leadership', detail: '— Telehealth API V1→V2 with zero data-privacy breaches and 95% on-time delivery.' },
          { lead: 'QA frameworks', detail: '— designed UAT protocols using Selenium and Postman, achieving 100% pre-release compliance.' },
          { lead: 'Adoption', detail: '— 85% platform adoption rate across integrated client organisations.' },
        ],
      },
    ],
  },
  {
    id: 'era-2',
    era: 'Client & Platform Mastery',
    period: '2019 — 2024',
    roles: [
      {
        id: 'r-2a',
        date: 'Apr 2019 — Jul 2024',
        title: 'Customer Relations Officer → Key Accounts Manager → Senior CRO',
        company: 'Smart Applications International Ltd',
        bullets: [
          { lead: 'Product launch', detail: '— led CIC MEDIPAL Mobile App from development to go-live, generating KES 2.2M in new revenue.' },
          { lead: 'Platform migration', detail: '— directed Smart Virtual Access Migration with 100% member transition and zero service disruption.' },
          { lead: 'Account management', detail: '— managed key enterprise accounts across insurance and healthcare with data-driven executive reporting.' },
          { lead: 'Industries', detail: '— Insurance, Healthcare, Technology.' },
        ],
      },
    ],
  },
  {
    id: 'era-3',
    era: 'Technical Foundations',
    period: '2017 — 2019',
    roles: [
      {
        id: 'r-3a',
        date: 'Sep 2018 — Mar 2019',
        title: 'Business Development Officer',
        company: 'Postbank · Kericho County',
        bullets: [
          { lead: 'Programme design', detail: '— created a student savings programme eliminating cash-based schemes and driving 400% youth revenue growth.' },
          { lead: 'Government automation', detail: '— automated Inua Jamii beneficiary verification in Bomet County, securing stipend integrity.' },
        ],
      },
      {
        id: 'r-3b',
        date: 'Feb 2017 — Aug 2018',
        title: 'IT Support Engineer & System Implementor',
        company: 'Endeavour Africa Limited',
        bullets: [
          { lead: 'Systems implementation', detail: '— deployed and optimised IT infrastructure across hardware, software, and enterprise applications.' },
          { lead: 'Documentation', detail: '— developed SOPs and performance reports adopted as internal standards.' },
        ],
      },
    ],
  },
];

export const projects = [
  { id: 'proj-1', period: 'Mar 2025 – Present', sector: 'Finance · Integration',    title: 'DEFMIS — MS Navision & Curacel',     description: 'Overseeing MS Navision and Curacel integration to streamline workflows and improve financial accuracy across departments.',                                                              impact: '↗ Operational efficiency improved',       link: null },
  { id: 'proj-2', period: 'May 2025 – Present', sector: 'Healthcare · Multi-System', title: 'Multi-System Integration',            description: 'Managing simultaneous integration of HAIS, HealthX, Pensoft, Unisure, and E02-Smart for seamless national-scale interoperability.',                                            impact: '↗ Nationwide interoperability achieved',  link: null },
  { id: 'proj-3', period: 'Jul 2024 – Feb 2025', sector: 'Healthcare · API',         title: 'Telehealth API V1 → V2 Migration',    description: 'End-to-end API migration with full data privacy compliance, improved response performance, and zero service downtime.',                                                      impact: '↗ Zero-downtime · Full compliance',       link: null },
  { id: 'proj-4', period: 'Jan 2023 – Dec 2023', sector: 'Insurance · Platform',     title: 'Smart Virtual Access Migration',      description: 'Led parallel changeover strategy migrating all payers to Virtual Access within Medismart with 100% member transition rate.',                                               impact: '↗ 100% member transition',               link: null },
  { id: 'proj-5', period: 'Jan 2021 – Dec 2021', sector: 'Healthcare · Mobile',      title: 'CIC MEDIPAL Mobile App',              description: 'Led development and implementation of a mobile healthcare solution generating KES 2.2M in new revenue at launch.',                                                      impact: '↗ KES 2,200,000 revenue generated',      link: null },
  { id: 'proj-6', period: 'Sep 2018 – Mar 2019', sector: 'Banking · Innovation',     title: 'Student Savings & Inua Jamii',        description: 'Student savings programme (+400% youth revenue) and automated government beneficiary verification in Bomet County.',                                                   impact: '↗ 400% revenue · Gov. automation',       link: null },
];

export const skills = [
  {
    id: 'skill-ba',
    category: 'Business Analysis',
    items: ['Requirements Elicitation', 'Use Case & User Stories', 'BPMN Process Modelling', 'UAT Design & Execution', 'Business Case Writing', 'Gap & Impact Analysis', 'SOP Documentation'],
  },
  {
    id: 'skill-tech',
    category: 'Technical',
    items: ['Angular & React', 'REST API & EDI Integration', 'Postman · Selenium', 'Grafana · Prometheus', 'MS Navision · Curacel · HAIS', 'AI & ML Insights', 'Data Visualisation'],
  },
  {
    id: 'skill-delivery',
    category: 'Delivery & Leadership',
    items: ['Agile / Scrum', 'Stakeholder Management', 'Digital Transformation', 'ISO 9001 / 22301 / 27001', 'Training & Adoption', 'Team Mentorship', 'Cross-functional Leadership'],
  },
];

export const certifications = [
  { id: 'cert-1',  name: 'Software Engineer Pre-Apprenticeship (V3)',        issuer: 'IBM',                                      link: null },
  { id: 'cert-2',  name: 'Reactive Architecture: Building Scalable Systems', issuer: 'IBM',                                      link: null },
  { id: 'cert-3',  name: 'Enterprise Design Thinking Practitioner',           issuer: 'IBM',                                      link: null },
  { id: 'cert-4',  name: 'IBM Certified Technical Advocate — Cloud v4',       issuer: 'IBM · Credly',                             link: 'https://www.credly.com' },
  { id: 'cert-5',  name: 'Plan the Project as a Business Analyst',            issuer: 'IIBA Endorsed · Udemy',                    link: null },
  { id: 'cert-6',  name: 'BA: Software Testing Processes & Techniques',       issuer: 'Udemy',                                    link: null },
  { id: 'cert-7',  name: 'Engaging Stakeholders for Success',                 issuer: 'Cisco',                                    link: null },
  { id: 'cert-8',  name: 'Introduction to Cybersecurity',                     issuer: 'Cisco',                                    link: null },
  { id: 'cert-9',  name: 'Bachelor of Business Information Technology',       issuer: 'Multimedia University of Kenya · 2012–2015', link: null },
  { id: 'cert-10', name: 'Certificate of Proficiency',                        issuer: 'College of Insurance',                     link: null },
];
