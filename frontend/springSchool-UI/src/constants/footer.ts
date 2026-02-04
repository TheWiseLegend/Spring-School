import { ContactInfo, FooterLink } from "../types";

// Company contact information
export const CONTACT_INFO: ContactInfo = {
    address: "Eazy School, 10001, 5th Avenue, #06 lane street, NY - 62617.",
    phone: "+1(21) 673 4587",
    email: "info@eazyschool.com",
};

// Quick navigation links
export const QUICK_LINKS: FooterLink[] = [
    { label: "About Us", href: "#about" },
    { label: "Courses", href: "#courses" },
    { label: "Become a Teacher", href: "#careers" },
    { label: "Contact Us", href: "#contact" },
    { label: "Career", href: "#careers" },
];

// Explore section links
export const EXPLORE_LINKS: FooterLink[] = [
    { label: "Blog Posts", href: "#blog" },
    { label: "Privacy policy", href: "#privacy" },
    { label: "Contact Us", href: "#contact" },
    { label: "License & uses", href: "#license" },
    { label: "Courses", href: "#courses" },
];

// Footer copyright info
export const FOOTER_COPYRIGHT = {
    year: 2025,
    companyName: "Spring School",
    designerName: "AmrIbrahim",
    designerUrl: "amribrahim.tech",
};

// Newsletter subscription text
export const NEWSLETTER_TEXT = {
    title: "Subscribe",
    placeholder: "Email Address",
    description:
        "Subscribe to our mailing list and get updates to your email inbox.",
};
