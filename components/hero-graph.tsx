const nodes = [
  { key: "auth", label: "Auth", x: 20, y: 20, w: 120, h: 42, delay: 0 },
  { key: "rbac", label: "RBAC", x: 20, y: 130, w: 120, h: 42, delay: 120 },
  { key: "dash", label: "Dashboards", x: 20, y: 240, w: 140, h: 42, delay: 240 },
  { key: "fin", label: "Financeiro", x: 250, y: 170, w: 130, h: 42, delay: 520 },
  { key: "rh", label: "Recursos Humanos", x: 250, y: 240, w: 150, h: 42, delay: 640 },
  { key: "com", label: "Comercial", x: 250, y: 310, w: 130, h: 42, delay: 760 },
];

export function HeroGraph() {
  return (
    <svg
      viewBox="0 0 420 380"
      role="img"
      aria-label="Diagrama simplificado da arquitetura do Gestor360: Auth conecta a RBAC, que conecta a Dashboards, que se ramifica em Financeiro, Recursos Humanos e Comercial."
      className="h-auto w-full max-w-md"
    >
      {/* connecting lines — drawn once on load, staggered */}
      <path
        d="M 80 62 L 80 130"
        className="draw-line stroke-signal/70"
        strokeWidth="1.5"
        fill="none"
        pathLength={1}
        style={{ animationDelay: "160ms" }}
      />
      <path
        d="M 80 172 L 80 240"
        className="draw-line stroke-signal/70"
        strokeWidth="1.5"
        fill="none"
        pathLength={1}
        style={{ animationDelay: "320ms" }}
      />
      <path
        d="M 160 250 C 200 250, 210 191, 250 191"
        className="draw-line stroke-line"
        strokeWidth="1.5"
        fill="none"
        pathLength={1}
        style={{ animationDelay: "480ms" }}
      />
      <path
        d="M 160 261 L 250 261"
        className="draw-line stroke-line"
        strokeWidth="1.5"
        fill="none"
        pathLength={1}
        style={{ animationDelay: "560ms" }}
      />
      <path
        d="M 160 272 C 200 272, 210 331, 250 331"
        className="draw-line stroke-line"
        strokeWidth="1.5"
        fill="none"
        pathLength={1}
        style={{ animationDelay: "640ms" }}
      />

      {/* nodes */}
      {nodes.map((n) => (
        <g
          key={n.key}
          style={{
            animation: `fade-up 0.5s ease-out ${n.delay}ms forwards`,
            opacity: 0,
          }}
        >
          <rect
            x={n.x}
            y={n.y}
            width={n.w}
            height={n.h}
            rx={8}
            className={
              n.key === "auth" || n.key === "rbac" || n.key === "dash"
                ? "fill-surface stroke-signal/50"
                : "fill-surface stroke-line"
            }
            strokeWidth="1.25"
          />
          <text
            x={n.x + n.w / 2}
            y={n.y + n.h / 2 + 4}
            textAnchor="middle"
            className="fill-ink font-mono text-[11px]"
          >
            {n.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
