import { BulbMark } from "@/components/site/logo";
import { site } from "@/lib/site";

const skills = [
  "Photoshop",
  "Illustrator",
  "CorelDRAW",
  "Identidade de marca",
  "Arte finalista",
  "Social media",
];

export function About() {
  return (
    <section
      id="sobre"
      className="scroll-mt-24 border-t border-border bg-background py-20 lg:py-28"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[minmax(0,1fr)_1.15fr] lg:gap-16 lg:px-8">
        {/* Retrato */}
        <div className="relative mx-auto w-full max-w-sm">
          <span
            aria-hidden="true"
            className="font-heading pointer-events-none absolute -top-6 left-1/2 -z-0 -translate-x-1/2 text-6xl font-extrabold tracking-tighter text-white/5 sm:text-8xl"
          >
            ANDERSON
          </span>
          <div className="relative z-10 aspect-square overflow-hidden rounded-full border border-brand/30 bg-gradient-to-br from-secondary via-background to-secondary p-1">
            <div className="flex h-full w-full flex-col items-center justify-center gap-3 rounded-full bg-streaks">
              <BulbMark className="h-20 w-20" />
              <span className="font-heading text-5xl font-extrabold text-white">
                AN
              </span>
              <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                DeehZigner
              </span>
            </div>
          </div>
        </div>

        {/* Texto */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            <span className="h-px w-8 bg-brand/60" aria-hidden="true" />
            Sobre
          </div>
          <div>
            <h2 className="font-heading text-3xl font-extrabold leading-tight sm:text-4xl">
              {site.owner}
            </h2>
            <p className="mt-1 text-lg font-medium text-brand-muted">
              {site.role}
            </p>
          </div>

          <div className="space-y-4 text-base leading-relaxed text-muted-foreground text-pretty">
            <p>
              Designer Gráfico com mais de 12 anos de experiência em criação
              visual, identidade de marca, materiais digitais e impressos.
              Atuação em desenvolvimento de artes para redes sociais, rótulos,
              embalagens, comunicação visual e fechamento de arquivos para
              produção.
            </p>
            <p>
              Experiência com atendimento ao cliente, aprovação de materiais e
              criação estratégica para marcas. Domínio de Photoshop, Illustrator,
              CorelDRAW e ferramentas digitais.
            </p>
            <p>
              Atendimento 100% home office, com foco em design criativo e
              comunicação visual de alto impacto.
            </p>
          </div>

          <ul className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-border bg-secondary px-3 py-1 text-sm text-foreground/90"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
