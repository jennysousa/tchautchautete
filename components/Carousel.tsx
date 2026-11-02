"use client";

import { useRef, useState } from "react";

type Item = { src: string; quote: string; alt: string };

// Carrossel simples com snap, setas e pontos. Funciona por toque e por clique.
export function Carousel({ items }: { items: Item[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const goTo = (i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const slide = track.children[i] as HTMLElement | undefined;
    if (!slide) return;
    track.scrollTo({ left: slide.offsetLeft - track.offsetLeft, behavior: "smooth" });
  };

  const onScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    // No fim da trilha os últimos slides não conseguem alinhar ao início,
    // então o "mais próximo" nunca chegava ao último. Tratamos o fim à parte.
    const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
    if (atEnd) {
      setIndex(items.length - 1);
      return;
    }
    let best = 0;
    let bestDist = Infinity;
    Array.from(track.children).forEach((c, i) => {
      const el = c as HTMLElement;
      const dist = Math.abs(el.offsetLeft - track.offsetLeft - track.scrollLeft);
      if (dist < bestDist) {
        bestDist = dist;
        best = i;
      }
    });
    setIndex(best);
  };

  return (
    <div>
      <div
        ref={trackRef}
        onScroll={onScroll}
        className="hide-scrollbar -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 md:mx-0 md:px-0"
        tabIndex={0}
        aria-label="Depoimentos de mães"
      >
        {items.map((it) => (
          <figure
            key={it.src}
            className="w-[82%] shrink-0 snap-start sm:w-[340px]"
          >
            <blockquote className="display mb-3 text-[20px] leading-snug text-dark">
              “{it.quote}”
            </blockquote>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={it.src}
              alt={it.alt}
              loading="lazy"
              className="w-full rounded-[8px] border border-line bg-white"
            />
          </figure>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => goTo(Math.max(0, index - 1))}
          aria-label="Depoimento anterior"
          className="grid h-9 w-9 place-items-center rounded-full border border-line bg-white text-dark transition hover:bg-bg-alt"
        >
          ‹
        </button>
        <div className="flex gap-2">
          {items.map((it, i) => (
            <button
              key={it.src}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Ir para o depoimento ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-6 bg-dark" : "w-2 bg-line"
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => goTo(Math.min(items.length - 1, index + 1))}
          aria-label="Próximo depoimento"
          className="grid h-9 w-9 place-items-center rounded-full border border-line bg-white text-dark transition hover:bg-bg-alt"
        >
          ›
        </button>
      </div>
    </div>
  );
}
