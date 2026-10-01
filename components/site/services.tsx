import type { CSSProperties } from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { services } from "@/lib/site";
import { revealDelay } from "@/lib/reveal";

/*
 * Mesmo esquema do hero: mobile first (lista em um card), e a partir de `xl`
 * réplica exata da prancheta de 1440×810 do design, com tudo medido em `--u`
 * (1 px do design, escala com a largura da tela até 1920px).
 */
const place =
  "xl:absolute xl:left-[calc(var(--x)*var(--u))] xl:top-[calc(var(--y)*var(--u))]";

function at(x: number, y: number, w?: number) {
  return { "--x": x, "--y": y, "--w": w } as CSSProperties;
}

// Coordenadas de cada serviço na prancheta (mesma ordem de `services`):
// ícone (x, y, largura) e bloco de texto (x, y).
const layout = [
  { icon: [116.25, 164, 93.75], text: [229, 162] },
  { icon: [719.5, 164, 92.5], text: [829, 162] },
  { icon: [115.5, 383.75, 94], text: [229, 371] },
  { icon: [716, 379, 93.75], text: [829, 371] },
  { icon: [94, 590.5, 120.25], text: [229, 578] },
  { icon: [719, 587, 94.5], text: [829, 578] },
] as const;

// Proporção (largura/altura) de cada ícone exportado.
const iconSize: Record<string, [number, number]> = {
  "design-grafico": [375, 376],
  "design-digital": [370, 376],
  "identidade-visual": [376, 339],
  "comunicacao-visual": [375, 376],
  logotipos: [481, 372],
  rotulos: [378, 378],
};

// Divisórias verticais entre as colunas: [y, altura].
const dividers = [
  [157, 142.25],
  [360, 142.5],
  [573.75, 142.25],
] as const;

export function Services() {
  return (
    <section
      id="atuacao"
      className="@container scroll-mt-20 bg-black px-5 py-10 sm:py-14 lg:px-20 xl:py-0"
    >
      <h2 className="sr-only">Atuação</h2>
      <div className="relative mx-auto [--u:calc(min(100cqw,1920px)/1440)] xl:aspect-[1440/810] xl:w-[calc(1440*var(--u))]">
        {/* Fundo do card (no desktop é só decoração; os itens ficam na prancheta) */}
        <div
          aria-hidden
          data-reveal="zoom"
          className="hidden rounded-[calc(8*var(--u))] bg-[#1b1b1c] xl:absolute xl:top-[calc(40*var(--u))] xl:left-[calc(58*var(--u))] xl:block xl:h-[calc(729.5*var(--u))] xl:w-[calc(1323.75*var(--u))]"
        />
        {dividers.map(([y, h]) => (
          <div
            key={y}
            aria-hidden
            className="hidden bg-[#58595b] xl:absolute xl:top-[calc(var(--y)*var(--u))] xl:left-[calc(670.5*var(--u))] xl:block xl:h-[calc(var(--h)*var(--u))] xl:w-[max(1px,calc(0.75*var(--u)))]"
            style={{ "--y": y, "--h": h } as CSSProperties}
          />
        ))}

        <ul className="mx-auto grid max-w-3xl rounded-xl bg-[#1b1b1c] px-5 py-2 sm:px-8 md:grid-cols-2 md:py-6 xl:contents">
          {services.map((service, index) => {
            const [iconX, iconY, iconW] = layout[index].icon;
            const [textX, textY] = layout[index].text;
            const [w, h] = iconSize[service.icon];

            return (
              <li
                key={service.title}
                className={cn(
                  "group flex items-start gap-4 py-6 sm:gap-5 md:py-6 xl:contents",
                  index > 0 && "border-t border-[#58595b] md:border-t-0",
                  index % 2 === 0
                    ? "md:pr-7"
                    : "md:border-l md:border-[#58595b] md:pl-7",
                )}
              >
                <Image
                  src={`/services/${service.icon}.webp`}
                  alt=""
                  width={w}
                  height={h}
                  sizes="(min-width: 1280px) 9vw, 64px"
                  data-reveal="zoom"
                  className={cn(
                    place,
                    "h-auto w-14 shrink-0 transition-[scale,filter] duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_14px_rgba(145,216,247,0.7)] sm:w-16 xl:w-[calc(var(--w)*var(--u))]",
                  )}
                  style={{
                    ...at(iconX, iconY, iconW),
                    ...revealDelay((index % 2) * 120 + Math.floor(index / 2) * 80),
                  }}
                />

                <div
                  data-reveal
                  className={place}
                  style={{
                    ...at(textX, textY),
                    ...revealDelay(
                      (index % 2) * 120 + Math.floor(index / 2) * 80 + 100,
                    ),
                  }}
                >
                  <h3 className="font-display text-[1.35rem] leading-tight font-bold text-[#91d8f7] transition-colors duration-300 group-hover:text-[#c8ecfc] xl:text-[calc(24.5*var(--u))] xl:leading-[calc(24*var(--u))] xl:whitespace-nowrap">
                    {service.title}
                  </h3>
                  <span
                    aria-hidden
                    className="mt-2 block h-px w-32 origin-left bg-[#91d8f7] transition-[scale] duration-500 group-hover:scale-x-[1.35] xl:absolute xl:top-[calc(33.25*var(--u))] xl:left-[calc(8.6*var(--u))] xl:mt-0 xl:h-[max(1px,calc(0.75*var(--u)))] xl:w-[calc(197.25*var(--u))]"
                  />
                  <p className="mt-3 font-[Arial,Helvetica,sans-serif] text-sm leading-relaxed text-white xl:mt-[calc(26*var(--u))] xl:text-[calc(14*var(--u))] xl:leading-[calc(15.7*var(--u))] xl:whitespace-pre-line">
                    {service.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
