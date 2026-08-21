import { Code2, Layers, Palette, Server, Github, Linkedin, Mail } from "lucide-react";

const SKILLS = [
  {
    icon: Palette,
    title: "UI Design",
    desc: "Wireframes to high-fidelity screens — Figma-driven, built for real components.",
  },
  {
    icon: Code2,
    title: "UI Development",
    desc: "Turning designs into responsive, accessible interfaces with React/Next.js.",
  },
  {
    icon: Server,
    title: "Backend Development",
    desc: "APIs, databases, and the plumbing that makes a product actually work.",
  },
  {
    icon: Layers,
    title: "Project Management",
    desc: "Owning a project end to end — scope, timeline, and shipping it.",
  },
];

const PROJECTS = [
  {
    title: "NerdMarket",
    desc: "Field-service marketplace connecting vendors and technicians, with GPS check-in, proof-of-work, and escrow release.",
    tags: ["NestJS", "Prisma", "Postgres", "Next.js"],
  },
  {
    title: "Project Two",
    desc: "Placeholder — swap in your next case study: what it does, your role, and the outcome.",
    tags: ["Tag A", "Tag B"],
  },
  {
    title: "Project Three",
    desc: "Placeholder — swap in your next case study: what it does, your role, and the outcome.",
    tags: ["Tag C", "Tag D"],
  },
];

export default function Portfolio() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
      {/* Hero */}
      <section>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          Prem Prajapat
        </h1>
        <p className="mt-3 text-lg text-[color-mix(in_srgb,var(--foreground)_70%,transparent)]">
          UI Design · UI Development · Backend Development · Project Management
        </p>
        <p className="mt-6 max-w-xl leading-relaxed text-[color-mix(in_srgb,var(--foreground)_85%,transparent)]">
          I design, build, and manage full products end to end — from the
          interface someone taps, to the API and database behind it, to
          getting it shipped.
        </p>
      </section>

      {/* Skills */}
      <section className="mt-16">
        <h2 className="text-sm font-medium uppercase tracking-wider text-[color-mix(in_srgb,var(--foreground)_50%,transparent)]">
          What I do
        </h2>
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {SKILLS.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-lg border border-[color-mix(in_srgb,var(--foreground)_12%,transparent)] p-4"
            >
              <Icon size={18} className="mb-2" />
              <h3 className="font-medium">{title}</h3>
              <p className="mt-1 text-sm text-[color-mix(in_srgb,var(--foreground)_65%,transparent)]">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="mt-16">
        <h2 className="text-sm font-medium uppercase tracking-wider text-[color-mix(in_srgb,var(--foreground)_50%,transparent)]">
          Projects
        </h2>
        <div className="mt-5 flex flex-col gap-4">
          {PROJECTS.map(({ title, desc, tags }) => (
            <div
              key={title}
              className="rounded-lg border border-[color-mix(in_srgb,var(--foreground)_12%,transparent)] p-5"
            >
              <h3 className="font-medium">{title}</h3>
              <p className="mt-1 text-sm text-[color-mix(in_srgb,var(--foreground)_65%,transparent)]">
                {desc}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[color-mix(in_srgb,var(--foreground)_15%,transparent)] px-2.5 py-0.5 text-xs text-[color-mix(in_srgb,var(--foreground)_60%,transparent)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="mt-16">
        <h2 className="text-sm font-medium uppercase tracking-wider text-[color-mix(in_srgb,var(--foreground)_50%,transparent)]">
          Get in touch
        </h2>
        <div className="mt-4 flex gap-4">
          <a
            href="mailto:prempremprajapatpp@gmail.com"
            className="inline-flex items-center gap-2 text-sm hover:underline"
          >
            <Mail size={16} /> Email
          </a>
          <a
            href="https://github.com/"
            className="inline-flex items-center gap-2 text-sm hover:underline"
          >
            <Github size={16} /> GitHub
          </a>
          <a
            href="https://linkedin.com/"
            className="inline-flex items-center gap-2 text-sm hover:underline"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
        </div>
      </section>
    </main>
  );
}
