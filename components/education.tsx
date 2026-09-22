import { GraduationCapIcon } from "lucide-react";
import { Container } from "./container";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { education } from "@/lib/data";

export function Education() {
  return (
    <section id="formacao" className="border-b border-line py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeading title="Formação" />
        </Reveal>

        <Reveal delay={60}>
          <div className="flex items-start gap-4 rounded-xl border border-line bg-surface p-6 md:p-8">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-signal/40 text-signal">
              <GraduationCapIcon size={20} />
            </span>
            <div>
              <h3 className="text-lg font-medium text-ink">{education.course}</h3>
              <p className="text-sm text-muted">{education.institution}</p>
              <span className="mt-2 inline-block rounded-full border border-line px-2.5 py-0.5 text-xs text-muted">
                {education.status}
              </span>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
