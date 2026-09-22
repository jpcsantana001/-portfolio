import type { Metadata } from "next";
import {
  personal,
  experiences,
  education,
  courses,
  languages,
  techStack,
  gestor360,
  robotics,
  leadership,
} from "@/lib/data";

export const metadata: Metadata = {
  title: "Currículo — João Pedro Santana",
  description: "Currículo de João Pedro Santana dos Anjos — Software Engineer / Full Stack Developer.",
  robots: { index: false, follow: true },
};

const PDF = "/curriculo-joao-pedro-santana.pdf";

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="cv-section">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export default function CurriculoPage() {
  return (
    <main className="cv">
      <a className="cv-download" href={PDF} download>
        Baixar em PDF
      </a>

      <header className="cv-header">
        <h1>{personal.fullName}</h1>
        <p className="cv-role">{personal.role}</p>
        <p className="cv-contact">
          {personal.location} · {personal.email}
          <br />
          {personal.github.replace("https://", "")} ·{" "}
          {decodeURIComponent(personal.linkedin).replace("https://", "")} ·{" "}
          joaopedrosantana.vercel.app
        </p>
      </header>

      <Section title="Resumo">
        <p>
          Desenvolvedor full stack e estudante de Engenharia de Software. Atuo no
          desenvolvimento e na evolução de sistemas web usados no ambiente
          empresarial — autenticação, controle de acesso (RBAC), dashboards e
          módulos administrativos — com JavaScript, TypeScript, React, Next.js,
          Node.js, Supabase e PostgreSQL. Antes da área de desenvolvimento,
          passei por suporte de TI e integração de dados, experiência que uso
          para entender o problema antes de escrever a solução.
        </p>
      </Section>

      <Section title="Experiência">
        {experiences.map((exp) => (
          <article key={exp.company} className="cv-entry">
            <div className="cv-entry-head">
              <h3>
                {exp.company} <span className="cv-sep">·</span>{" "}
                <span className="cv-role-inline">{exp.role}</span>
              </h3>
              <span className="cv-period">{exp.period}</span>
            </div>
            <ul>
              {exp.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </Section>

      <Section title="Projeto em destaque">
        <article className="cv-entry">
          <div className="cv-entry-head">
            <h3>{gestor360.name}</h3>
          </div>
          <p>{gestor360.description}</p>
          <p className="cv-modules">
            <strong>Módulos:</strong> {gestor360.modules.join(" · ")}
          </p>
        </article>
      </Section>

      <Section title="Formação">
        {education.map((item) => (
          <div key={item.institution} className="cv-entry-head">
            <h3>
              {item.course}
              {item.detail ? ` (${item.detail})` : ""} <span className="cv-sep">·</span>{" "}
              <span className="cv-role-inline">{item.institution}</span>
            </h3>
            <span className="cv-period">
              {item.period} · {item.status}
            </span>
          </div>
        ))}
      </Section>

      <Section title="Stack & tecnologias">
        <p>{techStack.join(" · ")}</p>
      </Section>

      <div className="cv-columns">
        <Section title="Cursos">
          <ul className="cv-plain">
            {courses.map((course) => (
              <li key={course.title}>
                {course.title}
                {course.provider ? ` — ${course.provider}` : ""} ({course.status})
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Idiomas">
          <ul className="cv-plain">
            {languages.map((language) => (
              <li key={language.name}>
                {language.name} — {language.level}
              </li>
            ))}
          </ul>
        </Section>
      </div>

      <Section title="Atividades">
        <ul className="cv-plain">
          <li>
            Equipe de robótica do {robotics.place} ({robotics.period}) —{" "}
            {robotics.roles.join(" → ")}.
          </li>
          <li>
            {leadership.role} — {leadership.place}.
          </li>
        </ul>
      </Section>
    </main>
  );
}
