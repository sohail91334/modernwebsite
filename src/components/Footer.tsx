import { Link } from 'react-router-dom';
import { Globe, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

const footerLinks = {
  Company: [
    { label: 'About Us', to: '/about' },
    { label: 'Our Team', to: '/team' },
    { label: 'Portfolio', to: '/portfolio' },
    { label: 'Contact', to: '/contact' },
  ],
  Services: [
    { label: 'Fully Custom Website', to: '/services/custom-website' },
    { label: 'HTML & CSS Website', to: '/services/html-css-website' },
    { label: 'WordPress + Elementor', to: '/services/wordpress-elementor' },
    { label: 'WooCommerce Webshop', to: '/services/woocommerce-webshop' },
    { label: 'Custom Webshops', to: '/services/webshops' },
    { label: 'SEO', to: '/services/seo' },
  ],
  Resources: [
    { label: 'Pricing', to: '/pricing' },
    { label: 'All Services', to: '/services' },
    { label: 'All Projects', to: '/portfolio' },
  ],
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-50 border-t border-slate-100 text-slate-500">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute -top-40 left-1/2 h-80 w-[600px] -translate-x-1/2 rounded-full bg-brand-500/5 blur-3xl" />

      <div className="container-px relative">
        {/* CTA band */}
        <div className="flex flex-col items-start justify-between gap-6 border-b border-slate-200 py-12 lg:flex-row lg:items-center">
          <div>
            <h3 className="font-display text-2xl font-bold text-slate-900 sm:text-3xl">
              Ready to build something great?
            </h3>
            <p className="mt-2 text-slate-500">
              Let's talk about your project. First consultation is free.
            </p>
          </div>
          <Link to="/contact" className="btn-primary shrink-0">
            Get a free quote
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Main */}
        <div className="grid gap-10 py-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white">
                <Globe className="h-5 w-5" />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-base font-bold text-slate-900">Modern Web</span>
                <span className="text-xs font-medium uppercase tracking-widest text-brand-600">
                  Agency
                </span>
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed">
              We design and build custom websites, WordPress sites, webshops and SEO campaigns that
              help businesses grow online.
            </p>
            <div className="mt-6 space-y-2.5 text-sm">
              <a href="mailto:hello@modernweb.agency" className="flex items-center gap-3 transition hover:text-brand-600">
                <Mail className="h-4 w-4 text-brand-500" /> hello@modernweb.agency
              </a>
              <a href="tel:+10000000000" className="flex items-center gap-3 transition hover:text-brand-600">
                <Phone className="h-4 w-4 text-brand-500" /> +1 (000) 000-0000
              </a>
              <p className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-brand-500" /> Stockholm, Sweden
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8">
            {Object.entries(footerLinks).map(([heading, links]) => (
              <div key={heading}>
                <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
                  {heading}
                </h4>
                <ul className="space-y-3">
                  {links.map((l) => (
                    <li key={l.to}>
                      <Link to={l.to} className="text-sm transition hover:text-brand-600">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-200 py-6 text-xs sm:flex-row">
          <p>© {new Date().getFullYear()} Modern Web Agency. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/about" className="transition hover:text-brand-600">Privacy</Link>
            <Link to="/about" className="transition hover:text-brand-600">Terms</Link>
            <Link to="/contact" className="transition hover:text-brand-600">Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
