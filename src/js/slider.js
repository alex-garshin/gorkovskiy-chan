import Swiper from 'swiper'
import { Navigation } from 'swiper/modules'
import 'swiper/css'

const root = document.querySelector('[data-scenarios]')

if (root) {
  new Swiper(root.querySelector('.swiper'), {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 16,
    loop: true,
    speed: 550,
    grabCursor: true,
    observer: true,
    observeParents: true,
    navigation: {
      prevEl: root.querySelector('[data-scenarios-prev]'),
      nextEl: root.querySelector('[data-scenarios-next]'),
    },
    breakpoints: {
      768: {
        spaceBetween: 24,
      },
    },
  })
}
