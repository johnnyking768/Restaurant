const featuredButton = document.querySelector("[data-add-featured]");

if (featuredButton) {
  featuredButton.addEventListener("click", () => {
    window.GoldenPlateCart.addItem({
      id: "party-jollof",
      title: "Party Jollof Combo",
      price: "N7,500",
      image: "../assets/images/hero-jollof-premium.jpg",
      alt: "Party jollof combo",
      quantity: 1
    });
    featuredButton.textContent = "Added";
    window.setTimeout(() => {
      featuredButton.textContent = "Add Jollof";
    }, 1200);
  });
}

const revealBlocks = document.querySelectorAll(".reveal-lift");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

document.querySelectorAll(".reveal-lift").forEach((block) => {
  block.querySelectorAll(".reveal-child").forEach((child, index) => {
    child.style.setProperty("--reveal-order", index);
  });
});

if (reducedMotion) {
  revealBlocks.forEach((block) => block.classList.add("is-visible"));
} else {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  }, {
    threshold: 0.22,
    rootMargin: "0px 0px -12% 0px"
  });

  revealBlocks.forEach((block) => revealObserver.observe(block));

}
