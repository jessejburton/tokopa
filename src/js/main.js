console.log("Main JavaScript Loaded from file");

AOS.init();

// Wait for loading to complete before running css animations
window.addEventListener("DOMContentLoaded", init);
function init() {
  document.body.classList.remove('js-loading');

  TweenMax.from(".banner--home", 1, { opacity: 0, ease: Power2.easeInOut });
  TweenMax.from(".banner__logo", 1.8, { scale: .9, y: 110, opacity: 0, ease: Power2.easeOut, delay: 0.5 });
  TweenMax.from(".header__menu-container", 1, { y: -50, opacity: 0, ease: Power2.easeInOut, delay: 1 });

}

function applyBlur(element) {
  console.log(element);
}

function toggle() {
  document.querySelector('.mobile-menu-button').classList.toggle('menu-open');
  document.querySelector('.header__menu-container').classList.toggle('menu-open');
}

