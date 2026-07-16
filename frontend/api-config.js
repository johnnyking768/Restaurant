(function () {
  const localHosts = ["localhost", "127.0.0.1"];
  window.GoldenPlateApiBase = localHosts.includes(window.location.hostname)
    ? "http://localhost:4000/api"
    : "https://YOUR-BACKEND-URL.example.com/api";
})();
