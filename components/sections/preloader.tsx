"use client";

import { useEffect, useRef, useState } from "react";
import { animate, createTimeline } from "animejs";
import { Logo } from "@/components/layout/logo";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function Preloader() {
  const reduced = useReducedMotion();
  const [visible, setVisible] = useState(true);
  const rootRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const countRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (reduced) return;

    const root = rootRef.current;
    const logo = logoRef.current;
    const line = lineRef.current;
    const count = countRef.current;
    const finish = window.setTimeout(() => setVisible(false), 3200);

    if (!root || !logo || !line || !count) {
      return () => window.clearTimeout(finish);
    }

    const progress = { value: 0 };
    const counter = animate(progress, {
      value: 100,
      duration: 1680,
      ease: "inOutSine",
      onUpdate: () => {
        const value = Math.round(progress.value);
        line.style.transform = `scaleX(${value / 100})`;
        count.textContent = `${value}%`;
      },
    });

    const timeline = createTimeline({
      onComplete: () => setVisible(false),
    });

    timeline.add(
      logo,
      {
        opacity: [0, 1],
        scale: [0.96, 1],
        clipPath: ["inset(12% 64% 12% 4%)", "inset(0% 56% 0% 0%)"],
        duration: 720,
        ease: "inOutCubic",
      },
      80,
    );
    timeline.add(
      logo,
      {
        clipPath: ["inset(0% 56% 0% 0%)", "inset(0% 0% 0% 0%)"],
        duration: 860,
        ease: "inOutQuart",
      },
      700,
    );
    timeline.add(
      root,
      {
        y: ["0%", "-100%"],
        duration: 760,
        ease: "inOutQuart",
      },
      1880,
    );

    return () => {
      window.clearTimeout(finish);
      counter.revert();
      timeline.revert();
    };
  }, [reduced]);

  if (reduced || !visible) return null;

  return (
    <div
      ref={rootRef}
      data-preloader
      aria-hidden
      className="fixed inset-0 z-[80] flex items-center justify-center bg-white"
    >
      <div className="flex w-[min(82vw,28rem)] flex-col items-center">
        <div
          ref={logoRef}
          data-preloader-logo
          className="w-full opacity-0"
          style={{ clipPath: "inset(12% 64% 12% 4%)" }}
        >
          <Logo priority />
        </div>
        <div className="mt-8 w-full max-w-xs">
          <div className="h-px w-full bg-border">
            <div
              ref={lineRef}
              data-preloader-line
              className="h-px w-full origin-left bg-brand"
              style={{ transform: "scaleX(0)" }}
            />
          </div>
          <p
            ref={countRef}
            className="mt-3 text-center font-heading text-xs font-bold tracking-[0.22em] text-brand-dark tabular-nums"
          >
            0%
          </p>
        </div>
      </div>
    </div>
  );
}
