"use client";

import * as React from "react";
import { MenuIcon, XIcon } from "lucide-react";
import { Container } from "./container";
import { ThemeToggle } from "./theme-toggle";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#stack", label: "Stack" },
  { href: "#projetos", label: "Projetos" },
  { href: "#como-trabalho", label: "Como trabalho" },
  { href: "#contato", label: "Contato" },
];

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/70 bg-void/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <a
          href="#top"
          className="focus-ring flex items-center gap-2 text-sm font-medium text-ink"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-md border border-signal/40 font-mono text-xs text-signal">
            JP
          </span>
          <span className="hidden sm:inline">João Pedro Santana</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Navegação principal">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="focus-ring text-sm text-muted transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="focus-ring flex h-9 w-9 items-center justify-center rounded-md border border-line text-ink md:hidden"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <XIcon size={18} /> : <MenuIcon size={18} />}
          </button>
        </div>
      </Container>

      {open && (
        <nav
          aria-label="Navegação principal (mobile)"
          className="border-t border-line/70 bg-void md:hidden"
        >
          <Container className="flex flex-col gap-1 py-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="focus-ring rounded-md px-2 py-2.5 text-sm text-muted transition-colors hover:bg-surface hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </Container>
        </nav>
      )}
    </header>
  );
}
