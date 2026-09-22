"use client";

import * as React from "react";
import { SearchIcon } from "lucide-react";
import { openCommandPalette, useShortcutLabel } from "./command-palette";

/** Atalho visível para abrir a paleta de comandos. */
export function CommandHint({ className = "" }: { className?: string }) {
  const shortcut = useShortcutLabel();

  return (
    <button
      type="button"
      onClick={openCommandPalette}
      className={`focus-ring group inline-flex items-center gap-2.5 rounded-md border border-line bg-surface/60 px-3 py-2 text-sm text-muted transition-colors hover:border-signal/40 hover:text-ink ${className}`}
    >
      <SearchIcon size={14} />
      <span>Navegue pelo teclado</span>
      <kbd className="rounded border border-line bg-void px-1.5 py-0.5 font-mono text-[11px] text-muted group-hover:text-ink">
        {shortcut}
      </kbd>
    </button>
  );
}
