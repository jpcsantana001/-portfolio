import { Container } from "./container";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { BrandWordmark } from "./brand-mark";
import { education } from "@/lib/data";

export function Education() {
  return (
    <section id="formacao" className="border-b border-line py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeading title="Formação" />
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2">
          {education.map((item, i) => (
            <Reveal key={item.institution} delay={60 + i * 60}>
              <div className="group h-full rounded-xl border border-line bg-surface p-6 transition-colors hover:border-signal/40 md:p-7">
                <div className="flex h-8 items-center">
                  <BrandWordmark brand={item.brand} height={26} />
                </div>

                <h3 className="mt-6 text-lg font-medium text-ink">{item.course}</h3>
                {item.detail && (
                  <p className="mt-0.5 text-sm text-muted">{item.detail}</p>
                )}
                <p className="mt-3 text-sm text-muted">{item.institution}</p>

                <div className="mt-5 flex flex-wrap items-center gap-2">
                  <span className="font-mono text-xs text-signal">{item.period}</span>
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs ${
                      item.current
                        ? "border-signal/40 text-signal"
                        : "border-line text-muted"
                    }`}
                  >
                    {item.current && (
                      <span className="h-1.5 w-1.5 rounded-full bg-signal" />
                    )}
                    {item.status}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
