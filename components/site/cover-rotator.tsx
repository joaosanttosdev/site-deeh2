"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";
import type { PortfolioItem } from "@/lib/site";

// Posição no rodízio pelo relógio: todos os cards calculam o mesmo "tick",
// então trocam de imagem juntos, não importa quando entraram na tela.
const tickAt = (interval: number) => Math.floor(Date.now() / interval);

/**
 * Capa do card de categoria: alterna (crossfade) entre os trabalhos a cada
 * `interval` ms, sincronizado entre todos os cards (mesmo instante de troca)
 * e só enquanto o card está na tela.
 */
export function CoverRotator({
  items,
  interval = 2800,
}: {
  items: PortfolioItem[];
  interval?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el || items.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let timer = 0;
    const sync = () => setIndex(tickAt(interval) % items.length);
    // Agenda a próxima troca exatamente na virada do próximo tick.
    const schedule = () => {
      timer = window.setTimeout(
        () => {
          sync();
          schedule();
        },
        interval - (Date.now() % interval),
      );
    };

    const observer = new IntersectionObserver(([entry]) => {
      window.clearTimeout(timer);
      if (entry.isIntersecting) {
        sync();
        schedule();
      }
    });
    observer.observe(el);

    return () => {
      observer.disconnect();
      window.clearTimeout(timer);
    };
  }, [items.length, interval]);

  return (
    <div ref={ref} className="absolute inset-0">
      {items.map((item, i) => (
        <Image
          key={item.src}
          src={item.src}
          alt={`Projeto de design para ${item.client}`}
          fill
          sizes="(min-width: 1280px) 22vw, (min-width: 640px) 45vw, 90vw"
          className={cn(
            "object-cover transition-opacity duration-700",
            i === index ? "opacity-100" : "opacity-0",
          )}
          aria-hidden={i !== index}
        />
      ))}
    </div>
  );
}
