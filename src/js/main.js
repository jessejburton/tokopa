console.log("Main JavaScript Loaded from file");

const controller = new ScrollMagic.Controller();
let quoteInterval;

// Wait for loading to complete before running css animations
window.addEventListener("DOMContentLoaded", init);
function init() {

  // Global
  showPage();

  // Home Animations
  homeBannerAnimation();
  homeSignUpAnimation();
  homePromoAnimation();
  homeBelongingAnimation();

  // Quotes
  showNextQuote();
  quoteInterval = setInterval(quotesAutoSlide, 5000);

}

function homeBannerAnimation() {
  TweenMax.from(".banner--home", 1, { opacity: 0, ease: Power2.easeOut });
  TweenMax.from(".banner__logo", 1.8, { scale: .9, y: 110, opacity: 0, ease: Power2.easeOut, delay: 0.5 });
  TweenMax.from(".header__menu-container", 1, { y: -50, opacity: 0, ease: Power2.easeOut, delay: 1 });
}

function homeSignUpAnimation() {
  const tl = new TimelineMax();

  tl.from(".signup__text", .7, { x: -50, opacity: 0, ease: Power2.easeOut });
  tl.from(".signup__form", .7, { x: 50, opacity: 0, ease: Power2.easeOut }, "=-0.7");

  new ScrollMagic.Scene({
    triggerElement: ".signup",
    triggerHook: 0.7
  })
    .setTween(tl)
    .addTo(controller);
  //.addIndicators();
}

function homePromoAnimation() {
  const tl = new TimelineMax();

  tl.from(".emphasis", 1, { y: 50, opacity: 0, ease: Power2.easeOut });
  tl.staggerFrom(".promo", .7, { y: 50, opacity: 0, ease: Power2.easeOut, stagger: 0.2 });

  new ScrollMagic.Scene({
    triggerElement: ".promo",
    triggerHook: .8
  })
    .setTween(tl)
    .addTo(controller)
  //.addIndicators();
}

function homeBelongingAnimation() {
  const tl = new TimelineMax();

  tl.from(".belonging__book", 1, { x: -50, opacity: 0, ease: Power2.easeOut });
  tl.from(".belonging__text", 1, { x: 30, opacity: 0, ease: Power2.easeOut }, "=-1");

  new ScrollMagic.Scene({
    triggerElement: ".belonging",
    triggerHook: .4
  })
    .setTween(tl)
    .addTo(controller)
  //.addIndicators();
}

/* QUOTES */
const nextQuote = document.querySelector(".quotes .next");
nextQuote.addEventListener("click", showNextQuote);
const prevQuote = document.querySelector(".quotes .prev");
prevQuote.addEventListener("click", showPrevQuote);

function showNextQuote(e) {
  let currentQuote = document.querySelector(".quote-container .quote.active");

  if (!currentQuote) {
    currentQuote = document.querySelector(".quote-container .quote");
    currentQuote.classList.add("active");

    TweenMax.fromTo(currentQuote, 1, { opacity: 0 }, { opacity: 1, ease: Power2.easeOut });
  } else {
    let nextQuote = currentQuote.nextElementSibling;
    if (!nextQuote) nextQuote = document.querySelector(".quote-container .quote");

    currentQuote.classList.remove("active");
    nextQuote.classList.add("active");

    const tl = new TimelineMax();
    tl.fromTo(currentQuote, 1, { opacity: 1 }, { opacity: 0, ease: Power2.easeOut });
    tl.fromTo(nextQuote, 1, { y: '0%', opacity: 0, ease: Power2.easeIn }, { y: '-50%', opacity: 1, ease: Power2.easeOut }, "=-0.6");
  }
}

function showPrevQuote() {
  let currentQuote = document.querySelector(".quote-container .quote.active");

  if (!currentQuote) {
    currentQuote = document.querySelector(".quote-container .quote");
    currentQuote.classList.add("active");

    TweenMax.fromTo(currentQuote, 1, { opacity: 0 }, { opacity: 1, ease: Power2.easeOut });
  } else {
    let prevQuote = currentQuote.previousElementSibling;
    if (!prevQuote) prevQuote = document.querySelector(".quote-container .quote:last-of-type");

    currentQuote.classList.remove("active");
    prevQuote.classList.add("active");

    const tl = new TimelineMax();
    tl.fromTo(currentQuote, 1, { opacity: 1 }, { opacity: 0, ease: Power2.easeOut });
    tl.fromTo(prevQuote, 1, { y: '0%', opacity: 0, ease: Power2.easeIn }, { y: '-50%', opacity: 1, ease: Power2.easeOut }, "=-0.6");
  }
}

function quotesAutoSlide() {
  if (!document.querySelector(".quotes:hover")) showNextQuote();
}

function toggle() {
  document.querySelector('.mobile-menu-button').classList.toggle('menu-open');
  document.querySelector('.header__menu-container').classList.toggle('menu-open');
}

/* GLOBAL */
function showPage() {
  document.body.classList.remove('js-loading');
}

