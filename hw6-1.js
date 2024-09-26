const number = [1, 5, 4, 10, 0, 3]

for (let i = 0; i < number.length; i++) {
  if (number[i] === 10) {
    console.log(number[i])
    break
  }
  console.log(number[i])
}
