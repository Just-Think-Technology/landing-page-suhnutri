"use client";

import { useEffect, useRef } from "react";
import { animate, onScroll, stagger } from "animejs";
import { siteContent } from "@/content/site";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/layout/section-heading";
import { MotionReveal } from "@/components/motion/motion-reveal";
import { useActiveIndex } from "@/hooks/useIntersection";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "cn";

export function Services() {
  const itemRefs = useRef<Array<HTMLElement | null>>([]);
  const active = useActiveIndex(itemRefs);
  const reduced = useReducedMotion();
  const { services } = siteContent;

  useEffect(() => {
    if (reduced) return;

    const animations: Array<{ revert: () => void }> = [];

    itemRefs.current.forEach((article) => {
      if (!article) return;
      const index = article.querySelector<HTMLElement>("[data-service-index]");
      const items = article.querySelectorAll<HTMLElement>("[data-service-list] > li");

      if (index) {
        animations.push(
          animate(index, {
            opacity: [0.45, 1, 0.45],
            ease: "linear",
            autoplay: onScroll({
              target: article,
              enter: "bottom top",
              leave: "top bottom",
              sync: true,
            }),
          }),
        );
      }

      if (items.length) {
        animations.push(
          animate(items, {
            opacity: [0.45, 1, 0.45],
            y: [12, 0, 12],
            delay: stagger(40),
            ease: "outCubic",
            autoplay: onScroll({
              target: article,
              enter: "bottom top",
              leave: "top bottom",
              sync: true,
            }),
          }),
        );
      }
    });

    return () => {
      animations.forEach((animation) => animation.revert());
    };
  }, [reduced]);

  return (
    <section id="servicos" className="scroll-mt-24 bg-surface" aria-labelledby="servicos-titulo">
      <Container className="py-20 md:py-28">
        <MotionReveal>
          <SectionHeading
            id="servicos-titulo"
            eyebrow={services.eyebrow}
            title={services.title}
            text={services.text}
          />
        </MotionReveal>

        <div className="mt-14 lg:grid lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <ol className="mb-10 hidden gap-3 lg:sticky lg:top-28 lg:mb-0 lg:flex lg:h-fit lg:flex-col">
            {services.groups.map((group, index) => (
              <li key={group.index}>
                <a
                  href={`#servico-${group.index}`}
                  className={cn(
                    "flex items-baseline gap-4 border-l-2 py-2 pl-4 transition-colors",
                    active === index
                      ? "border-brand-dark text-brand-dark"
                      : "border-transparent text-ink",
                  )}
                  aria-current={active === index ? "true" : undefined}
                >
                  <span className="font-heading text-sm font-bold">{group.index}</span>
                  <span className="font-heading text-lg font-bold">{group.title}</span>
                </a>
              </li>
            ))}
          </ol>

          <div className="flex flex-col gap-16 md:gap-24">
            {services.groups.map((group, index) => (
              <article
                key={group.index}
                data-service-article
                id={`servico-${group.index}`}
                ref={(node) => {
                  itemRefs.current[index] = node;
                }}
                className="scroll-mt-28 lg:min-h-[58vh]"
              >
                <p
                  data-service-index
                  className={cn(
                    "font-heading text-5xl font-bold transition-colors md:text-6xl",
                    active === index ? "text-brand-dark" : "text-brand-light",
                  )}
                >
                  {group.index}
                </p>
                <h3 className="mt-4 font-heading text-2xl font-bold text-ink md:text-3xl">
                  {group.title}
                </h3>
                <p className="mt-3 max-w-xl text-base leading-relaxed text-ink">{group.text}</p>
                <ul data-service-list className="mt-6 space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="text-base text-ink">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
