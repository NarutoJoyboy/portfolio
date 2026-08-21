import type { Metadata } from "next";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import Reveal from "../../components/Reveal";
import CaseStudyHeader from "../../components/CaseStudyHeader";
import CaseStudyFooter from "../../components/CaseStudyFooter";

export const metadata: Metadata = {
  title: "Americar — Prem Prajapat",
  description:
    "Case study: a four-app car-care membership platform with QR redemption and Stripe-based vendor payouts.",
};

const STACK = ["React Native (Expo)", "React", "Firebase", "Stripe", "Zustand", "Ant Design"];

const STATUS = [
  {
    title: "Customer & Store apps",
    detail:
      "React Native / Expo, live on iOS and Android. Members subscribe, track mileage, and redeem service credit; store staff scan a membership QR with a physical scan-gun to log the service.",
  },
  {
    title: "Web Vendor & Admin",
    detail:
      "A React portal for branch, document, and payout management (Zustand-based), plus an Ant Design admin panel overseeing the network.",
  },
  {
    title: "Payments",
    detail:
      "Stripe handles member subscriptions and installments; a single Firebase Cloud Function moves the payout to the vendor once a service is logged.",
  },
];

export default function AmericarCaseStudy() {
  return (
    <>
      <CaseStudyHeader />

      <main className="mx-auto max-w-3xl px-6 pb-24">
        {/* Hero */}
        <section className="pt-8 sm:pt-12 pb-12">
          <Reveal>
            <h1 className="text-5xl sm:text-6xl font-semibold tracking-tight">Americar</h1>
            <p className="mt-4 max-w-xl text-lg text-[color-mix(in_srgb,var(--foreground)_70%,transparent)] leading-relaxed">
              A car-care membership network, built as four coordinated apps —
              so a member&apos;s tap at the counter turns into a paid-out
              vendor without anyone touching cash.
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
              href="https://americar.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-medium hover:opacity-85 transition-opacity"
            >
              Visit americar.app <ExternalLink size={14} />
            </a>
          </Reveal>
        </section>

        <Reveal>
          <div className="relative aspect-[16/9] rounded-[2rem] overflow-hidden border border-[color-mix(in_srgb,var(--foreground)_10%,transparent)]">
            <Image
              src="/projects/americar.jpg"
              alt="Americar homepage"
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
              A membership-based service network only works if redemption is{" "}
              <span className="font-serif-italic text-accent">instant</span>{" "}
              at the counter, and payout to the vendor who did the work is
              accurate every time — with no cash, no manual reconciliation,
              and no one waiting on a spreadsheet at the end of the month.
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
                Four apps, one Firebase backend. The{" "}
                <strong className="text-foreground">customer app</strong>{" "}
                handles subscription or installment billing through Stripe,
                tracks each vehicle&apos;s mileage, and finds nearby partner
                locations. Redemption is a single membership QR code — nothing
                to type, nothing to remember.
              </p>
              <p>
                The <strong className="text-foreground">store app</strong>{" "}
                is built around a physical scan-gun: staff scan the
                member&apos;s code, pick the service performed, and the
                transaction is logged and mileage updated on the spot.
              </p>
              <p>
                Behind that scan, a single callable Cloud Function —{" "}
                <span className="font-mono text-sm">processVendorPayout</span>{" "}
                — records the customer&apos;s service consumption, calculates
                the vendor&apos;s cut, and fires the Stripe transfer, all in
                one transaction with rollback if any step fails. Role-based
                access control gates who can trigger it at all, since it&apos;s
                the one function in the codebase that actually moves money.
              </p>
              <p>
                The{" "}
                <strong className="text-foreground">web vendor portal</strong>{" "}
                is where a business manages its branches and onboarding
                documents, and the{" "}
                <strong className="text-foreground">admin panel</strong> is
                where the network itself gets managed.
              </p>
            </div>
          </section>
        </Reveal>

        {/* Notable decision */}
        <Reveal>
          <section className="py-10 border-t border-[color-mix(in_srgb,var(--foreground)_10%,transparent)]">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-[color-mix(in_srgb,var(--foreground)_50%,transparent)]">
              A build worth mentioning
            </h2>
            <div className="mt-4 rounded-[2rem] border border-[color-mix(in_srgb,var(--foreground)_10%,transparent)] bg-surface p-6 sm:p-8">
              <p className="text-[color-mix(in_srgb,var(--foreground)_75%,transparent)] leading-relaxed">
                Xcode 16 shipped a stricter C++20 compiler that broke a native
                dependency several levels down the stack — a{" "}
                <span className="font-mono text-sm">consteval</span> error in{" "}
                <span className="font-mono text-sm">fmt</span>, pulled in
                transitively through React Native. iOS builds started failing
                with no code change on our side at all.
              </p>
              <p className="mt-4 text-[color-mix(in_srgb,var(--foreground)_75%,transparent)] leading-relaxed">
                The immediate fix was pinning the EAS build image back to
                Xcode 15.4 — enough to keep shipping. The real fix was a{" "}
                <span className="font-serif-italic text-accent">
                  custom Expo config plugin
                </span>{" "}
                that patches the native build step directly, so the project
                could move back onto a current Xcode without carrying that pin
                forever.
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
