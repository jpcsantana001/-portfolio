import { Container } from "./container";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { personal, education } from "@/lib/data";

const facts = [
  { label: "Idade", value: `${personal.age} anos` },
  { label: "Localização", value: personal.location },
  {
    label: "Formação",
    value: education[0].course,
    detail: education[0].institution,
  },
  {
    label: "Atuação atual",
    value: "Estagiário Full Stack",
    detail: "Hub33 / Ademicon",
  },
];

export function About() {
  return (
    <section id="sobre" className="border-b border-line py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeading title="Sobre mim" />
        </Reveal>

        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:gap-16">
          <Reveal delay={60}>
            <div className="max-w-prose space-y-5 text-muted">
              <p>
                Comecei minha trajetória em tecnologia através de suporte técnico e
                programação, e fui evoluindo naturalmente para o desenvolvimento full
                stack. Hoje curso Engenharia de Software na Unipar e atuo como
                estagiário de Desenvolvimento Full Stack na Hub33, empresa ligada à
                Ademicon, em Umuarama-PR.
              </p>
              <p className="border-l-2 border-signal/60 pl-4 text-ink">
                Trabalho diretamente na evolução do Gestor360, sistema de gestão
                usado internamente pela empresa — desde autenticação e controle de
                acesso até dashboards e módulos administrativos.
              </p>
              <p>
                Tenho interesse particular em arquitetura de sistemas, banco de
                dados e no uso de inteligência artificial como ferramenta de
                produtividade no dia a dia do desenvolvimento — sempre buscando
                entender o problema antes de escrever a solução.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <dl className="divide-y divide-line border-y border-line">
              {facts.map((f) => (
                <div
                  key={f.label}
                  className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
                >
                  <dt className="shrink-0 text-sm text-muted">{f.label}</dt>
                  <dd className="sm:text-right">
                    <span className="block text-sm font-medium text-ink">
                      {f.value}
                    </span>
                    {f.detail && (
                      <span className="mt-0.5 block text-xs leading-relaxed text-muted">
                        {f.detail}
                      </span>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
