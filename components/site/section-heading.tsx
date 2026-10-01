import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  align = "left",
  ...rest
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  className?: string;
  align?: "left" | "center";
  "data-reveal"?: boolean | string;
}) {
  return (
    <div
      {...rest}
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow && (
        <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
          <span className="h-px w-8 bg-brand/60" aria-hidden="true" />
          {eyebrow}
        </div>
      )}
      <h2 className="font-heading text-3xl font-bold leading-tight text-balance sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-base text-muted-foreground text-pretty">
          {description}
        </p>
      )}
    </div>
  );
}
