"use client";
import { useEffect, useRef } from "react";

type Particle = { baseX: number; baseY: number; seed: number; accent: boolean; brightness: number };

export default function ParticlePortrait({
  src,
  focusY = 0.32,
  className = "",
}: {
  src: string;
  focusY?: number;
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    let raf = 0;
    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    let cancelled = false;
    const mouse = { x: -9999, y: -9999 };

    const img = new Image();
    img.src = src;

    function sampleImage() {
      const off = document.createElement("canvas");
      off.width = width;
      off.height = height;
      const octx = off.getContext("2d")!;

      // object-fit: cover, biased toward focusY
      const scale = Math.max(width / img.naturalWidth, height / img.naturalHeight);
      const drawW = img.naturalWidth * scale;
      const drawH = img.naturalHeight * scale;
      const dx = (width - drawW) / 2;
      const dy = (height - drawH) * focusY;
      octx.drawImage(img, dx, dy, drawW, drawH);

      const data = octx.getImageData(0, 0, width, height).data;
      const step = Math.max(3, Math.floor(width / 110));
      particles = [];
      for (let y = 0; y < height; y += step) {
        for (let x = 0; x < width; x += step) {
          const idx = (y * width + x) * 4;
          const r = data[idx];
          const g = data[idx + 1];
          const b = data[idx + 2];
          const brightness = (r * 0.299 + g * 0.587 + b * 0.114) / 255;
          particles.push({
            baseX: x,
            baseY: y,
            seed: Math.random() * Math.PI * 2,
            accent: Math.random() < 0.05,
            brightness,
          });
        }
      }
    }

    function resize() {
      const rect = canvas!.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      width = Math.round(rect.width);
      height = Math.round(rect.height);
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (img.complete && img.naturalWidth) sampleImage();
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

        const twinkle = 0.55 + 0.35 * Math.sin(t / 1000 + p.seed);
        const alpha = Math.min(1, p.brightness * 1.3) * twinkle;
        const size = 0.8 + p.brightness * 1.4;
        ctx!.beginPath();
        ctx!.arc(x, y, size, 0, Math.PI * 2);
        ctx!.fillStyle = p.accent
          ? `rgba(216, 161, 58, ${alpha})`
          : `rgba(244, 242, 236, ${alpha})`;
        ctx!.fill();
      }
      raf = requestAnimationFrame(draw);
    }

    img.decode().then(() => {
      if (cancelled) return;
      resize();
      raf = requestAnimationFrame(draw);
    }).catch(() => {});

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
      cancelled = true;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mouseleave", onLeave);
    };
  }, [src, focusY]);

  return <canvas ref={canvasRef} className={className} />;
}
