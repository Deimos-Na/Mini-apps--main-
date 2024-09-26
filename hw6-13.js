function getNegativeNumbers(arr) {
  return arr.filter(num => num < 0)
}

const numbers = [3, -1, 4, -2, 0, -5]
const negativeNumbers = getNegativeNumbers(numbers)
console.log(negativeNumbers)
