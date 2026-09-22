"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import {
  ArrowRightIcon,
  CheckIcon,
  CopyIcon,
  CornerDownLeftIcon,
  ExternalLinkIcon,
  MailIcon,
  MoonIcon,
  SearchIcon,
  SunIcon,
} from "lucide-react";
import { personal } from "@/lib/data";

const OPEN_EVENT = "portfolio:open-command-palette";

/** Abre a paleta de qualquer lugar da página. */
export function openCommandPalette() {
  window.dispatchEvent(new CustomEvent(OPEN_EVENT));
}

/** Rótulo do atalho conforme o sistema (⌘K no macOS, Ctrl K no resto). */
export function useShortcutLabel() {
  const [label, setLabel] = React.useState("Ctrl K");

  React.useEffect(() => {
    const isMac = /mac|iphone|ipad/i.test(navigator.platform || navigator.userAgent);
    if (isMac) setLabel("⌘ K");
  }, []);

  return label;
}

const sections = [
  { id: "sobre", label: "Sobre mim" },
  { id: "experiencia", label: "Experiência" },
  { id: "stack", label: "Stack" },
  { id: "projetos", label: "Projetos" },
  { id: "como-trabalho", label: "Como trabalho" },
  { id: "formacao", label: "Formação" },
  { id: "robotica", label: "Robótica" },
  { id: "contato", label: "Contato" },
];

type Command = {
  id: string;
  label: string;
  group: "Ir para" | "Ações";
  keywords: string;
  icon: React.ReactNode;
  run: () => void;
  keepOpen?: boolean;
};

function normalize(value: string) {
  return value
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .trim();
}

function goToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
  window.history.replaceState(null, "", `#${id}`);
}

export function CommandPalette() {
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const [active, setActive] = React.useState(0);
  const [copied, setCopied] = React.useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const inputRef = React.useRef<HTMLInputElement>(null);
  const listRef = React.useRef<HTMLDivElement>(null);
  const restoreFocus = React.useRef<HTMLElement | null>(null);

  const close = React.useCallback(() => {
    setOpen(false);
    setQuery("");
    setActive(0);
    restoreFocus.current?.focus?.();
  }, []);

  const commands = React.useMemo<Command[]>(() => {
    const navigation: Command[] = sections.map((s) => ({
      id: `go-${s.id}`,
      label: s.label,
      group: "Ir para",
      keywords: `${s.label} ${s.id}`,
      icon: <ArrowRightIcon size={15} />,
      run: () => goToSection(s.id),
    }));

    const actions: Command[] = [
      {
        id: "copy-email",
        label: copied ? "E-mail copiado" : "Copiar e-mail",
        group: "Ações",
        keywords: "copiar email contato",
        icon: copied ? <CheckIcon size={15} /> : <CopyIcon size={15} />,
        keepOpen: true,
        run: async () => {
          try {
            await navigator.clipboard.writeText(personal.email);
            setCopied(true);
            window.setTimeout(() => setCopied(false), 1600);
          } catch {
            window.location.href = `mailto:${personal.email}`;
          }
        },
      },
      {
        id: "mail",
        label: "Enviar e-mail",
        group: "Ações",
        keywords: "email mensagem contato mailto",
        icon: <MailIcon size={15} />,
        run: () => {
          window.location.href = `mailto:${personal.email}`;
        },
      },
      {
        id: "github",
        label: "Abrir GitHub",
        group: "Ações",
        keywords: "github codigo repositorio",
        icon: <ExternalLinkIcon size={15} />,
        run: () => window.open(personal.github, "_blank", "noopener,noreferrer"),
      },
      {
        id: "linkedin",
        label: "Abrir LinkedIn",
        group: "Ações",
        keywords: "linkedin curriculo rede",
        icon: <ExternalLinkIcon size={15} />,
        run: () => window.open(personal.linkedin, "_blank", "noopener,noreferrer"),
      },
      {
        id: "theme",
        label: resolvedTheme === "dark" ? "Tema claro" : "Tema escuro",
        group: "Ações",
        keywords: "tema claro escuro dark light aparencia",
        icon: resolvedTheme === "dark" ? <SunIcon size={15} /> : <MoonIcon size={15} />,
        keepOpen: true,
        run: () => setTheme(resolvedTheme === "dark" ? "light" : "dark"),
      },
    ];

    return [...navigation, ...actions];
  }, [copied, resolvedTheme, setTheme]);

  const results = React.useMemo(() => {
    const q = normalize(query);
    if (!q) return commands;
    return commands.filter((c) => normalize(`${c.label} ${c.keywords}`).includes(q));
  }, [commands, query]);

  // Atalho global + evento para abrir pela interface.
  React.useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        restoreFocus.current = document.activeElement as HTMLElement;
        setOpen((v) => !v);
      }
    }
    function onOpen() {
      restoreFocus.current = document.activeElement as HTMLElement;
      setOpen(true);
    }
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener(OPEN_EVENT, onOpen);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener(OPEN_EVENT, onOpen);
    };
  }, []);

  // Trava o scroll do fundo e foca o campo de busca.
  React.useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    inputRef.current?.focus();
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  React.useEffect(() => {
    setActive(0);
  }, [query]);

  React.useEffect(() => {
    listRef.current
      ?.querySelector<HTMLElement>(`[data-index="${active}"]`)
      ?.scrollIntoView({ block: "nearest" });
  }, [active]);

  if (!open) return null;

  function runCommand(command: Command) {
    if (command.keepOpen) {
      command.run();
      return;
    }
    close();
    // deixa o overlay sair antes de rolar/abrir link
    window.setTimeout(() => command.run(), 0);
  }

  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Escape") {
      e.preventDefault();
      close();
      return;
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => (results.length ? (i + 1) % results.length : 0));
      return;
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => (results.length ? (i - 1 + results.length) % results.length : 0));
      return;
    }
    if (e.key === "Enter") {
      e.preventDefault();
      const command = results[active];
      if (command) runCommand(command);
    }
  }

  let renderedGroup = "";

  return (
    <div
      className="fixed inset-0 z-[60] flex items-start justify-center px-4 pt-[12vh]"
      role="presentation"
      onKeyDown={onKeyDown}
    >
      <div
        className="absolute inset-0 bg-void/70 backdrop-blur-sm"
        aria-hidden="true"
        onClick={close}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Paleta de comandos"
        className="relative w-full max-w-lg overflow-hidden rounded-xl border border-line bg-surface shadow-[0_30px_80px_-24px_hsl(var(--ink)/0.5)]"
      >
        <div className="flex items-center gap-3 border-b border-line px-4">
          <SearchIcon size={16} className="shrink-0 text-muted" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar seção ou ação..."
            aria-label="Buscar seção ou ação"
            className="h-12 w-full bg-transparent text-sm text-ink outline-none placeholder:text-muted"
          />
          <kbd className="hidden shrink-0 rounded border border-line px-1.5 py-0.5 font-mono text-[11px] text-muted sm:block">
            Esc
          </kbd>
        </div>

        <div ref={listRef} className="max-h-[min(24rem,50vh)] overflow-y-auto p-2">
          {results.length === 0 && (
            <p className="px-3 py-6 text-center text-sm text-muted">
              Nada encontrado para “{query}”.
            </p>
          )}

          {results.map((command, index) => {
            const showGroup = command.group !== renderedGroup;
            renderedGroup = command.group;
            const isActive = index === active;

            return (
              <React.Fragment key={command.id}>
                {showGroup && (
                  <p className="px-3 pb-1 pt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                    {command.group}
                  </p>
                )}
                <button
                  type="button"
                  data-index={index}
                  onMouseMove={() => setActive(index)}
                  onClick={() => runCommand(command)}
                  className={`flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-left text-sm transition-colors ${
                    isActive ? "bg-signal/10 text-ink" : "text-muted"
                  }`}
                >
                  <span className={isActive ? "text-signal" : "text-muted"}>
                    {command.icon}
                  </span>
                  <span className="flex-1">{command.label}</span>
                  {isActive && (
                    <CornerDownLeftIcon size={13} className="text-muted" />
                  )}
                </button>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}
