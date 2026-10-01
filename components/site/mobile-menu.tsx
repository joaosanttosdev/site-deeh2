"use client";

import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { Logo } from "@/components/site/logo";
import { navLinks, whatsappUrl } from "@/lib/site";

/**
 * Menu lateral do mobile. Fica num arquivo próprio para a navbar carregá-lo
 * só no primeiro clique (tira o Radix Dialog do JS inicial).
 */
export default function MobileMenu({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-[300px] gap-0">
        <SheetHeader>
          <SheetTitle className="text-left">
            <Logo />
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-1 px-4 pb-6">
          {navLinks.map((link) => (
            <SheetClose asChild key={link.href}>
              <a
                href={link.href}
                className="rounded-lg px-3 py-3 text-base font-medium text-foreground/90 transition-colors hover:bg-muted"
              >
                {link.label}
              </a>
            </SheetClose>
          ))}
          <Button
            asChild
            size="lg"
            className="mt-4 h-11 w-full rounded-full font-semibold"
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              Iniciar projeto
              <ArrowRight />
            </a>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
