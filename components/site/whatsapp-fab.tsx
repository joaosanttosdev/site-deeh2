import { WhatsAppIcon } from "@/components/site/icons";
import { whatsappUrl } from "@/lib/site";

export function WhatsAppFab() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#22c55e] text-white shadow-lg shadow-black/40 transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#22c55e]/50"
    >
      <WhatsAppIcon className="size-7" />
    </a>
  );
}
