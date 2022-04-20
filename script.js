const total = document.getElementById('total')
let values = []
let opr = ''

const add = (a, b) => {
  return +a + +b
}

const subtract = (a, b) => {
  return a - b
}

const multiply = (a, b) => {
  return a * b
}

const divide = (a, b) => {
  return (a / b).toFixed(5)
}

function vals() {
  total.textContent = 0
  const nums = document.querySelectorAll('.num')
  nums.forEach((num) => {
    num.addEventListener('click', function (e) {
      values.push(e.target.innerText)
      total.textContent = e.target.innerText
    })
  })
  operate()
  clear()
}

function operate() {
  const math = document.querySelectorAll('.math')

  return math.forEach((el) => {
    el.addEventListener('click', function (el) {
      opr = el.target.id
    })
  })
}

function equals() {

  console.log(values)
  console.log(opr)

  switch (true) {
    case opr === 'divide':
      total.textContent = divide(values[0], values[1])
      break
    case opr === 'multiply':
      total.textContent = multiply(values[0], values[1])
      break
    case opr === 'subtract':
      total.textContent = subtract(values[0], values[1])
      break
    case opr === 'add':
      total.textContent = add(values[0], values[1])
      break
  }
  values = []
}

function clear() {
  const bah = document.getElementById('clear')
  bah.addEventListener('click', () => {
    total.textContent = 0
  })
}

