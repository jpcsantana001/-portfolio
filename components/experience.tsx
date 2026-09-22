import { Container } from "./container";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { BrandTile } from "./brand-mark";
import { experiences } from "@/lib/data";

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

        <ol className="relative border-l border-line pl-8">
          {experiences.map((exp, i) => (
            <Reveal key={exp.company} delay={i * 40}>
              <li className="relative pb-12 last:pb-0">
                <span
                  className={`absolute -left-[calc(2rem+4.5px)] top-1.5 h-2.5 w-2.5 rounded-full ${
                    exp.current ? "bg-signal" : "bg-line"
                  }`}
                  aria-hidden="true"
                />
                <div className="flex items-start gap-3">
                  <BrandTile brand={exp.brand} />
                  <div>
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h3 className="text-lg font-medium text-ink">{exp.company}</h3>
                      {exp.period && (
                        <span className="font-mono text-xs text-signal">{exp.period}</span>
                      )}
                    </div>
                    <p className="mt-0.5 text-sm text-muted">{exp.role}</p>
                  </div>
                </div>
                <ul className="mt-4 space-y-2 md:pl-[3.25rem]">
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
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
