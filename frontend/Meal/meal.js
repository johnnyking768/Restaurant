const meals = {
  "party-jollof": {
    title: "Party Jollof Combo",
    kicker: "Best Seller",
    price: "N7,500",
    calories: "640",
    image: "../assets/images/hero-jollof-premium.jpg",
    alt: "Party jollof combo with grilled chicken and fish",
    description: "Rich orange jollof rice served with grilled chicken, roasted fish, pepper sauce and a fresh onion garnish. Built for proper hunger, not small-small appetite.",
    tags: ["Protein - 38g", "Spice - Hot", "Serving - Large", "Ready - 25 min"],
    group: "rice"
  },
  "amala-ewedu": {
    title: "Amala & Ewedu",
    kicker: "Naija Special",
    price: "N6,500",
    calories: "700",
    image: "../assets/images/amala-ewedu-fresh.png",
    alt: "Amala with ewedu, gbegiri and assorted meat",
    description: "Soft amala served with ewedu, gbegiri, rich stew and assorted beef for a proper classic Nigerian plate.",
    tags: ["Soup - Ewedu", "Serving - Large", "Style - Native", "Ready - 30 min"],
    group: "naija"
  },
  "chicken-jollof": {
    title: "Chicken Jollof Rice",
    kicker: "Rice Special",
    price: "N5,900",
    calories: "610",
    image: "../assets/images/jollof-rice.jpg",
    alt: "Jollof rice with chicken",
    description: "Smoky jollof rice served with grilled chicken, dodo and pepper sauce for a reliable everyday plate.",
    tags: ["Rice - Jollof", "Protein - Chicken", "Spice - Medium", "Ready - 22 min"],
    group: "rice"
  },
  "fried-rice-chicken": {
    title: "Fried Rice & Chicken",
    kicker: "Rice Special",
    price: "N6,400",
    calories: "650",
    image: "../assets/images/jollof-rice.jpg",
    alt: "Fried rice with chicken",
    description: "Golden fried rice with vegetables, grilled chicken and a mild pepper dip.",
    tags: ["Rice - Fried", "Protein - Chicken", "Serving - Regular", "Ready - 24 min"],
    group: "rice"
  },
  "coconut-rice-prawns": {
    title: "Coconut Rice & Prawns",
    kicker: "Coastal Rice",
    price: "N7,000",
    calories: "630",
    image: "../assets/images/hero-jollof.jpg",
    alt: "Coconut rice with prawns",
    description: "Creamy coconut rice with prawns, herbs and a light pepper finish.",
    tags: ["Rice - Coconut", "Protein - Prawns", "Style - Coastal", "Ready - 26 min"],
    group: "rice"
  },
  "ofada-rice-sauce": {
    title: "Ofada Rice & Ayamase",
    kicker: "Native Rice",
    price: "N7,300",
    calories: "720",
    image: "../assets/images/plantain-meal.jpg",
    alt: "Ofada rice with ayamase sauce",
    description: "Local ofada rice with spicy ayamase sauce, egg and assorted beef.",
    tags: ["Rice - Ofada", "Sauce - Ayamase", "Protein - Beef", "Ready - 30 min"],
    group: "rice"
  },
  "white-rice-stew": {
    title: "White Rice & Beef Stew",
    kicker: "Comfort Bowl",
    price: "N5,500",
    calories: "590",
    image: "../assets/images/jollof-rice.jpg",
    alt: "White rice with beef stew",
    description: "Steamed white rice with rich tomato stew, beef and sweet plantain.",
    tags: ["Rice - White", "Protein - Beef", "Side - Plantain", "Ready - 20 min"],
    group: "rice"
  },
  "beans-plantain": {
    title: "Beans & Plantain",
    kicker: "Beans Special",
    price: "N4,200",
    calories: "540",
    image: "../assets/images/dodo-pepper-sauce.png",
    alt: "Beans and fried plantain",
    description: "Soft honey beans with pepper sauce and sweet fried plantain.",
    tags: ["Beans - Honey", "Side - Plantain", "Spice - Medium", "Ready - 20 min"],
    group: "beans"
  },
  "ewa-agoyin": {
    title: "Ewa Agoyin",
    kicker: "Street Classic",
    price: "N4,800",
    calories: "620",
    image: "../assets/images/plantain-meal.jpg",
    alt: "Ewa agoyin beans",
    description: "Mashed beans with smoky agoyin pepper sauce and a side of soft bread.",
    tags: ["Beans - Mashed", "Sauce - Agoyin", "Spice - Hot", "Ready - 22 min"],
    group: "beans"
  },
  "moi-moi-plate": {
    title: "Moi Moi Plate",
    kicker: "Steamed Beans",
    price: "N3,500",
    calories: "430",
    image: "../assets/images/amala-ewedu-fresh.png",
    alt: "Moi moi plate",
    description: "Steamed bean pudding with egg, pepper notes and a light salad side.",
    tags: ["Beans - Steamed", "Protein - Egg", "Serving - Regular", "Ready - 15 min"],
    group: "beans"
  },
  "akara-pap": {
    title: "Akara & Pap",
    kicker: "Breakfast",
    price: "N3,800",
    calories: "510",
    image: "../assets/images/suya-plate.png",
    alt: "Akara and pap",
    description: "Crisp bean cakes served with warm pap for a proper morning plate.",
    tags: ["Beans - Akara", "Style - Breakfast", "Serving - Regular", "Ready - 16 min"],
    group: "beans"
  },
  "egusi-pounded-yam": {
    title: "Egusi & Pounded Yam",
    kicker: "Soup Classic",
    price: "N6,900",
    calories: "760",
    image: "../assets/images/egusi-soup.jpg",
    alt: "Egusi soup with pounded yam",
    description: "Thick melon soup cooked with vegetables, assorted meat and smooth pounded yam for deep native flavour.",
    tags: ["Soup - Egusi", "Protein - Assorted", "Serving - Large", "Ready - 30 min"],
    group: "naija"
  },
  "nkwobi": {
    title: "Nkwobi Plate",
    kicker: "Native Delicacy",
    price: "N7,200",
    calories: "690",
    image: "../assets/images/nkwobi-plate.png",
    alt: "Nkwobi style plate",
    description: "Spicy sauced meat finished with onions, peppers and local seasoning for a bold native bite.",
    tags: ["Protein - Beef", "Spice - Hot", "Style - Native", "Ready - 25 min"],
    group: "naija"
  },
  "dodo-pepper-sauce": {
    title: "Dodo & Pepper Sauce",
    kicker: "Golden Side",
    price: "N3,200",
    calories: "410",
    image: "../assets/images/dodo-pepper-sauce.png",
    alt: "Fried plantain with pepper sauce",
    description: "Sweet fried plantain served with hot pepper sauce. Perfect as a side, snack or small plate.",
    tags: ["Side - Plantain", "Spice - Medium", "Serving - Regular", "Ready - 15 min"],
    group: "naija"
  },
  "yam-porridge": {
    title: "Yam Porridge",
    kicker: "Home Comfort",
    price: "N5,200",
    calories: "610",
    image: "../assets/images/plantain-meal.jpg",
    alt: "Yam porridge",
    description: "Soft yam cooked in rich pepper sauce with vegetables and smoked fish flavour.",
    tags: ["Yam - Porridge", "Style - Native", "Spice - Medium", "Ready - 26 min"],
    group: "naija"
  },
  "efo-riro-semolina": {
    title: "Efo Riro & Semolina",
    kicker: "Native Soup",
    price: "N6,700",
    calories: "730",
    image: "../assets/images/egusi-soup.jpg",
    alt: "Efo riro with semolina",
    description: "Vegetable stew with assorted meat, pepper sauce and smooth semolina.",
    tags: ["Soup - Efo Riro", "Swallow - Semolina", "Protein - Assorted", "Ready - 30 min"],
    group: "naija"
  },
  "catfish-pepper-soup": {
    title: "Catfish Pepper Soup",
    kicker: "Hot Bowl",
    price: "N7,800",
    calories: "480",
    image: "../assets/images/hero-jollof-premium.jpg",
    alt: "Catfish pepper soup",
    description: "Spicy catfish broth with herbs, peppers and a clean pepper-soup kick.",
    tags: ["Protein - Catfish", "Soup - Pepper", "Spice - Hot", "Ready - 28 min"],
    group: "grills"
  },
  "grilled-chicken": {
    title: "Grilled Chicken Plate",
    kicker: "Chef Pick",
    price: "N6,800",
    calories: "520",
    image: "../assets/images/grilled-chicken.jpg",
    alt: "Grilled chicken plate",
    description: "Juicy flame-grilled chicken with herbs, pepper sauce and a side built for serious lunch cravings.",
    tags: ["Protein - Chicken", "Spice - Medium", "Serving - Regular", "Ready - 22 min"],
    group: "chicken"
  },
  "steamed-chicken": {
    title: "Steamed Chicken",
    kicker: "Soft & Juicy",
    price: "N6,200",
    calories: "460",
    image: "../assets/images/steamed-chicken.png",
    alt: "Steamed chicken plate",
    description: "Tender steamed chicken cooked soft with herbs, light spice and pepper sauce.",
    tags: ["Protein - Chicken", "Style - Steamed", "Spice - Mild", "Ready - 24 min"],
    group: "chicken"
  },
  "fried-chicken": {
    title: "Fried Chicken",
    kicker: "Crispy",
    price: "N6,500",
    calories: "610",
    image: "../assets/images/fried-chicken.png",
    alt: "Crispy fried chicken plate",
    description: "Golden fried chicken pieces with crisp skin, juicy centre and a spicy dip.",
    tags: ["Protein - Chicken", "Style - Fried", "Texture - Crispy", "Ready - 22 min"],
    group: "chicken"
  },
  "beef-suya": {
    title: "Beef Suya Plate",
    kicker: "Suya Style",
    price: "N5,800",
    calories: "560",
    image: "../assets/images/suya-plate.png",
    alt: "Suya style beef plate",
    description: "Spiced beef strips with onions, pepper mix and smoky suya seasoning served hot from the grill.",
    tags: ["Protein - Beef", "Spice - Hot", "Style - Suya", "Ready - 18 min"],
    group: "grills"
  },
  "peppered-fish": {
    title: "Peppered Fish",
    kicker: "Hot Fish",
    price: "N7,500",
    calories: "620",
    image: "../assets/images/hero-jollof-premium.jpg",
    alt: "Peppered fish plate",
    description: "Roasted fish with pepper sauce, onions and a jollof rice pairing for smoky, spicy comfort.",
    tags: ["Protein - Fish", "Spice - Hot", "Serving - Large", "Ready - 28 min"],
    group: "seafood"
  },
  "crab-seafood": {
    title: "Crab Pepper Plate",
    kicker: "Crab",
    price: "N11,500",
    calories: "540",
    image: "../assets/images/crab-seafood.png",
    alt: "Crab seafood plate",
    description: "Cooked crab claws with pepper butter, lemon, herbs and a clean seafood finish.",
    tags: ["Seafood - Crab", "Sauce - Pepper Butter", "Serving - Plate", "Ready - 30 min"],
    group: "seafood"
  },
  "grilled-prawns": {
    title: "Grilled Prawns",
    kicker: "Prawns",
    price: "N9,800",
    calories: "430",
    image: "../assets/images/grilled-prawns.png",
    alt: "Grilled prawns plate",
    description: "Grilled prawns tossed in pepper garlic sauce with lemon and herbs.",
    tags: ["Seafood - Prawns", "Style - Grilled", "Sauce - Garlic Pepper", "Ready - 24 min"],
    group: "seafood"
  },
  "loaded-pizza": {
    title: "Loaded Pizza",
    kicker: "Cheesy",
    price: "N8,000",
    calories: "720",
    image: "../assets/images/pizza.jpg",
    alt: "Loaded pizza",
    description: "Warm pizza slices with melted cheese, herbs and house sauce for a rich foreign bite.",
    tags: ["Style - Pizza", "Cheese - Extra", "Serving - Shared", "Ready - 25 min"],
    group: "foreign"
  },
  "pasta-bowl": {
    title: "Creamy Pasta Bowl",
    kicker: "Creamy",
    price: "N5,500",
    calories: "580",
    image: "../assets/images/pasta.jpg",
    alt: "Creamy pasta bowl",
    description: "Soft pasta tossed with creamy sauce, herbs, mushrooms and a parmesan finish.",
    tags: ["Style - Pasta", "Sauce - Creamy", "Serving - Regular", "Ready - 20 min"],
    group: "pasta"
  },
  "tomato-basil-pasta": {
    title: "Tomato Basil Pasta",
    kicker: "Tomato",
    price: "N5,800",
    calories: "560",
    image: "../assets/images/tomato-basil-pasta.png",
    alt: "Tomato basil pasta bowl",
    description: "Spaghetti in rich tomato basil sauce with herbs and parmesan.",
    tags: ["Style - Pasta", "Sauce - Tomato Basil", "Serving - Bowl", "Ready - 20 min"],
    group: "pasta"
  },
  "chicken-alfredo-pasta": {
    title: "Chicken Alfredo Pasta",
    kicker: "Alfredo",
    price: "N6,700",
    calories: "690",
    image: "../assets/images/chicken-alfredo-pasta.png",
    alt: "Chicken alfredo pasta bowl",
    description: "Creamy alfredo pasta with herbs, parmesan and sliced chicken.",
    tags: ["Style - Pasta", "Sauce - Alfredo", "Protein - Chicken", "Ready - 22 min"],
    group: "pasta"
  },
  "burger-fries": {
    title: "Burger & Fries",
    kicker: "Combo",
    price: "N6,200",
    calories: "740",
    image: "../assets/images/burger.jpg",
    alt: "Burger and fries",
    description: "Stacked burger served with crisp fries and a chilled drink option for an easy comfort meal.",
    tags: ["Style - Burger", "Side - Fries", "Serving - Combo", "Ready - 18 min"],
    group: "foreign"
  },
  "chicken-shawarma": {
    title: "Chicken Shawarma",
    kicker: "Wrap",
    price: "N4,800",
    calories: "560",
    image: "../assets/images/burger.jpg",
    alt: "Chicken shawarma",
    description: "Soft wrap packed with chicken, vegetables, sausage and creamy house sauce.",
    tags: ["Style - Wrap", "Protein - Chicken", "Sauce - Creamy", "Ready - 14 min"],
    group: "foreign"
  },
  "small-chops-box": {
    title: "Small Chops Box",
    kicker: "Party Box",
    price: "N5,000",
    calories: "680",
    image: "../assets/images/dodo-pepper-sauce.png",
    alt: "Small chops box",
    description: "Puff puff, spring rolls, samosa and peppered bites in one party-ready box.",
    tags: ["Style - Party", "Snack - Mixed", "Serving - Box", "Ready - 18 min"],
    group: "foreign"
  },
  "chicken-caesar-salad": {
    title: "Chicken Caesar Salad",
    kicker: "Fresh Bowl",
    price: "N5,700",
    calories: "460",
    image: "../assets/images/chicken-caesar-salad.png",
    alt: "Chicken caesar salad",
    description: "Crisp greens with grilled chicken, creamy dressing, croutons and parmesan.",
    tags: ["Style - Salad", "Protein - Chicken", "Serving - Bowl", "Ready - 12 min"],
    group: "foreign"
  },
  "chocolate-cake": {
    title: "Chocolate Cake",
    kicker: "Rich & Soft",
    price: "N4,500",
    calories: "480",
    image: "../assets/images/dessert-chocolate-cake.png",
    alt: "Chocolate cake",
    description: "Moist chocolate layers with creamy filling and smooth toppings for a proper sweet finish.",
    tags: ["Dessert - Cake", "Sweetness - Rich", "Serving - Slice", "Ready - 10 min"],
    group: "desserts"
  },
  "vanilla-milkshake": {
    title: "Vanilla Milkshake",
    kicker: "Cold Drink",
    price: "N3,800",
    calories: "430",
    image: "../assets/images/dessert-vanilla-milkshake.png",
    alt: "Vanilla milkshake",
    description: "Thick, smooth and chilled vanilla shake with creamy sweetness and a clean finish.",
    tags: ["Dessert - Drink", "Style - Cold", "Serving - Cup", "Ready - 8 min"],
    group: "desserts"
  },
  "ice-cream-bowl": {
    title: "Ice Cream Bowl",
    kicker: "Frozen Treat",
    price: "N3,200",
    calories: "390",
    image: "../assets/images/dessert-ice-cream-bowl.png",
    alt: "Ice cream bowl",
    description: "Sweet scoops served cold with syrup, toppings and wafers.",
    tags: ["Dessert - Frozen", "Style - Cold", "Serving - Bowl", "Ready - 8 min"],
    group: "desserts"
  },
  "strawberry-cream-cake": {
    title: "Strawberry Cream Cake",
    kicker: "Cake Slice",
    price: "N4,800",
    calories: "510",
    image: "../assets/images/dessert-strawberry-cream-cake.png",
    alt: "Strawberry cream cake",
    description: "Soft strawberry cake with cream layers and a bright fruity finish.",
    tags: ["Dessert - Cake", "Flavour - Strawberry", "Serving - Slice", "Ready - 10 min"],
    group: "desserts"
  },
  "dessert-platter": {
    title: "Dessert Platter",
    kicker: "Sweet Box",
    price: "N8,500",
    calories: "820",
    image: "../assets/images/dessert-hero-platter.png",
    alt: "Dessert platter",
    description: "A shareable mix of cake, ice cream, toppings and chilled sweet treats.",
    tags: ["Dessert - Mixed", "Serving - Shared", "Sweetness - Rich", "Ready - 12 min"],
    group: "desserts"
  }
};

if (window.GoldenPlateExtraMealDetails) {
  Object.assign(meals, window.GoldenPlateExtraMealDetails);
}

function getMealId() {
  const params = new URLSearchParams(window.location.search);
  return params.get("meal") || "party-jollof";
}

function createMealUrl(id) {
  return `meal.html?meal=${encodeURIComponent(id)}`;
}

function renderMeal(mealId) {
  const meal = meals[mealId] || meals["party-jollof"];
  const image = document.querySelector("[data-meal-image]");
  const title = document.querySelector("[data-meal-title]");
  const kicker = document.querySelector("[data-meal-kicker]");
  const price = document.querySelector("[data-meal-price]");
  const calories = document.querySelector("[data-meal-calories]");
  const tags = document.querySelector("[data-meal-tags]");
  const description = document.querySelector("[data-meal-description]");
  const relatedMeals = document.querySelector("[data-related-meals]");

  document.title = `The Golden Plate | ${meal.title}`;
  image.src = meal.image;
  image.alt = meal.alt;
  title.textContent = meal.title;
  kicker.textContent = meal.kicker;
  price.textContent = meal.price;
  calories.innerHTML = `${meal.calories}<br>kcal`;
  description.textContent = meal.description;
  tags.innerHTML = meal.tags.map((tag) => `<span>${tag}</span>`).join("");

  const related = Object.entries(meals)
    .filter(([id, item]) => id !== mealId && item.group === meal.group)
    .slice(0, 2);

  const moreMeals = Object.entries(meals)
    .filter(([id]) => id !== mealId && !related.some(([relatedId]) => relatedId === id))
    .slice(0, 5);

  relatedMeals.innerHTML = `
    <div class="related-grid">
      ${related.map(([id, item]) => `
        <a class="mini-meal" href="${createMealUrl(id)}">
          <div class="meal-dots" aria-hidden="true"><span></span><span></span><span></span></div>
          <span class="calorie-badge">${item.calories}<br>kcal</span>
          <img src="${item.image}" alt="${item.alt}">
          <h2>${item.title}</h2>
          <p>${item.description}</p>
          <footer>
            <div class="quantity"><span>-</span><span>0</span><span>+</span></div>
            <strong>${item.price}</strong>
            <span class="mini-cart">View</span>
          </footer>
        </a>
      `).join("")}
    </div>

    <div class="more-meals" aria-label="More meals">
      <div class="more-meals-heading">
        <span>More meals</span>
        <a href="../Menu/menu.html">View menu</a>
      </div>
      <div class="more-meal-list">
        ${moreMeals.map(([id, item]) => `
          <a class="more-meal" href="${createMealUrl(id)}">
            <img src="${item.image}" alt="${item.alt}">
            <span>${item.kicker}</span>
            <strong>${item.title}</strong>
            <small>${item.price}</small>
          </a>
        `).join("")}
      </div>
    </div>
  `;
}

renderMeal(getMealId());

const spiceLevel = document.querySelector("[data-spice-level]");
const cutlery = document.querySelector("[data-cutlery]");
const addToCartButton = document.querySelector(".add-cart");

function updateCustomCartTitle() {
  const meal = meals[getMealId()] || meals["party-jollof"];
  const extras = [`${spiceLevel.value} spice`];
  if (cutlery.checked) extras.push("cutlery");
  addToCartButton.dataset.cartTitle = `${meal.title} (${extras.join(", ")})`;
}

spiceLevel.addEventListener("change", updateCustomCartTitle);
cutlery.addEventListener("change", updateCustomCartTitle);
updateCustomCartTitle();
