import {
  Code2,
  Layout,
  ShoppingBag,
  Search,
  Gauge,
  Palette,
  Server,
  Smartphone,
  type LucideIcon,
} from 'lucide-react';

export type Service = {
  slug: string;
  title: string;
  short: string;
  icon: LucideIcon;
  description: string;
  features: string[];
  process: { title: string; detail: string }[];
  deliverables: string[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: 'custom-website',
    title: 'Fully Custom Website',
    short: 'Bespoke, hand-coded websites built from scratch to match your brand exactly.',
    icon: Code2,
    description:
      'A fully custom website is designed and developed from a blank canvas. Every pixel, interaction and line of code is crafted specifically for your business — no templates, no page builders, no compromises. The result is a fast, unique and scalable site that sets you apart from every competitor in your space.',
    features: [
      'Pixel-perfect custom UI/UX design',
      'Hand-coded HTML, CSS and JavaScript',
      'Blazing-fast performance (90+ Lighthouse)',
      'Fully responsive on every device',
      'Accessible (WCAG 2.1 AA)',
      'Headless CMS integration available',
    ],
    process: [
      { title: 'Discovery', detail: 'We learn your business, audience and goals in a deep-dive workshop.' },
      { title: 'Design', detail: 'Wireframes and high-fidelity mockups crafted uniquely for your brand.' },
      { title: 'Develop', detail: 'Clean, semantic code built with modern tooling and best practices.' },
      { title: 'Launch', detail: 'Rigorous QA, performance tuning and a smooth go-live.' },
    ],
    deliverables: [
      'Up to 8 custom-designed pages',
      'Responsive design system',
      'On-page SEO setup',
      'Analytics & Search Console',
      '30 days post-launch support',
    ],
    faqs: [
      { q: 'How long does a custom website take?', a: 'Typically 4–8 weeks depending on scope and how quickly content is provided.' },
      { q: 'Do I own the code?', a: 'Yes — you receive full source code and intellectual property on launch.' },
      { q: 'Can I edit content myself?', a: 'Absolutely. We can integrate a headless CMS so your team can update copy and images.' },
    ],
  },
  {
    slug: 'html-css-website',
    title: 'Basic Website (HTML & CSS)',
    short: 'Lightweight, fast and affordable static sites for a clean online presence.',
    icon: Layout,
    description:
      'A basic HTML & CSS website is the most lightweight and cost-effective way to establish your online presence. Built with clean, static markup, these sites load instantly, are virtually maintenance-free and work flawlessly across all browsers. Perfect for portfolios, small businesses and landing pages that need to be online quickly.',
    features: [
      'Clean, semantic HTML5 & CSS3',
      'No heavy frameworks or plugins',
      'Sub-second load times',
      'Mobile-first responsive layout',
      'SEO-friendly markup',
      'Easy to host anywhere',
    ],
    process: [
      { title: 'Brief', detail: 'A short questionnaire captures your content and style preferences.' },
      { title: 'Build', detail: 'We code the pages directly in HTML/CSS — fast and transparent.' },
      { title: 'Review', detail: 'You review on a staging URL and request tweaks.' },
      { title: 'Deploy', detail: 'We launch on your hosting and connect your domain.' },
    ],
    deliverables: [
      'Up to 5 static pages',
      'Contact form setup',
      'Basic on-page SEO',
      'Mobile responsive',
      '14 days post-launch support',
    ],
    faqs: [
      { q: 'Can I add more pages later?', a: 'Yes, we can add pages at any time for a fixed per-page rate.' },
      { q: 'Is a CMS included?', a: 'No — content edits are made by us. For self-editing, consider our custom or WordPress packages.' },
      { q: 'Where is it hosted?', a: 'Any static host works. We can recommend affordable options and set it up for you.' },
    ],
  },
  {
    slug: 'wordpress-elementor',
    title: 'WordPress with Elementor',
    short: 'Flexible, editable WordPress sites powered by the Elementor page builder.',
    icon: Palette,
    description:
      'WordPress powers over 40% of the web, and Elementor makes it visual. We build a professionally designed, fully editable WordPress site so your team can update pages, text and images with an intuitive drag-and-drop editor — no developer needed for day-to-day changes.',
    features: [
      'Custom Elementor theme design',
      'Drag-and-drop page editing',
      'Blog & content management',
      'Contact & lead forms',
      'Speed optimization',
      'Security hardening',
    ],
    process: [
      { title: 'Plan', detail: 'We map the site structure and content requirements.' },
      { title: 'Design', detail: 'Custom Elementor templates built to match your brand.' },
      { title: 'Configure', detail: 'Plugins, forms, SEO and security set up properly.' },
      { title: 'Handover', detail: 'A training session so your team can edit confidently.' },
    ],
    deliverables: [
      'Up to 7 designed pages',
      'Elementor Pro license (1 year)',
      'Blog setup',
      'SEO plugin configuration',
      '1-hour editing training',
    ],
    faqs: [
      { q: 'Can I edit everything myself?', a: 'Yes — Elementor lets you edit all content visually without code.' },
      { q: 'Do you handle hosting?', a: 'We can set up managed WordPress hosting and migrate existing sites for free.' },
      { q: 'Is it mobile-friendly?', a: 'Every page is built responsive and tested on real devices.' },
    ],
  },
  {
    slug: 'woocommerce-webshop',
    title: 'WooCommerce Webshop',
    short: 'Full-featured online stores built on WooCommerce with everything you need to sell.',
    icon: ShoppingBag,
    description:
      'WooCommerce is the most powerful way to sell online with WordPress. We build a complete webshop with product catalog, cart, secure checkout, shipping, taxes and inventory — all designed to convert visitors into customers and easy for you to manage day to day.',
    features: [
      'Custom store design',
      'Product catalog & categories',
      'Secure checkout (Stripe, PayPal)',
      'Shipping & tax rules',
      'Inventory management',
      'Order & customer dashboard',
    ],
    process: [
      { title: 'Strategy', detail: 'We define products, payments, shipping and target markets.' },
      { title: 'Design', detail: 'A conversion-focused store design tailored to your products.' },
      { title: 'Build', detail: 'WooCommerce configured, products imported and payments connected.' },
      { title: 'Launch', detail: 'End-to-end testing of checkout, emails and shipping.' },
    ],
    deliverables: [
      'Up to 20 products imported',
      'Payment gateway setup',
      'Shipping & tax configuration',
      'Order confirmation emails',
      'Store management training',
    ],
    faqs: [
      { q: 'Which payment providers?', a: 'Stripe, PayPal, Mollie and most major gateways are supported.' },
      { q: 'Can I manage products myself?', a: 'Yes — the WordPress dashboard lets you add, edit and manage products easily.' },
      { q: 'Do you handle large catalogs?', a: 'We can import thousands of products via CSV or API integration.' },
    ],
  },
  {
    slug: 'webshops',
    title: 'Custom Webshops',
    short: 'Scalable, high-performance e-commerce platforms beyond WordPress.',
    icon: Server,
    description:
      'When WooCommerce is not enough, we build custom webshops on modern e-commerce platforms or fully headless architectures. These stores handle high traffic, complex product configurations, multi-language and advanced integrations — built to scale with your business.',
    features: [
      'Headless or platform-based build',
      'Advanced product configurations',
      'Multi-currency & multi-language',
      'ERP/CRM integrations',
      'Custom checkout flows',
      'Real-time inventory sync',
    ],
    process: [
      { title: 'Architecture', detail: 'We choose the right stack for your scale and integrations.' },
      { title: 'Design', detail: 'A premium store experience designed to maximize conversion.' },
      { title: 'Integrate', detail: 'Payments, shipping, ERP and analytics connected.' },
      { title: 'Scale', detail: 'Performance tuning and load testing before launch.' },
    ],
    deliverables: [
      'Custom store front-end',
      'Up to 100 products imported',
      '3 integrations (ERP/CRM/Shipping)',
      'Advanced analytics dashboard',
      '90 days post-launch support',
    ],
    faqs: [
      { q: 'Which platforms do you use?', a: 'Shopify, Medusa, Saleor or a fully custom headless build — we recommend the best fit for you.' },
      { q: 'Can it handle high traffic?', a: 'Yes — our headless builds are designed for thousands of concurrent shoppers.' },
      { q: 'Do you migrate existing stores?', a: 'Yes, we handle full migrations with zero data loss and minimal downtime.' },
    ],
  },
  {
    slug: 'seo',
    title: 'Search Engine Optimization',
    short: 'Rank higher on Google with technical, on-page and content-driven SEO.',
    icon: Search,
    description:
      'A beautiful website is useless if nobody finds it. Our SEO service combines technical optimization, on-page improvements, keyword strategy and content planning to move your site up the Google rankings — bringing you consistent, free organic traffic that compounds over time.',
    features: [
      'Technical SEO audit',
      'Keyword research & strategy',
      'On-page optimization',
      'Content planning',
      'Local SEO & Google Business',
      'Monthly ranking reports',
    ],
    process: [
      { title: 'Audit', detail: 'A full technical and content audit of your current site.' },
      { title: 'Strategy', detail: 'Keyword mapping and a 90-day action plan.' },
      { title: 'Optimize', detail: 'On-page fixes, content creation and technical improvements.' },
      { title: 'Grow', detail: 'Monthly reporting and continuous optimization.' },
    ],
    deliverables: [
      'Full SEO audit report',
      'Keyword strategy document',
      'On-page optimization (10 pages)',
      'Google Business Profile setup',
      'Monthly performance report',
    ],
    faqs: [
      { q: 'How soon will I see results?', a: 'SEO is a long game — most clients see meaningful movement in 3–6 months.' },
      { q: 'Do you guarantee #1 rankings?', a: 'No reputable agency can. We guarantee honest work, transparent reporting and real progress.' },
      { q: 'Is SEO a one-time fee?', a: 'No — SEO is ongoing. We offer monthly retainers for sustained growth.' },
    ],
  },
  {
    slug: 'performance-optimization',
    title: 'Performance Optimization',
    short: 'Make your existing site lightning-fast and improve Core Web Vitals.',
    icon: Gauge,
    description:
      'Site speed directly affects rankings, conversions and user experience. We audit your existing website, find every performance bottleneck and fix them — improving your Core Web Vitals, Lighthouse scores and real-world load times without rebuilding your site from scratch.',
    features: [
      'Core Web Vitals audit',
      'Image & asset optimization',
      'Code minification & caching',
      'Database & query tuning',
      'CDN configuration',
      'Before/after benchmarking',
    ],
    process: [
      { title: 'Benchmark', detail: 'We measure current speed scores and identify bottlenecks.' },
      { title: 'Optimize', detail: 'Images, code, caching and server settings tuned.' },
      { title: 'Verify', detail: 'Re-test and confirm Core Web Vitals pass.' },
      { title: 'Monitor', detail: 'Ongoing monitoring to keep scores high.' },
    ],
    deliverables: [
      'Performance audit report',
      'All optimizations applied',
      '90+ Lighthouse score target',
      'CDN setup',
      '30 days monitoring',
    ],
    faqs: [
      { q: 'Will this break my site?', a: 'No — we test every change on a staging copy before applying it live.' },
      { q: 'Can you optimize any platform?', a: 'Yes — WordPress, custom, Shopify and most other platforms.' },
      { q: 'How much faster will it be?', a: 'Most sites see a 40–70% improvement in load time after optimization.' },
    ],
  },
  {
    slug: 'responsive-redesign',
    title: 'Responsive Redesign',
    short: 'Modernize an outdated site with a fresh, mobile-first responsive redesign.',
    icon: Smartphone,
    description:
      'If your current website looks dated, breaks on mobile or no longer reflects your brand, a responsive redesign brings it into the modern era. We keep your content and SEO equity while giving you a fresh, fast, mobile-first design that converts visitors into customers.',
    features: [
      'Modern mobile-first design',
      'Content & SEO migration',
      'Improved conversion paths',
      'Accessibility upgrades',
      'Brand refresh alignment',
      'Smooth redirect strategy',
    ],
    process: [
      { title: 'Assess', detail: 'We review your current site, content and analytics.' },
      { title: 'Redesign', detail: 'A fresh, responsive design that elevates your brand.' },
      { title: 'Migrate', detail: 'Content moved over with SEO-safe redirects in place.' },
      { title: 'Relaunch', detail: 'Zero-downtime launch with full QA.' },
    ],
    deliverables: [
      'Up to 10 redesigned pages',
      'Content migration',
      '301 redirect map',
      'SEO preservation',
      '30 days support',
    ],
    faqs: [
      { q: 'Will I lose my Google rankings?', a: 'No — we use 301 redirects and preserve all SEO equity during migration.' },
      { q: 'Can you keep my current CMS?', a: 'Usually yes. We can redesign within your existing platform or migrate to a new one.' },
      { q: 'How long does a redesign take?', a: 'Most redesigns take 3–6 weeks depending on the number of pages.' },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
