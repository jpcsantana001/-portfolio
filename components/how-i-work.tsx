import {
  BugIcon,
  Code2Icon,
  DatabaseIcon,
  GitBranchIcon,
  RocketIcon,
  ServerIcon,
  ShieldCheckIcon,
  SparklesIcon,
  TestTube2Icon,
} from "lucide-react";
import { Container } from "./container";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { principles } from "@/lib/data";

const icons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  "Desenvolvimento orientado a problemas": BugIcon,
  "Clean Code": Code2Icon,
  Git: GitBranchIcon,
  APIs: ServerIcon,
  "Banco de dados": DatabaseIcon,
  Segurança: ShieldCheckIcon,
  Testes: TestTube2Icon,
  Deploy: RocketIcon,
  "IA como ferramenta de produtividade": SparklesIcon,
};

export function HowIWork() {
  return (
    <section id="como-trabalho" className="border-b border-line py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            title="Como eu trabalho"
            description="Práticas que guiam meu jeito de construir software."
          />
        </Reveal>

        <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((p, i) => {
            const Icon = icons[p.title] ?? Code2Icon;
            return (
              <Reveal key={p.title} delay={(i % 3) * 40}>
                <div className="flex gap-4">
                  <Icon size={18} className="mt-0.5 shrink-0 text-signal" />
                  <div>
                    <h3 className="text-sm font-medium text-ink">{p.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">
                      {p.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
