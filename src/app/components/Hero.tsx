import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'motion/react';
import avatarImage from '../../assests/images/8.png';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24 pb-16">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10%] h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-indigo-500/20 blur-[120px] dark:bg-indigo-500/25" />
        <div className="absolute bottom-[-15%] right-[10%] h-[26rem] w-[26rem] rounded-full bg-violet-500/15 blur-[120px] dark:bg-fuchsia-500/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0,transparent_65%,var(--tw-gradient-from,transparent))]" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto flex max-w-3xl flex-col items-center text-center"
      >
        <motion.div variants={item} className="relative mb-8">
          <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 opacity-70 blur-lg" />
          <img
            src={avatarImage}
            alt="Portrait"
            className="relative h-40 w-40 rounded-full object-cover ring-2 ring-white/60 dark:ring-white/10"
          />
        </motion.div>

        <motion.div
          variants={item}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-sm text-emerald-600 dark:text-emerald-400"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Available for new projects
        </motion.div>

        <motion.h1
          variants={item}
          className="text-balance text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl md:text-7xl dark:text-white"
        >
          Full-Stack Developer
          <span className="mt-2 block bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
            building AI-powered products
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-2xl text-lg text-slate-600 md:text-xl dark:text-slate-400"
        >
          I design and ship end-to-end applications — from intelligent Python backends and ML
          pipelines to polished, high-performance React interfaces.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <button
            onClick={() => scrollToSection('projects')}
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 px-6 py-3.5 font-medium text-white shadow-lg shadow-indigo-500/30 transition-transform hover:-translate-y-0.5"
          >
            View my work
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="inline-flex items-center gap-2 rounded-xl border border-black/10 bg-black/5 px-6 py-3.5 font-medium text-slate-700 transition-colors hover:bg-black/10 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10"
          >
            Get in touch
          </button>
        </motion.div>

        <motion.div variants={item} className="mt-10 flex items-center gap-3">
          {[
            { href: 'https://github.com/EngineerML', label: 'GitHub', Icon: Github },
            { href: 'https://www.linkedin.com/in/chongzhi-wei/', label: 'LinkedIn', Icon: Linkedin },
            { href: 'mailto:warmhug5959@gmail.com', label: 'Email', Icon: Mail },
          ].map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="grid h-11 w-11 place-items-center rounded-xl border border-black/10 bg-black/5 text-slate-600 transition-all hover:-translate-y-0.5 hover:text-indigo-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:text-indigo-400"
            >
              <Icon size={20} />
            </a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
