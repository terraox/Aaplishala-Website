"use client";

import React, { useEffect, useRef } from "react";

interface SpaceCanvasProps {
  size?: number; // px
}

export default function SpaceCanvas({ size = 56 }: SpaceCanvasProps) {
  const ref = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = (canvas.width = size);
    let h = (canvas.height = size);
    const cx = w / 2;
    const cy = h / 2;

    const particles: Array<any> = [];
    const PARTICLE_COUNT = 28;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const angle = (Math.PI * 2 * i) / PARTICLE_COUNT;
      const radius = 8 + Math.random() * (w / 3);
      particles.push({
        angle,
        radius,
        speed: 0.002 + Math.random() * 0.006,
        size: 1 + Math.random() * 2,
        hue: 280 + Math.random() * 100,
      });
    }

    let last = performance.now();
    let burst = 0;

    const render = (now: number) => {
      const dt = now - last;
      last = now;
      if (!ctx) return;
      ctx.clearRect(0, 0, w, h);

      particles.forEach((p: any, i: number) => {
        p.angle += p.speed * dt * (1 + burst * 0.08);
        const x = cx + Math.cos(p.angle) * p.radius;
        const y = cy + Math.sin(p.angle) * p.radius * 0.65;

        const alpha = 0.6 + 0.4 * Math.sin(p.angle * 3 + i);
        ctx.beginPath();
        const grad = ctx.createRadialGradient(x, y, 0, x, y, p.size * 6);
        grad.addColorStop(0, `hsla(${p.hue},90%,65%,${0.9 * alpha})`);
        grad.addColorStop(1, `hsla(${p.hue},80%,45%,0)`);
        ctx.fillStyle = grad as any;
        ctx.fillRect(x - p.size * 2, y - p.size * 2, p.size * 4, p.size * 4);
      });

      // decay burst
      burst = Math.max(0, burst - dt * 0.01);

      rafRef.current = requestAnimationFrame(render);
    };

    rafRef.current = requestAnimationFrame(render);

    // handle resize/scale
    const onResize = () => {
      w = canvas.width = size;
      h = canvas.height = size;
    };

    window.addEventListener("resize", onResize);

    // hover interaction: increase burst when mouse over canvas
    const onEnter = () => (burst = 30);
    const onClick = () => (burst = 60);
    canvas.addEventListener("mouseenter", onEnter);
    canvas.addEventListener("click", onClick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
      canvas.removeEventListener("mouseenter", onEnter);
      canvas.removeEventListener("click", onClick);
    };
  }, [size]);

  return (
    <canvas
      ref={ref}
      width={size}
      height={size}
      className="absolute inset-0 w-full h-full pointer-events-auto rounded-full mix-blend-screen"
    />
  );
}
