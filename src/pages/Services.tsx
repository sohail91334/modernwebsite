import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import PageHero from '@/components/PageHero';
import { services } from '@/data/services';
import { useReveal } from '@/hooks/useReveal';

function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, visible } = useReveal();
  return (
    <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Web services for every stage of your business"
        subtitle="Whether you need a simple landing page, a custom-built platform or a full online store, we have a service designed for you."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Services' }]}
      />

      <section className="section">
        <div className="container-px">
          <div className="grid gap-6 lg:grid-cols-2">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={(i % 2) * 100}>
                <Link
                  to={`/services/${service.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-8 transition-all hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-500/10"
                >
                  <div className="flex items-start justify-between">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-50 to-brand-100 text-brand-600 transition-colors group-hover:from-brand-500 group-hover:to-brand-600 group-hover:text-white">
                      <service.icon className="h-7 w-7" />
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-slate-900">{service.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">{service.short}</p>
                  <ul className="mt-5 space-y-2">
                    {service.features.slice(0, 3).map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
                        <Check className="h-4 w-4 shrink-0 text-brand-500" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                    Explore service
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
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
                  Not sure which service fits?
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-lg text-white/90 text-balance">
                  Tell us your goals and we will recommend the right approach — free, no obligation.
                </p>
                <Link to="/contact" className="btn mt-8 bg-white text-brand-700 hover:bg-slate-100">
                  Get a free consultation
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
