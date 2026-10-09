const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
const items = document.querySelectorAll('.reveal')

if (reduced) {
  items.forEach((el) => el.classList.add('is-revealed'))
} else if (items.length) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('is-revealed')
        io.unobserve(entry.target)
      })
    },
    {
      root: null,
      rootMargin: '0px 0px -12% 0px',
      threshold: 0.15,
    },
  )

  requestAnimationFrame(() => {
    items.forEach((el) => {
      if (el.closest('.hero')) {
        el.classList.add('is-revealed')
        return
      }
      io.observe(el)
    })
  })
}
