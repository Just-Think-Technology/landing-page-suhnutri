"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { animate, onScroll, stagger } from "animejs";
import { siteContent } from "@/content/site";
import { Container } from "@/components/layout/container";
import { SiteCta } from "@/components/layout/site-cta";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useScrollProgress } from "@/hooks/useScrollProgress";

export function Hero() {
  const reduced = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useScrollProgress(sectionRef, (progress) => {
    const image = imageRef.current;
    if (!image || reduced) {
      if (image) image.style.transform = "none";
      return;
    }
    const shift = progress * -28;
    image.style.transform = `translate3d(0, ${shift}px, 0) scale(${1.04 - progress * 0.04})`;
  });

  useEffect(() => {
    if (reduced) return;

    const items = document.querySelectorAll<HTMLElement>("[data-hero-item]");
    const photo = document.querySelector<HTMLElement>("[data-hero-photo]");
    const section = sectionRef.current;
    const animations: Array<{ revert: () => void }> = [];

    const failSafe = window.setTimeout(() => {
      document
        .querySelectorAll<HTMLElement>("[data-hero-item], [data-hero-photo]")
        .forEach((element) => {
          if (getComputedStyle(element).opacity === "0") {
            element.style.opacity = "1";
          }
        });
    }, 1200);

    try {
      if (items.length) {
        animations.push(
          animate(items, {
            opacity: [0, 1],
            y: [22, 0],
            duration: 760,
            delay: stagger(90),
            ease: "outExpo",
          }),
        );
      }

      if (photo) {
        animations.push(
          animate(photo, {
            opacity: [0, 1],
            scale: [1.06, 1],
            duration: 1000,
            ease: "outExpo",
          }),
        );
      }

      if (section) {
        animations.push(
          animate(section, {
            opacity: [1, 0.94],
            ease: "linear",
            autoplay: onScroll({
              target: section,
              enter: "top top",
              leave: "bottom top",
              sync: true,
            }),
          }),
        );
      }
    } catch (error) {
      section?.setAttribute("data-motion-error", String(error));
      items.forEach((item) => {
        item.style.opacity = "1";
      });
      if (photo) photo.style.opacity = "1";
    }

    return () => {
      window.clearTimeout(failSafe);
      animations.forEach((animation) => animation.revert());
    };
  }, [reduced]);

  const { hero, contact } = siteContent;

  return (
    <section
      id="inicio"
      ref={sectionRef}
      data-hero
      className="bg-white pt-16"
    >
      <Container className="grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-28">
        <div>
          <p
            data-hero-item
            className="js-hide text-xs font-medium tracking-[0.18em] text-brand uppercase"
          >
            {hero.eyebrow}
          </p>
          <h1
            data-hero-item
            className="js-hide mt-4 max-w-xl font-heading text-4xl leading-[1.12] font-bold tracking-tight text-brand-dark md:text-5xl lg:text-[3.35rem]"
          >
            {hero.title}
          </h1>
          <p
            data-hero-item
            className="js-hide mt-6 max-w-xl text-base leading-relaxed text-ink md:text-lg"
          >
            {hero.text}
          </p>
          <div data-hero-item className="js-hide mt-8 flex flex-col gap-3 sm:flex-row">
            <SiteCta href={contact.href}>{hero.primaryCta}</SiteCta>
            <SiteCta href={hero.secondaryHref} variant="outline">
              {hero.secondaryCta}
            </SiteCta>
          </div>
        </div>
        <div
          ref={imageRef}
          className="relative will-change-transform"
        >
          <div
            data-hero-photo
            className="js-hide overflow-hidden rounded-2xl bg-surface"
          >
            <Image
              src={hero.image.src}
              alt={hero.image.alt}
              width={hero.image.width}
              height={hero.image.height}
              priority
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="aspect-[4/5] w-full object-cover sm:aspect-[5/4] lg:aspect-[4/5]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
