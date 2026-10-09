import Swiper from 'swiper'
import { Navigation } from 'swiper/modules'
import 'swiper/css'

const freeRoot = document.querySelector('[data-activities-slider]')

if (freeRoot) {
  new Swiper(freeRoot.querySelector('.swiper'), {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 16,
    speed: 550,
    grabCursor: true,
    observer: true,
    observeParents: true,
    navigation: {
      prevEl: freeRoot.querySelector('[data-activities-prev]'),
      nextEl: freeRoot.querySelector('[data-activities-next]'),
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

const paidRoot = document.querySelector('[data-paid-slider]')

if (paidRoot) {
  new Swiper(paidRoot.querySelector('.swiper'), {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 16,
    speed: 550,
    grabCursor: true,
    observer: true,
    observeParents: true,
    navigation: {
      prevEl: paidRoot.querySelector('[data-paid-prev]'),
      nextEl: paidRoot.querySelector('[data-paid-next]'),
    },
    breakpoints: {
      768: {
        spaceBetween: 24,
      },
    },
  })
}
