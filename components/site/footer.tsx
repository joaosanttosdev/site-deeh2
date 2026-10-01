import { Logo } from "@/components/site/logo";
import { InstagramIcon, WhatsAppIcon } from "@/components/site/icons";
import { navLinks, site, whatsappUrl } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background px-5 lg:px-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 py-12">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <a href="#top" aria-label="DeehZigner — início">
            <Logo />
          </a>
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex gap-3">
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-brand/50 hover:text-brand"
            >
              <InstagramIcon />
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-brand/50 hover:text-brand"
            >
              <WhatsAppIcon />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-1 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name} · {site.owner}. Todos os
            direitos reservados.
          </p>
          <p>Design gráfico · Identidade visual · Comunicação visual</p>
        </div>
      </div>
    </footer>
  );
}
