"use client";
import { useEffect, useRef } from "react";
import { rgbFromCssVar } from "../lib/themeColor";

/**
 * Three stacked layers — interface, logic, data — threaded by connectors with
 * pulses running top to bottom. The portfolio's claim is one person owning the
 * whole stack, so the hero object is that stack rather than a decorative blob.
 */

type Node = {
  x: number;
  y: number;
  z: number;
  layer: number;
  seed: number;
  accent: boolean;
};
type Pulse = { spoke: number; p: number; speed: number };

// Camera distance in scene radii. Close values collapse the far side inward and
// stop the layers reading as parallel planes.
const CAM = 4.2;
// Gap has to beat each ring's on-screen ellipse height or the layers overlap
// into one barrel instead of reading as three planes. Pairs with the shallow
// tilt below: flat ellipses, clear separation.
const LAYER_Y = [-0.66, 0, 0.66]; // interface on top, data at the bottom
const RINGS = [
  { r: 0.4, n: 8 },
  { r: 0.72, n: 14 },
  { r: 1, n: 20 },
];
// Taper down the stack: a broad interface surface narrowing to a concentrated
// data core. Also stops the three layers reading as one uniform drum.
const LAYER_SCALE = [1, 0.85, 0.7];
const OUTER = RINGS.length - 1;
const SPOKES = RINGS[OUTER].n;
const TWIST = 0.14; // slight per-layer rotation so connectors read as a helix

export default function SystemStack({ className = "" }: { className?: string }) {
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

    const layers: Node[][][] = LAYER_Y.map((y, layer) =>
      RINGS.map((ring) =>
        Array.from({ length: ring.n }, (_, i) => {
          const a = (i / ring.n) * Math.PI * 2 + layer * TWIST;
          const r = ring.r * LAYER_SCALE[layer];
          return {
            x: Math.cos(a) * r,
            y,
            z: Math.sin(a) * r,
            layer,
            seed: Math.random() * Math.PI * 2,
            accent: Math.random() < 0.16,
          };
        })
      )
    );
    const nodes = layers.flat(2);

    let pulses: Pulse[] = [];
    let nextPulseAt = 0;

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
      const R = size * 0.37;
      const rotY = (reduced ? 0.6 : t / 11000) + mouse.x * 0.5;
      const tilt = 0.34 + mouse.y * 0.16;
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
        return {
          px: cx + x1 * R * persp,
          py: cy + y1 * R * persp,
          depth: (z2 + 1) / 2,
        };
      };

      // vertical connectors between layers, on the outer ring
      for (let l = 0; l < layers.length - 1; l++) {
        for (let i = 0; i < SPOKES; i += 2) {
          const a = layers[l][OUTER][i];
          const b = layers[l + 1][OUTER][i];
          const pa = project(a.x, a.y, a.z);
          const pb = project(b.x, b.y, b.z);
          ctx!.beginPath();
          ctx!.moveTo(pa.px, pa.py);
          ctx!.lineTo(pb.px, pb.py);
          ctx!.strokeStyle = `rgba(${fg}, ${0.05 + pa.depth * 0.1})`;
          ctx!.lineWidth = 1;
          ctx!.stroke();
        }
      }

      // ring outlines give each layer its plane
      layers.forEach((rings) => {
        rings.forEach((ring, ri) => {
          if (ri === 0) return; // innermost stays as loose nodes
          ctx!.beginPath();
          ring.forEach((n, i) => {
            const p = project(n.x, n.y, n.z);
            if (i === 0) ctx!.moveTo(p.px, p.py);
            else ctx!.lineTo(p.px, p.py);
          });
          ctx!.closePath();
          ctx!.strokeStyle = `rgba(${fg}, ${ri === OUTER ? 0.22 : 0.09})`;
          ctx!.lineWidth = 1;
          ctx!.stroke();
        });
      });

      // spine: the one pair of hands holding the layers together
      const top = project(0, LAYER_Y[0], 0);
      const bottom = project(0, LAYER_Y[LAYER_Y.length - 1], 0);
      ctx!.beginPath();
      ctx!.moveTo(top.px, top.py);
      ctx!.lineTo(bottom.px, bottom.py);
      ctx!.strokeStyle = `rgba(${gold}, 0.18)`;
      ctx!.stroke();

      // nodes
      for (const n of nodes) {
        const { px, py, depth } = project(n.x, n.y, n.z);
        const twinkle = reduced ? 1 : 0.85 + 0.15 * Math.sin(t / 1300 + n.seed);
        // the surface people touch sits brightest, data recedes
        const tier = 1 - n.layer * 0.16;
        const alpha = (0.22 + depth * 0.68) * twinkle * tier;
        const r = (0.9 + depth * 1.5) * (size / 480);
        ctx!.beginPath();
        ctx!.arc(px, py, r, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(${n.accent ? gold : fg}, ${alpha})`;
        ctx!.fill();
      }

      // pulses: work travelling from interface down to data
      if (!reduced) {
        if (t > nextPulseAt) {
          pulses.push({
            // even spokes only: those are the ones with a drawn connector
            spoke: ((Math.random() * (SPOKES / 2)) | 0) * 2,
            p: 0,
            speed: 0.0009 + Math.random() * 0.0006,
          });
          nextPulseAt = t + 420 + Math.random() * 900;
        }
        const span = layers.length - 1;
        pulses = pulses.filter((q) => q.p < span);
        for (const q of pulses) {
          q.p += q.speed * 16;
          const l = Math.min(Math.floor(q.p), span - 1);
          const f = q.p - l;
          const a = layers[l][OUTER][q.spoke];
          const b = layers[l + 1][OUTER][q.spoke];
          const { px, py, depth } = project(
            a.x + (b.x - a.x) * f,
            a.y + (b.y - a.y) * f,
            a.z + (b.z - a.z) * f
          );
          const fade = Math.sin((q.p / span) * Math.PI); // dim at both ends
          ctx!.beginPath();
          ctx!.arc(px, py, 5 * (size / 480), 0, Math.PI * 2);
          ctx!.fillStyle = `rgba(${gold}, ${0.1 * fade * depth})`;
          ctx!.fill();
          ctx!.beginPath();
          ctx!.arc(px, py, 1.8 * (size / 480), 0, Math.PI * 2);
          ctx!.fillStyle = `rgba(${gold}, ${0.9 * fade * (0.4 + depth * 0.6)})`;
          ctx!.fill();
        }
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
            "radial-gradient(circle, color-mix(in srgb, var(--accent) 13%, transparent), transparent 62%)",
        }}
      />
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
    </div>
  );
}
