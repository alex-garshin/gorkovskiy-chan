import Swiper from 'swiper'
import { Navigation } from 'swiper/modules'
import 'swiper/css'

const grid = document.querySelector('[data-houses-grid]')

if (grid) {
  const logoSrc = grid.dataset.logo || '/img/bg/logo.svg'

  function getColumns() {
    if (window.matchMedia('(max-width: 767px)').matches) return 1
    if (window.matchMedia('(max-width: 1479px)').matches) return 2
    return 3
  }

  function createLogoCard() {
    const card = document.createElement('div')
    card.className = 'house house--logo'
    card.setAttribute('aria-hidden', 'true')
    card.innerHTML = `<img src="${logoSrc}" alt="" />`
    return card
  }

  function fillRow() {
    if (window.matchMedia('(max-width: 767px)').matches) {
      grid.querySelectorAll('.house--logo').forEach((el) => el.remove())
      return
    }

    grid.querySelectorAll('.house--logo').forEach((el) => el.remove())

    const count = grid.querySelectorAll('.house:not(.house--logo)').length
    const cols = getColumns()
    const remainder = count % cols

    if (!remainder) return

    const need = cols - remainder
    for (let i = 0; i < need; i += 1) {
      grid.appendChild(createLogoCard())
    }
  }

  fillRow()
  window.addEventListener('resize', fillRow, { passive: true })
}

document.querySelectorAll('[data-houses-slider]').forEach((root) => {
  const swiperEl = root.querySelector('.swiper')
  if (!swiperEl) return

  new Swiper(swiperEl, {
    modules: [Navigation],
    slidesPerView: 1.12,
    spaceBetween: 12,
    loop: true,
    speed: 550,
    grabCursor: true,
    observer: true,
    observeParents: true,
    navigation: {
      prevEl: root.querySelector('[data-houses-prev]'),
      nextEl: root.querySelector('[data-houses-next]'),
    },
  })
})
