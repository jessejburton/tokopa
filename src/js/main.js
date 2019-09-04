console.log("Main JavaScript Loaded from file");

AOS.init();

// Wait for loading to complete before running css animations
document.body.classList.add('js-loading');
window.addEventListener("DOMContentLoaded", showPage);
function showPage() {
  document.body.classList.remove('js-loading');
}

function toggle() {
  document.querySelector('.mobile-menu-button').classList.toggle('menu-open');
  document.querySelector('.header__menu-container').classList.toggle('menu-open');
}

