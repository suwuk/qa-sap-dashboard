// --- LOGIKA PEMBUATAN MENU DINAMIS ---
function buildSidebar(menuArray, container) {
  menuArray.forEach(item => {
    if (item.isDropdown && item.children) {
      // Buat container dropdown
      const dropContainer = document.createElement("div");
      dropContainer.className = "dropdown-container";

      // Buat tombol dropdown
      const btn = document.createElement("button");
      btn.className = "dropdown-btn";
      btn.innerHTML = `${item.title} <span class="arrow">▼</span>`;
      btn.onclick = function () { toggleDropdown(this); };

      // Buat submenu (rekursif)
      const submenu = document.createElement("div");
      submenu.className = "submenu";
      buildSidebar(item.children, submenu);

      dropContainer.appendChild(btn);
      dropContainer.appendChild(submenu);
      container.appendChild(dropContainer);

    } else if (item.cards) {
      // Buat menu link akhir (leaf node)
      const link = document.createElement("a");
      link.href = "#";
      link.className = "menu-link";
      link.textContent = item.label;
      
      link.onclick = function (e) {
        e.preventDefault();
        renderCards(this, item.mainTitle, item.cards);
      };

      container.appendChild(link);
    }
  });
}

// --- LOGIKA INTERAKSI UI ---
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  if (window.innerWidth <= 768) {
    sidebar.classList.toggle("mobile-active");
  } else {
    sidebar.classList.toggle("hidden");
  }
}

function toggleDropdown(btn) {
  const submenu = btn.nextElementSibling;
  submenu.classList.toggle("show");
  btn.classList.toggle("open");
}

function toggleCard(headerElement) {
  const card = headerElement.parentElement;
  const body = headerElement.nextElementSibling;

  card.classList.toggle("open");

  if (card.classList.contains("open")) {
    body.style.maxHeight = body.scrollHeight + "px";
  } else {
    body.style.maxHeight = "0";
  }
}

function renderCards(element, mainTitle, cardsData) {
  document.getElementById("report-title").innerText = mainTitle;

  // Hapus class active dari semua menu
  const links = document.querySelectorAll(".menu-link");
  links.forEach((link) => link.classList.remove("active"));
  element.classList.add("active");

  const container = document.getElementById("card-container");
  container.innerHTML = "";

  // Render cards
  cardsData.forEach((card) => {
    const cardEl = document.createElement("div");
    cardEl.className = "report-card";

    cardEl.innerHTML = `
      <div class="card-header" onclick="toggleCard(this)">
        <div class="card-title-wrapper">${card.title}</div>
        <div class="card-arrow">▼</div>
      </div>
      <div class="card-body">
        <div class="iframe-container">
          <iframe src="${card.url}" title="${card.title}"></iframe>
        </div>
      </div>
    `;

    container.appendChild(cardEl);
  });

  // Tutup sidebar jika di mobile
  if (window.innerWidth <= 768) {
    document.getElementById("sidebar").classList.remove("mobile-active");
  }
}

// --- INISIALISASI SAAT HALAMAN DIMUAT ---
window.addEventListener("DOMContentLoaded", () => {
  const navMenu = document.getElementById("nav-menu");
  
  // 1. Generate menu dari data.js
  buildSidebar(menuData, navMenu);

  // 2. Buka menu pertama secara default
  const firstActiveMenu = document.querySelector(".menu-link");
  if (firstActiveMenu) {
    firstActiveMenu.click(); // Memicu renderCards

    // Buka secara otomatis hirarki accordion/dropdown ke atas
    let parentSubmenu = firstActiveMenu.closest(".submenu");
    while (parentSubmenu) {
      parentSubmenu.classList.add("show");
      const btn = parentSubmenu.previousElementSibling;
      if (btn && btn.classList.contains("dropdown-btn")) {
        btn.classList.add("open");
      }
      parentSubmenu = parentSubmenu.parentElement.closest(".submenu");
    }
  }
});