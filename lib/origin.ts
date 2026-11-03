// Origem da visita, para a Hotmart mostrar de onde veio cada venda.
// O código sck vai no link do checkout, no formato "origem|botão". Máximo de 30 caracteres.

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"] as const;

export type Origin = Partial<Record<(typeof UTM_KEYS)[number] | "src", string>>;

// Limpa para letras minúsculas, números, hífen e sublinhado.
const clean = (v: string) =>
  v
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9_-]+/g, "-")
    .replace(/^-+|-+$/g, "");

// Lê UTMs e src da URL da página.
export function readOrigin(search: string): Origin {
  const p = new URLSearchParams(search);
  const out: Origin = {};
  for (const k of [...UTM_KEYS, "src"] as const) {
    const v = p.get(k);
    if (v) out[k] = v;
  }
  return out;
}

// Canal de origem. Prefere utm_source e utm_medium, depois src, e por fim "direto".
export function channel(o: Origin): string {
  const source = o.utm_source ? clean(o.utm_source) : "";
  const medium = o.utm_medium ? clean(o.utm_medium) : "";
  if (source && medium) return `${source}-${medium}`;
  if (source) return source;
  if (o.src) return clean(o.src);
  return "direto";
}

// Código sck, "canal|botão". Se passar de 30 caracteres, corta o canal e mantém o botão.
export function buildSck(o: Origin, position: string): string {
  const btn = clean(position) || "botao";
  const room = 30 - 1 - btn.length;
  const ch = channel(o).slice(0, Math.max(room, 1)).replace(/-+$/g, "");
  return `${ch}|${btn}`.slice(0, 30);
}

// Devolve o link do checkout com sck e UTMs. Mantém os parâmetros que já existem (como off).
export function withOrigin(href: string, o: Origin, position: string): string {
  try {
    const u = new URL(href);
    u.searchParams.set("sck", buildSck(o, position));
    for (const k of UTM_KEYS) {
      const v = o[k];
      if (v && !u.searchParams.has(k)) u.searchParams.set(k, v);
    }
    return u.toString();
  } catch {
    return href;
  }
}
