import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Quote } from "lucide-react";
import Reveal from "./Reveal";

// Building blocks shared by the three case studies.

export const wrap = "mx-auto w-full max-w-[90rem] px-[clamp(20px,4vw,56px)]";
const label = "font-label text-[11px] uppercase tracking-[0.14em] text-subtle";
const sectionTitle = "text-[clamp(2.25rem,4vw,3.5rem)] font-medium leading-none tracking-[-0.045em]";

export function CaseHero({ eyebrow, name, lede, meta, stack, site, children }: {
  eyebrow: string;
  name: React.ReactNode;
  lede: React.ReactNode;
  meta: [string, string][];
  stack: string[];
  site?: { href: string; label: string };
  children: React.ReactNode;
}) {
  return (
    <section className="relative pt-[150px]">
      <div aria-hidden className="case-glow pointer-events-none absolute inset-0" />
      <div className={`${wrap} relative`}>
        <p className="hero-fade flex items-center gap-2.5 font-label text-xs uppercase tracking-[0.14em] text-subtle" style={{ animationDelay: "80ms" }}>
          <span className="size-1.5 bg-accent" /> {eyebrow}
        </p>
        <h1 className="mt-6 text-[clamp(4rem,13vw,12.5rem)] font-medium leading-[0.85] tracking-[-0.065em]">
          <span className="hero-clip">
            <span className="hero-word" style={{ animationDelay: "140ms" }}>{name}</span>
          </span>
        </h1>

        <div className="hero-fade mt-12 flex flex-wrap items-end justify-between gap-10" style={{ animationDelay: "500ms" }}>
          <p className="max-w-[24ch] flex-[1_1_560px] text-[clamp(1.75rem,3vw,2.75rem)] font-medium leading-[1.12] tracking-[-0.03em]">{lede}</p>
          <dl className="grid flex-[0_1_460px] grid-cols-2 gap-x-8 gap-y-6 text-[15px]">
            {meta.map(([term, value]) => (
              <div key={term}><dt className={label}>{term}</dt><dd className="mt-2">{value}</dd></div>
            ))}
            <div className="col-span-2">
              <dt className={label}>Stack</dt>
              <dd className="mt-2.5 flex flex-wrap gap-1.5">
                {stack.map((tag) => <span key={tag} className="chip px-[11px] py-[5px]">{tag}</span>)}
              </dd>
            </div>
            {site ? (
              <div className="col-span-2">
                <a href={site.href} target="_blank" rel="noopener noreferrer" className="btn-ghost min-h-11 px-[18px] text-sm">
                  Visit {site.label} <ArrowUpRight size={14} className="arw" />
                </a>
              </div>
            ) : null}
          </dl>
        </div>

        <div className="hero-fade mt-[72px]" style={{ animationDelay: "750ms" }}>{children}</div>
      </div>
    </section>
  );
}

/** Monospace for code names inside a flow step, e.g. AWAITING_APPROVAL. */
export function Code({ children }: { children: string }) {
  return <code className="font-label text-[15px]">{children}</code>;
}

/** A screenshot set in the project's own colour, like the covers on the home page. */
export function Cover({ src, alt, color }: { src: string; alt: string; color: string }) {
  return (
    <div className="rounded-[2rem] p-[clamp(20px,5vw,72px)]" style={{ background: color }}>
      <Image src={src} alt={alt} width={1600} height={900} sizes="(max-width: 1440px) 90vw, 1300px" priority className="h-auto w-full rounded-2xl shadow-[0_40px_80px_-30px_#000000a6]" />
    </div>
  );
}

/** Steps joined by a travelling pulse. The last step is the one that matters, so it carries the accent. */
export function Flow({ caption, aside, steps, note, color }: {
  caption: string;
  aside: string;
  steps: [React.ReactNode, string][];
  note?: string;
  color: string;
}) {
  return (
    <figure className="m-0 rounded-[2rem] border border-white/8 p-[clamp(24px,4vw,56px)] text-[#f1f0f6]" style={{ background: `radial-gradient(80% 90% at 100% 0%, #ffffff1c, transparent 60%), ${color}` }}>
      <figcaption className="flex flex-wrap justify-between gap-3 font-label text-xs text-white/70">
        <span className="uppercase tracking-[0.14em]">{caption}</span>
        <span>{aside}</span>
      </figcaption>
      <ol className="mt-10 flex flex-wrap gap-y-3">
        {steps.map(([step, detail], index) => {
          const last = index === steps.length - 1;
          return (
            <li key={index} className="flex min-w-0 flex-[1_1_210px] items-center">
              <div className={`node h-full min-w-0 flex-1 rounded-[20px] border p-[22px] ${last ? "border-accent bg-accent/20" : "border-white/12 bg-black/25"}`}>
                <p className="font-label text-[11px] text-white/70">0{index + 1}</p>
                <p className="mt-7 text-xl font-medium tracking-[-0.02em]">{step}</p>
                <p className="mt-1.5 text-sm text-white/75">{detail}</p>
              </div>
              {last ? null : (
                <span aria-hidden className="relative h-0.5 w-10 shrink-0 bg-white/15">
                  <span className="pulse-dot" style={{ animationDelay: `${index * 0.65}s` }} />
                </span>
              )}
            </li>
          );
        })}
      </ol>
      {note ? <p className="mt-6 text-sm text-white/70">{note}</p> : null}
    </figure>
  );
}

export function SectionHead({ title, intro }: { title: React.ReactNode; intro?: React.ReactNode }) {
  return (
    <Reveal className="flex flex-wrap items-end gap-x-24 gap-y-8">
      <h2 className={`${sectionTitle} flex-[1_1_320px]`}>{title}</h2>
      {intro ? <p className="flex-[2_1_560px] text-lg leading-relaxed text-muted">{intro}</p> : null}
    </Reveal>
  );
}

export function Problem({ children }: { children: React.ReactNode }) {
  return (
    <section className={`${wrap} pt-40`}>
      <Reveal className="flex flex-wrap gap-x-24 gap-y-8">
        <h2 className={`${sectionTitle} flex-[1_1_320px]`}>The problem</h2>
        <p className="flex-[2_1_560px] text-[clamp(1.4rem,2.2vw,2rem)] leading-[1.35] tracking-[-0.02em] text-[#c9c8c2]">{children}</p>
      </Reveal>
    </section>
  );
}

export function Cards({ items, min = 520 }: { items: [React.ReactNode, React.ReactNode][]; min?: number }) {
  return (
    <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(auto-fit, minmax(min(100%, ${min}px), 1fr))` }}>
      {items.map(([title, text], index) => (
        <Reveal key={index} delay={(index % 2) * 120}>
          <article className="card flex h-full min-h-72 flex-col gap-5 rounded-[28px] border border-white/8 bg-[#111113] p-[clamp(24px,3vw,40px)]">
            <p className="card-num font-label text-[13px] text-subtle">0{index + 1}</p>
            <h3 className="mt-auto text-3xl font-medium leading-[1.05] tracking-[-0.035em]">{title}</h3>
            <p className="leading-relaxed text-muted">{text}</p>
          </article>
        </Reveal>
      ))}
    </div>
  );
}

/** A story told as terminal output, with the lesson beside it. */
export function Story({ title, intro, terminal, lines, quote, note }: {
  title: React.ReactNode;
  intro: React.ReactNode;
  terminal: string;
  lines: [string, "cmd" | "ok" | "fail"][];
  quote: string;
  note: React.ReactNode;
}) {
  const tone = { cmd: "text-subtle", ok: "text-[#3ddc84]", fail: "text-[#ff7a6b]" };
  return (
    <section className={`${wrap} pt-40`}>
      <SectionHead title={title} intro={intro} />
      <div className="mt-14 flex flex-wrap gap-4">
        <Reveal className="min-w-0 flex-[1.3_1_560px] overflow-hidden rounded-[28px] border border-white/8 bg-[#08080a]">
          <div className="flex items-center gap-2 border-b border-white/7 px-5 py-4">
            {[0, 1, 2].map((dot) => <span key={dot} className="size-[11px] rounded-full bg-[#2a2a2e]" />)}
            <span className="ml-3 font-label text-xs text-subtle">{terminal}</span>
          </div>
          <div className="px-6 pb-7 pt-6 font-label text-sm leading-8">
            {lines.map(([line, kind], index) => (
              <p key={line} className={`term-line ${tone[kind]} ${kind === "cmd" && index ? "mt-3" : ""}`} style={{ "--i": index } as React.CSSProperties}>{line}</p>
            ))}
          </div>
        </Reveal>
        <Reveal delay={120} className="min-w-0 flex-[1_1_380px]">
          <blockquote className="flex h-full flex-col justify-between gap-10 rounded-[28px] bg-accent p-[clamp(28px,3.5vw,48px)] text-background">
            <Quote size={40} strokeWidth={1.6} aria-hidden />
            <p className="text-[clamp(1.75rem,2.6vw,2.4rem)] font-medium leading-[1.12] tracking-[-0.03em]">{quote}</p>
            <p className="text-[15px] leading-normal">{note}</p>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}

export function Status({ items }: { items: { title: string; detail: string; badge?: "Done" | "Live" | "In progress" }[] }) {
  return (
    <section className={`${wrap} pt-40`}>
      <Reveal>
        <h2 className={sectionTitle}>Where it stands</h2>
      </Reveal>
      <div className="mt-12 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] border-t border-white/10">
        {items.map((item, index) => {
          const pending = item.badge === "In progress";
          return (
            <Reveal key={item.title} delay={index * 100} className="flex flex-col gap-3.5 pr-8 pt-8">
              {item.badge ? (
                <span className={`inline-flex items-center gap-2 self-start rounded-full px-3 py-[5px] text-xs font-medium ${pending ? "bg-[#ffb4471f] text-[#ffc46b]" : "bg-[#3ddc841f] text-[#6be3a0]"}`}>
                  <span className={`size-1.5 rounded-full ${pending ? "bg-[#ffb447]" : "bg-[#3ddc84]"}`} />
                  {item.badge}
                </span>
              ) : null}
              <h3 className="text-[26px] font-medium tracking-[-0.03em]">{item.title}</h3>
              <p className="leading-relaxed text-muted">{item.detail}</p>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

export function NextProject({ href, name, summary }: { href: string; name: string; summary: string }) {
  return (
    <section className={`${wrap} pb-10 pt-40`}>
      <Reveal>
        <Link href={href} className="next-link block rounded-[2rem] border border-white/8 p-[clamp(32px,5vw,72px)]">
          <span className={`${label} block text-xs`}>Next project</span>
          <span className="mt-5 flex flex-wrap items-center justify-between gap-6">
            <span className="next-title text-[clamp(3.5rem,9vw,8.5rem)] font-medium leading-[0.9] tracking-[-0.06em]">{name}</span>
            <span className="grid size-[88px] place-items-center rounded-full bg-accent text-background">
              <ArrowUpRight size={28} className="arw" />
            </span>
          </span>
          <span className="mt-5 block text-[17px] text-muted">{summary}</span>
        </Link>
      </Reveal>
      <div className="mt-8 flex flex-wrap justify-between gap-4 text-[13px] text-subtle">
        <span>© {new Date().getFullYear()} Prem Prajapat</span>
        <a href="mailto:appp7154@gmail.com" className="link-line">appp7154@gmail.com</a>
      </div>
    </section>
  );
}
