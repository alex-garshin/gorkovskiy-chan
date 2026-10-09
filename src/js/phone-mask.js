const formatPhone = (value) => {
  let digits = value.replace(/\D/g, '')

  if (digits.startsWith('8')) {
    digits = `7${digits.slice(1)}`
  }

  if (!digits.startsWith('7')) {
    digits = `7${digits}`
  }

  digits = digits.slice(0, 11)

  const parts = ['+7']

  if (digits.length > 1) {
    parts.push(' (', digits.slice(1, 4))
  }

  if (digits.length >= 4) {
    parts.push(')')
  }

  if (digits.length > 4) {
    parts.push(' ', digits.slice(4, 7))
  }

  if (digits.length > 7) {
    parts.push('-', digits.slice(7, 9))
  }

  if (digits.length > 9) {
    parts.push('-', digits.slice(9, 11))
  }

  return parts.join('')
}

document.querySelectorAll('[data-phone-mask]').forEach((input) => {
  input.addEventListener('input', () => {
    const start = input.selectionStart
    const prev = input.value
    const next = formatPhone(input.value)

    input.value = next

    if (next.length < prev.length) {
      input.setSelectionRange(start, start)
    }
  })

  input.addEventListener('focus', () => {
    if (!input.value.trim()) {
      input.value = '+7 ('
    }
  })

  input.addEventListener('blur', () => {
    if (input.value.replace(/\D/g, '').length <= 1) {
      input.value = ''
    }
  })
})
