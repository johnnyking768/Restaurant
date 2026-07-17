(function () {
  const mapFrame = document.querySelector("[data-map-frame]");
  const zoomInButton = document.querySelector("[data-map-zoom='in']");
  const zoomOutButton = document.querySelector("[data-map-zoom='out']");
  const routeStartInput = document.querySelector("[data-route-start]");
  const routeUpdateButton = document.querySelector("[data-route-update]");
  const routeStatus = document.querySelector("[data-route-status]");
  const coordinates = document.querySelector("[data-map-coordinates]");
  const directionsLink = document.querySelector("[data-directions-link]");

  if (!mapFrame || !routeStartInput || !routeUpdateButton || !directionsLink) {
    return;
  }

  const destination = "12 Dupz Avenue Victoria Island Lagos";
  const mapScales = [1, 1.16, 1.34, 1.54, 1.78];
  let activeScale = 0;

  function encodedRouteStart() {
    return encodeURIComponent(routeStartInput.value.trim() || "Victoria Island Lagos");
  }

  function updateMap() {
    const start = encodedRouteStart();
    const end = encodeURIComponent(destination);

    mapFrame.src = `https://www.google.com/maps?output=embed&saddr=${start}&daddr=${end}`;
    directionsLink.href = `https://www.google.com/maps/dir/?api=1&origin=${start}&destination=${end}`;
    routeStatus.textContent = "Route Ready";
    coordinates.textContent = `Route from ${routeStartInput.value.trim() || "Victoria Island Lagos"}`;
  }

  function updateMapScale() {
    mapFrame.style.setProperty("--map-scale", mapScales[activeScale]);
    zoomOutButton.disabled = activeScale === 0;
    zoomInButton.disabled = activeScale === mapScales.length - 1;
  }

  routeUpdateButton.addEventListener("click", updateMap);

  routeStartInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      updateMap();
    }
  });

  zoomInButton?.addEventListener("click", () => {
    activeScale = Math.min(activeScale + 1, mapScales.length - 1);
    updateMapScale();
  });

  zoomOutButton?.addEventListener("click", () => {
    activeScale = Math.max(activeScale - 1, 0);
    updateMapScale();
  });

  updateMapScale();
  updateMap();
})();
