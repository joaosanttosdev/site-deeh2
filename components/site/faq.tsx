import { Plus } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faq } from "@/lib/site";

/*
 * Mobile first; a partir de `xl` segue as medidas da prancheta de 1440×810
 * do design em `--u` (1 px do design, escala com a tela até 1920px). Aqui o
 * layout fica em fluxo normal (não absoluto) porque os itens abrem e mudam
 * de altura.
 */
function Column({
  items,
  idPrefix,
}: {
  items: typeof faq;
  idPrefix: string;
}) {
  return (
    <Accordion
      type="single"
      collapsible
      className="flex flex-col gap-3 xl:gap-[calc(13*var(--u))]"
    >
      {items.map((item, index) => (
        <AccordionItem
          key={item.q}
          value={`${idPrefix}-${index}`}
          className="rounded-lg border border-[#1e1e1e] bg-[#161415] px-5 not-last:border-b xl:rounded-[calc(8*var(--u))] xl:px-[calc(20*var(--u))]"
        >
          <AccordionTrigger className="items-center gap-4 py-5 text-[0.95rem] font-semibold text-[#ebf0ec] hover:no-underline **:data-[slot=accordion-trigger-icon]:hidden xl:min-h-[calc(59*var(--u))] xl:py-[calc(10*var(--u))] xl:text-[calc(13.6*var(--u))]">
            {item.q}
            <Plus
              aria-hidden
              className="ml-auto size-4 shrink-0 text-[#6f6e6a] transition-transform duration-200 group-aria-expanded/accordion-trigger:rotate-45 xl:mr-[calc(-1*var(--u))] xl:size-[calc(14*var(--u))]"
            />
          </AccordionTrigger>
          <AccordionContent className="pb-5 text-sm leading-relaxed text-[#a3a3a3] xl:pb-[calc(20*var(--u))] xl:text-[calc(14*var(--u))]">
            {item.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export function Faq() {
  const half = Math.ceil(faq.length / 2);
  const left = faq.slice(0, half);
  const right = faq.slice(half);

  return (
    <section
      id="duvidas"
      className="@container scroll-mt-20 bg-black px-4 py-10 sm:px-6 sm:py-14 xl:p-0"
    >
      <div className="mx-auto [--u:calc(min(100cqw,1920px)/1440)] xl:w-[calc(1440*var(--u))] xl:py-[calc(59*var(--u))]">
        <div className="mx-auto max-w-6xl rounded-xl bg-[#0a0a0a] px-5 py-12 sm:px-10 sm:py-16 xl:mx-0 xl:ml-[calc(54.5*var(--u))] xl:min-h-[calc(692*var(--u))] xl:w-[calc(1331*var(--u))] xl:max-w-none xl:rounded-none xl:pt-[calc(106*var(--u))] xl:pr-[calc(147*var(--u))] xl:pb-[calc(60*var(--u))] xl:pl-[calc(112*var(--u))]">
          <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-[#3d68e0] uppercase xl:gap-[calc(10*var(--u))] xl:text-[calc(11*var(--u))]">
            <span
              aria-hidden
              className="h-px w-8 bg-[#3d68e0] xl:h-[max(1px,calc(1*var(--u)))] xl:w-[calc(19.5*var(--u))]"
            />
            Dúvidas
          </p>
          <h2 className="mt-4 font-heading text-[2rem] leading-tight font-semibold text-[#f3ece2] sm:text-4xl xl:mt-[calc(12*var(--u))] xl:text-[calc(37*var(--u))]">
            Perguntas frequentes
          </h2>

          <div className="mt-10 grid items-start gap-3 md:grid-cols-2 md:gap-[13px] xl:mt-[calc(50*var(--u))] xl:gap-[calc(13*var(--u))]">
            <Column items={left} idPrefix="l" />
            <Column items={right} idPrefix="r" />
          </div>
        </div>
      </div>
    </section>
  );
}
