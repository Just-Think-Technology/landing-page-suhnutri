"use client";

import { useEffect, useRef, type RefObject } from "react";

function readProgress(element: HTMLElement) {
  const rect = element.getBoundingClientRect();
  const distance = rect.height + window.innerHeight * 0.35;
  const traveled = window.innerHeight * 0.85 - rect.top;
  if (distance <= 0) return 0;
  return Math.min(1, Math.max(0, traveled / distance));
}

export function useScrollProgress(
  targetRef: RefObject<HTMLElement | null>,
  onProgress: (progress: number) => void,
) {
  const onProgressRef = useRef(onProgress);

  useEffect(() => {
    onProgressRef.current = onProgress;
  });

  useEffect(() => {
    const element = targetRef.current;
    if (!element) return;

    let frame = 0;
    const update = () => {
      onProgressRef.current(readProgress(element));
    };
    const requestUpdate = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, [targetRef]);
}
