function togglePassword() {
  const password = document.getElementById("password");
  const btn = document.querySelector(".toggle-password");

  if (password.type === "password") {
    password.type = "text";
    btn.textContent = "Hide";
  } else {
    password.type = "password";
    btn.textContent = "Show";
  }
}
