import { Github, Linkedin, Mail, ArrowRight, User, MapPin, ShieldCheck, ImagePlus } from "lucide-react";
import Reveal from "./components/Reveal";
import Parallax from "./components/Parallax";

const FEATURES = [
  { title: "UI Design", desc: "Wireframes to high-fidelity screens in Figma." },
  { title: "UI Development", desc: "Responsive, accessible interfaces in React/Next.js." },
  { title: "Backend Development", desc: "APIs, databases, the plumbing that works." },
  { title: "Project Management", desc: "Scope, timeline, ship — owned end to end." },
];

const FEATURED_PROJECT = {
  title: "NerdMarket",
  year: "2026",
  desc: "Field-service marketplace connecting vendors and technicians, with GPS check-in, proof-of-work, and escrow release.",
  tags: ["NestJS", "Prisma", "Postgres", "Next.js"],
};

const PLACEHOLDER_PROJECTS = ["Project Two", "Project Three"];

const NAV = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Portfolio() {
  return (
    <>
      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-[color-mix(in_srgb,var(--background)_80%,transparent)]">
        <div className="mx-auto max-w-5xl px-6 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 text-sm font-medium">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            PREM
          </a>
          <nav className="hidden sm:flex items-center gap-1 rounded-full border border-[color-mix(in_srgb,var(--foreground)_12%,transparent)] px-1.5 py-1.5 text-sm">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-1.5 text-[color-mix(in_srgb,var(--foreground)_70%,transparent)] hover:bg-foreground hover:text-background transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="rounded-full bg-foreground text-background px-4 py-2 text-sm font-medium hover:opacity-85 transition-opacity"
          >
            Contact
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6">
        {/* Hero */}
        <section id="about" className="pt-8 sm:pt-12 pb-16 grid grid-cols-1 sm:grid-cols-[1fr_0.85fr] gap-10 items-center">
          <div>
            <p className="text-lg">
              Hey, I&apos;m <span className="font-serif-italic">Prem</span>,
            </p>
            <h1 className="mt-2 text-5xl sm:text-6xl leading-[1.05] tracking-tight">
              <span className="font-semibold">A UI/UX</span>
              <br />
              <span className="font-serif-italic text-accent">&amp; Backend</span>
              <br />
              <span className="font-black uppercase">Builder</span>
            </h1>
            <p className="mt-6 max-w-md text-[color-mix(in_srgb,var(--foreground)_65%,transparent)] leading-relaxed">
              I design, build, and manage full products end to end — from the
              interface someone taps, to the API and database behind it, to
              getting it shipped.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground text-background pl-5 pr-1.5 py-1.5 text-sm font-medium hover:opacity-85 transition-opacity"
            >
              Contact me
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-background text-foreground">
                <ArrowRight size={14} />
              </span>
            </a>
          </div>

          <Parallax speed={0.04}>
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-[color-mix(in_srgb,var(--foreground)_10%,transparent)] bg-surface flex flex-col items-center justify-center gap-3 p-8 text-center shadow-[0_20px_60px_-20px_rgba(0,0,0,0.35)]">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--foreground)_6%,transparent)] text-[color-mix(in_srgb,var(--foreground)_40%,transparent)]">
                <User size={26} />
              </span>
              <p className="text-xs text-[color-mix(in_srgb,var(--foreground)_45%,transparent)] leading-relaxed max-w-[16rem]">
                Your photo — chest-up, natural light, plain background. Duotone
                it in a warm neutral to match this palette.
              </p>
            </div>
          </Parallax>
        </section>

        {/* Feature row */}
        <section className="border-t border-[color-mix(in_srgb,var(--foreground)_10%,transparent)]">
          <div className="grid grid-cols-2 sm:grid-cols-4">
            {FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={i * 70}>
                <div className="border-t sm:border-t-0 sm:border-l border-[color-mix(in_srgb,var(--foreground)_10%,transparent)] px-0 sm:px-5 py-6 first:sm:border-l-0">
                  <h3 className="text-xs font-semibold uppercase tracking-wider">{f.title}</h3>
                  <p className="mt-2 text-sm text-[color-mix(in_srgb,var(--foreground)_55%,transparent)] leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Marquee divider */}
        <section className="border-y border-[color-mix(in_srgb,var(--foreground)_10%,transparent)] py-3 mt-1 overflow-hidden">
          <div className="flex whitespace-nowrap marquee-track w-max opacity-40 text-sm">
            {Array.from({ length: 8 }).flatMap(() =>
              FEATURES.map((f) => f.title)
            ).map((word, i) => (
              <span key={i} className="mx-4">
                {word} <span className="text-accent">·</span>
              </span>
            ))}
          </div>
        </section>

        {/* Bio */}
        <section className="py-20 grid grid-cols-1 sm:grid-cols-[1fr_1fr] gap-10">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-tight">
              Designing products, and building the{" "}
              <span className="font-serif-italic text-accent">whole thing</span>{" "}
              underneath.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-[color-mix(in_srgb,var(--foreground)_65%,transparent)] leading-relaxed">
              I&apos;m Prem — I work across the whole stack of a product: the
              interface someone actually uses, the backend and database that
              keep it running, and the project management that gets it out
              the door on time. Most people hand off between those roles.
              I don&apos;t have to.
            </p>
          </Reveal>
        </section>

        {/* Portfolio */}
        <section id="work" className="pb-20 scroll-mt-20">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <Reveal>
              <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight">Portfolio</h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="max-w-xs text-sm text-[color-mix(in_srgb,var(--foreground)_55%,transparent)]">
                Selected work — what it does, how it was built, and the
                outcome.
              </p>
            </Reveal>
          </div>

          {/* Featured project — real work gets a real mockup */}
          <Reveal className="mt-10">
            <div className="group rounded-[2rem] border border-[color-mix(in_srgb,var(--foreground)_10%,transparent)] bg-surface overflow-hidden transition-transform hover:-translate-y-1">
              <div className="relative aspect-[16/9] sm:aspect-[16/7] bg-[linear-gradient(135deg,color-mix(in_srgb,var(--accent)_14%,var(--surface)),var(--surface)_65%)] p-4 sm:p-8">
                {/* abstract app-window mockup */}
                <div className="h-full w-full rounded-xl border border-[color-mix(in_srgb,var(--foreground)_10%,transparent)] bg-background overflow-hidden flex flex-col">
                  <div className="flex items-center gap-1.5 border-b border-[color-mix(in_srgb,var(--foreground)_8%,transparent)] px-4 py-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-[color-mix(in_srgb,var(--foreground)_20%,transparent)]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[color-mix(in_srgb,var(--foreground)_20%,transparent)]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[color-mix(in_srgb,var(--foreground)_20%,transparent)]" />
                    <span className="ml-3 h-5 flex-1 max-w-xs rounded-full bg-[color-mix(in_srgb,var(--foreground)_6%,transparent)]" />
                  </div>
                  <div className="flex-1 grid grid-cols-[minmax(0,1fr)] sm:grid-cols-[7rem_1fr] gap-4 p-4 sm:p-5">
                    <div className="hidden sm:flex flex-col gap-2">
                      {[70, 90, 55, 80].map((w, idx) => (
                        <span
                          key={idx}
                          style={{ width: `${w}%` }}
                          className="h-2.5 rounded-full bg-[color-mix(in_srgb,var(--foreground)_8%,transparent)]"
                        />
                      ))}
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {[0, 1, 2, 3].map((idx) => (
                        <div
                          key={idx}
                          className={`rounded-lg border p-3 flex flex-col justify-between ${
                            idx === 0
                              ? "border-accent bg-[color-mix(in_srgb,var(--accent)_10%,transparent)]"
                              : "border-[color-mix(in_srgb,var(--foreground)_8%,transparent)]"
                          }`}
                        >
                          {idx === 0 ? (
                            <ShieldCheck size={16} className="text-accent" />
                          ) : (
                            <MapPin size={16} className="text-[color-mix(in_srgb,var(--foreground)_35%,transparent)]" />
                          )}
                          <div className="mt-3 space-y-1.5">
                            <span className="block h-2 w-3/4 rounded-full bg-[color-mix(in_srgb,var(--foreground)_10%,transparent)]" />
                            <span className="block h-2 w-1/2 rounded-full bg-[color-mix(in_srgb,var(--foreground)_10%,transparent)]" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6 flex items-start justify-between gap-6 flex-wrap">
                <div>
                  <h3 className="text-xl font-semibold">{FEATURED_PROJECT.title}</h3>
                  <p className="mt-1 max-w-lg text-sm text-[color-mix(in_srgb,var(--foreground)_60%,transparent)]">
                    {FEATURED_PROJECT.desc}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex flex-wrap gap-2 justify-end">
                    {FEATURED_PROJECT.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[color-mix(in_srgb,var(--foreground)_15%,transparent)] px-2.5 py-0.5 text-xs text-[color-mix(in_srgb,var(--foreground)_55%,transparent)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs text-[color-mix(in_srgb,var(--foreground)_45%,transparent)] shrink-0">
                    {FEATURED_PROJECT.year}
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Placeholders — honestly marked, not dressed up as real work */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {PLACEHOLDER_PROJECTS.map((title, i) => (
              <Reveal key={title} delay={i * 100 + 100}>
                <div className="rounded-[2rem] border border-dashed border-[color-mix(in_srgb,var(--foreground)_15%,transparent)] p-6 flex flex-col items-center justify-center text-center gap-2 aspect-[16/10] sm:aspect-[16/9]">
                  <ImagePlus size={20} className="text-[color-mix(in_srgb,var(--foreground)_35%,transparent)]" />
                  <p className="text-sm font-medium text-[color-mix(in_srgb,var(--foreground)_55%,transparent)]">
                    {title}
                  </p>
                  <p className="text-xs text-[color-mix(in_srgb,var(--foreground)_40%,transparent)]">
                    Your next case study goes here
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="pb-20 scroll-mt-20">
          <Reveal>
            <div className="rounded-[2rem] border border-[color-mix(in_srgb,var(--foreground)_10%,transparent)] bg-surface p-10 sm:p-16 text-center">
              <h2 className="text-4xl sm:text-6xl font-semibold tracking-tight">
                Let&apos;s build <span className="font-serif-italic text-accent">something.</span>
              </h2>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <a
                  href="mailto:prempremprajapatpp@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-medium hover:opacity-85 transition-opacity"
                >
                  <Mail size={16} /> Email me
                </a>
                <a
                  href="https://github.com/"
                  className="inline-flex items-center gap-2 rounded-full border border-[color-mix(in_srgb,var(--foreground)_15%,transparent)] px-5 py-2.5 text-sm font-medium hover:bg-foreground hover:text-background transition-colors"
                >
                  <Github size={16} /> GitHub
                </a>
                <a
                  href="https://linkedin.com/"
                  className="inline-flex items-center gap-2 rounded-full border border-[color-mix(in_srgb,var(--foreground)_15%,transparent)] px-5 py-2.5 text-sm font-medium hover:bg-foreground hover:text-background transition-colors"
                >
                  <Linkedin size={16} /> LinkedIn
                </a>
              </div>
            </div>
          </Reveal>

          <footer className="mt-10 flex justify-between text-xs text-[color-mix(in_srgb,var(--foreground)_45%,transparent)]">
            <span>© {new Date().getFullYear()} Prem Prajapat</span>
            <span>Built with Next.js</span>
          </footer>
        </section>
      </main>
    </>
  );
}
