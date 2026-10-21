const bar = document.querySelector('.bar')
const features = document.querySelector('.features')

if (bar) {
  const mq = window.matchMedia('(max-width: 575px)')

  const closeMenu = () => {
    if (!document.body.classList.contains('is-menu-open')) return
    document.body.classList.remove('is-menu-open')
    document.querySelectorAll('[data-menu]').forEach((burger) => {
      burger.setAttribute('aria-expanded', 'false')
      burger.setAttribute('aria-label', 'Открыть меню')
    })
  }

  const sync = () => {
    if (!mq.matches) {
      document.body.classList.remove('is-bar-visible')
      return
    }

    // На страницах без features (шаблон дома) бар всегда виден
    const reached = features
      ? features.getBoundingClientRect().top <= window.innerHeight * 0.7
      : true

    document.body.classList.toggle('is-bar-visible', reached)

    if (!reached) closeMenu()
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
