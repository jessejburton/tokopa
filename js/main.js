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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnNvbGUubG9nKFwiTWFpbiBKYXZhU2NyaXB0IExvYWRlZCBmcm9tIGZpbGVcIik7XHJcblxyXG5BT1MuaW5pdCgpO1xyXG5cclxuLy8gV2FpdCBmb3IgbG9hZGluZyB0byBjb21wbGV0ZSBiZWZvcmUgcnVubmluZyBjc3MgYW5pbWF0aW9uc1xyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgaW5pdCk7XHJcbmZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdqcy1sb2FkaW5nJyk7XHJcblxyXG4gIFR3ZWVuTWF4LmZyb20oXCIuYmFubmVyLS1ob21lXCIsIDEsIHsgb3BhY2l0eTogMCwgZWFzZTogUG93ZXIyLmVhc2VJbk91dCB9KTtcclxuICBUd2Vlbk1heC5mcm9tKFwiLmJhbm5lcl9fbG9nb1wiLCAxLjgsIHsgc2NhbGU6IC45LCB5OiAxMTAsIG9wYWNpdHk6IDAsIGVhc2U6IFBvd2VyMi5lYXNlT3V0LCBkZWxheTogMC41IH0pO1xyXG4gIFR3ZWVuTWF4LmZyb20oXCIuaGVhZGVyX19tZW51LWNvbnRhaW5lclwiLCAxLCB7IHk6IC01MCwgb3BhY2l0eTogMCwgZWFzZTogUG93ZXIyLmVhc2VJbk91dCwgZGVsYXk6IDEgfSk7XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseUJsdXIoZWxlbWVudCkge1xyXG4gIGNvbnNvbGUubG9nKGVsZW1lbnQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0b2dnbGUoKSB7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vYmlsZS1tZW51LWJ1dHRvbicpLmNsYXNzTGlzdC50b2dnbGUoJ21lbnUtb3BlbicpO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX21lbnUtY29udGFpbmVyJykuY2xhc3NMaXN0LnRvZ2dsZSgnbWVudS1vcGVuJyk7XHJcbn1cclxuXHJcbiJdLCJmaWxlIjoibWFpbi5qcyJ9
