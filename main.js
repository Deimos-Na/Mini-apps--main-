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
function onClickMathGame() {
  while (true) {
    const num1 = Math.floor(Math.random() * 20) + 1
    const num2 = Math.floor(Math.random() * 20) + 1
    const operations = ['+', '-', '*', '/']
    const operation = operations[Math.floor(Math.random() * operations.length)]

    if (operation === '/') {
      while (num1 % num2 !== 0) {
        num2 = randomNumber(1, 20)
      }
    }

    const task = `${num1} ${operation} ${num2}`

    const correctAnswer = eval(task)

    const userAnswer = +prompt(`Реши задачку: ${task}`)

    if (userAnswer === correctAnswer) {
      alert('Правильно!')
    } else {
      alert(`Не правильно. Правильный ответ: ${correctAnswer}`)
    }

    if (!confirm('Продолжаем?)')) {
      alert('Досвидули)')
      break
    }
  }
}

// Переверни текст

//Камень, ножницы, бумага

//Простая викторина

//Генератор случайных чисел
