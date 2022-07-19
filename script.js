const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');
  const overlay = document.querySelector('.overlay');
  const section = document.querySelector('.main-section');

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
  section.addEventListener('click', () => {
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

navSlide();
