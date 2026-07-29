export type Plan = {
  name: string;
  tagline: string;
  price: string;
  period: string;
  popular?: boolean;
  features: string[];
  cta: string;
};

export const plans: Plan[] = [
  {
    name: 'Starter',
    tagline: 'A clean, fast online presence for small businesses.',
    price: '€499',
    period: 'one-time',
    features: [
      'Up to 5 static pages',
      'HTML & CSS build',
      'Mobile responsive',
      'Contact form',
      'Basic on-page SEO',
      '14 days support',
    ],
    cta: 'Get started',
  },
  {
    name: 'Business',
    tagline: 'A fully custom website designed to grow with you.',
    price: '€2,499',
    period: 'one-time',
    popular: true,
    features: [
      'Up to 8 custom pages',
      'Fully custom design',
      'Hand-coded front-end',
      'Headless CMS integration',
      'On-page SEO setup',
      'Analytics & Search Console',
      '30 days support',
    ],
    cta: 'Get started',
  },
  {
    name: 'E-commerce',
    tagline: 'A complete online store ready to sell.',
    price: '€3,999',
    period: 'one-time',
    features: [
      'WooCommerce or custom',
      'Up to 20 products imported',
      'Payment gateway setup',
      'Shipping & tax config',
      'Order confirmation emails',
      'Store management training',
      '60 days support',
    ],
    cta: 'Get started',
  },
];

export type SeoPlan = {
  name: string;
  tagline: string;
  price: string;
  period: string;
  popular?: boolean;
  features: string[];
  cta: string;
};

export const seoPlans: SeoPlan[] = [
  {
    name: 'Local SEO',
    tagline: 'Get found by customers in your area.',
    price: '€399',
    period: '/ month',
    features: [
      'Google Business Profile',
      'Local keyword targeting',
      '5 location pages',
      'Monthly ranking report',
      'Review management',
    ],
    cta: 'Start ranking',
  },
  {
    name: 'Growth SEO',
    tagline: 'Comprehensive SEO for growing businesses.',
    price: '€799',
    period: '/ month',
    popular: true,
    features: [
      'Technical SEO audit',
      '20 target keywords',
      '4 blog posts / month',
      'On-page optimization',
      'Monthly performance report',
      'Competitor tracking',
    ],
    cta: 'Start ranking',
  },
  {
    name: 'Enterprise SEO',
    tagline: 'Full-scale SEO for competitive markets.',
    price: '€1,599',
    period: '/ month',
    features: [
      'Everything in Growth',
      '60 target keywords',
      '8 blog posts / month',
      'Backlink strategy',
      'Dedicated SEO manager',
      'Bi-weekly strategy calls',
    ],
    cta: 'Start ranking',
  },
];

export type FaqItem = { q: string; a: string };

export const pricingFaqs: FaqItem[] = [
  {
    q: 'Are there any hidden costs?',
    a: 'No. The prices listed are all-inclusive for the scope described. Domain and hosting are billed separately by the provider of your choice, and we can recommend affordable options.',
  },
  {
    q: 'How do payments work?',
    a: 'For project work, we take a 50% deposit to start and 50% on launch. Monthly retainers (SEO) are billed at the start of each month.',
  },
  {
    q: 'Can I upgrade my plan later?',
    a: 'Absolutely. You can start with a Starter site and upgrade to a custom build or e-commerce store at any time — we credit what you have already paid.',
  },
  {
    q: 'Do you offer maintenance after launch?',
    a: 'Yes. We offer monthly maintenance plans starting at €49/month that include updates, backups, security monitoring and small content changes.',
  },
  {
    q: 'What if I am not happy with the design?',
    a: 'Every project includes two rounds of revisions at no extra cost. We do not consider the design done until you are happy with it.',
  },
];
