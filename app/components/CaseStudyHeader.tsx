import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CaseStudyHeader() {
  return (
    <header className="nav-in fixed inset-x-0 top-0 z-40">
      <div className="mx-auto flex w-full max-w-[90rem] items-center justify-between gap-3 px-[clamp(20px,4vw,56px)] py-5">
        <Link href="/#work" className="btn-ghost min-h-11 bg-background/70 px-[18px] text-sm backdrop-blur-md">
          <ArrowLeft size={16} className="arw arw-back" /> All work
        </Link>
        <a href="mailto:appp7154@gmail.com" className="btn min-h-11 px-[18px] text-sm">Let&apos;s talk</a>
      </div>
    </header>
  );
}
