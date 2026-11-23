import type { Metadata } from "next";
import CaseStudyHeader from "../../components/CaseStudyHeader";
import { CaseHero, Cards, Code, Cover, Flow, NextProject, Problem, SectionHead, Status, Story, wrap } from "../../components/CaseStudy";

export const metadata: Metadata = {
  title: "Americar — Prem Prajapat",
  description:
    "Case study: a four-app car-care membership platform with QR redemption and Stripe-based vendor payouts.",
};

export default function AmericarCaseStudy() {
  return (
    <>
      <CaseStudyHeader />
      <main>
        <CaseHero
          eyebrow="Case study 02 · Web and mobile platform"
          name={<>Ameri<span className="font-display text-accent">car</span></>}
          lede={<>A car-care membership network, built as four coordinated apps, so a tap at the counter pays the vendor <span className="font-display text-muted">without anyone touching cash.</span></>}
          meta={[["Products", "Customer, store, vendor and admin"], ["Platforms", "iOS, Android and web"]]}
          stack={["React Native (Expo)", "React", "Firebase", "Stripe", "Zustand", "Ant Design"]}
          site={{ href: "https://americar.app/", label: "americar.app" }}
        >
          <Cover src="/projects/americar.jpg" alt="Americar homepage" color="#e7d7c3" />
        </CaseHero>

        <Problem>
          A membership-based service network only works if redemption is{" "}
          <span className="font-display text-accent">instant</span> at the counter, and payout to the vendor who did the work is accurate every time, with no cash, no manual reconciliation, and no one waiting on a spreadsheet at the end of the month.
        </Problem>

        <section className={`${wrap} pt-40`}>
          <SectionHead title="The approach" intro="Four apps, one Firebase backend. Redemption is a single membership QR code: nothing to type, nothing to remember." />
          <div className="mt-14">
            <Cards
              min={300}
              items={[
                ["Customer app", "Subscription or installment billing through Stripe, mileage tracking for each vehicle, and nearby partner locations."],
                ["Store app", "Built around a physical scan-gun. Staff scan the member's code, pick the service performed, and the transaction and mileage are logged on the spot."],
                ["Vendor portal", "Where a business manages its branches, onboarding documents and payouts."],
                ["Admin panel", "An Ant Design panel where the network itself gets managed."],
              ]}
            />
          </div>
          <div className="mt-4">
            <Flow
              color="#2b2a7a"
              caption="What one scan sets off"
              aside="One transaction, rolled back if any step fails"
              steps={[
                ["Member shows QR", "No card, no cash"],
                ["Scan-gun at the counter", "Staff pick the service performed"],
                [<Code key="fn">processVendorPayout</Code>, "Records the service and works out the vendor's cut"],
                ["Stripe transfer", "Vendor is paid"],
              ]}
              note="It is the one function in the codebase that moves money, so role-based access control decides who can trigger it at all."
            />
          </div>
        </section>

        <Story
          title={<>A build worth <span className="font-display">mentioning</span></>}
          intro="Xcode 16 shipped a stricter C++20 compiler that broke a native dependency several levels down the stack."
          terminal="eas build --platform ios"
          lines={[
            ["$ eas build, Xcode 16", "cmd"],
            ["✕ consteval error in fmt, pulled in through React Native", "fail"],
            ["$ pin the EAS build image to Xcode 15.4", "cmd"],
            ["✓ shipping again", "ok"],
            ["$ custom Expo config plugin patches the native build step", "cmd"],
            ["✓ back on a current Xcode, no pin to carry", "ok"],
          ]}
          quote="iOS builds started failing with no code change on our side at all."
          note="Pinning Xcode kept the apps shipping. The config plugin was the real fix, so the project never had to carry that pin forever."
        />

        <Status
          items={[
            { title: "Customer and store apps", badge: "Live", detail: "React Native with Expo, live on iOS and Android. Members subscribe, track mileage and redeem service credit; store staff scan a membership QR to log the service." },
            { title: "Vendor and admin", detail: "A React portal for branch, document and payout management, built on Zustand, plus an Ant Design admin panel overseeing the network." },
            { title: "Payments", detail: "Stripe handles member subscriptions and installments; a single Firebase Cloud Function moves the payout to the vendor once a service is logged." },
          ]}
        />

        <NextProject href="/work/onlymaple" name="OnlyMaple" summary="A directory where a Canadian-owned badge is earned through documented review." />
      </main>
    </>
  );
}
