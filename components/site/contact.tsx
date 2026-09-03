import { Mail, MapPin, Clock } from "lucide-react";

import { Button } from "@/components/ui/button";
import { BulbMark } from "@/components/site/logo";
import { InstagramIcon, WhatsAppIcon } from "@/components/site/icons";
import { site, whatsappUrl } from "@/lib/site";

const channels = [
  {
    icon: InstagramIcon,
    label: "Instagram",
    value: site.instagramHandle,
    href: site.instagram,
  },
  {
    icon: Mail,
    label: "E-mail",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    icon: MapPin,
    label: "Atendimento",
    value: site.serviceArea,
  },
  {
    icon: Clock,
    label: "Horário",
    value: site.hours,
  },
];

export function Contact() {
  return (
    <section
      id="contato"
      className="scroll-mt-24 border-t border-border bg-background py-20 lg:py-28"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* Info */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
              <span className="h-px w-8 bg-brand/60" aria-hidden="true" />
              Contato
            </div>
            <h2 className="font-heading text-3xl font-extrabold leading-tight sm:text-4xl">
              Vamos conversar sobre{" "}
              <span className="font-script text-gradient font-bold">
                seu projeto?
              </span>
            </h2>
            <p className="text-base text-muted-foreground">
              Tire suas dúvidas ou comece seu projeto agora mesmo.
            </p>
          </div>

          <ul className="flex flex-col gap-4">
            {channels.map((channel) => {
              const Icon = channel.icon;
              const content = (
                <>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-secondary text-brand">
                    <Icon className="size-5" />
                  </span>
                  <span className="flex flex-col">
                    <span className="text-sm font-semibold text-white">
                      {channel.label}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {channel.value}
                    </span>
                  </span>
                </>
              );
              return (
                <li key={channel.label}>
                  {channel.href ? (
                    <a
                      href={channel.href}
                      target={channel.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 rounded-xl p-2 transition-colors hover:bg-secondary/60"
                    >
                      {content}
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-2">{content}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Card CTA */}
        <div className="card-glow flex flex-col items-center gap-6 rounded-3xl border border-brand/25 bg-card p-8 text-center sm:p-10">
          <h3 className="font-heading text-2xl font-bold text-white">
            Pronto para começar?
          </h3>
          <p className="max-w-sm text-sm text-muted-foreground">
            Clique no botão abaixo e me conte sobre o seu projeto. Respondo em
            até 2 horas.
          </p>

          <div className="flex flex-col items-center gap-2">
            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-brand/30 bg-secondary">
              <BulbMark className="h-11 w-11" />
            </div>
            <p className="text-sm font-medium text-foreground/90">{site.owner}</p>
          </div>

          <Button
            asChild
            size="lg"
            className="h-14 w-full max-w-xs rounded-full border-0 bg-[#22c55e] text-base font-semibold text-white hover:bg-[#1eb257]"
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="size-5" />
              Falar no WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
