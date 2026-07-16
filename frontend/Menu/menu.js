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
    id: "chicken-jollof",
    tag: "Rice Special",
    title: "Chicken Jollof Rice",
    price: "N5,900",
    description: "Smoky jollof rice served with grilled chicken, dodo and pepper sauce.",
    image: "../assets/images/jollof-rice.jpg",
    alt: "Jollof rice with chicken",
    keywords: ["jollof", "rice", "chicken", "naija"]
  },
  {
    id: "fried-rice-chicken",
    tag: "Rice Special",
    title: "Fried Rice & Chicken",
    price: "N6,400",
    description: "Golden fried rice with vegetables, grilled chicken and a mild pepper dip.",
    image: "../assets/images/grilled-chicken.jpg",
    alt: "Fried rice with chicken",
    keywords: ["fried rice", "rice", "chicken", "vegetable", "naija"]
  },
  {
    id: "coconut-rice-prawns",
    tag: "Coastal Rice",
    title: "Coconut Rice & Prawns",
    price: "N7,000",
    description: "Creamy coconut rice with prawns, herbs and a light pepper finish.",
    image: "../assets/images/hero-jollof.jpg",
    alt: "Coconut rice with prawns",
    keywords: ["coconut rice", "rice", "prawns", "seafood", "fish", "naija"]
  },
  {
    id: "ofada-rice-sauce",
    tag: "Native Rice",
    title: "Ofada Rice & Ayamase",
    price: "N7,300",
    description: "Local ofada rice with spicy ayamase sauce, egg and assorted beef.",
    image: "../assets/images/plantain-meal.jpg",
    alt: "Ofada rice with ayamase sauce",
    keywords: ["ofada", "rice", "ayamase", "native", "beef", "naija"]
  },
  {
    id: "white-rice-stew",
    tag: "Comfort Bowl",
    title: "White Rice & Beef Stew",
    price: "N5,500",
    description: "Steamed white rice with rich tomato stew, beef and sweet plantain.",
    image: "../assets/images/jollof-rice.jpg",
    alt: "White rice with beef stew",
    keywords: ["white rice", "rice", "stew", "beef", "plantain", "naija"]
  },
  {
    id: "beans-plantain",
    tag: "Beans Special",
    title: "Beans & Plantain",
    price: "N4,200",
    description: "Soft honey beans with pepper sauce and sweet fried plantain.",
    image: "../assets/images/dodo-pepper-sauce.png",
    alt: "Beans and fried plantain",
    keywords: ["beans", "ewa", "plantain", "dodo", "naija", "vegetarian"]
  },
  {
    id: "ewa-agoyin",
    tag: "Street Classic",
    title: "Ewa Agoyin",
    price: "N4,800",
    description: "Mashed beans with smoky agoyin pepper sauce and a side of soft bread.",
    image: "../assets/images/plantain-meal.jpg",
    alt: "Ewa agoyin beans",
    keywords: ["ewa agoyin", "beans", "ewa", "bread", "pepper", "naija"]
  },
  {
    id: "moi-moi-plate",
    tag: "Steamed Beans",
    title: "Moi Moi Plate",
    price: "N3,500",
    description: "Steamed bean pudding with egg, pepper notes and a light salad side.",
    image: "../assets/images/amala-ewedu-fresh.png",
    alt: "Moi moi plate",
    keywords: ["moi moi", "moin moin", "beans", "egg", "side", "naija"]
  },
  {
    id: "akara-pap",
    tag: "Breakfast",
    title: "Akara & Pap",
    price: "N3,800",
    description: "Crisp bean cakes served with warm pap for a proper morning plate.",
    image: "../assets/images/suya-plate.png",
    alt: "Akara and pap",
    keywords: ["akara", "beans", "pap", "breakfast", "naija"]
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
    id: "yam-porridge",
    tag: "Home Comfort",
    title: "Yam Porridge",
    price: "N5,200",
    description: "Soft yam cooked in rich pepper sauce with vegetables and smoked fish flavour.",
    image: "../assets/images/plantain-meal.jpg",
    alt: "Yam porridge",
    keywords: ["yam", "porridge", "asaro", "fish", "native", "naija"]
  },
  {
    id: "efo-riro-semolina",
    tag: "Native Soup",
    title: "Efo Riro & Semolina",
    price: "N6,700",
    description: "Vegetable stew with assorted meat, pepper sauce and smooth semolina.",
    image: "../assets/images/egusi-soup.jpg",
    alt: "Efo riro with semolina",
    keywords: ["efo", "efo riro", "semo", "semolina", "soup", "swallow", "native"]
  },
  {
    id: "catfish-pepper-soup",
    tag: "Hot Bowl",
    title: "Catfish Pepper Soup",
    price: "N7,800",
    description: "Spicy catfish broth with herbs, peppers and a clean pepper-soup kick.",
    image: "../assets/images/hero-jollof-premium.jpg",
    alt: "Catfish pepper soup",
    keywords: ["catfish", "fish", "pepper soup", "soup", "seafood", "spicy"]
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
    id: "chicken-shawarma",
    tag: "Wrap",
    title: "Chicken Shawarma",
    price: "N4,800",
    description: "Soft wrap packed with chicken, vegetables, sausage and creamy house sauce.",
    image: "../assets/images/burger.jpg",
    alt: "Chicken shawarma",
    keywords: ["shawarma", "chicken", "wrap", "foreign", "sausage"]
  },
  {
    id: "small-chops-box",
    tag: "Party Box",
    title: "Small Chops Box",
    price: "N5,000",
    description: "Puff puff, spring rolls, samosa and peppered bites in one party-ready box.",
    image: "../assets/images/dodo-pepper-sauce.png",
    alt: "Small chops box",
    keywords: ["small chops", "puff puff", "samosa", "spring roll", "snack", "party"]
  },
  {
    id: "chicken-caesar-salad",
    tag: "Fresh Bowl",
    title: "Chicken Caesar Salad",
    price: "N5,700",
    description: "Crisp greens with grilled chicken, creamy dressing, croutons and parmesan.",
    image: "../assets/images/chicken-caesar-salad.png",
    alt: "Chicken caesar salad",
    keywords: ["salad", "chicken", "healthy", "fresh", "foreign"]
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
  },
  {
    id: "strawberry-cream-cake",
    tag: "Cake Slice",
    title: "Strawberry Cream Cake",
    price: "N4,800",
    description: "Soft strawberry cake with cream layers and a bright fruity finish.",
    image: "../assets/images/dessert-strawberry-cream-cake.png",
    alt: "Strawberry cream cake",
    keywords: ["strawberry", "cake", "dessert", "sweet", "cream"]
  },
  {
    id: "dessert-platter",
    tag: "Sweet Box",
    title: "Dessert Platter",
    price: "N8,500",
    description: "A shareable mix of cake, ice cream, toppings and chilled sweet treats.",
    image: "../assets/images/dessert-hero-platter.png",
    alt: "Dessert platter",
    keywords: ["dessert", "platter", "cake", "ice cream", "sweet", "share"]
  }
];

if (Array.isArray(window.GoldenPlateExtraMeals)) {
  searchableMeals.push(...window.GoldenPlateExtraMeals);
}

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

  const hasExactMatches = matches.length > 0;
  const mealsToRender = hasExactMatches ? matches : searchableMeals;

  searchResults.innerHTML = `
    <div class="search-results-heading">
      <p>${hasExactMatches
        ? `${mealsToRender.length} result${mealsToRender.length === 1 ? "" : "s"} found`
        : `No exact match for "${query}" - showing all meals`}</p>
      <button type="button" data-close-search>Clear</button>
    </div>
    ${hasExactMatches ? "" : `
      <div class="search-empty search-empty-inline">
        <h2>Pick from the full menu</h2>
        <p>We do not have that exact keyword yet, but these are available now.</p>
      </div>
    `}
    <div class="search-list">
      ${mealsToRender.map((meal) => `
        <article class="search-result-card" data-meal="${meal.id}">
          <img src="${meal.image}" alt="${meal.alt}" />
          <a href="${createMealUrl(meal.id)}">
            <span>${meal.tag}</span>
            <h3>${meal.title}</h3>
            <p>${meal.description}</p>
          </a>
          <strong>${meal.price}</strong>
          <button type="button" data-add-cart>Add</button>
        </article>
      `).join("")}
    </div>
  `;
}

function runSearch(term) {
  const query = term.trim().toLowerCase();
  const showEverything = ["all", "all meals", "menu", "food", "meal", "meals", "everything"].includes(query);
  const matches = showEverything
    ? searchableMeals
    : searchableMeals.filter((meal) => mealMatchesSearch(meal, query));
  renderSearchResults(matches, query);
}

function updateSearchUrl(term) {
  const url = new URL(window.location.href);
  const query = term.trim();

  if (query) {
    url.searchParams.set("search", query);
  } else {
    url.searchParams.delete("search");
  }

  window.history.replaceState({}, "", url);
}

function runSearchFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const query = params.get("search");

  if (!query) {
    return;
  }

  searchInput.value = query;
  runSearch(query);
  searchResults.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  runSearch(searchInput.value);
  updateSearchUrl(searchInput.value);
});

searchButton.addEventListener("click", () => {
  searchInput.focus();

  if (searchInput.value.trim()) {
    runSearch(searchInput.value);
    updateSearchUrl(searchInput.value);
  }
});

quickSearchTerms.forEach((term) => {
  term.addEventListener("click", () => {
    searchInput.value = term.textContent;
    runSearch(term.textContent);
    updateSearchUrl(term.textContent);
  });
});

searchResults.addEventListener("click", (event) => {
  if (!event.target.matches("[data-close-search]")) {
    return;
  }

  searchInput.value = "";
  searchResults.hidden = true;
  searchResults.innerHTML = "";
  updateSearchUrl("");
});

runSearchFromUrl();
