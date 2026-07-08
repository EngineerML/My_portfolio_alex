import { Boxes, Cloud, Database, Layers } from 'lucide-react';
import { Reveal } from './Reveal';

const skills = [
  {
    category: 'Frontend',
    Icon: Layers,
    tint: 'text-indigo-500 dark:text-indigo-400',
    items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    Icon: Database,
    tint: 'text-emerald-500 dark:text-emerald-400',
    items: ['Node.js', 'Python', 'FastAPI', 'PostgreSQL'],
  },
  {
    category: 'AI / ML',
    Icon: Boxes,
    tint: 'text-violet-500 dark:text-violet-400',
    items: ['PyTorch', 'TensorFlow', 'OpenAI API', 'LangChain'],
  },
  {
    category: 'DevOps',
    Icon: Cloud,
    tint: 'text-sky-500 dark:text-sky-400',
    items: ['Docker', 'AWS', 'CI/CD', 'Kubernetes'],
  },
];

export function Skills() {
  return (
    <section id="skills" className="border-t border-black/5 px-6 py-24 dark:border-white/5">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-14 text-center">
          <p className="mb-3 font-mono text-sm text-indigo-500 dark:text-indigo-400">02 — Skills</p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            The tools I build with
          </h2>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, i) => (
            <Reveal key={skill.category} delay={i * 0.08}>
              <div className="group h-full rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-indigo-500/30 hover:shadow-lg dark:border-white/5 dark:bg-white/[0.03] dark:shadow-none dark:hover:bg-white/[0.06]">
                <div className="mb-4 inline-flex rounded-xl border border-black/5 bg-black/[0.03] p-3 dark:border-white/5 dark:bg-white/5">
                  <skill.Icon size={26} className={skill.tint} />
                </div>
                <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
                  {skill.category}
                </h3>
                <ul className="space-y-2.5">
                  {skill.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-slate-600 dark:text-slate-400"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
