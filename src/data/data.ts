import { ProjectItem, ServiceItem, ProcessItem, TestimonialItem, FAQItem } from '@/types';

export const STUDIO_IMAGES = {
    auraArchitecture: '/images/case_aura_architecture_1795217712805.jpg',
    solaceHardware: '/images/case_solace_hardware_1795217713770.jpg',
    vektorFintech: '/images/case_vektor_fintech_1795217716515.jpg',
    luminaBiotech: '/images/case_lumina_biotech_1795217718163.jpg',
    creativeGallery: '/images/case_creative_agency_1795217716277.jpg',
    studioTeam: '/images/studio_team_editorial_1795217715822.jpg',
};

export const heroMetrics = [
    { value: '38', label: 'Production platforms shipped' },
    { value: '14 Days', label: 'Median first-release sprint' },
    { value: '+142%', label: 'Median conversion lift (90d)' },
    { value: '12+', label: 'Countries across client teams' },
];

export const projectsData: ProjectItem[] = [
    {
        id: 'proj-01',
        number: '01',
        title: 'Aura Living',
        client: 'Aura Architectural Group',
        category: 'Architecture',
        year: '2026',
        outcome: '+164% Residential Inquiries in 90 Days',
        description:
            'Editorial portfolio and specification archive for a Pacific Northwest residential practice, built with instant project filtering and high-resolution plate viewing.',
        image: STUDIO_IMAGES.auraArchitecture,
        deliverables: ['Design System', 'Webflow CMS', 'Editorial Art Direction'],
        tabSurface: '#272624',
    },
    {
        id: 'proj-02',
        number: '02',
        title: 'Solace Audio',
        client: 'Solace Acoustics Ltd.',
        category: 'Industrial Hardware',
        year: '2026',
        outcome: '$1.8M Pre-Order Revenue at Launch',
        description:
            'Direct-to-consumer hardware launch platform featuring machined acoustic component breakdowns, real-time stock reservation, and sub-second page transitions.',
        image: STUDIO_IMAGES.solaceHardware,
        deliverables: ['Product Storytelling', 'Framer Build', 'Checkout Flow'],
        tabSurface: '#5c4028',
    },
    {
        id: 'proj-03',
        number: '03',
        title: 'Vektor Capital',
        client: 'Vektor Infrastructure',
        category: 'Fintech Platform',
        year: '2025',
        outcome: '2.4x Qualified Enterprise Demos',
        description:
            'Institutional marketing platform and interactive developer documentation hub designed to shorten enterprise procurement cycles.',
        image: STUDIO_IMAGES.vektorFintech,
        deliverables: ['Brand Architecture', 'Next.js Frontend', 'Docs System'],
        tabSurface: '#2f3d48',
    },
    {
        id: 'proj-04',
        number: '04',
        title: 'Lumina Care',
        client: 'Lumina Diagnostics',
        category: 'Clinical Biotech',
        year: '2026',
        outcome: '-41% Patient Onboarding Drop-Off',
        description:
            'Accessible clinical trial portal and patient intake experience engineered to WCAG AA standards with clear step-by-step eligibility screening.',
        image: STUDIO_IMAGES.luminaBiotech,
        deliverables: ['Accessibility Audit', 'UI Engineering', 'Intake Workflow'],
        tabSurface: '#46524b',
    },
    {
        id: 'proj-05',
        number: '05',
        title: 'Monolith Archive',
        client: 'Kunsthalle Zurich Partner',
        category: 'Cultural Institution',
        year: '2026',
        outcome: '3.1x Exhibition Pass Reservations',
        description:
            'Spatial exhibition calendar and timed-entry ticketing platform pairing stark brutalist typography with responsive gallery previews.',
        image: STUDIO_IMAGES.creativeGallery,
        deliverables: ['Website Design', 'Motion Engineering', 'Ticketing Integration'],
        tabSurface: '#18181b',
    },
];

export const servicesData: ServiceItem[] = [
    {
        id: 'service-01',
        number: '01.',
        title: 'Website Design & Art Direction',
        capabilities: ['Information Architecture', 'Responsive Systems', 'WCAG AA Contrast'],
        turnaround: '2–3 Weeks',
        description:
            'Conversion-focused marketing sites and editorial brand platforms structured around clear visual hierarchy, legible typography, and measurable buyer journeys.',
        image: STUDIO_IMAGES.solaceHardware,
        imageAlt: 'Precision matte black aluminum acoustic hardware designed for Solace Audio',
        actionLabel: 'Scope Website Design',
    },
    {
        id: 'service-02',
        number: '02.',
        title: 'Framer & Webflow Engineering',
        capabilities: ['Component Libraries', 'CMS Modeling', '60fps Compositor Motion'],
        turnaround: '2–4 Weeks',
        description:
            'Clean, maintainable production builds with structured CMS collections so your marketing team can publish case studies and landing pages without developer bottlenecks.',
        image: STUDIO_IMAGES.auraArchitecture,
        imageAlt: 'Architectural residence showcase engineered in Webflow CMS',
        actionLabel: 'Scope Production Build',
    },
    {
        id: 'service-03',
        number: '03.',
        title: 'Workflow & Revenue Automation',
        capabilities: ['CRM Routing', 'Stripe Billing', 'Webhook Pipelines'],
        turnaround: '1–2 Weeks',
        description:
            'Direct integrations connecting lead capture forms, HubSpot, Notion, and Stripe subscriptions to eliminate manual handoffs between marketing and sales.',
        image: STUDIO_IMAGES.vektorFintech,
        imageAlt: 'Precision titanium and smoked glass studio geometry representing systems engineering',
        actionLabel: 'Scope Automation',
    },
    {
        id: 'service-04',
        number: '04.',
        title: 'Brand Identity & Design Systems',
        capabilities: ['Typography Scales', 'Token Architecture', 'Figma Libraries'],
        turnaround: '3–4 Weeks',
        description:
            'Cohesive visual languages—typographic pairings, color contrast tokens, and reusable Figma component kits—built to scale from launch page to full product.',
        image: STUDIO_IMAGES.creativeGallery,
        imageAlt: 'Architectural corridor light study illustrating visual brand direction',
        actionLabel: 'Scope Brand System',
    },
    {
        id: 'service-05',
        number: '05.',
        title: 'Technical SEO & Performance',
        capabilities: ['Core Web Vitals', 'Structured Schema', 'Funnel Analytics'],
        turnaround: '1–2 Weeks',
        description:
            'Sub-second asset delivery, semantic HTML architecture, and clean conversion event tracking designed to turn organic traffic into qualified pipeline.',
        image: STUDIO_IMAGES.luminaBiotech,
        imageAlt: 'Sunlit research conservatory demonstrating clarity and structured precision',
        actionLabel: 'Scope Performance Audit',
    },
];

export const processData: ProcessItem[] = [
    {
        id: 'proc-01',
        number: '01',
        title: 'Discover',
        duration: 'Days 1–3',
        description:
            'Audit existing conversion bottlenecks, interview stakeholders, and map the core buyer objections before opening a design canvas.',
        isFocalDark: false,
    },
    {
        id: 'proc-02',
        number: '02',
        title: 'Architecture',
        duration: 'Days 4–8',
        description:
            'Establish the typographic grid, content hierarchy, and interactive prototypes tested for clarity on 1440px desktop and mobile viewports.',
        isFocalDark: true,
    },
    {
        id: 'proc-03',
        number: '03',
        title: 'Engineering',
        duration: 'Days 9–14',
        description:
            'Build modular, accessible production code in Framer, Webflow, or Next.js with strict Core Web Vitals budgets and CRM wiring.',
        isFocalDark: false,
    },
    {
        id: 'proc-04',
        number: '04',
        title: 'Launch',
        duration: 'Days 15–18',
        description:
            'Complete QA across devices, deploy analytics attribution, train your internal team, and monitor post-launch funnel metrics.',
        isFocalDark: false,
    },
];

export const testimonialsData: TestimonialItem[] = [
    {
        id: 'test-01',
        author: 'Sarah Mitchell',
        initials: 'SM',
        role: 'Founder',
        company: 'Nova Optics',
        quote:
            'Replacing our slow brochure site with Novix’s modular CMS architecture cut page load times by 62% and lifted qualified demo bookings 2.1x in sixty days.',
        outcomeMetric: '2.1x Demo Bookings',
        rating: 5,
        date: 'Mar 2026',
    },
    {
        id: 'test-02',
        author: 'James Carter',
        initials: 'JC',
        role: 'VP of Marketing',
        company: 'Solace Audio',
        quote:
            'Their pre-order product page handled 40,000 launch-day visitors with zero layout shift and generated $1.8M in initial hardware reservations.',
        outcomeMetric: '$1.8M Launch Revenue',
        rating: 5,
        date: 'Jun 2026',
        isPhotoCard: true,
        bgImage: STUDIO_IMAGES.auraArchitecture,
    },
    {
        id: 'test-03',
        author: 'Emily Chen',
        initials: 'EC',
        role: 'Head of Growth',
        company: 'Vektor Infrastructure',
        quote:
            'Novix redesigned our product documentation and enterprise pricing flow in three weeks. Inbound sales cycles dropped from 45 days to 28 days.',
        outcomeMetric: '-38% Sales Cycle',
        rating: 5,
        date: 'Sep 2026',
    },
];

export const faqData: FAQItem[] = [
    {
        id: 'faq-1',
        question: 'How long does a typical website engagement take?',
        answer:
            'Single marketing sites ship in 2 to 4 weeks from kickoff. Multi-page product platforms with custom CMS modeling and CRM automation typically run 4 to 6 weeks.',
    },
    {
        id: 'faq-2',
        question: 'Do you offer ongoing design and engineering support?',
        answer:
            'Yes. Retained clients receive dedicated weekly sprint capacity for new campaign landing pages, A/B conversion iterations, and component library maintenance.',
    },
    {
        id: 'faq-3',
        question: 'Can you migrate and rebuild an existing slow website?',
        answer:
            'We routinely audit legacy WordPress or custom builds, preserve existing URL equity and SEO redirects, and migrate into clean Webflow, Framer, or Next.js architectures.',
    },
    {
        id: 'faq-4',
        question: 'Which platforms and engineering stacks do you work with?',
        answer:
            'We build primarily in Next.js/React, Framer, and Webflow, paired with Figma design token libraries, Stripe billing, and HubSpot or Linear workflow integrations.',
    },
    {
        id: 'faq-5',
        question: 'How do we kick off a project?',
        answer:
            'Select Start Project to share your scope and target timeline. A partner reviews every brief directly and schedules a 30-minute scoping call within one business day.',
    },
];
