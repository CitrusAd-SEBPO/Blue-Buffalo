// product carousel
featureProductScroller(".citrusBlue_treats_splide-irresitible");
featureProductScroller(".citrusBlue_treats_splide-delectable");

function featureProductScroller(idx) {
  var splides = document.querySelectorAll(idx);
  if (splides.length) {
    for (var i = 0; i < splides.length; i++) {
      var splideElement = splides[i];
      var splideDefaultOptions = {
        type: "slide",
        autoplay: false,
        rewindSpeed: 500,
        speed: 500,
        pauseOnHover: true,
        perPage: 2,
        perMove: 1,
        start: 0,
        focus: 0,
        pagination: false,
        omitEnd: true,
        breakpoints: {
          375: {
            perPage: 1,
          },
          576: {
            perPage: 1,
          },
          991: {
            perPage: 2,
          },
          992: {
            perPage: 2,
          },
          1024: {
            perPage: 2,
          },
          1200: {
            perPage: 2,
          },
          1440: {
            perPage: 2,
          },
        },
      };

      new Splide(splideElement, splideDefaultOptions).mount();
    }
  }
}



{
  /*-------------------------*
           custom coded hero slider 
           *---------------------------*/
}

/*----------------------
  ---- RoW slider js -----
  ------------------------*/
let citrusBlue_treats_carousel = document.querySelector(".citrusBlue_treats_carousel");

let citrusBlue_treats_carouselInner = document.querySelector(
  ".citrusBlue_treats_carousel-inner"
);

let prev = document.querySelector(".citrusBlue_treats_carousel-controls .prev");

let next = document.querySelector(".citrusBlue_treats_carousel-controls .next");

let slides = document.querySelectorAll(
  ".citrusBlue_treats_carousel-inner .citrusBlue_treats_carousel-item"
);

let totalSlides = slides.length;

let step = 100 / totalSlides;

let activeSlide = 0;

let activeIndicator = 0;

let direction = -1;

let jump = 1;

let interval = 7000; /*5000*/

let time;

//Init citrusBlue_treats_carousel
citrusBlue_treats_carouselInner.style.minWidth = totalSlides * 100 + "%";
loadIndicators();
loop(true);

//citrusBlue_treats_carousel events

next.addEventListener("click", () => {
  slideToNext();
});

prev.addEventListener("click", () => {
  slideToPrev();
});

citrusBlue_treats_carouselInner.addEventListener("transitionend", () => {
  if (direction === -1) {
    if (jump > 1) {
      for (let i = 0; i < jump; i++) {
        activeSlide++;
        citrusBlue_treats_carouselInner.append(
          citrusBlue_treats_carouselInner.firstElementChild
        );
      }
    } else {
      activeSlide++;
      citrusBlue_treats_carouselInner.append(
        citrusBlue_treats_carouselInner.firstElementChild
      );
    }
  } else if (direction === 1) {
    if (jump > 1) {
      for (let i = 0; i < jump; i++) {
        activeSlide--;
        citrusBlue_treats_carouselInner.prepend(
          citrusBlue_treats_carouselInner.lastElementChild
        );
      }
    } else {
      activeSlide--;
      citrusBlue_treats_carouselInner.prepend(
        citrusBlue_treats_carouselInner.lastElementChild
      );
    }
  }

  citrusBlue_treats_carouselInner.style.transition = "none";
  citrusBlue_treats_carouselInner.style.transform = "translateX(0%)";
  setTimeout(() => {
    jump = 1;
    citrusBlue_treats_carouselInner.style.transition = "all ease .5s";
  });
  updateIndicators();
});

document
  .querySelectorAll(".citrusBlue_treats_carousel-indicators span")
  .forEach((item) => {
    item.addEventListener("click", (e) => {
      let slideTo = parseInt(e.target.dataset.slideTo);
      let indicators = document.querySelectorAll(
        ".citrusBlue_treats_carousel-indicators span"
      );

      indicators.forEach((item, index) => {
        if (item.classList.contains("active")) {
          activeIndicator = index;
        }
      });
      if (slideTo - activeIndicator > 1) {
        jump = slideTo - activeIndicator;
        step = jump * step;
        slideToNext();
      } else if (slideTo - activeIndicator === 1) {
        slideToNext();
      } else if (slideTo - activeIndicator < 0) {
        if (Math.abs(slideTo - activeIndicator) > 1) {
          jump = Math.abs(slideTo - activeIndicator);
          step = jump * step;
          slideToPrev();
        }
        slideToPrev();
      }
      step = 100 / totalSlides;
    });
  });

citrusBlue_treats_carousel.addEventListener("mouseover", () => {
  loop(false);
});

citrusBlue_treats_carousel.addEventListener("mouseout", () => {
  loop(true);
});

//citrusBlue_treats_carousel functions

function loadIndicators() {
  slides.forEach((slide, index) => {
    if (index === 0) {
      document.querySelector(
        ".citrusBlue_treats_carousel-indicators"
      ).innerHTML += `<span data-slide-to="${index}" class="active"></span>`;
    } else {
      document.querySelector(
        ".citrusBlue_treats_carousel-indicators"
      ).innerHTML += `<span data-slide-to="${index}"></span>`;
    }
  });
}

function updateIndicators() {
  if (activeSlide > totalSlides - 1) {
    activeSlide = 0;
  } else if (activeSlide < 0) {
    activeSlide = totalSlides - 1;
  }
  document
    .querySelector(".citrusBlue_treats_carousel-indicators span.active")
    .classList.remove("active");
  document
    .querySelectorAll(".citrusBlue_treats_carousel-indicators span")
    [activeSlide].classList.add("active");
}

function slideToNext() {
  if (direction === 1) {
    direction = -1;
    citrusBlue_treats_carouselInner.prepend(
      citrusBlue_treats_carouselInner.lastElementChild
    );
  }

  citrusBlue_treats_carousel.style.justifyContent = "flex-start";
  citrusBlue_treats_carouselInner.style.transform = `translateX(-${step}%)`;
}

function slideToPrev() {
  if (direction === -1) {
    direction = 1;
    citrusBlue_treats_carouselInner.append(
      citrusBlue_treats_carouselInner.firstElementChild
    );
  }
  citrusBlue_treats_carousel.style.justifyContent = "flex-end";
  citrusBlue_treats_carouselInner.style.transform = `translateX(${step}%)`;
  loop(false);
}

function loop(status) {
  if (status === true) {
    time = setInterval(() => {
      slideToNext();
    }, interval);
  } else {
    clearInterval(time);
  }
}
// pov loader add. before full load js pov none.
document.addEventListener("DOMContentLoaded", function () {
  citrusBlue_treats_carousel.style.display = "flex";
});

/*-----------------------
  --- End Row js Slider ----
  ------------------------*/

