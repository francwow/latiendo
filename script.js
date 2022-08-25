const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');
  const overlay = document.querySelector('.overlay');
  const section = document.querySelector('.main-section');
  const sections = document.querySelector('.sections-container');

  burger.addEventListener('click', () => {
      //Toggle Nav
    nav.classList.toggle('nav-active');
    
    //Burger Animation
    burger.classList.toggle('toggle');

    //Overlay Toggle 
    overlay.classList.toggle('overlay-visible');

      //Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .3}s`;
      }
    });
  });

  //Reset Main Page
  sections.addEventListener('click', () => {
    nav.classList.remove('nav-active');
    overlay.classList.remove('overlay-visible');
    burger.classList.remove('toggle');

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } 
    });
  });
}

// AUTOMATIC CAROUSEL WITH 'CLICK' EVENT LISTENERS.
const carousel = () => {
  const carouselItem = document.querySelectorAll('.carousel_item');
  console.log(carouselItem);

  const dots = document.querySelector('.dots');
  console.log(dots);

  const dotsChildren = document.querySelectorAll('.dot');
  console.log(dotsChildren);

  const dotOne = document.querySelector('.dot-1');
  console.log(dotOne);

  const dotTwo = document.querySelector('.dot-2');
  console.log(dotTwo);

  const dotThree = document.querySelector('.dot-3');
  console.log(dotThree);

  // Set Interval for Animation
  // STOP ANIMATIONS
  let interval = setInterval(function() {
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
        item.classList.remove('show');
      } else {
        item.classList.add('show');
      }
    }); 

    dotsChildren.forEach((item, itemIndex) => {
      if (itemIndex === index) {
        item.classList.add('isGreen');
      } else {
        item.classList.remove('isGreen');
      }
    }); 
  }


  dotsChildren.forEach((dot, i) => {
    dot.addEventListener('click', () => {

      clearInterval(interval);
      index = i;

      carouselItem.forEach((item, j) => {
        if (j === i) {
          item.classList.add('show');
        } else {
          item.classList.remove('show');
        }
      });

      dotsChildren.forEach((item, j) => {
        if (j === i) {
          item.classList.add('isGreen');
        } else {
          item.classList.remove('isGreen');
        }
      }); 

      interval = setInterval(function() {
        startCarousel();
      }, 3000);
    });
  });

  // dotOne.addEventListener('click', () => {
  //   clearInterval(interval);
  //   index = 0;
  //   carouselItem[0].classList.add('show');
  //   carouselItem[1].classList.remove('show');
  //   carouselItem[2].classList.remove('show');
  //   dotOne.classList.add('isGrey');
  //   dotTwo.classList.remove('isGrey');
  //   dotThree.classList.remove('isGrey');
  //   interval = setInterval(function() {
  //     startCarousel();
  //   }, 3000);
  // })

  // dotTwo.addEventListener('click', () => {
  //   clearInterval(interval);
  //   index = 1;
  //   carouselItem[0].classList.remove('show');
  //   carouselItem[1].classList.add('show');
  //   carouselItem[2].classList.remove('show');
  //   dotOne.classList.remove('isGrey');
  //   dotTwo.classList.add('isGrey');
  //   dotThree.classList.remove('isGrey');
  //   interval = setInterval(function() {
  //     startCarousel();
  //   }, 3000);
  // })

  // dotThree.addEventListener('click', () => {
  //   clearInterval(interval);
  //   index = 2;
  //   carouselItem[0].classList.remove('show');
  //   carouselItem[1].classList.remove('show');
  //   carouselItem[2].classList.add('show');
  //   dotOne.classList.remove('isGrey');
  //   dotTwo.classList.remove('isGrey');
  //   dotThree.classList.add('isGrey');
  //   interval = setInterval(function() {
  //     startCarousel();
  //   }, 3000);
  // })
}


// MANIPULATE ELEMENTS IN ABOUT SECTION TO APPEAR ON SCROLL.
// const aboutPopUp = () => {

//   let bio = document.querySelector('.bio-container');
//   let header = document.querySelector('.about-heading');


//   window.addEventListener('scroll', () => {

//     let bioChildren = bio.children;
//     let screenPosition = window.innerHeight / 1.3;
//     let screenPosition2 = window.innerHeight / 1.3;
//     let headerPosition = header.getBoundingClientRect().top;

//     for (i = 0; i < bioChildren.length; i++) {
//       let bioPosition = bioChildren[i].getBoundingClientRect().top;
//       if (bioPosition < screenPosition) {
//         bioChildren[i].classList.add('popActive');
//       } else {
//         bioChildren[i].classList.remove('popActive');
//       }
//     }

//     // if (headerPosition < screenPosition2) {
//     //   header.classList.add('header-active');
//     // } else {
//     //   header.classList.remove('header-active');
//     // } 
//   });
// }


// aboutPopUp();
carousel();
navSlide();
