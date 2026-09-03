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
  Clock,
} from "lucide-react";
import Reveal from "./components/Reveal";

const SERVICES = [
  {
    title: "Product Design",
    desc: "User flows, wireframes, and high-fidelity screens in Figma, with a design system that stays coherent as the product grows.",
  },
  {
    title: "Frontend Engineering",
    desc: "Responsive, accessible web interfaces in React and Next.js, built to match the design precisely.",
  },
  {
    title: "Mobile App Development",
    desc: "Cross-platform iOS and Android apps in React Native — device features like GPS, camera, and QR scanning wired up properly, then shipped through App Store and Play Store review.",
  },
  {
    title: "Backend Engineering",
    desc: "APIs, data models, authentication, and payments — built to stay reliable and maintainable in production.",
  },
  {
    title: "Delivery",
    desc: "Scope, estimates, and milestones owned end to end, with no hand-offs between design and deployment.",
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

// Each tool carries the reason it was picked: a stack list alone is a set of
// buzzwords, the reasoning behind it is the part worth reading.
const STACK = [
  {
    group: "Frontend & Mobile",
    items: [
      {
        name: "React",
        why: "The component model keeps a growing interface manageable. What I use for most interactive work.",
      },
      {
        name: "Next.js",
        why: "Routing, server rendering, and image optimisation out of the box, so I spend the time on features rather than wiring up a build.",
      },
      {
        name: "React Native",
        why: "One codebase for iOS and Android. Americar shipped three apps this way, on a budget that would not have covered two native teams.",
      },
      {
        name: "TypeScript",
        why: "Catches the kind of bug that otherwise only shows up in production. I use it on anything with an API behind it.",
      },
      {
        name: "Tailwind CSS",
        why: "Styling stays with the component, so there is no stylesheet quietly drifting out of sync with the markup.",
      },
      {
        name: "Framer Motion",
        why: "Declarative animation — motion becomes part of the component instead of a separate timeline to maintain.",
      },
    ],
  },
  {
    group: "Backend & Data",
    items: [
      {
        name: "Node.js",
        why: "One language across the whole stack, so moving between frontend and backend costs almost no context.",
      },
      {
        name: "NestJS",
        why: "Modules, dependency injection, and guards keep an API structured as it grows. NerdMarket's backend runs on it.",
      },
      {
        name: "Prisma",
        why: "Type-safe queries generated from the schema, so the database and the TypeScript cannot quietly disagree.",
      },
      {
        name: "PostgreSQL",
        why: "Relational integrity where it actually matters — escrow, payments, and anything I cannot afford to get wrong.",
      },
      {
        name: "Firebase",
        why: "Auth, storage, and realtime without standing up infrastructure. The right call when speed to market beats control.",
      },
      {
        name: "REST APIs",
        why: "Predictable, cacheable, and easy for any client to consume. I start here unless there is a reason not to.",
      },
    ],
  },
  {
    group: "Design & Delivery",
    items: [
      {
        name: "Figma",
        why: "Where the product gets worked out, while changing it is still cheap.",
      },
      {
        name: "Design systems",
        why: "Tokens and shared components, so the tenth screen costs a fraction of what the first one did.",
      },
      {
        name: "Git & GitHub",
        why: "Every change reviewable and reversible — the safety net that makes shipping quickly a reasonable thing to do.",
      },
      {
        name: "App Store & Play Store",
        why: "Release builds, store listings, and review submissions. Getting an app approved is its own skill, separate from building it.",
      },
      {
        name: "Agile / sprint planning",
        why: "Short cycles ending in something demoable, so scope problems surface early instead of at launch.",
      },
    ],
  },
];

const STATS = [
  { value: "03", label: "Products shipped end to end" },
  { value: "05", label: "Disciplines covered in-house" },
  { value: "01", label: "Point of contact, brief to launch" },
];

function SectionLabel({ index, title }: { index: string; title: string }) {
  return (
    <p
      className="text-xs uppercase tracking-[0.2em] text-[color-mix(in_srgb,var(--foreground)_45%,transparent)]"
      style={{ fontFamily: "var(--font-sligoil)" }}
    >
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
          <div className="relative z-10">
            <div>
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

              <h1 className="mt-8 leading-[0.9] tracking-tight">
                <span
                  className="block text-[clamp(2.8rem,13vw,11rem)] uppercase"
                  style={{
                    fontFamily: "var(--font-karrik)",
                    // Karrik ships no true bold; a stroke over the fill thickens
                    // strokes symmetrically instead of the skew a synthetic
                    // bold would apply to its deliberately uneven letterforms.
                    WebkitTextStroke: "1.5px currentColor",
                  }}
                >
                  Ideas
                </span>
                <span className="block text-[clamp(2rem,8.4vw,7rem)] font-serif-italic text-accent">
                  to products,
                </span>
                <span
                  className="text-stroke block text-[clamp(2.8rem,13vw,11rem)] uppercase"
                  style={{ fontFamily: "var(--font-karrik)" }}
                >
                  Shipped
                </span>
              </h1>

              <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
              <p className={`max-w-md leading-relaxed ${muted}`}>
                Design, code, and delivery in one pair of hands — I take a
                product from first wireframe to the API and database behind
                it, all the way to production.
              </p>
              <div className="flex flex-wrap gap-3">
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
            </div>
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
              Design, build, and ship,{" "}
              <span className="font-serif-italic text-accent">end to end.</span>
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
                    <li key={item.name} className={`border-b ${hairline}`}>
                      {/* Native <details>: discloses without JavaScript, and is
                          keyboard-operable and screen-reader-announced for free. */}
                      <details className="group">
                        {/* flex must not sit on <summary> itself: it overrides the
                            list-item display the disclosure behaviour depends on,
                            and the content stops being hidden when closed. */}
                        <summary className="cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                          <div className="tool-row flex items-center justify-between py-3.5 text-lg font-medium tracking-tight transition-colors group-hover:text-accent">
                            {item.name}
                            {/* plus when closed, minus when open */}
                            <span className="relative ml-4 h-3 w-3 shrink-0 text-[color-mix(in_srgb,var(--foreground)_30%,transparent)] group-hover:text-accent">
                              <span className="absolute left-0 top-1/2 h-px w-3 -translate-y-1/2 bg-current" />
                              <span className="tool-bar-v absolute left-1/2 top-0 h-3 w-px -translate-x-1/2 bg-current transition-transform duration-200" />
                            </span>
                          </div>
                        </summary>
                        <p className={`pb-4 pr-6 text-sm leading-relaxed ${muted}`}>
                          {item.why}
                        </p>
                      </details>
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
                  interface someone actually uses on web or mobile, the backend
                  and database that keep it running, and the delivery that gets
                  it out the door on time.
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
                {/* No shipped preview for this one yet: a labelled placeholder
                    is honest, where a fake dashboard implies a screenshot. */}
                <div
                  className={`flex h-full w-full flex-col items-center justify-center gap-3 rounded-xl border border-dashed bg-background ${hairline}`}
                >
                  <Clock
                    size={18}
                    className="text-[color-mix(in_srgb,var(--accent)_80%,transparent)]"
                  />
                  <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-[color-mix(in_srgb,var(--foreground)_50%,transparent)]">
                    Preview available soon
                  </p>
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
            {/* Karrik and Sligoil are OFL: the licence asks that the designer
                and foundry are credited wherever the type is used. */}
            <span>
              Type set in{" "}
              <a
                href="https://velvetyne.fr/fonts/karrik/"
                target="_blank"
                rel="noreferrer noopener"
                className="underline decoration-dotted underline-offset-4 transition-colors hover:text-accent"
              >
                Karrik
              </a>{" "}
              and{" "}
              <a
                href="https://velvetyne.fr/fonts/sligoil/"
                target="_blank"
                rel="noreferrer noopener"
                className="underline decoration-dotted underline-offset-4 transition-colors hover:text-accent"
              >
                Sligoil
              </a>{" "}
              (Velvetyne)
            </span>
            <span>Built with Next.js</span>
          </div>
        </div>
        <p
          aria-hidden
          className="pointer-events-none select-none whitespace-nowrap text-center text-[26vw] uppercase leading-[0.75] tracking-tight text-[color-mix(in_srgb,var(--foreground)_5%,transparent)]"
          style={{ fontFamily: '"Cabinet Grotesk", sans-serif', fontWeight: 700 }}
        >
          Prem
        </p>
      </footer>
      </div>
    </>
  );
}
