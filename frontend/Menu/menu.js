const spotlightMeals = [
  {
    kicker: "Chef's Spotlight",
    title: "JOLLOF",
    price: "N7,500",
    description: "Smoky party jollof with grilled chicken, roasted fish and pepper sauce.",
    image: "../assets/images/hero-jollof-premium.jpg",
    alt: "Party jollof combo",
    detailUrl: "../Meal/meal.html?meal=party-jollof"
  },
  {
    kicker: "Native Soup",
    title: "EGUSI",
    price: "N6,900",
    description: "Rich egusi soup with assorted meat and soft pounded yam for serious native-food cravings.",
    image: "../assets/images/egusi-soup.jpg",
    alt: "Egusi soup with pounded yam",
    detailUrl: "../Meal/meal.html?meal=egusi-pounded-yam"
  },
  {
    kicker: "Owambe Classic",
    title: "AMALA",
    price: "N6,500",
    description: "Amala with ewedu, gbegiri and assorted beef, plated for that proper weekend feeling.",
    image: "../assets/images/amala-ewedu-fresh.png",
    alt: "Amala with ewedu and gbegiri",
    detailUrl: "../Meal/meal.html?meal=amala-ewedu"
  },
  {
    kicker: "Golden Side",
    title: "DODO",
    price: "N3,200",
    description: "Sweet golden plantain with spicy pepper sauce, perfect as a side or small chop.",
    image: "../assets/images/dodo-pepper-sauce.png",
    alt: "Fried plantain with pepper sauce",
    detailUrl: "../Meal/meal.html?meal=dodo-pepper-sauce"
  }
];

spotlightMeals.forEach((meal) => {
  const image = new Image();
  image.src = meal.image;
});

const arrowButtons = document.querySelectorAll(".spotlight-arrows button");
const spotlight = {
  kicker: document.querySelector("[data-spotlight-kicker]"),
  title: document.querySelector("[data-spotlight-title]"),
  price: document.querySelector("[data-spotlight-price]"),
  description: document.querySelector("[data-spotlight-desc]"),
  image: document.querySelector("[data-spotlight-img]"),
  plate: document.querySelector(".spotlight-plate"),
  buyLink: document.querySelector(".spotlight-actions a"),
  prev: arrowButtons[0],
  next: arrowButtons[1]
};

let activeSpotlight = 0;

function renderSpotlight(index) {
  const meal = spotlightMeals[index];
  spotlight.kicker.textContent = meal.kicker;
  spotlight.title.textContent = meal.title;
  spotlight.price.textContent = meal.price;
  spotlight.description.textContent = meal.description;
  spotlight.image.removeAttribute("srcset");
  spotlight.image.style.opacity = "0";
  spotlight.image.onload = () => {
    spotlight.image.style.opacity = "1";
  };
  spotlight.image.src = meal.image;
  spotlight.image.alt = meal.alt;
  spotlight.plate.href = meal.detailUrl;
  spotlight.plate.setAttribute("aria-label", `View ${meal.title}`);
  spotlight.buyLink.href = meal.detailUrl;

  if (spotlight.image.complete) {
    spotlight.image.style.opacity = "1";
  }
}

function moveSpotlight(direction) {
  activeSpotlight = (activeSpotlight + direction + spotlightMeals.length) % spotlightMeals.length;
  renderSpotlight(activeSpotlight);
}

spotlight.prev.addEventListener("click", () => moveSpotlight(-1));
spotlight.next.addEventListener("click", () => moveSpotlight(1));
renderSpotlight(activeSpotlight);
