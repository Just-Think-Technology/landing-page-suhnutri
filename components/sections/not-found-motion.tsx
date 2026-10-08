"use client";

import { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";
import { siteContent } from "@/content/site";
import { Logo } from "@/components/layout/logo";
import { SiteCta } from "@/components/layout/site-cta";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function NotFoundMotion() {
  const reduced = useReducedMotion();
  const rootRef = useRef<HTMLDivElement>(null);
  const { notFound } = siteContent;

  useEffect(() => {
    if (reduced) return;

    const root = rootRef.current;
    if (!root) return;

    const items = root.querySelectorAll<HTMLElement>("[data-not-found-item]");
    const line = root.querySelector<HTMLElement>("[data-not-found-line]");
    const animations: Array<{ revert: () => void }> = [];

    const showItems = () => {
      items.forEach((element) => {
        element.style.opacity = "1";
        element.style.transform = "none";
      });
      if (line) line.style.transform = "none";
    };

    const failSafe = window.setTimeout(showItems, 1200);

    try {
      if (line) {
        animations.push(
          animate(line, {
            scaleX: [0, 1],
            duration: 380,
            ease: "inOutQuad",
          }),
        );
      }

      if (items.length) {
        animations.push(
          animate(items, {
            opacity: [0, 1],
            y: [16, 0],
            delay: stagger(80),
            duration: 640,
            ease: "outExpo",
          }),
        );
      }
    } catch {
      showItems();
    }

    return () => {
      window.clearTimeout(failSafe);
      animations.forEach((animation) => animation.revert());
    };
  }, [reduced]);

  return (
    <div ref={rootRef} className="mx-auto max-w-xl py-24 md:py-32">
      <div data-not-found-item className="js-hide w-56 sm:w-64">
        <Logo />
      </div>
      <span
        data-not-found-line
        className="mt-4 block h-px w-24 origin-left bg-brand"
      />
      <h1
        data-not-found-item
        className="js-hide mt-8 font-heading text-4xl font-bold tracking-tight text-brand-dark md:text-5xl"
      >
        {notFound.title}
      </h1>
      <p data-not-found-item className="js-hide mt-5 text-base leading-relaxed text-ink md:text-lg">
        {notFound.text}
      </p>
      <div data-not-found-item className="js-hide mt-8 flex flex-col gap-3 sm:flex-row">
        <SiteCta href="/">{notFound.home}</SiteCta>
        <SiteCta href={siteContent.contact.href} variant="outline">
          {notFound.contact}
        </SiteCta>
      </div>
    </div>
  );
}
