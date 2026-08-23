"use client";
import { useEffect, useRef } from "react";

type Point = { x: number; y: number; z: number; accent: boolean; seed: number };

// Camera distance in sphere radii. Small values exaggerate perspective so hard
// the back hemisphere collapses inward and the silhouette stops being a circle.
const CAM = 4;

export default function ParticleOrb({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
    let raf = 0;
    let size = 0;
    const mouse = { x: 0, y: 0 }; // -1..1, eased toward target
    const target = { x: 0, y: 0 };

    // fibonacci sphere
    const N = 900;
    const points: Point[] = [];
    const golden = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < N; i++) {
      const y = 1 - (i / (N - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const theta = golden * i;
      points.push({
        x: Math.cos(theta) * r,
        y,
        z: Math.sin(theta) * r,
        accent: Math.random() < 0.14,
        seed: Math.random() * Math.PI * 2,
      });
    }

    function resize() {
      const rect = canvas!.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      size = Math.min(rect.width, rect.height);
      canvas!.width = rect.width * dpr;
      canvas!.height = rect.height * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function draw(t: number) {
      const rect = canvas!.getBoundingClientRect();
      ctx!.clearRect(0, 0, rect.width, rect.height);

      mouse.x += (target.x - mouse.x) * 0.05;
      mouse.y += (target.y - mouse.y) * 0.05;

      const dust = darkQuery.matches ? "244, 242, 236" : "40, 36, 28";
      const gold = darkQuery.matches ? "216, 161, 58" : "181, 130, 47";
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const R = size * 0.39;
      const rotY = (reduced ? 0 : t / 9000) + mouse.x * 0.6;
      const rotX = 0.35 + mouse.y * 0.4;
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);

      for (const p of points) {
        // rotate around Y then X
        const x1 = p.x * cosY + p.z * sinY;
        const z1 = -p.x * sinY + p.z * cosY;
        const y1 = p.y * cosX - z1 * sinX;
        const z2 = p.y * sinX + z1 * cosX;

        // camera at z = CAM: far enough that the silhouette stays near-circular
        const persp = CAM / (CAM - z2); // z2 in [-1,1]
        const px = cx + x1 * R * persp;
        const py = cy + y1 * R * persp;

        const depth = (z2 + 1) / 2; // 0 back, 1 front
        const twinkle = reduced ? 1 : 0.82 + 0.18 * Math.sin(t / 1200 + p.seed);
        const alpha = (0.25 + depth * 0.62) * twinkle;
        const r = (1 + depth * 1.4) * (size / 480);
        ctx!.beginPath();
        ctx!.arc(px, py, r, 0, Math.PI * 2);
        ctx!.fillStyle = p.accent
          ? `rgba(${gold}, ${alpha})`
          : `rgba(${dust}, ${alpha * 0.85})`;
        ctx!.fill();
      }
      if (!reduced) raf = requestAnimationFrame(draw);
    }

    const onMove = (e: MouseEvent) => {
      const rect = canvas!.getBoundingClientRect();
      target.x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      target.y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    const onLeave = () => {
      target.x = 0;
      target.y = 0;
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

  return (
    <div className={`relative ${className}`}>
      <div
        className="pointer-events-none absolute inset-[-28%] rounded-full"
        style={{
          background:
            "radial-gradient(circle, color-mix(in srgb, var(--accent) 13%, transparent), transparent 62%)",
        }}
      />
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
    </div>
  );
}
