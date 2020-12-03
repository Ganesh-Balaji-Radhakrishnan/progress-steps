const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let elementCount = 1

next.addEventListener('click', () => {
  elementCount++

  if (elementCount > circles.length) {
    elementCount = circles.length
  }

  update()
})

prev.addEventListener('click', () => {
  elementCount--

  if (elementCount < 1) {
    elementCount = 1
  }

  update()
})

function update() {
  circles.forEach((circle, idx) => {
    if (idx < elementCount) {
      circle.classList.add('active')
    } else {
      circle.classList.remove('active')
    }
  })

  const actives = document.querySelectorAll('.active')

  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + '%'

  if (elementCount === 1) {
    prev.disabled = true
  } else if (elementCount === circles.length) {
    next.disabled = true
  } else {
    prev.disabled = false
    next.disabled = false
  }
}
