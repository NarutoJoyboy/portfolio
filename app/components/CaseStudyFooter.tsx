import Link from "next/link";
import { ArrowLeft, Github, Mail } from "lucide-react";
import Reveal from "./Reveal";

export default function CaseStudyFooter() {
  return (
    <Reveal>
      <section className="pt-16">
        <div className="rounded-[2rem] border border-[color-mix(in_srgb,var(--foreground)_10%,transparent)] bg-surface p-10 sm:p-14 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Want the details?{" "}
            <span className="font-serif-italic text-accent">Ask me.</span>
          </h2>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href="mailto:appp7154@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-medium hover:opacity-85 transition-opacity"
            >
              <Mail size={16} /> Email me
            </a>
            <a
              href="https://github.com/narutojoyboy"
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
  );
}
