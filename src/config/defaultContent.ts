/**
 * Product: Fagom Professional Template
 * Author: Fagom
 * License: Single Use License (EULA)
 * Copyright (c) 2026 Fagom. All rights reserved.
 */

export interface TeamMember {
  id: string;
  name: string;
  crp: string;
  description: string;
  image: string;
  whatsapp: string;
}

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  text: string;
  source: string;
}

export interface SiteContent {
  site: {
    title: string;
    description: string;
    keywords: string;
    logoText: string;
  };
  nav: {
    links: NavLink[];
  };
  hero: {
    title: string;
    subtitle: string;
    backgroundImage: string;
    ctaText: string;
    ctaHref: string;
  };
  about: {
    sectionTitle: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
  };
  services: {
    sectionTitle: string;
    sectionSubtitle: string;
    items: Service[];
  };
  team: {
    sectionTitle: string;
    sectionSubtitle: string;
    members: TeamMember[];
  };
  contact: {
    sectionTitle: string;
    sectionSubtitle: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    professionalLabel: string;
    messagePlaceholder: string;
    submitText: string;
    emailjsServiceId: string;
    emailjsTemplateId: string;
    emailjsPublicKey: string;
  };
  footer: {
    text: string;
    privacyLabel: string;
  };
  social: {
    instagram: string;
    facebook: string;
    bluesky: string;
    x: string;
    pinterest: string;
    tiktok: string;
  };
  testimonials: {
    sectionTitle: string;
    sectionSubtitle: string;
    items: Testimonial[];
  };
}

export const defaultContent: SiteContent = {
  site: {
    title: "Site Name",
    description: "A brief description of your site for search engines.",
    keywords: "keyword 1, keyword 2, keyword 3",
    logoText: "Logo",
  },
  nav: {
    links: [
      { label: "About", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Team", href: "#team" },
      { label: "Contact", href: "#contact" },
    ],
  },
  hero: {
    title: "Main Title",
    subtitle: "Your tagline or value proposition.",
    backgroundImage: "/assets/hero-sage-earth.svg",
    ctaText: "Learn more",
    ctaHref: "#about",
  },
  about: {
    sectionTitle: "About",
    paragraph1: "Paragraph 1. Introduce your business, project, or service here.",
    paragraph2: "Paragraph 2. Continue with more details about what you offer.",
    paragraph3: "Paragraph 3 (optional). Leave blank to hide.",
  },
  services: {
    sectionTitle: "Services",
    sectionSubtitle: "What we offer",
    items: [
      {
        id: "1",
        icon: "Star",
        title: "Service 1",
        description: "Brief description of service 1.",
      },
      {
        id: "2",
        icon: "Heart",
        title: "Service 2",
        description: "Brief description of service 2.",
      },
      {
        id: "3",
        icon: "Shield",
        title: "Service 3",
        description: "Brief description of service 3.",
      },
      {
        id: "4",
        icon: "Leaf",
        title: "Service 4",
        description: "Brief description of service 4.",
      },
    ],
  },
  team: {
    sectionTitle: "Team",
    sectionSubtitle: "Meet the people behind the project",
    members: [
      {
        id: "1",
        name: "Name 1",
        crp: "Title or registration",
        description: "Short bio. Education, experience, or area of expertise.",
        image: "/assets/team-1.svg",
        whatsapp: "",
      },
      {
        id: "2",
        name: "Name 2",
        crp: "Title or registration",
        description: "Short bio. Education, experience, or area of expertise.",
        image: "/assets/team-2.svg",
        whatsapp: "",
      },
      {
        id: "3",
        name: "Name 3",
        crp: "Title or registration",
        description: "Short bio. Education, experience, or area of expertise.",
        image: "/assets/team-3.svg",
        whatsapp: "",
      },
    ],
  },
  contact: {
    sectionTitle: "Contact",
    sectionSubtitle: "Get in touch with us",
    namePlaceholder: "Your name",
    emailPlaceholder: "Your email",
    professionalLabel: "Who is your message for?",
    messagePlaceholder: "Your message",
    submitText: "Send",
    emailjsServiceId: "",
    emailjsTemplateId: "",
    emailjsPublicKey: "",
  },
  footer: {
    text: "© {year} Site Name. All rights reserved.",
    privacyLabel: "Privacy Policy",
  },
  social: {
    instagram: "",
    facebook: "",
    bluesky: "",
    x: "",
    pinterest: "",
    tiktok: "",
  },
  testimonials: {
    sectionTitle: "What our clients say",
    sectionSubtitle: "Real experiences from real people",
    items: [],
  },
};
