import { Link, useParams } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Check, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import PageHero from '@/components/PageHero';
import { getService, services } from '@/data/services';
import { useReveal } from '@/hooks/useReveal';
import NotFound from './NotFound';

function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, visible } = useReveal();
  return (
    <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-slate-100">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-semibold text-slate-900">{q}</span>
        <ChevronDown className={`h-5 w-5 shrink-0 text-brand-500 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-48 pb-5' : 'max-h-0'}`}>
        <p className="text-sm leading-relaxed text-slate-500">{a}</p>
      </div>
    </div>
  );
}

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = slug ? getService(slug) : undefined;
  if (!service) return <NotFound />;

  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={service.title}
        title={service.title}
        subtitle={service.short}
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Services', to: '/services' }, { label: service.title }]}
      />

      {/* Overview */}
      <section className="section">
        <div className="container-px">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Reveal>
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-50 to-brand-100 text-brand-600">
                  <service.icon className="h-8 w-8" />
                </span>
                <h2 className="mt-6 font-display text-3xl font-bold text-slate-900 sm:text-4xl text-balance">
                  Overview
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-slate-600">{service.description}</p>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal delay={150}>
                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-7">
                  <h3 className="text-lg font-bold text-slate-900">What's included</h3>
                  <ul className="mt-4 space-y-3">
                    {service.deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-3 text-sm text-slate-600">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-500 text-white">
                          <Check className="h-3 w-3" />
                        </span>
                        {d}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="btn-primary mt-6 w-full">
                    Get a quote
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section bg-slate-50">
        <div className="container-px">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">Features</span>
            <h2 className="mt-4 font-display text-3xl font-bold text-slate-900 sm:text-4xl text-balance">
              What you get with this service
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {service.features.map((f, i) => (
              <Reveal key={f} delay={(i % 3) * 80}>
                <div className="flex items-start gap-3 rounded-xl border border-slate-100 bg-white p-5">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500 text-white">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <p className="text-sm font-medium text-slate-700">{f}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="container-px">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">Process</span>
            <h2 className="mt-4 font-display text-3xl font-bold text-slate-900 sm:text-4xl text-balance">
              How we deliver this service
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {service.process.map((p, i) => (
              <Reveal key={p.title} delay={i * 100}>
                <div className="relative h-full rounded-2xl border border-slate-100 bg-white p-7">
                  <span className="font-display text-4xl font-bold text-brand-100">0{i + 1}</span>
                  <h3 className="mt-2 text-lg font-bold text-slate-900">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{p.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section bg-slate-50">
        <div className="container-px">
          <div className="grid gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <span className="eyebrow">FAQ</span>
              <h2 className="mt-4 font-display text-3xl font-bold text-slate-900 sm:text-4xl text-balance">
                Common questions
              </h2>
              <p className="mt-4 text-slate-500">
                Still have questions? We are happy to help — just reach out.
              </p>
              <Link to="/contact" className="btn-outline mt-6">
                Contact us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
            <div className="lg:col-span-7">
              <Reveal delay={150}>
                <div className="rounded-2xl border border-slate-100 bg-white p-2 px-7">
                  {service.faqs.map((f) => (
                    <FaqItem key={f.q} {...f} />
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="section">
        <div className="container-px">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-slate-900 sm:text-3xl text-balance">
              Other services you might like
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((s, i) => (
              <Reveal key={s.slug} delay={i * 80}>
                <Link to={`/services/${s.slug}`} className="group card flex h-full flex-col p-6 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lg">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <s.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 font-bold text-slate-900">{s.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-slate-500">{s.short}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="mt-10">
            <Link to="/services" className="btn-ghost">
              <ArrowLeft className="h-4 w-4" />
              All services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
