import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ExternalLink, Check } from 'lucide-react';
import PageHero from '@/components/PageHero';
import { getProject, projects } from '@/data/projects';
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

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = slug ? getProject(slug) : undefined;
  if (!project) return <NotFound />;

  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={project.category}
        title={project.title}
        subtitle={project.excerpt}
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Portfolio', to: '/portfolio' }, { label: project.client }]}
      />

      {/* Cover */}
      <section className="pb-16">
        <div className="container-px">
          <Reveal>
            <div className="overflow-hidden rounded-3xl">
              <img src={project.cover} alt={project.title} className="h-full w-full object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Meta + overview */}
      <section className="pb-16">
        <div className="container-px">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Reveal>
                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-7">
                  <dl className="space-y-4 text-sm">
                    <div>
                      <dt className="font-semibold text-slate-400 uppercase tracking-wide text-xs">Client</dt>
                      <dd className="mt-1 font-medium text-slate-800">{project.client}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-slate-400 uppercase tracking-wide text-xs">Service</dt>
                      <dd className="mt-1 font-medium text-slate-800">{project.service}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-slate-400 uppercase tracking-wide text-xs">Year</dt>
                      <dd className="mt-1 font-medium text-slate-800">{project.year}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-slate-400 uppercase tracking-wide text-xs">Website</dt>
                      <dd className="mt-1">
                        <a
                          href={`https://${project.url}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 font-medium text-brand-600 hover:underline"
                        >
                          {project.url}
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      </dd>
                    </div>
                  </dl>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-8">
              <Reveal delay={120}>
                <h2 className="font-display text-2xl font-bold text-slate-900 sm:text-3xl">Project overview</h2>
                <p className="mt-4 text-lg leading-relaxed text-slate-600">{project.description}</p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge + Solution */}
      <section className="section bg-slate-50">
        <div className="container-px">
          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-2xl border border-slate-100 bg-white p-8">
                <h3 className="text-xl font-bold text-slate-900">The challenge</h3>
                <p className="mt-3 text-slate-600 leading-relaxed">{project.challenge}</p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="h-full rounded-2xl border border-slate-100 bg-white p-8">
                <h3 className="text-xl font-bold text-slate-900">Our solution</h3>
                <p className="mt-3 text-slate-600 leading-relaxed">{project.solution}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="section">
        <div className="container-px">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">Results</span>
            <h2 className="mt-4 font-display text-3xl font-bold text-slate-900 sm:text-4xl text-balance">
              The impact
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {project.results.map((r, i) => (
              <Reveal key={r.label} delay={i * 80}>
                <div className="rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 p-7 text-center shadow-lg shadow-brand-500/20">
                  <p className="font-display text-4xl font-bold text-white">{r.value}</p>
                  <p className="mt-2 text-sm text-white/80">{r.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section pt-0">
        <div className="container-px">
          <div className="grid gap-6 md:grid-cols-3">
            {project.gallery.map((img, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="overflow-hidden rounded-2xl">
                  <img src={img} alt={`${project.title} ${i + 1}`} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-105" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Other projects */}
      <section className="section bg-slate-50">
        <div className="container-px">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-slate-900 sm:text-3xl text-balance">
              More projects
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((p, i) => (
              <Reveal key={p.slug} delay={i * 80}>
                <Link to={`/portfolio/${p.slug}`} className="group block overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100 transition-all hover:shadow-xl">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={p.cover} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-slate-900 group-hover:text-brand-600">{p.title}</h3>
                    <p className="mt-1 text-sm text-slate-500">{p.category}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="mt-10">
            <Link to="/portfolio" className="btn-ghost">
              <ArrowLeft className="h-4 w-4" />
              All projects
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
