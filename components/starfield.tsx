"use client";

import * as React from "react";

type Star = {
  angle: number;
  radius: number;
  size: number;
  alpha: number;
  twinkle: number;
  phase: number;
  hue: number;
};

/**
 * Campo de estrelas atrás do retrato. As estrelas orbitam o centro com
 * rotação diferencial (quanto mais perto do núcleo, mais rápido), que é o
 * que dá a leitura de disco galáctico em vez de ruído aleatório.
 *
 * Custos controlados: densidade proporcional à área, animação pausada
 * quando o elemento sai da tela, e render estático quando o usuário pede
 * menos movimento.
 */
export function Starfield({ className = "" }: { className?: string }) {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let width = 0;
    let height = 0;
    let stars: Star[] = [];
    let frame = 0;
    let visible = true;
    let start = performance.now();

    function build() {
      const rect = canvas!.getBoundingClientRect();
      width = Math.max(1, Math.round(rect.width));
      height = Math.max(1, Math.round(rect.height));
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.round((width * height) / 1100);
      const maxRadius = Math.hypot(width, height) / 2;

      stars = Array.from({ length: count }, () => {
        // distribuição enviesada para o centro: núcleo mais denso
        const r = Math.pow(Math.random(), 0.65) * maxRadius;
        return {
          angle: Math.random() * Math.PI * 2,
          radius: r,
          size: Math.random() < 0.88 ? Math.random() * 1.2 + 0.45 : Math.random() * 2 + 1.4,
          alpha: 0.4 + Math.random() * 0.6,
          twinkle: 0.4 + Math.random() * 1.6,
          phase: Math.random() * Math.PI * 2,
          hue: Math.random() < 0.18 ? 35 : Math.random() < 0.5 ? 219 : 250,
        };
      });
    }

    function draw(now: number) {
      const t = (now - start) / 1000;
      ctx!.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      const squash = 0.62; // achatamento: disco visto de viés

      for (const star of stars) {
        // rotação diferencial — núcleo gira mais rápido que as bordas
        const speed = 0.06 / (1 + star.radius / 90);
        const angle = star.angle + (reduced ? 0 : t * speed);
        const x = cx + Math.cos(angle) * star.radius;
        const y = cy + Math.sin(angle) * star.radius * squash;

        const flicker = reduced
          ? 1
          : 0.72 + 0.28 * Math.sin(t * star.twinkle + star.phase);

        ctx!.globalAlpha = Math.min(1, star.alpha * flicker);
        ctx!.fillStyle = `hsl(${star.hue} 92% ${star.hue === 35 ? 74 : 88}%)`;
        // as maiores ganham brilho, o que separa primeiro e segundo plano
        ctx!.shadowBlur = star.size > 1.6 ? 6 : 0;
        ctx!.shadowColor = `hsl(${star.hue} 92% 78%)`;
        ctx!.beginPath();
        ctx!.arc(x, y, star.size, 0, Math.PI * 2);
        ctx!.fill();
        ctx!.shadowBlur = 0;
      }

      ctx!.globalAlpha = 1;
      if (!reduced && visible) frame = requestAnimationFrame(draw);
    }

    build();
    frame = requestAnimationFrame(draw);

    const resizeObserver = new ResizeObserver(() => {
      build();
      if (reduced) requestAnimationFrame(draw);
    });
    resizeObserver.observe(canvas);

    const intersection = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible && !reduced && !frame) {
          start = performance.now();
          frame = requestAnimationFrame(draw);
        }
        if (!visible) {
          cancelAnimationFrame(frame);
          frame = 0;
        }
      },
      { threshold: 0 }
    );
    intersection.observe(canvas);

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      intersection.disconnect();
    };
  }, []);

  return (
    <div aria-hidden="true" className={`galaxy ${className}`}>
      <div className="galaxy-core" />
      <canvas ref={canvasRef} className="galaxy-stars" />
    </div>
  );
}
