"use client";

import * as React from "react";
import { CheckIcon, CopyIcon } from "lucide-react";

export function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = React.useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard API unavailable — the mailto link below still works
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="focus-ring inline-flex items-center gap-2 rounded-md border border-line px-3 py-1.5 text-xs text-muted transition-colors hover:text-ink"
      aria-live="polite"
    >
      {copied ? <CheckIcon size={13} /> : <CopyIcon size={13} />}
      {copied ? "E-mail copiado" : "Copiar e-mail"}
    </button>
  );
}
