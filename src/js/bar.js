const bar = document.querySelector('.bar')
const features = document.querySelector('.features')

if (bar && features) {
  const mq = window.matchMedia('(max-width: 767px)')

  const sync = () => {
    if (!mq.matches) {
      document.body.classList.remove('is-bar-visible')
      return
    }

    const reached = features.getBoundingClientRect().top <= window.innerHeight * 0.7
    document.body.classList.toggle('is-bar-visible', reached)

    if (!reached && document.body.classList.contains('is-menu-open')) {
      document.body.classList.remove('is-menu-open')
      document.querySelectorAll('[data-menu]').forEach((burger) => {
        burger.setAttribute('aria-expanded', 'false')
        burger.setAttribute('aria-label', 'Открыть меню')
      })
    }
  }

  sync()
  window.addEventListener('scroll', sync, { passive: true })
  window.addEventListener('resize', sync)

  if (typeof mq.addEventListener === 'function') {
    mq.addEventListener('change', sync)
  } else {
    mq.addListener(sync)
  }
}
