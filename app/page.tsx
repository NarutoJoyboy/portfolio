import Image from "next/image";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowUpRight,
  Github,
  Linkedin,
} from "lucide-react";
import Reveal from "./components/Reveal";

const muted = "text-[color-mix(in_srgb,var(--foreground)_62%,transparent)]";
const hairline = "border-[color-mix(in_srgb,var(--foreground)_14%,transparent)]";

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

function TechPills({ items, dark = false }: { items: string[]; dark?: boolean }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span key={item} className={`rounded-full border px-3 py-1.5 font-label text-[0.63rem] uppercase tracking-[0.1em] ${dark ? "border-white/15 text-white/60" : "border-black/15 text-black/60"}`}>
          {item}
        </span>
      ))}
    </div>
  );
}

function ProjectWorlds() {
  const lifecycle = ["Job posted", "GPS check-in", "Proof locked", "Payment released"];

  return (
    <div className="project-worlds mt-16 sm:mt-20">
      <section className="project-world project-world-nerd relative overflow-hidden bg-[#dfe5f2] text-[#171b25]">
        <div className="project-world-grid absolute inset-0" />
        <div className="relative mx-auto grid min-h-[46rem] max-w-7xl gap-14 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
          <Reveal>
            <div className="relative z-10">
              <p className="font-label text-[0.68rem] uppercase tracking-[0.18em] text-[#5369bd]">01 / Field-service marketplace</p>
              <h3 className="mt-7 text-[clamp(4rem,8vw,7.6rem)] leading-[0.84] tracking-[-0.065em]">Nerd<span className="font-display text-[#5369bd]">Market</span></h3>
              <p className="mt-8 max-w-lg text-lg leading-relaxed text-black/58">A trust-first marketplace where location, proof of work, disputes, and payouts have to agree before money moves.</p>
              <div className="mt-9 grid grid-cols-3 border-y border-black/12 py-6">
                {[["90", "API routes"], ["97", "automated tests"], ["48h", "safeguard"]].map(([value, label]) => (
                  <div key={label}>
                    <p className="text-2xl tracking-[-0.04em] sm:text-3xl">{value}</p>
                    <p className="mt-1 font-label text-[0.56rem] uppercase tracking-[0.12em] text-black/38">{label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-7"><TechPills items={["NestJS", "Prisma", "PostgreSQL", "Next.js"]} /></div>
              <Link href="/work/nerdmarket" className="project-world-link mt-10 inline-flex items-center gap-2 text-sm font-medium">Open case study <ArrowUpRight size={16} /></Link>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="trust-map relative overflow-hidden rounded-xl border border-black/12 bg-[#f6f5f0]/80 p-5 shadow-[0_28px_80px_rgba(43,53,86,.12)] backdrop-blur-sm sm:p-8">
              <div className="flex items-center justify-between border-b border-black/10 pb-5 font-label text-[0.6rem] uppercase tracking-[0.15em] text-black/42">
                <span>Protected job lifecycle</span>
                <span>One job / four states</span>
              </div>
              <div className="relative mt-3">
                <div className="trust-line absolute bottom-9 left-[1.1rem] top-9 w-px bg-[#5369bd]/25" />
                {lifecycle.map((step, index) => {
                  const details = ["Scope and terms recorded", "Arrival tied to location", "Evidence preserved", "Released after safeguard"];
                  return (
                    <div key={step} className="trust-step relative grid grid-cols-[2.25rem_1fr_auto] items-center gap-4 border-b border-black/10 py-6 last:border-b-0">
                      <span className="relative z-10 grid h-9 w-9 place-items-center rounded-full border border-[#5369bd]/30 bg-[#f6f5f0] font-label text-[0.58rem] text-[#5369bd]">0{index + 1}</span>
                      <div>
                        <p className="text-xl tracking-[-0.025em]">{step}</p>
                        <p className="mt-1 text-sm text-black/42">{details[index]}</p>
                      </div>
                      <span className="hidden font-label text-[0.55rem] uppercase tracking-[0.12em] text-[#5369bd] sm:block">Protected</span>
                    </div>
                  );
                })}
              </div>
              <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 border-t border-black/10 pt-5 font-label text-[0.56rem] uppercase tracking-[0.12em] text-black/40">
                <span>Identity verified</span><span>Audit logged</span><span>Disputes handled</span>
              </div>
            </div>
          </Reveal>
        </div>
        <span className="project-ghost-number absolute -bottom-16 -left-4 font-display text-[18rem] leading-none text-[#5369bd]/[0.05]">01</span>
      </section>

      <section className="project-world project-world-americar relative overflow-hidden bg-[#e7d7c3] text-[#261f19]">
        <div className="absolute inset-y-0 left-[7%] hidden w-px bg-black/10 lg:block" />
        <div className="relative mx-auto grid min-h-[46rem] max-w-7xl gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
          <Reveal className="lg:order-2">
            <div>
              <p className="font-label text-[0.68rem] uppercase tracking-[0.18em] text-[#9d4c2e]">02 / Web + mobile platform</p>
              <h3 className="mt-7 text-[clamp(4rem,8vw,7.5rem)] leading-[0.84] tracking-[-0.065em]">Ameri<span className="font-display text-[#9d4c2e]">car</span></h3>
              <p className="mt-8 max-w-md text-lg leading-relaxed text-black/58">Four coordinated products for memberships, QR redemption, mileage tracking, and automated vendor payouts.</p>
              <div className="mt-8 space-y-3 border-y border-black/12 py-6 text-sm">
                {['Customer + store apps', 'Vendor + admin portals', 'Stripe payout flow'].map((item, index) => <p key={item} className="flex items-center gap-4"><span className="font-label text-[0.6rem] text-[#9d4c2e]">0{index + 1}</span>{item}</p>)}
              </div>
              <div className="mt-7"><TechPills items={["React Native", "React", "Firebase", "Stripe"]} /></div>
              <Link href="/work/americar" className="project-world-link mt-10 inline-flex items-center gap-2 text-sm font-medium">Open case study <ArrowUpRight size={16} /></Link>
            </div>
          </Reveal>
          <Reveal delay={100} className="lg:order-1">
            <div className="americar-stage relative pb-16 pt-8 sm:pb-24 sm:pt-10">
              <div className="relative aspect-[16/9] -rotate-2 overflow-hidden rounded-[1.75rem] border-[10px] border-[#2a241f] bg-[#2a241f] shadow-[0_45px_90px_rgba(71,42,22,.25)]">
                <Image src="/projects/americar.jpg" alt="Americar product screens" fill sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover object-top" />
              </div>
              <div className="membership-card absolute bottom-0 right-[3%] w-[58%] rotate-3 rounded-2xl border border-white/25 bg-[#a34c2c] p-4 text-[#fff6ed] shadow-[0_25px_60px_rgba(71,42,22,.25)] sm:p-7">
                <p className="font-label text-[0.55rem] uppercase tracking-[0.18em] text-white/55">Americar membership</p>
                <p className="mt-5 text-xl tracking-[-0.04em] sm:mt-8 sm:text-2xl">Care that travels.</p>
                <div className="mt-4 flex items-end justify-between border-t border-white/20 pt-3 font-label text-[0.48rem] uppercase tracking-[0.1em] text-white/60 sm:mt-6 sm:pt-4 sm:text-[0.55rem] sm:tracking-[0.12em]"><span>QR verified</span><span>•• 2048</span></div>
              </div>
              <span className="absolute left-2 top-0 font-label text-[0.58rem] uppercase tracking-[0.16em] text-black/38">Four products / one system</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="project-world project-world-maple relative overflow-hidden bg-[#941f1a] text-[#fff5e9]">
        <div className="maple-rays absolute inset-0" />
        <div className="relative mx-auto grid min-h-[46rem] max-w-7xl gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
          <Reveal>
            <div>
              <p className="font-label text-[0.68rem] uppercase tracking-[0.18em] text-[#ffbbb2]">03 / Certification directory</p>
              <h3 className="mt-7 text-[clamp(4rem,8vw,7.5rem)] leading-[0.84] tracking-[-0.065em]">Only<br /><span className="font-display text-[#ffbbb2]">Maple</span></h3>
              <p className="mt-8 max-w-md text-lg leading-relaxed text-white/66">A searchable directory that turns Canadian ownership from a marketing claim into documented certification.</p>
              <div className="mt-8 flex items-center gap-5 border-y border-white/15 py-6">
                <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full border border-white/30 font-display text-3xl text-[#ffbbb2]">5</span>
                <p className="text-sm leading-relaxed text-white/66"><strong className="block text-white">Certification tiers</strong>Four-step verification with separate account journeys.</p>
              </div>
              <div className="mt-7"><TechPills dark items={["Next.js", "Firebase", "Tailwind CSS"]} /></div>
              <Link href="/work/onlymaple" className="project-world-link mt-10 inline-flex items-center gap-2 text-sm font-medium text-white">Open case study <ArrowUpRight size={16} /></Link>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="maple-stage relative pb-10 pt-8 sm:px-8">
              <div className="overflow-hidden rounded-[1.6rem] border-[9px] border-[#fff5e9] bg-white shadow-[0_45px_110px_rgba(65,8,6,.35)]">
                <div className="flex h-8 items-center gap-1.5 border-b border-black/10 bg-[#f4eee7] px-4"><span className="h-2 w-2 rounded-full bg-[#941f1a]/40" /><span className="h-2 w-2 rounded-full bg-[#941f1a]/25" /><span className="h-2 w-2 rounded-full bg-[#941f1a]/15" /></div>
                <div className="relative aspect-[16/9]"><Image src="/projects/onlymaple.png" alt="OnlyMaple directory homepage" fill sizes="(max-width: 1024px) 100vw, 60vw" className="object-cover object-top" /></div>
              </div>
              <div className="verification-seal relative z-20 ml-auto mr-3 -mt-6 grid aspect-square w-28 rotate-3 place-items-center rounded-full border-2 border-[#941f1a] bg-[#fff5e9] p-2.5 text-center text-[#941f1a] shadow-[0_18px_45px_rgba(65,8,6,.28)] sm:absolute sm:bottom-0 sm:right-3 sm:m-0 sm:w-36">
                <div className="grid h-full w-full place-items-center rounded-full border border-dashed border-[#941f1a] font-label text-[0.46rem] uppercase tracking-[0.07em] sm:text-[0.55rem] sm:tracking-[0.1em]">OnlyMaple<br /><span className="font-display text-base leading-none sm:text-xl">Verified</span><br />Canada</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

function EvidenceWall() {
  return (
    <section id="evidence" className="evidence-wall overflow-hidden border-y border-black/10 bg-[#eeeee9] text-[#11120d]">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <p className="font-label text-xs uppercase tracking-[0.18em]">02 / The evidence</p>
          <h2 className="mt-5 max-w-5xl text-[clamp(3.2rem,7vw,6.6rem)] leading-[0.92] tracking-[-0.055em]">The parts people <span className="font-display text-accent">don&apos;t usually</span> put in portfolios.</h2>
        </Reveal>

        <div className="evidence-grid mt-16 grid gap-3 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <article className="evidence-card evidence-routes flex min-h-[26rem] h-full flex-col rounded-xl bg-[#11120d] p-6 text-white sm:p-8">
              <div className="flex items-center justify-between font-label text-[0.62rem] uppercase tracking-[0.14em] text-white/45"><span>API dossier</span><span>NM / routes.ts</span></div>
              <p className="mt-10 text-[6.5rem] leading-none tracking-[-0.08em] text-[#91a7ff]">90</p>
              <h3 className="mt-2 text-3xl tracking-[-0.04em]">Documented API routes</h3>
              <div className="mt-auto space-y-2 border-t border-white/15 pt-5 font-label text-[0.58rem] uppercase tracking-[0.12em] text-white/45">
                {['auth / identity', 'jobs / proof', 'disputes / payouts', 'admin / audit'].map((item, index) => <div key={item} className="flex justify-between"><span>{item}</span><span>0{index + 1} — verified</span></div>)}
              </div>
            </article>
          </Reveal>

          <Reveal delay={60} className="lg:col-span-7">
            <article className="evidence-card min-h-[26rem] h-full rounded-xl border border-black/15 bg-[#f8f6ed] p-6 sm:p-8">
              <div className="flex items-center justify-between font-label text-[0.62rem] uppercase tracking-[0.14em]"><span>Test record</span><span>Postgres-backed E2E</span></div>
              <div className="mt-12 grid gap-8 sm:grid-cols-[0.7fr_1.3fr] sm:items-end">
                <div><p className="text-[7rem] leading-none tracking-[-0.08em]">97</p><p className="mt-2 text-xl">automated tests</p></div>
                <div className="space-y-3">
                  {['Authentication', 'Job lifecycle', 'Protected payouts', 'Dispute paths'].map((label, index) => <div key={label} className="flex items-center justify-between border-b border-black/15 py-3 font-label text-[0.58rem] uppercase tracking-[0.1em]"><span><span className="mr-3 text-black/35">0{index + 1}</span>{label}</span><span className="rounded-full bg-black px-2 py-1 text-[#f8f6ed]">tested</span></div>)}
                </div>
              </div>
              <p className="mt-10 border-t border-black/15 pt-5 text-sm text-black/55">The polished screen is only the visible edge. These checks protect the states beneath it.</p>
            </article>
          </Reveal>

          <Reveal delay={80} className="lg:col-span-8">
            <article className="evidence-card min-h-[22rem] h-full overflow-hidden rounded-xl border border-black/10 bg-[#e5e8f2] p-6 text-[#17181c] sm:p-8">
              <div className="grid h-full gap-8 md:grid-cols-[0.85fr_1.15fr]">
                <div className="flex flex-col"><p className="font-label text-[0.62rem] uppercase tracking-[0.14em] text-black/45">One product / four surfaces</p><h3 className="mt-8 text-4xl tracking-[-0.045em] sm:text-5xl">Customer. Store. Vendor. Admin.</h3><p className="mt-auto pt-8 text-sm text-black/55">Americar keeps the same membership and payout truth across mobile and web.</p></div>
                <div className="grid grid-cols-2 gap-2 self-center">
                  {['Customer app', 'Store app', 'Vendor portal', 'Admin portal'].map((item, index) => <div key={item} className={`grid min-h-28 place-items-center rounded-lg border border-black/12 p-3 text-center font-label text-[0.62rem] uppercase tracking-[0.1em] ${index === 0 ? 'bg-[#3157d5] text-white' : 'bg-white/50'}`}>{item}</div>)}
                </div>
              </div>
            </article>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-4">
            <article className="evidence-card flex min-h-[22rem] h-full flex-col rounded-xl border border-black/15 bg-[#ead8d3] p-6 sm:p-8">
              <p className="font-label text-[0.62rem] uppercase tracking-[0.14em]">Verification model</p>
              <div className="my-auto grid grid-cols-4 items-center py-8">
                {[1, 2, 3, 4].map((step) => <div key={step} className="relative grid aspect-square place-items-center rounded-full border-2 border-black bg-[#f8f6ed] font-display text-xl before:absolute before:left-full before:top-1/2 before:h-0.5 before:w-full before:bg-black last:before:hidden">{step}</div>)}
              </div>
              <h3 className="text-3xl tracking-[-0.04em]">Four steps before a maple badge means anything.</h3>
              <p className="mt-4 text-sm text-black/58">OnlyMaple turns certification into a visible, reviewable journey.</p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
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

          <Reveal delay={100} className="hero-portrait-reveal relative mx-auto hidden w-full max-w-md lg:block lg:max-w-none">
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

        <section id="work" className="scroll-mt-24 pt-24 sm:pt-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Reveal>
              <SectionIntro number="01" eyebrow="Selected work" title={<>Three products. Three different <span className="font-display text-accent">worlds.</span></>} description="Each one needed its own rules, visual language, and system underneath. Step inside the work instead of browsing another grid of cards." />
            </Reveal>
          </div>
          <ProjectWorlds />
        </section>

        <EvidenceWall />

        <section id="about" className="studio-section relative scroll-mt-24 overflow-hidden bg-[#17181c] text-white">
          <div className="studio-grid absolute inset-0" />
          <div className="relative z-10 mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
            <Reveal>
              <div className="grid gap-8 lg:grid-cols-[1fr_22rem] lg:items-end">
                <div>
                  <p className="font-label text-xs uppercase tracking-[0.18em] text-[#91a7ff]">03 / About the person</p>
                  <h2 className="mt-6 max-w-5xl text-[clamp(3.5rem,7vw,6.8rem)] leading-[0.9] tracking-[-0.055em]">The person behind the <span className="font-display text-[#91a7ff]">systems.</span></h2>
                </div>
                <p className="max-w-sm text-lg leading-relaxed text-white/58">I work remotely from India with people who need one thoughtful owner across product design and engineering.</p>
              </div>
            </Reveal>

            <div className="mt-16 grid gap-10 border-t border-white/12 pt-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
              <Reveal>
                <figure className="overflow-hidden rounded-xl border border-white/12 bg-white/[0.04]">
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#ddd6c9]">
                    <Image src="/photo/prem.jpg" alt="Prem Prajapat" fill sizes="(max-width: 1024px) 100vw, 38vw" className="object-cover grayscale-[18%]" />
                  </div>
                  <figcaption className="flex items-center justify-between gap-4 border-t border-white/12 p-5">
                    <div><p className="text-lg">Prem Prajapat</p><p className="mt-1 font-label text-[0.56rem] uppercase tracking-[0.12em] text-white/38">India / working worldwide</p></div>
                    <div className="flex gap-2">
                      <a href="https://github.com/narutojoyboy" aria-label="GitHub" className="grid h-10 w-10 place-items-center rounded-full border border-white/15 hover:bg-white hover:text-[#17181c]"><Github size={16} /></a>
                      <a href="https://www.linkedin.com/in/prem-prajapat-a9974a173/" aria-label="LinkedIn" className="grid h-10 w-10 place-items-center rounded-full border border-white/15 hover:bg-white hover:text-[#17181c]"><Linkedin size={16} /></a>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>

              <Reveal delay={80}>
                <div className="lg:pt-6">
                  <p className="font-label text-[0.62rem] uppercase tracking-[0.16em] text-[#91a7ff]">The through-line / ownership</p>
                  <h3 className="mt-7 max-w-3xl text-[clamp(2.6rem,4.5vw,4.9rem)] leading-[0.96] tracking-[-0.05em]">I care about the polished screen—and the <span className="font-display text-[#91a7ff]">invisible decisions</span> that keep it working after launch.</h3>
                  <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/56">That can mean simplifying a product flow in Figma, protecting a payment transition in the database, fixing an iOS build several dependencies down, or writing the test that catches what mocks cannot.</p>

                  <dl className="mt-12 grid gap-6 border-t border-white/12 pt-7 sm:grid-cols-3">
                    <div><dt className="font-label text-[0.55rem] uppercase tracking-[0.12em] text-white/32">Based</dt><dd className="mt-2 text-sm">India · Remote</dd></div>
                    <div><dt className="font-label text-[0.55rem] uppercase tracking-[0.12em] text-white/32">Working across</dt><dd className="mt-2 text-sm">Design · Web · Mobile · Backend</dd></div>
                    <div><dt className="font-label text-[0.55rem] uppercase tracking-[0.12em] text-white/32">Interested in</dt><dd className="mt-2 text-sm">Products with real constraints</dd></div>
                  </dl>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="contact" className="quiet-contact relative scroll-mt-24 overflow-hidden bg-[#f6f5f0] text-[#16171b]">
          <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
            <Reveal>
              <p className="font-label text-xs uppercase tracking-[0.18em] text-accent">04 / A quiet ending</p>
              <h2 className="mt-8 text-[clamp(4.6rem,12vw,12rem)] leading-[0.78] tracking-[-0.07em]">That&apos;s the <span className="font-display text-accent">work.</span></h2>
            </Reveal>
            <div className="mt-20 grid gap-12 border-t border-black/15 pt-10 lg:grid-cols-[1fr_1fr] lg:items-end">
              <Reveal>
                <p className="max-w-xl text-2xl leading-snug tracking-[-0.025em] sm:text-3xl">I&apos;m Prem—designer, engineer, and usually the person still thinking about the edge cases.</p>
              </Reveal>
              <Reveal delay={80}>
                <div className="lg:text-right">
                  <p className="font-label text-[0.62rem] uppercase tracking-[0.16em] text-black/42">If the work feels relevant</p>
                  <a href="mailto:appp7154@gmail.com" className="quiet-email group mt-4 inline-flex items-center gap-3 text-[clamp(1.7rem,4vw,4.5rem)] leading-none tracking-[-0.045em]">appp7154@gmail.com <ArrowUpRight className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></a>
                  <div className="mt-8 flex gap-5 text-sm lg:justify-end">
                    <a href="https://github.com/narutojoyboy" className="hover:text-accent">GitHub ↗</a>
                    <a href="https://www.linkedin.com/in/prem-prajapat-a9974a173/" className="hover:text-accent">LinkedIn ↗</a>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
          <p aria-hidden className="quiet-signature absolute -bottom-16 -right-4 font-display text-[14rem] leading-none text-black/[0.035]">PP</p>
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
