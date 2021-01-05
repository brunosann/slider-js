const s = el => document.querySelector(el)
const ss = el => document.querySelectorAll(el)

const items = ss('.item')
const qtItems = items.length
const slider = s('#slide')
let pause = false
let counter = 0

function addDots() {
  boxDots = s('.dots')
  items.forEach((item, index) => {
    const dot = document.createElement('div')
    dot.dataset.item = index
    dot.classList.add('boll')
    boxDots.append(dot)
  })
}
addDots()
const dots = ss('.dots .boll')

function itemActive(index) {
  items.forEach(item => item.classList.remove('active'))
  items[index].classList.add('active')
  dots.forEach(dot => dot.classList.remove('active'))
  dots[index].classList.add('active')
}
// init slide
items[counter].classList.add('active')
dots[counter].classList.add('active')

function loop() {
  if (pause) return
  if (counter >= qtItems - 1) {
    counter = 0 
  } else {
    counter++
  }
  itemActive(counter)
}

const loopInterval = setInterval(loop, 3000)

function changeItem() {
  const dotsBoll =  ss('.boll')
  dotsBoll.forEach(boll => boll.addEventListener('click', ({target}) => {
    counter = target.dataset.item
    itemActive(counter)
  }))
}
changeItem()

slider.addEventListener('mouseover', () => pause = true)
slider.addEventListener('mouseout', () => pause = false)