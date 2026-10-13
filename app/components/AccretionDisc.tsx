"use client";
import { useEffect, useRef } from "react";
import { rgbFromCssVar } from "../lib/themeColor";

/**
 * An accretion disc: matter spirals inward and falls into a core that
 * periodically flares. Scattered material converging into one bright thing —
 * the same sentence the headline makes, in motion.
 */

type Grain = { r: number; a: number; th: number; gold: boolean };

const COUNT = 460;
const CAM = 4;
const INNER = 0.19; // radius at which a grain is swallowed and respawns
const OUTER = 1.02;
const INFALL = 0.00028; // radial drift per frame
const SPIN = 0.011; // angular speed coefficient, divided by r^1.5 (Keplerian)
const TRAIL = 7; // frames of arc drawn behind each grain

export default function AccretionDisc({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fg = rgbFromCssVar("--foreground", "244, 242, 236");
    const gold = rgbFromCssVar("--accent", "216, 161, 58");

    let raf = 0;
    let size = 0;
    const mouse = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };

    const grains: Grain[] = Array.from({ length: COUNT }, () => ({
      r: INNER + Math.random() * (OUTER - INNER),
      a: Math.random() * Math.PI * 2,
      th: (Math.random() - 0.5) * 0.06, // disc thickness, deliberately shallow
      gold: Math.random() < 0.55,
    }));

    let flare = 0;
    let nextFlareAt = 1500;

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

      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const R = size * 0.44;
      // Steep tilt keeps it reading as a disc seen edge-on rather than a target.
      const tilt = 1.02 + mouse.y * 0.16;
      const rotY = mouse.x * 0.4;
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const cosX = Math.cos(tilt);
      const sinX = Math.sin(tilt);

      const project = (x: number, y: number, z: number) => {
        const x1 = x * cosY + z * sinY;
        const z1 = -x * sinY + z * cosY;
        const y1 = y * cosX - z1 * sinX;
        const z2 = y * sinX + z1 * cosX;
        const persp = CAM / (CAM - z2);
        return { px: cx + x1 * R * persp, py: cy + y1 * R * persp, d: (z2 + 1) / 2 };
      };

      if (!reduced) {
        if (t > nextFlareAt) {
          flare = 1;
          nextFlareAt = t + 3000 + Math.random() * 3500;
        }
        flare *= 0.96;
      }

      // core: the bright thing everything falls into
      const core = ctx!.createRadialGradient(cx, cy, 0, cx, cy, R * (0.34 + flare * 0.22));
      core.addColorStop(0, `rgba(${gold}, ${0.5 + flare * 0.4})`);
      core.addColorStop(0.35, `rgba(${gold}, 0.15)`);
      core.addColorStop(1, `rgba(${gold}, 0)`);
      ctx!.fillStyle = core;
      ctx!.fillRect(0, 0, rect.width, rect.height);

      for (const g of grains) {
        // inner orbits are faster, so the arms shear instead of rotating rigidly
        const da = SPIN / Math.pow(g.r, 1.5);
        if (!reduced) {
          g.a += da;
          g.r -= INFALL;
          if (g.r < INNER) {
            g.r = OUTER + Math.random() * 0.1;
            g.a = Math.random() * Math.PI * 2;
          }
        }

        const now = project(Math.cos(g.a) * g.r, g.th, Math.sin(g.a) * g.r);
        const back = project(
          Math.cos(g.a - da * TRAIL) * g.r,
          g.th,
          Math.sin(g.a - da * TRAIL) * g.r
        );

        const heat = 1 - (g.r - INNER) / (OUTER - INNER); // hotter closer in
        const alpha = (0.12 + now.d * 0.5) * (0.3 + heat * 0.7);

        ctx!.beginPath();
        ctx!.moveTo(back.px, back.py);
        ctx!.lineTo(now.px, now.py);
        ctx!.strokeStyle = `rgba(${g.gold ? gold : fg}, ${alpha})`;
        ctx!.lineWidth = (0.6 + now.d * 1.1) * (size / 480);
        ctx!.stroke();
      }

      raf = requestAnimationFrame(draw);
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
            "radial-gradient(circle, color-mix(in srgb, var(--accent) 12%, transparent), transparent 62%)",
        }}
      />
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
    </div>
  );
}
