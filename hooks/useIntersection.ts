"use client";

import { useEffect, useState, type RefObject } from "react";

export function useActiveIndex(
  itemRefs: RefObject<Array<HTMLElement | null>>,
) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const nodes = itemRefs.current.filter(
      (node): node is HTMLElement => node != null,
    );
    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible?.target) return;
        const index = nodes.indexOf(visible.target as HTMLElement);
        if (index >= 0) setActive(index);
      },
      {
        rootMargin: "-30% 0px -40% 0px",
        threshold: [0.15, 0.4, 0.7],
      },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [itemRefs]);

  return active;
}
