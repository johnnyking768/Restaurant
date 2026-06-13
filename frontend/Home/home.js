const featuredButton = document.querySelector("[data-add-featured]");

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
