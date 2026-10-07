const burgers = document.querySelectorAll('[data-menu]')
const panel = document.querySelector('[data-mnav]')

if (burgers.length && panel) {
  const setOpen = (open) => {
    document.body.classList.toggle('is-menu-open', open)
    burgers.forEach((burger) => {
      burger.setAttribute('aria-expanded', String(open))
      burger.setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню')
    })
  }

  burgers.forEach((burger) => {
    burger.addEventListener('click', () => {
      setOpen(!document.body.classList.contains('is-menu-open'))
    })
  })

  panel.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setOpen(false))
  })
}
