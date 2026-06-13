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

const searchableMeals = [
  {
    id: "party-jollof",
    tag: "Best Seller",
    title: "Party Jollof Combo",
    price: "N7,500",
    description: "Smoky party jollof with grilled chicken, roasted fish and pepper sauce.",
    image: "../assets/images/hero-jollof-premium.jpg",
    alt: "Party jollof rice",
    keywords: ["jollof", "rice", "chicken", "fish", "naija"]
  },
  {
    id: "amala-ewedu",
    tag: "Owambe Classic",
    title: "Amala & Ewedu",
    price: "N6,500",
    description: "Amala with ewedu, gbegiri, rich stew and assorted beef.",
    image: "../assets/images/amala-ewedu-fresh.png",
    alt: "Amala with ewedu and gbegiri",
    keywords: ["amala", "ewedu", "gbegiri", "swallow", "native"]
  },
  {
    id: "egusi-pounded-yam",
    tag: "Native Soup",
    title: "Egusi & Pounded Yam",
    price: "N6,900",
    description: "Thick egusi soup with assorted meat and smooth pounded yam.",
    image: "../assets/images/egusi-soup.jpg",
    alt: "Egusi soup with pounded yam",
    keywords: ["egusi", "pounded yam", "soup", "swallow", "native"]
  },
  {
    id: "nkwobi",
    tag: "Native Delicacy",
    title: "Nkwobi Plate",
    price: "N7,200",
    description: "Spicy sauced meat finished with onions, peppers and local seasoning.",
    image: "../assets/images/nkwobi-plate.png",
    alt: "Nkwobi plate",
    keywords: ["nkwobi", "meat", "spicy", "native"]
  },
  {
    id: "dodo-pepper-sauce",
    tag: "Golden Side",
    title: "Dodo & Pepper Sauce",
    price: "N3,200",
    description: "Sweet fried plantain served with hot pepper sauce.",
    image: "../assets/images/dodo-pepper-sauce.png",
    alt: "Fried plantain with pepper sauce",
    keywords: ["dodo", "plantain", "pepper", "side"]
  },
  {
    id: "grilled-chicken",
    tag: "Chef Pick",
    title: "Grilled Chicken Plate",
    price: "N6,800",
    description: "Juicy flame-grilled chicken with herbs, pepper sauce and a side.",
    image: "../assets/images/grilled-chicken.jpg",
    alt: "Grilled chicken plate",
    keywords: ["grilled", "chicken", "grills", "protein"]
  },
  {
    id: "beef-suya",
    tag: "Suya Style",
    title: "Beef Suya Plate",
    price: "N5,800",
    description: "Spiced beef strips with onions, pepper mix and smoky suya seasoning.",
    image: "../assets/images/suya-plate.png",
    alt: "Suya style beef plate",
    keywords: ["suya", "beef", "grills", "pepper"]
  },
  {
    id: "peppered-fish",
    tag: "Hot Fish",
    title: "Peppered Fish",
    price: "N7,500",
    description: "Roasted fish with pepper sauce, onions and a jollof rice pairing.",
    image: "../assets/images/hero-jollof-premium.jpg",
    alt: "Peppered fish plate",
    keywords: ["fish", "peppered", "seafood", "grills"]
  },
  {
    id: "loaded-pizza",
    tag: "Cheesy",
    title: "Loaded Pizza",
    price: "N8,000",
    description: "Warm pizza slices with melted cheese, herbs and house sauce.",
    image: "../assets/images/pizza.jpg",
    alt: "Loaded pizza",
    keywords: ["pizza", "cheese", "foreign"]
  },
  {
    id: "pasta-bowl",
    tag: "Creamy",
    title: "Creamy Pasta Bowl",
    price: "N5,500",
    description: "Soft pasta tossed with creamy sauce, herbs, mushrooms and parmesan.",
    image: "../assets/images/pasta.jpg",
    alt: "Creamy pasta bowl",
    keywords: ["pasta", "creamy", "foreign"]
  },
  {
    id: "burger-fries",
    tag: "Combo",
    title: "Burger & Fries",
    price: "N6,200",
    description: "Stacked burger served with crisp fries and a chilled drink option.",
    image: "../assets/images/burger.jpg",
    alt: "Burger and fries",
    keywords: ["burger", "fries", "foreign"]
  },
  {
    id: "chocolate-cake",
    tag: "Rich & Soft",
    title: "Chocolate Cake",
    price: "N4,500",
    description: "Moist chocolate layers with creamy filling and smooth toppings.",
    image: "../assets/images/dessert-chocolate-cake.png",
    alt: "Chocolate cake",
    keywords: ["cake", "chocolate", "dessert", "sweet"]
  },
  {
    id: "vanilla-milkshake",
    tag: "Cold Drink",
    title: "Vanilla Milkshake",
    price: "N3,800",
    description: "Thick, smooth and chilled vanilla shake with creamy sweetness.",
    image: "../assets/images/dessert-vanilla-milkshake.png",
    alt: "Vanilla milkshake",
    keywords: ["milkshake", "vanilla", "drink", "dessert"]
  },
  {
    id: "ice-cream-bowl",
    tag: "Frozen Treat",
    title: "Ice Cream Bowl",
    price: "N3,200",
    description: "Sweet scoops served cold with syrup, toppings and wafers.",
    image: "../assets/images/dessert-ice-cream-bowl.png",
    alt: "Ice cream bowl",
    keywords: ["ice cream", "frozen", "dessert", "sweet"]
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

const searchForm = document.querySelector("[data-meal-search]");
const searchInput = document.querySelector("[data-search-input]");
const searchResults = document.querySelector("[data-search-results]");
const searchButton = document.querySelector(".icon-button");
const quickSearchTerms = document.querySelectorAll(".quick-restaurants span");

function createMealUrl(id) {
  return `../Meal/meal.html?meal=${encodeURIComponent(id)}`;
}

function mealMatchesSearch(meal, query) {
  const haystack = [
    meal.title,
    meal.tag,
    meal.description,
    ...meal.keywords
  ].join(" ").toLowerCase();

  return haystack.includes(query);
}

function renderSearchResults(matches, query) {
  searchResults.hidden = false;

  if (!query) {
    searchResults.hidden = true;
    searchResults.innerHTML = "";
    return;
  }

  if (matches.length === 0) {
    searchResults.innerHTML = `
      <div class="search-empty">
        <h2>No meal found</h2>
        <p>Try jollof, chicken, pasta, pizza, suya, cake or milkshake.</p>
      </div>
    `;
    return;
  }

  searchResults.innerHTML = `
    <div class="search-results-heading">
      <p>Search Results</p>
      <h2>${matches.length} meal${matches.length === 1 ? "" : "s"} found</h2>
    </div>
    <div class="dish-grid search-grid">
      ${matches.map((meal) => `
        <a class="dish-card" href="${createMealUrl(meal.id)}">
          <img src="${meal.image}" alt="${meal.alt}" />
          <div>
            <p class="dish-tag">${meal.tag}</p>
            <h3>${meal.title}</h3>
            <p>${meal.description}</p>
            <footer>
              <strong>${meal.price}</strong>
              <button type="button">Add</button>
            </footer>
          </div>
        </a>
      `).join("")}
    </div>
  `;

  searchResults.scrollIntoView({ behavior: "smooth", block: "start" });
}

function runSearch(term) {
  const query = term.trim().toLowerCase();
  const matches = searchableMeals.filter((meal) => mealMatchesSearch(meal, query));
  renderSearchResults(matches, query);
}

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  runSearch(searchInput.value);
});

searchButton.addEventListener("click", () => {
  searchInput.focus();

  if (searchInput.value.trim()) {
    runSearch(searchInput.value);
  }
});

quickSearchTerms.forEach((term) => {
  term.addEventListener("click", () => {
    searchInput.value = term.textContent;
    runSearch(term.textContent);
  });
});
