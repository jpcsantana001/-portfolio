import { DownloadIcon, MailIcon, MapPinIcon } from "lucide-react";
import { Container } from "./container";
import { Reveal } from "./reveal";
import { personal, resume } from "@/lib/data";
import { CopyEmailButton } from "./copy-email-button";
import { GithubIcon, LinkedinIcon } from "./icons";

export function Contact() {
  return (
    <section id="contato" className="py-20 md:py-28">
      <Container>
        <Reveal>
          <div className="rounded-2xl border border-line bg-surface px-8 py-14 text-center md:px-16 md:py-20">
            <h2 className="text-2xl font-medium tracking-tight text-ink md:text-3xl">
              Vamos conversar
            </h2>
            <p className="mx-auto mt-3 max-w-prose text-muted">
              Aberto a novas oportunidades, projetos e conversas sobre desenvolvimento
              de software.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`mailto:${personal.email}`}
                className="focus-ring inline-flex items-center gap-2 rounded-md bg-signal px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
              >
                <MailIcon size={16} />
                {personal.email}
              </a>
              <CopyEmailButton email={personal.email} />
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
              <a
                href={resume.pdf}
                download
                className="focus-ring inline-flex items-center gap-2 rounded-md border border-line px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-void"
              >
                <DownloadIcon size={16} />
                Baixar currículo (PDF)
              </a>
              <a
                href={resume.page}
                className="focus-ring inline-flex items-center gap-2 rounded-md px-3 py-2.5 text-sm text-muted transition-colors hover:text-ink"
              >
                ou ver no navegador
              </a>
            </div>

            <div className="mt-8 flex items-center justify-center gap-3">
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer noopener"
                className="focus-ring flex h-10 w-10 items-center justify-center rounded-md border border-line text-muted transition-colors hover:text-ink"
                aria-label="GitHub de João Pedro Santana"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="focus-ring flex h-10 w-10 items-center justify-center rounded-md border border-line text-muted transition-colors hover:text-ink"
                aria-label="LinkedIn de João Pedro Santana"
              >
                <LinkedinIcon size={18} />
              </a>
              <span className="ml-1 inline-flex items-center gap-1.5 text-sm text-muted">
                <MapPinIcon size={14} />
                {personal.location}
              </span>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
