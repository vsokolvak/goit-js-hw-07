function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector('input')
const createBtnEls = document.querySelector('button[data-create]')
const destroyBtnEls = document.querySelector('button[data-destroy]')


createBtnEls.addEventListener('click', createEls)
destroyBtnEls.addEventListener('click', destroyEls)

function createEls() {
  if (inputEl.value < 0 || inputEl.value > 100) {
    alert('input value not valid')
    return null
  }
  destroyEls()
  createBoxes(inputEl.value)
  inputEl.value = ''
}

function createBoxes(amount) {
  const boxesArr = []
  let boxSize = 30
  for (let i = 0; i < amount; i++) {
    const newDivEl = document.createElement('div')
    newDivEl.style.width = `${boxSize}px`
    newDivEl.style.height = `${boxSize}px`
    newDivEl.style.background = getRandomHexColor()
    boxSize += 10
    boxesArr.push(newDivEl)
  }
  boxes.append(...boxesArr)
}

function destroyEls(){
  boxes.innerHTML = ''
}

