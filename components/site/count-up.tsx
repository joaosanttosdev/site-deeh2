"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Conta de 0 até o número de `value` (ex.: "+5.000") quando entra na tela.
 * Textos sem número (ex.: "Qualidade") são exibidos como estão.
 */
export function CountUp({
  value,
  duration = 1600,
}: {
  value: string;
  duration?: number;
}) {
  const match = value.match(/^(\D*)([\d.]+)(\D*)$/);
  const hasNumber = match !== null;
  const target = match ? Number(match[2].replace(/\./g, "")) : 0;
  const ref = useRef<HTMLSpanElement>(null);
  const [current, setCurrent] = useState<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!hasNumber || !el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - t, 3);
          setCurrent(Math.round(target * eased));
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
    };
  }, [hasNumber, target, duration]);

  if (!match) return <>{value}</>;

  const shown =
    current === null ? value : `${match[1]}${current.toLocaleString("pt-BR")}${match[3]}`;

  return (
    <span ref={ref} aria-label={value}>
      {shown}
    </span>
  );
}
