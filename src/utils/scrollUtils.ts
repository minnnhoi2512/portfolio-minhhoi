import { animate, easeInOut } from "framer-motion";

export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (!element) return;

  const offset = 80; // Account for header height
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offset;

  animate(
    window,
    { scrollY: offsetPosition },
    {
      duration: 0.8,
      ease: easeInOut,
    }
  );
};

export const handleScroll = (callback: (isScrolled: boolean) => void) => {
  const checkScroll = () => {
    const isScrolled = window.scrollY > 50;
    callback(isScrolled);
  };

  window.addEventListener("scroll", checkScroll);
  return () => window.removeEventListener("scroll", checkScroll);
}; 