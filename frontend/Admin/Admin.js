const ORDER_STORAGE_KEY = "goldenPlateOrders";
const TOKEN_KEY = "goldenPlateAdminToken";
const API_BASE = window.GoldenPlateApiBase || "http://localhost:4000/api";
const adminToken = sessionStorage.getItem(TOKEN_KEY);

if (!adminToken) {
  window.location.replace("Login.html");
}
const STATUS_LABELS = {
  received: "Received",
  confirmed: "Confirmed",
  preparing: "Preparing",
  on_the_way: "On the way",
  completed: "Completed"
};

const PAYMENT_LABELS = {
  transfer: "Bank transfer",
  cash: "Pay on delivery",
  paystack: "Paystack"
};

const listNode = document.querySelector("[data-orders-list]");
const detailNode = document.querySelector("[data-order-detail]");
const searchInput = document.querySelector("[data-order-search]");
const statusFilter = document.querySelector("[data-status-filter]");
const seedButton = document.querySelector("[data-seed-orders]");
const clearButton = document.querySelector("[data-clear-orders]");
const logoutButton = document.querySelector("[data-admin-logout]");
const openStat = document.querySelector("[data-stat-open]");
const paymentStat = document.querySelector("[data-stat-payment]");
const dispatchStat = document.querySelector("[data-stat-dispatch]");
const totalStat = document.querySelector("[data-stat-total]");

let selectedOrderId = null;
let ordersCache = [];
let apiOnline = true;
const statusDrafts = {};

function formatPrice(amount) {
  return `N${Number(amount || 0).toLocaleString()}`;
}

function formatDate(value) {
  return new Intl.DateTimeFormat("en-NG", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  }).format(new Date(value));
}

function getLocalOrders() {
  try {
    return JSON.parse(localStorage.getItem(ORDER_STORAGE_KEY)) || [];
  } catch (error) {
    return [];
  }
}

function saveLocalOrders(orders) {
  localStorage.setItem(ORDER_STORAGE_KEY, JSON.stringify(orders));
}

async function apiRequest(path, options = {}) {
  const response = await fetch(`${API_BASE}${path}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${adminToken}`,
      ...options.headers
    },
    ...options
  });

  if (response.status === 401) {
    sessionStorage.removeItem(TOKEN_KEY);
    window.location.replace("Login.html");
    throw new Error("Admin login required");
  }

  if (!response.ok) {
    throw new Error(`API request failed: ${response.status}`);
  }

  if (response.status === 204) {
    return null;
  }

  return response.json();
}

async function loadOrders() {
  try {
    const orders = await apiRequest("/orders");
    apiOnline = true;
    ordersCache = orders;
    saveLocalOrders(orders);
  } catch (error) {
    apiOnline = false;
    ordersCache = getLocalOrders();
  }
}

function getFilteredOrders() {
  const query = searchInput.value.trim().toLowerCase();
  const status = statusFilter.value;

  return ordersCache.filter((order) => {
    const text = [
      order.id,
      order.customer?.name,
      order.customer?.phone,
      order.customer?.email,
      order.items?.map((item) => item.title).join(" ")
    ].join(" ").toLowerCase();
    const matchesQuery = !query || text.includes(query);
    const matchesStatus = status === "all" || order.status === status;
    return matchesQuery && matchesStatus;
  });
}

function renderStats() {
  const openOrders = ordersCache.filter((order) => order.status !== "completed");
  const pendingPayment = ordersCache.filter((order) => order.paymentStatus === "pending");
  const dispatchOrders = ordersCache.filter((order) => order.status === "on_the_way");
  const today = new Date().toDateString();
  const todayTotal = ordersCache
    .filter((order) => new Date(order.createdAt).toDateString() === today)
    .reduce((sum, order) => sum + Number(order.totals?.total || 0), 0);

  openStat.textContent = openOrders.length;
  paymentStat.textContent = pendingPayment.length;
  dispatchStat.textContent = dispatchOrders.length;
  totalStat.textContent = formatPrice(todayTotal);
}

function renderList() {
  const orders = getFilteredOrders();

  if (!orders.length) {
    listNode.innerHTML = `<div class="empty-orders">${apiOnline ? "No orders match the current view." : "API offline. Showing local orders only."}</div>`;
    return;
  }

  if (!selectedOrderId || !orders.some((order) => order.id === selectedOrderId)) {
    selectedOrderId = orders[0].id;
  }

  listNode.innerHTML = orders.map((order) => {
    const itemSummary = (order.items || [])
      .map((item) => `${item.quantity}x ${item.title}`)
      .join(", ");

    return `
      <article class="order-row ${order.id === selectedOrderId ? "is-active" : ""}" data-order-id="${order.id}">
        <button class="order-pick" type="button" data-select-order="${order.id}">
          <div class="row-head">
            <strong>${order.id}</strong>
            <span>${STATUS_LABELS[order.status] || order.status}</span>
          </div>
          <div class="row-meta">
            <span>${order.customer?.name || "Customer"}</span>
            <span>${formatPrice(order.totals?.total)}</span>
          </div>
          <div class="row-items">${itemSummary || "No items"}</div>
        </button>
        <button class="delete-order" type="button" data-delete-order="${order.id}">Delete</button>
      </article>
    `;
  }).join("");
}

function renderDetail() {
  const order = ordersCache.find((item) => item.id === selectedOrderId);

  if (!order) {
    detailNode.innerHTML = `
      <div class="empty-panel">
        <span>No order selected</span>
        <p>New checkout orders will appear here after a customer places an order.</p>
      </div>
    `;
    return;
  }

  const items = (order.items || []).map((item) => `
    <article>
      <img src="${item.image}" alt="${item.alt || item.title}">
      <div>
        <h3>${item.title}</h3>
        <p>${item.quantity} x ${item.price}</p>
      </div>
      <strong>${formatPrice((Number(String(item.price).replace(/[^0-9]/g, "")) || 0) * item.quantity)}</strong>
    </article>
  `).join("");

  const draftedStatus = statusDrafts[order.id] || order.status;
  const hasStatusChange = draftedStatus !== order.status;

  detailNode.innerHTML = `
    <div class="detail-head">
      <div>
        <p>${formatDate(order.createdAt)}</p>
        <h2>${order.id}</h2>
      </div>
      <span class="status-pill">${STATUS_LABELS[order.status] || order.status}</span>
    </div>

    <div class="detail-grid">
      <div class="meta"><span>Customer</span><strong>${order.customer?.name || "-"}</strong><small>${order.customer?.phone || "-"}<br>${order.customer?.email || "-"}</small></div>
      <div class="meta"><span>Fulfilment</span><strong>${order.deliveryMethod === "pickup" ? "Pickup" : "Delivery"}</strong><small>${order.customer?.address || "No address"}</small></div>
      <div class="meta"><span>Payment</span><strong>${PAYMENT_LABELS[order.paymentMethod] || order.paymentMethod}</strong><small>${order.paymentStatus || "pending"}</small></div>
      <div class="meta"><span>Total</span><strong>${formatPrice(order.totals?.total)}</strong><small>Service ${formatPrice(order.totals?.service)} / Delivery ${formatPrice(order.totals?.delivery)}</small></div>
    </div>

    <div class="order-note">
      <span>Customer note</span>
      <p>${order.note || "No note added."}</p>
    </div>

    <div class="order-items">
      <span>Basket</span>
      ${items}
      <div class="total-line"><span>Total</span><strong>${formatPrice(order.totals?.total)}</strong></div>
    </div>

    <div class="status-panel">
      <span>Kitchen status</span>
      <div class="status-actions">
        ${Object.entries(STATUS_LABELS).map(([status, label]) => `
          <button class="${order.status === status ? "is-active" : ""} ${draftedStatus === status && hasStatusChange ? "is-pending" : ""}" type="button" data-choose-status="${status}">${label}</button>
        `).join("")}
      </div>
      <p class="status-help">${hasStatusChange
        ? `Ready to update customer page to ${STATUS_LABELS[draftedStatus]}.`
        : "Choose a new stage, then press Update status."}</p>
      <button class="update-status" type="button" data-update-status ${hasStatusChange ? "" : "disabled"}>Update status</button>
    </div>

    <button class="detail-delete" type="button" data-delete-order="${order.id}">Delete order</button>
  `;
}

function render() {
  renderStats();
  renderList();
  renderDetail();
}

async function refresh() {
  await loadOrders();
  render();
}

async function setOrderStatus(orderId, status) {
  if (apiOnline) {
    try {
      await apiRequest(`/orders/${orderId}/status`, {
        method: "PATCH",
        body: JSON.stringify({ status })
      });
      delete statusDrafts[orderId];
      await refresh();
      return;
    } catch (error) {
      apiOnline = false;
    }
  }

  ordersCache = ordersCache.map((order) => {
    if (order.id !== orderId) return order;
    return {
      ...order,
      status,
      paymentStatus: order.paymentMethod === "cash" || order.paymentStatus === "paid"
        ? order.paymentStatus
        : ["confirmed", "preparing", "on_the_way", "completed"].includes(status)
          ? "confirmed"
          : order.paymentStatus
    };
  });
  saveLocalOrders(ordersCache);
  delete statusDrafts[orderId];
  render();
}

async function deleteOrder(orderId) {
  if (apiOnline) {
    try {
      await apiRequest(`/orders/${orderId}`, { method: "DELETE" });
      if (selectedOrderId === orderId) selectedOrderId = null;
      await refresh();
      return;
    } catch (error) {
      apiOnline = false;
    }
  }

  ordersCache = ordersCache.filter((order) => order.id !== orderId);
  saveLocalOrders(ordersCache);
  if (selectedOrderId === orderId) {
    selectedOrderId = ordersCache[0]?.id || null;
  }
  render();
}

function getSampleOrders() {
  return [
    {
      id: "GP-1048201",
      createdAt: new Date().toISOString(),
      customer: {
        name: "Ada Okafor",
        phone: "+234 802 000 1844",
        email: "ada@example.com",
        address: "24 Admiralty Way, Lekki Phase 1"
      },
      note: "Less pepper, add cutlery.",
      deliveryMethod: "delivery",
      paymentMethod: "transfer",
      paymentStatus: "pending",
      status: "received",
      items: [
        { title: "Crab Pepper Plate", price: "N11,500", quantity: 1, image: "../assets/images/crab-seafood.png", alt: "Crab pepper plate" },
        { title: "Grilled Prawns", price: "N9,800", quantity: 1, image: "../assets/images/grilled-prawns.png", alt: "Grilled prawns" }
      ],
      totals: { subtotal: 21300, service: 500, delivery: 1200, total: 23000 }
    },
    {
      id: "GP-1048202",
      createdAt: new Date(Date.now() - 1000 * 60 * 24).toISOString(),
      customer: {
        name: "Tunde Bello",
        phone: "+234 803 222 9011",
        email: "tunde@example.com",
        address: "Pickup counter"
      },
      note: "Call when ready.",
      deliveryMethod: "pickup",
      paymentMethod: "cash",
      paymentStatus: "collect_on_delivery",
      status: "preparing",
      items: [
        { title: "Party Jollof Combo", price: "N7,500", quantity: 2, image: "../assets/images/hero-jollof-premium.jpg", alt: "Party jollof combo" }
      ],
      totals: { subtotal: 15000, service: 500, delivery: 0, total: 15500 }
    }
  ];
}

async function seedOrders() {
  if (ordersCache.length) return;
  const sampleOrders = getSampleOrders();

  if (apiOnline) {
    try {
      await Promise.all(sampleOrders.map((order) => apiRequest("/orders", {
        method: "POST",
        body: JSON.stringify(order)
      })));
      await refresh();
      return;
    } catch (error) {
      apiOnline = false;
    }
  }

  ordersCache = sampleOrders;
  saveLocalOrders(ordersCache);
  render();
}

listNode.addEventListener("click", async (event) => {
  const deleteButton = event.target.closest("[data-delete-order]");
  if (deleteButton) {
    await deleteOrder(deleteButton.dataset.deleteOrder);
    return;
  }

  const selectButton = event.target.closest("[data-select-order]");
  if (!selectButton) return;
  selectedOrderId = selectButton.dataset.selectOrder;
  render();
});

detailNode.addEventListener("click", async (event) => {
  const deleteButton = event.target.closest("[data-delete-order]");
  if (deleteButton) {
    await deleteOrder(deleteButton.dataset.deleteOrder);
    return;
  }

  const choice = event.target.closest("[data-choose-status]");
  if (choice && selectedOrderId) {
    statusDrafts[selectedOrderId] = choice.dataset.chooseStatus;
    renderDetail();
    return;
  }

  const updateButton = event.target.closest("[data-update-status]");
  if (!updateButton || !selectedOrderId) return;
  const draftedStatus = statusDrafts[selectedOrderId];
  if (!draftedStatus) return;
  await setOrderStatus(selectedOrderId, draftedStatus);
});

searchInput.addEventListener("input", render);
statusFilter.addEventListener("change", render);
seedButton.addEventListener("click", seedOrders);
clearButton.addEventListener("click", async () => {
  const completedOrders = ordersCache.filter((order) => order.status === "completed");
  await Promise.all(completedOrders.map((order) => deleteOrder(order.id)));
});
logoutButton.addEventListener("click", () => {
  sessionStorage.removeItem(TOKEN_KEY);
  window.location.href = "Login.html";
});

refresh();
setInterval(refresh, 5000);
