import type { Metadata } from "next";
import CaseStudyHeader from "../../components/CaseStudyHeader";
import { CaseHero, Cards, Code, Flow, NextProject, Problem, SectionHead, Status, Story, wrap } from "../../components/CaseStudy";

export const metadata: Metadata = {
  title: "NerdMarket — Prem Prajapat",
  description:
    "Case study: a field-service marketplace built around trust, proof of work, and payment protection.",
};

export default function NerdMarketCaseStudy() {
  return (
    <>
      <CaseStudyHeader />
      <main>
        <CaseHero
          eyebrow="Case study 01 · Field-service marketplace"
          name={<>Nerd<span className="font-display text-accent">Market</span></>}
          lede={<>A marketplace where two strangers can trust each other with a job, and the money, <span className="font-display text-muted">before they&apos;ve ever met.</span></>}
          meta={[["Roles", "Admin, Vendor, Technician"], ["Status", "Backend done, clients in progress"]]}
          stack={["NestJS 11", "Prisma 7", "PostgreSQL", "Zod", "JWT (jose)", "Sentry"]}
        >
          <Flow
            color="#151a42"
            caption="Job lifecycle, enforced by a transition table"
            aside="Every change appended to the audit log"
            steps={[
              ["Posted", "Vendor creates the job"],
              ["Checked in", "GPS within 500 m of the site"],
              ["Proof submitted", "Locks immutable on submit"],
              [<Code key="state">AWAITING_APPROVAL</Code>, "Vendor approves, or the sweep does after 48 h"],
              ["Released", "Technician gets paid"],
            ]}
            note="If a job is disputed, the locked proof package is the evidence."
          />
        </CaseHero>

        <Problem>
          Field-service work has a trust gap in both directions. A vendor doesn&apos;t know if a technician will show up and do the job right, and a technician doesn&apos;t know if they&apos;ll get paid for it. Most marketplaces solve this with{" "}
          <span className="font-display text-accent">reviews</span>, which only help after the first job has already gone wrong.
        </Problem>

        <section className={`${wrap} pt-40`}>
          <SectionHead title="The approach" intro="Three roles move through a job's lifecycle differently. Job state controls money movement, so nothing about it is implicit." />
          <div className="mt-14">
            <Cards
              items={[
                ["Explicit job state", "Rather than a free-form status field, job state is an explicit transition table plus an append-only audit log of every change."],
                ["Provable presence", "A 500-metre GPS check-in proves the technician was on site. Completing the job means a proof package (checklist, notes, a signature, up to eight photos) that locks the moment it is submitted."],
                ["Computed trust", "A weighted score from completion rate, on-time rate, dispute rate and verification sits beside directional star reviews. Both feed into who a vendor hires next time."],
                ["Protected payment", "A vendor approves proof to release payment. If they go quiet, a background sweep auto-releases it 48 hours after submission, so a payout never depends on someone checking their inbox."],
              ]}
            />
          </div>
        </section>

        <Story
          title={<>A bug worth <span className="font-display">mentioning</span></>}
          intro="The auto-release sweep passed all 148 unit tests. Every one of them stubbed the database."
          terminal="auto-release sweep"
          lines={[
            ["$ unit tests, database stubbed", "cmd"],
            ["✓ 148 passed", "ok"],
            ["$ end-to-end, real Postgres", "cmd"],
            ["✕ check constraint: approved proof needs a human approver", "fail"],
            ["✕ job stuck in AWAITING_APPROVAL, every time", "fail"],
            ["$ one migration: null approver = released by the sweep", "cmd"],
            ["✓ auto-release works, E2E suite now runs in CI", "ok"],
          ]}
          quote="Stubs can't see anything the database itself enforces."
          note={<>One migration fixed it: a null approver now explicitly means &ldquo;released by the sweep, not a person.&rdquo; It is why NerdMarket has a database-backed E2E suite in CI, not just unit tests.</>}
        />

        <Status
          items={[
            { title: "Backend", badge: "Done", detail: "90 documented API routes, 97 automated tests plus lint, typecheck, build and audit passing, and a database-backed E2E suite running in CI against a real Postgres instance." },
            { title: "Handover", badge: "Done", detail: "A re-runnable demo seed script, a 26-request Postman collection that runs green end to end, and written deployment and handover docs." },
            { title: "Mobile and web", badge: "In progress", detail: "The backend contract was built ahead of the clients. Mobile and web are still early, catching up to what the API already supports." },
          ]}
        />

        <NextProject href="/work/americar" name="Americar" summary="Four products on one membership and payout system." />
      </main>
    </>
  );
}
