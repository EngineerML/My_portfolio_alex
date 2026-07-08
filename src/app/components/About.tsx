import { Code2, Cpu, Rocket } from 'lucide-react';
import { Reveal } from './Reveal';

const highlights = [
  {
    Icon: Code2,
    title: 'Full-Stack Development',
    body: 'End-to-end applications with modern frameworks, clean architecture, and best practices.',
    tint: 'from-indigo-500 to-blue-500',
  },
  {
    Icon: Cpu,
    title: 'AI & ML Engineering',
    body: 'Production ML pipelines, LLM integrations, and intelligent systems that ship.',
    tint: 'from-violet-500 to-fuchsia-500',
  },
  {
    Icon: Rocket,
    title: 'Scalable Systems',
    body: 'Robust, observable, high-performance infrastructure built to grow with the product.',
    tint: 'from-emerald-500 to-teal-500',
  },
];

const stats = [
  { value: '6+', label: 'Years building' },
  { value: '40+', label: 'Projects shipped' },
  { value: '20+', label: 'Happy clients' },
];

export function About() {
  return (
    <section id="about" className="border-t border-black/5 px-6 py-24 dark:border-white/5">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-14 text-center">
          <p className="mb-3 font-mono text-sm text-indigo-500 dark:text-indigo-400">01 — About</p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Turning complex problems into elegant software
          </h2>
        </Reveal>

        <div className="grid items-start gap-12 md:grid-cols-2">
          <Reveal>
            <div className="space-y-5 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
              <p>
                I'm a full-stack developer specializing in AI-powered backend systems. I build
                intelligent applications that pair machine learning with clean, dependable
                engineering to solve real-world problems.
              </p>
              <p>
                My focus is scalable AI solutions — from natural language processing to computer
                vision — always wrapped in interfaces that feel effortless to use. I care about the
                details: performance, accessibility, and code that other engineers enjoy reading.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-black/5 bg-black/[0.02] p-4 text-center dark:border-white/5 dark:bg-white/[0.03]"
                >
                  <div className="bg-gradient-to-br from-indigo-500 to-violet-500 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl">
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="grid gap-5">
            {highlights.map((h, i) => (
              <Reveal key={h.title} delay={i * 0.1}>
                <div className="group rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg dark:border-white/5 dark:bg-white/[0.03] dark:shadow-none dark:hover:bg-white/[0.06]">
                  <div
                    className={`mb-4 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br ${h.tint} text-white shadow-lg`}
                  >
                    <h.Icon size={22} />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                    {h.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">{h.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
