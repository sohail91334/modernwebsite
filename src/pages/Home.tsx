import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  Star,
  Check,
  Quote,
  Sparkles,
  PenTool,
  Code,
  Search,
  ShoppingBag,
  Globe,
  Zap,
  TrendingUp,
} from 'lucide-react';
import { services } from '@/data/services';
import { projects } from '@/data/projects';
import { stats, testimonials } from '@/data/team';
import { useReveal } from '@/hooks/useReveal';

function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

const heroServices = [
  { icon: PenTool, label: 'Custom Design' },
  { icon: Code, label: 'Development' },
  { icon: ShoppingBag, label: 'E-commerce' },
  { icon: Search, label: 'SEO' },
];

const trustBadges = [
  { icon: Zap, value: '98', label: 'Lighthouse score' },
  { icon: Star, value: '4.9', label: 'Client rating' },
  { icon: TrendingUp, value: '+180%', label: 'Avg. conversion lift' },
];

export default function Home() {
  const featuredProjects = projects.slice(0, 3);
  const featuredServices = services.slice(0, 6);
  const heroImage = projects[0].cover;

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50/80 via-white to-white pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="absolute -top-32 right-0 h-[500px] w-[500px] rounded-full bg-brand-500/12 blur-3xl" />
        <div className="absolute top-40 -left-32 h-[400px] w-[400px] rounded-full bg-accent-500/8 blur-3xl" />

        <div className="container-px relative">
          {/* Top badge */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wider text-brand-700 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-accent-500 animate-pulse" />
              Award-winning web agency
              <span className="text-slate-300">|</span>
              <span className="text-slate-400 normal-case tracking-normal">Trusted by 60+ businesses</span>
            </div>
          </div>

          {/* Headline */}
          <div className="mx-auto mt-8 max-w-4xl text-center">
            <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl xl:text-7xl text-balance">
              We build websites that{' '}
              <span className="text-accent-500">grow your business</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-500 text-balance">
              From fully custom websites to WordPress, WooCommerce webshops and SEO — we design and
              build digital experiences that turn visitors into customers.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link to="/contact" className="btn-primary text-base">
                Start a project
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/portfolio" className="btn-outline text-base">
                View our work
              </Link>
            </div>
          </div>

          {/* Showcase image with floating badges */}
          <div className="relative mx-auto mt-16 max-w-5xl">
            <div className="absolute -inset-4 rounded-[2rem] bg-brand-500/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-2xl shadow-slate-300/40">
              <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50 px-5 py-3">
                <div className="flex items-center gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-amber-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <Globe className="h-3.5 w-3.5" />
                  modernweb.agency
                </div>
                <div className="w-12" />
              </div>
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={heroImage}
                  alt="Modern Web Agency project showcase"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />
              </div>
            </div>

            {/* Floating stat badge — top left */}
            <div className="absolute -left-4 top-12 hidden rounded-2xl border border-slate-100 bg-white p-4 shadow-xl shadow-slate-300/40 sm:block lg:-left-10">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <Zap className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display text-xl font-bold text-slate-900">98</p>
                  <p className="text-xs text-slate-400">Lighthouse score</p>
                </div>
              </div>
            </div>

            {/* Floating stat badge — bottom right */}
            <div className="absolute -right-4 bottom-12 hidden rounded-2xl border border-slate-100 bg-white p-4 shadow-xl shadow-slate-300/40 sm:block lg:-right-10">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-50 text-accent-600">
                  <TrendingUp className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display text-xl font-bold text-slate-900">+180%</p>
                  <p className="text-xs text-slate-400">Avg. conversion lift</p>
                </div>
              </div>
            </div>
          </div>

          {/* Service pills */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-3">
            {heroServices.map((s) => (
              <div
                key={s.label}
                className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                  <s.icon className="h-3.5 w-3.5" />
                </span>
                {s.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TRUST BAR ===== */}
      <section className="border-y border-slate-100 bg-slate-50 py-8">
        <div className="container-px">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">{s.value}</p>
                <p className="mt-1 text-sm text-slate-500">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="section">
        <div className="container-px">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">What we do</span>
            <h2 className="mt-4 font-display text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl text-balance">
              Everything your business needs to win online
            </h2>
            <p className="mt-4 text-lg text-slate-500 text-balance">
              From a simple landing page to a full-scale e-commerce platform, we have a service
              tailored to your goals and budget.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((service, i) => (
              <Reveal key={service.slug} delay={i * 80}>
                <Link
                  to={`/services/${service.slug}`}
                  className="group card flex h-full flex-col p-7 hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-500/10"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-50 to-brand-100 text-brand-600 transition-colors group-hover:from-brand-500 group-hover:to-brand-600 group-hover:text-white">
                    <service.icon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-slate-900">{service.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">{service.short}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link to="/services" className="btn-outline">
              View all services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="section bg-slate-50">
        <div className="container-px">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">How we work</span>
            <h2 className="mt-4 font-display text-3xl font-bold text-slate-900 sm:text-4xl text-balance">
              A proven process, transparent at every step
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { num: '01', title: 'Discover', desc: 'We learn your business, audience and goals in a deep-dive workshop.' },
              { num: '02', title: 'Design', desc: 'Wireframes and high-fidelity mockups crafted uniquely for your brand.' },
              { num: '03', title: 'Develop', desc: 'Clean, modern code built with best practices and performance in mind.' },
              { num: '04', title: 'Launch', desc: 'Rigorous QA, performance tuning and a smooth, supported go-live.' },
            ].map((step, i) => (
              <Reveal key={step.num} delay={i * 100}>
                <div className="relative h-full rounded-2xl border border-slate-100 bg-white p-7 shadow-sm">
                  <span className="font-display text-5xl font-bold text-brand-100">{step.num}</span>
                  <h3 className="mt-3 text-lg font-bold text-slate-900">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PORTFOLIO PREVIEW ===== */}
      <section className="section">
        <div className="container-px">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-xl">
              <span className="eyebrow">Recent work</span>
              <h2 className="mt-4 font-display text-3xl font-bold text-slate-900 sm:text-4xl text-balance">
                Projects we are proud of
              </h2>
            </div>
            <Link to="/portfolio" className="btn-outline">
              See all projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, i) => (
              <Reveal key={project.slug} delay={i * 100}>
                <Link to={`/portfolio/${project.slug}`} className="group block overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100 transition-all hover:shadow-xl">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={project.cover}
                      alt={project.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700 backdrop-blur">
                      {project.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-600">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-500">{project.excerpt}</p>
                    <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-brand-600">
                      View case study
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="section bg-gradient-to-b from-slate-50 to-white">
        <div className="container-px">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Client stories</span>
            <h2 className="mt-4 font-display text-3xl font-bold text-slate-900 sm:text-4xl text-balance">
              Trusted by businesses that grow with us
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 100}>
                <figure className="h-full rounded-2xl border border-slate-100 bg-white p-8 shadow-sm">
                  <Quote className="h-8 w-8 text-brand-200" />
                  <blockquote className="mt-4 text-base leading-relaxed text-slate-700">
                    "{t.quote}"
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-4">
                    <img src={t.avatar} alt={t.name} loading="lazy" className="h-12 w-12 rounded-full object-cover" />
                    <div>
                      <p className="font-semibold text-slate-900">{t.name}</p>
                      <p className="text-sm text-slate-500">{t.role}, {t.company}</p>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="section">
        <div className="container-px">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-500 via-brand-600 to-accent-500 px-8 py-16 text-center sm:px-16 lg:py-24">
              <div className="absolute inset-0 grid-pattern opacity-20" />
              <div className="relative">
                <h2 className="font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl text-balance">
                  Let's build your next website together
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-lg text-white/90 text-balance">
                  Tell us about your project and get a free, no-obligation quote within 24 hours.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <Link to="/contact" className="btn bg-white text-brand-700 hover:bg-slate-100 hover:shadow-lg">
                    Get a free quote
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link to="/pricing" className="btn border border-white/40 bg-transparent text-white hover:bg-white/10">
                    View pricing
                  </Link>
                </div>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/80">
                  {['Free consultation', 'No obligation', 'Reply within 24h'].map((item) => (
                    <span key={item} className="flex items-center gap-1.5">
                      <Check className="h-4 w-4" /> {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
