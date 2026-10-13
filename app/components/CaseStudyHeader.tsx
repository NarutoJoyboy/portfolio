import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CaseStudyHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[color-mix(in_srgb,var(--foreground)_12%,transparent)] bg-[color-mix(in_srgb,var(--background)_88%,transparent)] backdrop-blur-xl">
      <div className="mx-auto flex h-[4.5rem] max-w-5xl items-center justify-between px-6">
        <Link href="/#work" className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-accent">
          <ArrowLeft size={16} />
          Portfolio
        </Link>
        <span className="font-label text-[0.68rem] uppercase tracking-[0.16em] text-accent">
          Prem / Case study
        </span>
      </div>
    </header>
  );
}
