import {
  PenTool,
  Monitor,
  Fingerprint,
  Megaphone,
  Sparkles,
  Package2,
  type LucideIcon,
} from "lucide-react";

import { SectionHeading } from "@/components/site/section-heading";
import { services } from "@/lib/site";

const icons: Record<string, LucideIcon> = {
  "pen-tool": PenTool,
  monitor: Monitor,
  fingerprint: Fingerprint,
  megaphone: Megaphone,
  sparkles: Sparkles,
  "package-2": Package2,
};

export function Services() {
  return (
    <section id="atuacao" className="scroll-mt-24 border-t border-border bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Atuação"
          title="Do conceito à arte final, cuidando de cada detalhe"
          description="Seis frentes de trabalho para dar identidade, consistência e impacto à sua marca — no impresso e no digital."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = icons[service.icon] ?? Sparkles;
            return (
              <article
                key={service.title}
                className="group flex flex-col gap-4 bg-card p-7 transition-colors hover:bg-secondary"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-brand/30 bg-brand/10 text-brand transition-transform group-hover:-translate-y-0.5">
                  <Icon className="size-6" />
                </span>
                <h3 className="font-heading text-xl font-bold text-white">
                  {service.title}
                </h3>
                <span className="h-px w-10 bg-brand/50" aria-hidden="true" />
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
