function getSquares(arr) {
  return arr.map(num => num * num)
}

const numbers = [1, 2, 3, 4, 5]
const squares = getSquares(numbers)
console.log(squares)
