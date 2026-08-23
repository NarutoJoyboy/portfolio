"use client";
import { useEffect, useRef } from "react";
import { rgbFromCssVar } from "../lib/themeColor";

type Mote = {
  x: number;
  y: number;
  z: number; // depth 0..1, closer = bigger/faster
  vx: number;
  vy: number;
  seed: number;
  accent: boolean;
};

export default function AmbientDust() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    let raf = 0;
    let width = 0;
    let height = 0;
    let motes: Mote[] = [];
    let lastScroll = window.scrollY;
    const mouse = { x: -9999, y: -9999 };
    const dust = rgbFromCssVar("--foreground", "20, 19, 15");
    const accent = rgbFromCssVar("--accent", "181, 130, 47");

    function spawn() {
      const count = Math.min(110, Math.round((width * height) / 16000));
      motes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random(),
        vx: (Math.random() - 0.5) * 0.12,
        vy: (Math.random() - 0.5) * 0.12,
        seed: Math.random() * Math.PI * 2,
        accent: Math.random() < 0.12,
      }));
    }

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      spawn();
    }

    function draw(t: number) {
      ctx!.clearRect(0, 0, width, height);

      // scroll parallax: motes drift opposite scroll, deeper ones less
      const scrollDelta = window.scrollY - lastScroll;
      lastScroll = window.scrollY;

      for (const p of motes) {
        // slow wander
        p.x += p.vx * (0.4 + p.z) + Math.sin(t / 2400 + p.seed) * 0.08;
        p.y += p.vy * (0.4 + p.z) + Math.cos(t / 2900 + p.seed) * 0.06;
        p.y -= scrollDelta * (0.08 + p.z * 0.25);

        // gentle cursor push
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 110) {
          const force = ((110 - dist) / 110) * 0.6;
          p.x += (dx / (dist || 1)) * force;
          p.y += (dy / (dist || 1)) * force;
        }

        // wrap around edges
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        const twinkle = 0.5 + 0.5 * Math.sin(t / 1400 + p.seed * 3);
        const alpha = 0.28 * (0.3 + p.z * 0.7) * twinkle;
        const size = 0.6 + p.z * 1.6;
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(${p.accent ? accent : dust}, ${alpha})`;
        ctx!.fill();
      }
      raf = requestAnimationFrame(draw);
    }

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    resize();
    raf = requestAnimationFrame(draw);
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  // h-full/w-full are load-bearing: without them the canvas lays out at its
  // intrinsic DPR-scaled attribute size rather than the viewport.
  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 h-full w-full"
    />
  );
}
