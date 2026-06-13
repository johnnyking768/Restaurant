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
    group: "naija"
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
  "grilled-chicken": {
    title: "Grilled Chicken Plate",
    kicker: "Chef Pick",
    price: "N6,800",
    calories: "520",
    image: "../assets/images/grilled-chicken.jpg",
    alt: "Grilled chicken plate",
    description: "Juicy flame-grilled chicken with herbs, pepper sauce and a side built for serious lunch cravings.",
    tags: ["Protein - Chicken", "Spice - Medium", "Serving - Regular", "Ready - 22 min"],
    group: "grills"
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
    group: "grills"
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
    group: "foreign"
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
  }
};

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
    .slice(0, 4);

  relatedMeals.innerHTML = related.map(([id, item]) => `
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
  `).join("");
}

renderMeal(getMealId());
