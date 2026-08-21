import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Github, Mail } from "lucide-react";
import Reveal from "../../components/Reveal";

export const metadata: Metadata = {
  title: "NerdMarket — Prem Prajapat",
  description:
    "Case study: a field-service marketplace built around trust, proof of work, and payment protection.",
};

const STACK = ["NestJS 11", "Prisma 7", "PostgreSQL", "Zod", "JWT (jose)", "Sentry"];

const STATUS = [
  {
    title: "Backend",
    detail:
      "90 documented API routes, 97 automated tests plus lint/typecheck/build/audit passing, and a database-backed E2E suite running in CI against a real Postgres instance.",
  },
  {
    title: "Handover",
    detail:
      "A re-runnable demo seed script, a 26-request Postman collection that runs green end to end, and written deployment/handover docs.",
  },
  {
    title: "Mobile & web",
    detail:
      "Backend contract built ahead of the clients — mobile and web are still early, catching up to what the API already supports.",
  },
];

export default function NerdMarketCaseStudy() {
  return (
    <>
      <header className="sticky top-0 z-40 backdrop-blur-md bg-[color-mix(in_srgb,var(--background)_80%,transparent)]">
        <div className="mx-auto max-w-3xl px-6 h-20 flex items-center justify-between">
          <Link href="/#work" className="flex items-center gap-2 text-sm font-medium">
            <ArrowLeft size={16} />
            Portfolio
          </Link>
          <span className="text-sm text-[color-mix(in_srgb,var(--foreground)_55%,transparent)]">
            Case study
          </span>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 pb-24">
        {/* Hero */}
        <section className="pt-8 sm:pt-12 pb-12">
          <Reveal>
            <h1 className="text-5xl sm:text-6xl font-semibold tracking-tight">NerdMarket</h1>
            <p className="mt-4 max-w-xl text-lg text-[color-mix(in_srgb,var(--foreground)_70%,transparent)] leading-relaxed">
              A field-service marketplace where two strangers can trust each
              other with a job — and the money — before they&apos;ve ever met.
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
        </section>

        {/* Problem */}
        <Reveal>
          <section className="py-10 border-t border-[color-mix(in_srgb,var(--foreground)_10%,transparent)]">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-[color-mix(in_srgb,var(--foreground)_50%,transparent)]">
              The problem
            </h2>
            <p className="mt-4 text-xl leading-relaxed">
              Field-service work has a trust gap in both directions: a vendor
              doesn&apos;t know if a technician will actually show up and do
              the job right, and a technician doesn&apos;t know if
              they&apos;ll get paid for it. Most marketplaces solve this with{" "}
              <span className="font-serif-italic text-accent">reviews</span> —
              which only help after the first job has already gone wrong.
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
                Three roles — <strong className="text-foreground">Admin</strong>,{" "}
                <strong className="text-foreground">Vendor</strong>, and{" "}
                <strong className="text-foreground">Technician</strong> — each
                move through a job&apos;s lifecycle differently. Rather than a
                free-form status field, job state is an explicit transition
                table plus an append-only audit log of every change. Job state
                controls money movement, so nothing about it is implicit.
              </p>
              <p>
                A technician&apos;s presence on site becomes provable with a
                500-metre GPS check-in. Completing the job means submitting a
                proof package — checklist, notes, a signature, up to eight
                photos — that locks immutable the moment it&apos;s submitted,
                because it doubles as evidence if the job is ever disputed.
              </p>
              <p>
                Trust itself is computed, not just claimed: a weighted score
                (completion rate, on-time rate, dispute rate, verification)
                sits alongside directional star reviews, and both feed into
                who a vendor is willing to hire next time.
              </p>
              <p>
                Payment is protected in both directions. A vendor approves
                proof to release it — but if a vendor goes quiet, a background
                sweep auto-releases payment 48 hours after submission, so a
                technician&apos;s payout doesn&apos;t depend on someone
                checking their inbox.
              </p>
            </div>
          </section>
        </Reveal>

        {/* Notable decision */}
        <Reveal>
          <section className="py-10 border-t border-[color-mix(in_srgb,var(--foreground)_10%,transparent)]">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-[color-mix(in_srgb,var(--foreground)_50%,transparent)]">
              A bug worth mentioning
            </h2>
            <div className="mt-4 rounded-[2rem] border border-[color-mix(in_srgb,var(--foreground)_10%,transparent)] bg-surface p-6 sm:p-8">
              <p className="text-[color-mix(in_srgb,var(--foreground)_75%,transparent)] leading-relaxed">
                The auto-release sweep passed all 148 unit tests — every one
                of them stubbed the database. The first end-to-end test run
                against a real Postgres instance caught what stubs
                couldn&apos;t: a check constraint required every approved
                proof package to have a human approver, so the system&apos;s
                own auto-release silently failed every single time, leaving
                jobs stuck in{" "}
                <span className="font-mono text-sm">AWAITING_APPROVAL</span>{" "}
                forever.
              </p>
              <p className="mt-4 text-[color-mix(in_srgb,var(--foreground)_75%,transparent)] leading-relaxed">
                One migration fixed it — a{" "}
                <span className="font-serif-italic text-accent">null</span>{" "}
                approver now explicitly means &ldquo;released by the sweep,
                not a person.&rdquo; It&apos;s the reason the project has a
                database-backed E2E suite in CI, not just unit tests: stubs
                can&apos;t see anything the database itself enforces.
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

        {/* Footer CTA */}
        <Reveal>
          <section className="pt-16">
            <div className="rounded-[2rem] border border-[color-mix(in_srgb,var(--foreground)_10%,transparent)] bg-surface p-10 sm:p-14 text-center">
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
                Want the details?{" "}
                <span className="font-serif-italic text-accent">Ask me.</span>
              </h2>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
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
                <Link
                  href="/#work"
                  className="inline-flex items-center gap-2 rounded-full border border-[color-mix(in_srgb,var(--foreground)_15%,transparent)] px-5 py-2.5 text-sm font-medium hover:bg-foreground hover:text-background transition-colors"
                >
                  <ArrowLeft size={16} /> Back to portfolio
                </Link>
              </div>
            </div>
          </section>
        </Reveal>
      </main>
    </>
  );
}
