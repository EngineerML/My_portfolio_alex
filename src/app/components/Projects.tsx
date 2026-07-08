import { ArrowUpRight, Gamepad2, PenTool, Sparkles, Wand2 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Reveal } from './Reveal';

type Project = {
  title: string;
  domain: string;
  category: string;
  year: string;
  role: string;
  description: string;
  outcome: string;
  tags: string[];
  link: string;
  Icon: LucideIcon;
  glyph: string;
  gradient: string;
};

const projects: Project[] = [
  {
    title: 'AI Photo Platform',
    domain: 'photoroom.com',
    category: 'Computer Vision',
    year: '2024',
    role: 'Full-Stack + ML',
    description:
      'Instant background removal and AI photo editing that turns raw product shots into studio-quality visuals.',
    outcome: 'Segmentation pipeline serving millions of edits a month.',
    tags: ['Python', 'PyTorch', 'React', 'AWS'],
    link: 'https://www.photoroom.com',
    Icon: Wand2,
    glyph: 'PR',
    gradient: 'from-indigo-500 via-blue-500 to-cyan-500',
  },
  {
    title: 'AI Asset Studio',
    domain: 'scenario.com',
    category: 'Generative AI',
    year: '2024',
    role: 'Backend + Infra',
    description:
      'A platform for generating style-consistent game assets from custom-trained diffusion models.',
    outcome: 'Fine-tuning workflow with sub-second inference at scale.',
    tags: ['Next.js', 'FastAPI', 'Stable Diffusion', 'AWS'],
    link: 'https://scenario.com',
    Icon: Gamepad2,
    glyph: 'SC',
    gradient: 'from-violet-500 via-purple-500 to-fuchsia-500',
  },
  {
    title: 'Vector AI Studio',
    domain: 'recraft.ai',
    category: 'Design Tooling',
    year: '2023',
    role: 'Frontend + ML',
    description:
      'Generate and edit crisp, infinitely scalable vector art, icons, and illustrations from text.',
    outcome: 'Real-time SVG canvas backed by a diffusion + vectorization model.',
    tags: ['React', 'TypeScript', 'WebGL', 'Redis'],
    link: 'https://recraft.ai',
    Icon: PenTool,
    glyph: 'RC',
    gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
  },
  {
    title: 'Creative AI Engine',
    domain: 'leonardo.ai',
    category: 'Generative AI',
    year: '2023',
    role: 'Full-Stack + CUDA',
    description:
      'High-fidelity image and game-asset generation with fine-grained creative control.',
    outcome: 'GPU-optimized inference cluster with elastic autoscaling.',
    tags: ['Next.js', 'FastAPI', 'PyTorch / CUDA', 'MongoDB'],
    link: 'https://leonardo.ai',
    Icon: Sparkles,
    glyph: 'LD',
    gradient: 'from-amber-500 via-orange-500 to-rose-500',
  },
];

/** Branded, code-drawn product preview — no external imagery. */
function ProjectCover({ project }: { project: Project }) {
  const { Icon, gradient, domain, glyph } = project;
  return (
    <div className={`relative h-full w-full bg-gradient-to-br ${gradient}`}>
      {/* dotted grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.7) 1px, transparent 1px)',
          backgroundSize: '18px 18px',
        }}
      />
      {/* soft light blooms */}
      <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-white/25 blur-3xl" />
      <div className="absolute -right-6 -top-8 h-32 w-32 rounded-full bg-black/10 blur-2xl" />

      {/* faux app window */}
      <div className="absolute inset-4 flex flex-col overflow-hidden rounded-xl border border-white/20 bg-white/10 shadow-2xl backdrop-blur-md transition-transform duration-500 group-hover:-translate-y-1">
        <div className="flex items-center gap-1.5 border-b border-white/15 px-3 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="ml-2 flex-1 truncate rounded-md bg-white/15 px-2.5 py-1 font-mono text-[10px] text-white/80">
            {domain}
          </span>
        </div>
        <div className="relative flex flex-1 items-center justify-center">
          <div className="grid h-16 w-16 place-items-center rounded-2xl bg-white/15 ring-1 ring-white/25 backdrop-blur-sm transition-transform duration-500 group-hover:scale-110">
            <Icon size={30} className="text-white" strokeWidth={1.75} />
          </div>
          <span className="pointer-events-none absolute bottom-1 right-3 font-mono text-5xl font-black tracking-tighter text-white/10">
            {glyph}
          </span>
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="border-t border-black/5 px-6 py-24 dark:border-white/5">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-14 text-center">
          <p className="mb-3 font-mono text-sm text-indigo-500 dark:text-indigo-400">
            03 — Projects
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Selected work
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-600 dark:text-slate-400">
            A few products I've helped design, build, and scale — where AI meets production
            engineering.
          </p>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={(i % 2) * 0.1}>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl dark:border-white/5 dark:bg-white/[0.03] dark:shadow-none dark:hover:bg-white/[0.06]"
              >
                <div className="aspect-video overflow-hidden">
                  <ProjectCover project={project} />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex items-center gap-2 font-mono text-xs text-slate-500 dark:text-slate-400">
                    <span className="text-indigo-500 dark:text-indigo-400">{project.category}</span>
                    <span className="opacity-40">/</span>
                    <span>{project.role}</span>
                    <span className="ml-auto">{project.year}</span>
                  </div>

                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                      {project.title}
                    </h3>
                    <span className="mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-black/5 bg-black/[0.03] text-slate-500 transition-all group-hover:border-indigo-500/30 group-hover:bg-indigo-500/10 group-hover:text-indigo-500 dark:border-white/5 dark:bg-white/5 dark:text-slate-400 dark:group-hover:text-indigo-400">
                      <ArrowUpRight size={16} className="transition-transform group-hover:rotate-45" />
                    </span>
                  </div>

                  <p className="mt-2 text-slate-600 dark:text-slate-400">{project.description}</p>

                  <p className="mt-3 flex items-start gap-2 text-sm text-slate-500 dark:text-slate-500">
                    <Sparkles size={15} className="mt-0.5 shrink-0 text-indigo-500/70" />
                    {project.outcome}
                  </p>

                  <div className="mt-auto flex flex-wrap gap-2 pt-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-black/5 bg-black/[0.03] px-3 py-1 text-xs font-medium text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
