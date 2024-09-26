function num(z, x) {
  if (isNaN(z) || isNaN(x)) {
    return 'Одно или оба значения не являются числом'
  }
  return z * x
}

let res = num(10, 'd')
console.log(res)
