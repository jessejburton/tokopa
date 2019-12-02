console.log("Main JavaScript Loaded from file");

const controller = new ScrollMagic.Controller();
let quoteInterval;
let quoteIsTransitioning = false;

// Wait for loading to complete before running css animations
window.addEventListener("DOMContentLoaded", init);
function init() {

  // Global
  showPage();

  // Home Animations
  homeBannerAnimation();
  homeSignUpAnimation();
  homeBelongingAnimation();
  homeBlogAnimation();
  homeRetreatAnimation();

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
    triggerHook: .9
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

function homeBlogAnimation() {
  const tl = new TimelineMax();

  tl.from(".blog__title", 1, { scale: 0.8, opacity: 0, ease: Power2.easeOut });

  new ScrollMagic.Scene({
    triggerElement: ".blog",
    triggerHook: .1
  })
    .setTween(tl)
    .addTo(controller)
  //.addIndicators();
}

function homeRetreatAnimation() {
  const tl = new TimelineMax();

  tl.from(".retreat__text", 1, { x: -50, opacity: 0, ease: Power2.easeOut });
  tl.from(".retreat__image", 1, { x: 50, opacity: 0, ease: Power2.easeOut }, "-=1");

  new ScrollMagic.Scene({
    triggerElement: ".retreat",
    triggerHook: .6
  })
    .setTween(tl)
    .addTo(controller)
  //.addIndicators();
}

function homeLatestPostAnimation() {
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

/* QUOTES */
const nextQuote = document.querySelector(".quotes .next");
nextQuote.addEventListener("click", showNextQuote);
const prevQuote = document.querySelector(".quotes .prev");
prevQuote.addEventListener("click", showPrevQuote);

function showNextQuote() {
  if (quoteIsTransitioning) return;
  quoteIsTransitioning = true;

  let currentQuote = document.querySelector(".quote-container .quote.active");

  if (!currentQuote) {
    currentQuote = document.querySelector(".quote-container .quote");
    currentQuote.classList.add("active");

    TweenMax.fromTo(currentQuote, 1, { opacity: 0 }, { opacity: 1, ease: Power2.easeOut, onComplete: () => quoteIsTransitioning = false });
  } else {
    let nextQuote = currentQuote.nextElementSibling;
    if (!nextQuote) nextQuote = document.querySelector(".quote-container .quote");

    currentQuote.classList.remove("active");
    nextQuote.classList.add("active");

    const tl = new TimelineMax({ onComplete: () => quoteIsTransitioning = false });
    tl.fromTo(currentQuote, 1, { opacity: 1 }, { opacity: 0, ease: Power2.easeOut });
    tl.fromTo(nextQuote, 1, { y: '0%', opacity: 0, ease: Power2.easeIn }, { y: '-50%', opacity: 1, ease: Power2.easeOut }, "=-0.6");
  }
}

function showPrevQuote() {
  if (quoteIsTransitioning) return;
  quoteIsTransitioning = true;

  let currentQuote = document.querySelector(".quote-container .quote.active");

  if (!currentQuote) {
    currentQuote = document.querySelector(".quote-container .quote");
    currentQuote.classList.add("active");

    TweenMax.fromTo(currentQuote, 1, { opacity: 0 }, { opacity: 1, ease: Power2.easeOut, onComplete: () => quoteIsTransitioning = false });
  } else {
    let prevQuote = currentQuote.previousElementSibling;
    if (!prevQuote) prevQuote = document.querySelector(".quote-container .quote:last-of-type");

    currentQuote.classList.remove("active");
    prevQuote.classList.add("active");

    const tl = new TimelineMax({ onComplete: () => quoteIsTransitioning = false });
    tl.fromTo(currentQuote, 1, { opacity: 1 }, { opacity: 0, ease: Power2.easeOut });
    tl.fromTo(prevQuote, 1, { y: '0%', opacity: 0, ease: Power2.easeIn }, { y: '-50%', opacity: 1, ease: Power2.easeOut }, "=-0.6");
  }
}

function quotesAutoSlide() {
  if (!document.querySelector(".quotes:hover")) {
    showNextQuote();
  }
}

function toggle() {
  document.querySelector('.mobile-menu-button').classList.toggle('menu-open');
  document.querySelector('.header__menu-container').classList.toggle('menu-open');
}

/* GLOBAL */
function showPage() {
  document.body.classList.remove('js-loading');
}

/* GET DATA FROM API */

function getQuotes() {
  const request = async () => {
    const quotes = await getPosts({ post_type: "quotes" });
    displayQuotes(quotes.map(quote => {
      return {
        id: quote.id,
        title: quote.title.rendered,
        content: quote.content.rendered
      }
    }));
  }
  request().catch((error) => { alert(error) }); // catch rejected promise
}
function displayQuotes(quotes) {
  const QUOTE_CONTAINER = document.querySelector(".quote-container");
  quotes.map(quote => {
    const quoteDiv = document.createElement("div");
    quoteDiv.classList.add("quote");

    quoteDiv.innerHTML = `
      <h3 class="quote__title">${quote.title}</h3>
      <div class="quote__content">${quote.content}</div>
    `;

    QUOTE_CONTAINER.prepend(quoteDiv);
  });

  // Start showing the quotes
  showNextQuote();
  quoteInterval = setInterval(quotesAutoSlide, 5000);
}
getQuotes();

function getPromos() {
  const request = async () => {
    const promos = await getPosts({ post_type: "cards" });
    displayPromos(promos.map(promo => {
      return {
        id: promo.id,
        title: promo.title.rendered,
        content: promo.content.rendered,
        image: promo._embedded['wp:featuredmedia'][0].source_url
      }
    }));
  }
  request().catch((error) => { alert(error) }); // catch rejected promise
}
function displayPromos(promos) {
  const PROMO_CONTAINER = document.querySelector(".promos");
  promos.map(promo => {
    const promoDiv = document.createElement("div");
    promoDiv.classList.add("promo");

    promoDiv.innerHTML = `
      <div class="promo__image">
        <a href="#">
          <img src="${promo.image}" alt="Promo Image" />
        </a>
      </div>
      <div class="promo__text">
        <h2>${promo.title}</h2>
        ${promo.content}
      </div>
      <div class="promo__link">
        <a href="#" class="arrow-link">Visit</a>
      </div>
    `;

    PROMO_CONTAINER.prepend(promoDiv);
  });

  // Add the scroll animation for the promos
  homePromoAnimation();
}
getPromos();

function getPosts({ post_type }) {
  return new Promise((resolve, reject) => {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        let wp_data = JSON.parse(this.responseText);
        resolve(wp_data);
      }
    };
    xmlhttp.open('GET', `/wp-json/wp/v2/${post_type}/?_embed`);
    xmlhttp.send();
  });
}

function formatWPDate(date) {
  let dateToParse = new Date(date);

  let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  let formattedDate =
    months[dateToParse.getMonth()] + ' ' +
    dateToParse.getDate() + ' ' +
    dateToParse.getFullYear();

  return formattedDate
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnNvbGUubG9nKFwiTWFpbiBKYXZhU2NyaXB0IExvYWRlZCBmcm9tIGZpbGVcIik7XHJcblxyXG5jb25zdCBjb250cm9sbGVyID0gbmV3IFNjcm9sbE1hZ2ljLkNvbnRyb2xsZXIoKTtcclxubGV0IHF1b3RlSW50ZXJ2YWw7XHJcblxyXG4vLyBXYWl0IGZvciBsb2FkaW5nIHRvIGNvbXBsZXRlIGJlZm9yZSBydW5uaW5nIGNzcyBhbmltYXRpb25zXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBpbml0KTtcclxuZnVuY3Rpb24gaW5pdCgpIHtcclxuXHJcbiAgLy8gR2xvYmFsXHJcbiAgc2hvd1BhZ2UoKTtcclxuXHJcbiAgLy8gSG9tZSBBbmltYXRpb25zXHJcbiAgaG9tZUJhbm5lckFuaW1hdGlvbigpO1xyXG4gIGhvbWVTaWduVXBBbmltYXRpb24oKTtcclxuICBob21lUHJvbW9BbmltYXRpb24oKTtcclxuICBob21lQmVsb25naW5nQW5pbWF0aW9uKCk7XHJcblxyXG4gIC8vIFF1b3Rlc1xyXG4gIHNob3dOZXh0UXVvdGUoKTtcclxuICBxdW90ZUludGVydmFsID0gc2V0SW50ZXJ2YWwocXVvdGVzQXV0b1NsaWRlLCA1MDAwKTtcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhvbWVCYW5uZXJBbmltYXRpb24oKSB7XHJcbiAgVHdlZW5NYXguZnJvbShcIi5iYW5uZXItLWhvbWVcIiwgMSwgeyBvcGFjaXR5OiAwLCBlYXNlOiBQb3dlcjIuZWFzZU91dCB9KTtcclxuICBUd2Vlbk1heC5mcm9tKFwiLmJhbm5lcl9fbG9nb1wiLCAxLjgsIHsgc2NhbGU6IC45LCB5OiAxMTAsIG9wYWNpdHk6IDAsIGVhc2U6IFBvd2VyMi5lYXNlT3V0LCBkZWxheTogMC41IH0pO1xyXG4gIFR3ZWVuTWF4LmZyb20oXCIuaGVhZGVyX19tZW51LWNvbnRhaW5lclwiLCAxLCB7IHk6IC01MCwgb3BhY2l0eTogMCwgZWFzZTogUG93ZXIyLmVhc2VPdXQsIGRlbGF5OiAxIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBob21lU2lnblVwQW5pbWF0aW9uKCkge1xyXG4gIGNvbnN0IHRsID0gbmV3IFRpbWVsaW5lTWF4KCk7XHJcblxyXG4gIHRsLmZyb20oXCIuc2lnbnVwX190ZXh0XCIsIC43LCB7IHg6IC01MCwgb3BhY2l0eTogMCwgZWFzZTogUG93ZXIyLmVhc2VPdXQgfSk7XHJcbiAgdGwuZnJvbShcIi5zaWdudXBfX2Zvcm1cIiwgLjcsIHsgeDogNTAsIG9wYWNpdHk6IDAsIGVhc2U6IFBvd2VyMi5lYXNlT3V0IH0sIFwiPS0wLjdcIik7XHJcblxyXG4gIG5ldyBTY3JvbGxNYWdpYy5TY2VuZSh7XHJcbiAgICB0cmlnZ2VyRWxlbWVudDogXCIuc2lnbnVwXCIsXHJcbiAgICB0cmlnZ2VySG9vazogMC43XHJcbiAgfSlcclxuICAgIC5zZXRUd2Vlbih0bClcclxuICAgIC5hZGRUbyhjb250cm9sbGVyKTtcclxuICAvLy5hZGRJbmRpY2F0b3JzKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhvbWVQcm9tb0FuaW1hdGlvbigpIHtcclxuICBjb25zdCB0bCA9IG5ldyBUaW1lbGluZU1heCgpO1xyXG5cclxuICB0bC5mcm9tKFwiLmVtcGhhc2lzXCIsIDEsIHsgeTogNTAsIG9wYWNpdHk6IDAsIGVhc2U6IFBvd2VyMi5lYXNlT3V0IH0pO1xyXG4gIHRsLnN0YWdnZXJGcm9tKFwiLnByb21vXCIsIC43LCB7IHk6IDUwLCBvcGFjaXR5OiAwLCBlYXNlOiBQb3dlcjIuZWFzZU91dCwgc3RhZ2dlcjogMC4yIH0pO1xyXG5cclxuICBuZXcgU2Nyb2xsTWFnaWMuU2NlbmUoe1xyXG4gICAgdHJpZ2dlckVsZW1lbnQ6IFwiLnByb21vXCIsXHJcbiAgICB0cmlnZ2VySG9vazogLjhcclxuICB9KVxyXG4gICAgLnNldFR3ZWVuKHRsKVxyXG4gICAgLmFkZFRvKGNvbnRyb2xsZXIpXHJcbiAgLy8uYWRkSW5kaWNhdG9ycygpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBob21lQmVsb25naW5nQW5pbWF0aW9uKCkge1xyXG4gIGNvbnN0IHRsID0gbmV3IFRpbWVsaW5lTWF4KCk7XHJcblxyXG4gIHRsLmZyb20oXCIuYmVsb25naW5nX19ib29rXCIsIDEsIHsgeDogLTUwLCBvcGFjaXR5OiAwLCBlYXNlOiBQb3dlcjIuZWFzZU91dCB9KTtcclxuICB0bC5mcm9tKFwiLmJlbG9uZ2luZ19fdGV4dFwiLCAxLCB7IHg6IDMwLCBvcGFjaXR5OiAwLCBlYXNlOiBQb3dlcjIuZWFzZU91dCB9LCBcIj0tMVwiKTtcclxuXHJcbiAgbmV3IFNjcm9sbE1hZ2ljLlNjZW5lKHtcclxuICAgIHRyaWdnZXJFbGVtZW50OiBcIi5iZWxvbmdpbmdcIixcclxuICAgIHRyaWdnZXJIb29rOiAuNFxyXG4gIH0pXHJcbiAgICAuc2V0VHdlZW4odGwpXHJcbiAgICAuYWRkVG8oY29udHJvbGxlcilcclxuICAvLy5hZGRJbmRpY2F0b3JzKCk7XHJcbn1cclxuXHJcbi8qIFFVT1RFUyAqL1xyXG5jb25zdCBuZXh0UXVvdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnF1b3RlcyAubmV4dFwiKTtcclxubmV4dFF1b3RlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93TmV4dFF1b3RlKTtcclxuY29uc3QgcHJldlF1b3RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5xdW90ZXMgLnByZXZcIik7XHJcbnByZXZRdW90ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd1ByZXZRdW90ZSk7XHJcblxyXG5mdW5jdGlvbiBzaG93TmV4dFF1b3RlKGUpIHtcclxuICBsZXQgY3VycmVudFF1b3RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5xdW90ZS1jb250YWluZXIgLnF1b3RlLmFjdGl2ZVwiKTtcclxuXHJcbiAgaWYgKCFjdXJyZW50UXVvdGUpIHtcclxuICAgIGN1cnJlbnRRdW90ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucXVvdGUtY29udGFpbmVyIC5xdW90ZVwiKTtcclxuICAgIGN1cnJlbnRRdW90ZS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG5cclxuICAgIFR3ZWVuTWF4LmZyb21UbyhjdXJyZW50UXVvdGUsIDEsIHsgb3BhY2l0eTogMCB9LCB7IG9wYWNpdHk6IDEsIGVhc2U6IFBvd2VyMi5lYXNlT3V0IH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBsZXQgbmV4dFF1b3RlID0gY3VycmVudFF1b3RlLm5leHRFbGVtZW50U2libGluZztcclxuICAgIGlmICghbmV4dFF1b3RlKSBuZXh0UXVvdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnF1b3RlLWNvbnRhaW5lciAucXVvdGVcIik7XHJcblxyXG4gICAgY3VycmVudFF1b3RlLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICBuZXh0UXVvdGUuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuXHJcbiAgICBjb25zdCB0bCA9IG5ldyBUaW1lbGluZU1heCgpO1xyXG4gICAgdGwuZnJvbVRvKGN1cnJlbnRRdW90ZSwgMSwgeyBvcGFjaXR5OiAxIH0sIHsgb3BhY2l0eTogMCwgZWFzZTogUG93ZXIyLmVhc2VPdXQgfSk7XHJcbiAgICB0bC5mcm9tVG8obmV4dFF1b3RlLCAxLCB7IHk6ICcwJScsIG9wYWNpdHk6IDAsIGVhc2U6IFBvd2VyMi5lYXNlSW4gfSwgeyB5OiAnLTUwJScsIG9wYWNpdHk6IDEsIGVhc2U6IFBvd2VyMi5lYXNlT3V0IH0sIFwiPS0wLjZcIik7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93UHJldlF1b3RlKCkge1xyXG4gIGxldCBjdXJyZW50UXVvdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnF1b3RlLWNvbnRhaW5lciAucXVvdGUuYWN0aXZlXCIpO1xyXG5cclxuICBpZiAoIWN1cnJlbnRRdW90ZSkge1xyXG4gICAgY3VycmVudFF1b3RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5xdW90ZS1jb250YWluZXIgLnF1b3RlXCIpO1xyXG4gICAgY3VycmVudFF1b3RlLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcblxyXG4gICAgVHdlZW5NYXguZnJvbVRvKGN1cnJlbnRRdW90ZSwgMSwgeyBvcGFjaXR5OiAwIH0sIHsgb3BhY2l0eTogMSwgZWFzZTogUG93ZXIyLmVhc2VPdXQgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGxldCBwcmV2UXVvdGUgPSBjdXJyZW50UXVvdGUucHJldmlvdXNFbGVtZW50U2libGluZztcclxuICAgIGlmICghcHJldlF1b3RlKSBwcmV2UXVvdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnF1b3RlLWNvbnRhaW5lciAucXVvdGU6bGFzdC1vZi10eXBlXCIpO1xyXG5cclxuICAgIGN1cnJlbnRRdW90ZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgcHJldlF1b3RlLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcblxyXG4gICAgY29uc3QgdGwgPSBuZXcgVGltZWxpbmVNYXgoKTtcclxuICAgIHRsLmZyb21UbyhjdXJyZW50UXVvdGUsIDEsIHsgb3BhY2l0eTogMSB9LCB7IG9wYWNpdHk6IDAsIGVhc2U6IFBvd2VyMi5lYXNlT3V0IH0pO1xyXG4gICAgdGwuZnJvbVRvKHByZXZRdW90ZSwgMSwgeyB5OiAnMCUnLCBvcGFjaXR5OiAwLCBlYXNlOiBQb3dlcjIuZWFzZUluIH0sIHsgeTogJy01MCUnLCBvcGFjaXR5OiAxLCBlYXNlOiBQb3dlcjIuZWFzZU91dCB9LCBcIj0tMC42XCIpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcXVvdGVzQXV0b1NsaWRlKCkge1xyXG4gIGlmICghZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5xdW90ZXM6aG92ZXJcIikpIHNob3dOZXh0UXVvdGUoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdG9nZ2xlKCkge1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2JpbGUtbWVudS1idXR0b24nKS5jbGFzc0xpc3QudG9nZ2xlKCdtZW51LW9wZW4nKTtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19tZW51LWNvbnRhaW5lcicpLmNsYXNzTGlzdC50b2dnbGUoJ21lbnUtb3BlbicpO1xyXG59XHJcblxyXG4vKiBHTE9CQUwgKi9cclxuZnVuY3Rpb24gc2hvd1BhZ2UoKSB7XHJcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdqcy1sb2FkaW5nJyk7XHJcbn1cclxuXHJcbiJdLCJmaWxlIjoibWFpbi5qcyJ9
