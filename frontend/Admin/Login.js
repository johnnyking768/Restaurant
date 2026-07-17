const API_BASE = window.DupzApiBase || "http://localhost:4000/api";
const TOKEN_KEY = "dupzAdminToken";
const loginForm = document.querySelector("[data-admin-login]");
const errorNode = document.querySelector("[data-login-error]");

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  errorNode.hidden = true;

  const formData = new FormData(loginForm);

  try {
    const response = await fetch(`${API_BASE}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: formData.get("username"),
        password: formData.get("password")
      })
    });

    if (!response.ok) {
      throw new Error("Invalid credentials");
    }

    const data = await response.json();
    sessionStorage.setItem(TOKEN_KEY, data.token);
    window.location.href = "Admin.html";
  } catch (error) {
    errorNode.hidden = false;
  }
});
