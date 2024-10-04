// Угадай число
function onClickRandom() {
  const randomNumber = Math.floor(Math.random() * 100) + 1
  let playerNumber = null
  while (true) {
    playerNumber = +prompt('Угадай число от 1 до 100')

    if (playerNumber === 0 || isNaN(playerNumber)) {
      if (playerNumber === 0) {
        alert('Досвидули!')
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
    const num1 = Math.floor(Math.random() * 10) + 11
    const num2 = Math.floor(Math.random() * 10) + 1
    const operations = ['+', '-', '*', '/']
    const operation = operations[Math.floor(Math.random() * operations.length)]

    if (operation === '/') {
      while (num1 % num2 !== 0) {
        num2 = Math.floor(Math.random() * 10) + 1
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
function reversedText() {
  const text = prompt('Введи текст, я его переверну')

  const reverseText = text.split('').reverse().join('')

  alert(`Твой текст наоборот: ${reverseText}`)
}

//Простая викторина
function quiz() {
  const quiz = [
    {
      question: 'Какой цвет у небо?',
      options: ['1. Красный', '2. Синий', '3. Зеленый'],
      correctAnswer: 2,
      correctText: 'Синий',
    },
    {
      question: 'Сколько дней в неделе?',
      options: ['1. Шесть', '2. Семь', '3. Восемь'],
      correctAnswer: 2,
      correctText: 'Семь',
    },
    {
      question: 'Сколько у человека пальцев на одной руке?',
      options: ['1. Четыре', '2. Пять', '3. Шесть'],
      correctAnswer: 2,
      correctText: 'Пять',
    },
  ]

  let correctAnswers = 0

  for (let i = 0; i < quiz.length; i++) {
    const userAnswer = prompt(
      `${quiz[i].question}\n${quiz[i].options.join('\n')}`
    ).toLowerCase()

    if (
      Number(userAnswer) === quiz[i].correctAnswer ||
      userAnswer === quiz[i].correctText.toLowerCase()
    ) {
      correctAnswers++
    }
  }

  alert(`Ты ответил правильно на ${correctAnswers} из ${quiz.length} вопросов.`)
}

//Камень, ножницы, бумага

function gameRockPaperScissors() {
  const option = ['камень', 'ножницы', 'бумага']

  while (true) {
    const userInput = prompt('1.камень, 2.ножницы или 3.бумага?').toLowerCase()

    let userChoice

    if (userInput === '1') {
      userChoice = 'камень'
    } else if (userInput === '2') {
      userChoice = 'ножницы'
    } else if (userInput === '3') {
      userChoice = 'бумага'
    } else if (option.includes(userInput)) {
      userChoice = userInput
    } else {
      alert('Некорректный выбор')
      continue
    }

    const computerChoice = option[Math.floor(Math.random() * option.length)]

    let result
    if (userChoice === computerChoice) {
      result = 'Ничья!'
    } else if (
      (userChoice === 'камень' && computerChoice === 'ножницы') ||
      (userChoice === 'ножницы' && computerChoice === 'бумага') ||
      (userChoice === 'бумага' && computerChoice === 'камень')
    ) {
      result = 'Ты выиграл'
    } else {
      result = 'Ты проиграл'
    }

    alert(`${result}
      Ты выбрал: ${userChoice}
      Я выбрал: ${computerChoice}
      `)

    const againGame = confirm('Продолжим?')
    if (!againGame) {
      alert('Досвидули)')
      break
    }
  }
}
//Генератор случайных чисел
