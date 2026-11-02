// Link do checkout da Hotmart. Defina NEXT_PUBLIC_CHECKOUT_URL no build
// (ou troque o valor padrão abaixo). Enquanto não houver link, os botões rolam até a oferta.
export const CHECKOUT_URL =
  process.env.NEXT_PUBLIC_CHECKOUT_URL || "#oferta";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

// Prefixa o caminho base para imagens da pasta public.
export const asset = (path: string) => `${BASE}${path}`;
