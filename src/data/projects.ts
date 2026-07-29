export type Project = {
  slug: string;
  title: string;
  client: string;
  category: string;
  service: string;
  year: string;
  cover: string;
  url: string;
  excerpt: string;
  description: string;
  challenge: string;
  solution: string;
  results: { label: string; value: string }[];
  gallery: string[];
  tags: string[];
};

export const projects: Project[] = [
  {
    slug: 'lumen-fashion-store',
    title: 'Lumen Fashion — Online Store',
    client: 'Lumen Fashion',
    category: 'E-commerce',
    service: 'WooCommerce Webshop',
    year: '2025',
    cover: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=1200',
    url: 'lumen-fashion.com',
    excerpt: 'A premium WooCommerce store for a modern fashion label, with a 3x increase in online sales.',
    description:
      'Lumen Fashion needed a sophisticated online store that matched the premium feel of their physical boutiques. We designed and built a custom WooCommerce webshop with curated product pages, a frictionless checkout and integrated inventory management.',
    challenge:
      'The client had an outdated store with a 60% cart-abandonment rate, slow load times and no mobile optimization. They needed a complete rebuild that preserved their existing customer base and product data while dramatically improving conversion.',
    solution:
      'We rebuilt the store on WooCommerce with a custom Elementor theme, streamlined the checkout to a single page, optimized images for fast loading and implemented a mobile-first design. Inventory was migrated seamlessly with zero downtime.',
    results: [
      { label: 'Sales increase', value: '3.1x' },
      { label: 'Cart abandonment', value: '-42%' },
      { label: 'Load time', value: '1.2s' },
      { label: 'Mobile conversion', value: '+68%' },
    ],
    gallery: [
      'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2305444/pexels-photo-2305444.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    tags: ['WooCommerce', 'Elementor', 'Fashion', 'E-commerce'],
  },
  {
    slug: 'nordic-saas-platform',
    title: 'Nordic Cloud — SaaS Marketing Site',
    client: 'Nordic Cloud',
    category: 'Custom Website',
    service: 'Fully Custom Website',
    year: '2025',
    cover: 'https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg?auto=compress&cs=tinysrgb&w=1200',
    url: 'nordiccloud.io',
    excerpt: 'A high-performance, hand-coded marketing site for a B2B SaaS startup.',
    description:
      'Nordic Cloud, a fast-growing B2B SaaS startup, needed a marketing website that loaded instantly, ranked well and clearly communicated a complex product. We delivered a fully custom, hand-coded site with a headless CMS for easy content updates.',
    challenge:
      'The startup had a template-based site that loaded slowly, looked generic and could not clearly explain their technical product. They needed a distinctive design that built trust with enterprise buyers while staying fast and editable.',
    solution:
      'We designed a custom design system, hand-coded the front-end for sub-second load times and integrated a headless CMS so the marketing team could update content independently. Interactive product demos were built with lightweight animations.',
    results: [
      { label: 'Lighthouse score', value: '98' },
      { label: 'Bounce rate', value: '-35%' },
      { label: 'Demo signups', value: '+120%' },
      { label: 'Load time', value: '0.8s' },
    ],
    gallery: [
      'https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3182832/pexels-photo-3182832.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    tags: ['Custom', 'SaaS', 'Headless CMS', 'B2B'],
  },
  {
    slug: 'atlas-restaurant-group',
    title: 'Atlas Restaurant Group',
    client: 'Atlas Group',
    category: 'WordPress',
    service: 'WordPress with Elementor',
    year: '2024',
    cover: 'https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1200',
    url: 'atlasgroup.com',
    excerpt: 'A multi-location restaurant website with online reservations and menus.',
    description:
      'Atlas Restaurant Group operates five locations across the city. They needed a single WordPress site that could showcase each venue, display live menus and accept reservations — all editable by their marketing team.',
    challenge:
      'Five locations meant five sets of menus, hours and imagery. The old site was hard to update and reservations were handled by phone, causing lost covers during peak hours.',
    solution:
      'We built a custom Elementor theme with a location switcher, live menu management and an integrated reservation system. The marketing team was trained to update seasonal menus and events themselves.',
    results: [
      { label: 'Online reservations', value: '+210%' },
      { label: 'Page edits by client', value: 'Weekly' },
      { label: 'Load time', value: '1.5s' },
      { label: 'Google ranking', value: 'Top 3' },
    ],
    gallery: [
      'https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    tags: ['WordPress', 'Elementor', 'Restaurant', 'Reservations'],
  },
  {
    slug: 'greenfield-organic-seo',
    title: 'Greenfield Organics — SEO Campaign',
    client: 'Greenfield Organics',
    category: 'SEO',
    service: 'Search Engine Optimization',
    year: '2025',
    cover: 'https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg?auto=compress&cs=tinysrgb&w=1200',
    url: 'greenfieldorganics.com',
    excerpt: 'A 6-month SEO campaign that tripled organic traffic for an organic food brand.',
    description:
      'Greenfield Organics had a beautiful website but almost no organic traffic. We ran a comprehensive SEO campaign combining technical fixes, content strategy and local SEO to dramatically grow their visibility on Google.',
    challenge:
      'The site ranked outside the top 100 for all target keywords, had significant technical issues and no content strategy. Their competitors dominated search results.',
    solution:
      'We fixed 40+ technical issues, created a keyword strategy targeting 60 commercial keywords, published 24 optimized blog posts and optimized their Google Business Profile for local search.',
    results: [
      { label: 'Organic traffic', value: '3.4x' },
      { label: 'Top-10 keywords', value: '47' },
      { label: 'Inquiries', value: '+185%' },
      { label: 'Domain authority', value: '+22' },
    ],
    gallery: [
      'https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1656663/pexels-photo-1656663.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    tags: ['SEO', 'Content', 'Local SEO', 'Organic Food'],
  },
  {
    slug: 'vertex-tech-webshop',
    title: 'Vertex Tech — Custom Webshop',
    client: 'Vertex Tech',
    category: 'E-commerce',
    service: 'Custom Webshops',
    year: '2025',
    cover: 'https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg?auto=compress&cs=tinysrgb&w=1200',
    url: 'vertextech.com',
    excerpt: 'A headless e-commerce platform handling 50,000 products and ERP sync.',
    description:
      'Vertex Tech sells over 50,000 electronics products and needed a webshop that could handle complex product configurations, real-time inventory sync with their ERP and high traffic during sales events.',
    challenge:
      'Their previous platform buckled under traffic spikes, had no ERP integration and product management was manual. They needed an enterprise-grade solution.',
    solution:
      'We built a headless e-commerce front-end with a custom backend, real-time ERP integration for inventory and pricing, advanced product filtering and a CDN-backed architecture for traffic spikes.',
    results: [
      { label: 'Products managed', value: '52,000' },
      { label: 'Peak traffic', value: '15k/min' },
      { label: 'Checkout speed', value: '0.6s' },
      { label: 'Revenue', value: '+90%' },
    ],
    gallery: [
      'https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    tags: ['Headless', 'E-commerce', 'ERP', 'Electronics'],
  },
  {
    slug: 'meridian-law-firm',
    title: 'Meridian Law Firm',
    client: 'Meridian Law',
    category: 'Custom Website',
    service: 'Fully Custom Website',
    year: '2024',
    cover: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1200',
    url: 'meridianlaw.com',
    excerpt: 'A refined, trustworthy website for a boutique law firm with a clear practice focus.',
    description:
      'Meridian Law needed a website that conveyed authority and trust while clearly communicating their practice areas. We delivered a custom, content-rich site with a refined editorial design.',
    challenge:
      'Legal websites are often dense and impersonal. Meridian wanted to stand out with a site that felt human, clear and premium without overwhelming visitors.',
    solution:
      'We designed a clean editorial layout with clear practice-area pages, attorney profiles and a simple contact flow. The site is hand-coded for speed and accessibility.',
    results: [
      { label: 'Consultation requests', value: '+140%' },
      { label: 'Time on page', value: '+3.2 min' },
      { label: 'Lighthouse score', value: '96' },
      { label: 'Load time', value: '0.9s' },
    ],
    gallery: [
      'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    tags: ['Custom', 'Law Firm', 'Professional', 'Editorial'],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
