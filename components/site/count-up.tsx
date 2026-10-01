"use client";

import { useEffect, useRef } from "react";

const NUMBER = /^(\D*)([\d.]+)(\D*)$/;

/**
 * Conta de 0 até o número de `value` (ex.: "+5.000") quando entra na tela.
 * Textos sem número (ex.: "Qualidade") são exibidos como estão.
 *
 * Atualiza o texto direto no DOM (sem estado do React) para não re-renderizar
 * a cada quadro. O HTML do servidor já traz o valor final.
 */
export function CountUp({
  value,
  duration = 1600,
}: {
  value: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    const match = value.match(NUMBER);
    if (!el || !match) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const [, prefix, digits, suffix] = match;
    const target = Number(digits.replace(/\./g, ""));
    const render = (n: number) => {
      el.textContent = `${prefix}${n.toLocaleString("pt-BR")}${suffix}`;
    };

    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          render(Math.round(target * (1 - Math.pow(1 - t, 3))));
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      el.textContent = value;
    };
  }, [value, duration]);

  if (!NUMBER.test(value)) return <>{value}</>;

  return (
    <span ref={ref} aria-label={value}>
      {value}
    </span>
  );
}
