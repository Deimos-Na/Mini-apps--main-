// Угадай число
function onClickRandom() {
  const randomNumber = Math.floor(Math.random() * 100) + 1
  let playerNumber = null
  while (true) {
    playerNumber = +prompt('Угадай число от 1 до 100')

    if (playerNumber === 0 || isNaN(playerNumber)) {
      if (playerNumber === 0) {
        alert('Игра завершена!')
        break
      }
      alert('Введи число!')
      continue
    }

    if (playerNumber > randomNumber) {
      alert('Загаданное число меньше')
    } else if (playerNumber < randomNumber) {
      alert('Загаданное число больше')
    } else {
      alert('Ты угадал!))')
      break
    }
  }
}

//Простая арифметика

// Переверни текст

//Камень, ножницы, бумага

//Простая викторина

//Генератор случайных чисел
