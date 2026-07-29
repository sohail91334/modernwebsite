export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  photo: string;
  socials: { label: string; href: string }[];
};

export const team: TeamMember[] = [
  {
    name: 'Elena Marchetti',
    role: 'Founder & Creative Director',
    bio: 'Elena founded Modern Web Agency in 2018 with a vision to bring design-studio quality to every business. She leads creative direction across all projects.',
    photo: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600',
    socials: [
      { label: 'LinkedIn', href: '#' },
      { label: 'Twitter', href: '#' },
    ],
  },
  {
    name: 'David Okafor',
    role: 'Lead Developer',
    bio: 'David is a full-stack engineer specializing in headless architectures and performance. He has shipped over 120 production websites.',
    photo: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600',
    socials: [
      { label: 'LinkedIn', href: '#' },
      { label: 'GitHub', href: '#' },
    ],
  },
  {
    name: 'Sofia Bergström',
    role: 'UX/UI Designer',
    bio: 'Sofia turns complex requirements into intuitive interfaces. Her work has been recognized by Awwwards and CSS Design Awards.',
    photo: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=600',
    socials: [
      { label: 'LinkedIn', href: '#' },
      { label: 'Dribbble', href: '#' },
    ],
  },
  {
    name: 'Marcus Lindqvist',
    role: 'SEO Specialist',
    bio: 'Marcus has 9 years of experience growing organic traffic for brands across e-commerce, SaaS and local business. Data-driven and relentless.',
    photo: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600',
    socials: [
      { label: 'LinkedIn', href: '#' },
      { label: 'Twitter', href: '#' },
    ],
  },
  {
    name: 'Priya Nair',
    role: 'WordPress & WooCommerce Lead',
    bio: 'Priya is our go-to expert for everything WordPress. She has built and optimized over 200 WooCommerce stores.',
    photo: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=600',
    socials: [
      { label: 'LinkedIn', href: '#' },
      { label: 'Twitter', href: '#' },
    ],
  },
  {
    name: 'Tom Albright',
    role: 'Project Manager',
    bio: 'Tom keeps every project on time and on budget. He is the calm voice that makes sure nothing falls through the cracks.',
    photo: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=600',
    socials: [
      { label: 'LinkedIn', href: '#' },
    ],
  },
];

export type Value = {
  title: string;
  description: string;
  icon: string;
};

export const values: Value[] = [
  {
    title: 'Craft over templates',
    description: 'Every project is built from scratch. No recycled templates — your site is as unique as your business.',
    icon: 'Sparkles',
  },
  {
    title: 'Speed is a feature',
    description: 'We obsess over performance. Fast sites rank better, convert more and make visitors happy.',
    icon: 'Gauge',
  },
  {
    title: 'Transparent process',
    description: 'You always know what we are working on, why, and what is next. No black boxes, no surprises.',
    icon: 'Eye',
  },
  {
    title: 'Long-term partnership',
    description: 'We stick around after launch. Most of our clients have worked with us for years.',
    icon: 'HeartHandshake',
  },
];

export type Stat = { value: string; label: string };

export const stats: Stat[] = [
  { value: '180+', label: 'Projects delivered' },
  { value: '60+', label: 'Happy clients' },
  { value: '7 yrs', label: 'In business' },
  { value: '98%', label: 'Client retention' },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      'Modern Web Agency rebuilt our online store and the results were immediate. Sales tripled within three months of launch. The team is responsive, creative and genuinely invested in our success.',
    name: 'Isabella Conti',
    role: 'CEO',
    company: 'Lumen Fashion',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    quote:
      'We needed a site that could explain a complex product without losing visitors. They delivered a custom build that loads in under a second and our demo signups doubled.',
    name: 'Anders Holm',
    role: 'Founder',
    company: 'Nordic Cloud',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    quote:
      'The SEO work they did for us was transformative. We went from invisible on Google to ranking in the top three for our main keywords. The reporting is clear and the results speak for themselves.',
    name: 'Marta Kowalski',
    role: 'Marketing Director',
    company: 'Greenfield Organics',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    quote:
      'Our old site was slow and broken on mobile. The redesign they delivered is beautiful, fast and our reservation system actually works now. Best agency we have worked with.',
    name: 'Luca Romano',
    role: 'Owner',
    company: 'Atlas Restaurant Group',
    avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
];
