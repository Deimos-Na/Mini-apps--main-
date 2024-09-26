function userAge() {
  let age = prompt('Сколько вам лет?')

  if (!age) {
    alert('Вы ввели неправильное значение')
  } else if (age <= 0 || age <= 12) {
    alert('Привет, друг!')
  } else if (age >= 13) {
    alert('Добро пожаловать!')
  }
}

userAge()
