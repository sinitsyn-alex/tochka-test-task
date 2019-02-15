const swap = (str) => {
  let result = ''

  for (let idx = 0; idx < str.length; idx++) {
    if ((idx + 1) % 2 === 0) {
      result += str[idx] + str[idx - 1]
    }
  }
  str.length % 2 && (result += str[str.length - 1])
  return result
}

const swapReduce = (str) => {
  let result = [...str].reduce((acc, current, idx) => {
    if ((idx + 1) % 2 === 0) {
      acc += current + str[idx - 1]
    }
    return acc
  }, '')
  str.length % 2 && (result += str[str.length - 1])
  return result
}

const swapRecursive = (str) => {
  return function wrap (idx = 1, result = '') {
    // Условие завершения рекурсии
    if (str.length !== idx) {
      if ((idx + 1) % 2 === 0) {
        result += str[idx] + str[idx - 1]
      }
      return wrap(idx + 1, result)
    } else {
      str.length % 2 && (result += str[str.length - 1])
      return result
    }
  }()
}

// Tests
console.log('Test swap:', swap('apple') === 'palpe')
console.log('Test swap:', swap('lemonade') === 'elomaned')

console.log('Test swapReduce:', swapReduce('apple') === 'palpe')
console.log('Test swapReduce:', swapReduce('lemonade') === 'elomaned')

console.log('Test swapRecursive:', swapRecursive('apple') === 'palpe')
console.log('Test swapRecursive:', swapRecursive('lemonade') === 'elomaned')
