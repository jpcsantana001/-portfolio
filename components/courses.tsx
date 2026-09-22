import { AwardIcon, LanguagesIcon } from "lucide-react";
import { Container } from "./container";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { courses, languages } from "@/lib/data";

export function Courses() {
  return (
    <section id="cursos" className="border-b border-line py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeading title="Cursos & idiomas" />
        </Reveal>

        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:gap-16">
          <Reveal delay={60}>
            <ul className="divide-y divide-line border-y border-line">
              {courses.map((course) => (
                <li
                  key={course.title}
                  className="flex flex-col gap-2 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
                >
                  <div className="flex items-start gap-3">
                    <AwardIcon
                      size={16}
                      aria-hidden="true"
                      className="mt-0.5 shrink-0 text-signal"
                    />
                    <div>
                      <p className="text-sm font-medium text-ink">{course.title}</p>
                      {course.provider && (
                        <p className="mt-0.5 text-xs text-muted">{course.provider}</p>
                      )}
                    </div>
                  </div>
                  <span
                    className={`inline-flex w-fit shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs sm:ml-auto ${
                      course.status === "Em andamento"
                        ? "border-signal/40 text-signal"
                        : "border-line text-muted"
                    }`}
                  >
                    {course.status === "Em andamento" && (
                      <span className="h-1.5 w-1.5 rounded-full bg-signal" />
                    )}
                    {course.status}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-xl border border-line bg-surface p-6">
              <div className="flex items-center gap-2 text-sm font-medium text-ink">
                <LanguagesIcon size={16} aria-hidden="true" className="text-signal" />
                Idiomas
              </div>
              <dl className="mt-4 space-y-3">
                {languages.map((language) => (
                  <div
                    key={language.name}
                    className="flex items-baseline justify-between gap-4"
                  >
                    <dt className="text-sm text-ink">{language.name}</dt>
                    <dd className="font-mono text-xs text-muted">{language.level}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
