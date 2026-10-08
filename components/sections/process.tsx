"use client";

import { useEffect, useRef } from "react";
import { siteContent } from "@/content/site";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/layout/section-heading";
import { MotionReveal } from "@/components/motion/motion-reveal";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "cn";

export function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLOListElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;

    const section = sectionRef.current;
    const viewport = viewportRef.current;
    const track = trackRef.current;
    const line = lineRef.current;
    if (!section || !viewport || !track || !line) return;

    const steps = [...track.querySelectorAll<HTMLElement>("[data-process-step]")];

    const apply = () => {
      const travel = section.offsetHeight - window.innerHeight;
      const progress =
        travel <= 0 ? 0 : Math.min(1, Math.max(0, -section.getBoundingClientRect().top / travel));
      const distance = Math.max(0, track.scrollWidth - viewport.clientWidth);
      track.style.transform = `translate3d(${-progress * distance}px, 0, 0)`;
      line.style.transform = `scaleX(${progress})`;

      const focus = progress * Math.max(1, steps.length - 1);
      steps.forEach((step, index) => {
        const distanceFromFocus = Math.min(1, Math.abs(focus - index));
        step.style.opacity = String(1 - distanceFromFocus * 0.55);
        if (distanceFromFocus < 0.5) {
          step.setAttribute("aria-current", "step");
        } else {
          step.removeAttribute("aria-current");
        }
      });
    };

    apply();
    window.addEventListener("scroll", apply, { passive: true });
    document.addEventListener("scroll", apply, { passive: true });
    window.addEventListener("resize", apply);

    return () => {
      window.removeEventListener("scroll", apply);
      document.removeEventListener("scroll", apply);
      window.removeEventListener("resize", apply);
      track.style.transform = "";
      line.style.transform = "";
      steps.forEach((step) => {
        step.style.opacity = "";
        step.removeAttribute("aria-current");
      });
    };
  }, [reduced]);

  return (
    <section
      id="metodo"
      ref={sectionRef}
      className={cn("scroll-mt-24 bg-surface", !reduced && "h-[calc(100svh+240vh)]")}
      aria-labelledby="metodo-titulo"
    >
      <div
        className={cn(
          !reduced && "sticky top-16 flex h-[calc(100svh-4rem)] flex-col justify-start",
        )}
      >
        <Container className="py-20 md:py-28">
          <MotionReveal>
            <SectionHeading
              id="metodo-titulo"
              eyebrow={siteContent.process.eyebrow}
              title={siteContent.process.title}
              text={siteContent.process.text}
            />
          </MotionReveal>

          <div ref={viewportRef} className="mt-14 overflow-hidden md:mt-20">
            <div className="relative mb-10 h-px md:mb-14" aria-hidden>
              <div className="absolute inset-0 bg-border" />
              <div
                ref={lineRef}
                className="process-line absolute inset-0 origin-left bg-brand-dark"
                style={reduced ? undefined : { transform: "scaleX(0)" }}
              />
            </div>
            <ol
              ref={trackRef}
              className={cn(
                "flex",
                reduced ? "grid w-auto gap-10 sm:grid-cols-2 lg:grid-cols-5" : "w-max gap-16 md:gap-24",
              )}
            >
              {siteContent.process.steps.map((step) => (
                <li
                  key={step.index}
                  data-process-step
                  className={cn(reduced ? "w-auto" : "w-[min(70vw,52rem)] shrink-0")}
                >
                  <p className="font-heading text-5xl font-bold text-brand-light md:text-6xl">
                    {step.index}
                  </p>
                  <h3 className="mt-4 font-heading text-2xl font-bold text-brand-dark md:text-3xl">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-base leading-relaxed text-ink">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </div>
    </section>
  );
}
