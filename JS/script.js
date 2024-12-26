// Mobile Menu Toggle
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const header = document.getElementById('mainHeader');

menuToggle.addEventListener("click", () => {
  // Toggle the mobile menu and hamburger button state
  mobileMenu.classList.toggle("-translate-x-full");
  menuToggle.classList.toggle("hamburger-active");

  // Check if 'bg-secondary' exists and add it only if not present
  if (!header.classList.contains("bg-secondary")) {
    header.classList.add("bg-secondary");
  } else {
    header.classList.remove("bg-secondary");
  }
});

// Get the current year dynamically
document.getElementById("currentYear").textContent = new Date().getFullYear();

window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;

    // Add or remove the "scrolled" class based on scroll position
    if (scrollPosition > 50) { // You can adjust the scroll position threshold
      header.classList.add('bg-secondary');
    } else {
      header.classList.remove('bg-secondary');
    }
  });

window.onload = function () {
  // Check if the current page is the home page
  const isHomePage = window.location.pathname === '/' || window.location.pathname === '/index.html';

  if (isHomePage) {
    // Show the alert only on the home page
    alert("This Website is still in development process. Please check back later for more updates. Thank you!");
  }
};