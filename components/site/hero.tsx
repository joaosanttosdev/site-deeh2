import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { stats, whatsappUrl, site } from "@/lib/site";

const tools = ["Cdr", "Ps", "Ai", "Pr"];

export function Hero() {
  return (
    <section
      id="top"
      className="bg-streaks relative overflow-hidden pt-28 pb-12 lg:pt-36"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-8 lg:px-8">
        {/* Marca */}
        <div className="animate-in-up flex justify-center lg:justify-start">
          <Image
            src="/brand/deeh-hero.png"
            alt="DeehZigner"
            width={630}
            height={513}
            priority
            className="h-auto w-full max-w-[300px] drop-shadow-[0_24px_70px_rgba(53,160,255,0.45)] sm:max-w-[380px]"
          />
        </div>

        {/* Conteúdo */}
        <div className="animate-in-up flex flex-col gap-6 [animation-delay:120ms]">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wide text-brand-muted">
            ✦ Crie sua arte!
          </span>

          <h1 className="font-heading text-4xl font-extrabold leading-[1.05] text-balance sm:text-5xl">
            Transformando <span className="text-gradient">sua ideia</span> em
            sucesso!
          </h1>

          <p className="max-w-xl text-base leading-relaxed text-muted-foreground text-pretty">
            Seu negócio merece um design tão bom quanto o seu produto. Cada
            projeto é planejado e executado detalhadamente, obtendo os melhores
            resultados e deixando sua marca irresistível aos olhos do seu
            público.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            {tools.map((tool) => (
              <span
                key={tool}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary text-xs font-bold text-brand-muted"
              >
                {tool}
              </span>
            ))}
            <div className="ml-1 border-l border-border pl-4">
              <p className="font-heading text-lg font-bold leading-none text-white">
                {site.owner.split(" ")[0].toUpperCase()}
              </p>
              <p className="text-xs text-muted-foreground">{site.role}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-1">
            <Button
              asChild
              size="lg"
              className="h-12 rounded-full px-6 text-base font-semibold"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Iniciar projeto
                <ArrowRight />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 rounded-full px-6 text-base font-semibold"
            >
              <a href="#portfolio">Ver portfólio</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Faixa de números */}
      <div className="mx-auto mt-14 max-w-6xl px-5 lg:px-8">
        <dl className="grid grid-cols-2 gap-x-4 gap-y-8 border-t border-border pt-8 md:grid-cols-4 md:divide-x md:divide-border">
          {stats.map((stat) => (
            <div key={stat.label} className="md:px-6 md:first:pl-0">
              <dt className="font-heading text-3xl font-extrabold text-gradient sm:text-4xl">
                {stat.value}
              </dt>
              <dd className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
