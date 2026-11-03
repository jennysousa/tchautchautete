import { CHECKOUT_URL } from "@/lib/config";

function Arrow() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

// Botão curto (mobile first) com microtexto abaixo.
export function Cta({
  position,
  href = CHECKOUT_URL,
  label,
  micro,
  tone = "light",
  center = true,
}: {
  // Seção onde o botão está. Vai para o GTM no clique, para saber qual botão converteu.
  position: string;
  // Por padrão vai para o checkout. Use "#oferta" para rolar até o preço.
  href?: string;
  label: string;
  micro?: string;
  tone?: "light" | "dark";
  center?: boolean;
}) {
  const isCheckout = href === CHECKOUT_URL;
  return (
    <div className={`flex flex-col gap-3 ${center ? "items-center text-center" : "items-start"}`}>
      <a
        href={href}
        className="cta"
        data-track={isCheckout ? "cta-checkout" : "cta-oferta"}
        data-cta-position={position}
        data-cta-label={label}
        data-product="ttt"
      >
        {label}
        <span className="cta-arrow">
          <Arrow />
        </span>
      </a>
      {micro ? (
        <p className={`text-[12px] ${tone === "dark" ? "text-white/80" : "text-muted"}`}>
          {micro}
        </p>
      ) : null}
    </div>
  );
}
