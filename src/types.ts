export interface ProjectItem {
    id: string;
    number: string;
    title: string;
    client: string;
    category: string;
    year: string;
    outcome: string;
    description: string;
    image: string;
    deliverables: string[];
    tabSurface: string;
}

export interface ServiceItem {
    id: string;
    number: string;
    title: string;
    capabilities: string[];
    turnaround: string;
    description: string;
    image: string;
    imageAlt: string;
    actionLabel: string;
}

export interface ProcessItem {
    id: string;
    number: string;
    title: string;
    duration: string;
    description: string;
    isFocalDark?: boolean;
}

export interface TestimonialItem {
    id: string;
    author: string;
    initials: string;
    role: string;
    company: string;
    quote: string;
    outcomeMetric: string;
    rating: number;
    date: string;
    isPhotoCard?: boolean;
    bgImage?: string;
}

export interface FAQItem {
    id: string;
    question: string;
    answer: string;
}

export interface ProjectModalContext {
    service?: string;
    plan?: string;
    referenceCase?: string;
}
