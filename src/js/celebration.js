import Swiper from 'swiper'
import { Navigation } from 'swiper/modules'
import 'swiper/css'

const root = document.querySelector('[data-celebration-slider]')

if (root) {
  const mq = window.matchMedia('(max-width: 767px)')
  let swiper = null

  const mount = () => {
    if (swiper || !mq.matches) return

    swiper = new Swiper(root.querySelector('.swiper'), {
      modules: [Navigation],
      slidesPerView: 1.15,
      spaceBetween: 12,
      speed: 550,
      grabCursor: true,
      observer: true,
      observeParents: true,
      watchOverflow: true,
      navigation: {
        prevEl: root.querySelector('[data-celebration-prev]'),
        nextEl: root.querySelector('[data-celebration-next]'),
      },
    })
  }

  const unmount = () => {
    if (!swiper) return
    swiper.destroy(true, true)
    swiper = null
  }

  const sync = () => {
    if (mq.matches) mount()
    else unmount()
  }

  sync()

  if (typeof mq.addEventListener === 'function') {
    mq.addEventListener('change', sync)
  } else {
    mq.addListener(sync)
  }
}
