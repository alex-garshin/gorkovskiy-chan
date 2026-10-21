import Swiper from 'swiper'
import { Navigation } from 'swiper/modules'
import 'swiper/css'

const root = document.querySelector('[data-house-more]')

if (root) {
  new Swiper(root.querySelector('.swiper'), {
    modules: [Navigation],
    slidesPerView: 1.12,
    spaceBetween: 12,
    speed: 550,
    grabCursor: true,
    observer: true,
    observeParents: true,
    navigation: {
      prevEl: root.querySelector('[data-house-more-prev]'),
      nextEl: root.querySelector('[data-house-more-next]'),
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      1400: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  })
}
