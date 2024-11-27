// Mobile Menu Toggle
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("-translate-x-full");
  menuToggle.classList.toggle("hamburger-active");
});

// Get the current year dynamically
document.getElementById("currentYear").textContent = new Date().getFullYear();
