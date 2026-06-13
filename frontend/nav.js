(function () {
  const CART_STORAGE_KEY = "goldenPlateCartCount";
  const CART_ITEMS_KEY = "goldenPlateCartItems";
  const cartCounters = document.querySelectorAll("[data-cart-count], .cart-button span");
  const fallbackMeals = {
    "party-jollof": {
      title: "Party Jollof Combo",
      price: "N7,500",
      image: "../assets/images/hero-jollof-premium.jpg",
      alt: "Party jollof combo"
    },
    "grilled-chicken": {
      title: "Grilled Chicken Plate",
      price: "N6,800",
      image: "../assets/images/grilled-chicken.jpg",
      alt: "Grilled chicken plate"
    },
    "pasta-bowl": {
      title: "Creamy Pasta Bowl",
      price: "N5,500",
      image: "../assets/images/pasta.jpg",
      alt: "Creamy pasta bowl"
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
    }
  };

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
    const card = button.closest(".dish-card, .meal-card, .dessert-card");
    const mealId = card?.dataset.meal || getMealIdFromUrl(card?.href || window.location.href);
    const fallbackMeal = fallbackMeals[mealId] || {};
    const title = card?.querySelector("h3")?.textContent.trim()
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

  document.querySelectorAll(".dish-card button, .meal-card button, .dessert-card button, .add-cart").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      addToCart(createItemFromButton(button));
      showAddedState(button);
    });
  });

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
