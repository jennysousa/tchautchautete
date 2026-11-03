// Link do checkout da Hotmart. Defina NEXT_PUBLIC_CHECKOUT_URL no build
// (ou troque o valor padrão abaixo). Enquanto não houver link, os botões rolam até a oferta.
export const CHECKOUT_URL =
  process.env.NEXT_PUBLIC_CHECKOUT_URL || "https://pay.hotmart.com/W84796976P?off=sj83yo5z";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

// Prefixa o caminho base para imagens da pasta public.
export const asset = (path: string) => `${BASE}${path}`;

// Aviso de cookies. O componente continua no código, mas fica escondido por enquanto.
// Para mostrar de novo, defina NEXT_PUBLIC_SHOW_COOKIE_BANNER=true no build.
export const SHOW_COOKIE_BANNER = process.env.NEXT_PUBLIC_SHOW_COOKIE_BANNER === "true";

// Página da política de privacidade, usada no aviso de cookies.
export const PRIVACY_URL = `${BASE}/politica-de-privacidade/`;
