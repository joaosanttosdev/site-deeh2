import type { CSSProperties } from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { stats } from "@/lib/site";
import { CountUp } from "@/components/site/count-up";

/*
 * Mobile first: no celular e no tablet o hero é uma coluna centralizada.
 * A partir de `xl` ele vira uma réplica exata do design (prancheta de
 * 1440×810): cada elemento é posicionado pelas coordenadas do arquivo e
 * todas as medidas são multiplicadas por `--u` (1 px do design), que escala
 * com a largura da tela até 1920px — as proporções nunca mudam.
 *
 * Uso: `className={place}` + `style={at(x, y, largura?)}`.
 */
const place =
  "xl:absolute xl:left-[calc(var(--x)*var(--u))] xl:top-[calc(var(--y)*var(--u))]";
const sized = "xl:w-[calc(var(--w)*var(--u))]";

function at(x: number, y: number, w?: number) {
  return { "--x": x, "--y": y, "--w": w } as CSSProperties;
}

const tools = [
  { src: "/hero/tool-corel.webp", alt: "CorelDRAW" },
  { src: "/hero/tool-photoshop.webp", alt: "Photoshop" },
  { src: "/hero/tool-illustrator.webp", alt: "Illustrator" },
  { src: "/hero/tool-premiere.webp", alt: "Premiere" },
];

// Posição (x) de cada número e das linhas divisórias na prancheta.
const statX = [118, 427, 753, 1060];
const dividerX = [392.5, 722.25, 1029.25];

export function Hero() {
  return (
    <section
      id="top"
      className="@container relative overflow-hidden bg-black px-5 pt-28 pb-14 sm:pt-32 lg:px-20 xl:py-0"
    >
      <Image
        src="/hero/bg.jpg"
        alt=""
        fill
        fetchPriority="high"
        sizes="100vw"
        className="animate-ken-burns object-cover"
      />

      <div className="relative mx-auto flex max-w-xl flex-col items-center text-center [--u:calc(min(100cqw,1920px)/1440)] sm:max-w-2xl xl:block xl:aspect-[1440/810] xl:w-[calc(1440*var(--u))] xl:max-w-none xl:text-left">
        {/* Marca */}
        <Image
          src="/hero/logo.webp"
          alt="DeehZigner"
          width={1400}
          height={1291}
          loading="eager"
          fetchPriority="high"
          sizes="(min-width: 1280px) 40vw, 360px"
          className={cn(
            place,
            sized,
            "animate-in-up-float h-auto w-[250px] sm:w-[340px]",
          )}
          style={at(174.5, 96, 537)}
        />

        {/* Crie sua arte */}
        <Image
          src="/hero/crie-sua-arte.webp"
          alt="Crie sua arte!!!"
          width={1200}
          height={616}
          loading="eager"
          sizes="(min-width: 1280px) 30vw, 300px"
          className={cn(
            place,
            sized,
            "animate-in-up-breathe mt-8 h-auto w-[270px] [animation-delay:80ms,780ms] sm:w-[340px] xl:mt-0",
          )}
          style={at(845.75, 79.75, 429)}
        />

        {/* Título */}
        <h1
          className={cn(
            place,
            "animate-in-up mt-6 font-display text-[2.6rem] leading-[1] font-extrabold text-white [animation-delay:140ms] [text-shadow:0_0_14px_rgba(0,0,0,0.75)] sm:text-[3.25rem] xl:mt-0 xl:text-[calc(49*var(--u))] xl:leading-[calc(41*var(--u))] xl:tracking-[0.02em]",
          )}
          style={at(851, 309)}
        >
          Transformando
          <br />
          <span className="text-[#91d8f7]">sua ideia</span> em
          <br />
          sucesso!
          <Image
            src="/hero/bulb.webp"
            alt=""
            width={220}
            height={240}
            className="animate-glow relative top-[0.12em] -mt-[0.4em] ml-[0.45em] inline-block h-[1.02em] w-auto align-baseline"
          />
        </h1>

        {/* Texto */}
        <p
          className={cn(
            place,
            sized,
            "animate-in-up mt-5 font-display text-base leading-snug font-extrabold text-white text-pretty [animation-delay:200ms] sm:text-lg xl:mt-0 xl:text-justify xl:text-[calc(15.6*var(--u))] xl:leading-[calc(19.3*var(--u))] xl:tracking-[-0.045em] xl:[text-align-last:justify]",
          )}
          style={at(855, 442, 387)}
        >
          Seu negócio merece um design tão bom quanto o seu produto. Cada
          projeto é planejado e executado detalhadamente, obtendo os melhores
          resultados, deixando sua marca irresistível aos olhos do seu <br className="hidden xl:inline" />
          público.
        </p>

        {/* Ferramentas */}
        <ul
          className={cn(
            place,
            "animate-in-up mt-7 flex items-center gap-4 [animation-delay:260ms] xl:mt-0 xl:gap-[calc(18*var(--u))]",
          )}
          style={at(852.5, 561.75)}
        >
          {tools.map((tool) => (
            <li key={tool.alt}>
              <Image
                src={tool.src}
                alt={tool.alt}
                title={tool.alt}
                width={140}
                height={140}
                className="size-9 transition-transform duration-300 hover:-translate-y-1 hover:scale-110 xl:size-[calc(34.75*var(--u))]"
              />
            </li>
          ))}
        </ul>

        {/* Assinatura */}
        <p
          className={cn(
            place,
            "animate-in-up mt-5 flex flex-col items-end font-display text-[1.75rem] leading-none font-black text-white [animation-delay:260ms] xl:mt-0 xl:text-[calc(32*var(--u))]",
          )}
          style={at(1076, 562)}
        >
          ANDERSON
          <span className="-mt-[0.45em] font-[Arial,Helvetica,sans-serif] text-[0.53em] font-normal text-[#ffcc00]">
            Designer Gráfico
          </span>
        </p>

        {/* Linha horizontal + divisórias (somente no layout do design) */}
        <div
          aria-hidden
          className="hidden bg-[#91d8f7] xl:absolute xl:top-[calc(619*var(--u))] xl:left-[calc(100.75*var(--u))] xl:block xl:h-[calc(1.5*var(--u))] xl:w-[calc(1227.75*var(--u))]"
        />
        {dividerX.map((x) => (
          <div
            key={x}
            aria-hidden
            className="hidden bg-[#91d8f7] xl:absolute xl:top-[calc(652.75*var(--u))] xl:left-[calc(var(--x)*var(--u))] xl:block xl:h-[calc(101.25*var(--u))] xl:w-[calc(1.75*var(--u))]"
            style={{ "--x": x } as CSSProperties}
          />
        ))}

        {/* Números */}
        <dl className="order-7 mt-10 grid w-full grid-cols-2 gap-y-7 border-t border-[#91d8f7] pt-7 text-left xl:contents">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={cn(
                place,
                "flex flex-col px-3 xl:border-0 xl:px-0",
                index % 2 === 1 && "border-l border-[#91d8f7]",
              )}
              style={at(statX[index], 663)}
            >
              <dt className="font-display text-[1.7rem] leading-none font-extrabold text-[#91d8f7] uppercase sm:text-[2.5rem] xl:text-[calc(46*var(--u))]">
                <CountUp value={stat.value} />
              </dt>
              <dd className="mt-1.5 font-[Arial,Helvetica,sans-serif] text-[0.7rem] leading-tight text-white uppercase sm:text-sm xl:mt-0 xl:pl-[calc(5*var(--u))] xl:text-[calc(14*var(--u))]">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
