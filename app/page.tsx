import { Code2, Layers, Palette, Server, Github, Linkedin, Mail, ArrowUpRight, Sparkles } from "lucide-react";

const SKILLS = [
  { icon: Palette, title: "UI Design", desc: "Wireframes to high-fidelity screens in Figma." },
  { icon: Code2, title: "UI Development", desc: "Responsive, accessible interfaces in React/Next.js." },
  { icon: Server, title: "Backend Development", desc: "APIs, databases, the plumbing that works." },
  { icon: Layers, title: "Project Management", desc: "Scope, timeline, ship — owned end to end." },
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
    desc: "Placeholder — swap in your next case study.",
    tags: ["Tag A", "Tag B"],
  },
  {
    title: "Project Three",
    desc: "Placeholder — swap in your next case study.",
    tags: ["Tag C", "Tag D"],
  },
];

const NAV = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const MARQUEE_WORDS = ["UI Design", "UI Development", "Backend Development", "Project Management"];

export default function Portfolio() {
  return (
    <>
      {/* Nav */}
      <header className="sticky top-0 z-10 backdrop-blur-md bg-[color-mix(in_srgb,var(--background)_75%,transparent)] border-b border-[color-mix(in_srgb,var(--foreground)_8%,transparent)]">
        <div className="mx-auto max-w-5xl px-6 h-14 flex items-center justify-between">
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

      <main className="mx-auto max-w-5xl px-6">
        {/* Hero */}
        <section id="about" className="pt-16 sm:pt-24 pb-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-[color-mix(in_srgb,var(--accent)_35%,transparent)] bg-[color-mix(in_srgb,var(--accent)_10%,transparent)] px-3 py-1 text-xs font-medium text-accent">
            <Sparkles size={12} /> Available for work
          </span>
          <h1 className="mt-6 text-[16vw] sm:text-[7rem] md:text-[8.5rem] font-black tracking-tighter leading-[0.82] uppercase">
            Prem
            <br />
            Prajapat
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-[color-mix(in_srgb,var(--foreground)_75%,transparent)]">
            I design, build, and manage full products end to end — from the
            interface someone taps, to the API and database behind it, to
            getting it shipped.
          </p>
        </section>

        {/* Marquee */}
        <section className="border-y border-[color-mix(in_srgb,var(--foreground)_10%,transparent)] py-4 overflow-hidden">
          <div className="flex whitespace-nowrap marquee-track w-max">
            {[...MARQUEE_WORDS, ...MARQUEE_WORDS, ...MARQUEE_WORDS, ...MARQUEE_WORDS].map((word, i) => (
              <span
                key={i}
                className="flex items-center text-2xl sm:text-3xl font-black uppercase tracking-tight mx-6 text-[color-mix(in_srgb,var(--foreground)_25%,transparent)]"
              >
                {word}
                <span className="ml-6 text-accent2">✦</span>
              </span>
            ))}
          </div>
        </section>

        {/* Bento: what I do */}
        <section className="mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[minmax(140px,auto)] gap-4">
            {/* Bio cell */}
            <div className="col-span-2 row-span-2 rounded-2xl bg-accent text-accent-foreground p-6 flex flex-col justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider opacity-80">
                What I do
              </span>
              <p className="text-2xl sm:text-3xl font-bold leading-snug">
                UI design, UI &amp; backend development, and running the
                project that ties them together.
              </p>
            </div>

            {SKILLS.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                className={`group col-span-2 sm:col-span-1 rounded-2xl border border-[color-mix(in_srgb,var(--foreground)_10%,transparent)] p-5 flex flex-col justify-between transition-all hover:-translate-y-0.5 hover:border-[color-mix(in_srgb,var(--accent)_45%,transparent)] hover:shadow-lg hover:shadow-[color-mix(in_srgb,var(--accent)_12%,transparent)] ${
                  i === 3 ? "bg-accent2 text-accent2-foreground border-transparent hover:-translate-y-0.5" : ""
                }`}
              >
                <Icon size={22} className={i === 3 ? "" : "text-accent"} />
                <div>
                  <h3 className="mt-3 font-semibold">{title}</h3>
                  <p
                    className={`mt-1 text-sm ${
                      i === 3
                        ? "opacity-80"
                        : "text-[color-mix(in_srgb,var(--foreground)_60%,transparent)]"
                    }`}
                  >
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="work" className="mt-24 scroll-mt-20">
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight uppercase">Work</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {PROJECTS.map(({ title, desc, tags, featured }) => (
              <div
                key={title}
                className={`group relative rounded-2xl border p-6 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-[color-mix(in_srgb,var(--accent)_15%,transparent)] ${
                  featured
                    ? "md:col-span-2 border-[color-mix(in_srgb,var(--accent)_40%,transparent)] bg-[color-mix(in_srgb,var(--accent)_6%,transparent)]"
                    : "border-[color-mix(in_srgb,var(--foreground)_10%,transparent)] hover:border-[color-mix(in_srgb,var(--accent)_45%,transparent)]"
                }`}
              >
                <div className="flex items-start justify-between">
                  <h3 className="text-2xl font-bold tracking-tight">{title}</h3>
                  <ArrowUpRight
                    size={20}
                    className="shrink-0 text-[color-mix(in_srgb,var(--foreground)_35%,transparent)] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent"
                  />
                </div>
                <p className="mt-2 max-w-lg text-sm text-[color-mix(in_srgb,var(--foreground)_65%,transparent)]">
                  {desc}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
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
        <section id="contact" className="mt-24 scroll-mt-20 pb-16">
          <div className="rounded-3xl bg-[color-mix(in_srgb,var(--foreground)_4%,transparent)] border border-[color-mix(in_srgb,var(--foreground)_10%,transparent)] p-8 sm:p-14 text-center">
            <h2 className="text-4xl sm:text-6xl font-black tracking-tighter uppercase">
              Let&apos;s build <span className="text-accent">something.</span>
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="mailto:prempremprajapatpp@gmail.com"
                className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-5 py-2.5 text-sm font-semibold transition-opacity hover:opacity-90"
              >
                <Mail size={16} /> Email me
              </a>
              <a
                href="https://github.com/"
                className="inline-flex items-center gap-2 rounded-full border border-[color-mix(in_srgb,var(--foreground)_15%,transparent)] px-5 py-2.5 text-sm font-semibold transition-colors hover:border-[color-mix(in_srgb,var(--accent)_45%,transparent)] hover:text-accent"
              >
                <Github size={16} /> GitHub
              </a>
              <a
                href="https://linkedin.com/"
                className="inline-flex items-center gap-2 rounded-full border border-[color-mix(in_srgb,var(--foreground)_15%,transparent)] px-5 py-2.5 text-sm font-semibold transition-colors hover:border-[color-mix(in_srgb,var(--accent)_45%,transparent)] hover:text-accent"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>
          </div>

          <footer className="mt-10 flex justify-between text-xs text-[color-mix(in_srgb,var(--foreground)_45%,transparent)]">
            <span>© {new Date().getFullYear()} Prem Prajapat</span>
            <span>Built with Next.js</span>
          </footer>
        </section>
      </main>
    </>
  );
}
