type Item = { q: string; a: string };

// Perguntas frequentes com <details>, acessível e sem JS.
export function Faq({ items }: { items: Item[] }) {
  return (
    <div className="divide-y divide-line rounded-[19px] border border-line bg-white">
      {items.map((it) => (
        <details key={it.q} className="group px-5 py-1 md:px-7">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-left text-[15px] font-bold text-ink md:text-[16px]">
            {it.q}
            <svg
              className="faq-chevron shrink-0 text-dark"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </summary>
          <p className="faq-body pb-5 text-[14.5px] leading-relaxed text-muted">{it.a}</p>
        </details>
      ))}
    </div>
  );
}
