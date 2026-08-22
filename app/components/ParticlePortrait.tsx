"use client";
import { useEffect, useRef } from "react";

type Particle = { baseX: number; baseY: number; seed: number; accent: boolean };

export default function ParticlePortrait({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    let raf = 0;
    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    const mouse = { x: -9999, y: -9999 };

    function buildSilhouette() {
      const off = document.createElement("canvas");
      off.width = width;
      off.height = height;
      const octx = off.getContext("2d")!;
      octx.fillStyle = "#fff";

      const cx = width / 2;
      const headY = height * 0.32;
      const headR = width * 0.16;
      octx.beginPath();
      octx.arc(cx, headY, headR, 0, Math.PI * 2);
      octx.fill();

      octx.beginPath();
      octx.moveTo(cx - width * 0.32, height * 1.05);
      octx.quadraticCurveTo(cx - width * 0.3, height * 0.62, cx, height * 0.58);
      octx.quadraticCurveTo(cx + width * 0.3, height * 0.62, cx + width * 0.32, height * 1.05);
      octx.closePath();
      octx.fill();

      const data = octx.getImageData(0, 0, width, height).data;
      const step = Math.max(3, Math.floor(width / 90));
      particles = [];
      for (let y = 0; y < height; y += step) {
        for (let x = 0; x < width; x += step) {
          const idx = (y * width + x) * 4;
          if (data[idx + 3] > 128) {
            particles.push({
              baseX: x,
              baseY: y,
              seed: Math.random() * Math.PI * 2,
              accent: Math.random() < 0.06,
            });
          }
        }
      }
    }

    function resize() {
      const rect = canvas!.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      width = rect.width;
      height = rect.height;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildSilhouette();
    }

    function draw(t: number) {
      ctx!.clearRect(0, 0, width, height);
      for (const p of particles) {
        const dx = p.baseX - mouse.x;
        const dy = p.baseY - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const repelRadius = 70;
        let x = p.baseX;
        let y = p.baseY;
        if (dist < repelRadius) {
          const force = (repelRadius - dist) / repelRadius;
          x += (dx / (dist || 1)) * force * 18;
          y += (dy / (dist || 1)) * force * 18;
        }
        y += Math.sin(t / 900 + p.seed) * 1.2;

        const twinkle = 0.35 + 0.35 * Math.sin(t / 1000 + p.seed);
        ctx!.beginPath();
        ctx!.arc(x, y, 1.3, 0, Math.PI * 2);
        ctx!.fillStyle = p.accent
          ? `rgba(216, 161, 58, ${twinkle})`
          : `rgba(244, 242, 236, ${twinkle})`;
        ctx!.fill();
      }
      raf = requestAnimationFrame(draw);
    }

    resize();
    raf = requestAnimationFrame(draw);
    window.addEventListener("resize", resize);

    const onMove = (e: MouseEvent) => {
      const rect = canvas!.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };
    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} />;
}
