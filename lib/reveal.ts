import type { CSSProperties } from "react";

/** Atraso da animação de entrada de um elemento com `data-reveal`. */
export function revealDelay(ms: number) {
  return { "--reveal-delay": `${ms}ms` } as CSSProperties;
}
