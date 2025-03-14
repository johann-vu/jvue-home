document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("visible");
          }, entry.target.dataset.delay || 0);
          observer.unobserve(entry.target); // Beobachtung beenden
        }
      });
    },
    { threshold: 0.2 }
  );

  sections.forEach((section, index) => {
    if (section.getBoundingClientRect().top < window.innerHeight) {
      // Direkt sichtbare Elemente mit Verzögerung einblenden
      setTimeout(() => {
        section.classList.add("visible");
      }, index * 150);
    } else {
      observer.observe(section);
    }
  });
});
