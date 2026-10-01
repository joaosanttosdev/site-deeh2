"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Menu, ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/site/logo";

// Carregado só quando o menu é aberto pela primeira vez.
const MobileMenu = dynamic(() => import("@/components/site/mobile-menu"), {
  ssr: false,
});
import { navLinks, whatsappUrl } from "@/lib/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [menuLoaded, setMenuLoaded] = useState(false);

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
          <Logo priority />
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

          <Button
            variant="outline"
            size="icon-lg"
            className="rounded-full lg:hidden"
            aria-label="Abrir menu"
            aria-expanded={open}
            onClick={() => {
              setMenuLoaded(true);
              setOpen(true);
            }}
            onPointerEnter={() => setMenuLoaded(true)}
          >
            <Menu />
          </Button>
          {menuLoaded && <MobileMenu open={open} onOpenChange={setOpen} />}
        </div>
      </nav>
    </header>
  );
}
