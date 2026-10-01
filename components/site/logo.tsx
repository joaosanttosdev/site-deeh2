import Image from "next/image";

import { cn } from "@/lib/utils";

/**
 * Sub-logo (brandmark) DeehZigner — usada na navbar e no footer.
 * A marca completa (lockup com "DEEH Zigner") fica no hero.
 */
export function Logo({
  className,
  priority = false,
}: {
  className?: string;
  /** Use na navbar: é a imagem mais visível ao carregar no mobile (LCP). */
  priority?: boolean;
}) {
  return (
    <Image
      src="/brand/deeh-mark.png"
      alt="DeehZigner"
      width={82}
      height={36}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      className={cn("h-9 w-auto", className)}
    />
  );
}
