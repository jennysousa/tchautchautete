"use client";

import { useEffect } from "react";
import { readOrigin, withOrigin, type Origin } from "@/lib/origin";

const KEY = "lp-origin";

// Guarda a origem da primeira visita da sessão e acrescenta sck e UTMs aos links do checkout.
// Não mostra nada na tela e não guarda dados pessoais.
export function CheckoutOrigin() {
  useEffect(() => {
    let origin: Origin = readOrigin(window.location.search);
    try {
      if (Object.keys(origin).length > 0) {
        sessionStorage.setItem(KEY, JSON.stringify(origin));
      } else {
        const saved = sessionStorage.getItem(KEY);
        if (saved) origin = JSON.parse(saved) as Origin;
      }
    } catch {}

    document.querySelectorAll<HTMLAnchorElement>('a[data-track="cta-checkout"]').forEach((a) => {
      const position = a.dataset.ctaPosition ?? "";
      a.href = withOrigin(a.href, origin, position);
    });
  }, []);

  return null;
}
