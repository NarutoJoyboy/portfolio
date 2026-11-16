"use client";
import { useRef } from "react";

/** Its child leans toward the pointer while hovered, then eases back. */
export default function Magnetic({ children, strength = 0.3 }: { children: React.ReactNode; strength?: number }) {
  const inner = useRef<HTMLSpanElement>(null);

  return (
    <span
      className="inline-block"
      onPointerMove={(event) => {
        const box = event.currentTarget.getBoundingClientRect();
        const x = (event.clientX - box.left - box.width / 2) * strength;
        const y = (event.clientY - box.top - box.height / 2) * strength;
        if (inner.current) inner.current.style.translate = `${x}px ${y}px`;
      }}
      onPointerLeave={() => {
        if (inner.current) inner.current.style.translate = "0 0";
      }}
    >
      <span ref={inner} className="magnetic-inner inline-block">{children}</span>
    </span>
  );
}
