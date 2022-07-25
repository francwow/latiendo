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


const carousel = () => {
  const carouselItem = document.querySelectorAll('.carousel_item');
  console.log(carouselItem);

  const dots = document.querySelector('.dots');
  console.log(dots);

  const dotsChildren = dots.children;
  console.log(dotsChildren);

  const dotOne = document.querySelector('.dot-1');
  console.log(dotOne);

  const dotTwo = document.querySelector('.dot-2');
  console.log(dotTwo);

  const dotThree = document.querySelector('.dot-3');
  console.log(dotThree);

  // Set Interval for Animation
  // as;lasfm
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

    for (i = 0; i < dotsChildren.length; i++) {
      if (i !== index) {
        dotsChildren[i].classList.remove('isGrey');
      } else {
        dotsChildren[i].classList.add('isGrey');
      }
    }
  }


  // CONTRUIR FOR LOOP EVENTLISTENER PARA DOTS
  dotOne.addEventListener('click', () => {
    clearInterval(interval);
    index = 0;
    carouselItem[0].classList.add('show');
    carouselItem[1].classList.remove('show');
    carouselItem[2].classList.remove('show');
    dotOne.classList.add('isGrey');
    dotTwo.classList.remove('isGrey');
    dotThree.classList.remove('isGrey');
    interval = setInterval(function() {
      startCarousel();
    }, 3000);
  })

  dotTwo.addEventListener('click', () => {
    clearInterval(interval);
    index = 1;
    carouselItem[0].classList.remove('show');
    carouselItem[1].classList.add('show');
    carouselItem[2].classList.remove('show');
    dotOne.classList.remove('isGrey');
    dotTwo.classList.add('isGrey');
    dotThree.classList.remove('isGrey');
    interval = setInterval(function() {
      startCarousel();
    }, 3000);
  })

  dotThree.addEventListener('click', () => {
    clearInterval(interval);
    index = 2;
    carouselItem[0].classList.remove('show');
    carouselItem[1].classList.remove('show');
    carouselItem[2].classList.add('show');
    dotOne.classList.remove('isGrey');
    dotTwo.classList.remove('isGrey');
    dotThree.classList.add('isGrey');
    interval = setInterval(function() {
      startCarousel();
    }, 3000);
  })
  // CONTRUIR FOR LOOP EVENTLISTENER PARA DOTS

}

const aboutPopUp = () => {

  let bio = document.querySelector('.bio-container');

  window.addEventListener('scroll', () => {
    let bioChildren = bio.children;
    for (i = 0; i < bioChildren.length; i++) {
      let screenPosition = window.innerHeight / 1.7;
      let bioPosition = bioChildren[i].getBoundingClientRect().top;

      if (bioPosition < screenPosition) {
        bioChildren[i].classList.add('popActive');
      } else {
        bioChildren[i].classList.remove('popActive');
      }
    }
  });
}

aboutPopUp();
carousel();
navSlide();
