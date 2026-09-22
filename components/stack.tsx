import { DatabaseIcon } from "lucide-react";
import { Container } from "./container";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { techStack, specialties } from "@/lib/data";
import { techIconByLabel } from "@/lib/tech-icons";

export function Stack() {
  return (
    <section id="stack" className="border-b border-line py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeading title="Stack & tecnologias" />
        </Reveal>

        <Reveal delay={60}>
          <ul className="flex flex-wrap gap-2.5">
            {techStack.map((tech) => {
              const icon = techIconByLabel.get(tech);

              return (
                <li
                  key={tech}
                  style={
                    icon
                      ? ({
                          "--brand": icon.color,
                          "--brand-dark": icon.colorDark,
                        } as React.CSSProperties)
                      : undefined
                  }
                  className="group flex items-center gap-2 rounded-md border border-line bg-surface px-3 py-2 font-mono text-[13px] text-ink transition-colors hover:border-[color:var(--brand)] dark:hover:border-[color:var(--brand-dark)]"
                >
                  {icon ? (
                    <svg
                      viewBox="0 0 24 24"
                      width="15"
                      height="15"
                      fill="currentColor"
                      aria-hidden="true"
                      className="shrink-0 text-[color:var(--brand)] transition-transform duration-200 group-hover:scale-110 dark:text-[color:var(--brand-dark)]"
                    >
                      <path d={icon.path} />
                    </svg>
                  ) : (
                    <DatabaseIcon
                      size={15}
                      aria-hidden="true"
                      className="shrink-0 text-muted transition-transform duration-200 group-hover:scale-110"
                    />
                  )}
                  {tech}
                </li>
              );
            })}
          </ul>
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
