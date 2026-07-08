import { Github, Linkedin, Loader2, Mail, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { Reveal } from './Reveal';

const CONTACT_EMAIL = 'warmhug5959@gmail.com';
// FormSubmit relays the submission straight to CONTACT_EMAIL — no backend required.
// (The first submission triggers a one-time confirmation email to activate the address.)
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

type Status = 'idle' | 'sending' | 'sent';

export function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const update = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'sending') return;
    setStatus('sending');

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `Portfolio message from ${form.name || 'a visitor'}`,
          _template: 'table',
        }),
      });

      if (!res.ok) throw new Error(`Request failed (${res.status})`);

      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
      toast.success('Message sent — thanks for reaching out!');
      setTimeout(() => setStatus('idle'), 4000);
    } catch {
      setStatus('idle');
      // Fall back to the visitor's mail client so the message is never lost.
      const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
      const subject = encodeURIComponent(`Portfolio message from ${form.name || 'a visitor'}`);
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
      toast.error("Couldn't send directly — opening your email app instead.");
    }
  };

  const inputClass =
    'w-full rounded-xl border border-black/10 bg-black/[0.02] px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none transition-all focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/20 dark:border-white/10 dark:bg-white/[0.03] dark:text-white dark:placeholder:text-slate-500';

  return (
    <section id="contact" className="border-t border-black/5 px-6 py-24 dark:border-white/5">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-14 text-center">
          <p className="mb-3 font-mono text-sm text-indigo-500 dark:text-indigo-400">
            04 — Contact
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Let's build something together
          </h2>
        </Reveal>

        <div className="grid gap-12 md:grid-cols-2">
          <Reveal>
            <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
              I'm always open to new projects and opportunities — especially those involving AI and
              full-stack development. Have a question or just want to say hi? Drop a message and I'll
              get back to you.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex items-center gap-4 rounded-2xl border border-black/5 bg-black/[0.02] p-4 transition-colors hover:border-indigo-500/30 dark:border-white/5 dark:bg-white/[0.03]"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 text-white">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Email</p>
                  <p className="text-slate-900 dark:text-white">{CONTACT_EMAIL}</p>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-2xl border border-black/5 bg-black/[0.02] p-4 dark:border-white/5 dark:bg-white/[0.03]">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Location</p>
                  <p className="text-slate-900 dark:text-white">Kuala Lumpur, Malaysia</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <p className="mb-3 text-sm text-slate-500 dark:text-slate-400">Follow me</p>
              <div className="flex gap-3">
                {[
                  { href: 'https://github.com/EngineerML', label: 'GitHub', Icon: Github },
                  {
                    href: 'https://www.linkedin.com/in/chongzhi-wei/',
                    label: 'LinkedIn',
                    Icon: Linkedin,
                  },
                ].map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid h-11 w-11 place-items-center rounded-xl border border-black/10 bg-black/5 text-slate-600 transition-all hover:-translate-y-0.5 hover:text-indigo-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:text-indigo-400"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Honeypot for spam bots */}
              <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

              <div>
                <label htmlFor="name" className="mb-2 block text-sm text-slate-700 dark:text-slate-300">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={update('name')}
                  className={inputClass}
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm text-slate-700 dark:text-slate-300">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={update('email')}
                  className={inputClass}
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm text-slate-700 dark:text-slate-300">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={update('message')}
                  className={`${inputClass} resize-none`}
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={status !== 'idle'}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 px-6 py-3.5 font-medium text-white shadow-lg shadow-indigo-500/25 transition-all hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
              >
                {status === 'sending' && (
                  <>
                    <Loader2 size={18} className="animate-spin" /> Sending...
                  </>
                )}
                {status === 'sent' && <>Message sent ✓</>}
                {status === 'idle' && (
                  <>
                    Send Message <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
