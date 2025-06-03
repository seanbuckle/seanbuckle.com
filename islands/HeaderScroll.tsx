import { useEffect } from "preact/hooks";

export default function HeaderScroll() {
  useEffect(() => {
    const header = document.querySelector<HTMLElement>(".site-header");
    if (!header) return;

    const onScroll = () => {
      header.classList.toggle("site-header--scrolled", globalThis.scrollY > 0);
    };

    globalThis.addEventListener("scroll", onScroll);
    // Run once on mount to set initial state
    onScroll();

    return () => {
      globalThis.removeEventListener("scroll", onScroll);
    };
  }, []);
  return null;
}