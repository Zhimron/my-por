import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, MapPin, Send } from 'lucide-react';
import { portfolio } from '../../data/portfolio';
import { fadeUp, staggerContainer } from '../../lib/motion';
import SectionHeading from '../ui/SectionHeading';
import SocialIcon from '../ui/SocialIcon';

type SendStatus = 'idle' | 'sending' | 'sent' | 'error';

const inputClass =
  'glass w-full rounded-xl px-4 py-3 text-sm text-slate-700 placeholder:text-slate-400 dark:text-slate-200';

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
    <section id="contact" className="section-container scroll-mt-24 py-24">
      <SectionHeading
        eyebrow="Let's talk"
        title="Get In Touch"
        subtitle="Have a project in mind, a role to fill, or just want to say hi? My inbox is open."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        className="grid gap-8 lg:grid-cols-[1fr_1.3fr]"
      >
        {/* Info column */}
        <motion.div variants={fadeUp} className="flex flex-col gap-4">
          <div className="glass-card space-y-5 p-8">
            <h3 className="font-display text-xl font-semibold text-slate-900 dark:text-white">
              Contact details
            </h3>
            <a
              href={`mailto:${personal.email}`}
              className="flex items-center gap-3 text-sm text-slate-600 transition-colors hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-300"
            >
              <span className="glass flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-indigo-500">
                <Mail size={18} aria-hidden="true" />
              </span>
              {personal.email}
            </a>
            <p className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
              <span className="glass flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-indigo-500">
                <MapPin size={18} aria-hidden="true" />
              </span>
              {personal.location} · remote-friendly
            </p>
            <div className="flex gap-2 pt-2">
              {portfolio.socials.map((s) => (
                <a
                  key={s.id}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="glass flex h-10 w-10 items-center justify-center rounded-full text-slate-600 transition-all hover:-translate-y-0.5 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-300"
                >
                  <SocialIcon icon={s.icon} />
                </a>
              ))}
            </div>
          </div>

          <div className="glass-card flex items-center justify-between gap-4 p-6">
            <div>
              <h3 className="font-display font-semibold text-slate-900 dark:text-white">
                Prefer a resume?
              </h3>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                Grab the PDF version of my experience.
              </p>
            </div>
            <a href={personal.resumeUrl} download className="btn-primary shrink-0 !px-5">
              <Download size={16} aria-hidden="true" />
              Download
            </a>
          </div>
        </motion.div>

        {/* Form column */}
        <motion.form variants={fadeUp} onSubmit={handleSubmit} className="glass-card p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="contact-name"
                className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300"
              >
                Name
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
              <label
                htmlFor="contact-email"
                className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300"
              >
                Email
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
            <label
              htmlFor="contact-message"
              className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300"
            >
              Message
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
            <button type="submit" disabled={status === 'sending'} className="btn-primary disabled:opacity-60">
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
    </section>
  );
};

export default Contact;
