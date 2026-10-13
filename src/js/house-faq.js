const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
const items = document.querySelectorAll('.faq__item')

items.forEach((item) => {
  const summary = item.querySelector('.faq__head')
  const panel = item.querySelector('.faq__panel')
  if (!summary || !panel) return

  let animating = false

  if (item.open) {
    panel.style.height = 'auto'
  } else {
    panel.style.height = '0px'
  }

  summary.addEventListener('click', (event) => {
    event.preventDefault()
    if (animating) return

    if (reduced) {
      item.open = !item.open
      panel.style.height = item.open ? 'auto' : '0px'
      return
    }

    if (item.open) {
      closeItem()
    } else {
      openItem()
    }
  })

  function openItem() {
    animating = true
    item.open = true
    panel.style.height = '0px'

    requestAnimationFrame(() => {
      panel.style.height = `${panel.scrollHeight}px`
    })

    panel.addEventListener('transitionend', function onEnd(event) {
      if (event.propertyName !== 'height') return
      panel.removeEventListener('transitionend', onEnd)
      panel.style.height = 'auto'
      animating = false
    })
  }

  function closeItem() {
    animating = true
    panel.style.height = `${panel.scrollHeight}px`
    panel.offsetHeight
    panel.style.height = '0px'

    panel.addEventListener('transitionend', function onEnd(event) {
      if (event.propertyName !== 'height') return
      panel.removeEventListener('transitionend', onEnd)
      item.open = false
      animating = false
    })
  }
})
