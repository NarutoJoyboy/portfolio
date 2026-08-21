import { Code2, Layers, Palette, Server, Github, Linkedin, Mail, ArrowUpRight, User } from "lucide-react";
import Reveal from "./components/Reveal";
import Parallax from "./components/Parallax";

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

const MARQUEE_WORDS = ["UI DESIGN", "UI DEVELOPMENT", "BACKEND DEVELOPMENT", "PROJECT MANAGEMENT"];

function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest">
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent text-accent-foreground text-[10px] font-bold">
        {index}
      </span>
      {label}
    </div>
  );
}

export default function Portfolio() {
  return (
    <>
      {/* Nav */}
      <header className="sticky top-0 z-40 bg-background border-b-2 border-foreground">
        <div className="mx-auto max-w-5xl px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-black uppercase tracking-tight">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-foreground bg-accent text-accent-foreground text-xs font-black">
              PP
            </span>
            <span className="hidden sm:inline">Prem Prajapat</span>
          </a>
          <nav className="flex gap-1 text-xs sm:text-sm font-mono uppercase">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-2 sm:px-3 py-1.5 hover:bg-foreground hover:text-background transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 overflow-hidden">
        {/* Hero */}
        <section id="about" className="relative pt-16 sm:pt-20 pb-12">
          <Parallax
            speed={0.08}
            className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap text-[13vw] sm:text-[7rem] font-black uppercase tracking-tighter text-foreground/[0.05] select-none"
          >
            BUILD · SHIP · REPEAT
          </Parallax>

          <div className="relative grid grid-cols-1 sm:grid-cols-[1.3fr_0.7fr] gap-10 items-start">
            <div>
              <span className="inline-block rotate-[-3deg] rounded-full border-2 border-foreground bg-accent px-4 py-1.5 text-xs font-black uppercase tracking-wide text-accent-foreground hard-shadow-sm">
                Available for work
              </span>
              <h1 className="mt-6 text-[15vw] sm:text-[5.5rem] md:text-[6.5rem] font-black tracking-tighter leading-[0.85] uppercase">
                Prem
                <br />
                Prajapat
              </h1>
              <p className="mt-6 max-w-md text-lg leading-relaxed">
                I design, build, and manage full products end to end — from
                the interface someone taps, to the API and database behind
                it, to getting it shipped.
              </p>
            </div>

            {/* Photo slot */}
            <Parallax speed={-0.06} className="relative">
              <div className="aspect-[3/4] rounded-none border-2 border-foreground bg-[repeating-linear-gradient(135deg,color-mix(in_srgb,var(--foreground)_6%,transparent)_0px,color-mix(in_srgb,var(--foreground)_6%,transparent)_2px,transparent_2px,transparent_12px)] hard-shadow flex flex-col items-center justify-center gap-3 p-6 text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-foreground bg-background">
                  <User size={24} />
                </span>
                <p className="text-xs font-mono leading-relaxed">
                  Your photo — chest-up, natural
                  light, plain background.
                </p>
              </div>
            </Parallax>
          </div>
        </section>

        {/* Marquee */}
        <section className="border-y-2 border-foreground py-4 overflow-hidden bg-foreground text-background">
          <div className="flex whitespace-nowrap marquee-track w-max">
            {[...MARQUEE_WORDS, ...MARQUEE_WORDS, ...MARQUEE_WORDS, ...MARQUEE_WORDS].map((word, i) => (
              <span
                key={i}
                className="flex items-center text-2xl sm:text-3xl font-black uppercase tracking-tight mx-6"
              >
                {word}
                <span className="ml-6 text-accent">✦</span>
              </span>
            ))}
          </div>
        </section>

        {/* Bento: what I do */}
        <section className="mt-16">
          <Reveal>
            <SectionLabel index="01" label="What I do" />
          </Reveal>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 auto-rows-[minmax(140px,auto)] gap-4">
            <Reveal className="col-span-2 row-span-2">
              <div className="h-full rounded-none border-2 border-foreground bg-accent text-accent-foreground p-6 flex flex-col justify-between hard-shadow">
                <span className="text-xs font-mono font-bold uppercase tracking-wider">
                  Full-stack, full-stop
                </span>
                <p className="text-2xl sm:text-3xl font-bold leading-snug">
                  UI design, UI &amp; backend development, and running the
                  project that ties them together.
                </p>
              </div>
            </Reveal>

            {SKILLS.map(({ icon: Icon, title, desc }, i) => (
              <Reveal key={title} delay={i * 80} className="col-span-2 sm:col-span-1">
                <div className="press group h-full rounded-none border-2 border-foreground bg-background p-5 flex flex-col justify-between hard-shadow-sm">
                  <Icon size={22} />
                  <div>
                    <h3 className="mt-3 font-bold">{title}</h3>
                    <p className="mt-1 text-sm opacity-70">{desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="work" className="mt-24 scroll-mt-20">
          <Reveal>
            <SectionLabel index="02" label="Selected work" />
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-3 text-4xl sm:text-5xl font-black tracking-tight uppercase">Work</h2>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {PROJECTS.map(({ title, desc, tags, featured }, i) => (
              <Reveal key={title} delay={i * 100} className={featured ? "md:col-span-2" : ""}>
                <div
                  className={`press group relative h-full rounded-none border-2 border-foreground p-6 hard-shadow-sm ${
                    featured ? "bg-accent text-accent-foreground" : "bg-background"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <h3 className="text-2xl font-bold tracking-tight">{title}</h3>
                    <ArrowUpRight
                      size={20}
                      className="shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>
                  <p className={`mt-2 max-w-lg text-sm ${featured ? "opacity-80" : "opacity-70"}`}>
                    {desc}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className={`rounded-none border-2 px-2.5 py-0.5 text-xs font-mono uppercase ${
                          featured ? "border-accent-foreground" : "border-foreground"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mt-24 scroll-mt-20 pb-16">
          <Reveal>
            <div className="rounded-none border-2 border-foreground bg-background p-8 sm:p-14 text-center hard-shadow">
              <div className="flex justify-center">
                <SectionLabel index="03" label="Get in touch" />
              </div>
              <h2 className="mt-4 text-4xl sm:text-6xl font-black tracking-tighter uppercase">
                Let&apos;s build <span className="text-accent [-webkit-text-stroke:2px_var(--foreground)]">something.</span>
              </h2>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  href="mailto:prempremprajapatpp@gmail.com"
                  className="press inline-flex items-center gap-2 rounded-none border-2 border-foreground bg-accent text-accent-foreground px-5 py-2.5 text-sm font-black uppercase hard-shadow-sm"
                >
                  <Mail size={16} /> Email me
                </a>
                <a
                  href="https://github.com/"
                  className="press inline-flex items-center gap-2 rounded-none border-2 border-foreground bg-background px-5 py-2.5 text-sm font-black uppercase hard-shadow-sm"
                >
                  <Github size={16} /> GitHub
                </a>
                <a
                  href="https://linkedin.com/"
                  className="press inline-flex items-center gap-2 rounded-none border-2 border-foreground bg-background px-5 py-2.5 text-sm font-black uppercase hard-shadow-sm"
                >
                  <Linkedin size={16} /> LinkedIn
                </a>
              </div>
            </div>
          </Reveal>

          <footer className="mt-10 flex justify-between text-xs font-mono uppercase">
            <span>© {new Date().getFullYear()} Prem Prajapat</span>
            <span>Built with Next.js</span>
          </footer>
        </section>
      </main>
    </>
  );
}
