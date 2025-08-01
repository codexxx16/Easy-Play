// Theme toggle
function toggleTheme() {
  document.body.classList.toggle('dark');
  document.body.classList.toggle('light');
  const icon = document.querySelector('.theme-toggle');
  icon.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
}

// Sign-up form handler
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("signup-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = form.querySelector("input").value;
    localStorage.setItem("easyplay_user", email);
    window.location.href = "player.html"; // next step
  });
});
