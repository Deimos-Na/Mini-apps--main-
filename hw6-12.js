function getLengths(arr) {
  return arr.map(str => str.length)
}

const words = ['собака', 'кошка', 'попугай']
const lengths = getLengths(words)
console.log(lengths)
