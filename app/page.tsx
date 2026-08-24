import Link from "next/link";
import Image from "next/image";
import {
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  ArrowUpRight,
  ArrowDown,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import Reveal from "./components/Reveal";
import SystemStack from "./components/SystemStack";

const SERVICES = [
  {
    title: "UI Design",
    desc: "Wireframes to high-fidelity screens in Figma — flows, systems, and the details that make a product feel considered.",
  },
  {
    title: "UI Development",
    desc: "Responsive, accessible interfaces in React and Next.js that match the design pixel for pixel.",
  },
  {
    title: "Backend Development",
    desc: "APIs, databases, auth, payments — the plumbing that quietly works.",
  },
  {
    title: "Project Management",
    desc: "Scope, timeline, ship. Owned end to end, no hand-offs lost in between.",
  },
];

const FEATURED_PROJECT = {
  title: "NerdMarket",
  year: "2026",
  href: "/work/nerdmarket",
  desc: "Field-service marketplace connecting vendors and technicians, with GPS check-in, proof-of-work, and escrow release.",
  tags: ["NestJS", "Prisma", "Postgres", "Next.js"],
};

const OTHER_PROJECTS = [
  {
    title: "Americar",
    href: "/work/americar",
    image: "/projects/americar.jpg",
    desc: "Vehicle maintenance tracking and a trusted service-provider network — customer, store, and vendor apps with QR check-in and mileage tracking.",
    tags: ["React Native", "React", "Firebase"],
  },
  {
    title: "OnlyMaple",
    href: "/work/onlymaple",
    image: "/projects/onlymaple.png",
    desc: "A certification directory helping Canadians find and support verified Canadian-owned businesses.",
    tags: ["Next.js", "Firebase", "Framer Motion"],
  },
];

const NAV = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#stack", label: "Stack" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const STACK = [
  {
    group: "Frontend & Mobile",
    items: ["React", "Next.js", "React Native", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    group: "Backend & Data",
    items: ["Node.js", "NestJS", "Prisma", "PostgreSQL", "Firebase", "REST APIs"],
  },
  {
    group: "Design & Delivery",
    items: ["Figma", "Design systems", "Git & GitHub", "Agile / sprint planning"],
  },
];

const STATS = [
  { value: "03", label: "Products shipped end to end" },
  { value: "04", label: "Roles covered, solo" },
  { value: "01", label: "Person to talk to" },
];

function SectionLabel({ index, title }: { index: string; title: string }) {
  return (
    <p className="font-mono text-xs uppercase tracking-[0.2em] text-[color-mix(in_srgb,var(--foreground)_45%,transparent)]">
      <span className="text-accent">({index})</span> — {title}
    </p>
  );
}

const hairline = "border-[color-mix(in_srgb,var(--foreground)_10%,transparent)]";
const muted = "text-[color-mix(in_srgb,var(--foreground)_60%,transparent)]";

export default function Portfolio() {
  return (
    <>
      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-[color-mix(in_srgb,var(--background)_80%,transparent)]">
        <div className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 text-sm font-medium tracking-wide">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            PREM
          </a>
          <nav
            className={`hidden sm:flex items-center gap-1 rounded-full border ${hairline} px-1.5 py-1.5 text-sm`}
          >
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

      {/* Full-width clip: the hero glow bleeds past the content column, so it has
          to be cut at the screen edge, not at max-w-7xl. */}
      <div className="overflow-x-clip">
        <main className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Hero */}
        <section className="relative flex min-h-[calc(100vh-5rem)] flex-col justify-center pb-20">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="relative z-10">
              <div className="flex flex-wrap items-center gap-4">
                <span
                  className={`inline-flex items-center gap-2 rounded-full border ${hairline} px-3.5 py-1.5 text-xs font-medium`}
                >
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                  </span>
                  Available for work
                </span>
                <p className="text-sm">
                  Hey, I&apos;m <span className="font-serif-italic text-base">Prem</span> —
                </p>
              </div>

              <h1 className="mt-8 leading-[0.95] tracking-tight">
                <span className="block text-[clamp(3rem,7vw,6.5rem)] font-black uppercase">
                  Ideas
                </span>
                <span className="block text-[clamp(2.2rem,5vw,4.5rem)] font-serif-italic text-accent">
                  to products,
                </span>
                <span className="text-stroke block text-[clamp(3rem,7vw,6.5rem)] font-black uppercase">
                  Shipped
                </span>
              </h1>

              <p className={`mt-8 max-w-md leading-relaxed ${muted}`}>
                Design, code, and delivery in one pair of hands — I take a
                product from first wireframe to the API and database behind
                it, all the way to production.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-foreground py-1.5 pl-5 pr-1.5 text-sm font-medium text-background transition-opacity hover:opacity-85"
                >
                  Contact me
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-background text-foreground">
                    <ArrowRight size={14} />
                  </span>
                </a>
                <a
                  href="#work"
                  className={`inline-flex items-center gap-2 rounded-full border ${hairline} px-5 py-2 text-sm font-medium transition-colors hover:bg-foreground hover:text-background`}
                >
                  See the work
                </a>
              </div>
            </div>

            <SystemStack className="pointer-events-none hidden aspect-square w-full max-w-[600px] justify-self-end lg:-ml-20 lg:block" />
          </div>

          <p className="scroll-cue absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] sm:flex">
            Scroll <ArrowDown size={13} />
          </p>
        </section>

        {/* Stats */}
        <section className={`grid grid-cols-1 border-y sm:grid-cols-3 ${hairline}`}>
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div
                className={`flex items-baseline gap-4 py-10 sm:block sm:border-l sm:px-10 sm:first:border-l-0 sm:first:pl-0 ${hairline}`}
              >
                <span className="text-5xl font-black tracking-tight sm:text-6xl">
                  {s.value}
                </span>
                <p className={`mt-2 text-sm ${muted}`}>{s.label}</p>
              </div>
            </Reveal>
          ))}
        </section>

        {/* Marquee */}
        <section className={`overflow-hidden border-b py-8 ${hairline}`}>
          <div className="marquee-track flex w-max whitespace-nowrap">
            {Array.from({ length: 6 })
              .flatMap(() => SERVICES.map((s) => s.title))
              .map((word, i) => (
                <span
                  key={i}
                  className={`mx-6 text-3xl tracking-tight sm:text-4xl ${
                    i % 2 ? "font-serif-italic text-accent opacity-70" : "font-semibold opacity-25"
                  }`}
                >
                  {word}
                </span>
              ))}
          </div>
        </section>

        {/* Services */}
        <section id="services" className="scroll-mt-24 py-28 sm:py-32">
          <Reveal>
            <SectionLabel index="01" title="Services" />
            <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
              Everything a product needs,{" "}
              <span className="font-serif-italic text-accent">one person.</span>
            </h2>
          </Reveal>
          <div className={`mt-16 border-t ${hairline}`}>
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={i * 60}>
                <div
                  className={`group grid grid-cols-[auto_1fr] items-baseline gap-x-6 gap-y-2 border-b py-10 transition-colors sm:grid-cols-[6rem_1fr_minmax(0,24rem)] ${hairline}`}
                >
                  <span className="font-mono text-sm text-accent">
                    0{i + 1}
                  </span>
                  <h3 className="text-2xl font-semibold tracking-tight transition-transform duration-300 group-hover:translate-x-2 sm:text-4xl">
                    {s.title}
                  </h3>
                  <p className={`col-start-2 text-sm leading-relaxed sm:col-start-3 ${muted}`}>
                    {s.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Tech stack */}
        <section id="stack" className={`scroll-mt-24 border-t py-28 sm:py-32 ${hairline}`}>
          <Reveal>
            <SectionLabel index="02" title="Tech stack" />
            <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
              Tools I can{" "}
              <span className="font-serif-italic text-accent">deliver</span> on.
            </h2>
          </Reveal>
          <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-3">
            {STACK.map((col, i) => (
              <Reveal key={col.group} delay={i * 80}>
                <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-[color-mix(in_srgb,var(--foreground)_45%,transparent)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {col.group}
                </p>
                <ul className={`mt-5 border-t ${hairline}`}>
                  {col.items.map((item) => (
                    <li
                      key={item}
                      className={`group flex items-center justify-between border-b py-3.5 text-lg font-medium tracking-tight transition-colors hover:text-accent ${hairline}`}
                    >
                      {item}
                      <span className="h-px w-6 bg-[color-mix(in_srgb,var(--foreground)_20%,transparent)] transition-all group-hover:w-10 group-hover:bg-accent" />
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className={`scroll-mt-24 border-t py-28 sm:py-32 ${hairline}`}>
          <Reveal>
            <SectionLabel index="03" title="About" />
          </Reveal>
          <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr]">
            <Reveal delay={60}>
              <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
                Designing products, and building the{" "}
                <span className="font-serif-italic text-accent">whole thing</span>{" "}
                underneath.
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <div className="flex h-full flex-col justify-end gap-6">
                <p className={`leading-relaxed ${muted}`}>
                  I&apos;m Prem — I work across the whole stack of a product: the
                  interface someone actually uses, the backend and database that
                  keep it running, and the project management that gets it out the
                  door on time. Most people hand off between those roles. I
                  don&apos;t have to.
                </p>
                <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em]">
                  <MapPin size={13} className="text-accent" /> Working worldwide,
                  remotely
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Work */}
        <section id="work" className={`scroll-mt-24 border-t py-28 sm:py-32 ${hairline}`}>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <Reveal>
              <SectionLabel index="04" title="Selected work" />
              <h2 className="mt-4 text-5xl font-semibold tracking-tight sm:text-7xl">
                Work<span className="text-accent">.</span>
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <p className={`max-w-xs text-sm ${muted}`}>
                What it does, how it was built, and the outcome — each one is a
                full case study.
              </p>
            </Reveal>
          </div>

          {/* Featured project */}
          <Reveal className="mt-14">
            <Link
              href={FEATURED_PROJECT.href}
              className={`group block overflow-hidden rounded-[2rem] border bg-surface transition-transform hover:-translate-y-1 ${hairline}`}
            >
              <div className="relative aspect-[16/9] bg-[linear-gradient(135deg,color-mix(in_srgb,var(--accent)_14%,var(--surface)),var(--surface)_65%)] p-4 sm:aspect-[16/7] sm:p-8">
                <span className="pointer-events-none absolute right-6 top-6 font-mono text-7xl font-black text-[color-mix(in_srgb,var(--foreground)_8%,transparent)] sm:text-9xl">
                  01
                </span>
                <span
                  className={`absolute bottom-6 left-6 z-10 inline-flex items-center gap-2 rounded-full border bg-background px-4 py-2 text-xs font-medium sm:bottom-10 sm:left-10 ${hairline}`}
                >
                  Case study
                  <ArrowUpRight
                    size={13}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </span>
                {/* abstract app-window mockup */}
                <div
                  className={`flex h-full w-full flex-col overflow-hidden rounded-xl border bg-background ${hairline}`}
                >
                  <div
                    className={`flex items-center gap-1.5 border-b px-4 py-3 ${hairline}`}
                  >
                    <span className="h-2.5 w-2.5 rounded-full bg-[color-mix(in_srgb,var(--foreground)_20%,transparent)]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[color-mix(in_srgb,var(--foreground)_20%,transparent)]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[color-mix(in_srgb,var(--foreground)_20%,transparent)]" />
                    <span className="ml-3 h-5 max-w-xs flex-1 rounded-full bg-[color-mix(in_srgb,var(--foreground)_6%,transparent)]" />
                  </div>
                  <div className="grid flex-1 grid-cols-[minmax(0,1fr)] gap-4 p-4 sm:grid-cols-[7rem_1fr] sm:p-5">
                    <div className="hidden flex-col gap-2 sm:flex">
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
                          className={`flex flex-col justify-between rounded-lg border p-3 ${
                            idx === 0
                              ? "border-accent bg-[color-mix(in_srgb,var(--accent)_10%,transparent)]"
                              : "border-[color-mix(in_srgb,var(--foreground)_8%,transparent)]"
                          }`}
                        >
                          {idx === 0 ? (
                            <ShieldCheck size={16} className="text-accent" />
                          ) : (
                            <MapPin
                              size={16}
                              className="text-[color-mix(in_srgb,var(--foreground)_35%,transparent)]"
                            />
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
              <div className="flex flex-wrap items-start justify-between gap-6 p-6 sm:p-8">
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight">
                    {FEATURED_PROJECT.title}
                  </h3>
                  <p className={`mt-1 max-w-lg text-sm ${muted}`}>
                    {FEATURED_PROJECT.desc}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex flex-wrap justify-end gap-2">
                    {FEATURED_PROJECT.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`rounded-full border px-2.5 py-0.5 text-xs ${hairline} ${muted}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="shrink-0 font-mono text-xs text-[color-mix(in_srgb,var(--foreground)_45%,transparent)]">
                    {FEATURED_PROJECT.year}
                  </span>
                </div>
              </div>
            </Link>
          </Reveal>

          {/* Other projects */}
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {OTHER_PROJECTS.map(({ title, href, image, desc, tags }, i) => (
              <Reveal key={title} delay={i * 100 + 100}>
                <Link
                  href={href}
                  className={`group block h-full overflow-hidden rounded-[2rem] border bg-surface transition-transform hover:-translate-y-1 ${hairline}`}
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <span className="pointer-events-none absolute right-4 top-2 z-10 font-mono text-6xl font-black text-white/15">
                      0{i + 2}
                    </span>
                    <Image
                      src={image}
                      alt={`${title} homepage screenshot`}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 sm:p-8">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
                      <ArrowUpRight
                        size={18}
                        className="shrink-0 text-[color-mix(in_srgb,var(--foreground)_35%,transparent)] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                      />
                    </div>
                    <p className={`mt-1 text-sm leading-relaxed ${muted}`}>{desc}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className={`rounded-full border px-2.5 py-0.5 text-xs ${hairline} ${muted}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className={`scroll-mt-24 border-t py-28 sm:py-32 ${hairline}`}>
          <Reveal>
            <SectionLabel index="05" title="Contact" />
            <h2 className="mt-6 text-[clamp(2.8rem,9vw,8rem)] font-black uppercase leading-[0.95] tracking-tight">
              Let&apos;s build
              <br />
              <span className="font-serif-italic normal-case text-accent">
                something.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="mailto:appp7154@gmail.com"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-85"
              >
                <Mail size={16} /> appp7154@gmail.com
              </a>
              <a
                href="https://github.com/narutojoyboy"
                className={`inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-medium transition-colors hover:bg-foreground hover:text-background ${hairline}`}
              >
                <Github size={16} /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/prem-prajapat-a9974a173/"
                className={`inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-medium transition-colors hover:bg-foreground hover:text-background ${hairline}`}
              >
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>
          </Reveal>
        </section>
        </main>

      {/* Footer with ghost name */}
      <footer className="relative z-10 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <div
            className={`flex flex-wrap justify-between gap-4 border-t py-8 text-xs ${hairline} text-[color-mix(in_srgb,var(--foreground)_45%,transparent)]`}
          >
            <span>© {new Date().getFullYear()} Prem Prajapat</span>
            <span>Built with Next.js</span>
          </div>
        </div>
        <p
          aria-hidden
          className="pointer-events-none select-none whitespace-nowrap text-center text-[26vw] font-black uppercase leading-[0.75] tracking-tight text-[color-mix(in_srgb,var(--foreground)_5%,transparent)]"
        >
          Prem
        </p>
      </footer>
      </div>
    </>
  );
}
