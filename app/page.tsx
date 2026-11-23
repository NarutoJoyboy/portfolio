import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Check } from "lucide-react";
import LocalTime from "./components/LocalTime";
import Magnetic from "./components/Magnetic";
import Reveal from "./components/Reveal";

const EMAIL = "appp7154@gmail.com";
const GITHUB = "https://github.com/narutojoyboy";
const LINKEDIN = "https://www.linkedin.com/in/prem-prajapat-a9974a173/";

// "make it" is one token so the emphasis never breaks across two lines.
const HEADLINE = ["I", "design", "and", "engineer", "products", "that", "make it", "to", "production."];

const wrap = "mx-auto w-full max-w-[90rem] px-[clamp(20px,4vw,56px)]";
const label = "font-label text-[11px] uppercase tracking-[0.14em] text-subtle";
const heading = "text-[clamp(2.5rem,5.4vw,5rem)] font-medium leading-none tracking-[-0.045em]";
const pill = "rounded-full border border-white/8 bg-background/70 backdrop-blur-md";

const jobFlow = ["Job posted", "GPS check-in", "Proof submitted", "Payment released"];

// The same job as the API and the database see it. Illustrative, mirrors jobFlow.
const apiRows = [["POST /jobs", "201"], ["POST /jobs/:id/check-in", "200"], ["POST /jobs/:id/proof", "201"], ["POST /jobs/:id/release", "200"]];
const dbRows = [["posted", "✓"], ["checked_in", "500 m"], ["awaiting_approval", "locked"], ["released", "+48 h"]];

const marquee: [string, boolean][] = [
  ["Product design", false], ["Figma", true], ["Web apps", false], ["Next.js", true],
  ["Mobile apps", false], ["React Native", true], ["Backend and payments", false], ["NestJS, PostgreSQL, Stripe", true],
];

const projects = [
  {
    slug: "americar",
    name: "Americar",
    kind: "Web and mobile platform",
    summary: "Four products on one membership and payout system, with QR redemption and mileage tracking.",
    facts: ["Customer and store apps on iOS and Android", "Vendor and admin portals", "Stripe subscriptions and payouts"],
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

const numbers: [number, string][] = [
  [90, "API routes documented on NerdMarket"],
  [97, "automated tests guarding its payment paths"],
  [4, "Americar products sharing one system"],
  [2, "app stores Americar is live on"],
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

const tools = ["Figma", "Next.js", "React", "React Native and Expo", "NestJS", "Prisma", "PostgreSQL", "Firebase", "Stripe", "Tailwind CSS"];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-2.5 font-label text-xs uppercase tracking-[0.14em] text-subtle">
      <span className="size-1.5 bg-accent" />
      {children}
    </p>
  );
}

function SectionHead({ eyebrow, title, aside }: { eyebrow: string; title: React.ReactNode; aside: string }) {
  return (
    <Reveal className="flex flex-wrap items-end justify-between gap-8">
      <div className="min-w-0 flex-[1_1_560px]">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className={`${heading} mt-5 max-w-[16ch]`}>{title}</h2>
      </div>
      <p className="flex-[0_1_360px] text-[17px] leading-relaxed text-muted">{aside}</p>
    </Reveal>
  );
}

function StackLayer({ z, delay, className, title, tag, rows, status }: { z: number; delay: number; className: string; title: string; tag: string; rows: string[][]; status?: boolean }) {
  return (
    <div className={`layer font-label text-[11.5px] ${className}`} style={{ "--z": `${z}px`, animationDelay: `${delay}ms` } as React.CSSProperties}>
      <div className="mb-3 flex justify-between text-[10px] uppercase tracking-[0.14em] text-subtle">
        <span>{title}</span>
        <span>{tag}</span>
      </div>
      <div className="relative">
        <div className="scan" />
        {rows.map(([left, right], index) => (
          <div key={left} className={`relative flex h-[34px] items-center justify-between px-2.5 ${!status && index === 3 ? "text-foreground" : ""}`}>
            <span>{left}</span>
            <span className={status ? "text-[#3ddc84]" : ""}>{right}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/** One NerdMarket job moving through the interface, API and database at once. Pure CSS. */
function ProductStack() {
  return (
    <div
      role="img"
      aria-label="Illustration: one marketplace job moving through the interface, the API and the database"
      className="scene hero-fade relative flex h-[540px] min-w-0 flex-[1_1_440px] items-center justify-center"
      style={{ animationDelay: "300ms" }}
    >
      <div className="tilt">
        <div className="spin">
          <StackLayer z={0} delay={700} className="border-[#26262b] bg-[#111114] text-muted" title="03 Database" tag="jobs" rows={dbRows} />
          <StackLayer z={105} delay={850} className="layer-api border-accent/40 bg-[#15151b] text-[#c9c8c2]" title="02 API" tag="REST" rows={apiRows} status />
          <div className="layer layer-ui border-transparent bg-foreground text-background" style={{ "--z": "210px", animationDelay: "1000ms" } as React.CSSProperties}>
            <div className="mb-3 flex items-center justify-between">
              <span className="font-label text-[10px] uppercase tracking-[0.14em] text-[#5c5b57]">01 Interface</span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-background px-2.5 py-0.5 text-[10.5px] font-medium text-foreground">
                <span className="size-1.5 rounded-full bg-[#3ddc84]" /> Live job
              </span>
            </div>
            {jobFlow.map((step, index) => (
              <div key={step} className="flex h-[34px] items-center gap-3 text-[13px] font-medium">
                <span className="relative size-3 rounded-full border-2 border-[#c4c3bd]">
                  <span className={`dot-lit l${index}`} />
                </span>
                {step}
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="absolute inset-x-0 bottom-1 text-center font-label text-xs text-subtle">One job, every layer. Hover to pull it apart.</p>
    </div>
  );
}

function NerdMarketCard() {
  return (
    <Reveal className="mt-20">
      <article className="flex flex-wrap gap-12 overflow-hidden rounded-[2rem] border border-white/8 bg-[radial-gradient(90%_70%_at_100%_0%,#2a3380_0%,transparent_60%),#151a42] p-[clamp(24px,4vw,56px)] text-[#eef0ff]">
        <div className="flex min-w-0 flex-[1_1_420px] flex-col">
          <p className="font-label text-xs uppercase tracking-[0.14em] text-[#a7aee0]">01 · Field-service marketplace</p>
          <h3 className="mt-5 text-[clamp(3.5rem,7.4vw,7rem)] font-medium leading-[0.9] tracking-[-0.055em]">
            Nerd<span className="font-display text-[#b7c2ff]">Market</span>
          </h3>
          <p className="mt-6 max-w-[30ch] text-xl leading-normal text-[#c3c7e8]">
            A marketplace where location, proof of work, disputes and payouts have to agree before money moves.
          </p>
          <ul className="mt-8 border-t border-white/12 text-[15px]">
            {["90 documented API routes", "97 automated tests, end-to-end on real Postgres", "Payment releases 48 hours after proof"].map((fact) => (
              <li key={fact} className="flex items-center gap-3 border-b border-white/12 py-3.5">
                <Check size={16} strokeWidth={2.2} className="shrink-0 text-accent" /> {fact}
              </li>
            ))}
          </ul>
          <div className="mt-auto flex flex-wrap items-center justify-between gap-5 pt-8">
            <p className="font-label text-xs text-[#a7aee0]">NestJS · Prisma · PostgreSQL · Next.js</p>
            <Link href="/work/nerdmarket" className="btn">
              Read the case study <ArrowUpRight size={16} className="arw" />
            </Link>
          </div>
        </div>

        <div className="flex min-w-0 flex-[1.25_1_480px] flex-col gap-5">
          <div className="flex flex-col gap-9 rounded-[22px] border border-[#2c3470] bg-[#0d1031] p-7">
            <div className="flex flex-wrap justify-between gap-2 font-label text-[11px] text-[#a7aee0]">
              <span className="uppercase tracking-[0.14em]">How one job moves</span>
              <span>500 m GPS check-in · 48 h auto-release</span>
            </div>
            <div className="relative">
              <div aria-hidden className="absolute left-[11px] right-[calc(25%-11px)] top-2.5 h-0.5 overflow-hidden rounded-full bg-[#2c3470]">
                <div className="flow-fill" />
              </div>
              <ol className="relative grid grid-cols-4 gap-2">
                {jobFlow.map((step, index) => (
                  <li key={step} className="flex flex-col gap-4">
                    <span className="relative size-[22px] rounded-full border-2 border-[#3a438a] bg-[#0d1031]">
                      <span className={`dot-lit l${index}`} />
                    </span>
                    <span>
                      <span className="block font-label text-[11px] text-[#a7aee0]">0{index + 1}</span>
                      <span className="mt-1 block text-[15px] font-medium">{step}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="toast flex items-center gap-3.5 self-start rounded-2xl bg-foreground py-3.5 pl-3.5 pr-[18px] text-background shadow-[0_24px_50px_-20px_#000000b3]">
              <span className="grid size-9 shrink-0 place-items-center rounded-full bg-accent">
                <Check size={18} strokeWidth={2.4} />
              </span>
              <span>
                <span className="block text-[15px] font-semibold">Payment released</span>
                <span className="block text-[13px] text-[#55544f]">48 hours after proof, even if the vendor goes quiet</span>
              </span>
            </div>
          </div>
          <dl className="grid grid-cols-3 gap-3">
            {[["90", "API routes"], ["97", "automated tests"], ["3", "roles, one job"]].map(([value, caption]) => (
              <div key={caption} className="flex flex-col-reverse rounded-[18px] border border-[#2c3470] p-[18px]">
                <dt className="mt-2 text-[13px] text-[#a7aee0]">{caption}</dt>
                <dd className="text-[34px] font-medium leading-none tracking-[-0.04em]">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </article>
    </Reveal>
  );
}

export default function Portfolio() {
  return (
    <>
      <header className="nav-in fixed inset-x-0 top-0 z-40">
        <div className={`${wrap} flex items-center justify-between gap-3 py-5`}>
          <a href="#top" className={`${pill} inline-flex items-center gap-3 py-2 pl-2 pr-[18px] text-[15px] font-medium`}>
            <span className="grid size-[34px] place-items-center rounded-full bg-foreground font-semibold tracking-[-0.04em] text-background">P</span>
            <span>Prem<span className="hidden min-[26rem]:inline"> Prajapat</span></span>
          </a>
          <nav aria-label="Primary navigation" className={`${pill} flex items-center gap-0.5 p-[5px] text-sm`}>
            <a href="#work" className="nav-link rounded-full px-4 py-2.5">Work</a>
            <a href="#services" className="nav-link hidden rounded-full px-4 py-2.5 sm:block">Services</a>
            <a href="#about" className="nav-link hidden rounded-full px-4 py-2.5 sm:block">About</a>
            <a href="#contact" className="btn min-h-10 whitespace-nowrap px-[18px] text-sm">Let&apos;s talk</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="relative pb-14 pt-[140px]">
          <div aria-hidden className="hero-grid pointer-events-none absolute inset-0" />
          <div aria-hidden className="hero-glow pointer-events-none absolute inset-0" />

          <div className={`${wrap} relative`}>
            <div className="flex flex-wrap items-center gap-10">
              <div className="min-w-0 flex-[999_1_620px]">
                <p className="hero-fade inline-flex items-center gap-2.5 rounded-full border border-white/12 bg-white/[0.03] px-3.5 py-2 text-[13px] text-[#c9c8c2]" style={{ animationDelay: "80ms" }}>
                  <span className="avail-dot" /> Available for select projects
                </p>
                <h1 aria-label={HEADLINE.join(" ")} className="mt-8 max-w-[15ch] text-[clamp(2.9rem,6.3vw,6.9rem)] font-medium leading-[0.95] tracking-[-0.05em]">
                  {HEADLINE.map((word, index) => (
                    <Fragment key={word}>
                      <span aria-hidden className="hero-clip">
                        <span className={`hero-word ${word === "make it" ? "whitespace-nowrap font-display text-[1.08em] text-accent" : ""}`} style={{ animationDelay: `${140 + index * 60}ms` }}>
                          {word}
                        </span>
                      </span>{" "}
                    </Fragment>
                  ))}
                </h1>
              </div>
              <ProductStack />
            </div>

            <div className="hero-fade mt-12 flex flex-wrap items-end justify-between gap-8 border-t border-white/10 pt-8" style={{ animationDelay: "900ms" }}>
              <p className="flex-[0_1_580px] text-[19px] leading-relaxed text-muted">
                From the first product flow to the interface, API, database and release. One person who owns the whole thing and stays accountable for how it ships.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href={`mailto:${EMAIL}`} className="btn">Start a project <ArrowUpRight size={16} className="arw" /></a>
                <a href="#work" className="btn-ghost">See the work <ArrowDown size={16} className="arw arw-down" /></a>
              </div>
            </div>

            <dl className="hero-fade mt-10 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 text-[15px]" style={{ animationDelay: "1050ms" }}>
              <div><dt className={label}>Based</dt><dd className="mt-2">India, working worldwide</dd></div>
              <div><dt className={label}>Local time</dt><dd className="mt-2"><LocalTime /></dd></div>
              <div><dt className={label}>Works across</dt><dd className="mt-2">Design, web, mobile, backend</dd></div>
              <div><dt className={label}>Email</dt><dd className="mt-2"><a href={`mailto:${EMAIL}`} className="link-line">{EMAIL}</a></dd></div>
            </dl>
          </div>
        </section>

        <div aria-hidden className="marquee overflow-hidden border-y border-white/7 py-[30px]">
          <div className="marquee-track whitespace-nowrap text-[clamp(2rem,4vw,3.5rem)] leading-none tracking-[-0.04em]">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex items-center gap-10 pr-10">
                {marquee.map(([text, serif]) => (
                  <Fragment key={text}>
                    <span className={serif ? "font-display text-muted" : "font-medium"}>{text}</span>
                    <span className="text-[0.5em] text-accent">✦</span>
                  </Fragment>
                ))}
              </div>
            ))}
          </div>
        </div>

        <section id="work" className={`${wrap} scroll-mt-24 pt-40`}>
          <SectionHead
            eyebrow="Selected work · 03"
            title={<>Three products, designed and built <span className="font-display">end to end.</span></>}
            aside="Each one needed its own rules, its own interface and its own system underneath. I did all three layers."
          />

          <NerdMarketCard />

          <div className="mt-6 flex flex-wrap gap-6">
            {projects.map((project, index) => (
              <Reveal key={project.slug} delay={index * 120} className="min-w-0 flex-[1_1_520px]">
                <article>
                  <Link href={`/work/${project.slug}`} className="cover relative block overflow-hidden rounded-[28px] p-[7%]" style={{ background: project.color }}>
                    <Image src={project.image.src} alt={project.image.alt} width={1600} height={900} sizes="(max-width: 1100px) 100vw, 45vw" className="h-auto w-full rounded-[14px] shadow-[0_30px_60px_-24px_#00000099]" />
                    <span className="view-pill absolute bottom-5 right-5 inline-flex items-center gap-2 rounded-full bg-background/90 px-4 py-2.5 text-[13px] text-foreground">
                      View case study <ArrowUpRight size={14} />
                    </span>
                  </Link>
                  <div className="flex flex-col gap-[18px] px-1 pt-8">
                    <div className="flex flex-wrap items-baseline justify-between gap-3">
                      <h3 className="text-[clamp(2.4rem,3.6vw,3.5rem)] font-medium leading-none tracking-[-0.045em]">
                        <Link href={`/work/${project.slug}`}>{project.name}</Link>
                      </h3>
                      <p className="font-label text-xs uppercase tracking-[0.14em] text-subtle">0{index + 2} · {project.kind}</p>
                    </div>
                    <p className="max-w-[46ch] text-lg leading-relaxed text-muted">{project.summary}</p>
                    <ul className="flex flex-wrap gap-2">
                      {project.facts.map((fact) => <li key={fact} className="chip">{fact}</li>)}
                    </ul>
                    <p className="font-label text-xs text-subtle">{project.stack}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className={`${wrap} pt-40`}>
          <Reveal>
            <dl className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] border-t border-white/10">
              {numbers.map(([value, caption]) => (
                <div key={caption} className="flex flex-col-reverse pr-6 pt-9">
                  <dt className="mt-[18px] max-w-64 text-[15px] leading-relaxed text-muted">{caption}</dt>
                  <dd className="text-[clamp(4rem,8vw,7.5rem)] font-medium leading-[0.9] tracking-[-0.06em]">
                    <span className="sr-only">{value}</span>
                    <span aria-hidden className="count" style={{ "--to": value } as React.CSSProperties} />
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </section>

        <section id="services" className={`${wrap} scroll-mt-24 pt-40`}>
          <SectionHead
            eyebrow="Services"
            title={<>What I can take <span className="font-display">off your plate.</span></>}
            aside="Hire me for one part, or for the whole thing. The work is strongest when design and engineering stay with the same person."
          />
          <Reveal className="mt-16">
            <ul className="border-t border-white/10">
              {services.map(([title, text], index) => (
                <li key={title} className="svc flex flex-wrap items-center gap-x-8 gap-y-4 border-b border-white/10 px-6 py-9">
                  <span className="svc-soft basis-12 font-label text-[13px]">0{index + 1}</span>
                  <span className="svc-title flex-[1_1_300px] text-[clamp(2rem,3.6vw,3.25rem)] font-medium leading-none tracking-[-0.04em]">{title}</span>
                  <span className="svc-soft flex-[1_1_340px] leading-relaxed">{text}</span>
                  <span aria-hidden className="svc-arrow grid size-14 shrink-0 place-items-center rounded-full">
                    <ArrowUpRight size={20} />
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </section>

        <section className={`${wrap} pt-36`}>
          <Reveal>
            <Eyebrow>How a project runs</Eyebrow>
            <div className="relative mt-10">
              <div aria-hidden className="absolute inset-x-0 top-1.5 h-px bg-white/10">
                <div className="line-fill h-px bg-accent" />
              </div>
              <ol className="relative grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-x-8 gap-y-10">
                {process.map(([step, text, example], index) => (
                  <li key={step} className="flex flex-col gap-3.5">
                    <span className="size-[13px] rounded-full border-2 border-accent bg-background" />
                    <span className="mt-3.5 font-label text-xs text-subtle">0{index + 1}</span>
                    <span className="text-3xl font-medium leading-none tracking-[-0.035em]">{step}</span>
                    <span className="leading-relaxed text-muted">{text}</span>
                    <span className="font-label text-xs text-subtle">e.g. {example}</span>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </section>

        <section id="about" className={`${wrap} scroll-mt-24 pt-40`}>
          <div className="flex flex-wrap gap-x-24 gap-y-12">
            <Reveal className="min-w-0 flex-[1.35_1_520px]">
              <Eyebrow>About</Eyebrow>
              <p className="mt-7 text-[clamp(2rem,3.7vw,3.5rem)] font-medium leading-[1.08] tracking-[-0.035em]">
                I work remotely from India with people who need <span className="font-display text-accent">one owner</span> across product design and engineering.
              </p>
            </Reveal>
            <Reveal delay={120} className="flex min-w-0 flex-[1_1_380px] flex-col gap-10 lg:pt-12">
              <p className="text-lg leading-relaxed text-muted">
                That can mean simplifying a product flow in Figma, protecting a payment transition in the database, fixing an iOS build several dependencies down, or writing the test that catches what mocks cannot.
              </p>
              <div>
                <p className={label}>Ships with</p>
                <ul className="mt-3.5 flex flex-wrap gap-2">
                  {tools.map((tool) => <li key={tool} className="chip">{tool}</li>)}
                </ul>
              </div>
              <dl className="grid grid-cols-2 gap-6 border-t border-white/10 pt-6 text-[15px]">
                <div><dt className={label}>Based</dt><dd className="mt-2">India, remote</dd></div>
                <div>
                  <dt className={label}>Elsewhere</dt>
                  <dd className="mt-2 flex gap-5"><a href={GITHUB} className="link-line">GitHub</a><a href={LINKEDIN} className="link-line">LinkedIn</a></dd>
                </div>
              </dl>
            </Reveal>
          </div>
        </section>

        <section id="contact" className={`${wrap} scroll-mt-24 pt-40`}>
          <Reveal className="relative isolate overflow-hidden rounded-[36px] border border-white/9 bg-[#111113] px-[clamp(24px,5vw,80px)] py-[clamp(40px,7vw,112px)]">
            <div aria-hidden className="blob blob-a -left-40 -top-64 size-[620px] bg-accent/45" />
            <div aria-hidden className="blob blob-b -bottom-72 -right-36 size-[520px] bg-accent/30" />

            <Eyebrow>Contact</Eyebrow>
            <h2 className="mt-7 max-w-[11ch] text-[clamp(3.25rem,9vw,9.25rem)] font-medium leading-[0.9] tracking-[-0.055em]">
              Have a product to ship? <span className="font-display text-accent">Let&apos;s talk.</span>
            </h2>

            <div className="mt-14 flex flex-wrap items-center justify-between gap-10">
              <div className="flex flex-[0_1_520px] flex-col gap-7">
                <p className="text-[19px] leading-relaxed text-[#b4b3ad]">Tell me what you are building and where it is stuck. I read every email myself.</p>
                <a href={`mailto:${EMAIL}`} className="link-line self-start text-[clamp(1.5rem,2.6vw,2.25rem)] font-medium tracking-[-0.03em]">{EMAIL}</a>
              </div>
              <Magnetic>
                <a href={`mailto:${EMAIL}`} className="orb relative grid size-[188px] place-items-center rounded-full bg-accent text-center font-semibold text-background">
                  <span aria-hidden className="orb-ring" />
                  <span className="flex flex-col items-center gap-1.5">Get in touch <ArrowUpRight size={20} className="arw" /></span>
                </a>
              </Magnetic>
            </div>

            <div className="mt-14 flex flex-wrap gap-3 border-t border-white/10 pt-8">
              <a href={GITHUB} className="btn-ghost">GitHub <ArrowUpRight size={14} className="arw" /></a>
              <a href={LINKEDIN} className="btn-ghost">LinkedIn <ArrowUpRight size={14} className="arw" /></a>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className={`${wrap} overflow-hidden pb-8 pt-24`}>
        <Reveal>
          <p aria-hidden className="whitespace-nowrap text-[clamp(3rem,13.4vw,12.25rem)] font-semibold leading-[0.8] tracking-[-0.065em] [word-spacing:0.2em] text-[#1b1b1e]">
            Prem Prajapat
          </p>
        </Reveal>
        <div className="mt-10 flex flex-wrap justify-between gap-4 text-[13px] text-subtle">
          <span>© {new Date().getFullYear()} Prem Prajapat</span>
          <span className="font-label">India · <LocalTime /></span>
          <a href="#top" className="link-line">Back to top</a>
        </div>
      </footer>
    </>
  );
}
