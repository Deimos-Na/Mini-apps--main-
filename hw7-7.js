function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const randomNumber = randomNum(5, 15)
console.log(randomNumber)

function getRandom(min, max) {
  return Math.ceil(Math.random() * (max - min)) + min - 1
}

const randNum = getRandom(5, 25)
console.log(randNum)
