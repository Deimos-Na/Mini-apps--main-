const numbers = [9, 8, 7, 6, 5]
const userGuess = prompt('Угадайте число:')

if (numbers.includes(Number(userGuess))) {
  alert('Угадал')
} else {
  alert('Не угадал')
}
