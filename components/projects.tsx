import { Container } from "./container";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { gestor360 } from "@/lib/data";

export function Projects() {
  return (
    <section id="projetos" className="border-b border-line py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeading title="Projetos" />
        </Reveal>

        <Reveal delay={60}>
          <div className="overflow-hidden rounded-xl border border-line bg-surface">
            <div className="border-b border-line p-8 md:p-10">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-2xl font-medium text-ink">{gestor360.name}</h3>
                <span className="rounded-full border border-signal/40 px-2.5 py-0.5 text-xs text-signal">
                  Em produção
                </span>
              </div>
              <p className="mt-4 max-w-prose leading-relaxed text-muted">
                {gestor360.description}
              </p>
            </div>

            <div className="p-8 md:p-10">
              <p className="mb-4 text-sm text-muted">Módulos do sistema</p>
              <div className="flex flex-wrap gap-2">
                {gestor360.modules.map((m) => (
                  <span
                    key={m}
                    className="rounded-md bg-void px-3 py-1.5 text-xs text-ink ring-1 ring-inset ring-line"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-6 flex items-center justify-center rounded-xl border border-dashed border-line px-8 py-10 text-center">
            <p className="text-sm text-muted">
              Mais projetos em construção — este espaço está reservado para os
              próximos.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
