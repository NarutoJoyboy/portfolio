import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import LocalTime from "./components/LocalTime";
import Magnetic from "./components/Magnetic";
import Reveal from "./components/Reveal";

const EMAIL = "appp7154@gmail.com";
const GITHUB = "https://github.com/narutojoyboy";
const LINKEDIN = "https://www.linkedin.com/in/prem-prajapat-a9974a173/";

// "make it" is one token so the emphasis never breaks across two lines.
const HEADLINE = ["I", "design", "and", "engineer", "products", "that", "make it", "to", "production."];

const wrap = "mx-auto w-full max-w-[86rem] px-5 sm:px-10";
const label = "font-label text-[0.7rem] uppercase tracking-[0.14em] text-foreground/50";
const heading = "text-[clamp(2.25rem,5vw,4.5rem)] font-medium leading-[1.02] tracking-[-0.04em]";
const primaryButton = "inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-colors duration-300 hover:bg-accent hover:text-white";
const ghostButton = "inline-flex items-center gap-2 rounded-full border border-foreground/15 px-6 py-3.5 text-sm transition-colors duration-300 hover:border-foreground/50";

type Project = {
  slug: string;
  name: string;
  kind: string;
  summary: string;
  facts: string[];
  stack: string;
  color: string;
  image?: { src: string; alt: string };
};

const projects: Project[] = [
  {
    slug: "nerdmarket",
    name: "NerdMarket",
    kind: "Field-service marketplace",
    summary: "A marketplace where location, proof of work, disputes and payouts have to agree before money moves.",
    facts: ["90 documented API routes", "97 automated tests, end-to-end on real Postgres", "Payment releases 48 hours after proof"],
    stack: "NestJS · Prisma · PostgreSQL · Next.js",
    color: "#1f2659",
  },
  {
    slug: "americar",
    name: "Americar",
    kind: "Web and mobile platform",
    summary: "Four products on one membership and payout system, with QR redemption and mileage tracking.",
    facts: ["Customer and store apps live on iOS and Android", "Vendor and admin portals on the web", "Stripe subscriptions with automated vendor payouts"],
    stack: "React Native · React · Firebase · Stripe",
    color: "#e7d7c3",
    image: { src: "/projects/americar.jpg", alt: "Americar marketing site and app screens" },
  },
  {
    slug: "onlymaple",
    name: "OnlyMaple",
    kind: "Certification directory",
    summary: "A searchable directory of Canadian-owned businesses, where a badge is earned through documented review.",
    facts: ["Five certification tiers", "Four-step application with document review", "Live at onlymaple.vercel.app"],
    stack: "Next.js · Firebase · Tailwind CSS",
    color: "#941f1a",
    image: { src: "/projects/onlymaple.png", alt: "OnlyMaple directory homepage" },
  },
];

const jobFlow = ["Job posted", "GPS check-in", "Proof submitted", "Payment released"];

const numbers = [
  ["90", "API routes documented on NerdMarket"],
  ["97", "automated tests guarding its payment paths"],
  ["4", "Americar products sharing one system"],
  ["2", "app stores Americar is live on"],
];

const services = [
  ["Product design", "Flows, wireframes and interface design in Figma, shaped around how the product actually has to work."],
  ["Web apps", "Next.js and React front ends, admin panels and public sites, built from the designs without a handover gap."],
  ["Mobile apps", "React Native with Expo, taken all the way to the App Store and Google Play."],
  ["Backend and payments", "APIs, data models and Stripe flows, with tests that run against a real database."],
];

const process = [
  ["Flow", "Work out who does what, and where money or trust changes hands.", "OnlyMaple's four-step verification"],
  ["Interface", "Design the screens, then build them as one consistent system.", "Americar's four products"],
  ["API and data", "Model the state so the rules cannot be skipped.", "NerdMarket's 90 routes and audit log"],
  ["Release", "Ship it, test it against the real thing, and stay for the fixes.", "Americar on iOS and Android"],
];

function SectionHead({ eyebrow, title, aside }: { eyebrow: string; title: React.ReactNode; aside?: string }) {
  return (
    <Reveal className="grid gap-6 lg:grid-cols-[1fr_22rem] lg:items-end">
      <div>
        <p className={label}>{eyebrow}</p>
        <h2 className={`${heading} mt-5 max-w-[18ch]`}>{title}</h2>
      </div>
      {aside ? <p className="leading-relaxed text-foreground/60">{aside}</p> : null}
    </Reveal>
  );
}

function ProjectCover({ project }: { project: Project }) {
  return (
    <Link href={`/work/${project.slug}`} className="project-media relative block overflow-hidden rounded-[1.75rem] ring-1 ring-inset ring-white/10" style={{ background: project.color }}>
      {project.image ? (
        <div className="p-[6%]">
          <Image src={project.image.src} alt={project.image.alt} width={1600} height={900} sizes="(max-width: 1024px) 100vw, 60vw" className="h-auto w-full rounded-xl shadow-[0_30px_70px_-25px_rgba(0,0,0,0.6)]" />
        </div>
      ) : (
        <div className="cover-inner flex flex-col justify-between gap-8 p-[7%] text-[#e9ecff] sm:aspect-[16/10.1]">
          <p className="font-label text-[0.7rem] uppercase tracking-[0.14em] text-white/55">How one job moves</p>
          <p className="text-[clamp(2.75rem,7.5vw,7rem)] font-medium leading-none tracking-[-0.05em]">
            Nerd<span className="font-display text-[#aab8ff]">Market</span>
          </p>
          <ol className="grid grid-cols-2 gap-x-4 gap-y-5 text-sm sm:grid-cols-4">
            {jobFlow.map((step, index) => (
              <li key={step} className="border-t border-white/25 pt-3">
                <span className="font-label text-[0.7rem] text-white/50">0{index + 1}</span>
                <span className="mt-1 block">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      )}
      <span className="view-pill absolute bottom-5 right-5 inline-flex items-center gap-1.5 rounded-full bg-[#0c0c0d]/85 px-4 py-2 text-xs text-[#ecebe6] backdrop-blur">
        View case study <ArrowUpRight size={14} />
      </span>
    </Link>
  );
}

export default function Portfolio() {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40">
        <div className={`${wrap} flex h-20 items-center justify-between`}>
          <a href="#top" className="rounded-full border border-foreground/10 bg-background/70 px-4 py-3 text-sm font-medium backdrop-blur-md">
            Prem<span className="hidden min-[26rem]:inline"> Prajapat</span><span className="hidden text-foreground/50 sm:inline"> · Designer &amp; engineer</span>
          </a>
          <nav aria-label="Primary navigation" className="flex items-center gap-1 rounded-full border border-foreground/10 bg-background/70 p-1 text-sm backdrop-blur-md">
            <a href="#work" className="rounded-full px-3 py-2 text-foreground/70 transition-colors hover:text-foreground sm:px-4">Work</a>
            <a href="#services" className="hidden rounded-full px-4 py-2 text-foreground/70 transition-colors hover:text-foreground sm:block">Services</a>
            <a href="#about" className="rounded-full px-3 py-2 text-foreground/70 transition-colors hover:text-foreground sm:px-4">About</a>
            <a href="#contact" className="whitespace-nowrap rounded-full bg-foreground px-4 py-2 font-medium text-background transition-colors duration-300 hover:bg-accent hover:text-white">Let&apos;s talk</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="relative flex min-h-svh flex-col justify-end overflow-hidden pb-10 pt-32">
          <div aria-hidden className="hero-light pointer-events-none absolute inset-0" />
          <div className={`${wrap} relative`}>
            <p className="hero-fade inline-flex items-center gap-2.5 rounded-full border border-foreground/12 px-3.5 py-1.5 text-xs text-foreground/75">
              <span className="avail-dot" /> Available for select projects
            </p>

            <h1 aria-label={HEADLINE.join(" ")} className="mt-8 max-w-[16ch] text-[clamp(3rem,8.2vw,8.25rem)] font-medium leading-[0.94] tracking-[-0.05em]">
              {HEADLINE.map((word, index) => (
                <Fragment key={word}>
                  <span aria-hidden className="hero-clip">
                    <span className={`hero-word ${word === "make it" ? "whitespace-nowrap font-display text-[1.06em]" : ""}`} style={{ animationDelay: `${index * 60}ms` }}>
                      {word}
                    </span>
                  </span>{" "}
                </Fragment>
              ))}
            </h1>

            <div className="hero-fade mt-12 grid gap-8 border-t border-foreground/12 pt-8 md:grid-cols-[1fr_auto] md:items-end">
              <p className="max-w-xl text-lg leading-relaxed text-foreground/65">
                From the first product flow to the interface, API, database and release. One person who owns the whole thing and stays accountable for how it ships.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a href={`mailto:${EMAIL}`} className={primaryButton}>Start a project <ArrowUpRight size={16} /></a>
                <a href="#work" className={ghostButton}>See the work <ArrowDown size={16} /></a>
              </div>
            </div>

            <dl className="hero-fade mt-12 grid grid-cols-2 gap-x-6 gap-y-6 text-sm md:grid-cols-4">
              <div><dt className={label}>Based</dt><dd className="mt-2">India, working worldwide</dd></div>
              <div><dt className={label}>Local time</dt><dd className="mt-2"><LocalTime /></dd></div>
              <div><dt className={label}>Works across</dt><dd className="mt-2">Design, web, mobile, backend</dd></div>
              <div><dt className={label}>Email</dt><dd className="mt-2"><a href={`mailto:${EMAIL}`} className="link-line">{EMAIL}</a></dd></div>
            </dl>
          </div>
        </section>

        <section id="work" className={`${wrap} scroll-mt-24 pt-28 sm:pt-40`}>
          <SectionHead eyebrow="Selected work" title={<>Three products, designed and built <span className="font-display">end to end.</span></>} aside="Each one needed its own rules, its own interface and its own system underneath. I did all three layers." />

          <div className="mt-16 space-y-24 sm:mt-24 sm:space-y-36">
            {projects.map((project, index) => (
              <Reveal key={project.slug}>
                <article className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-12">
                  <div className={`lg:col-span-8 ${index % 2 ? "lg:order-2" : ""}`}>
                    <ProjectCover project={project} />
                  </div>
                  <div className="lg:col-span-4">
                    <p className={label}>0{index + 1} · {project.kind}</p>
                    <h3 className="mt-4 text-[clamp(2.25rem,3.6vw,3.25rem)] font-medium leading-none tracking-[-0.04em]">{project.name}</h3>
                    <p className="mt-5 text-lg leading-relaxed text-foreground/65">{project.summary}</p>
                    <ul className="mt-7 border-t border-foreground/12 text-sm">
                      {project.facts.map((fact) => (
                        <li key={fact} className="border-b border-foreground/12 py-3 text-foreground/85">{fact}</li>
                      ))}
                    </ul>
                    <p className="mt-6 font-label text-xs text-foreground/50">{project.stack}</p>
                    <Link href={`/work/${project.slug}`} className="link-line mt-7 inline-flex items-center gap-2 pb-1 text-sm font-medium">
                      Read the case study <ArrowUpRight size={16} />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className={`${wrap} pt-28 sm:pt-40`}>
          <dl className="grid grid-cols-2 border-t border-foreground/12 lg:grid-cols-4">
            {numbers.map(([value, caption], index) => (
              <Reveal key={caption} delay={index * 80} className="border-b border-foreground/12 py-8 pr-6 lg:border-b-0">
                <dd className="text-[clamp(3.5rem,7vw,6.5rem)] font-medium leading-none tracking-[-0.05em]">{value}</dd>
                <dt className="mt-4 max-w-[15rem] text-sm leading-relaxed text-foreground/60">{caption}</dt>
              </Reveal>
            ))}
          </dl>
        </section>

        <section id="services" className={`${wrap} scroll-mt-24 pt-28 sm:pt-40`}>
          <SectionHead eyebrow="Services" title={<>What I can take <span className="font-display">off your plate.</span></>} aside="Hire me for one part, or for the whole thing. The work is strongest when design and engineering stay with the same person." />
          <div className="mt-14 grid gap-px overflow-hidden rounded-[1.75rem] border border-foreground/12 bg-foreground/12 sm:grid-cols-2 lg:grid-cols-4">
            {services.map(([title, text], index) => (
              <Reveal key={title} delay={index * 80} className="flex min-h-[11rem] flex-col justify-between gap-8 bg-background p-7 transition-colors duration-500 hover:bg-surface sm:min-h-[17rem]">
                <p className="font-label text-xs text-foreground/50">0{index + 1}</p>
                <div>
                  <h3 className="text-2xl font-medium tracking-[-0.03em]">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/60">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-24">
            <p className={label}>How a project runs</p>
            <ol className="mt-6 border-t border-foreground/12">
              {process.map(([step, text, example], index) => (
                <li key={step} className="row-hover grid gap-x-8 gap-y-2 border-b border-foreground/12 py-6 md:grid-cols-[3rem_14rem_1fr_auto] md:items-baseline">
                  <span className="font-label text-xs text-foreground/50">0{index + 1}</span>
                  <span className="text-2xl font-medium tracking-[-0.03em]">{step}</span>
                  <span className="text-foreground/65">{text}</span>
                  <span className="font-label text-xs text-foreground/50 md:text-right">{example}</span>
                </li>
              ))}
            </ol>
          </Reveal>
        </section>

        <section id="about" className={`${wrap} scroll-mt-24 pt-28 sm:pt-40`}>
          <div className="grid gap-12 lg:grid-cols-[1.35fr_1fr] lg:gap-24">
            <Reveal>
              <p className={label}>About</p>
              <p className="mt-6 text-[clamp(1.9rem,3.6vw,3.4rem)] font-medium leading-[1.08] tracking-[-0.035em]">
                I work remotely from India with people who need <span className="font-display">one owner</span> across product design and engineering.
              </p>
            </Reveal>
            <Reveal delay={100} className="lg:pt-12">
              <p className="text-lg leading-relaxed text-foreground/65">
                That can mean simplifying a product flow in Figma, protecting a payment transition in the database, fixing an iOS build several dependencies down, or writing the test that catches what mocks cannot.
              </p>
              <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-foreground/12 pt-6 text-sm">
                <div><dt className={label}>Based</dt><dd className="mt-2">India, remote</dd></div>
                <div>
                  <dt className={label}>Elsewhere</dt>
                  <dd className="mt-2 flex gap-5"><a href={GITHUB} className="link-line">GitHub</a><a href={LINKEDIN} className="link-line">LinkedIn</a></dd>
                </div>
              </dl>
            </Reveal>
          </div>
        </section>

        <section id="contact" className={`${wrap} scroll-mt-24 pb-10 pt-28 sm:pt-40`}>
          <Reveal className="relative overflow-hidden rounded-[2rem] border border-foreground/12 bg-surface px-6 py-16 sm:px-14 sm:py-24">
            <div aria-hidden className="hero-light pointer-events-none absolute inset-0" />
            <div className="relative">
              <p className={label}>Contact</p>
              <h2 className="mt-6 max-w-[12ch] text-[clamp(3rem,9vw,9rem)] font-medium leading-[0.92] tracking-[-0.05em]">
                Have a product to ship? <span className="font-display">Let&apos;s talk.</span>
              </h2>
              <div className="mt-12 flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-md text-lg leading-relaxed text-foreground/65">
                  Tell me what you are building and where it is stuck. I read every email myself.
                </p>
                <Magnetic>
                  <a href={`mailto:${EMAIL}`} className="grid size-40 place-items-center rounded-full bg-accent text-center text-sm font-medium text-white transition-colors duration-300 hover:bg-foreground hover:text-background sm:size-44">
                    <span>Get in touch<ArrowUpRight size={16} className="mx-auto mt-1" /></span>
                  </a>
                </Magnetic>
              </div>
              <div className="mt-14 flex flex-wrap gap-3 border-t border-foreground/12 pt-8">
                <a href={`mailto:${EMAIL}`} className={ghostButton}>{EMAIL}</a>
                <a href={GITHUB} className={ghostButton}>GitHub <ArrowUpRight size={14} /></a>
                <a href={LINKEDIN} className={ghostButton}>LinkedIn <ArrowUpRight size={14} /></a>
              </div>
            </div>
          </Reveal>

          <footer className="mt-8 flex flex-wrap items-center justify-between gap-4 text-xs text-foreground/50">
            <span>© {new Date().getFullYear()} Prem Prajapat</span>
            <span className="font-label">India · <LocalTime /></span>
            <a href="#top" className="link-line">Back to top</a>
          </footer>
        </section>
      </main>
    </>
  );
}
