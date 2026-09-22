import { brands, type BrandKey } from "@/lib/data";

/**
 * Selo quadrado com o monograma da marca — usado onde o espaço é apertado
 * (linha do tempo de experiência), para manter todas as entradas visualmente
 * consistentes independentemente de a marca ter arquivo de logo.
 */
export function BrandTile({
  brand,
  className = "",
}: {
  brand: BrandKey;
  className?: string;
}) {
  const b = brands[brand];

  return (
    <span
      aria-hidden="true"
      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-line bg-surface font-mono text-[10px] font-medium tracking-tight text-signal ${className}`}
    >
      {b.monogram}
    </span>
  );
}

/**
 * Logotipo horizontal da marca. Quando não existe arquivo de logo
 * (public/logos), cai para um wordmark tipográfico no estilo do site.
 */
export function BrandWordmark({
  brand,
  height,
  className = "",
}: {
  brand: BrandKey;
  /** Sobrescreve a altura preferida da marca (`logoHeight`). */
  height?: number;
  className?: string;
}) {
  const b = brands[brand];
  const size = height ?? b.logoHeight ?? 22;

  if (!b.logo) {
    return (
      <span
        className={`font-medium uppercase tracking-[0.2em] text-ink ${className}`}
        style={{ fontSize: Math.round(size * 0.62) }}
      >
        {b.name}
      </span>
    );
  }

  const width = Math.round((b.logo.width / b.logo.height) * size);

  // Logo com cor de marca escura (SESI) precisa de fundo claro no tema escuro.
  const chip = b.chipOnDark
    ? "dark:rounded-md dark:bg-white dark:px-2 dark:py-1.5"
    : "";

  return (
    <span className={`inline-flex items-center ${chip} ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={b.logo.light}
        alt={b.name}
        width={width}
        height={size}
        style={{ width, height: size }}
        className="block dark:hidden"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={b.logo.dark}
        alt={b.name}
        width={width}
        height={size}
        style={{ width, height: size }}
        className="hidden dark:block"
      />
    </span>
  );
}
