import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Check, ChevronDown, ArrowRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import { plans, seoPlans, pricingFaqs } from '@/data/pricing';
import { useReveal } from '@/hooks/useReveal';

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
      <button onClick={() => setOpen((v) => !v)} className="flex w-full items-center justify-between gap-4 py-5 text-left">
        <span className="font-semibold text-slate-900">{q}</span>
        <ChevronDown className={`h-5 w-5 shrink-0 text-brand-500 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-60 pb-5' : 'max-h-0'}`}>
        <p className="text-sm leading-relaxed text-slate-500">{a}</p>
      </div>
    </div>
  );
}

function PlanCard({ plan, accent }: { plan: typeof plans[number]; accent?: boolean }) {
  return (
    <div
      className={`relative flex h-full flex-col rounded-2xl border p-8 transition-all ${
        plan.popular
          ? 'border-brand-300 bg-white shadow-xl shadow-brand-500/10 lg:-translate-y-3'
          : 'border-slate-100 bg-white hover:shadow-lg'
      }`}
    >
      {plan.popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-500 px-4 py-1 text-xs font-semibold text-white shadow-lg">
          Most popular
        </span>
      )}
      <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
      <p className="mt-2 text-sm text-slate-500">{plan.tagline}</p>
      <div className="mt-5 flex items-baseline gap-1.5">
        <span className={`font-display text-4xl font-bold ${accent ? 'text-accent-600' : 'text-brand-600'}`}>
          {plan.price}
        </span>
        <span className="text-sm text-slate-400">{plan.period}</span>
      </div>
      <ul className="mt-6 flex-1 space-y-3">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm text-slate-600">
            <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${accent ? 'bg-accent-500' : 'bg-brand-500'} text-white`}>
              <Check className="h-3 w-3" />
            </span>
            {f}
          </li>
        ))}
      </ul>
      <Link
        to="/contact"
        className={`mt-8 ${plan.popular ? 'btn-primary' : accent ? 'btn-accent' : 'btn-outline'}`}
      >
        {plan.cta}
      </Link>
    </div>
  );
}

export default function Pricing() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Transparent pricing for every budget"
        subtitle="No hidden fees, no surprises. Choose a one-time project package or a monthly SEO plan — whatever fits your goals."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Pricing' }]}
      />

      {/* Project pricing */}
      <section className="section">
        <div className="container-px">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Website projects</span>
            <h2 className="mt-4 font-display text-3xl font-bold text-slate-900 sm:text-4xl text-balance">
              One-time project packages
            </h2>
            <p className="mt-4 text-lg text-slate-500 text-balance">
              From a basic landing page to a full e-commerce store. Pick a package and we tailor it to
              your needs.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {plans.map((p, i) => (
              <Reveal key={p.name} delay={i * 100}>
                <PlanCard plan={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SEO pricing */}
      <section className="section bg-slate-50">
        <div className="container-px">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Monthly SEO</span>
            <h2 className="mt-4 font-display text-3xl font-bold text-slate-900 sm:text-4xl text-balance">
              SEO retainer plans
            </h2>
            <p className="mt-4 text-lg text-slate-500 text-balance">
              SEO is a marathon, not a sprint. Our monthly plans keep your site climbing the rankings
              with consistent, transparent work.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {seoPlans.map((p, i) => (
              <Reveal key={p.name} delay={i * 100}>
                <PlanCard plan={p} accent />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison note */}
      <section className="section">
        <div className="container-px">
          <Reveal>
            <div className="rounded-2xl border border-slate-100 bg-white p-8 text-center">
              <h3 className="text-xl font-bold text-slate-900">Need something custom?</h3>
              <p className="mx-auto mt-3 max-w-xl text-slate-500">
                Every business is different. If none of these packages fit, we will build a custom
                quote tailored to your exact requirements and budget.
              </p>
              <Link to="/contact" className="btn-primary mt-6">
                Request a custom quote
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQs */}
      <section className="section bg-slate-50">
        <div className="container-px">
          <div className="grid gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <span className="eyebrow">FAQ</span>
              <h2 className="mt-4 font-display text-3xl font-bold text-slate-900 sm:text-4xl text-balance">
                Pricing questions
              </h2>
            </Reveal>
            <div className="lg:col-span-7">
              <Reveal delay={150}>
                <div className="rounded-2xl border border-slate-100 bg-white p-2 px-7">
                  {pricingFaqs.map((f) => (
                    <FaqItem key={f.q} {...f} />
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
