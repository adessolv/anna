import { useEffect, useRef } from "react";

const SECTION_IDS = [
  "hero",
  "method",
  "about",
  "experience",
  "classes",
  "contacts",
];
const THROTTLE_MS = 1000;

export function useSectionScroll() {
  const isScrolling = useRef(false);
  const currentIndex = useRef(0);

  useEffect(() => {
    // Не применять на мобильных (touch-устройства)
    const isTouchDevice = () => window.matchMedia("(hover: none)").matches;

    const getClosestSectionIndex = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      let maxVisibility = 0;
      let mostVisible = 0;

      SECTION_IDS.forEach((id, i) => {
        const el = document.getElementById(id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const visibleTop = Math.max(0, rect.top);
        const visibleBottom = Math.min(viewportHeight, rect.bottom);
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);

        if (visibleHeight > maxVisibility) {
          maxVisibility = visibleHeight;
          mostVisible = i;
        }
      });

      return mostVisible;
    };

    const scrollToSection = (index) => {
      const id = SECTION_IDS[index];
      const el = document.getElementById(id);
      if (!el) return;

      const isLast = index === SECTION_IDS.length - 1;
      el.scrollIntoView({
        behavior: "smooth",
        block: isLast ? "center" : "start",
      });
      currentIndex.current = index;
    };

    const handleWheel = (e) => {
      if (isTouchDevice()) return;
      if (isScrolling.current) return;

      const direction = e.deltaY > 0 ? 1 : -1;
      const current = getClosestSectionIndex();
      const next = Math.max(
        0,
        Math.min(SECTION_IDS.length - 1, current + direction),
      );

      if (next === current) return;

      e.preventDefault();
      isScrolling.current = true;
      scrollToSection(next);

      setTimeout(() => {
        isScrolling.current = false;
      }, THROTTLE_MS);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);
}
