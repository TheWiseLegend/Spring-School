// Type definitions for the application

// Re-export all types from models and api
export * from './models';
export * from './api';

// UI Component Types (for Home page sections)
export interface Testimonial {
    name: string;
    quote: string;
    avatar: string;
}

export interface CourseCard {
    title: string;
    description: string;
    lessons: number;
    rating: number;
    category: string;
    categoryColor: string;
    image: string;
}

export interface Feature {
    icon: string;
    title: string;
    description: string;
    color: string;
}

export interface StatItem {
    icon: string;
    count: number;
    label: string;
}

export interface ContactInfo {
    address: string;
    phone: string;
    email: string;
}

export interface FooterLink {
    label: string;
    href: string;
}

export interface WhyChooseItem {
    icon: string;
    title: string;
    bgGradient: string;
    hoverBg: string;
}
