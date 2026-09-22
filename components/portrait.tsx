"use client";

import * as React from "react";
import Image from "next/image";
import { MapPinIcon } from "lucide-react";
import portrait from "@/assets/joao-pedro.jpg";
import { personal } from "@/lib/data";

/**
 * Retrato do hero com inclinação sutil acompanhando o ponteiro.
 * O efeito é desligado em telas de toque e quando o usuário pede
 * menos movimento (prefers-reduced-motion).
 */
export function Portrait() {
  const ref = React.useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = React.useState({ x: 0, y: 0 });
  const [interactive, setInteractive] = React.useState(false);

  React.useEffect(() => {
    const mq = window.matchMedia(
      "(prefers-reduced-motion: reduce), (pointer: coarse)"
    );
    const sync = () => {
      setInteractive(!mq.matches);
      if (mq.matches) setTilt({ x: 0, y: 0 });
    };
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  function handleMove(e: React.PointerEvent<HTMLDivElement>) {
    if (!interactive || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: Number((py * -5).toFixed(2)), y: Number((px * 5).toFixed(2)) });
  }

  return (
    <div className="relative" style={{ perspective: "1200px" }}>
      <div
        ref={ref}
        onPointerMove={handleMove}
        onPointerLeave={() => setTilt({ x: 0, y: 0 })}
        className="group relative w-[min(19rem,78vw)] rounded-2xl border border-line bg-surface p-2 shadow-[0_24px_60px_-30px_hsl(var(--ink)/0.45)] transition-transform duration-300 ease-out will-change-transform md:w-[21rem]"
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        <div className="relative overflow-hidden rounded-xl">
          <Image
            src={portrait}
            alt={`Retrato de ${personal.fullName}`}
            placeholder="blur"
            priority
            sizes="(max-width: 768px) 78vw, 21rem"
            className="h-auto w-full select-none"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent"
          />
          <div className="pointer-events-none absolute inset-x-3 bottom-3 flex items-center gap-1.5 text-xs text-white/90">
            <MapPinIcon size={13} />
            {personal.location}
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-[radial-gradient(60%_50%_at_50%_40%,hsl(var(--signal)/0.18),transparent)] blur-xl"
      />
    </div>
  );
}
