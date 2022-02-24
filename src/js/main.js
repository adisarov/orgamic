var mixer = mixitup('.pr-list');

const swiper = new Swiper('.swiper', {

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },

  // Optional parameters
  direction: 'horizontal',
  loop: false,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
