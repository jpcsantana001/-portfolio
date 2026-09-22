import { Container } from "./container";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { BrandTile, BrandWordmark } from "./brand-mark";
import { brands, experiences } from "@/lib/data";

export function Experience() {
  return (
    <section id="experiencia" className="border-b border-line py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            title="Experiência"
            description="Minha evolução profissional, do suporte técnico ao desenvolvimento full stack."
          />
        </Reveal>

        <ol className="relative space-y-5 border-l border-line pl-6 md:pl-10">
          {experiences.map((exp, i) => (
            <Reveal key={exp.company} delay={i * 50}>
              <li className="relative">
                <span
                  aria-hidden="true"
                  className={`absolute -left-[calc(1.5rem+5.5px)] top-9 h-2.5 w-2.5 rounded-full ring-4 ring-void md:-left-[calc(2.5rem+5.5px)] ${
                    exp.current ? "bg-signal" : "bg-line"
                  }`}
                />

                <article className="rounded-xl border border-line bg-surface p-6 transition-colors hover:border-signal/40 md:p-7">
                  <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-4">
                    {brands[exp.brand].logo ? (
                      <span className="flex h-12 items-center rounded-lg border border-line/70 bg-void px-3.5">
                        <BrandWordmark brand={exp.brand} />
                      </span>
                    ) : (
                      // Sem arquivo de logo: o selo com monograma evita repetir
                      // o nome da empresa, que já aparece no título do cartão.
                      <BrandTile brand={exp.brand} className="h-12 w-12" />
                    )}

                    <span
                      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-xs ${
                        exp.current
                          ? "border-signal/40 text-signal"
                          : "border-line text-muted"
                      }`}
                    >
                      {exp.current && (
                        <span className="h-1.5 w-1.5 rounded-full bg-signal" />
                      )}
                      {exp.period}
                    </span>
                  </div>

                  <h3 className="mt-6 text-lg font-medium text-ink">
                    {exp.company}
                  </h3>
                  <p className="mt-0.5 text-sm text-muted">{exp.role}</p>

                  <ul className="mt-5 grid gap-x-8 gap-y-2 sm:grid-cols-2">
                    {exp.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex gap-2.5 text-sm leading-relaxed text-muted"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted/60" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </article>
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
