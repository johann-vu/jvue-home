const sectionSelector = ".section";
const visibleClassname = "visible";

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll<HTMLElement>(sectionSelector);

  if (prefersReducedMotion()) {
    showSections(sections);
    return;
  }

  const observer = new IntersectionObserver(handleIntersectionChange, {
    threshold: 0.2,
  });

  function handleIntersectionChange(entries: IntersectionObserverEntry[]): void {
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (!entry.isIntersecting) return;
      triggerAnimation(entry.target as HTMLElement);
      observer.unobserve(entry.target);
    });
  }

  sections.forEach((section: HTMLElement, index: number) => {
    if (sectionIsVisible(section)) {
      triggerAnimation(section, index);
    } else {
      observer.observe(section);
    }
  });
});

function sectionIsVisible(section: HTMLElement): boolean {
  return section.getBoundingClientRect().top < window.innerHeight;
}

function triggerAnimation(section: HTMLElement, index = 0): void {
  setTimeout(() => {
    section.classList.add(visibleClassname);
  }, index * 150);
}

function showSections(sections: NodeListOf<HTMLElement>): void {
  sections.forEach((section: HTMLElement) => {
    section.style.opacity = "1";
    section.style.transform = "none";
  });
}

function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
