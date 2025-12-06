import { useEffect, useState } from "react";

export function useParallax(speed: number = 0.5) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setOffset(window.scrollY * speed);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return offset;
}

export function useParallaxElement(speed: number = 0.3) {
  const [transform, setTransform] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const y = scrollY * speed;
        const opacity = Math.max(0, 1 - scrollY / 800);
        setTransform({ y, opacity });
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return transform;
}
