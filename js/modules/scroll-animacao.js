export default function initAnimationScroll() {
  const sections = document.querySelectorAll("[data-anime='scroll']");

  function animateScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowMetade = window.innerHeight * 0.6;
      const isSectionVisible = sectionTop - windowMetade < 0;
      if (isSectionVisible) {
        section.classList.add("ativo");
      } else if (section.classList.contains("ativo")) {
        section.classList.remove("ativo");
      }
    });
  }

  if (sections.length) {
    animateScroll();
    window.addEventListener("scroll", animateScroll);
  }
}
