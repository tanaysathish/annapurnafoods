const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector(".menu-toggle");
const viewMoreBtn = document.getElementById("view-more-btn");
const allBrandsGrid = document.getElementById("all-brands");

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

// View More brands toggle functionality
viewMoreBtn?.addEventListener("click", () => {
  const isExpanded = viewMoreBtn.getAttribute("aria-expanded") === "true";
  const newExpandedState = !isExpanded;
  
  viewMoreBtn.setAttribute("aria-expanded", String(newExpandedState));
  allBrandsGrid.classList.toggle("expanded");
  
  // Update button text
  const span = viewMoreBtn.querySelector("span");
  if (newExpandedState) {
    span.textContent = "Click to view less brands";
  } else {
    span.textContent = "Click to view more brands";
  }
  
  // Recreate icons if Lucide is available
  if (window.lucide) {
    window.lucide.createIcons();
  }
});
