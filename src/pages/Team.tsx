import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import { team, stats } from '@/data/team';
import { useReveal } from '@/hooks/useReveal';

function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, visible } = useReveal();
  return (
    <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export default function Team() {
  return (
    <>
      <PageHero
        eyebrow="Our team"
        title="The people behind the pixels"
        subtitle="A small, senior team of designers, developers and strategists. No juniors learning on your dime — just experienced specialists who care about your project."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Team' }]}
      />

      {/* Stats */}
      <section className="border-b border-slate-100 py-12">
        <div className="container-px">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-display text-3xl font-bold text-brand-600 sm:text-4xl">{s.value}</p>
                <p className="mt-1 text-sm text-slate-500">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team grid */}
      <section className="section">
        <div className="container-px">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={(i % 3) * 100}>
                <div className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100 transition-all hover:shadow-xl">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={m.photo}
                      alt={m.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                    <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 transition-opacity group-hover:opacity-100">
                      {m.socials.map((s) => (
                        <a
                          key={s.label}
                          href={s.href}
                          className="rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-slate-700 backdrop-blur transition hover:bg-brand-500 hover:text-white"
                        >
                          {s.label}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-slate-900">{m.name}</h3>
                    <p className="text-sm font-medium text-brand-600">{m.role}</p>
                    <p className="mt-3 text-sm leading-relaxed text-slate-500">{m.bio}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="section pt-0">
        <div className="container-px">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-slate-100 bg-slate-50 px-8 py-16 text-center sm:px-16">
              <div className="absolute -top-20 right-10 h-64 w-64 rounded-full bg-brand-500/10 blur-3xl" />
              <div className="relative">
                <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl text-balance">
                  Want to join the team?
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-lg text-slate-500 text-balance">
                  We are always looking for talented designers and developers who care about craft.
                  Send us your portfolio.
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
