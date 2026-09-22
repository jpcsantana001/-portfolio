import { CpuIcon } from "lucide-react";
import { Container } from "./container";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { robotics } from "@/lib/data";

export function Robotics() {
  return (
    <section id="robotica" className="border-b border-line py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            title="Robótica"
            description={`${robotics.place} · ${robotics.period}`}
          />
        </Reveal>

        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-start md:gap-12">
          <Reveal delay={60}>
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-line text-signal">
                <CpuIcon size={20} />
              </span>
              <p className="max-w-prose leading-relaxed text-muted">
                {robotics.description}
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <ol className="flex flex-wrap items-center gap-2 md:flex-col md:items-end">
              {robotics.roles.map((role, i) => (
                <li
                  key={role}
                  className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs ${
                    i === robotics.roles.length - 1
                      ? "border-signal/40 text-signal"
                      : "border-line text-muted"
                  }`}
                >
                  <span className="font-mono text-[10px] opacity-70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {role}
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
