const sectionSelector = ".section";
const visibleClassname = "visible";

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(sectionSelector);

  if (preferesReducedMotion()) {
    showSections(sections);
    return;
  }

  function handleIntersectionChange(entries) {
	entries.forEach((entry) => {
	  if (!entry.isIntersecting) return;
	  triggerAnimation(entry.target);
	  observer.unobserve(entry.target);
	});
  }

  const observer = new IntersectionObserver(handleIntersectionChange, {
    threshold: 0.2,
  });

  sections.forEach((section, index) => {
    if (sectionIsVisible(section)) {
      triggerAnimation(section, index);
    } else {
      observer.observe(section);
    }
  });
});

function sectionIsVisible(section) {
  return section.getBoundingClientRect().top < window.innerHeight;
}

function triggerAnimation(section, index = 0) {
  setTimeout(() => {
    section.classList.add(visibleClassname);
  }, index * 150);
}

function showSections(sections) {
  sections.forEach((section) => {
    section.style.opacity = "1";
    section.style.transform = "none";
  });
}

function preferesReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
