import { Link } from 'react-router-dom';

type Crumb = { label: string; to?: string };

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  crumbs,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  crumbs?: Crumb[];
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50/60 to-white pt-32 pb-16 lg:pt-40 lg:pb-24">
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-brand-500/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-accent-500/10 blur-3xl" />
      <div className="container-px relative">
        {crumbs && (
          <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-slate-400">
            {crumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-2">
                {c.to ? (
                  <Link to={c.to} className="transition hover:text-brand-600">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-slate-700">{c.label}</span>
                )}
                {i < crumbs.length - 1 && <span className="text-slate-300">/</span>}
              </span>
            ))}
          </nav>
        )}
        {eyebrow && (
          <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-700">
            {eyebrow}
          </span>
        )}
        <h1 className="max-w-4xl font-display text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-6xl text-balance">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-500 text-balance">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
