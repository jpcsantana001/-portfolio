import { Container } from "./container";
import { HeroGraph } from "./hero-graph";
import { personal } from "@/lib/data";
import { GithubIcon, LinkedinIcon } from "./icons";

export function Hero() {
  return (
    <section
      id="top"
      className="bg-grid relative overflow-hidden border-b border-line pt-32 pb-20 md:pt-40 md:pb-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,hsl(var(--signal)/0.10),transparent)]"
      />
      <Container className="relative grid gap-14 md:grid-cols-[1.1fr_0.9fr] md:items-center md:gap-8">
        <div>
          <div className="mb-6 flex items-center gap-2 text-sm text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-signal" />
            {personal.status}
          </div>

          <h1 className="text-4xl font-medium tracking-tight text-ink sm:text-5xl md:text-6xl">
            {personal.name}
          </h1>
          <p className="mt-3 text-lg font-medium text-signal md:text-xl">
            {personal.role}
          </p>

          <p className="mt-6 max-w-prose text-balance text-base leading-relaxed text-muted md:text-lg">
            {personal.tagline}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#projetos"
              className="focus-ring inline-flex items-center gap-1.5 rounded-md bg-signal px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              Ver projetos
            </a>
            <a
              href="#contato"
              className="focus-ring inline-flex items-center gap-1.5 rounded-md border border-line px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-surface"
            >
              Entre em contato
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer noopener"
              className="focus-ring flex h-10 w-10 items-center justify-center rounded-md border border-line text-muted transition-colors hover:text-ink"
              aria-label="GitHub de João Pedro Santana"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="focus-ring flex h-10 w-10 items-center justify-center rounded-md border border-line text-muted transition-colors hover:text-ink"
              aria-label="LinkedIn de João Pedro Santana"
            >
              <LinkedinIcon size={18} />
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <HeroGraph />
        </div>
      </Container>
    </section>
  );
}
