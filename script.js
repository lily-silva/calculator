const add = (a, b) => {
  return a + b
}

const subtract = (a, b) => {
  return a - b
}

const multiply = (a, b) => {
  return a * b
}

const divide = (a, b) => {
  console.log(a / b)
}

let values = []
let opr = ''
function vals() {
  const nums = document.querySelectorAll('.num')
  nums.forEach((num) => {
    num.addEventListener('click', function (e) {
      values.push(e.target.innerText)
      // return values
    })
  })
  operate()
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
    case opr === 'multiply':
      multiply(values[0], values[1])
      break;
      case subtract:
        subtract(values[0], values[1])
        break;
  }
}

