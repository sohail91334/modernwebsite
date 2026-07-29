import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-gradient-to-b from-brand-50/60 to-white pt-20">
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="absolute -top-20 right-10 h-72 w-72 rounded-full bg-brand-500/15 blur-3xl" />
      <div className="absolute bottom-0 left-10 h-72 w-72 rounded-full bg-accent-500/10 blur-3xl" />
      <div className="container-px relative text-center">
        <p className="font-display text-8xl font-bold text-brand-500 sm:text-9xl">404</p>
        <h1 className="mt-4 font-display text-3xl font-bold text-slate-900 sm:text-4xl">Page not found</h1>
        <p className="mx-auto mt-4 max-w-md text-slate-500">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link to="/" className="btn-primary">
            <Home className="h-4 w-4" />
            Back home
          </Link>
          <Link to="/services" className="btn-outline">
            <ArrowLeft className="h-4 w-4" />
            Browse services
          </Link>
        </div>
      </div>
    </section>
  );
}
