import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, MapPin, Send, Terminal } from 'lucide-react';
import { portfolio } from '../../data/portfolio';
import { fadeUp, staggerContainer } from '../../lib/motion';
import SectionHeading from '../ui/SectionHeading';
import SocialIcon from '../ui/SocialIcon';

type SendStatus = 'idle' | 'sending' | 'sent' | 'error';

const inputClass =
  'glass w-full rounded-xl px-4 py-3 text-sm text-slate-700 placeholder:text-slate-400 dark:text-slate-200';

const fieldLabelClass =
  'mb-1.5 flex items-center gap-1.5 font-mono text-xs font-medium text-slate-500 dark:text-slate-400';

const Contact = () => {
  const { personal } = portfolio;
  const [status, setStatus] = useState<SendStatus>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: real users never fill this hidden field.
    if (data.get('company')) return;

    const name = String(data.get('name') ?? '');
    const email = String(data.get('email') ?? '');
    const message = String(data.get('message') ?? '');

    if (personal.contactFormEndpoint) {
      setStatus('sending');
      try {
        const res = await fetch(personal.contactFormEndpoint, {
          method: 'POST',
          headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, message }),
        });
        if (!res.ok) throw new Error('send failed');
        setStatus('sent');
        form.reset();
      } catch {
        setStatus('error');
      }
    } else {
      // No endpoint configured — open the visitor's mail client instead.
      const subject = encodeURIComponent(`Portfolio contact from ${name}`);
      const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
      window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    }
  };

  return (
    <section id="contact" className="section-container scroll-mt-24 py-16">
      <SectionHeading
        eyebrow="Let's talk"
        title="Get In Touch"
        subtitle="Have a project in mind, a role to fill, or just want to say hi? My inbox is open."
      />

      {/* One split terminal window instead of floating info/form cards */}
      <div className="glass-card overflow-hidden">
        <div className="flex items-center gap-2 border-b border-slate-200/80 bg-slate-100/60 px-4 py-3 dark:border-white/10 dark:bg-white/[0.03]">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" aria-hidden="true" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" aria-hidden="true" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" aria-hidden="true" />
          <span className="ml-2 flex items-center gap-1.5 rounded-md bg-white/70 px-2.5 py-1 font-mono text-xs text-slate-500 dark:bg-white/5 dark:text-slate-400">
            <Terminal size={12} aria-hidden="true" />
            contact.sh
          </span>
          <span className="ml-auto hidden font-mono text-[11px] text-slate-400 dark:text-slate-600 sm:inline">
            $ send --to shimron
          </span>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]"
        >
          {/* Info pane */}
          <motion.div
            variants={fadeUp}
            className="border-b border-dashed border-slate-200/70 p-6 dark:border-white/10 lg:border-b-0 lg:border-r"
          >
            <p className="font-mono text-xs text-slate-400 dark:text-slate-500">$ whoami</p>

            <div className="mt-3 space-y-3 text-sm">
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-3 text-slate-600 transition-colors hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-300"
              >
                <span className="glass flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-indigo-500">
                  <Mail size={16} aria-hidden="true" />
                </span>
                {personal.email}
              </a>
              <p className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                <span className="glass flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-indigo-500">
                  <MapPin size={16} aria-hidden="true" />
                </span>
                {personal.location} · remote-friendly
              </p>
            </div>

            <div className="mt-4 flex gap-2">
              {portfolio.socials.map((s) => (
                <a
                  key={s.id}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="glass flex h-9 w-9 items-center justify-center rounded-full text-slate-600 transition-all hover:-translate-y-0.5 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-300"
                >
                  <SocialIcon icon={s.icon} size={16} />
                </a>
              ))}
            </div>

            <a
              href={personal.resumeUrl}
              download="Shimron-Guray-Resume.pdf"
              className="mt-5 inline-flex items-center gap-2 font-mono text-xs font-semibold text-indigo-600 transition-colors hover:text-indigo-500 dark:text-indigo-300"
            >
              <Download size={13} aria-hidden="true" />$ curl -O resume.pdf
            </a>
          </motion.div>

          {/* Form pane */}
          <motion.form variants={fadeUp} onSubmit={handleSubmit} className="p-6">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className={fieldLabelClass}>
                  <span className="text-indigo-500/70 dark:text-indigo-300/60" aria-hidden="true">
                    &gt;
                  </span>
                  name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Your name"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="contact-email" className={fieldLabelClass}>
                  <span className="text-indigo-500/70 dark:text-indigo-300/60" aria-hidden="true">
                    &gt;
                  </span>
                  email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@example.com"
                  className={inputClass}
                />
              </div>
            </div>

            {/* Honeypot (hidden from real users) */}
            <input
              type="text"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
            />

            <div className="mt-5">
              <label htmlFor="contact-message" className={fieldLabelClass}>
                <span className="text-indigo-500/70 dark:text-indigo-300/60" aria-hidden="true">
                  &gt;
                </span>
                message
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={6}
                placeholder="Tell me about your project…"
                className={`${inputClass} resize-y`}
              />
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-primary disabled:opacity-60"
              >
                <Send size={16} aria-hidden="true" />
                {status === 'sending' ? 'Sending…' : 'Send message'}
              </button>
              <p aria-live="polite" className="text-sm">
                {status === 'sent' && (
                  <span className="text-emerald-600 dark:text-emerald-400">
                    Message sent — I'll get back to you soon!
                  </span>
                )}
                {status === 'error' && (
                  <span className="text-rose-500">
                    Something went wrong — email me directly instead.
                  </span>
                )}
              </p>
            </div>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
