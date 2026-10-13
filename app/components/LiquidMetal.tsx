"use client";
import { useEffect, useRef } from "react";
import { rgbFromCssVar } from "../lib/themeColor";

/**
 * A molten metal surface: domain-warped fractal noise shaded with sharp
 * specular bands. Rendered on the GPU in a single fragment shader — no
 * particles, so it shares no visual language with the starfield behind it.
 */

const VERT = `
attribute vec2 a_pos;
void main() { gl_Position = vec4(a_pos, 0.0, 1.0); }
`;

const FRAG = `
precision highp float;
uniform vec2 u_res;
uniform float u_time;
uniform vec2 u_mouse;
uniform vec3 u_bg;
uniform vec3 u_fg;
uniform vec3 u_gold;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
             mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
}

float fbm(vec2 p) {
  float v = 0.0, a = 0.5;
  for (int i = 0; i < 5; i++) {
    v += a * noise(p);
    p *= 2.02;
    a *= 0.5;
  }
  return v;
}

void main() {
  vec2 uv = (gl_FragCoord.xy - 0.5 * u_res) / min(u_res.x, u_res.y);
  float r = length(uv);
  float t = u_time * 0.06;
  vec2 m = u_mouse * 0.25;

  // two rounds of domain warping give the slow folding that reads as liquid
  vec2 q = vec2(fbm(uv * 1.6 + t), fbm(uv * 1.6 + vec2(5.2, 1.3) - t));
  vec2 s = vec2(fbm(uv * 1.6 + 3.0 * q + vec2(1.7, 9.2) + m + t * 1.4),
                fbm(uv * 1.6 + 3.0 * q + vec2(8.3, 2.8) - m));
  float f = fbm(uv * 1.6 + 3.0 * s);

  // sharp bands across the field are what make it read as metal, not fog
  float band = sin(f * 14.0 - u_time * 0.35) * 0.5 + 0.5;
  band = pow(band, 6.0);

  vec3 col = mix(u_bg, u_gold, smoothstep(0.25, 0.85, f));
  col = mix(col, u_fg, band * 0.55);
  col += u_gold * pow(max(0.0, 1.0 - r * 1.4), 3.0) * 0.25;

  // Fade out by r = 0.5 (the inscribed circle) — a square canvas reaches only
  // r = 0.707 at its corners, so a wider falloff leaves them visibly opaque.
  float alpha = smoothstep(0.5, 0.26, r);
  gl_FragColor = vec4(col, alpha * 0.95);
}
`;

function toVec3(cssVar: string, fallback: string): [number, number, number] {
  const [r, g, b] = rgbFromCssVar(cssVar, fallback)
    .split(",")
    .map((n) => parseFloat(n.trim()) / 255);
  return [r, g, b];
}

function compile(gl: WebGLRenderingContext, type: number, src: string) {
  const sh = gl.createShader(type)!;
  gl.shaderSource(sh, src);
  gl.compileShader(sh);
  if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
    console.error("shader compile failed:", gl.getShaderInfoLog(sh));
    return null;
  }
  return sh;
}

export default function LiquidMetal({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl", { alpha: true, premultipliedAlpha: false });
    if (!gl) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const vs = compile(gl, gl.VERTEX_SHADER, VERT);
    const fs = compile(gl, gl.FRAGMENT_SHADER, FRAG);
    if (!vs || !fs) return;

    const prog = gl.createProgram()!;
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      console.error("program link failed:", gl.getProgramInfoLog(prog));
      return;
    }
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 3, -1, -1, 3]), // one oversized triangle covers the quad
      gl.STATIC_DRAW
    );
    const loc = gl.getAttribLocation(prog, "a_pos");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(prog, "u_res");
    const uTime = gl.getUniformLocation(prog, "u_time");
    const uMouse = gl.getUniformLocation(prog, "u_mouse");
    gl.uniform3fv(gl.getUniformLocation(prog, "u_bg"), toVec3("--background", "10, 13, 22"));
    gl.uniform3fv(gl.getUniformLocation(prog, "u_fg"), toVec3("--foreground", "244, 242, 236"));
    gl.uniform3fv(gl.getUniformLocation(prog, "u_gold"), toVec3("--accent", "216, 161, 58"));

    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    const mouse = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };
    let raf = 0;

    function resize() {
      const rect = canvas!.getBoundingClientRect();
      // cap DPR: this shader is fill-rate bound and 3x costs a lot for no gain
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas!.width = rect.width * dpr;
      canvas!.height = rect.height * dpr;
      gl!.viewport(0, 0, canvas!.width, canvas!.height);
    }

    function draw(t: number) {
      mouse.x += (target.x - mouse.x) * 0.04;
      mouse.y += (target.y - mouse.y) * 0.04;
      gl!.uniform2f(uRes, canvas!.width, canvas!.height);
      gl!.uniform1f(uTime, reduced ? 8 : t / 1000);
      gl!.uniform2f(uMouse, mouse.x, mouse.y);
      gl!.drawArrays(gl!.TRIANGLES, 0, 3);
      raf = requestAnimationFrame(draw);
    }

    const onMove = (e: MouseEvent) => {
      const rect = canvas!.getBoundingClientRect();
      target.x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      target.y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };

    resize();
    raf = requestAnimationFrame(draw);
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      gl.deleteProgram(prog);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      gl.deleteBuffer(buf);
    };
  }, []);

  return (
    <div className={`relative ${className}`}>
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
    </div>
  );
}
