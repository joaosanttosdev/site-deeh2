import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "@/components/site/section-heading";
import { faq } from "@/lib/site";

function Column({
  items,
  idPrefix,
}: {
  items: typeof faq;
  idPrefix: string;
}) {
  return (
    <Accordion type="single" collapsible className="flex flex-col gap-3">
      {items.map((item, index) => (
        <AccordionItem
          key={item.q}
          value={`${idPrefix}-${index}`}
          className="rounded-xl border border-border bg-card px-5 not-last:border-b"
        >
          <AccordionTrigger className="py-4 text-base font-medium text-white hover:no-underline">
            {item.q}
          </AccordionTrigger>
          <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
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
      className="bg-streaks scroll-mt-24 border-t border-border py-20 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading eyebrow="Dúvidas" title="Perguntas frequentes" />

        <div className="mt-12 grid items-start gap-3 md:grid-cols-2 md:gap-5">
          <Column items={left} idPrefix="l" />
          <Column items={right} idPrefix="r" />
        </div>
      </div>
    </section>
  );
}
