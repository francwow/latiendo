const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  const overlay = document.querySelector(".overlay");
  const section = document.querySelector(".main-section");
  const sections = document.querySelector(".sections-container");

  burger.addEventListener("click", () => {
    //Toggle Nav
    nav.classList.toggle("nav-active");

    //Burger Animation
    burger.classList.toggle("toggle");

    //Overlay Toggle
    overlay.classList.toggle("overlay-visible");

    //Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });
  });

  //Reset Main Page
  sections.addEventListener("click", () => {
    nav.classList.remove("nav-active");
    overlay.classList.remove("overlay-visible");
    burger.classList.remove("toggle");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      }
    });
  });
};

// AUTOMATIC CAROUSEL WITH 'CLICK' EVENT LISTENERS.
const carousel = () => {
  const carouselItem = document.querySelectorAll(".carousel_item");

  const dots = document.querySelector(".dots");

  const dotsChildren = document.querySelectorAll(".dot");

  const dotOne = document.querySelector(".dot-1");

  const dotTwo = document.querySelector(".dot-2");

  const dotThree = document.querySelector(".dot-3");

  // Set Interval for Animation
  let interval = setInterval(function () {
    startCarousel();
  }, 3000);

  // Index for carouselItem Array
  let index = 0;

  // Function for adding and removing show class
  startCarousel = () => {
    index += 1;
    if (index > carouselItem.length - 1) index = 0;

    carouselItem.forEach((item, itemIndex) => {
      if (itemIndex !== index) {
        item.classList.remove("show");
      } else {
        item.classList.add("show");
      }
    });

    dotsChildren.forEach((item, itemIndex) => {
      if (itemIndex !== index) {
        item.classList.remove("isGreen");
      } else {
        item.classList.add("isGreen");
      }
    });
  };

  dotsChildren.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      // STOP ANIMATIONS
      clearInterval(interval);
      index = i;

      carouselItem.forEach((item, j) => {
        if (j === i) {
          item.classList.add("show");
        } else {
          item.classList.remove("show");
        }
      });

      dotsChildren.forEach((item, j) => {
        if (j === i) {
          item.classList.add("isGreen");
        } else {
          item.classList.remove("isGreen");
        }
      });

      interval = setInterval(function () {
        startCarousel();
      }, 3000);
    });
  });
};

const imgModal = () => {
  const arrowLeft = document.querySelector(".modal-arrow-left");
  const arrowLeftTwo = document.querySelector(".modal-arrow-left-2");
  const arrowRight = document.querySelector(".modal-arrow-right");
  const arrowRightTwo = document.querySelector(".modal-arrow-right-2");
  const images = document.querySelectorAll(".img-container");
  const imagesTwo = document.querySelectorAll(".img-container-2");
  const modalContainer = document.querySelector(".modal-container");
  const modalContainerTwo = document.querySelector(".modal-container-2");
  const modalClose = document.querySelector(".modal-close");
  const modalCloseTwo = document.querySelector(".modal-close-2");
  const talleresOne = document.querySelector(".talleres-info-img-1");
  const talleresTwo = document.querySelector(".talleres-info-img-2");

  let index = 0;

  arrowLeft.addEventListener("click", () => {
    index -= 1;
    if (index < 0) {
      index = 4;
    }

    images.forEach((image, i) => {
      if (index === i) {
        images[i].classList.remove("img-hide");
        images[i].classList.add("img-show");
      } else {
        images[i].classList.remove("img-show");
        images[i].classList.add("img-hide");
      }
    });
  });

  arrowRight.addEventListener("click", () => {
    index += 1;
    if (index > images.length - 1) {
      index = 0;
    }

    images.forEach((image, i) => {
      if (index === i) {
        images[i].classList.remove("img-hide");
        images[i].classList.add("img-show");
      } else {
        images[i].classList.remove("img-show");
        images[i].classList.add("img-hide");
      }
    });
  });

  arrowLeftTwo.addEventListener("click", () => {
    index -= 1;
    if (index < 0) {
      index = 4;
    }

    imagesTwo.forEach((image, i) => {
      if (index === i) {
        imagesTwo[i].classList.remove("img-hide");
        imagesTwo[i].classList.add("img-show");
      } else {
        imagesTwo[i].classList.remove("img-show");
        imagesTwo[i].classList.add("img-hide");
      }
    });
  });

  arrowRightTwo.addEventListener("click", () => {
    index += 1;
    if (index > images.length - 1) {
      index = 0;
    }

    imagesTwo.forEach((image, i) => {
      if (index === i) {
        imagesTwo[i].classList.remove("img-hide");
        imagesTwo[i].classList.add("img-show");
      } else {
        imagesTwo[i].classList.remove("img-show");
        imagesTwo[i].classList.add("img-hide");
      }
    });
  });

  talleresOne.addEventListener("click", () => {
    modalContainer.style.display = "flex";
  });

  talleresTwo.addEventListener("click", () => {
    modalContainerTwo.style.display = "flex";
  });

  modalClose.addEventListener("click", () => {
    modalContainer.style.display = "none";
  });

  modalCloseTwo.addEventListener("click", () => {
    modalContainerTwo.style.display = "none";
  });
};

// aboutPopUp();
carousel();
navSlide();
imgModal();
