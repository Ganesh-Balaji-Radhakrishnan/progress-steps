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
}
