import Image from "next/image";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import Reveal from "./components/Reveal";

const muted = "text-[color-mix(in_srgb,var(--foreground)_62%,transparent)]";
const hairline = "border-[color-mix(in_srgb,var(--foreground)_14%,transparent)]";

const PROJECTS = [
  {
    index: "01",
    title: "NerdMarket",
    href: "/work/nerdmarket",
    type: "Field-service marketplace",
    description:
      "A trust-first marketplace for vendors and technicians, with GPS check-in, immutable proof of work, dispute handling, and protected payouts.",
    proof: ["90 documented API routes", "97 automated tests", "Postgres-backed E2E suite"],
    tags: ["NestJS", "Prisma", "PostgreSQL", "Next.js"],
  },
  {
    index: "02",
    title: "Americar",
    href: "/work/americar",
    type: "Web + mobile platform",
    image: "/projects/americar.jpg",
    description:
      "Four coordinated apps for car-care memberships, QR redemption, mileage tracking, and automated vendor payouts.",
    proof: ["Customer + store apps", "Vendor + admin portals", "Stripe payout flow"],
    tags: ["React Native", "React", "Firebase", "Stripe"],
  },
  {
    index: "03",
    title: "OnlyMaple",
    href: "/work/onlymaple",
    type: "Certification directory",
    image: "/projects/onlymaple.png",
    description:
      "A searchable directory that turns Canadian business ownership from a marketing claim into a documented, tiered certification.",
    proof: ["Five certification tiers", "Four-step verification", "Separate account journeys"],
    tags: ["Next.js", "Firebase", "Tailwind CSS"],
  },
];

const PROCESS = [
  { number: "01", title: "Frame", text: "Turn the brief into a clear problem, a realistic scope, and a product flow worth building." },
  { number: "02", title: "Design", text: "Work through the interaction and visual system while changes are still quick and inexpensive." },
  { number: "03", title: "Build", text: "Create the interface, API, data model, authentication, and the less-visible systems beneath them." },
  { number: "04", title: "Ship", text: "Test the real flows, prepare releases, and carry the product through production and store review." },
];

const CAPABILITIES = [
  {
    title: "Product design",
    text: "User flows, wireframes, interaction design, high-fidelity screens, and coherent design systems.",
    tools: ["Figma", "UX flows", "Prototyping"],
  },
  {
    title: "Interface engineering",
    text: "Responsive, accessible web and mobile interfaces that hold up beyond the polished happy path.",
    tools: ["React", "Next.js", "React Native"],
  },
  {
    title: "Platform engineering",
    text: "APIs, relational data, authentication, payments, and production rules that keep the interface honest.",
    tools: ["Node.js", "NestJS", "PostgreSQL"],
  },
  {
    title: "Delivery",
    text: "Scope, milestones, testing, release builds, deployment, and one accountable owner from brief to launch.",
    tools: ["GitHub", "CI", "App stores"],
  },
];

function SectionIntro({
  number,
  eyebrow,
  title,
  description,
}: {
  number: string;
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
}) {
  return (
    <div className="section-intro grid gap-6 lg:grid-cols-[minmax(0,1fr)_24rem] lg:items-end">
      <div>
        <p className="font-label text-xs uppercase tracking-[0.18em] text-accent">
          {number} / {eyebrow}
        </p>
        <h2 className="section-heading mt-4 max-w-3xl text-4xl leading-[1.02] tracking-[-0.04em] sm:text-6xl">
          {title}
        </h2>
      </div>
      {description ? <p className={`section-description leading-relaxed ${muted}`}>{description}</p> : null}
    </div>
  );
}

function NerdMarketVisual() {
  const steps = ["Job posted", "GPS check-in", "Proof locked", "Payment released"];

  return (
    <div className="lifecycle-panel relative flex h-full min-h-[32rem] flex-col overflow-hidden bg-[#eef1ff] p-6 sm:p-8">
      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/60 blur-3xl" />
      <div className="relative flex h-full flex-1 flex-col">
        <div className="flex items-center justify-between border-b border-[#cdd4f1] pb-5 text-[0.65rem] uppercase tracking-[0.16em] text-[#53608a]">
          <span>Protected job lifecycle</span>
          <span>NM / 2026</span>
        </div>
        <div className="my-6 grid flex-1 auto-rows-fr grid-cols-2 gap-3">
          {steps.map((step, index) => (
            <div key={step} className="flow-step" style={{ animationDelay: `${160 + index * 110}ms` }}>
              <div className="flex h-full min-h-36 flex-col justify-between rounded-2xl border border-[#cdd4f1] bg-white/90 p-4 shadow-[0_12px_35px_rgba(49,87,213,0.08)] sm:p-5">
                <span className="font-label text-[0.65rem] text-accent">0{index + 1}</span>
                <p className="my-5 text-sm font-medium leading-snug text-[#1d2540]">{step}</p>
                <div className="h-1.5 overflow-hidden rounded-full bg-[#e7eafb]">
                  <div className="flow-bar h-full w-full rounded-full bg-accent" style={{ animationDelay: `${420 + index * 120}ms` }} />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
          {["Identity verified", "Audit logged", "48h safeguard"].map((item) => (
            <span key={item} className="inline-flex min-h-10 items-center justify-center gap-1.5 rounded-xl border border-[#cdd4f1] bg-white/70 px-2 py-2 text-center text-[0.68rem] text-[#455174]">
              <Check size={12} className="text-accent" /> {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, featured = false }: { project: (typeof PROJECTS)[number]; featured?: boolean }) {
  return (
    <Reveal className="h-full">
      <Link
        href={project.href}
        className={`project-card group grid h-full overflow-hidden rounded-[1.75rem] border bg-surface ${hairline} ${featured ? "shine-card lg:grid-cols-2" : "grid-rows-[auto_1fr]"}`}
      >
        {featured ? <span aria-hidden className="glass-flash" style={{ animationDelay: "2.2s" }} /> : null}
        <div className={featured ? "lg:order-2" : ""}>
          {project.image ? (
            <div className="project-media relative aspect-[16/10] h-full min-h-[18rem] overflow-hidden bg-[#ebeae5]">
              <Image
                src={project.image}
                alt={`${project.title} project preview`}
                fill
                sizes={featured ? "(max-width: 1024px) 100vw, 55vw" : "(max-width: 768px) 100vw, 50vw"}
                className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
              />
            </div>
          ) : (
            <NerdMarketVisual />
          )}
        </div>
        <div className={`flex flex-col p-6 sm:p-8 ${featured ? "lg:order-1 lg:p-10" : ""}`}>
          <div className="flex items-center justify-between gap-6">
            <p className="font-label text-[0.68rem] uppercase tracking-[0.16em] text-accent">
              {project.index} / {project.type}
            </p>
            <ArrowUpRight size={20} className="shrink-0 transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1" />
          </div>
          <h3 className={`mt-8 tracking-[-0.035em] ${featured ? "text-5xl sm:text-6xl" : "text-4xl"}`}>{project.title}</h3>
          <p className={`mt-4 max-w-xl leading-relaxed ${muted}`}>{project.description}</p>
          <ul className={`mt-8 space-y-3 border-t pt-5 text-sm ${hairline}`}>
            {project.proof.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-auto flex flex-wrap gap-2 pt-8">
            {project.tags.map((tag) => (
              <span key={tag} className={`rounded-full border px-3 py-1 text-xs ${hairline} ${muted}`}>{tag}</span>
            ))}
          </div>
        </div>
      </Link>
    </Reveal>
  );
}

export default function Portfolio() {
  return (
    <>
      <header className="sticky top-0 z-40 border-b border-[color-mix(in_srgb,var(--foreground)_12%,transparent)] bg-[color-mix(in_srgb,var(--background)_88%,transparent)] backdrop-blur-xl">
        <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#top" className="group flex items-center gap-3 text-sm font-medium tracking-wide">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-foreground text-xs text-background transition-transform group-hover:-rotate-6">PP</span>
            <span className="hidden sm:inline">Prem Prajapat</span>
          </a>
          <nav aria-label="Primary navigation" className="flex items-center gap-1 text-sm">
            <a href="#work" className="nav-link rounded-full px-3 py-2 hover:bg-foreground/5 sm:px-4">Work</a>
            <a href="#about" className="nav-link rounded-full px-3 py-2 hover:bg-foreground/5 sm:px-4">About</a>
            <a href="#contact" className="ml-1 rounded-full bg-foreground px-4 py-2 text-background transition-transform hover:-translate-y-0.5">Let&apos;s talk</a>
          </nav>
        </div>
      </header>

      <main id="top" className="overflow-hidden">
        <section className="mx-auto grid min-h-[calc(100vh-4.5rem)] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(18rem,0.65fr)] lg:py-20">
          <Reveal className="hero-reveal">
            <div className="hero-kicker flex flex-wrap items-center gap-3">
              <span className="availability-pill inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium">
                <span className="availability-dot h-1.5 w-1.5 rounded-full" /> Available for select projects
              </span>
              <span className={`text-sm ${muted}`}>Product designer + full-stack engineer</span>
            </div>
            <h1 className="hero-title mt-8 max-w-5xl text-[clamp(3.35rem,8.4vw,8.4rem)] leading-[0.9] tracking-[-0.06em]">
              I design and engineer products that <span className="font-display text-accent">make it</span> to production.
            </h1>
            <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
              <p className={`hero-copy max-w-xl text-lg leading-relaxed ${muted}`}>
                From the first product flow to the interface, API, database, and release—I build the whole thing and stay accountable for how it ships.
              </p>
              <div className="hero-actions flex shrink-0 flex-wrap gap-3">
                <a href="#work" className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5">
                  View selected work <ArrowDownRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
                </a>
                <a href="mailto:appp7154@gmail.com" className={`inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-medium transition-colors hover:bg-surface ${hairline}`}>Start a project</a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100} className="hero-portrait-reveal relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="absolute -inset-10 -z-10 rounded-full bg-accent/10 blur-3xl" />
            <figure
              aria-label="Prem Prajapat — product designer and full-stack engineer"
              className={`identity-card shine-card portrait-card relative overflow-hidden rounded-[2rem] border bg-surface p-3 shadow-[0_30px_90px_rgba(30,35,55,0.12)] ${hairline}`}
            >
              <span aria-hidden className="glass-flash" style={{ animationDelay: "0.4s" }} />
              <div className="identity-canvas relative aspect-[4/5] overflow-hidden rounded-[1.4rem]">
                <div className="identity-grid absolute inset-0" />
                <div className="absolute inset-x-5 top-5 flex items-center justify-between font-label text-[0.62rem] uppercase tracking-[0.18em] text-[#52618e]">
                  <span>Prem Prajapat</span>
                  <span>India / Worldwide</span>
                </div>

                <div className="identity-orbit absolute left-1/2 top-[46%] grid aspect-square w-[64%] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-accent/25">
                  <span className="orbit-dot absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-accent" />
                  <span className="grid aspect-square w-[72%] place-items-center rounded-full border border-white/80 bg-white/70 shadow-[0_24px_70px_rgba(49,87,213,0.16)] backdrop-blur-sm">
                    <span className="font-display text-[clamp(4.5rem,10vw,7rem)] leading-none tracking-[-0.08em] text-accent">PP</span>
                  </span>
                </div>

                <span className="identity-chip identity-chip-one absolute left-5 top-[28%] rounded-full border border-accent/20 bg-white/80 px-3 py-1.5 font-label text-[0.58rem] uppercase tracking-[0.14em] text-accent shadow-sm backdrop-blur">Design</span>
                <span className="identity-chip identity-chip-two absolute right-5 top-[58%] rounded-full border border-accent/20 bg-white/80 px-3 py-1.5 font-label text-[0.58rem] uppercase tracking-[0.14em] text-accent shadow-sm backdrop-blur">Engineer</span>

                <figcaption className="absolute inset-x-5 bottom-5 border-t border-[#cfd5ea] pt-4">
                  <p className="font-display text-2xl text-[#1d2540]">Ideas, made real.</p>
                  <p className="mt-1 text-xs text-[#637099]">Product design · Web · Mobile · Backend</p>
                </figcaption>
              </div>
            </figure>
          </Reveal>
        </section>

        <section id="work" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32">
          <Reveal>
            <SectionIntro number="01" eyebrow="Selected work" title={<>Products with real systems <span className="font-display text-accent">underneath.</span></>} description="A concise look at what each product does, what I owned, and the decisions that made it dependable." />
          </Reveal>
          <div className="mt-14"><ProjectCard project={PROJECTS[0]} featured /></div>
          <div className="mt-7 grid gap-7 lg:grid-cols-2">
            <ProjectCard project={PROJECTS[1]} />
            <ProjectCard project={PROJECTS[2]} />
          </div>
        </section>

        <section id="process" className={`border-y bg-surface ${hairline}`}>
          <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
            <Reveal>
              <SectionIntro number="02" eyebrow="How I work" title={<>A direct path from uncertainty to <span className="font-display text-accent">shipped.</span></>} description="The work stays connected from the first decision through production, so intent does not disappear between hand-offs." />
            </Reveal>
            <div className={`mt-14 grid border-t md:grid-cols-2 lg:grid-cols-4 ${hairline}`}>
              {PROCESS.map((step, index) => (
                <Reveal key={step.title} delay={index * 70}>
                <article className={`process-card h-full border-b py-8 md:px-6 lg:border-b-0 ${hairline} ${index ? `md:border-l ${hairline}` : ""} ${index === 0 ? "md:pr-6" : ""}`}>
                    <p className="font-label text-xs text-accent">{step.number}</p>
                    <h3 className="mt-8 text-2xl tracking-[-0.03em]">{step.title}</h3>
                    <p className={`mt-3 text-sm leading-relaxed ${muted}`}>{step.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
          <Reveal>
            <SectionIntro number="03" eyebrow="Capabilities" title={<>Enough range to own the <span className="font-display text-accent">whole product.</span></>} description="The stack matters because it removes gaps between product thinking, interface craft, and production engineering." />
          </Reveal>
          <div className="mt-14 grid gap-4 md:grid-cols-2">
            {CAPABILITIES.map((capability, index) => (
              <Reveal key={capability.title} delay={index * 60}>
                <article className={`capability-card h-full rounded-[1.5rem] border bg-surface p-6 sm:p-8 ${hairline}`}>
                  <h3 className="text-2xl tracking-[-0.03em]">{capability.title}</h3>
                  <p className={`mt-3 max-w-xl leading-relaxed ${muted}`}>{capability.text}</p>
                  <div className="mt-8 flex flex-wrap gap-2">
                    {capability.tools.map((tool) => <span key={tool} className="rounded-full bg-accent-soft px-3 py-1.5 text-xs text-accent">{tool}</span>)}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="about" className={`about-section relative scroll-mt-24 overflow-hidden border-y bg-[#17181c] text-white ${hairline}`}>
          <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <Reveal>
              <div>
                <p className="font-label text-xs uppercase tracking-[0.18em] text-[#91a7ff]">04 / About</p>
                <p className="mt-6 max-w-sm text-lg leading-relaxed text-white/60">I work remotely from India with people who need one thoughtful owner across product design and engineering.</p>
                <div className="mt-8 flex gap-3">
                  <a href="https://github.com/narutojoyboy" aria-label="GitHub" className="grid h-11 w-11 place-items-center rounded-full border border-white/15 hover:bg-white hover:text-[#17181c]"><Github size={17} /></a>
                  <a href="https://www.linkedin.com/in/prem-prajapat-a9974a173/" aria-label="LinkedIn" className="grid h-11 w-11 place-items-center rounded-full border border-white/15 hover:bg-white hover:text-[#17181c]"><Linkedin size={17} /></a>
                </div>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="text-4xl leading-[1.05] tracking-[-0.045em] sm:text-6xl">I care about the polished screen—and the invisible decisions that keep it working after launch.</h2>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/62">That can mean simplifying a product flow in Figma, protecting a payment transition in the database, fixing an iOS build several dependencies down, or writing the test that catches what mocks cannot. The through-line is ownership.</p>
            </Reveal>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32">
          <Reveal>
            <div className={`contact-card relative overflow-hidden rounded-[2rem] border bg-accent-soft p-8 sm:p-14 lg:p-16 ${hairline}`}>
              <div className="contact-ring absolute -right-16 -top-24 h-80 w-80 rounded-full border-[50px] border-white/50" />
              <p className="font-label text-xs uppercase tracking-[0.18em] text-accent">05 / Contact</p>
              <h2 className="relative mt-6 max-w-4xl text-[clamp(3rem,7vw,7rem)] leading-[0.92] tracking-[-0.055em]">Have a product that needs to become <span className="font-display text-accent">real?</span></h2>
              <div className="relative mt-10 flex flex-wrap items-center gap-3">
                <a href="mailto:appp7154@gmail.com" className="contact-cta inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background"><Mail size={16} /> appp7154@gmail.com</a>
                <a href="https://www.linkedin.com/in/prem-prajapat-a9974a173/" className={`inline-flex items-center gap-2 rounded-full border bg-white/60 px-5 py-3 text-sm font-medium hover:bg-white ${hairline}`}>LinkedIn <ArrowUpRight size={15} /></a>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className={`border-t ${hairline}`}>
        <div className={`mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-xs sm:flex-row sm:items-center sm:justify-between sm:px-8 ${muted}`}>
          <span>© {new Date().getFullYear()} Prem Prajapat</span>
          <span>Product design · Web · Mobile · Backend</span>
          <a href="#top" className="inline-flex items-center gap-2 text-foreground hover:text-accent">Back to top <ArrowUpRight size={13} /></a>
        </div>
      </footer>
    </>
  );
}
