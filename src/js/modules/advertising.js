import Swiper, { Pagination } from 'swiper'

new Swiper('.advertising-slider__slider', {
   modules: [Pagination],
   spaceBetween: 10,
   slidesPerView: 4,
   grabCursor: true,
   allowTouchMove: true,
   watchOverflow: 5,
   pagination: {
      el: '.advertising-slider__pagination',
      type: 'bullets',
   },
   breakpoints: {
      0: {
         slidesPerView: 1.2,
      },
      425: {
         slidesPerView: 1.6,
      },
      600: {
         slidesPerView: 2.2,
      },
      800: {
         slidesPerView: 2.7,
      },
      991: {
         slidesPerView: 3,
      },
      1100: {
         slidesPerView: 4,
      },
   },
})
