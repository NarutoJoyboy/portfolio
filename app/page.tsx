import { Code2, Layers, Palette, Server, Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

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
    featured: true,
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

const NAV = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Portfolio() {
  return (
    <>
      {/* Nav */}
      <header className="sticky top-0 z-10 backdrop-blur-md bg-[color-mix(in_srgb,var(--background)_75%,transparent)] border-b border-[color-mix(in_srgb,var(--foreground)_8%,transparent)]">
        <div className="mx-auto max-w-3xl px-6 h-14 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-medium text-sm">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent text-accent-foreground text-xs font-bold">
              PP
            </span>
            Prem Prajapat
          </a>
          <nav className="flex gap-6 text-sm text-[color-mix(in_srgb,var(--foreground)_65%,transparent)]">
            {NAV.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-foreground transition-colors">
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
        {/* Hero */}
        <section id="about" className="relative">
          <span className="inline-flex items-center gap-2 rounded-full border border-[color-mix(in_srgb,var(--accent)_35%,transparent)] bg-[color-mix(in_srgb,var(--accent)_10%,transparent)] px-3 py-1 text-xs font-medium text-accent">
            Available for work
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl font-semibold tracking-tight">
            Prem Prajapat
          </h1>
          <div className="mt-4 flex flex-wrap gap-2">
            {["UI Design", "UI Development", "Backend Development", "Project Management"].map((role) => (
              <span
                key={role}
                className="rounded-full border border-[color-mix(in_srgb,var(--foreground)_12%,transparent)] px-3 py-1 text-xs font-medium text-[color-mix(in_srgb,var(--foreground)_75%,transparent)]"
              >
                {role}
              </span>
            ))}
          </div>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[color-mix(in_srgb,var(--foreground)_75%,transparent)]">
            I design, build, and manage full products end to end — from the
            interface someone taps, to the API and database behind it, to
            getting it shipped.
          </p>
        </section>

        {/* Skills */}
        <section className="mt-20">
          <h2 className="text-sm font-medium uppercase tracking-wider text-[color-mix(in_srgb,var(--foreground)_50%,transparent)]">
            What I do
          </h2>
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SKILLS.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group rounded-xl border border-[color-mix(in_srgb,var(--foreground)_10%,transparent)] p-5 transition-all hover:border-[color-mix(in_srgb,var(--accent)_45%,transparent)] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[color-mix(in_srgb,var(--accent)_12%,transparent)]"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[color-mix(in_srgb,var(--accent)_12%,transparent)] text-accent">
                  <Icon size={18} />
                </span>
                <h3 className="mt-3 font-medium">{title}</h3>
                <p className="mt-1 text-sm text-[color-mix(in_srgb,var(--foreground)_65%,transparent)]">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="work" className="mt-20 scroll-mt-20">
          <h2 className="text-sm font-medium uppercase tracking-wider text-[color-mix(in_srgb,var(--foreground)_50%,transparent)]">
            Projects
          </h2>
          <div className="mt-5 flex flex-col gap-4">
            {PROJECTS.map(({ title, desc, tags, featured }) => (
              <div
                key={title}
                className={`group relative rounded-xl border p-5 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[color-mix(in_srgb,var(--accent)_12%,transparent)] ${
                  featured
                    ? "border-[color-mix(in_srgb,var(--accent)_40%,transparent)] bg-[color-mix(in_srgb,var(--accent)_6%,transparent)]"
                    : "border-[color-mix(in_srgb,var(--foreground)_10%,transparent)] hover:border-[color-mix(in_srgb,var(--accent)_45%,transparent)]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">{title}</h3>
                  <ArrowUpRight
                    size={16}
                    className="text-[color-mix(in_srgb,var(--foreground)_35%,transparent)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                  />
                </div>
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
        <section id="contact" className="mt-20 scroll-mt-20">
          <h2 className="text-sm font-medium uppercase tracking-wider text-[color-mix(in_srgb,var(--foreground)_50%,transparent)]">
            Get in touch
          </h2>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href="mailto:prempremprajapatpp@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-4 py-2 text-sm font-medium transition-opacity hover:opacity-90"
            >
              <Mail size={16} /> Email me
            </a>
            <a
              href="https://github.com/"
              className="inline-flex items-center gap-2 rounded-full border border-[color-mix(in_srgb,var(--foreground)_15%,transparent)] px-4 py-2 text-sm font-medium transition-colors hover:border-[color-mix(in_srgb,var(--accent)_45%,transparent)] hover:text-accent"
            >
              <Github size={16} /> GitHub
            </a>
            <a
              href="https://linkedin.com/"
              className="inline-flex items-center gap-2 rounded-full border border-[color-mix(in_srgb,var(--foreground)_15%,transparent)] px-4 py-2 text-sm font-medium transition-colors hover:border-[color-mix(in_srgb,var(--accent)_45%,transparent)] hover:text-accent"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>
        </section>

        <footer className="mt-24 border-t border-[color-mix(in_srgb,var(--foreground)_8%,transparent)] pt-6 text-xs text-[color-mix(in_srgb,var(--foreground)_45%,transparent)]">
          © {new Date().getFullYear()} Prem Prajapat
        </footer>
      </main>
    </>
  );
}
