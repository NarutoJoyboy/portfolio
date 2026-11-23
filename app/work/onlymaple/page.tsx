import type { Metadata } from "next";
import CaseStudyHeader from "../../components/CaseStudyHeader";
import { CaseHero, Cards, Cover, Flow, NextProject, Problem, SectionHead, Status, wrap } from "../../components/CaseStudy";

export const metadata: Metadata = {
  title: "OnlyMaple — Prem Prajapat",
  description:
    "Case study: a certification directory that verifies Canadian business ownership against specific, checkable criteria.",
};

const TIERS = [
  ["Canadian Based", "Registered and physically present in Canada"],
  ["Canadian Owned", "At least 51% owned by Canadian citizens or PRs"],
  ["Independent Owner", "100% owned by one Canadian individual"],
  ["Locally Owned", "Owner lives within 25 km of the business"],
  ["Community Contributor", "At least 5 local employees, or 2% of profit donated"],
];

export default function OnlyMapleCaseStudy() {
  return (
    <>
      <CaseStudyHeader />
      <main>
        <CaseHero
          eyebrow="Case study 03 · Certification directory"
          name={<>Only<span className="font-display text-accent">Maple</span></>}
          lede={<>&ldquo;Canadian owned&rdquo; is easy to claim on a label and hard to verify. OnlyMaple turns it into <span className="font-display text-muted">a checkable fact.</span></>}
          meta={[["Certification", "Five tiers, each with its own proof"], ["Accounts", "Shoppers and businesses"]]}
          stack={["Next.js 16", "Firebase", "Framer Motion", "Tailwind CSS"]}
          site={{ href: "https://onlymaple.vercel.app/", label: "onlymaple.vercel.app" }}
        >
          <Cover src="/projects/onlymaple.png" alt="OnlyMaple homepage" color="#941f1a" />
        </CaseHero>

        <Problem>
          Shoppers who want to buy Canadian have no reliable way to tell a genuinely Canadian-owned business from one that just{" "}
          <span className="font-display text-accent">looks the part</span>. A maple leaf on a logo isn&apos;t evidence of anything.
        </Problem>

        <section className={`${wrap} pt-40`}>
          <SectionHead title="The approach" intro="Certification is five separate tiers, each with a specific, checkable requirement, rather than one vague “verified” badge." />
          <ol className="mt-14 grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-3">
            {TIERS.map(([title, requirement], index) => (
              <li key={title} className="card flex min-h-56 flex-col rounded-3xl border border-white/8 bg-[#111113] p-6">
                <span className="card-num font-label text-[13px] text-subtle">Tier 0{index + 1}</span>
                <span className="mt-auto text-2xl font-medium leading-tight tracking-[-0.03em]">{title}</span>
                <span className="mt-2 text-sm leading-relaxed text-muted">{requirement}</span>
              </li>
            ))}
          </ol>
          <div className="mt-4">
            <Flow
              color="#5c1210"
              caption="How a business earns a tier"
              aside="Real document review, not a checkbox"
              steps={[
                ["Business details", "Who they are and where"],
                ["Documents", "Incorporation articles and a government ID"],
                ["Choose tiers", "Apply for the badges that fit"],
                ["Review and pay", "Before a listing reaches the directory"],
              ]}
            />
          </div>
          <div className="mt-4">
            <Cards
              items={[
                ["Filtered by proof", "The directory only ever shows businesses that made it through that process, filterable by province, industry and the badges they hold."],
                ["Two kinds of account", "Shoppers and businesses get separate signup and dashboard flows, because a business managing its certification and a shopper browsing the directory need almost nothing in common."],
              ]}
            />
          </div>
        </section>

        <Status
          items={[
            { title: "Directory", badge: "Live", detail: "A searchable, filterable directory (province, industry, certification badge) reading live from Firestore, live at onlymaple.vercel.app." },
            { title: "Verification", detail: "A four-step business wizard (details, document upload, tier selection, review and pay) backed by real document review." },
            { title: "Accounts", detail: "Separate shopper and business signup and dashboard flows, each with its own onboarding path." },
          ]}
        />

        <NextProject href="/work/nerdmarket" name="NerdMarket" summary="A marketplace where proof of work and payouts have to agree before money moves." />
      </main>
    </>
  );
}
