import Image from "next/image";

import { cn } from "@/lib/utils";

/**
 * Sub-logo (brandmark) DeehZigner — usada na navbar e no footer.
 * A marca completa (lockup com "DEEH Zigner") fica no hero.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/brand/deeh-mark.png"
      alt="DeehZigner"
      width={605}
      height={266}
      loading="eager"
      className={cn("h-9 w-auto", className)}
    />
  );
}
