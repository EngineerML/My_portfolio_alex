import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

const socials = [
  { href: 'https://github.com/EngineerML', label: 'GitHub', Icon: Github },
  { href: 'https://www.linkedin.com/in/chongzhi-wei/', label: 'LinkedIn', Icon: Linkedin },
  { href: 'mailto:warmhug5959@gmail.com', label: 'Email', Icon: Mail },
];

export function Footer() {
  return (
    <footer className="border-t border-black/5 px-6 py-10 dark:border-white/5">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 font-mono text-xs font-bold text-white">
            {'</>'}
          </span>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Built with React, Tailwind &amp; a lot of coffee · © 2026
          </p>
        </div>

        <div className="flex items-center gap-3">
          {socials.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="grid h-9 w-9 place-items-center rounded-lg border border-black/10 bg-black/5 text-slate-500 transition-colors hover:text-indigo-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-400 dark:hover:text-indigo-400"
            >
              <Icon size={16} />
            </a>
          ))}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
            className="grid h-9 w-9 place-items-center rounded-lg border border-black/10 bg-black/5 text-slate-500 transition-colors hover:text-indigo-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-400 dark:hover:text-indigo-400"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
