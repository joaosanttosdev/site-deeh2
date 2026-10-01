"use client";

import { useEffect } from "react";

// Fim da entrada: tira o atributo para a transição/atraso do reveal não
// afetar efeitos de hover do elemento.
function finish(el: HTMLElement) {
  el.removeAttribute("data-reveal");
  el.classList.remove("is-visible");
}

function reveal(el: HTMLElement) {
  el.classList.add("is-visible");

  const delay = parseFloat(getComputedStyle(el).transitionDelay) * 1000 || 0;
  const timer = window.setTimeout(done, delay + 1200);
  function done() {
    window.clearTimeout(timer);
    el.removeEventListener("transitionend", onEnd);
    finish(el);
  }
  function onEnd(event: TransitionEvent) {
    if (event.target === el) done();
  }
  el.addEventListener("transitionend", onEnd);
}

/**
 * Anima a entrada dos elementos com `data-reveal` quando aparecem na tela
 * (estilos em app/globals.css). O que já está visível ao carregar a página
 * não anima, para não piscar.
 */
export function RevealObserver() {
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );

    for (const el of elements) {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) finish(el);
    }
    document.documentElement.classList.add("reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          reveal(entry.target as HTMLElement);
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.1 },
    );
    for (const el of elements) {
      if (el.hasAttribute("data-reveal")) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return null;
}
