import type { Metadata } from "next";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import Reveal from "../../components/Reveal";
import CaseStudyHeader from "../../components/CaseStudyHeader";
import CaseStudyFooter from "../../components/CaseStudyFooter";

export const metadata: Metadata = {
  title: "OnlyMaple — Prem Prajapat",
  description:
    "Case study: a certification directory that verifies Canadian business ownership against specific, checkable criteria.",
};

const STACK = ["Next.js 16", "Firebase", "Framer Motion", "Tailwind CSS"];

const TIERS = [
  { title: "Canadian Based", req: "Registered and physically present in Canada" },
  { title: "Canadian Owned", req: "≥51% owned by Canadian citizens/PRs" },
  { title: "Independent Owner", req: "100% owned by one Canadian individual" },
  { title: "Locally Owned", req: "Owner lives within 25km of the business" },
  { title: "Community Contributor", req: "≥5 local employees, or 2% of profit donated" },
];

const STATUS = [
  {
    title: "Directory",
    detail:
      "A searchable, filterable directory (province, industry, certification badge) reading live from Firestore, live at onlymaple.vercel.app.",
  },
  {
    title: "Verification",
    detail:
      "A 4-step business wizard — details, document upload, tier selection, review and pay — backed by real document review, not a checkbox.",
  },
  {
    title: "Accounts",
    detail:
      "Separate shopper and business signup and dashboard flows, each with its own onboarding path.",
  },
];

export default function OnlyMapleCaseStudy() {
  return (
    <>
      <CaseStudyHeader />

      <main className="mx-auto max-w-3xl px-6 pb-24">
        {/* Hero */}
        <section className="pt-8 sm:pt-12 pb-12">
          <Reveal>
            <h1 className="text-5xl sm:text-6xl font-semibold tracking-tight">OnlyMaple</h1>
            <p className="mt-4 max-w-xl text-lg text-[color-mix(in_srgb,var(--foreground)_70%,transparent)] leading-relaxed">
              &ldquo;Canadian owned&rdquo; is easy to claim on a label and hard
              to actually verify. OnlyMaple turns it into a checkable fact.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <div className="mt-6 flex flex-wrap gap-2">
              {STACK.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[color-mix(in_srgb,var(--foreground)_15%,transparent)] px-3 py-1 text-xs text-[color-mix(in_srgb,var(--foreground)_60%,transparent)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={140}>
            <a
              href="https://onlymaple.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-medium hover:opacity-85 transition-opacity"
            >
              Visit onlymaple.vercel.app <ExternalLink size={14} />
            </a>
          </Reveal>
        </section>

        <Reveal>
          <div className="relative aspect-[16/9] rounded-[2rem] overflow-hidden border border-[color-mix(in_srgb,var(--foreground)_10%,transparent)]">
            <Image
              src="/projects/onlymaple.png"
              alt="OnlyMaple homepage"
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover object-top"
              priority
            />
          </div>
        </Reveal>

        {/* Problem */}
        <Reveal>
          <section className="py-10 border-t border-[color-mix(in_srgb,var(--foreground)_10%,transparent)]">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-[color-mix(in_srgb,var(--foreground)_50%,transparent)]">
              The problem
            </h2>
            <p className="mt-4 text-xl leading-relaxed">
              Shoppers who want to buy Canadian have no reliable way to tell a
              genuinely Canadian-owned business from one that just{" "}
              <span className="font-serif-italic text-accent">
                looks the part
              </span>
              . A maple leaf on a logo isn&apos;t evidence of anything.
            </p>
          </section>
        </Reveal>

        {/* Approach */}
        <Reveal>
          <section className="py-10 border-t border-[color-mix(in_srgb,var(--foreground)_10%,transparent)]">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-[color-mix(in_srgb,var(--foreground)_50%,transparent)]">
              The approach
            </h2>
            <div className="mt-4 space-y-5 text-[color-mix(in_srgb,var(--foreground)_75%,transparent)] leading-relaxed">
              <p>
                Certification is five separate tiers, each with a specific,
                checkable requirement rather than one vague
                &ldquo;verified&rdquo; badge:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {TIERS.map((t) => (
                  <div
                    key={t.title}
                    className="rounded-xl border border-[color-mix(in_srgb,var(--foreground)_10%,transparent)] p-4"
                  >
                    <h3 className="text-sm font-semibold">{t.title}</h3>
                    <p className="mt-1 text-xs text-[color-mix(in_srgb,var(--foreground)_55%,transparent)]">
                      {t.req}
                    </p>
                  </div>
                ))}
              </div>
              <p>
                A business earns a tier through a 4-step wizard: business
                details, then document upload — incorporation articles, a
                government ID — then a choice of which tiers to apply for,
                then review and payment. The directory only ever shows
                businesses that made it through that process, filterable by
                province, industry, and the badges they hold.
              </p>
              <p>
                Shoppers and businesses get separate signup and dashboard
                flows, because a business managing its certification and a
                shopper browsing the directory need almost nothing in common.
              </p>
            </div>
          </section>
        </Reveal>

        {/* Status */}
        <Reveal>
          <section className="py-10 border-t border-[color-mix(in_srgb,var(--foreground)_10%,transparent)]">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-[color-mix(in_srgb,var(--foreground)_50%,transparent)]">
              Where it stands
            </h2>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {STATUS.map((s) => (
                <div key={s.title}>
                  <h3 className="font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-[color-mix(in_srgb,var(--foreground)_60%,transparent)] leading-relaxed">
                    {s.detail}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        <CaseStudyFooter />
      </main>
    </>
  );
}
