"use client";
import { useRef } from "react";

export default function CursorGlow({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const glowRef = useRef<HTMLDivElement>(null);

  return (
    <div
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        glowRef.current?.style.setProperty("--x", `${e.clientX - rect.left}px`);
        glowRef.current?.style.setProperty("--y", `${e.clientY - rect.top}px`);
        glowRef.current?.style.setProperty("opacity", "1");
      }}
      onMouseLeave={() => glowRef.current?.style.setProperty("opacity", "0")}
      className={`relative ${className}`}
    >
      <div
        ref={glowRef}
        aria-hidden
        className="pointer-events-none absolute h-[500px] w-[500px] rounded-full opacity-0 transition-opacity duration-500"
        style={{
          left: "var(--x, 50%)",
          top: "var(--y, 50%)",
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle, color-mix(in srgb, var(--accent) 22%, transparent), transparent 70%)",
        }}
      />
      {children}
    </div>
  );
}
