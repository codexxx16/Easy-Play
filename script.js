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

async function handleSearch() {
  const query = document.getElementById("searchInput").value.trim();
  if (!query) return;

  const resultsContainer = document.getElementById("results");
  resultsContainer.innerHTML = `<p>Loading...</p>`;

  try {
    const res = await fetch(`https://api.siputzx.my.id/api/s/youtube?q=${encodeURIComponent(query)}`);
    const data = await res.json();

    if (!data.status || !data.result || data.result.length === 0) {
      resultsContainer.innerHTML = `<p>No results found.</p>`;
      return;
    }

    resultsContainer.innerHTML = "";

    data.result.slice(0, 10).forEach((item) => {
      const card = document.createElement("div");
      card.className = "media-card";
      card.innerHTML = `
        <img src="${item.thumbnail}" alt="thumb" />
        <div class="info">
          <h4 title="${item.title}">${item.title.slice(0, 60)}</h4>
          <p>By ${item.channel}</p>
          <p>Duration: ${item.duration}</p>
          <div class="card-buttons">
            <button onclick="playMedia('${item.url}', '${item.title.replace(/'/g, "\\'")}')">▶️ Play</button>
            <a href="https://api.siputzx.my.id/api/d/ytmp3?url=${item.url}" target="_blank">⬇️ MP3</a>
            <button onclick="addToPlaylist('${item.url}', '${item.title.replace(/'/g, "\\'")}')">➕ Playlist</button>
            <button onclick="addToFavorites('${item.url}', '${item.title.replace(/'/g, "\\'")}')">❤️ Fav</button>
          </div>
        </div>
      `;
      resultsContainer.appendChild(card);
    });

    updateHistory(query);
  } catch (err) {
    resultsContainer.innerHTML = `<p>Error fetching results. Try again.</p>`;
  }
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

// NEW: Playlist and Favorites
function addToPlaylist(url, title) {
  alert(`Added to Playlist: ${title}`);
  // You can push to a real playlist array or localStorage here
}

function addToFavorites(url, title) {
  alert(`❤️ Favorited: ${title}`);
  // You can push to a favorites list here
  }
