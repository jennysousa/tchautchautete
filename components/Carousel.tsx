"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Item = { src: string; quote: string; alt: string };

// Carrossel simples com snap, setas e pontos. Funciona por toque e por clique.
export function Carousel({ items }: { items: Item[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  // Pausa o avanço automático enquanto a pessoa interage ou o carrossel está fora da tela.
  const [interacting, setInteracting] = useState(false);
  const [visible, setVisible] = useState(false);
  const paused = interacting || !visible;

  // No celular o slide fica centralizado. Do sm para cima, alinhado ao início.
  const goTo = (i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const slide = track.children[i] as HTMLElement | undefined;
    if (!slide) return;
    const centered = window.innerWidth < 640;
    const offset = centered ? (track.clientWidth - slide.offsetWidth) / 2 : 0;
    track.scrollTo({
      left: slide.offsetLeft - track.offsetLeft - offset,
      behavior: "smooth",
    });
  };

  // Setas andam um slide a partir da posição atual da rolagem. Antes elas
  // iam para o slide "índice ± 1", que no fim da trilha nem sempre é alcançável
  // (o navegador limita a rolagem), e o carrossel ficava preso.
  const step = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const first = track.children[0] as HTMLElement | undefined;
    const second = track.children[1] as HTMLElement | undefined;
    const size = first && second ? second.offsetLeft - first.offsetLeft : track.clientWidth;
    track.scrollBy({ left: dir * size, behavior: "smooth" });
  };

  const update = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const start = track.scrollLeft <= 4;
    const end = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
    setAtStart(start);
    setAtEnd(end);
    if (start) return setIndex(0);
    if (end) return setIndex(items.length - 1);
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
  }, [items.length]);

  // Passa para o próximo depoimento quando o preenchimento do ponto termina.
  const advance = () => {
    const next = index + 1 < items.length ? index + 1 : 0;
    goTo(next);
  };

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), {
      threshold: 0.5,
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [update]);

  return (
    <div
      ref={rootRef}
      onPointerEnter={(e) => e.pointerType === "mouse" && setInteracting(true)}
      onPointerLeave={(e) => e.pointerType === "mouse" && setInteracting(false)}
      onTouchStart={() => setInteracting(true)}
      onTouchEnd={() => setInteracting(false)}
      onFocus={(e) => e.target.matches(":focus-visible") && setInteracting(true)}
      onBlur={() => setInteracting(false)}
    >
      <div
        ref={trackRef}
        onScroll={update}
        className="hide-scrollbar -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-[9vw] pb-2 sm:px-5 md:mx-0 md:px-0"
        tabIndex={0}
        aria-label="Depoimentos de mães"
      >
        {items.map((it) => (
          <figure
            key={it.src}
            className="w-[82vw] shrink-0 snap-center sm:w-[340px] sm:snap-start"
          >
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
          onClick={() => step(-1)}
          disabled={atStart}
          aria-label="Depoimento anterior"
          className="grid h-9 w-9 place-items-center rounded-full border border-line bg-white text-dark transition hover:bg-bg-alt disabled:opacity-30"
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
              className={`relative h-2 overflow-hidden rounded-full bg-line transition-all duration-300 ${
                i === index ? "w-10" : "w-2"
              }`}
            >
              {i === index ? (
                <span
                  key={index}
                  onAnimationEnd={advance}
                  className="carousel-fill absolute inset-0 rounded-full bg-dark"
                  style={{ animationPlayState: paused ? "paused" : "running" }}
                />
              ) : null}
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={() => step(1)}
          disabled={atEnd}
          aria-label="Próximo depoimento"
          className="grid h-9 w-9 place-items-center rounded-full border border-line bg-white text-dark transition hover:bg-bg-alt disabled:opacity-30"
        >
          ›
        </button>
      </div>
    </div>
  );
}
