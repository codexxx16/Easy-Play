// Theme toggle
function toggleTheme() {
  document.body.classList.toggle('dark');
  document.body.classList.toggle('light');
  const icon = document.querySelector('.theme-toggle');
  icon.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
}

// Menu
function toggleMenu() {
  document.getElementById("sideMenu").classList.toggle("show");
}

// Logout
function logout() {
  localStorage.removeItem("easyplay_user");
  location.href = "index.html";
}

// Load email on player page
document.addEventListener("DOMContentLoaded", () => {
  const email = localStorage.getItem("easyplay_user");
  document.getElementById("userEmail").textContent = email || "Guest";
});

// Placeholder media controls
function togglePlay() {
  alert("Play / Pause");
}
function stopMedia() {
  alert("Stop");
}
function prevTrack() {}
function nextTrack() {}
function shuffle() {}
function repeat() {}
function handleSearch() {
  alert("Searching... (API integration coming next)");
}
function playMedia(videoUrl, title) {
  const fullPlayer = document.getElementById("fullPlayer");
  const preview = document.getElementById("mediaPreview");
  const titleEl = document.getElementById("mediaTitle");
  const downloadBtn = document.getElementById("downloadBtn");

  titleEl.textContent = title;
  preview.src = videoUrl;
  downloadBtn.href = `https://api.siputzx.my.id/api/d/ytmp3?url=${videoUrl}`;

  fullPlayer.style.display = "block";
  preview.play();
  document.getElementById("miniTitle").textContent = title;
}
