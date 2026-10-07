import Image from "next/image";

import { portfolioCategories, portfolioItems } from "@/lib/site";
import { revealDelay } from "@/lib/reveal";
import { CoverRotator } from "@/components/site/cover-rotator";

/*
 * Mesmo esquema das outras seções: mobile first (1 → 2 colunas) e, a partir
 * de `xl`, as medidas da prancheta de 1440×810 do design em `--u` (1 px do
 * design, escala com a largura disponível até 1920px).
 *
 * Os cards são as categorias do design. Título e tags ficam um pouco mais
 * escuros/maiores que no arquivo para ter contraste e leitura (no design as
 * tags têm 6,6px, branco sobre cinza-claro).
 */
export function Portfolio() {
  return (
    <section
      id="portfolio"
      className="@container relative scroll-mt-20 overflow-hidden bg-black px-5 py-16 sm:py-20 lg:px-20 xl:py-0"
    >
      <Image
        src="/portfolio/bg.jpg"
        alt=""
        fill
        sizes="100vw"
        className="bg-fade-y object-cover object-top"
      />
      <h2 className="sr-only">Portfólio</h2>

      <ul className="relative mx-auto grid max-w-2xl grid-cols-2 gap-3 [--u:calc(min(100cqw,1920px)/1440)] sm:gap-4 xl:w-[calc(1440*var(--u))] xl:max-w-none xl:grid-cols-[repeat(4,calc(335.5*var(--u)))] xl:gap-x-[calc(16.75*var(--u))] xl:gap-y-[calc(12.5*var(--u))] xl:pt-[calc(88.5*var(--u))] xl:pb-[calc(38*var(--u))] xl:pl-[calc(24.5*var(--u))]">
        {portfolioCategories.map((category, index) => {
          const works = portfolioItems.filter(
            (item) => item.category === category.name,
          );
          const link = works.find((item) => item.href);

          return (
            <li
              key={category.name}
              data-reveal="zoom"
              style={revealDelay((index % 4) * 90)}
              className="group relative aspect-square overflow-hidden bg-white"
            >
              {works.length > 0 && (
                <div className="absolute inset-x-[14%] top-[5%] bottom-[52%] sm:inset-x-[8%] sm:bottom-[28%] xl:bottom-[24%] transition-[scale] duration-500 group-hover:scale-105">
                  <CoverRotator items={works} />
                </div>
              )}

              <div className="absolute inset-x-0 bottom-0 px-3 pb-3 sm:px-4 sm:pb-4 xl:px-[calc(13.7*var(--u))] xl:pb-[calc(17*var(--u))]">
                <h3 className="font-[Arial_Black,Arial,Helvetica,sans-serif] text-[13px] leading-none font-black sm:text-[15px] tracking-[0.03em] text-[#6d6e71] uppercase transition-colors duration-300 group-hover:text-[#1f6fb8] xl:text-[max(13px,calc(12*var(--u)))]">
                  {category.name}
                </h3>
                <ul className="mt-1.5 flex flex-wrap gap-1 sm:mt-2 xl:mt-[calc(6*var(--u))] xl:gap-[calc(3*var(--u))]">
                  {category.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-[#e6e7e8] px-1.5 py-0.5 font-[Arial,Helvetica,sans-serif] text-[9px] leading-tight sm:px-2 sm:text-[10px] text-[#58595b] uppercase xl:px-[calc(5*var(--u))] xl:text-[max(9px,calc(7.5*var(--u)))]"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>

              {link && (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${category.name}: ver ${link.client}`}
                  className="absolute inset-0 focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[#1f6fb8]"
                />
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
