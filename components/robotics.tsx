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
          <SectionHeading title="Robótica" />
        </Reveal>

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
      </Container>
    </section>
  );
}
