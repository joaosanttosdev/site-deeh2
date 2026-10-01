"use client";

import { useEffect, useState } from "react";
import { Menu, ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
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

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav className="mx-auto flex max-w-[1920px] items-center justify-between gap-4 px-5 py-4 lg:px-20">
        <a href="#top" aria-label="DeehZigner — início" className="shrink-0">
          <Logo />
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-muted-foreground uppercase tracking-wide transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Button
            asChild
            size="lg"
            className="hidden h-11 rounded-full px-5 font-semibold sm:inline-flex"
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              Iniciar projeto
              <ArrowRight />
            </a>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <Button
              variant="outline"
              size="icon-lg"
              className="rounded-full lg:hidden"
              aria-label="Abrir menu"
              onClick={() => setOpen(true)}
            >
              <Menu />
            </Button>
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
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Iniciar projeto
                    <ArrowRight />
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
