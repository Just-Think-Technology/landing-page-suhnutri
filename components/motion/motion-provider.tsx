"use client";

import { useEffect } from "react";
import { animate, onScroll, stagger, type AnimationParams } from "animejs";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const motionTargets =
  "[data-reveal], [data-stagger] > *, [data-image], [data-shift], [data-image-clip], [data-cta-button]";

function revealInView() {
  const viewHeight = window.innerHeight;
  document.querySelectorAll<HTMLElement>(motionTargets).forEach((element) => {
    const rect = element.getBoundingClientRect();
    const inView = rect.top < viewHeight * 0.92 && rect.bottom > 0;
    if (!inView) return;
    if (getComputedStyle(element).opacity === "0") {
      element.style.opacity = "1";
    }
    element.style.transform = "none";
    element.style.clipPath = "none";
  });
}

function synced(
  elements: Element | NodeListOf<HTMLElement>,
  scrollTarget: Element,
  params: AnimationParams,
  thresholds: { enter: string; leave: string },
) {
  return animate(elements, {
    ...params,
    autoplay: onScroll({
      target: scrollTarget,
      enter: thresholds.enter,
      leave: thresholds.leave,
      sync: true,
    }),
  });
}

export function MotionProvider() {
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;

    const animations: Array<{ revert: () => void }> = [];
    const failSafe = window.setTimeout(revealInView, 1200);

    try {
      document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((element) => {
        animations.push(
          synced(
            element,
            element,
            {
              opacity: [0, 1],
              y: [28, 0],
              duration: 900,
              ease: "outExpo",
            },
            { enter: "bottom-=8%", leave: "top+=20%" },
          ),
        );
      });

      document.querySelectorAll<HTMLElement>("[data-stagger]").forEach((group) => {
        const children = group.querySelectorAll<HTMLElement>(":scope > *");
        if (!children.length) return;
        animations.push(
          synced(
            children,
            group,
            {
              opacity: [0, 1],
              y: [24, 0],
              delay: stagger(90),
              duration: 800,
              ease: "outCubic",
            },
            { enter: "bottom-=8%", leave: "top+=15%" },
          ),
        );
      });

      document.querySelectorAll<HTMLElement>("[data-image]").forEach((element) => {
        animations.push(
          synced(
            element,
            element,
            {
              opacity: [0, 1],
              scale: [1.04, 1],
              duration: 1000,
              ease: "outExpo",
            },
            { enter: "bottom-=10%", leave: "center" },
          ),
        );
      });

      document.querySelectorAll<HTMLElement>("[data-image-clip]").forEach((element) => {
        animations.push(
          synced(
            element,
            element,
            {
              clipPath: ["inset(14% 0% 14% 0%)", "inset(0% 0% 0% 0%)"],
              ease: "inOutQuad",
            },
            { enter: "bottom-=10%", leave: "center" },
          ),
        );
      });

      document.querySelectorAll<HTMLElement>("[data-shift]").forEach((element) => {
        animations.push(
          synced(
            element,
            element,
            {
              opacity: [0, 1],
              x: [-24, 0],
              duration: 900,
              ease: "outExpo",
            },
            { enter: "bottom-=8%", leave: "top+=20%" },
          ),
        );
      });

      document.querySelectorAll<HTMLElement>("[data-cta-button]").forEach((element) => {
        animations.push(
          synced(
            element,
            element,
            {
              opacity: [0, 1],
              y: [16, 0],
              duration: 700,
              ease: "outExpo",
            },
            { enter: "bottom-=5% top", leave: "bottom-=28% top" },
          ),
        );
      });

      document.querySelectorAll<HTMLElement>("[data-statement-line]").forEach((element) => {
        animations.push(
          synced(
            element,
            element,
            { scaleX: [0, 1], ease: "inOutQuad" },
            { enter: "bottom-=10%", leave: "center" },
          ),
        );
      });
    } catch (error) {
      document.documentElement.setAttribute("data-motion-error", String(error));
      revealInView();
    }

    return () => {
      window.clearTimeout(failSafe);
      animations.forEach((animation) => animation.revert());
    };
  }, [reduced]);

  return null;
}
