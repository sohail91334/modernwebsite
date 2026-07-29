import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Check, Clock } from 'lucide-react';
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

const contactInfo = [
  { icon: Mail, label: 'Email us', value: 'hello@modernweb.agency', href: 'mailto:hello@modernweb.agency' },
  { icon: Phone, label: 'Call us', value: '+92 (342) 434-4158', href: 'tel:+923424344158' },
  { icon: MapPin, label: 'Visit us', value: 'Stockholm, Sweden', href: '#' },
  { icon: Clock, label: 'Office hours', value: 'Mon–Fri, 9:00–18:00 CET', href: '#' },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="Let's talk about your project"
        subtitle="Tell us what you need and we will get back to you within 24 hours with a free, no-obligation quote."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Contact' }]}
      />

      <section className="section">
        <div className="container-px">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Info */}
            <div className="lg:col-span-4">
              <Reveal>
                <h2 className="font-display text-2xl font-bold text-slate-900">Get in touch</h2>
                <p className="mt-3 text-slate-500">
                  Prefer to reach us directly? Use any of the channels below.
                </p>
                <div className="mt-8 space-y-5">
                  {contactInfo.map((c) => (
                    <a
                      key={c.label}
                      href={c.href}
                      className="flex items-start gap-4 rounded-xl border border-slate-100 bg-white p-5 transition-all hover:border-brand-200 hover:shadow-md"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                        <c.icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{c.label}</p>
                        <p className="mt-0.5 font-medium text-slate-800">{c.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Form */}
            <div className="lg:col-span-8">
              <Reveal delay={150}>
                <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm sm:p-10">
                  {submitted ? (
                    <div className="flex flex-col items-center justify-center py-16 text-center">
                      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                        <Check className="h-8 w-8" />
                      </span>
                      <h3 className="mt-6 text-2xl font-bold text-slate-900">Message sent!</h3>
                      <p className="mt-2 max-w-md text-slate-500">
                        Thanks, {form.name || 'there'} — we have received your message and will reply
                        within 24 hours.
                      </p>
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setForm({ name: '', email: '', company: '', service: '', budget: '', message: '' });
                        }}
                        className="btn-outline mt-8"
                      >
                        Send another message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <label className="mb-1.5 block text-sm font-semibold text-slate-700">Name *</label>
                          <input
                            required
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-100"
                            placeholder="Jane Doe"
                          />
                        </div>
                        <div>
                          <label className="mb-1.5 block text-sm font-semibold text-slate-700">Email *</label>
                          <input
                            required
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-100"
                            placeholder="jane@company.com"
                          />
                        </div>
                      </div>

                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <label className="mb-1.5 block text-sm font-semibold text-slate-700">Company</label>
                          <input
                            name="company"
                            value={form.company}
                            onChange={handleChange}
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-100"
                            placeholder="Acme Inc."
                          />
                        </div>
                        <div>
                          <label className="mb-1.5 block text-sm font-semibold text-slate-700">Service</label>
                          <select
                            name="service"
                            value={form.service}
                            onChange={handleChange}
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-100"
                          >
                            <option value="">Select a service</option>
                            {services.map((s) => (
                              <option key={s.slug} value={s.title}>{s.title}</option>
                            ))}
                            <option value="Other">Other / Not sure yet</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="mb-1.5 block text-sm font-semibold text-slate-700">Budget</label>
                        <div className="flex flex-wrap gap-2">
                          {['< €1,000', '€1,000–3,000', '€3,000–5,000', '€5,000+', 'Not sure'].map((b) => (
                            <button
                              key={b}
                              type="button"
                              onClick={() => setForm((prev) => ({ ...prev, budget: b }))}
                              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                                form.budget === b
                                  ? 'bg-brand-500 text-white'
                                  : 'border border-slate-200 bg-white text-slate-600 hover:border-brand-300'
                              }`}
                            >
                              {b}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="mb-1.5 block text-sm font-semibold text-slate-700">Message *</label>
                        <textarea
                          required
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          rows={5}
                          className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-100"
                          placeholder="Tell us about your project, goals and timeline..."
                        />
                      </div>

                      <button type="submit" className="btn-primary w-full sm:w-auto">
                        Send message
                        <Send className="h-4 w-4" />
                      </button>
                      <p className="text-xs text-slate-400">
                        By submitting, you agree to be contacted about your inquiry. We never share your data.
                      </p>
                    </form>
                  )}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="pb-20">
        <div className="container-px">
          <Reveal>
            <div className="relative h-80 overflow-hidden rounded-3xl bg-slate-100">
              <div className="absolute inset-0 grid-pattern opacity-40" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-500 text-white shadow-lg shadow-brand-500/30">
                  <MapPin className="h-7 w-7" />
                </span>
                <h3 className="mt-4 text-xl font-bold text-slate-900">Stockholm, Sweden</h3>
                <p className="mt-1 text-slate-500">We work with clients worldwide — fully remote.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
