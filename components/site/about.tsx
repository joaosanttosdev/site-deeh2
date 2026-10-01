import type { CSSProperties } from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { revealDelay } from "@/lib/reveal";

/*
 * Mesmo esquema do hero: mobile first (arte em cima, texto embaixo) e, a
 * partir de `xl`, réplica exata da prancheta de 1440×810 do design, com tudo
 * medido em `--u` (1 px do design, escala com a largura da tela até 1920px).
 *
 * O texto usa Arial como no design; o parágrafo é comprimido na horizontal
 * (scaleX) exatamente como no arquivo, só no desktop.
 */
const place =
  "xl:absolute xl:left-[calc(var(--x)*var(--u))] xl:top-[calc(var(--y)*var(--u))]";

function at(x: number, y: number) {
  return { "--x": x, "--y": y } as CSSProperties;
}

const arial = "font-[Arial,Helvetica,sans-serif]";

export function About() {
  return (
    <section
      id="sobre"
      className="@container relative scroll-mt-20 overflow-hidden bg-black px-5 pt-16 pb-24 sm:pt-20 lg:px-20 xl:py-0"
    >
      <Image
        src="/about/bg.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-bottom"
      />

      <div className="relative mx-auto flex max-w-xl flex-col [--u:calc(min(100cqw,1920px)/1440)] sm:max-w-2xl xl:block xl:aspect-[1440/810] xl:w-[calc(1440*var(--u))] xl:max-w-none">
        {/* Retrato + ferramentas + "ANDERSON" em arco */}
        <Image
          src="/about/anderson.webp"
          alt="Anderson Nogueira Silva"
          width={1600}
          height={1331}
          sizes="(min-width: 1280px) 42vw, 480px"
          className={cn(
            place,
            "animate-float mx-auto h-auto w-full max-w-[420px] xl:max-w-none xl:w-[calc(604.25*var(--u))]",
          )}
          style={at(146.75, 155.5)}
          data-reveal="left"
        />

        <h2
          className={cn(
            place,
            arial,
            "mt-10 text-[2.75rem] leading-[1.117] font-bold text-white sm:text-[3.25rem] xl:mt-0 xl:text-[calc(56.65*var(--u))]",
          )}
          style={{ ...at(837.4, 223), ...revealDelay(100) }}
          data-reveal="right"
        >
          ANDERSON
          <span className="sr-only"> Nogueira Silva</span>
        </h2>

        <p
          aria-hidden
          className={cn(
            place,
            arial,
            "text-[2rem] leading-[1.117] text-[#91d8f7] sm:text-[2.4rem] xl:text-[calc(41.73*var(--u))]",
          )}
          style={{ ...at(834, 274), ...revealDelay(180) }}
          data-reveal="right"
        >
          NOGUEIRA SILVA
        </p>

        <p
          className={cn(
            place,
            arial,
            "mt-2 text-base leading-[1.117] text-white sm:text-lg xl:mt-0 xl:text-[calc(21.52*var(--u))]",
          )}
          style={{ ...at(835.6, 322), ...revealDelay(260) }}
          data-reveal="right"
        >
          DESIGNER GRÁFICO/ARTE FINALISTA
        </p>

        <p
          className={cn(
            place,
            arial,
            "mt-8 text-base leading-relaxed text-white text-pretty sm:text-lg xl:mt-0 xl:w-[calc(535.5*var(--u))] xl:origin-top-left xl:scale-x-[0.8558] xl:text-justify xl:text-[calc(19.72*var(--u))] xl:leading-[calc(22*var(--u))]",
          )}
          style={{ ...at(836.15, 422), ...revealDelay(340) }}
          data-reveal
        >
          Designer Gráfico com mais de 10 anos de experiência em criação visual,
          identidade de marca, materiais digitais e impressos. Atuação em
          desenvolvimento de artes para redes sociais, rótulos, embalagens,
          comunicação visual e fechamento de arquivos para produção. Experiência
          com atendimento ao cliente, aprovação de materiais e criação
          estratégica para marcas. Domínio de Photoshop, Illustrator, CorelDRAW e
          ferramentas digitais.
        </p>

        <p
          className={cn(
            place,
            arial,
            "mt-4 text-base leading-relaxed text-white text-pretty sm:text-lg xl:mt-0 xl:w-[calc(490*var(--u))] xl:origin-top-left xl:scale-x-[0.889] xl:text-[calc(19.72*var(--u))] xl:leading-[calc(22*var(--u))]",
          )}
          style={{ ...at(836.9, 598), ...revealDelay(420) }}
          data-reveal
        >
          Busco oportunidade home office para atuar com design
          <br className="hidden xl:inline" /> criativo e comunicação visual de
          alto impacto.
        </p>
      </div>
    </section>
  );
}
