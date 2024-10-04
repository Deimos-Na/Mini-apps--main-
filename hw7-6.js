function randomGetNum(num) {
  const length = Math.floor(num / 2)
  const randomArray = []

  for (let i = 0; i < length; i++) {
    const randomNum = Math.floor(Math.random() * num)
    randomArray.push(randomNum)
  }

  return randomArray
}

const result = randomGetNum(10)
console.log(result)
