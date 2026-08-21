import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CaseStudyHeader() {
  return (
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
  );
}
