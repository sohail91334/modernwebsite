import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye, HeartHandshake, Sparkles, Gauge, Shield } from 'lucide-react';
import PageHero from '@/components/PageHero';
import { stats, values, team } from '@/data/team';
import { useReveal } from '@/hooks/useReveal';

const iconMap: Record<string, typeof Sparkles> = {
  Sparkles,
  Gauge,
  Eye,
  HeartHandshake,
};

function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, visible } = useReveal();
  return (
    <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

const timeline = [
  { year: '2018', title: 'The beginning', desc: 'Elena founded the agency with a single laptop and a commitment to craft over templates.' },
  { year: '2020', title: 'Going remote', desc: 'We assembled a fully remote team across Europe and expanded into WordPress and WooCommerce.' },
  { year: '2022', title: '100 projects', desc: 'We celebrated our 100th launched project and opened our SEO division.' },
  { year: '2025', title: 'Today', desc: 'A team of 12 serving 60+ active clients across e-commerce, SaaS and local business.' },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="We are a team of designers, developers and strategists"
        subtitle="Modern Web Agency was founded on a simple belief: every business deserves a website that is fast, beautiful and built to grow."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'About' }]}
      />

      {/* Story */}
      <section className="section">
        <div className="container-px">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <span className="eyebrow">Our story</span>
              <h2 className="mt-4 font-display text-3xl font-bold text-slate-900 sm:text-4xl text-balance">
                From a one-person studio to a full-service agency
              </h2>
              <div className="mt-6 space-y-4 text-slate-600 leading-relaxed">
                <p>
                  What started in 2018 as a solo design practice has grown into a team of twelve
                  specialists across design, development, SEO and project management. We have shipped
                  over 180 websites for clients in 14 countries.
                </p>
                <p>
                  We never set out to be the biggest agency — just the one our clients trust most.
                  That is why 98% of our clients stay with us year after year, and why most of our
                  new work comes from referrals.
                </p>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((s) => (
                  <div key={s.label} className="rounded-2xl border border-slate-100 bg-slate-50 p-6 text-center">
                    <p className="font-display text-3xl font-bold text-brand-600">{s.value}</p>
                    <p className="mt-1 text-sm text-slate-500">{s.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="section bg-slate-50">
        <div className="container-px">
          <div className="grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-2xl border border-slate-100 bg-white p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <Target className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-xl font-bold text-slate-900">Our mission</h3>
                <p className="mt-3 text-slate-600 leading-relaxed">
                  To help every business — regardless of size or budget — establish a fast, beautiful
                  and effective online presence that drives real, measurable growth.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="h-full rounded-2xl border border-slate-100 bg-white p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-50 text-accent-600">
                  <Eye className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-xl font-bold text-slate-900">Our vision</h3>
                <p className="mt-3 text-slate-600 leading-relaxed">
                  A web where every business has a site that loads instantly, looks distinctive and
                  is accessible to everyone — no templates required.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container-px">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Our values</span>
            <h2 className="mt-4 font-display text-3xl font-bold text-slate-900 sm:text-4xl text-balance">
              What we believe in
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => {
              const Icon = iconMap[v.icon] ?? Sparkles;
              return (
                <Reveal key={v.title} delay={i * 80}>
                  <div className="h-full rounded-2xl border border-slate-100 bg-white p-7 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-500/10">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-50 to-brand-100 text-brand-600">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-5 text-lg font-bold text-slate-900">{v.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-500">{v.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section bg-slate-50">
        <div className="container-px">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Our journey</span>
            <h2 className="mt-4 font-display text-3xl font-bold text-slate-900 sm:text-4xl text-balance">
              Seven years of growth
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={i * 100}>
                <div className="relative h-full rounded-2xl border border-slate-100 bg-white p-7">
                  <span className="font-display text-3xl font-bold text-brand-500">{t.year}</span>
                  <h3 className="mt-3 text-lg font-bold text-slate-900">{t.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{t.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team preview */}
      <section className="section">
        <div className="container-px">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-xl">
              <span className="eyebrow">The people</span>
              <h2 className="mt-4 font-display text-3xl font-bold text-slate-900 sm:text-4xl text-balance">
                Meet the team behind the work
              </h2>
            </div>
            <Link to="/team" className="btn-outline">
              See full team
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.slice(0, 3).map((m, i) => (
              <Reveal key={m.name} delay={i * 100}>
                <div className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img src={m.photo} alt={m.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-slate-900">{m.name}</h3>
                    <p className="text-sm text-brand-600">{m.role}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section pt-0">
        <div className="container-px">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-500 via-brand-600 to-accent-500 px-8 py-16 text-center sm:px-16">
              <div className="absolute inset-0 grid-pattern opacity-20" />
              <div className="relative">
                <h2 className="font-display text-3xl font-bold text-white sm:text-4xl text-balance">
                  Want to work with us?
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-lg text-white/90 text-balance">
                  We would love to hear about your project. Get in touch for a free consultation.
                </p>
                <Link to="/contact" className="btn-primary mt-8">
                  Get in touch
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
