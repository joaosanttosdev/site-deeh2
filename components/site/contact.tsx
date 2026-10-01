import type { CSSProperties } from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { WhatsAppIcon } from "@/components/site/icons";
import { site, whatsappUrl } from "@/lib/site";

/*
 * Mesmo esquema do hero: mobile first (texto em cima, card embaixo) e, a
 * partir de `xl`, réplica exata da prancheta de 1440×810 do design, com tudo
 * medido em `--u` (1 px do design, escala com a largura da tela até 1920px).
 *
 * Textos em Arial como no design; `leading-[1.117]` faz o topo da linha
 * coincidir com o topo do texto no arquivo. Alguns textos do design são
 * levemente comprimidos/esticados na horizontal (scaleX), só no desktop.
 */
const place =
  "xl:absolute xl:left-[calc(var(--x)*var(--u))] xl:top-[calc(var(--y)*var(--u))]";

function at(x: number, y: number) {
  return { "--x": x, "--y": y } as CSSProperties;
}

const arial = "font-[Arial,Helvetica,sans-serif]";

type Channel = {
  icon: string;
  /** Tamanho do ícone na prancheta (largura, altura). */
  size: [number, number];
  label: string;
  value: string;
  href?: string;
  /** Topo da caixa do ícone na prancheta. */
  y: number;
};

const channels: Channel[] = [
  {
    icon: "instagram",
    size: [22.5, 23.5],
    label: "Instagram",
    value: site.instagramHandle,
    href: site.instagram,
    y: 422.25,
  },
  {
    icon: "email",
    size: [19.5, 13.25],
    label: "E-mail",
    value: site.email,
    href: `mailto:${site.email}`,
    y: 499,
  },
  {
    icon: "location",
    size: [16.5, 26],
    label: "Atendimento",
    value: site.serviceArea,
    y: 575,
  },
  {
    icon: "clock",
    size: [19, 19],
    label: "Horário",
    value: site.hours,
    y: 649.75,
  },
];

export function Contact() {
  return (
    <section
      id="contato"
      className="@container relative scroll-mt-20 overflow-hidden bg-black pt-16 pb-24 sm:pt-20 xl:p-0"
    >
      <Image
        src="/about/bg.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-bottom"
      />

      <div className="relative mx-auto flex max-w-xl flex-col px-5 [--u:calc(min(100cqw,1920px)/1440)] sm:max-w-2xl xl:block xl:aspect-[1440/810] xl:w-[calc(1440*var(--u))] xl:max-w-none xl:px-0">
        {/* Rótulo */}
        <p
          className={cn(
            place,
            arial,
            "flex items-center gap-[0.35em] text-sm leading-[1.117] font-bold text-[#91d8f7] xl:text-[calc(16.2*var(--u))]",
          )}
          style={at(90, 210.4)}
        >
          <span
            aria-hidden
            className="h-[2px] w-[0.71em] bg-[#91d8f7] xl:h-[calc(1.5*var(--u))]"
          />
          CONTATO
        </p>

        {/* Título */}
        <h2
          className={cn(
            place,
            arial,
            "mt-3 text-[2.15rem] leading-[1.05] font-bold text-white sm:text-[2.75rem] xl:mt-0 xl:text-[calc(47.67*var(--u))] xl:leading-[calc(48.1*var(--u))] xl:whitespace-nowrap",
          )}
          style={at(91.3, 241.9)}
        >
          Vamos conversar sobre <br className="hidden xl:inline" />
          seu{" "}
          <span className="-ml-[0.1em] inline-block bg-[linear-gradient(90deg,#2b2db8_0%,#157edc_22%,#00ccff_48%,#00ccff_100%)] bg-clip-text pr-[0.15em] font-vibes text-[1.1em] leading-none font-normal text-transparent [-webkit-background-clip:text] xl:text-[calc(48.82*var(--u))] xl:leading-[calc(48.1*var(--u))]">
            projeto?
          </span>
        </h2>

        {/* Subtítulo */}
        <p
          className={cn(
            place,
            arial,
            "mt-4 text-base leading-[1.117] font-bold text-white xl:mt-0 xl:origin-top-left xl:scale-x-[0.9334] xl:text-[calc(16.2*var(--u))] xl:whitespace-nowrap",
          )}
          style={at(88.2, 362.45)}
        >
          Tire suas dúvidas ou comece seu projeto agora mesmo.
        </p>

        {/* Canais */}
        <ul className="mt-8 flex flex-col gap-5 xl:contents">
          {channels.map((channel) => {
            const [iconW, iconH] = channel.size;
            const value = (
              <span
                className={cn(
                  "block text-[0.95rem] leading-[1.117] xl:mt-[calc(3.9*var(--u))] xl:-ml-[calc(1.1*var(--u))] xl:origin-top-left xl:scale-x-[0.9663] xl:text-[calc(17.16*var(--u))] xl:whitespace-nowrap",
                  channel.href ? "text-[#91d8f7]" : "text-white",
                )}
              >
                {channel.value}
              </span>
            );

            return (
              <li
                key={channel.label}
                className="flex items-center gap-4 xl:contents"
              >
                <span
                  className={cn(
                    place,
                    "flex size-12 shrink-0 items-center justify-center rounded-[10px] border border-[#91d8f7] bg-black xl:size-auto xl:h-[calc(50.5*var(--u))] xl:w-[calc(49.75*var(--u))] xl:rounded-[calc(10*var(--u))]",
                  )}
                  style={at(88.75, channel.y)}
                >
                  <Image
                    src={`/contact/${channel.icon}.webp`}
                    alt=""
                    width={iconW * 4}
                    height={iconH * 4}
                    className="h-auto w-[calc(var(--w)*1px)] xl:w-[calc(var(--w)*var(--u))]"
                    style={{ "--w": iconW } as CSSProperties}
                  />
                </span>

                <div
                  className={cn(place, arial, "min-w-0 text-white")}
                  style={at(153.2, channel.y + 4.5)}
                >
                  <span className="block text-[1.05rem] leading-[1.117] font-bold xl:origin-top-left xl:scale-x-[0.9663] xl:text-[calc(17.16*var(--u))]">
                    {channel.label}
                  </span>
                  {channel.href ? (
                    <a
                      href={channel.href}
                      target={
                        channel.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel="noopener noreferrer"
                      className="break-words hover:underline"
                    >
                      {value}
                    </a>
                  ) : (
                    value
                  )}
                </div>
              </li>
            );
          })}
        </ul>

        {/* Card CTA */}
        <div className="relative mt-12 flex flex-col items-center rounded-2xl border-[1.5px] border-[#91d8f7] bg-black px-6 py-9 text-center xl:contents">
          <span
            aria-hidden
            className="hidden xl:absolute xl:top-[calc(244*var(--u))] xl:left-[calc(732.5*var(--u))] xl:block xl:h-[calc(422.75*var(--u))] xl:w-[calc(589.75*var(--u))] xl:rounded-[calc(16*var(--u))] xl:border-[calc(1.5*var(--u))] xl:border-[#91d8f7] xl:bg-black"
          />

          <h3
            className={cn(
              place,
              arial,
              "text-2xl leading-[1.117] font-bold text-white xl:w-[calc(589.75*var(--u))] xl:text-[calc(23.87*var(--u))]",
            )}
            style={at(732.5, 287.35)}
          >
            <span className="inline-block xl:scale-x-[1.0264]">
              Pronto para começar?
            </span>
          </h3>

          <p
            className={cn(
              place,
              arial,
              "mt-4 max-w-sm text-base leading-snug text-white xl:mt-0 xl:w-[calc(589.75*var(--u))] xl:max-w-none xl:text-[calc(17.55*var(--u))] xl:leading-[calc(23.5*var(--u))]",
            )}
            style={at(732.5, 328.5)}
          >
            <span className="inline-block xl:scale-x-[0.9213]">
              Clique no botão abaixo e me conte sobre o seu{" "}
              <br className="hidden xl:inline" />
              projeto. Respondo em até 2 horas
            </span>
          </p>

          <Image
            src="/contact/avatar.webp"
            alt={site.owner}
            width={300}
            height={300}
            className={cn(
              place,
              "mt-7 size-24 rounded-full xl:mt-0 xl:size-[calc(98.75*var(--u))]",
            )}
            style={at(978, 408)}
          />

          <p
            className={cn(
              place,
              arial,
              "mt-3 text-[0.95rem] leading-[1.117] text-white xl:mt-0 xl:w-[calc(589.75*var(--u))] xl:text-[calc(15.38*var(--u))]",
            )}
            style={at(732.5, 519)}
          >
            <span className="inline-block xl:scale-x-[0.9213]">
              {site.owner}
            </span>
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              place,
              arial,
              "mt-7 flex h-14 w-full max-w-[244px] items-center justify-center gap-2.5 rounded-[10px] bg-[#33cc66] text-base font-bold text-white transition-colors hover:bg-[#2db85b] xl:mt-0 xl:h-[calc(56*var(--u))] xl:w-[calc(244*var(--u))] xl:max-w-none xl:gap-[calc(9.3*var(--u))] xl:rounded-[calc(10*var(--u))] xl:text-[calc(16.15*var(--u))]",
            )}
            style={at(904.5, 569)}
          >
            <WhatsAppIcon className="size-[1.2em] shrink-0" />
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
