import Swiper from 'swiper'
import { Navigation } from 'swiper/modules'
import 'swiper/css'

const root = document.querySelector('[data-events-slider]')

if (root) {
  new Swiper(root.querySelector('.swiper'), {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 16,
    speed: 550,
    grabCursor: true,
    observer: true,
    observeParents: true,
    navigation: {
      prevEl: root.querySelector('[data-events-prev]'),
      nextEl: root.querySelector('[data-events-next]'),
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1480: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
    },
  })
}
