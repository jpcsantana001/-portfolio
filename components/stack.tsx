import { Container } from "./container";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { techStack, specialties } from "@/lib/data";

export function Stack() {
  return (
    <section id="stack" className="border-b border-line py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeading title="Stack & tecnologias" />
        </Reveal>

        <Reveal delay={60}>
          <div className="flex flex-wrap gap-2.5">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-line bg-surface px-3 py-1.5 font-mono text-[13px] text-ink"
              >
                {tech}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-16 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {specialties.map((s) => (
              <div key={s.title} className="bg-void p-6">
                <h3 className="text-sm font-medium text-ink">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
