document.addEventListener('DOMContentLoaded', () => {
  new Swiper('.swiper', {
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
      loop: true,
      autoplay: {
          delay: 750,
          disableOnInteraction: false, // Autoplay continues even after user interaction

      },
  });
});