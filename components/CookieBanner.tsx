"use client";

import { useEffect, useState } from "react";
import { PRIVACY_URL } from "@/lib/config";

const KEY = "cookie-consent";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

// Aviso discreto, sem bloquear a página. A escolha fica salva no navegador.
// O valor padrão (tudo negado) é definido no <head> do layout, antes do GTM.
export function CookieBanner() {
  const [open, setOpen] = useState(false);

  // Lê a escolha salva só no navegador, depois da primeira renderização.
  useEffect(() => {
    const t = setTimeout(() => {
      try {
        if (!localStorage.getItem(KEY)) setOpen(true);
      } catch {
        setOpen(true);
      }
    }, 0);
    return () => clearTimeout(t);
  }, []);

  const choose = (granted: boolean) => {
    const value = granted ? "granted" : "denied";
    try {
      localStorage.setItem(KEY, value);
    } catch {}
    window.gtag?.("consent", "update", {
      ad_storage: value,
      analytics_storage: value,
      ad_user_data: value,
      ad_personalization: value,
    });
    // Evento para o GTM disparar de novo as tags que esperavam o consentimento.
    window.dataLayer?.push({ event: "cookie_consent_update", cookie_consent: value });
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div
      role="region"
      aria-label="Aviso de cookies"
      className="fixed bottom-3 left-3 right-3 z-50 rounded-[14px] border border-line bg-white/95 p-3 text-[12px] leading-snug text-ink shadow-[0_4px_18px_rgba(0,0,0,0.08)] backdrop-blur sm:right-auto sm:max-w-[340px]"
    >
      <p className="text-muted">
        Usamos cookies para melhorar a página. Mais detalhes em{" "}
        <a href={PRIVACY_URL} className="underline underline-offset-2 hover:text-dark">
          política de privacidade
        </a>
        .
      </p>
      <div className="mt-2.5 flex gap-2">
        <button
          type="button"
          onClick={() => choose(true)}
          className="rounded-full bg-dark px-4 py-1.5 text-[12px] font-medium text-white transition hover:opacity-90"
        >
          Tudo bem
        </button>
        <button
          type="button"
          onClick={() => choose(false)}
          className="rounded-full px-3 py-1.5 text-[12px] text-muted transition hover:bg-bg-alt hover:text-ink"
        >
          Não permito
        </button>
      </div>
    </div>
  );
}
