(function () {
  const CART_STORAGE_KEY = "goldenPlateCartCount";
  const CART_ITEMS_KEY = "goldenPlateCartItems";

  if (!document.querySelector(".whatsapp-help")) {
    const whatsappHelp = document.createElement("a");
    whatsappHelp.className = "whatsapp-help";
    whatsappHelp.href = "https://wa.me/2348028084696?text=Hello%20Golden%20Plate%2C%20I%20need%20help%20with%20my%20order.";
    whatsappHelp.target = "_blank";
    whatsappHelp.rel = "noopener";
    whatsappHelp.setAttribute("aria-label", "Chat with Golden Plate on WhatsApp");
    whatsappHelp.innerHTML = '<span aria-hidden="true">⌕</span><strong>Need help?</strong>';
    document.body.append(whatsappHelp);
    document.body.classList.toggle("has-social-rail", Boolean(document.querySelector(".social-rail")));

    const whatsappStyle = document.createElement("style");
    whatsappStyle.textContent = `
      .whatsapp-help { position: fixed; right: 26px; bottom: 26px; z-index: 80; display: inline-flex; align-items: center; gap: 11px; min-height: 62px; padding: 0 24px; border: 1px solid rgba(255,255,255,.22); border-radius: 999px; color: #fff; background: #25d366; box-shadow: 0 16px 34px rgba(0,0,0,.28); font: 900 16px Inter, sans-serif; transition: transform .2s ease; }
      .whatsapp-help:hover { transform: translateY(-4px); }
      .whatsapp-help span { display: grid; width: 26px; height: 26px; place-items: center; border: 2px solid currentColor; border-radius: 50%; font-size: 18px; line-height: 1; }
      @media (max-width: 640px) { .whatsapp-help { right: 14px; bottom: 14px; width: 50px; height: 50px; min-height: 50px; justify-content: center; padding: 0; } body.has-social-rail .whatsapp-help { bottom: 94px; } .whatsapp-help strong { display: none; } }
    `;
    document.head.append(whatsappStyle);
  }

  // Category pages use several header designs. Add one consistent cart shortcut
  // here so every category gets it without duplicating markup in each page.
  const categoryTopbar = window.location.pathname.includes("/Category/")
    ? document.querySelector(".topbar")
    : null;
  if (categoryTopbar && !categoryTopbar.querySelector(".category-cart-button")) {
    const cartButton = document.createElement("a");
    cartButton.className = "category-cart-button";
    cartButton.href = "../../Cart/cart.html";
    cartButton.setAttribute("aria-label", "Open cart");
    cartButton.innerHTML = `
      <span class="category-cart-icon" aria-hidden="true"></span>
      <span class="category-cart-label">Cart</span>
      <span class="category-cart-count" data-cart-count>0</span>
    `;
    const searchButton = document.createElement("button");
    searchButton.className = "icon-button category-search-button";
    searchButton.type = "button";
    searchButton.setAttribute("aria-label", "Search meals");
    searchButton.innerHTML = "<span></span>";

    const categoryHeaderActions = document.createElement("div");
    categoryHeaderActions.className = "category-header-actions";
    categoryHeaderActions.append(searchButton, cartButton);
    categoryTopbar.append(categoryHeaderActions);

    const categoryCartStyles = document.createElement("style");
    categoryCartStyles.textContent = `
      .topbar .category-cart-button {
        position: relative;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        min-height: 46px;
        padding: 0 13px;
        border: 1px solid color-mix(in srgb, var(--accent), transparent 56%);
        border-radius: 999px;
        color: var(--white, #fff);
        background: rgba(7, 8, 9, 0.7);
        font-size: 13px;
        font-weight: 900;
        transition: transform 0.2s ease, background 0.2s ease;
      }
      .topbar .category-search-button {
        position: relative;
        display: inline-grid;
        width: 46px;
        height: 46px;
        place-items: center;
        flex: 0 0 auto;
        border: 1px solid color-mix(in srgb, var(--accent), transparent 56%);
        border-radius: 50%;
        color: var(--accent);
        background: rgba(7, 8, 9, 0.7);
      }
      .topbar .category-search-button span {
        position: relative;
        width: 15px;
        height: 15px;
        border: 2px solid currentColor;
        border-radius: 50%;
      }
      .topbar .category-search-button span::after {
        content: "";
        position: absolute;
        right: -7px;
        bottom: -5px;
        width: 8px;
        height: 2px;
        border-radius: 999px;
        background: currentColor;
        transform: rotate(45deg);
      }
      .topbar .category-search-button:hover {
        color: var(--ink, #08090c);
        background: var(--accent);
      }
      .topbar nav { margin-left: auto; }
      .topbar .category-header-actions { display: flex; align-items: center; gap: 12px; }
      .meal-card, .dessert-card, .dish-card { cursor: pointer; }
      .meal-card .card-bottom button, .dessert-card .card-bottom button, .dish-card .card-bottom button { display: none; }
      .meal-card .card-bottom, .dessert-card .card-bottom, .dish-card .card-bottom { justify-content: flex-start; }
      .meal-card .card-img, .dessert-card .card-image, .dessert-card .card-img, .dish-card .card-img { position: relative; cursor: pointer; }
      .dish-card:not(:has(.card-img)) { position: relative; }
      .meal-card .card-img::after, .dessert-card .card-image::after, .dessert-card .card-img::after, .dish-card .card-img::after, .dish-card:not(:has(.card-img))::after { content: "View&Customize"; position: absolute; inset: auto 12px 12px; z-index: 3; display: grid; min-height: 36px; place-items: center; border-radius: 999px; color: var(--ink, #111); background: var(--accent, var(--gold, #c8952d)); font-size: 12px; font-weight: 900; opacity: 0; transform: translateY(8px); transition: .2s ease; pointer-events: none; }
      .dish-card:not(:has(.card-img))::after { top: 207px; bottom: auto; }
      .meal-card:hover .card-img::after, .meal-card:focus-within .card-img::after, .dessert-card:hover .card-image::after, .dessert-card:focus-within .card-image::after, .dessert-card:hover .card-img::after, .dessert-card:focus-within .card-img::after, .dish-card:hover .card-img::after, .dish-card:focus-within .card-img::after, .dish-card:not(:has(.card-img)):hover::after, .dish-card:not(:has(.card-img)):focus-within::after { opacity: 1; transform: translateY(0); }
      .topbar .category-cart-button:hover {
        transform: translateY(-2px);
        background: var(--accent);
        color: var(--ink, #08090c);
      }
      .category-cart-icon {
        position: relative;
        width: 17px;
        height: 13px;
        border: 2px solid currentColor;
        border-top: 0;
        border-radius: 2px 2px 5px 5px;
      }
      .category-cart-icon::before,
      .category-cart-icon::after {
        content: "";
        position: absolute;
        bottom: -6px;
        width: 3px;
        height: 3px;
        border-radius: 50%;
        background: currentColor;
      }
      .category-cart-icon::before { left: 1px; }
      .category-cart-icon::after { right: 1px; }
      .category-cart-count {
        display: grid;
        min-width: 19px;
        height: 19px;
        place-items: center;
        border-radius: 999px;
        color: var(--ink, #08090c);
        background: var(--accent);
        font-size: 11px;
      }
      @media (max-width: 640px) {
        .topbar {
          grid-template-columns: minmax(0, 1fr) auto auto auto !important;
        }
        .topbar .brand { grid-column: 1; }
        .topbar .category-header-actions { display: contents; }
        .topbar .category-search-button {
          grid-row: 1;
          grid-column: 2;
          width: 42px;
          height: 42px;
        }
        .topbar .category-cart-button {
          grid-row: 1;
          grid-column: 3;
          width: 44px;
          min-height: 44px;
          padding: 0;
          gap: 0;
        }
        .topbar .category-cart-label { display: none; }
        .topbar .category-cart-count {
          position: absolute;
          top: -5px;
          right: -5px;
        }
        .meal-card .card-img::after, .dessert-card .card-image::after, .dessert-card .card-img::after, .dish-card .card-img::after, .dish-card:not(:has(.card-img))::after {
          inset: auto 10px 10px;
          min-height: 34px;
          font-size: 11px;
          opacity: 1;
          transform: translateY(0);
        }
        .dish-card:not(:has(.card-img))::after {
          top: 209px;
          bottom: auto;
        }
        .topbar .menu-button {
          grid-row: 1;
          grid-column: 4;
          position: relative;
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 5px;
          overflow: visible;
          transition: border-color 0.2s ease, background 0.2s ease;
        }
        .topbar .menu-button span:not(.sr-only) {
          width: 19px;
          height: 2px;
          border-radius: 999px;
          background: var(--accent);
          box-shadow: 0 0 8px color-mix(in srgb, var(--accent), transparent 62%);
          transition: transform 0.22s ease, opacity 0.18s ease, width 0.22s ease;
        }
        .topbar .menu-button span:nth-child(2) { width: 14px; }
        .topbar .menu-button:hover { border-color: var(--accent); }
        .topbar .nav-toggle:checked + .menu-button {
          border-color: var(--accent);
          background: rgba(200, 149, 45, 0.14);
        }
        .topbar .nav-toggle:checked + .menu-button span:first-child {
          transform: translateY(7px) rotate(45deg);
        }
        .topbar .nav-toggle:checked + .menu-button span:nth-child(2) {
          width: 19px;
          opacity: 0;
          transform: scaleX(0);
        }
        .topbar .nav-toggle:checked + .menu-button span:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
        }
        .topbar nav {
          grid-column: 1 / -1;
          margin-left: 0;
          gap: 6px;
          border-color: rgba(200, 149, 45, 0.36);
          background: rgba(12, 14, 18, 0.98);
          box-shadow: 0 18px 38px rgba(0, 0, 0, 0.34);
        }
        .topbar nav a {
          display: flex;
          align-items: center;
          justify-content: space-between;
          min-height: 46px;
          padding: 12px 14px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 8px;
          text-align: left;
        }
      }
    `;
    document.head.append(categoryCartStyles);
  }

  const cartCounters = document.querySelectorAll("[data-cart-count], .cart-button span");

  if (window.location.pathname.includes("/Category/")) {
    document.addEventListener("click", (event) => {
      const card = event.target.closest(".meal-card, .dessert-card, .dish-card");
      if (!card || event.target.closest("a, button, input, select, textarea")) {
        return;
      }

      const mealId = card.dataset.meal;
      if (mealId) {
        window.location.href = `../../Meal/meal.html?meal=${encodeURIComponent(mealId)}`;
      }
    });
  }
  const fallbackMeals = {
    "party-jollof": {
      title: "Party Jollof Combo",
      price: "N7,500",
      image: "../assets/images/hero-jollof-premium.jpg",
      alt: "Party jollof combo"
    },
    "chicken-jollof": {
      title: "Chicken Jollof Rice",
      price: "N5,900",
      image: "../assets/images/jollof-rice.jpg",
      alt: "Jollof rice with chicken"
    },
    "fried-rice-chicken": {
      title: "Fried Rice & Chicken",
      price: "N6,400",
      image: "../assets/images/jollof-rice.jpg",
      alt: "Fried rice with chicken"
    },
    "coconut-rice-prawns": {
      title: "Coconut Rice & Prawns",
      price: "N7,000",
      image: "../assets/images/hero-jollof.jpg",
      alt: "Coconut rice with prawns"
    },
    "ofada-rice-sauce": {
      title: "Ofada Rice & Ayamase",
      price: "N7,300",
      image: "../assets/images/plantain-meal.jpg",
      alt: "Ofada rice with ayamase sauce"
    },
    "white-rice-stew": {
      title: "White Rice & Beef Stew",
      price: "N5,500",
      image: "../assets/images/jollof-rice.jpg",
      alt: "White rice with beef stew"
    },
    "beans-plantain": {
      title: "Beans & Plantain",
      price: "N4,200",
      image: "../assets/images/dodo-pepper-sauce.png",
      alt: "Beans and fried plantain"
    },
    "ewa-agoyin": {
      title: "Ewa Agoyin",
      price: "N4,800",
      image: "../assets/images/plantain-meal.jpg",
      alt: "Ewa agoyin beans"
    },
    "moi-moi-plate": {
      title: "Moi Moi Plate",
      price: "N3,500",
      image: "../assets/images/amala-ewedu-fresh.png",
      alt: "Moi moi plate"
    },
    "akara-pap": {
      title: "Akara & Pap",
      price: "N3,800",
      image: "../assets/images/suya-plate.png",
      alt: "Akara and pap"
    },
    "yam-porridge": {
      title: "Yam Porridge",
      price: "N5,200",
      image: "../assets/images/plantain-meal.jpg",
      alt: "Yam porridge"
    },
    "efo-riro-semolina": {
      title: "Efo Riro & Semolina",
      price: "N6,700",
      image: "../assets/images/egusi-soup.jpg",
      alt: "Efo riro with semolina"
    },
    "catfish-pepper-soup": {
      title: "Catfish Pepper Soup",
      price: "N7,800",
      image: "../assets/images/hero-jollof-premium.jpg",
      alt: "Catfish pepper soup"
    },
    "grilled-chicken": {
      title: "Grilled Chicken Plate",
      price: "N6,800",
      image: "../assets/images/grilled-chicken.jpg",
      alt: "Grilled chicken plate"
    },
    "steamed-chicken": {
      title: "Steamed Chicken",
      price: "N6,200",
      image: "../assets/images/steamed-chicken.png",
      alt: "Steamed chicken plate"
    },
    "fried-chicken": {
      title: "Fried Chicken",
      price: "N6,500",
      image: "../assets/images/fried-chicken.png",
      alt: "Crispy fried chicken plate"
    },
    "pasta-bowl": {
      title: "Creamy Pasta Bowl",
      price: "N5,500",
      image: "../assets/images/pasta.jpg",
      alt: "Creamy pasta bowl"
    },
    "tomato-basil-pasta": {
      title: "Tomato Basil Pasta",
      price: "N5,800",
      image: "../assets/images/tomato-basil-pasta.png",
      alt: "Tomato basil pasta bowl"
    },
    "chicken-alfredo-pasta": {
      title: "Chicken Alfredo Pasta",
      price: "N6,700",
      image: "../assets/images/chicken-alfredo-pasta.png",
      alt: "Chicken alfredo pasta bowl"
    },
    "beef-suya": {
      title: "Beef Suya Plate",
      price: "N5,800",
      image: "../assets/images/suya-plate.png",
      alt: "Beef suya plate"
    },
    "peppered-fish": {
      title: "Peppered Fish",
      price: "N7,500",
      image: "../assets/images/hero-jollof-premium.jpg",
      alt: "Peppered fish plate"
    },
    "crab-seafood": {
      title: "Crab Pepper Plate",
      price: "N11,500",
      image: "../assets/images/crab-seafood.png",
      alt: "Crab seafood plate"
    },
    "grilled-prawns": {
      title: "Grilled Prawns",
      price: "N9,800",
      image: "../assets/images/grilled-prawns.png",
      alt: "Grilled prawns plate"
    },
    "loaded-pizza": {
      title: "Loaded Pizza",
      price: "N8,000",
      image: "../assets/images/pizza.jpg",
      alt: "Loaded pizza"
    },
    "burger-fries": {
      title: "Burger & Fries",
      price: "N6,200",
      image: "../assets/images/burger.jpg",
      alt: "Burger and fries"
    },
    "chicken-shawarma": {
      title: "Chicken Shawarma",
      price: "N4,800",
      image: "../assets/images/burger.jpg",
      alt: "Chicken shawarma"
    },
    "small-chops-box": {
      title: "Small Chops Box",
      price: "N5,000",
      image: "../assets/images/dodo-pepper-sauce.png",
      alt: "Small chops box"
    },
    "chicken-caesar-salad": {
      title: "Chicken Caesar Salad",
      price: "N5,700",
      image: "../assets/images/chicken-caesar-salad.png",
      alt: "Chicken caesar salad"
    },
    "chocolate-cake": {
      title: "Chocolate Cake",
      price: "N4,500",
      image: "../assets/images/dessert-chocolate-cake.png",
      alt: "Chocolate cake"
    },
    "vanilla-milkshake": {
      title: "Vanilla Milkshake",
      price: "N3,800",
      image: "../assets/images/dessert-vanilla-milkshake.png",
      alt: "Vanilla milkshake"
    },
    "ice-cream-bowl": {
      title: "Ice Cream Bowl",
      price: "N3,200",
      image: "../assets/images/dessert-ice-cream-bowl.png",
      alt: "Ice cream bowl"
    },
    "strawberry-cream-cake": {
      title: "Strawberry Cream Cake",
      price: "N4,800",
      image: "../assets/images/dessert-strawberry-cream-cake.png",
      alt: "Strawberry cream cake"
    },
    "dessert-platter": {
      title: "Dessert Platter",
      price: "N8,500",
      image: "../assets/images/dessert-hero-platter.png",
      alt: "Dessert platter"
    }
  };

  if (window.GoldenPlateExtraMealDetails) {
    Object.assign(fallbackMeals, window.GoldenPlateExtraMealDetails);
  }

  function getCartUrl() {
    const path = window.location.pathname;

    if (path.includes("/Cart/")) {
      return "cart.html";
    }

    if (path.includes("/Category/")) {
      return "../../Cart/cart.html";
    }

    return "../Cart/cart.html";
  }

  function getMenuUrl(searchTerm = "") {
    const path = window.location.pathname;
    const query = searchTerm.trim()
      ? `?search=${encodeURIComponent(searchTerm.trim())}`
      : "";

    if (path.includes("/Menu/")) {
      return `menu.html${query}`;
    }

    if (path.includes("/Category/")) {
      return `../../Menu/menu.html${query}`;
    }

    return `../Menu/menu.html${query}`;
  }

  function getMealIdFromUrl(url) {
    try {
      return new URL(url, window.location.href).searchParams.get("meal");
    } catch (error) {
      return null;
    }
  }

  function resolveAssetUrl(src) {
    try {
      return new URL(src, window.location.href).href;
    } catch (error) {
      return src;
    }
  }

  function getCartItems() {
    try {
      const savedItems = JSON.parse(localStorage.getItem(CART_ITEMS_KEY));
      return Array.isArray(savedItems) ? savedItems : [];
    } catch (error) {
      return [];
    }
  }

  function getCartCount() {
    return getCartItems().reduce((total, item) => total + item.quantity, 0);
  }

  function renderCartCount(count) {
    cartCounters.forEach((counter) => {
      counter.textContent = String(count);
    });
  }

  function setCartCount(count) {
    localStorage.setItem(CART_STORAGE_KEY, String(count));
    renderCartCount(count);
  }

  function saveCartItems(items) {
    localStorage.setItem(CART_ITEMS_KEY, JSON.stringify(items));
    setCartCount(items.reduce((total, item) => total + item.quantity, 0));
  }

  function createItemFromButton(button) {
    const card = button.closest(".dish-card, .meal-card, .dessert-card, .search-result-card");
    const mealId = card?.dataset.meal || getMealIdFromUrl(card?.href || window.location.href);
    const fallbackMeal = fallbackMeals[mealId] || {};
    const title = button.dataset.cartTitle
      || card?.querySelector("h3")?.textContent.trim()
      || document.querySelector("[data-meal-title]")?.textContent.trim()
      || fallbackMeal.title
      || "Golden Plate Meal";
    const price = card?.querySelector("strong")?.textContent.trim()
      || document.querySelector("[data-meal-price]")?.textContent.trim()
      || fallbackMeal.price
      || "N0";
    const image = card?.querySelector("img")?.getAttribute("src")
      || document.querySelector("[data-meal-image]")?.getAttribute("src")
      || fallbackMeal.image
      || "";
    const alt = card?.querySelector("img")?.getAttribute("alt")
      || document.querySelector("[data-meal-image]")?.getAttribute("alt")
      || fallbackMeal.alt
      || title;

    return {
      id: mealId || title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""),
      title,
      price,
      image: resolveAssetUrl(image),
      alt,
      quantity: 1
    };
  }

  function addToCart(itemOrQuantity = 1) {
    const item = typeof itemOrQuantity === "object"
      ? itemOrQuantity
      : { title: "Golden Plate Meal", price: "N0", quantity: itemOrQuantity };
    const normalizedItem = {
      ...item,
      image: item.image ? resolveAssetUrl(item.image) : ""
    };
    const items = getCartItems();
    const itemId = normalizedItem.id || normalizedItem.title;
    const existingItem = items.find((cartItem) => cartItem.id === itemId);

    if (existingItem) {
      existingItem.quantity += normalizedItem.quantity || 1;
    } else {
      items.push({ ...normalizedItem, id: itemId, quantity: normalizedItem.quantity || 1 });
    }

    saveCartItems(items);
    return getCartCount();
  }

  function showAddedState(button) {
    const originalText = button.textContent;
    button.textContent = "Added";
    button.disabled = true;

    window.setTimeout(() => {
      button.textContent = originalText;
      button.disabled = false;
    }, 900);
  }

  window.GoldenPlateCart = {
    addItem: addToCart,
    getItems: getCartItems,
    getCount: getCartCount,
    saveItems: saveCartItems,
    setCount: setCartCount
  };

  renderCartCount(getCartCount());

  document.querySelectorAll(".cart-button").forEach((button) => {
    button.addEventListener("click", () => {
      window.location.href = getCartUrl();
    });
  });

  function openGlobalSearch() {
    const existingSearchForm = document.querySelector("[data-meal-search]");

    if (existingSearchForm) {
      const existingSearchInput = document.querySelector("[data-search-input]");
      existingSearchInput?.focus();
      return;
    }

    let modal = document.querySelector("[data-global-search-modal]");

    if (!modal) {
      modal = document.createElement("section");
      modal.className = "global-search-modal";
      modal.setAttribute("data-global-search-modal", "");
      modal.innerHTML = `
        <button class="global-search-backdrop" type="button" data-close-global-search aria-label="Close search"></button>
        <form class="global-search-panel" data-global-search-form>
          <div>
            <span>Search meals</span>
            <button type="button" data-close-global-search aria-label="Close search">x</button>
          </div>
          <label>
            <span>What are you craving?</span>
            <input type="search" name="mealSearch" placeholder="Rice, beans, suya, cake..." autocomplete="off" required>
          </label>
          <button type="submit">Search Menu</button>
          <nav aria-label="Quick meal searches">
            <button type="button" data-global-term="rice">Rice</button>
            <button type="button" data-global-term="beans">Beans</button>
            <button type="button" data-global-term="chicken">Chicken</button>
            <button type="button" data-global-term="all meals">All Meals</button>
          </nav>
        </form>
      `;
      document.body.appendChild(modal);
    }

    function closeSearch() {
      modal.classList.remove("is-open");
      document.body.classList.remove("search-open");
    }

    function submitSearch(term) {
      if (!term.trim()) {
        return;
      }

      window.location.href = getMenuUrl(term);
    }

    modal.querySelectorAll("[data-close-global-search]").forEach((button) => {
      button.onclick = closeSearch;
    });

    modal.querySelector("[data-global-search-form]").onsubmit = (event) => {
      event.preventDefault();
      submitSearch(new FormData(event.currentTarget).get("mealSearch") || "");
    };

    modal.querySelectorAll("[data-global-term]").forEach((button) => {
      button.onclick = () => submitSearch(button.dataset.globalTerm || "");
    });

    document.body.classList.add("search-open");
    modal.classList.add("is-open");
    window.setTimeout(() => modal.querySelector("input")?.focus(), 30);
  }

  if (!document.querySelector("[data-global-search-style]")) {
    const style = document.createElement("style");
    style.setAttribute("data-global-search-style", "");
    style.textContent = `
      .global-search-modal {
        position: fixed;
        inset: 0;
        z-index: 80;
        display: none;
        place-items: center;
        padding: 24px;
      }

      .global-search-modal.is-open {
        display: grid;
      }

      .global-search-backdrop {
        position: absolute;
        inset: 0;
        border: 0;
        background: rgba(5, 6, 9, 0.72);
        backdrop-filter: blur(10px);
      }

      .global-search-panel {
        position: relative;
        z-index: 1;
        display: grid;
        gap: 16px;
        width: min(520px, 100%);
        padding: 22px;
        border: 1px solid rgba(255, 255, 255, 0.16);
        border-radius: 8px;
        color: #fff;
        background: #11151d;
        box-shadow: 0 30px 90px rgba(0, 0, 0, 0.42);
      }

      .global-search-panel > div,
      .global-search-panel nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        flex-wrap: wrap;
      }

      .global-search-panel > div > span {
        color: #d8b766;
        font-weight: 900;
        text-transform: uppercase;
      }

      .global-search-panel > div button,
      .global-search-panel nav button {
        border: 0;
        border-radius: 999px;
        font: inherit;
        font-weight: 900;
        cursor: pointer;
      }

      .global-search-panel > div button {
        width: 34px;
        height: 34px;
        color: #111;
        background: #c8952d;
      }

      .global-search-panel label {
        display: grid;
        gap: 8px;
        color: rgba(255, 255, 255, 0.7);
        font-weight: 800;
      }

      .global-search-panel input {
        width: 100%;
        min-height: 54px;
        padding: 0 16px;
        border: 1px solid rgba(255, 255, 255, 0.14);
        border-radius: 8px;
        outline: 0;
        color: #111;
        background: #fff;
        font: inherit;
        font-weight: 800;
      }

      .global-search-panel > button {
        min-height: 52px;
        border: 0;
        border-radius: 999px;
        color: #111;
        background: #c8952d;
        font: inherit;
        font-weight: 900;
        cursor: pointer;
      }

      .global-search-panel nav {
        justify-content: flex-start;
      }

      .global-search-panel nav button {
        min-height: 38px;
        padding: 0 14px;
        color: #d8b766;
        background: rgba(255, 255, 255, 0.08);
        border: 1px solid rgba(200, 149, 45, 0.28);
      }
    `;
    document.head.appendChild(style);
  }

  if (!document.querySelector("[data-brand-tone-style]")) {
    const style = document.createElement("style");
    style.setAttribute("data-brand-tone-style", "");
    style.textContent = `
      :root {
        --gold: #c8952d;
        --gold-deep: #9f7421;
        --gold-soft: #d8b766;
        --ink: #0d0f12;
        --charcoal: #15171b;
        --charcoal-soft: #22252b;
        --paper: #f3efe6;
        --panel: #f5f0e7;
        --muted: #b9b4aa;
      }

      .gold-panel {
        background: linear-gradient(160deg, #2a2416, #c8952d);
        opacity: 0.72;
        box-shadow: none;
      }

      .gold-arc,
      .glow,
      .hero-glow,
      .food-orbit-piece {
        opacity: 0.18;
        filter: blur(42px);
      }

      .hero,
      .menu-hero,
      .location-hero,
      .contact-hero {
        background:
          linear-gradient(90deg, rgba(24, 26, 30, 0.96), rgba(10, 11, 13, 0.98) 58%, rgba(84, 67, 31, 0.72) 58%),
          #101215 !important;
      }

      .menu-hero::before,
      .hero::before,
      .spotlight-frame::before,
      .spotlight-frame::after {
        opacity: 0.35;
      }

      .hero h1,
      .menu-hero h1,
      .location-hero h1,
      .contact-hero h1,
      .spotlight-copy h2 {
        background: none !important;
        -webkit-text-fill-color: currentColor !important;
        color: #f8f5ee !important;
        filter: none !important;
        animation: none !important;
      }

      .tagline,
      .eyebrow,
      .section-heading p,
      .section-kicker,
      .board-copy p,
      .board-feature span,
      .board-menu span,
      .cart-summary > p,
      .checkout-summary > p {
        color: var(--gold-soft) !important;
        text-shadow: none !important;
      }

      .brand,
      .nav-links,
      .nav-actions,
      .meal-card,
      .spotlight-frame,
      .cart-item,
      .cart-summary,
      .checkout-form,
      .checkout-summary,
      .contact-card,
      .location-map-card,
      .board-copy,
      .board-feature,
      .board-menu {
        box-shadow: 0 18px 42px rgba(0, 0, 0, 0.22) !important;
      }

      .brand,
      .nav-links,
      .mobile-nav-panel {
        background: rgba(14, 15, 18, 0.72) !important;
      }

      .brand::before {
        background:
          radial-gradient(circle at 50% 50%, var(--gold) 0 29%, transparent 31%),
          radial-gradient(circle at 50% 50%, transparent 0 54%, #f8f5ee 56% 62%, transparent 64%),
          linear-gradient(145deg, #b98b2d, #d5b76a) !important;
        box-shadow: none !important;
      }

      .solid-pill,
      .search-panel button,
      .category-card.text-card span,
      .dish-card button,
      .add-cart,
      .mini-cart,
      .cart-summary button,
      .checkout-form > button,
      .board-tags a,
      .board-feature a,
      .board-menu-cta,
      .contact-form button,
      .location-actions a:first-child,
      .contact-actions a:first-child {
        background: var(--gold) !important;
        color: #111 !important;
        box-shadow: none !important;
      }

      .icon-button,
      .cart-button,
      .menu-button,
      .strip-arrow,
      .side-rail a,
      .side-rail button,
      .steps-grid span,
      .stat-icon {
        background: #181a1e !important;
        color: var(--gold-soft) !important;
        box-shadow: none !important;
      }

      .food-marquee,
      .feast-cta {
        background: #1a1d21 !important;
        color: #f8f5ee !important;
      }

      .marquee-track a {
        background: rgba(255, 255, 255, 0.08) !important;
        border: 1px solid rgba(255, 255, 255, 0.12);
      }

      .food-marquee::before,
      .food-marquee::after {
        display: none;
      }

      .category-showcase,
      .popular,
      .contact-info,
      .contact-faq {
        background: var(--paper) !important;
      }

      .category-card,
      .dish-card,
      .contact-info article,
      .contact-faq details,
      .more-meals {
        background: rgba(255, 255, 255, 0.76) !important;
        box-shadow: 0 14px 34px rgba(20, 20, 20, 0.08) !important;
      }

      .gold-orbit {
        box-shadow:
          0 0 0 10px rgba(255, 255, 255, 0.1),
          0 0 0 18px rgba(200, 149, 45, 0.28) !important;
        border-color: rgba(255, 255, 255, 0.82) !important;
      }

      .plate-rings {
        box-shadow:
          0 0 0 8px rgba(255, 255, 255, 0.04),
          0 26px 70px rgba(0, 0, 0, 0.42) !important;
      }

      .plate-rings::after {
        border-color: rgba(200, 149, 45, 0.75) !important;
      }

      .spotlight-frame {
        background:
          linear-gradient(135deg, #181b20 0%, #0d0f12 62%, #2a2416 62%) !important;
      }

      .text-card {
        background: linear-gradient(135deg, #191c21, #25272c) !important;
      }

      .dish-tag,
      .meal-tags span,
      .quick-restaurants span {
        background: rgba(200, 149, 45, 0.12) !important;
        border-color: rgba(200, 149, 45, 0.28) !important;
        color: #6d511e !important;
      }

      @media (max-width: 1080px) {
        .menu-hero,
        .hero,
        .location-hero,
        .contact-hero {
          background:
            linear-gradient(180deg, rgba(18, 20, 23, 0.98) 0%, rgba(18, 20, 23, 0.98) 56%, rgba(84, 67, 31, 0.7) 56%),
            #101215 !important;
        }
      }
    `;
    document.head.appendChild(style);
  }

  function setupFloatingNavbar() {
    const navbar = document.querySelector(".navbar");

    if (!navbar) {
      return;
    }

    if (!document.querySelector("[data-floating-nav-style]")) {
      const style = document.createElement("style");
      style.setAttribute("data-floating-nav-style", "");
      style.textContent = `
        @keyframes floatingNavIn {
          from {
            opacity: 0;
            transform: translateY(-18px) scale(0.985);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        body.has-floating-nav .navbar {
          position: fixed !important;
          z-index: 75 !important;
          top: 12px !important;
          left: clamp(18px, 4vw, 72px) !important;
          right: clamp(18px, 4vw, 72px) !important;
          width: auto !important;
          max-width: none !important;
          min-height: 66px !important;
          margin: 0 !important;
          padding: 8px 12px !important;
          border: 1px solid rgba(255, 255, 255, 0.14) !important;
          border-radius: 999px !important;
          background: rgba(11, 12, 15, 0.82) !important;
          box-shadow: 0 20px 55px rgba(0, 0, 0, 0.32) !important;
          backdrop-filter: blur(18px);
          animation: floatingNavIn 0.42s ease both !important;
        }

        body.has-floating-nav .navbar .brand,
        body.has-floating-nav .navbar .nav-links,
        body.has-floating-nav .navbar .nav-actions {
          background: rgba(18, 20, 24, 0.76) !important;
          box-shadow: none !important;
        }

        body.has-floating-nav .navbar .brand {
          min-height: 46px !important;
        }

        body.has-floating-nav .navbar .nav-links {
          min-height: 50px !important;
        }

        body.has-floating-nav .navbar .nav-links a {
          min-height: 40px !important;
        }

        body.has-floating-nav .mobile-nav-panel {
          top: 86px !important;
        }

        @media (max-width: 1080px) {
          body.has-floating-nav .navbar {
            min-height: 58px !important;
          }
        }

        @media (max-width: 640px) {
          body.has-floating-nav .navbar {
            top: 10px !important;
            left: 10px !important;
            right: 10px !important;
            gap: 8px !important;
            min-height: 58px !important;
            padding: 7px 8px !important;
            border-radius: 24px !important;
          }

          body.has-floating-nav .navbar .brand {
            flex: 1 1 auto !important;
            min-width: 0 !important;
            max-width: calc(100vw - 158px) !important;
            min-height: 42px !important;
            overflow: hidden !important;
            font-size: 12px !important;
          }

          body.has-floating-nav .navbar .brand strong,
          body.has-floating-nav .navbar .brand {
            white-space: nowrap !important;
            text-overflow: ellipsis !important;
          }

          body.has-floating-nav .navbar .nav-actions {
            flex: 0 0 auto !important;
            gap: 6px !important;
            padding: 4px !important;
          }

          body.has-floating-nav .navbar .icon-button,
          body.has-floating-nav .navbar .cart-button,
          body.has-floating-nav .navbar .menu-button {
            width: 38px !important;
            height: 38px !important;
          }

          body.has-floating-nav .mobile-nav-panel {
            top: 76px !important;
            right: 10px !important;
            width: min(290px, calc(100vw - 20px)) !important;
          }
        }
      `;
      document.head.appendChild(style);
    }

    function updateFloatingNav() {
      document.body.classList.toggle("has-floating-nav", window.scrollY > 36);
    }

    updateFloatingNav();
    window.addEventListener("scroll", updateFloatingNav, { passive: true });
  }

  setupFloatingNavbar();

  function setupFloatingCategoryNavbar() {
    if (!window.location.pathname.includes("/Category/")) {
      return;
    }

    const topbar = document.querySelector(".topbar");
    if (!topbar) {
      return;
    }

    if (!document.querySelector("[data-floating-category-nav-style]")) {
      const style = document.createElement("style");
      style.setAttribute("data-floating-category-nav-style", "");
      style.textContent = `
        @keyframes floatingCategoryNavIn {
          from { opacity: 0; transform: translateY(-18px) scale(0.985); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        body.has-floating-category-nav .topbar {
          position: fixed !important;
          z-index: 75 !important;
          top: 12px !important;
          left: clamp(18px, 6vw, 110px) !important;
          right: clamp(18px, 6vw, 110px) !important;
          width: auto !important;
          margin: 0 !important;
          padding: 8px 12px !important;
          border: 1px solid rgba(255, 255, 255, 0.14) !important;
          border-radius: 999px !important;
          background: rgba(9, 11, 15, 0.88) !important;
          box-shadow: 0 20px 55px rgba(0, 0, 0, 0.38) !important;
          backdrop-filter: blur(18px);
          animation: floatingCategoryNavIn 0.42s ease both;
        }

        body.has-floating-category-nav .topbar .brand,
        body.has-floating-category-nav .topbar nav,
        body.has-floating-category-nav .topbar .category-cart-button,
        body.has-floating-category-nav .topbar .menu-button {
          background: rgba(19, 21, 26, 0.8) !important;
          box-shadow: none !important;
        }

        @media (max-width: 640px) {
          body.has-floating-category-nav .topbar {
            top: 10px !important;
            left: 10px !important;
            right: 10px !important;
            padding: 7px 8px !important;
            border-radius: 24px !important;
          }

          body.has-floating-category-nav .topbar nav {
            background: rgba(13, 15, 19, 0.96) !important;
          }
        }
      `;
      document.head.appendChild(style);
    }

    function updateFloatingCategoryNav() {
      document.body.classList.toggle("has-floating-category-nav", window.scrollY > 36);
    }

    updateFloatingCategoryNav();
    window.addEventListener("scroll", updateFloatingCategoryNav, { passive: true });
  }

  setupFloatingCategoryNavbar();

  document.querySelectorAll(".icon-button").forEach((button) => {
    button.addEventListener("click", openGlobalSearch);
  });

  document.addEventListener("click", (event) => {
    const button = event.target.closest(".dish-card button, .meal-card button, .dessert-card button, .search-result-card button, .add-cart");

    if (!button) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    addToCart(createItemFromButton(button));
    showAddedState(button);
  }, true);

  function setupScrollReveal() {
    const revealTargets = document.querySelectorAll([
      ".hero-content > *",
      ".hero-copy",
      ".category-hero > *",
      ".plate-stage",
      ".meal-strip",
      ".hero-stats",
      ".home-section",
      ".food-marquee",
      ".kitchen-board > *",
      ".showcase-grid a",
      ".steps-grid article",
      ".feast-cta > *",
      ".menu-hero .hero-grid > *",
      ".categories",
      ".category-card",
      ".popular",
      ".dish-card",
      ".search-panel",
      ".quick-restaurants",
      ".menu-spotlight",
      ".spotlight-copy",
      ".spotlight-plate",
      ".spotlight-frame > *",
      ".featured-meal",
      ".related-meals",
      ".meal-hero > *",
      ".meal-detail-card",
      ".more-meals",
      ".combo-section",
      ".combo-box",
      ".feature-section",
      ".feature-list span",
      ".toppings span",
      ".final-cta",
      ".cart-hero",
      ".cart-layout",
      ".cart-extras article",
      ".cart-suggestions",
      ".checkout-hero",
      ".checkout-form",
      ".checkout-summary",
      ".location-hero .hero-copy",
      ".location-highlights article",
      ".location-map-card",
      ".visit-section",
      ".visit-grid article",
      ".delivery-section > *",
      ".contact-hero .hero-copy",
      ".contact-card",
      ".contact-info article",
      ".contact-support",
      ".contact-faq",
      ".contact-faq details"
    ].join(","));

    if (!revealTargets.length) {
      return;
    }

    if (!document.querySelector("[data-scroll-reveal-style]")) {
      const style = document.createElement("style");
      style.setAttribute("data-scroll-reveal-style", "");
      style.textContent = `
        [data-scroll-reveal] {
          --reveal-x: 0px;
          --reveal-y: 78px;
          --reveal-scale: 0.9;
          --reveal-rotate: 0deg;
          --gather-x: var(--reveal-x);
          --gather-y: var(--reveal-y);
          --gather-scale: var(--reveal-scale);
          --gather-rotate: var(--reveal-rotate);
          --gather-opacity: 0;
          --gather-blur: 16px;
          opacity: var(--gather-opacity);
          transform: translate3d(var(--gather-x), var(--gather-y), 0) scale(var(--gather-scale)) rotate(var(--gather-rotate));
          filter: brightness(var(--gather-brightness, 0.74)) saturate(var(--gather-saturation, 0.78)) blur(var(--gather-blur));
          transition:
            opacity 0.82s cubic-bezier(0.16, 1, 0.3, 1),
            transform 0.95s cubic-bezier(0.16, 1, 0.3, 1),
            filter 0.95s cubic-bezier(0.16, 1, 0.3, 1);
          transition-delay: var(--reveal-delay, 0ms);
          transform-origin: center;
          will-change: opacity, transform, filter;
        }

        [data-scroll-reveal].is-visible {
          --gather-x: 0px;
          --gather-y: 0px;
          --gather-scale: 1;
          --gather-rotate: 0deg;
          --gather-opacity: 1;
          --gather-blur: 0px;
          --gather-brightness: 1.06;
          --gather-saturation: 1.04;
        }

        [data-scroll-reveal][data-reveal-side="left"] {
          --reveal-x: -92px;
          --reveal-y: 42px;
          --reveal-rotate: -2deg;
        }

        [data-scroll-reveal][data-reveal-side="right"] {
          --reveal-x: 92px;
          --reveal-y: 42px;
          --reveal-rotate: 2deg;
        }

        [data-scroll-reveal][data-reveal-side="center"] {
          --reveal-x: 0px;
          --reveal-y: 96px;
          --reveal-scale: 0.88;
        }

        [data-scroll-reveal][data-reveal-side="tight"] {
          --reveal-x: 0px;
          --reveal-y: 24px;
          --reveal-scale: 0.96;
        }

        [data-scroll-reveal][data-reveal-side="hero"] {
          --reveal-x: 0px;
          --reveal-y: 42px;
          --reveal-scale: 0.94;
        }

        [data-scroll-reveal][data-reveal-side="plate"] {
          --reveal-x: 54px;
          --reveal-y: 30px;
          --reveal-scale: 0.9;
          --reveal-rotate: 3deg;
        }

        @media (prefers-reduced-motion: reduce) {
          [data-scroll-reveal] {
            opacity: 1;
            transform: none;
            filter: none;
            transition: none;
          }
        }

        @media (max-width: 640px) {
          [data-scroll-reveal][data-reveal-side="left"] {
            --reveal-x: -38px;
            --reveal-y: 46px;
          }

          [data-scroll-reveal][data-reveal-side="right"] {
            --reveal-x: 38px;
            --reveal-y: 46px;
          }
        }
      `;
      document.head.appendChild(style);
    }

    revealTargets.forEach((target, index) => {
      const side = index % 3 === 0
        ? "left"
        : index % 3 === 1
          ? "right"
          : "center";
      const compactSelectors = [
        ".hero-copy",
        ".food-marquee",
        ".meal-strip",
        ".hero-stats",
        ".search-panel",
        ".quick-restaurants",
        ".cart-layout",
        ".checkout-form",
        ".checkout-summary",
        ".related-meals",
        ".cart-suggestions",
        ".location-highlights article",
        ".contact-faq details"
      ];
      const heroSelectors = [
        ".hero-content > *",
        ".category-hero > *",
        ".menu-hero .hero-grid > *",
        ".cart-hero",
        ".checkout-hero",
        ".location-hero .hero-copy",
        ".contact-hero .hero-copy"
      ];

      target.setAttribute("data-scroll-reveal", "");
      target.setAttribute("data-reveal-side", target.matches(".plate-stage, .spotlight-plate")
        ? "plate"
        : heroSelectors.some((selector) => target.matches(selector))
          ? "hero"
          : compactSelectors.some((selector) => target.matches(selector))
            ? "tight"
            : side);
      target.style.setProperty("--reveal-delay", `${Math.min(index % 5, 4) * 70}ms`);
    });

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      revealTargets.forEach((target) => target.classList.add("is-visible"));
      return;
    }

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, {
      threshold: 0.18,
      rootMargin: "0px 0px -10% 0px"
    });

    revealTargets.forEach((target) => {
      revealObserver.observe(target);
    });
  }

  setupScrollReveal();

  const menuButton = document.querySelector(".menu-button");
  const mobileNav = document.querySelector(".mobile-nav");

  if (!menuButton || !mobileNav) {
    return;
  }

  const closeButtons = mobileNav.querySelectorAll(".mobile-nav-backdrop, .mobile-nav-close");
  const desktopNav = document.querySelector(".nav-links");
  const navLinks = mobileNav.querySelectorAll("a");

  function setNavOpen(isOpen) {
    document.body.classList.toggle("nav-open", isOpen);
    menuButton.classList.toggle("is-open", isOpen);
    menuButton.setAttribute("aria-expanded", String(isOpen));
    mobileNav.hidden = !isOpen;
  }

  menuButton.addEventListener("click", () => {
    setNavOpen(!document.body.classList.contains("nav-open"));
  });

  closeButtons.forEach((button) => {
    button.addEventListener("click", () => setNavOpen(false));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => setNavOpen(false));
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setNavOpen(false);
    }
  });

  window.addEventListener("resize", () => {
    if (desktopNav && window.getComputedStyle(desktopNav).display !== "none") {
      setNavOpen(false);
    }
  });
})();
