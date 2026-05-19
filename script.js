const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector(".menu-toggle");
const viewMoreBtn = document.getElementById("view-more-btn");
const brandsGrid = document.getElementById("brands-grid");

if (window.lucide) {
  window.lucide.createIcons();
}

menuToggle?.addEventListener("click", () => {
  const isOpen = header.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".site-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    header.classList.remove("is-open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

// View More brands functionality
viewMoreBtn?.addEventListener("click", () => {
  const isExpanded = viewMoreBtn.classList.toggle("expanded");
  const hiddenBrands = brandsGrid.querySelectorAll(".brand-item.hidden");
  
  hiddenBrands.forEach((brand) => {
    brand.classList.toggle("hidden");
  });
  
  // Update button text and icon
  const span = viewMoreBtn.querySelector("span");
  if (isExpanded) {
    span.textContent = "View Less";
  } else {
    span.textContent = "View More";
  }
  
  // Recreate icons if Lucide is available
  if (window.lucide) {
    window.lucide.createIcons();
  }
});
