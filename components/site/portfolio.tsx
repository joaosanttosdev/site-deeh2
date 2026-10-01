import Image from "next/image";

import { SectionHeading } from "@/components/site/section-heading";
import { portfolioCategories, portfolioItems } from "@/lib/site";
import { revealDelay } from "@/lib/reveal";

export function Portfolio() {
  return (
    <section
      id="portfolio"
      className="bg-streaks scroll-mt-24 border-t border-border px-5 py-20 lg:px-20 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          data-reveal
          eyebrow="Portfólio"
          title="Projetos que já viraram marca"
          description="Uma seleção de identidades e logotipos criados para clientes de diferentes segmentos."
        />

        {/* Categorias */}
        <ul
          data-reveal
          style={revealDelay(120)}
          className="mt-10 flex flex-wrap gap-2"
        >
          {portfolioCategories.map((category) => (
            <li
              key={category.name}
              className="group relative rounded-full border border-border bg-secondary/60 px-4 py-1.5 text-sm text-muted-foreground transition-colors hover:border-brand/50 hover:text-foreground"
            >
              <span className="font-medium text-foreground">
                {category.name}
              </span>
              <span className="text-muted-foreground">
                {" "}
                · {category.tags.join(", ")}
              </span>
            </li>
          ))}
        </ul>

        {/* Grade de trabalhos */}
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {portfolioItems.map((item, index) => (
            <figure
              key={item.src}
              data-reveal="zoom"
              style={revealDelay((index % 4) * 90)}
              className="group relative aspect-square overflow-hidden rounded-xl border border-border bg-white"
            >
              <Image
                src={item.src}
                alt={`Projeto de design para ${item.client}`}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                priority={index < 4}
              />
              <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-black/85 via-black/50 to-transparent p-3 pt-8 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-sm font-semibold text-white">{item.client}</p>
                <p className="text-xs text-brand-muted">{item.category}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
