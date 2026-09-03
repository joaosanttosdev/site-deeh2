import { cn } from "@/lib/utils";

/**
 * Marca DeehZigner recriada em SVG a partir do layout:
 * "DEEH" em bold + assinatura "Zigner" em script, com a lâmpada de bolhas.
 */
export function Logo({
  className,
  withIcon = true,
}: {
  className?: string;
  withIcon?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2 select-none", className)}>
      {withIcon && <BulbMark className="h-7 w-7 shrink-0" />}
      <span className="relative leading-none">
        <span className="font-heading text-xl font-extrabold tracking-tight text-white">
          DEEH
        </span>
        <span className="font-script ml-1 text-lg font-bold text-brand">
          Zigner
        </span>
      </span>
    </span>
  );
}

export function BulbMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      aria-hidden="true"
      role="img"
    >
      <defs>
        <linearGradient id="bulbGrad" x1="12" y1="6" x2="52" y2="58">
          <stop offset="0" stopColor="#8fd0ff" />
          <stop offset="0.5" stopColor="#35a0ff" />
          <stop offset="1" stopColor="#6d5efc" />
        </linearGradient>
      </defs>
      <g fill="url(#bulbGrad)">
        <path d="M32 12c-9.4 0-17 7.2-17 16.2 0 5.6 3 10 6.6 13.2 1.7 1.5 2.6 2.7 3 4.2l.7 2.8h13.4l.7-2.8c.4-1.5 1.3-2.7 3-4.2C50 38.4 53 34 53 28.2 53 19.2 45.4 12 36 12h-4Zm-6.5 40 .8 3.1c.4 1.6 1.9 2.9 3.7 2.9h4c1.8 0 3.3-1.3 3.7-2.9l.8-3.1H25.5Z" />
        <circle cx="14" cy="18" r="4" />
        <circle cx="9" cy="30" r="3" />
        <circle cx="13" cy="42" r="2.4" />
        <circle cx="50" cy="16" r="4.4" />
        <circle cx="55" cy="28" r="3" />
        <circle cx="51" cy="40" r="2.4" />
        <circle cx="32" cy="6" r="3.4" />
        <circle cx="24" cy="9" r="2.2" />
        <circle cx="40" cy="9" r="2.2" />
      </g>
    </svg>
  );
}
