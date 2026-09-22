"use client";

import * as React from "react";
import { MenuIcon, SearchIcon, XIcon } from "lucide-react";
import { Container } from "./container";
import { ThemeToggle } from "./theme-toggle";
import { openCommandPalette, useShortcutLabel } from "./command-palette";

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
  const [active, setActive] = React.useState("");
  const [progress, setProgress] = React.useState(0);
  const shortcut = useShortcutLabel();

  // Barra de progresso da leitura.
  React.useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const scrollable = document.body.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? Math.min(1, window.scrollY / scrollable) : 0);
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  // Destaca no menu a seção visível.
  React.useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("main section[id]")
    );

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: [0.01, 0.2, 0.5] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

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
          {links.map((link) => {
            const isActive = active === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? "true" : undefined}
                className={`focus-ring relative text-sm transition-colors ${
                  isActive ? "text-ink" : "text-muted hover:text-ink"
                }`}
              >
                {link.label}
                <span
                  aria-hidden="true"
                  className={`absolute -bottom-1.5 left-0 h-px bg-signal transition-all duration-300 ${
                    isActive ? "w-full opacity-100" : "w-0 opacity-0"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={openCommandPalette}
            aria-label="Abrir paleta de comandos"
            className="focus-ring hidden items-center gap-2 rounded-md border border-line px-2.5 py-1.5 text-muted transition-colors hover:text-ink sm:flex"
          >
            <SearchIcon size={14} />
            <kbd className="font-mono text-[11px]">{shortcut}</kbd>
          </button>

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
                className={`focus-ring rounded-md px-2 py-2.5 text-sm transition-colors hover:bg-surface hover:text-ink ${
                  active === link.href ? "text-ink" : "text-muted"
                }`}
              >
                {link.label}
              </a>
            ))}
          </Container>
        </nav>
      )}

      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px origin-left bg-signal transition-transform duration-150 ease-out"
        style={{ transform: `scaleX(${progress})` }}
      />
    </header>
  );
}
